(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{554:function(a,t,s){"use strict";s.r(t);var e=s(28),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"yaml-语法简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-语法简介"}},[a._v("#")]),a._v(" YAML 语法简介 "),s("Badge",{attrs:{text:"MonoLogueChi"}}),a._v(" "),s("Badge",{attrs:{text:"Finish"}})],1),a._v(" "),s("p",[a._v("使用 Hexo 并不需要掌握过多的 YAML 语法知识，只需要简单的了解一下就可以。")]),a._v(" "),s("h2",{attrs:{id:"markdown-文件内使用-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-文件内使用-yaml"}},[a._v("#")]),a._v(" Markdown 文件内使用 YAML")]),a._v(" "),s("p",[a._v("在 Hexo 中写文档，通常需要在头部写一些关于文章的信息，这些都是需要使用 YAML 语言来写的，例如")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 录制视频时显示按键\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token datetime number"}},[a._v("2018-10-28 22:54:43")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("软件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 随便水水"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("keywords")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" KeyCastOW 录屏技巧 按键显示\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("comments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提醒")]),a._v(" "),s("p",[a._v("此部分一般叫做  "),s("code",[a._v("Front-matter")]),a._v(" 。")])]),a._v(" "),s("p",[a._v("文章内部的 YAML 配置都是以  "),s("code",[a._v("---")]),a._v("  开始和结束的，而且，结束之后通常还要再有一行的空行，用以区分 Markdown 语法。")]),a._v(" "),s("h2",{attrs:{id:"config-yml-中使用-yaml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-yml-中使用-yaml"}},[a._v("#")]),a._v(" _config.yml 中使用 YAML")]),a._v(" "),s("p",[a._v("这个就太常见了，Hexo 的配置文件和主题的配置文件都需要使用 YAML 语言来写。")]),a._v(" "),s("h2",{attrs:{id:"基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[a._v("#")]),a._v(" 基本语法")]),a._v(" "),s("p",[a._v("YAML 使用键值对的形式记录信息，标准格式是")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" value\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("键")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 值\n")])])]),s("h3",{attrs:{id:"基本规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本规则"}},[a._v("#")]),a._v(" 基本规则")]),a._v(" "),s("ol",[s("li",[a._v("大小写敏感")]),a._v(" "),s("li",[s("strong",[a._v("使用缩进表示层级关系")])]),a._v(" "),s("li",[a._v("禁止使用 tab 缩进，只能使用空格键")]),a._v(" "),s("li",[a._v("缩进长度没有限制，只要元素对齐就表示这些元素属于一个层级")]),a._v(" "),s("li",[a._v("使用  "),s("code",[a._v("#")]),a._v("  表示注释")]),a._v(" "),s("li",[a._v("字符串可以不用引号标注（但是建议你最好还是加上引号）")])]),a._v(" "),s("p",[a._v("例如：")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hexo-tag-dplayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cdn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("api")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//api.prprpr.me/dplayer3/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("loop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" yes\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("screenshot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" yes\n")])])]),s("p",[a._v("其中  "),s("code",[a._v("hexo-tag-dplayer")]),a._v("  是最高一级的，在模板里一般表示为  "),s("code",[a._v("config.hexo-tag-dplayer")]),a._v(" ;"),s("br"),a._v("\n 观察缩进情况，可以发现  "),s("code",[a._v("cdn")]),a._v("  和  "),s("code",[a._v("default")]),a._v("  是同一级的，模板里一般表示为  "),s("code",[a._v("config.hexo-tag-dplayer.cdn")]),a._v("  和  "),s("code",[a._v("config.hexo-tag-dplayer.default")]),a._v(" ；"),s("br"),a._v("\n同理， "),s("code",[a._v("default")]),a._v("  下的三个选项又是一级，以此类推，只要记住缩进表示层级关系就可以了。")]),a._v(" "),s("h3",{attrs:{id:"三种数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三种数据结构"}},[a._v("#")]),a._v(" 三种数据结构")]),a._v(" "),s("h4",{attrs:{id:"scalar-纯量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scalar-纯量"}},[a._v("#")]),a._v(" scalar 纯量")]),a._v(" "),s("p",[a._v("scalar 不可再分割的量，这个你无需了解，因为了解了也没什么"),s("s",[a._v("卵")]),a._v("用。")]),a._v(" "),s("h4",{attrs:{id:"map-散列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map-散列表"}},[a._v("#")]),a._v(" map 散列表")]),a._v(" "),s("p",[a._v("键值对的集合，只要是出于同于缩进级别下的键值对，都可以称为一个 map （其实 map 也无需理解，因为这个太常见了，常见到你已经感觉不到它的存在了）")]),a._v(" "),s("p",[a._v("例如前面的  "),s("code",[a._v("cdn")]),a._v("  和  "),s("code",[a._v("default")]),a._v("  都在  "),s("code",[a._v("hexo-tag-dplayer")]),a._v("  之下，并且处于同一缩进级别，就可以称为 map ；"),s("br"),a._v("\nmap 有两种写法，最简单，也是最常用的就是前面的那种写法，如")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hexo-tag-dplayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cdn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" value\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" value\n")])])]),s("p",[a._v("等价于")]),a._v(" "),s("div",{pre:!0},[s("div",{pre:!0,attrs:{class:"language-yaml extra-class"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hexo-tag-dplayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cdn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者是")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hexo-tag-dplayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cdn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),s("p",[a._v("至于使用哪种写法，都是为了可读性。")]),a._v(" "),s("p",[a._v("例如在配置文件中，如果使用第二种写法，那所有配置都挤在一行，看都看不懂，而第一种写法缩进分明，一眼就能看出来层级关系；"),s("br"),a._v("\n但是在一些只需要很简单的配置的地方，比如 Hexo 文章开头的配置，第二种写法反而会可读性更高一些。")]),a._v(" "),s("h4",{attrs:{id:"list-数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-数组"}},[a._v("#")]),a._v(" list 数组")]),a._v(" "),s("p",[s("strong",[a._v("划重点")]),a._v("，这是本篇文章最有用的一节")]),a._v(" "),s("p",[a._v("list 的表示形式同样有两种")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" value1\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" value2\n")])])]),s("p",[a._v("或者")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("map 和 list 可以相互嵌套使用")]),a._v(" "),s("h3",{attrs:{id:"使用建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用建议"}},[a._v("#")]),a._v(" 使用建议")]),a._v(" "),s("p",[a._v("正如前面所说，使用哪种写法，都是为可读性服务的")]),a._v(" "),s("p",[a._v("我个人的建议是，当需要嵌套使用时，map 和 list 都尽量使用第一种写法，不需要嵌套使用时，尽量使用第二种写法，例如本篇文章的第一个例子")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 录制视频时显示按键\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token datetime number"}},[a._v("2018-10-28 22:54:43")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("软件"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 随便水水"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("keywords")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" KeyCastOW 录屏技巧 按键显示\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("comments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("---")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);