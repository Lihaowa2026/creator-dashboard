#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""用 pexpect 自动化 surge 部署"""

import pexpect
import sys

EMAIL = "1136638143@qq.com"
PASSWORD = "Cz2026#Work2026"
DOMAIN = "chuangzuo-zuotai.surge.sh"
DIR = "/workspace/creator-dashboard"

cmd = f"npx -y surge {DIR} --domain {DOMAIN}"
print(f"执行: {cmd}")

child = pexpect.spawn(cmd, timeout=60, encoding="utf-8")
child.logfile = sys.stdout

try:
    # 等待 email 提示
    child.expect("email:", timeout=30)
    child.sendline(EMAIL)
    
    # 等待 password 提示
    child.expect("password:", timeout=30)
    child.sendline(PASSWORD)
    
    # 如果要求确认密码
    index = child.expect(["password:", "project path", "domain", pexpect.EOF], timeout=30)
    if index == 0:
        child.sendline(PASSWORD)
        child.expect(["project path", "domain", pexpect.EOF], timeout=30)
    
    # 等待部署完成
    child.expect(pexpect.EOF, timeout=60)
    print("\n部署完成!")
except pexpect.TIMEOUT:
    print(f"\n超时，当前输出: {child.before}")
except pexpect.EOF:
    print(f"\n进程结束，输出: {child.before}")
