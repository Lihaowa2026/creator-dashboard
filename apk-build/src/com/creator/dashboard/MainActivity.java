package com.creator.dashboard;

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
