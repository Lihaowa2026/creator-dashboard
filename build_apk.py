#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
将 creator-dashboard 打包成 Android APK
使用最小化的 WebView 壳子
"""

import os
import subprocess
import shutil

ANDROID_HOME = "/opt/android-sdk"
BUILD_TOOLS = f"{ANDROID_HOME}/build-tools/34.0.0"
PLATFORM = f"{ANDROID_HOME}/platforms/android-34/android.jar"
PROJECT_DIR = "/workspace/apk-build"
KEYSTORE = f"{PROJECT_DIR}/release.keystore"
APK_UNSIGNED = f"{PROJECT_DIR}/app-unsigned.apk"
APK_ALIGNED = f"{PROJECT_DIR}/app-unsigned-aligned.apk"
APK_RELEASE = "/workspace/创作工作台.apk"

# 清理
if os.path.exists(PROJECT_DIR):
    shutil.rmtree(PROJECT_DIR)
os.makedirs(PROJECT_DIR)
os.makedirs(f"{PROJECT_DIR}/assets")
os.makedirs(f"{PROJECT_DIR}/res/values")
os.makedirs(f"{PROJECT_DIR}/res/mipmap")
os.makedirs(f"{PROJECT_DIR}/bin")

# 1. 复制 web 文件到 assets
shutil.copy("/workspace/creator-dashboard/index.html", f"{PROJECT_DIR}/assets/")
shutil.copy("/workspace/creator-dashboard/styles.css", f"{PROJECT_DIR}/assets/")
shutil.copy("/workspace/creator-dashboard/app.js", f"{PROJECT_DIR}/assets/")

# 2. AndroidManifest.xml
manifest = '''<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.creator.dashboard"
    android:versionCode="2"
    android:versionName="1.1">

    <uses-sdk android:minSdkVersion="21" android:targetSdkVersion="34" />

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:icon="@mipmap/ic_launcher"
        android:label="创作工作台"
        android:theme="@android:style/Theme.DeviceDefault.Light.NoActionBar"
        android:usesCleartextTraffic="true">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:screenOrientation="portrait"
            android:configChanges="orientation|screenSize|keyboardHidden">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
'''

with open(f"{PROJECT_DIR}/AndroidManifest.xml", "w", encoding="utf-8") as f:
    f.write(manifest)

# 3. strings.xml
strings = '''<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">创作工作台</string>
</resources>
'''

with open(f"{PROJECT_DIR}/res/values/strings.xml", "w", encoding="utf-8") as f:
    f.write(strings)

# 4. 生成简单的图标（用 python 生成 PNG）
from PIL import Image, ImageDraw, ImageFont

# 生成图标 192x192
img = Image.new("RGBA", (192, 192), (74, 124, 58, 255))
draw = ImageDraw.Draw(img)
# 画一个简单的图案
draw.rounded_rectangle([40, 40, 152, 152], radius=20, fill=(255, 255, 255, 255))
draw.text((70, 75), "工", fill=(74, 124, 58, 255))
# 保存为 mipmap
img.save(f"{PROJECT_DIR}/res/mipmap/ic_launcher.png")

# 5. MainActivity.java (编译成 dex)
# 我们用预编译的 dex 方式，直接写 smali 太复杂
# 改用编译 java -> class -> dex 的方式

# 先写 MainActivity.java
java_code = '''package com.creator.dashboard;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebSettings;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;

public class MainActivity extends Activity {
    private WebView webView;
    private boolean onlineLoaded = false;

    private String getKeyword(String url) {
        int idx = url.indexOf("keyword=");
        if (idx >= 0) {
            return url.substring(idx + 8);
        }
        return "";
    }

    private void fallbackToWeb(WebView view, String url) {
        String kw = getKeyword(url);
        if (url.startsWith("snssdk")) {
            view.loadUrl("https://www.douyin.com/search/" + kw);
        } else if (url.startsWith("bilibili")) {
            view.loadUrl("https://search.bilibili.com/all?keyword=" + kw);
        } else if (url.startsWith("xhsdiscover")) {
            view.loadUrl("https://www.xiaohongshu.com/search_result?keyword=" + kw);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        webView = new WebView(this);
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (url.startsWith("snssdk") || url.startsWith("bilibili") || url.startsWith("xhsdiscover")) {
                    try {
                        Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        startActivity(intent);
                        return true;
                    } catch (Exception e) {
                        fallbackToWeb(view, url);
                        return true;
                    }
                }
                if (url.startsWith("http")) {
                    return false;
                }
                try {
                    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    startActivity(intent);
                    return true;
                } catch (Exception e) {
                    return false;
                }
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                if (url.startsWith("http")) {
                    onlineLoaded = true;
                }
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                super.onReceivedError(view, request, error);
                if (!onlineLoaded) {
                    view.loadUrl("file:///android_asset/index.html");
                }
            }
        });

        // 先尝试加载在线版本，失败会自动回退到本地
        webView.loadUrl("https://distinction-wash-reception-advances.trycloudflare.com/");
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
'''

os.makedirs(f"{PROJECT_DIR}/src/com/creator/dashboard")
with open(f"{PROJECT_DIR}/src/com/creator/dashboard/MainActivity.java", "w", encoding="utf-8") as f:
    f.write(java_code)

print("文件结构准备完成")
print("开始编译...")

# 6. 编译 Java
env = os.environ.copy()
env["ANDROID_HOME"] = ANDROID_HOME
env["JAVA_HOME"] = "/root/.sdkman/candidates/java/current"

# 编译 java -> class
result = subprocess.run([
    "javac",
    "-source", "1.8",
    "-target", "1.8",
    "-cp", PLATFORM,
    "-d", f"{PROJECT_DIR}/bin/classes",
    f"{PROJECT_DIR}/src/com/creator/dashboard/MainActivity.java"
], env=env, capture_output=True, text=True)

if result.returncode != 0:
    print("javac 错误:", result.stderr)
    exit(1)
print("javac 完成")

# 7. 编译 class -> dex（包含所有 class 文件，包括匿名内部类）
import glob
class_files = glob.glob(f"{PROJECT_DIR}/bin/classes/com/creator/dashboard/*.class")
result = subprocess.run(
    ["java", "-cp", f"{BUILD_TOOLS}/lib/d8.jar", "com.android.tools.r8.D8",
     "--release",
     "--min-api", "21",
     "--output", f"{PROJECT_DIR}/bin"] + class_files,
    env=env, capture_output=True, text=True
)

if result.returncode != 0:
    print("d8 错误:", result.stderr)
    exit(1)
print("dex 完成")

# 8. 编译资源
result = subprocess.run([
    f"{BUILD_TOOLS}/aapt2", "compile",
    "--dir", f"{PROJECT_DIR}/res",
    "-o", f"{PROJECT_DIR}/bin/resources.zip"
], env=env, capture_output=True, text=True)

if result.returncode != 0:
    print("aapt2 compile 错误:", result.stderr)
    exit(1)
print("资源编译完成")

# 9. 链接
result = subprocess.run([
    f"{BUILD_TOOLS}/aapt2", "link",
    "-o", f"{PROJECT_DIR}/bin/resources.apk",
    "--manifest", f"{PROJECT_DIR}/AndroidManifest.xml",
    "-I", PLATFORM,
    "--java", f"{PROJECT_DIR}/gen",
    f"{PROJECT_DIR}/bin/resources.zip"
], env=env, capture_output=True, text=True)

if result.returncode != 0:
    print("aapt2 link 错误:", result.stderr)
    exit(1)
print("资源链接完成")

# 10. 打包 APK（未签名）
# 用 zip 把 resources.apk + dex + assets 合并
import zipfile

# 复制 resources.apk 为基础
shutil.copy(f"{PROJECT_DIR}/bin/resources.apk", APK_UNSIGNED)

# 往 APK 里添加 dex 和 assets
with zipfile.ZipFile(APK_UNSIGNED, "a") as zf:
    zf.write(f"{PROJECT_DIR}/bin/classes.dex", "classes.dex")
    zf.write(f"{PROJECT_DIR}/assets/index.html", "assets/index.html")
    zf.write(f"{PROJECT_DIR}/assets/styles.css", "assets/styles.css")
    zf.write(f"{PROJECT_DIR}/assets/app.js", "assets/app.js")

print("APK 打包完成（未签名）")

# 11. 生成签名 keystore
result = subprocess.run([
    "keytool",
    "-genkeypair",
    "-keystore", KEYSTORE,
    "-alias", "dashboard",
    "-keyalg", "RSA",
    "-keysize", "2048",
    "-validity", "36500",
    "-storepass", "123456",
    "-keypass", "123456",
    "-dname", "CN=CreatorDashboard, OU=App, O=Personal, L=CN, S=CN, C=CN"
], env=env, capture_output=True, text=True)

if result.returncode != 0:
    print("keytool 错误:", result.stderr)
    exit(1)
print("签名密钥生成完成")

# 12. zipalign
result = subprocess.run([
    f"{BUILD_TOOLS}/zipalign",
    "-v", "-p", "4",
    APK_UNSIGNED,
    APK_ALIGNED
], env=env, capture_output=True, text=True)

if result.returncode != 0:
    print("zipalign 错误:", result.stderr)
    exit(1)
print("对齐完成")

# 13. apksigner 签名
result = subprocess.run([
    f"{BUILD_TOOLS}/apksigner",
    "sign",
    "--ks", KEYSTORE,
    "--ks-key-alias", "dashboard",
    "--ks-pass", "pass:123456",
    "--key-pass", "pass:123456",
    "--out", APK_RELEASE,
    APK_ALIGNED
], env=env, capture_output=True, text=True)

if result.returncode != 0:
    print("apksigner 错误:", result.stderr)
    exit(1)
print("签名完成")

# 验证
result = subprocess.run([
    f"{BUILD_TOOLS}/apksigner",
    "verify",
    "--verbose",
    APK_RELEASE
], env=env, capture_output=True, text=True)

print("验证结果:", result.stdout)

print(f"\n✅ APK 已生成: {APK_RELEASE}")
print(f"文件大小: {os.path.getsize(APK_RELEASE)} 字节")
