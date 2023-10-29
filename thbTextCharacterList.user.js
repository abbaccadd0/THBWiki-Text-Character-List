// ==UserScript==
// @name                Classical THBWiki Character List
// @name:zh-CN          经典THBWiki角色列表
// @description         Restore old THBWiki character list
// @description:zh-CN   经典THBWiki角色列表，但或许……也有点新东西
// @home-url            https://github.com/abbaccadd0/THBWiki-Text-Character-List
// @namespace           abbaccadd0
// @version             231029.1310
// @author              abbaccadd0
// @license             MIT License
// @run-at              document-end
// @match               *://thwiki.cc/index.php?title=%E5%AE%98%E6%96%B9%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8*
// @match               *://thwiki.cc/%E5%AE%98%E6%96%B9%E8%A7%92%E8%89%B2%E5%88%97%E8%A1%A8*
// @updateURL           https://raw.githubusercontent.com/abbaccadd0/THBWiki-Text-Character-List/main/thbTextCharacterList.user.js
// @downloadURL         https://raw.githubusercontent.com/abbaccadd0/THBWiki-Text-Character-List/main/thbTextCharacterList.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementById('chara-list').style.wordBreak="keep-all";
    document.getElementById('chara-list').innerHTML = "<div class=chara-title>    <span class=title>官方角色列表</span></div> <div class=chara-filter style=word-break:keep-all>    <div class=chara-filter-item style=float:right;>        <button id=listMode type=button class=switch>多列模式</button>    </div><ul>    <li><a>主角二人组</a></li>    <ul>        <li>            <a href=/博丽灵梦 title=博丽灵梦 style=word-break:keep-all>博丽灵梦  </a>            <a href=/雾雨魔理沙 title=雾雨魔理沙 style=word-break:keep-all>雾雨魔理沙  </a>        </li>    </ul>    <li><a href=/东方灵异传 title=东方灵异传 style=word-break:keep-all>东方灵异传  </a></li>    <ul>        <li>            <a href=/博丽灵梦（旧作角色） title=博丽灵梦（旧作角色） style=word-break:keep-all>博丽灵梦（旧作角色）  </a>            <a href=/神玉 title=神玉 style=word-break:keep-all>神玉  </a>            <a href=/魅魔 title=魅魔 style=word-break:keep-all>魅魔  </a>            <a href=/菊理 title=菊理 style=word-break:keep-all>菊理  </a>            <a href=/矜羯罗 title=矜羯罗 style=word-break:keep-all>矜羯罗  </a>            <a href=/幽幻魔眼 title=幽幻魔眼 style=word-break:keep-all>幽幻魔眼  </a>            <a href=/依莉斯 title=依莉斯 style=word-break:keep-all>依莉斯  </a>            <a href=/萨丽爱尔 title=萨丽爱尔 style=word-break:keep-all>萨丽爱尔  </a>        </li>    </ul>    <li><a href=/东方封魔录 title=东方封魔录 style=word-break:keep-all>东方封魔录  </a></li>    <ul>        <li>            <a href=/玄爷 title=玄爷 style=word-break:keep-all>玄爷  </a>            <a href=/里香 title=里香 style=word-break:keep-all>里香  </a>            <a href=/明罗 title=明罗 style=word-break:keep-all>明罗  </a>            <a href=/雾雨魔理沙（旧作角色） title=雾雨魔理沙（旧作角色） style=word-break:keep-all>雾雨魔理沙（旧作角色）  </a>        </li>    </ul>    <li><a href=/东方梦时空 title=东方梦时空 style=word-break:keep-all>东方梦时空  </a></li>    <ul>        <li>            <a href=/爱莲 title=爱莲 style=word-break:keep-all>爱莲  </a>            <a href=/小兔姬 title=小兔姬 style=word-break:keep-all>小兔姬  </a>            <a href=/卡娜·安娜贝拉尔 title=卡娜·安娜贝拉尔 style=word-break:keep-all>卡娜·安娜贝拉尔  </a>            <a href=/朝仓理香子 title=朝仓理香子 style=word-break:keep-all>朝仓理香子  </a>            <a href=/北白河千百合 title=北白河千百合 style=word-break:keep-all>北白河千百合  </a>            <a href=/冈崎梦美 title=冈崎梦美 style=word-break:keep-all>冈崎梦美  </a>            <a href=/咪咪号 title=咪咪号 style=word-break:keep-all>咪咪号  </a>            <a href=/留琴 title=留琴 style=word-break:keep-all>留琴  </a>        </li>    </ul>    <li><a href=/东方幻想乡 title=东方幻想乡 style=word-break:keep-all>东方幻想乡  </a></li>    <ul>        <li>            <a href=/奥莲姬 title=奥莲姬 style=word-break:keep-all>奥莲姬  </a>            <a href=/胡桃 title=胡桃 style=word-break:keep-all>胡桃  </a>            <a href=/艾丽 title=艾丽 style=word-break:keep-all>艾丽  </a>            <a href=/幽香 title=幽香 style=word-break:keep-all>幽香  </a>            <a href=/梦月 title=梦月 style=word-break:keep-all>梦月  </a>            <a href=/幻月 title=幻月 style=word-break:keep-all>幻月  </a>        </li>    </ul>    <li><a href=/东方怪绮谈 title=东方怪绮谈 style=word-break:keep-all>东方怪绮谈  </a></li>    <ul>        <li>            <a href=/萨拉 title=萨拉 style=word-break:keep-all>萨拉  </a>            <a href=/露易兹 title=露易兹 style=word-break:keep-all>露易兹  </a>            <a href=/爱丽丝（旧作角色） title=爱丽丝（旧作角色） style=word-break:keep-all>爱丽丝（旧作角色）  </a>            <a href=/雪 title=雪 style=word-break:keep-all>雪  </a>            <a href=/舞 title=舞 style=word-break:keep-all>舞  </a>            <a href=/梦子 title=梦子 style=word-break:keep-all>梦子  </a>            <a href=/神绮 title=神绮 style=word-break:keep-all>神绮  </a>        </li>    </ul>    <li><a href=/东方红魔乡 title=东方红魔乡 style=word-break:keep-all>东方红魔乡  </a></li>    <ul>        <li>            <a href=/露米娅 title=露米娅 style=word-break:keep-all>露米娅  </a>            <a href=/大妖精 title=大妖精 style=word-break:keep-all>大妖精  </a>            <a href=/琪露诺 title=琪露诺 style=word-break:keep-all>琪露诺  </a>            <a href=/红美铃 title=红美铃 style=word-break:keep-all>红美铃  </a>            <a href=/小恶魔 title=小恶魔 style=word-break:keep-all>小恶魔  </a>            <a href=/帕秋莉·诺蕾姬 title=帕秋莉·诺蕾姬 style=word-break:keep-all>帕秋莉·诺蕾姬  </a>            <a href=/十六夜咲夜 title=十六夜咲夜 style=word-break:keep-all>十六夜咲夜  </a>            <a href=/蕾米莉亚·斯卡蕾特 title=蕾米莉亚·斯卡蕾特 style=word-break:keep-all>蕾米莉亚·斯卡蕾特  </a>            <a href=/芙兰朵露·斯卡蕾特 title=芙兰朵露·斯卡蕾特 style=word-break:keep-all>芙兰朵露·斯卡蕾特  </a>            <a href=/冴月麟 title=冴月麟 style=word-break:keep-all>冴月麟  </a>        </li>    </ul>    <li><a href=/东方妖妖梦 title=东方妖妖梦 style=word-break:keep-all>东方妖妖梦  </a></li>    <ul>        <li>            <a href=/蕾蒂·霍瓦特洛克 title=蕾蒂·霍瓦特洛克 style=word-break:keep-all>蕾蒂·霍瓦特洛克  </a>            <a href=/橙 title=橙 style=word-break:keep-all>橙  </a>            <a href=/爱丽丝·玛格特洛依德 title=爱丽丝·玛格特洛依德 style=word-break:keep-all>爱丽丝·玛格特洛依德  </a>            <a href=/莉莉霍瓦特 title=莉莉霍瓦特 style=word-break:keep-all>莉莉霍瓦特  </a>            <a href=/露娜萨·普莉兹姆利巴 title=露娜萨·普莉兹姆利巴 style=word-break:keep-all>露娜萨·普莉兹姆利巴  </a>            <a href=/梅露兰·普莉兹姆利巴 title=梅露兰·普莉兹姆利巴 style=word-break:keep-all>梅露兰·普莉兹姆利巴  </a>            <a href=/莉莉卡·普莉兹姆利巴 title=莉莉卡·普莉兹姆利巴 style=word-break:keep-all>莉莉卡·普莉兹姆利巴  </a>            <a href=/魂魄妖梦 title=魂魄妖梦 style=word-break:keep-all>魂魄妖梦  </a>            <a href=/西行寺幽幽子 title=西行寺幽幽子 style=word-break:keep-all>西行寺幽幽子  </a>            <a href=/八云蓝 title=八云蓝 style=word-break:keep-all>八云蓝  </a>            <a href=/八云紫 title=八云紫 style=word-break:keep-all>八云紫  </a>            <a href=/魂魄妖忌 title=魂魄妖忌 style=word-break:keep-all>魂魄妖忌  </a>            <a href=/蕾拉·普莉兹姆利巴 title=蕾拉·普莉兹姆利巴 style=word-break:keep-all>蕾拉·普莉兹姆利巴  </a>        </li>    </ul>    <li><a href=/东方萃梦想 title=东方萃梦想 style=word-break:keep-all>东方萃梦想  </a></li>    <ul>        <li>            <a href=/伊吹萃香 title=伊吹萃香 style=word-break:keep-all>伊吹萃香  </a>        </li>    </ul>    <li><a href=/东方永夜抄 title=东方永夜抄 style=word-break:keep-all>东方永夜抄  </a></li>    <ul>        <li>            <a href=/莉格露·奈特巴格 title=莉格露·奈特巴格 style=word-break:keep-all>莉格露·奈特巴格  </a>            <a href=/米斯蒂娅·萝蕾拉 title=米斯蒂娅·萝蕾拉 style=word-break:keep-all>米斯蒂娅·萝蕾拉  </a>            <a href=/上白泽慧音 title=上白泽慧音 style=word-break:keep-all>上白泽慧音  </a>            <a href=/因幡天为 title=因幡天为 style=word-break:keep-all>因幡天为  </a>            <a href=/铃仙·优昙华院·因幡 title=铃仙·优昙华院·因幡 style=word-break:keep-all>铃仙·优昙华院·因幡  </a>            <a href=/八意永琳 title=八意永琳 style=word-break:keep-all>八意永琳  </a>            <a href=/蓬莱山辉夜 title=蓬莱山辉夜 style=word-break:keep-all>蓬莱山辉夜  </a>            <a href=/藤原妹红 title=藤原妹红 style=word-break:keep-all>藤原妹红  </a>        </li>    </ul>    <li><a href=/东方文花帖(书籍) title=东方文花帖(书籍) style=word-break:keep-all>东方文花帖(书籍)  </a></li>    <ul>        <li>            <a href=/射命丸文 title=射命丸文 style=word-break:keep-all>射命丸文  </a>        </li>    </ul>    <li><a href=/东方花映塚 title=东方花映塚 style=word-break:keep-all>东方花映塚  </a></li>    <ul>        <li>            <a href=/梅蒂欣·梅兰可莉 title=梅蒂欣·梅兰可莉 style=word-break:keep-all>梅蒂欣·梅兰可莉  </a>            <a href=/风见幽香 title=风见幽香 style=word-break:keep-all>风见幽香  </a>            <a href=/小野塚小町 title=小野塚小町 style=word-break:keep-all>小野塚小町  </a>            <a href=/四季映姬·夜摩仙那度 title=四季映姬·夜摩仙那度 style=word-break:keep-all>四季映姬·夜摩仙那度  </a>        </li>    </ul>    <li><a href=/东方风神录 title=东方风神录 style=word-break:keep-all>东方风神录  </a></li>    <ul>        <li>            <a href=/秋静叶 title=秋静叶 style=word-break:keep-all>秋静叶  </a>            <a href=/秋穰子 title=秋穰子 style=word-break:keep-all>秋穰子  </a>            <a href=/键山雏 title=键山雏 style=word-break:keep-all>键山雏  </a>            <a href=/河城荷取 title=河城荷取 style=word-break:keep-all>河城荷取  </a>            <a href=/犬走椛 title=犬走椛 style=word-break:keep-all>犬走椛  </a>            <a href=/东风谷早苗 title=东风谷早苗 style=word-break:keep-all>东风谷早苗  </a>            <a href=/八坂神奈子 title=八坂神奈子 style=word-break:keep-all>八坂神奈子  </a>            <a href=/洩矢诹访子 title=洩矢诹访子 style=word-break:keep-all>洩矢诹访子  </a>        </li>    </ul>    <li><a href=/东方绯想天 title=东方绯想天 style=word-break:keep-all>东方绯想天  </a></li>    <ul>        <li>            <a href=/永江衣玖 title=永江衣玖 style=word-break:keep-all>永江衣玖  </a>            <a href=/比那名居天子 title=比那名居天子 style=word-break:keep-all>比那名居天子  </a>            <a href=/大鲶鱼 title=大鲶鱼 style=word-break:keep-all>大鲶鱼  </a>        </li>    </ul>    <li><a href=/东方地灵殿 title=东方地灵殿 style=word-break:keep-all>东方地灵殿  </a></li>    <ul>        <li>            <a href=/琪斯美 title=琪斯美 style=word-break:keep-all>琪斯美  </a>            <a href=/黑谷山女 title=黑谷山女 style=word-break:keep-all>黑谷山女  </a>            <a href=/水桥帕露西 title=水桥帕露西 style=word-break:keep-all>水桥帕露西  </a>            <a href=/星熊勇仪 title=星熊勇仪 style=word-break:keep-all>星熊勇仪  </a>            <a href=/古明地觉 title=古明地觉 style=word-break:keep-all>古明地觉  </a>            <a href=/火焰猫燐 title=火焰猫燐 style=word-break:keep-all>火焰猫燐  </a>            <a href=/灵乌路空 title=灵乌路空 style=word-break:keep-all>灵乌路空  </a>            <a href=/古明地恋 title=古明地恋 style=word-break:keep-all>古明地恋  </a>        </li>    </ul>    <li><a href=/东方星莲船 title=东方星莲船 style=word-break:keep-all>东方星莲船  </a></li>    <ul>        <li>            <a href=/娜兹玲 title=娜兹玲 style=word-break:keep-all>娜兹玲  </a>            <a href=/多多良小伞 title=多多良小伞 style=word-break:keep-all>多多良小伞  </a>            <a href=/云居一轮 title=云居一轮 style=word-break:keep-all>云居一轮  </a>            <a href=/村纱水蜜 title=村纱水蜜 style=word-break:keep-all>村纱水蜜  </a>            <a href=/寅丸星 title=寅丸星 style=word-break:keep-all>寅丸星  </a>            <a href=/圣白莲 title=圣白莲 style=word-break:keep-all>圣白莲  </a>            <a href=/封兽鵺 title=封兽鵺 style=word-break:keep-all>封兽鵺  </a>            <a href=/命莲 title=命莲 style=word-break:keep-all>命莲  </a>        </li>    </ul>    <li><a href=/东方文花帖DS title=东方文花帖DS style=word-break:keep-all>东方文花帖DS  </a></li>    <ul>        <li>            <a href=/姬海棠果 title=姬海棠果 style=word-break:keep-all>姬海棠果  </a>        </li>    </ul>    <li><a href=/东方神灵庙 title=东方神灵庙 style=word-break:keep-all>东方神灵庙  </a></li>    <ul>        <li>            <a href=/幽谷响子 title=幽谷响子 style=word-break:keep-all>幽谷响子  </a>            <a href=/宫古芳香 title=宫古芳香 style=word-break:keep-all>宫古芳香  </a>            <a href=/霍青娥 title=霍青娥 style=word-break:keep-all>霍青娥  </a>            <a href=/苏我屠自古 title=苏我屠自古 style=word-break:keep-all>苏我屠自古  </a>            <a href=/物部布都 title=物部布都 style=word-break:keep-all>物部布都  </a>            <a href=/丰聪耳神子 title=丰聪耳神子 style=word-break:keep-all>丰聪耳神子  </a>            <a href=/二岩猯藏 title=二岩猯藏 style=word-break:keep-all>二岩猯藏  </a>        </li>    </ul>    <li><a href=/东方心绮楼 title=东方心绮楼 style=word-break:keep-all>东方心绮楼  </a></li>    <ul>        <li>            <a href=/秦心 title=秦心 style=word-break:keep-all>秦心  </a>            <a href=/秦河胜 title=秦河胜 style=word-break:keep-all>秦河胜  </a>        </li>    </ul>    <li><a href=/东方辉针城 title=东方辉针城 style=word-break:keep-all>东方辉针城  </a></li>    <ul>        <li>            <a href=/若鹭姬 title=若鹭姬 style=word-break:keep-all>若鹭姬  </a>            <a href=/赤蛮奇 title=赤蛮奇 style=word-break:keep-all>赤蛮奇  </a>            <a href=/今泉影狼 title=今泉影狼 style=word-break:keep-all>今泉影狼  </a>            <a href=/九十九弁弁 title=九十九弁弁 style=word-break:keep-all>九十九弁弁  </a>            <a href=/九十九八桥 title=九十九八桥 style=word-break:keep-all>九十九八桥  </a>            <a href=/鬼人正邪 title=鬼人正邪 style=word-break:keep-all>鬼人正邪  </a>            <a href=/少名针妙丸 title=少名针妙丸 style=word-break:keep-all>少名针妙丸  </a>            <a href=/堀川雷鼓 title=堀川雷鼓 style=word-break:keep-all>堀川雷鼓  </a>        </li>    </ul>    <li><a href=/东方深秘录 title=东方深秘录 style=word-break:keep-all>东方深秘录  </a></li>    <ul>        <li>            <a href=/宇佐见堇子 title=宇佐见堇子 style=word-break:keep-all>宇佐见堇子  </a>        </li>    </ul>    <li><a href=/东方绀珠传 title=东方绀珠传 style=word-break:keep-all>东方绀珠传  </a></li>    <ul>        <li>            <a href=/清兰 title=清兰 style=word-break:keep-all>清兰  </a>            <a href=/铃瑚 title=铃瑚 style=word-break:keep-all>铃瑚  </a>            <a href=/哆来咪·苏伊特 title=哆来咪·苏伊特 style=word-break:keep-all>哆来咪·苏伊特  </a>            <a href=/稀神探女 title=稀神探女 style=word-break:keep-all>稀神探女  </a>            <a href=/克劳恩皮丝 title=克劳恩皮丝 style=word-break:keep-all>克劳恩皮丝  </a>            <a href=/纯狐 title=纯狐 style=word-break:keep-all>纯狐  </a>            <a href=/赫卡提亚·拉碧斯拉祖利 title=赫卡提亚·拉碧斯拉祖利 style=word-break:keep-all>赫卡提亚·拉碧斯拉祖利  </a>            <a href=/后羿 title=后羿 style=word-break:keep-all>后羿  </a>        </li>    </ul>    <li><a href=/东方凭依华 title=东方凭依华 style=word-break:keep-all>东方凭依华  </a></li>    <ul>        <li>            <a href=/依神女苑 title=依神女苑 style=word-break:keep-all>依神女苑  </a>            <a href=/依神紫苑 title=依神紫苑 style=word-break:keep-all>依神紫苑  </a>        </li>    </ul>    <li><a href=/东方天空璋 title=东方天空璋 style=word-break:keep-all>东方天空璋  </a></li>    <ul>        <li>            <a href=/爱塔妮缇拉尔瓦 title=爱塔妮缇拉尔瓦 style=word-break:keep-all>爱塔妮缇拉尔瓦  </a>            <a href=/坂田合欢 title=坂田合欢 style=word-break:keep-all>坂田合欢  </a>            <a href=/高丽野阿吽 title=高丽野阿吽 style=word-break:keep-all>高丽野阿吽  </a>            <a href=/矢田寺成美 title=矢田寺成美 style=word-break:keep-all>矢田寺成美  </a>            <a href=/尔子田里乃 title=尔子田里乃 style=word-break:keep-all>尔子田里乃  </a>            <a href=/丁礼田舞 title=丁礼田舞 style=word-break:keep-all>丁礼田舞  </a>            <a href=/摩多罗隐岐奈 title=摩多罗隐岐奈 style=word-break:keep-all>摩多罗隐岐奈  </a>        </li>    </ul>    <li><a href=/东方鬼形兽 title=东方鬼形兽 style=word-break:keep-all>东方鬼形兽  </a></li>    <ul>        <li>            <a href=/戎璎花 title=戎璎花 style=word-break:keep-all>戎璎花  </a>            <a href=/牛崎润美 title=牛崎润美 style=word-break:keep-all>牛崎润美  </a>            <a href=/庭渡久侘歌 title=庭渡久侘歌 style=word-break:keep-all>庭渡久侘歌  </a>            <a href=/吉吊八千慧 title=吉吊八千慧 style=word-break:keep-all>吉吊八千慧  </a>            <a href=/杖刀偶磨弓 title=杖刀偶磨弓 style=word-break:keep-all>杖刀偶磨弓  </a>            <a href=/埴安神袿姬 title=埴安神袿姬 style=word-break:keep-all>埴安神袿姬  </a>            <a href=/骊驹早鬼 title=骊驹早鬼 style=word-break:keep-all>骊驹早鬼  </a>        </li>    </ul>    <li><a href=/东方刚欲异闻 title=东方刚欲异闻 style=word-break:keep-all>东方刚欲异闻  </a></li>    <ul>        <li>            <a href=/饕餮尤魔 title=饕餮尤魔 style=word-break:keep-all>饕餮尤魔  </a>        </li>    </ul>    <li><a href=/东方虹龙洞 title=东方虹龙洞 style=word-break:keep-all>东方虹龙洞  </a></li>    <ul>        <li>            <a href=/豪德寺三花 title=豪德寺三花 style=word-break:keep-all>豪德寺三花  </a>            <a href=/山城高岭 title=山城高岭 style=word-break:keep-all>山城高岭  </a>            <a href=/驹草山如 title=驹草山如 style=word-break:keep-all>驹草山如  </a>            <a href=/玉造魅须丸 title=玉造魅须丸 style=word-break:keep-all>玉造魅须丸  </a>            <a href=/菅牧典 title=菅牧典 style=word-break:keep-all>菅牧典  </a>            <a href=/饭纲丸龙 title=饭纲丸龙 style=word-break:keep-all>饭纲丸龙  </a>            <a href=/天弓千亦 title=天弓千亦 style=word-break:keep-all>天弓千亦  </a>            <a href=/姬虫百百世 title=姬虫百百世 style=word-break:keep-all>姬虫百百世  </a>        </li>    </ul>    <li><a href=/东方兽王园 title=东方兽王园 style=word-break:keep-all>东方兽王园  </a></li>    <ul>        <li>            <a href=/孙美天 title=孙美天 style=word-break:keep-all>孙美天  </a>            <a href=/三头慧之子 title=三头慧之子 style=word-break:keep-all>三头慧之子  </a>            <a href=/天火人血枪 title=天火人血枪 style=word-break:keep-all>天火人血枪  </a>            <a href=/豫母都日狭美 title=豫母都日狭美 style=word-break:keep-all>豫母都日狭美  </a>            <a href=/日白残无 title=日白残无 style=word-break:keep-all>日白残无  </a>        </li>    </ul>    <li><a href=/东方香霖堂 title=东方香霖堂 style=word-break:keep-all>东方香霖堂  </a></li>    <ul>        <li>            <a href=/森近霖之助 title=森近霖之助 style=word-break:keep-all>森近霖之助  </a>            <a href=/无名的读书妖怪 title=无名的读书妖怪 style=word-break:keep-all>无名的读书妖怪  </a>        </li>    </ul>    <li><a href=/东方三月精 ～ Eastern and Little Nature Deity. title=东方三月精 ～ Eastern and Little Nature Deity. style=word-break:keep-all>东方三月精 ～ Eastern and Little Nature Deity.  </a></li>    <ul>        <li>            <a href=/桑尼米尔克 title=桑尼米尔克 style=word-break:keep-all>桑尼米尔克  </a>            <a href=/露娜切露德 title=露娜切露德 style=word-break:keep-all>露娜切露德  </a>            <a href=/斯塔萨菲雅 title=斯塔萨菲雅 style=word-break:keep-all>斯塔萨菲雅  </a>        </li>    </ul>    <li><a href=/东方儚月抄(小说) title=东方儚月抄(小说) style=word-break:keep-all>东方儚月抄(小说)  </a></li>    <ul>        <li>            <a href=/绵月丰姬 title=绵月丰姬 style=word-break:keep-all>绵月丰姬  </a>            <a href=/绵月依姬 title=绵月依姬 style=word-break:keep-all>绵月依姬  </a>            <a href=/Reisen title=Reisen style=word-break:keep-all>Reisen  </a>            <a href=/岩笠 title=岩笠 style=word-break:keep-all>岩笠  </a>            <a href=/月夜见 title=月夜见 style=word-break:keep-all>月夜见  </a>            <a href=/石长姬 title=石长姬 style=word-break:keep-all>石长姬  </a>            <a href=/木花咲耶姬 title=木花咲耶姬 style=word-break:keep-all>木花咲耶姬  </a>            <a href=/瑞江浦岛子 title=瑞江浦岛子 style=word-break:keep-all>瑞江浦岛子  </a>        </li>    </ul>    <li><a href=/东方儚月抄(漫画) title=东方儚月抄(漫画) style=word-break:keep-all>东方儚月抄(漫画)  </a></li>    <ul>        <li>            <a href=/嫦娥 title=嫦娥 style=word-break:keep-all>嫦娥  </a>        </li>    </ul>    <li><a href=/东方求闻史纪 title=东方求闻史纪 style=word-break:keep-all>东方求闻史纪  </a></li>    <ul>        <li>            <a href=/稗田阿求 title=稗田阿求 style=word-break:keep-all>稗田阿求  </a>            <a href=/龙神 title=龙神 style=word-break:keep-all>龙神  </a>        </li>    </ul>    <li><a href=/东方茨歌仙 title=东方茨歌仙 style=word-break:keep-all>东方茨歌仙  </a></li>    <ul>        <li>            <a href=/茨木华扇 title=茨木华扇 style=word-break:keep-all>茨木华扇  </a>            <a href=/假扮魔理沙的妖狐 title=假扮魔理沙的妖狐 style=word-break:keep-all>假扮魔理沙的妖狐  </a>            <a href=/运松翁 title=运松翁 style=word-break:keep-all>运松翁  </a>            <a href=/万岁乐 title=万岁乐 style=word-break:keep-all>万岁乐  </a>        </li>    </ul>    <li><a href=/东方铃奈庵 title=东方铃奈庵 style=word-break:keep-all>东方铃奈庵  </a></li>    <ul>        <li>            <a href=/本居小铃 title=本居小铃 style=word-break:keep-all>本居小铃  </a>            <a href=/烟烟罗 title=烟烟罗 style=word-break:keep-all>烟烟罗  </a>            <a href=/卓柏卡布拉 title=卓柏卡布拉 style=word-break:keep-all>卓柏卡布拉  </a>            <a href=/邪龙 title=邪龙 style=word-break:keep-all>邪龙  </a>            <a href=/沓颊 title=沓颊 style=word-break:keep-all>沓颊  </a>            <a href=/怨灵少女 title=怨灵少女 style=word-break:keep-all>怨灵少女  </a>            <a href=/年幼的妖狐 title=年幼的妖狐 style=word-break:keep-all>年幼的妖狐  </a>            <a href=/蟒蛇 title=蟒蛇 style=word-break:keep-all>蟒蛇  </a>            <a href=/易者 title=易者 style=word-break:keep-all>易者  </a>            <a href=/抗抑郁药大叔 title=抗抑郁药大叔 style=word-break:keep-all>抗抑郁药大叔  </a>            <a href=/盐家老板 title=盐家老板 style=word-break:keep-all>盐家老板  </a>        </li>    </ul>    <li><a href=/东方智灵奇传 title=东方智灵奇传 style=word-break:keep-all>东方智灵奇传  </a></li>    <ul>        <li>            <a href=/宫出口瑞灵 title=宫出口瑞灵 style=word-break:keep-all>宫出口瑞灵  </a>        </li>    </ul>    <li><a href=/东方醉蝶华 title=东方醉蝶华 style=word-break:keep-all>东方醉蝶华  </a></li>    <ul>        <li>            <a href=/奥野田美宵 title=奥野田美宵 style=word-break:keep-all>奥野田美宵  </a>            <a href=/鲵吞亭店主 title=鲵吞亭店主 style=word-break:keep-all>鲵吞亭店主  </a>        </li>    </ul>    <li><a href=/莲台野夜行 title=莲台野夜行 style=word-break:keep-all>莲台野夜行  </a></li>    <ul>        <li>            <a href=/宇佐见莲子 title=宇佐见莲子 style=word-break:keep-all>宇佐见莲子  </a>            <a href=/玛艾露贝莉·赫恩 title=玛艾露贝莉·赫恩 style=word-break:keep-all>玛艾露贝莉·赫恩  </a>        </li>    </ul>    <li><a href=/蓬莱人形 title=蓬莱人形 style=word-break:keep-all>蓬莱人形  </a></li>    <ul>        <li>            <a href=/蓬莱人形#封面角色 title=蓬莱人形#封面角色 style=word-break:keep-all>蓬莱人形#封面角色  </a>            <a href=/蓬莱人形#封面角色 title=蓬莱人形#封面角色 style=word-break:keep-all>蓬莱人形#封面角色  </a>            <a href=/小丑 title=小丑 style=word-break:keep-all>小丑  </a>            <a href=/正直者 title=正直者 style=word-break:keep-all>正直者  </a>        </li>    </ul></ul></div>";
    document.getElementById("listMode").addEventListener("click", listSwitch);
})();
var mode = true;
function listSwitch() {
  if (mode) {
    this.classList.remove("switch");
    this.classList.add("switch", "disabled");
    this.textContent = "单列模式";
    mode = false;
    console.log("切换至灰色");
  } else {
    this.classList.remove("switch", "disabled");
    this.classList.add("switch");
    this.textContent = "多列模式";
    mode = true;
    console.log("切换至彩色");
  };
};