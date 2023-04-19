# -*- coding: UTF-8 -*-
import numpy as np
import os
import requests
import re
from datetime import datetime

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.0.0"
}
url = "https://thwiki.cc/index.php?title=%E5%AE%98%E6%96%B9%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8&setlang=zh"

res = requests.get(url, headers=headers).text
res.encode(encoding="UTF-8", errors="ignore")
thb = open("thbChara.html", "w+", encoding="UTF-8")
thb.write(res)
thb.close()

thb = open("thbChara.html", "r", encoding="UTF-8")
htmlFile = thb.read()

charaList1 = re.findall(r"<div\sdata-tag=\"(.*?)\"\sdata-chara=\"(.*?)\"", htmlFile)
charaList2 = re.findall(r"span\sclass=\"chara-project\"\stitle=\"(.*?)\"", htmlFile)
part1 = np.array(charaList1)
part2 = np.array(charaList2)
fullList = np.append([part1[:, 0]], [part2], axis=0)
fullList = np.append(fullList, [part1[:, 1]], axis=0)
fullList = np.transpose(fullList)
# os.systemp("PAUSE")

oldCharaList = open("oldCharaList.html", "w+", encoding="UTF-8")
x = 0
y = 0
i = 0
j = 0
oldCharaList.write(
    "<div class=chara-title>\n    <span class=title>官方角色列表</span>\n</div> \n<div class=chara-filter style=word-break:keep-all>\n    <div class=chara-filter-item style=float:right;>\n        <button id=listMode type=button class=switch>多列模式</button>\n    </div>"
)
oldCharaList.write("<ul>\n")

# 写入主角组，我不记得为啥要分开写了……
# 不过既然能运行，那就还是别动了（
# 更新：将主角组作品名修改为“主角”
while y == 0:
    oldCharaList.write("    <li>")
    """
    oldCharaList.write(
        "<a href=/"
        + fullList[y, 1]
        + " title="
        + fullList[y, 1]
        + " style=word-break:keep-all>"
        + fullList[y, 1]
        + "</a>"
        "<a>主角</a>"
    )
    """
    oldCharaList.write("<a>主角二人组</a>")
    oldCharaList.write("</li>\n")
    oldCharaList.write("    <ul>\n")

    oldCharaList.write("        <li>\n")
    oldCharaList.write(
        "            <a href=/"
        + fullList[y, 2]
        + " title="
        + fullList[y, 2]
        + " style=word-break:keep-all>"
        + fullList[y, 2]
        + "  </a>\n"
    )
    print(y, fullList[y, 2])
    y += 1
    while fullList[y, 1] == fullList[y - 1, 1]:
        oldCharaList.write(
            "            <a href=/"
            + fullList[y, 2]
            + " title="
            + fullList[y, 2]
            + " style=word-break:keep-all>"
            + fullList[y, 2]
            + "  </a>\n"
        )
        print(y, fullList[y, 2])
        y += 1
    oldCharaList.write("        </li>\n")
    oldCharaList.write("    </ul>\n")

# 写入其他角色
while y < fullList.shape[0]:
    if fullList[y, 1] != fullList[y - 1, 1]:
        oldCharaList.write("    <li>")
        oldCharaList.write(
            "<a href=/"
            + fullList[y, 1]
            + " title="
            + fullList[y, 1]
            + " style=word-break:keep-all>"
            + fullList[y, 1]
            + "  </a></li>\n"
        )
        oldCharaList.write("    <ul>\n")
        j = 1
        oldCharaList.write("        <li>\n")
        oldCharaList.write(
            "            <a href=/"
            + fullList[y, 2]
            + " title="
            + fullList[y, 2]
            + " style=word-break:keep-all>"
            + fullList[y, 2]
            + "  </a>\n"
        )
        print(y, fullList[y, 2])
        y += 1

    while fullList[y, 1] == fullList[y - 1, 1]:
        oldCharaList.write(
            "            <a href=/"
            + fullList[y, 2]
            + " title="
            + fullList[y, 2]
            + " style=word-break:keep-all>"
            + fullList[y, 2]
            + "  </a>\n"
        )
        print(y, fullList[y, 2])
        y += 1
        if y == fullList.shape[0]:
            break
    oldCharaList.write("        </li>\n")
    if j == 1:
        oldCharaList.write("    </ul>\n")
        j = 0
oldCharaList.write("</ul>\n</div>\n")
oldCharaList.close()

oldCharaList = open("oldCharaList.html", "r", encoding="UTF-8")
classicalList = oldCharaList.read()
temp = classicalList.replace("\n", "")
now = datetime.now()
listJSVersion = now.strftime("%y%m%d.%H%M")
listJS = open("thbTextCharacterList.user.js", "w+", encoding="UTF-8")
listJS.write(
    "// ==UserScript==\n// @name                Classical THBWiki Character List\n// @name:zh-CN          经典THBWiki角色列表\n// @description         Restore old THBWiki character list\n// @description:zh-CN   经典THBWiki角色列表，但或许……也有点新东西\n// @home-url            https://github.com/abbaccadd0/THBWiki-Text-Character-List\n// @namespace           abbaccadd0\n// @version             "
    + listJSVersion
    + "\n"
    + "// @author              abbaccadd0\n// @license             MIT License\n// @run-at              document-end\n// @match               *://thwiki.cc/index.php?title=%E5%AE%98%E6%96%B9%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8*\n// @match               *://thwiki.cc/%E5%AE%98%E6%96%B9%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8*\n// @updateURL           https://raw.githubusercontent.com/abbaccadd0/THBWiki-Text-Character-List/main/thbTextCharacterList.user.js\n// @downloadURL         https://raw.githubusercontent.com/abbaccadd0/THBWiki-Text-Character-List/main/thbTextCharacterList.user.js\n// ==/UserScript==\n\n"
    + "(function() {\n    'use strict';\n\n    // Your code here...\n    document.getElementById('chara-list').style.wordBreak=\"keep-all\";\n    document.getElementById('chara-list').innerHTML = \""
    + temp
    + '";\n'
    + '    document.getElementById("listMode").addEventListener("click", listSwitch);\n'
    + "})();\n"
    + 'var mode = true;\nfunction listSwitch() {\n  if (mode) {\n    this.classList.remove("switch");\n    this.classList.add("switch", "disabled");\n    this.textContent = "单列模式";\n    mode = false;\n    console.log("切换至灰色");\n  } else {\n    this.classList.remove("switch", "disabled");\n    this.classList.add("switch");\n    this.textContent = "多列模式";\n    mode = true;\n    console.log("切换至彩色");\n  };\n};'
)
# 删除临时文件
os.remove("thbChara.html")
os.remove("oldCharaList.html")
