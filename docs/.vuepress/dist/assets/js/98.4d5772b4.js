(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{651:function(_,v,t){"use strict";t.r(v);var s=t(13),e=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"💬-序言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💬-序言"}},[_._v("#")]),_._v(" 💬 序言")]),_._v(" "),t("p",[_._v("平常我们在加载网页的时候，首先需要先加载网页代码，之后渲染出页面，在这个期间会执行若干个 "),t("code",[_._v("JS")]),_._v(" 。那么，如果想要让网页呈现速度和渲染速度快，我们就得保证我们的代码在浏览器这个运行环境当中"),t("strong",[_._v("稳定且高效")]),_._v("。这就谈到一个前端性能优化的问题。")]),_._v(" "),t("p",[t("strong",[_._v("以下这篇文章将讲解一些关于性能优化的常考题，欢迎大家查阅~")])]),_._v(" "),t("h1",{attrs:{id:"💯-思维导图抢先看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💯-思维导图抢先看"}},[_._v("#")]),_._v(" 💯 思维导图抢先看")]),_._v(" "),t("p",[_._v("我们先用一张思维导图来梳理一遍知识点。"),t("strong",[_._v("详情见下图 👇")]),_._v(" "),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/290f316c87ad4c08995d3ac15b769703.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"性能优化"}})]),_._v(" "),t("p",[_._v("思维导图收进囊中了。现在，我们一起来看常见的面试题解答~")]),_._v(" "),t("h1",{attrs:{id:"👁️‍🗨️-一、html、css、js、jq-优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#👁️‍🗨️-一、html、css、js、jq-优化"}},[_._v("#")]),_._v(" 👁️‍🗨️ 一、html、css、js、jq 优化")]),_._v(" "),t("h3",{attrs:{id:"_1、针对-html-如何优化性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、针对-html-如何优化性能"}},[_._v("#")]),_._v(" 1、针对 HTML，如何优化性能？")]),_._v(" "),t("p",[t("strong",[_._v("具体方法如下：")])]),_._v(" "),t("p",[t("strong",[_._v("（1）")]),_._v(" 对于资源加载，"),t("strong",[_._v("按需加载")]),_._v("和"),t("strong",[_._v("异步加载")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("（2）")]),_._v(" 首次加载的资源不超过 "),t("code",[_._v("1024KB(1M)")]),_._v(" ，即越小越好。")]),_._v(" "),t("p",[t("strong",[_._v("（3）")]),_._v(" 压缩 "),t("code",[_._v("HTML、CSS、 JavaScript")]),_._v(" 文件。")]),_._v(" "),t("p",[t("strong",[_._v("（4）")]),_._v(" 减少 "),t("code",[_._v("DOM")]),_._v(" 节点。")]),_._v(" "),t("p",[t("strong",[_._v("（5）")]),_._v(" 避免空 "),t("code",[_._v("src")]),_._v("（空 "),t("code",[_._v("src")]),_._v(" 在部分浏览器中会导致无效请求）。")]),_._v(" "),t("p",[t("strong",[_._v("（6）")]),_._v(" 避免 "),t("code",[_._v("30")]),_._v(" 、 "),t("code",[_._v("40")]),_._v(" 、 "),t("code",[_._v("50")]),_._v(" 请求错误。")]),_._v(" "),t("p",[t("strong",[_._v("（7）")]),_._v(" 添加 "),t("code",[_._v("Favicon.ico")]),_._v("，如果没有设置图标 "),t("code",[_._v("ico")]),_._v(" ，则默认的图标会导致发送一个 404 或者 500 的请求错误。")]),_._v(" "),t("h3",{attrs:{id:"_2、针对-css-如何优化性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、针对-css-如何优化性能"}},[_._v("#")]),_._v(" 2、针对 CSS，如何优化性能？")]),_._v(" "),t("p",[t("strong",[_._v("具体优化方法如下：")])]),_._v(" "),t("p",[t("strong",[_._v("（1）")]),_._v(" 正确使用 "),t("code",[_._v("display")]),_._v(" 属性， "),t("code",[_._v("display")]),_._v(" 属性会影响页面的渲染，因此要注意以下几方面。")]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("display:inline 后不应该再使用 width、 height、 margin、 padding和float 。\ndisplay:inline-block 后不应该再使用 float。\ndisplay:block 后不应该再使用 vertical-align。\ndisplay:table-* 后不应该再使用 margin或者float。\n")])])]),t("p",[t("strong",[_._v("（2）")]),_._v(" 不滥用 "),t("code",[_._v("float")]),_._v(" 。")]),_._v(" "),t("p",[t("strong",[_._v("（3）")]),_._v(" 不声明过多的 "),t("code",[_._v("font-size")]),_._v(" 。")]),_._v(" "),t("p",[t("strong",[_._v("（4）")]),_._v(" 当"),t("strong",[_._v("值为 0")]),_._v("时不需要单位。")]),_._v(" "),t("p",[t("strong",[_._v("（5）")]),_._v(" 将样式表放在"),t("strong",[_._v("页面顶部")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("（6）")]),_._v(" 使用"),t("code",[_._v("less")]),_._v(" 、"),t("code",[_._v("scss")]),_._v(" 表达式。")]),_._v(" "),t("p",[t("strong",[_._v("（7）")]),_._v(" 使用 "),t("code",[_._v("link")]),_._v(" 不使用 "),t("code",[_._v("@import")]),_._v(" 引入样式。")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("link")]),_._v(" 是 "),t("code",[_._v("HTML")]),_._v(" 方式，"),t("code",[_._v("@import")]),_._v(" 是 "),t("code",[_._v("CSS")]),_._v(" 方式；")]),_._v(" "),t("li",[t("code",[_._v("link")]),_._v(" 最大限度支持并行下载，"),t("code",[_._v("@import")]),_._v(" 过多嵌套会导致串行下载，会出现 "),t("code",[_._v("FOUC")]),_._v(" （文档样式短暂失效）；")]),_._v(" "),t("li",[_._v("浏览器对 "),t("code",[_._v("link")]),_._v(" 支持早于 "),t("code",[_._v("@import")]),_._v(" ，可以使用 "),t("code",[_._v("@import")]),_._v(" 对老浏览器隐藏样式；")]),_._v(" "),t("li",[_._v("总体来说："),t("code",[_._v("link")]),_._v(" 优于 "),t("code",[_._v("@import")]),_._v(" ，且 "),t("code",[_._v("link")]),_._v(" 优先级也更高。")])]),_._v(" "),t("p",[t("strong",[_._v("（8）")]),_._v(" 尽量使用 "),t("code",[_._v("id")]),_._v(" 、 "),t("code",[_._v("class")]),_._v(" 选择器设置样式（避免使用 "),t("code",[_._v("style")]),_._v(" 属性设置行内样式）。")]),_._v(" "),t("p",[t("strong",[_._v("（9）")]),_._v(" 标准化各种浏览器前缀，并注意以下"),t("strong",[_._v("几个方面：")])]),_._v(" "),t("ul",[t("li",[_._v("浏览器无前缀应放在"),t("strong",[_._v("最后")]),_._v("。")]),_._v(" "),t("li",[t("code",[_._v("CSS")]),_._v(" 动画只用（ -webkit- 和 无前缀）两种即可。")]),_._v(" "),t("li",[_._v("其他前缀包括 -webkit-、-moz-、-ms-、无前缀（ Opera 浏览器改用 blink 内核，所以-0-被淘汰）。")])]),_._v(" "),t("p",[t("strong",[_._v("（10）")]),_._v(" 避免让选择符看起来像是正则表达式。高级选择器不容易读懂，执行时间也长。")]),_._v(" "),t("p",[t("strong",[_._v("（11）")]),_._v(" 禁止使用 "),t("code",[_._v("gif")]),_._v(" 图片实现 "),t("code",[_._v("loading")]),_._v(" 效果，尽量使用 "),t("code",[_._v("CSS3")]),_._v(" 动画实现（降低 CPU 消耗，提升渲染性能）。")]),_._v(" "),t("p",[t("strong",[_._v("（12）")]),_._v(" 使用 "),t("code",[_._v("css3")]),_._v(" 代码代替 "),t("code",[_._v("js")]),_._v(" 动画，尽可能地避免重绘和回流。")]),_._v(" "),t("h3",{attrs:{id:"_3、哪些方法能提升移动端-css3-动画体验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、哪些方法能提升移动端-css3-动画体验"}},[_._v("#")]),_._v(" 3、哪些方法能提升移动端 CSS3 动画体验？")]),_._v(" "),t("p",[t("strong",[_._v("（1）")]),_._v(" 尽可能多地利用硬件能力，如使用 "),t("code",[_._v("3D")]),_._v(" 变形来开启 "),t("code",[_._v("GPU加速")]),_._v(" ，例如以下代码。")]),_._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[_._v("-webkit-transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("translate3d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[_._v("-moz-transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("translate3d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[_._v("-ms-transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("translate3d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[_._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("translate3d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),t("p",[_._v("一个元素通过 "),t("code",[_._v("translate3d")]),_._v(" 右移 "),t("code",[_._v("500PX")]),_._v(" 的动画流畅度会明显优于使用 "),t("code",[_._v("left")]),_._v(" 属性实现的动画移动，原因是"),t("code",[_._v("CSS")]),_._v(" 动画属性会触发整个页面重排、重绘、重组。")]),_._v(" "),t("p",[t("code",[_._v("paint")]),_._v(" 通常是最耗性能的，尽可能避免使用触发 "),t("code",[_._v("paint")]),_._v(" 的 "),t("code",[_._v("CSS")]),_._v(" 动画属性。")]),_._v(" "),t("p",[_._v("如果动画执行过程中"),t("strong",[_._v("有闪烁")]),_._v("（通常发生在动画开始的时候），可以通过如下方式处理。")]),_._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[_._v("-webkit-backface-visibility")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v("hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[_._v("-moz-backface-visibility")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v("hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[_._v("-ms-backface-visibility")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v("hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[_._v("backface-visibility")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v("hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n-webkit-perspective：1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n-moz-perspective：1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n-ms-perspective：1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\nperspective：1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),t("p",[t("strong",[_._v("（2）")]),_._v(" 尽可能少使用 "),t("code",[_._v("box- shadows")]),_._v(" 和 "),t("code",[_._v("gradients")]),_._v("，它们往往严重影响页面的性能，尤其是在一个元素中同时都使用时。")]),_._v(" "),t("p",[t("strong",[_._v("（3）")]),_._v(" 尽可能让动画元素"),t("strong",[_._v("脱离文档流")]),_._v("，以减少重排，如以下代码所示。")]),_._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[_._v("position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v(" fixed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[_._v("position")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v(" absolute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])])]),t("h3",{attrs:{id:"_4、针对-javascript-如何优化性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、针对-javascript-如何优化性能"}},[_._v("#")]),_._v(" 4、针对 JavaScript，如何优化性能？")]),_._v(" "),t("p",[t("strong",[_._v("（1）")]),_._v(" 缓存 DOM 的选择和计算。")]),_._v(" "),t("p",[t("strong",[_._v("（2）")]),_._v(" 尽量使用"),t("strong",[_._v("事件委托模式")]),_._v("，避免批量绑定事件。")]),_._v(" "),t("p",[t("strong",[_._v("（3）")]),_._v(" 使用 "),t("code",[_._v("touchstart")]),_._v(" 、"),t("code",[_._v("touchend")]),_._v(" 代替 "),t("code",[_._v("click")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("（4）")]),_._v(" 合理使用 "),t("code",[_._v("requestAnimation Frame")]),_._v(" 动画代替 "),t("code",[_._v("setTimeOut")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("（5）")]),_._v(" 适当使用 "),t("code",[_._v("canvas")]),_._v(" 动画。")]),_._v(" "),t("p",[t("strong",[_._v("（6）")]),_._v(" 尽量避免在高频事件（如 "),t("code",[_._v("TouchMove")]),_._v("、 "),t("code",[_._v("Scroll")]),_._v("事件）中修改视图，这会导致多次渲染。")]),_._v(" "),t("h3",{attrs:{id:"_5、jquery-性能优化如何做"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、jquery-性能优化如何做"}},[_._v("#")]),_._v(" 5、jQuery 性能优化如何做？")]),_._v(" "),t("p",[t("strong",[_._v("（1）使用最新版本的 "),t("code",[_._v("jQuery")]),_._v(" 类库")])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("JQuery")]),_._v(" 类库每一个新的版本都会对上一个版本进行 Bug 修复和一些优化，同时也会包含一些创新，所以建议使用最新版本的 "),t("code",[_._v("jQuery")]),_._v(" 类库提高性能。不过需要注意的是，在更换版本之后，不要忘记测试代码，毕竟有时候不是完全向后兼容的。")])]),_._v(" "),t("p",[t("strong",[_._v("（2）使用合适的选择器")])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("jQuery")]),_._v(" 提供非常丰富的选择器，选择器是开发人员最常使用的功能，但是使用不同选择器也会带来性能问题。建议使用以下选择器，如 "),t("code",[_._v("id")]),_._v(" 选择器、类选择器，同时不要将 "),t("code",[_._v("id")]),_._v(" 选择器嵌套等。")])]),_._v(" "),t("p",[t("strong",[_._v("（3）以数组方式使用 "),t("code",[_._v("jQuery")]),_._v(" 对象")])]),_._v(" "),t("ul",[t("li",[_._v("使用 "),t("code",[_._v("jQuery")]),_._v(" 选择器获取的结果是一个 "),t("code",[_._v("jQuery")]),_._v(" 对象。然而， "),t("code",[_._v("jQuery")]),_._v(" 类库会让你感觉正在使用一个定义了"),t("strong",[_._v("索引")]),_._v("和"),t("strong",[_._v("长度")]),_._v("的数组。在性能方面，建议使用简单的 "),t("code",[_._v("for")]),_._v(" 或者 "),t("code",[_._v("while")]),_._v(" 循环来处理，而不是 "),t("code",[_._v("$. each()")]),_._v(" ，这样能使代码更快。")])]),_._v(" "),t("p",[t("strong",[_._v("（4）使用事件委托模式")])]),_._v(" "),t("ul",[t("li",[_._v("每一个"),t("code",[_._v("JavaScript")]),_._v(" 事件（例如 "),t("code",[_._v("click")]),_._v("、 "),t("code",[_._v("mouseover")]),_._v("等）都会冒泡到"),t("strong",[_._v("父级节点")]),_._v("。当需要给多个元素绑定"),t("strong",[_._v("相同的回调函数")]),_._v("时，建议使用"),t("strong",[_._v("事件委托模式")]),_._v("。")])]),_._v(" "),t("p",[t("strong",[_._v("（5）使用 join()来拼接字符串")])]),_._v(" "),t("ul",[t("li",[_._v("使用 "),t("code",[_._v("join()")]),_._v(" 拼接长字符串，而不要使用 "),t("code",[_._v("“+”")]),_._v(" 拼接字符串，这有助于性能优化，特别是处理长字符串的时候。")])]),_._v(" "),t("p",[t("strong",[_._v("（6）合理利用 HTML5 中的 data 属性")])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("HTML5")]),_._v(" 中的 "),t("code",[_._v("data")]),_._v(" 属性有助于插入数据，特别是前、后端的数据交换；")]),_._v(" "),t("li",[t("code",[_._v("jQuery")]),_._v(" 的 "),t("code",[_._v("data()")]),_._v(" 方法能够有效地利用 "),t("code",[_._v("HTML5")]),_._v(" 的属性来自动获取数据。")])]),_._v(" "),t("h1",{attrs:{id:"🗨️-二、网站端、移动端优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🗨️-二、网站端、移动端优化"}},[_._v("#")]),_._v(" 🗨️ 二、网站端、移动端优化")]),_._v(" "),t("h3",{attrs:{id:"_1、谈谈你对重构的理解。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、谈谈你对重构的理解。"}},[_._v("#")]),_._v(" 1、谈谈你对重构的理解。")]),_._v(" "),t("p",[_._v("网站重构是指在不改变外部行为的前提下，简化结构、添加可读性，且在网站前端保持一致的行为。也就是说，在不改变 "),t("code",[_._v("UI")]),_._v(" 的情况下，对网站进行优化，在扩展的同时保持一致的 "),t("code",[_._v("UI")]),_._v(" 。")]),_._v(" "),t("p",[t("strong",[_._v("对于传统的网站来说，重构通常包括以下方面。")])]),_._v(" "),t("ul",[t("li",[_._v("把表格 (table) 布局改为 "),t("code",[_._v("div+css")]),_._v(" 。")]),_._v(" "),t("li",[_._v("使网站前端兼容现代浏览器。")]),_._v(" "),t("li",[_._v("对"),t("strong",[_._v("移动平台")]),_._v("进行优化。")]),_._v(" "),t("li",[_._v("针对"),t("strong",[_._v("搜索引擎")]),_._v("进行优化。")])]),_._v(" "),t("p",[t("strong",[_._v("深层次的网站重构应该考虑以下方面。")])]),_._v(" "),t("ul",[t("li",[_._v("减少代码间的耦合。")]),_._v(" "),t("li",[_._v("让代码保持弹性。")]),_._v(" "),t("li",[_._v("严格按规范编写代码。")]),_._v(" "),t("li",[_._v("设计可扩展的 "),t("code",[_._v("API")]),_._v(" 。")]),_._v(" "),t("li",[_._v("代替旧的框架、语言（如 "),t("code",[_._v("VB")]),_._v(" ）。")]),_._v(" "),t("li",[_._v("增强用户体验。")]),_._v(" "),t("li",[_._v("对速度进行优化。")]),_._v(" "),t("li",[_._v("压缩 "),t("code",[_._v("JavaScript、CSS、 image")]),_._v(" 等前端资源（通常由"),t("strong",[_._v("服务器")]),_._v("来解决）。")]),_._v(" "),t("li",[_._v("优化程序的性能（如数据读写）。")]),_._v(" "),t("li",[_._v("采用 "),t("code",[_._v("CDN")]),_._v(" 来加速资源加载。")]),_._v(" "),t("li",[_._v("优化 "),t("code",[_._v("JavaScript DOM")]),_._v(" 。")]),_._v(" "),t("li",[_._v("缓存 "),t("code",[_._v("HTTP")]),_._v(" 服务器的文件。")])]),_._v(" "),t("h3",{attrs:{id:"_2、列举你知道的-web-性能优化方法。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、列举你知道的-web-性能优化方法。"}},[_._v("#")]),_._v(" 2、列举你知道的 Web 性能优化方法。")]),_._v(" "),t("p",[t("strong",[_._v("具体优化方法如下：")])]),_._v(" "),t("ul",[t("li",[_._v("压缩源码和图片。\n"),t("ul",[t("li",[t("code",[_._v("JavaScript")]),_._v(" 采用混淆压缩；")]),_._v(" "),t("li",[t("code",[_._v("CSS")]),_._v(" 进行普通压缩；")]),_._v(" "),t("li",[t("code",[_._v("JPG")]),_._v(" 图片根据具体质量压缩为 "),t("code",[_._v("50%~70%")]),_._v(" ，把 "),t("code",[_._v("PNG")]),_._v(" 图片从"),t("strong",[_._v("24 色")]),_._v("压缩成"),t("strong",[_._v("8 色")]),_._v("以去掉一些 "),t("code",[_._v("PNG")]),_._v(" 格式信息等）。")])])]),_._v(" "),t("li",[_._v("选择合适的图片格式（颜色数多用 "),t("code",[_._v("JPG")]),_._v(" 格式，而很少使用 "),t("code",[_._v("PNG")]),_._v(" 格式，如果能通过服务器端判断浏览器支持"),t("code",[_._v("WebP")]),_._v(" 就用"),t("code",[_._v("WebP")]),_._v(" 或 "),t("code",[_._v("SVG")]),_._v(" 格式）。")]),_._v(" "),t("li",[_._v("合并静态资源（减少 "),t("code",[_._v("HTTP")]),_._v(" 请求）。")]),_._v(" "),t("li",[_._v("把多个 "),t("code",[_._v("CSS")]),_._v(" 合并为一个 "),t("code",[_._v("CSS")]),_._v(" ，把图片组合成"),t("strong",[_._v("雪碧图")]),_._v("。\n"),t("ul",[t("li",[t("strong",[_._v("雪碧图是什么？有什么优点？")])]),_._v(" "),t("li",[_._v("雪碧图也称为"),t("strong",[_._v("精灵图")]),_._v("，指将多张图片合并到一张图片中，可以减小图片的总大小；")]),_._v(" "),t("li",[_._v("将多张图片合并到一张图片后，只需"),t("strong",[_._v("一次网络请求")]),_._v("就可以将所需的资源全部下载，减小建立连接的消耗，在移动端尤为明显。")])])]),_._v(" "),t("li",[_._v("开启服务器端的 "),t("code",[_._v("Gzip")]),_._v(" 压缩（对文本资源非常有效）。\n"),t("ul",[t("li",[t("strong",[_._v("Gzip 压缩如何压缩文件？")])]),_._v(" "),t("li",[t("code",[_._v("gzip")]),_._v(" 对于要压缩的文件，首先使用 "),t("code",[_._v("LZ77")]),_._v(" 算法的一个变种进行压缩，对得到的结果再使用 "),t("code",[_._v("Huffman")]),_._v(" 编码的方法。")])])]),_._v(" "),t("li",[_._v("使用 "),t("code",[_._v("CDN")]),_._v("（对公开库共享缓存）。\n"),t("ul",[t("li",[t("strong",[_._v("CDN 是什么？")])]),_._v(" "),t("li",[t("code",[_._v("CDN")]),_._v(" 指的是内容分发网络。")]),_._v(" "),t("li",[_._v("其基本思路是尽可能的避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。")]),_._v(" "),t("li",[t("strong",[_._v("如何使用 CDN？")])]),_._v(" "),t("li",[_._v("在云服务商购买 "),t("code",[_._v("CDN")]),_._v(" 服务，之后使用 "),t("code",[_._v("CDN")]),_._v(" 加载静态资源。")])])]),_._v(" "),t("li",[_._v("延长静态资源缓存时间。")]),_._v(" "),t("li",[_._v("把 "),t("code",[_._v("CSS")]),_._v(" 放在页面头部，把 "),t("code",[_._v("JavaScript")]),_._v(" 代码放在页面底部（这样避免阻塞页面渲染而使页面出现长时间的空白）。")])]),_._v(" "),t("h3",{attrs:{id:"_3、移动端性能如何优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、移动端性能如何优化"}},[_._v("#")]),_._v(" 3、移动端性能如何优化？")]),_._v(" "),t("p",[_._v("优化方式如下。")]),_._v(" "),t("ul",[t("li",[_._v("尽量使用 "),t("code",[_._v("CSS3")]),_._v(" 动画，开启"),t("strong",[_._v("硬件加速")]),_._v("。")]),_._v(" "),t("li",[_._v("适当使用 "),t("code",[_._v("touch")]),_._v(" 事件代替 "),t("code",[_._v("click")]),_._v(" 事件。")]),_._v(" "),t("li",[_._v("避免使用"),t("code",[_._v("CSS3")]),_._v(" 渐变阴影效果。")]),_._v(" "),t("li",[_._v("可以用 "),t("code",[_._v("transform:translateZ(0)")]),_._v("来开启硬件加速。")]),_._v(" "),t("li",[_._v("不滥用 "),t("code",[_._v("Float")]),_._v(" , "),t("code",[_._v("Float")]),_._v(" 在渲染时计算量比较大，尽量少使用。")]),_._v(" "),t("li",[_._v("不滥用 "),t("code",[_._v("Web")]),_._v(" 字体， "),t("code",[_._v("Web")]),_._v(" 字体需要下载、解析、重绘当前页面，尽量少使用。")]),_._v(" "),t("li",[_._v("合理使用 "),t("code",[_._v("requestAnimation Frame")]),_._v(" 动画代替 "),t("code",[_._v("setTimeout")]),_._v(" 。")]),_._v(" "),t("li",[_._v("合理使用 "),t("code",[_._v("CSS")]),_._v(" 中的属性（ "),t("code",[_._v("CSS3 transitions")]),_._v(" 、 "),t("code",[_._v("CSS3 3D transforms")]),_._v(" 、 "),t("code",[_._v("Opacity")]),_._v(" 、 "),t("code",[_._v("Canvas")]),_._v(" 、 "),t("code",[_._v("WebGL")]),_._v(" 、"),t("code",[_._v("Video")]),_._v(" ）来触发 GPU 渲染。过度使用会使手机耗电量増加。")])]),_._v(" "),t("h3",{attrs:{id:"_4、哪些方法可以提升网站前端性能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、哪些方法可以提升网站前端性能"}},[_._v("#")]),_._v(" 4、哪些方法可以提升网站前端性能？")]),_._v(" "),t("ul",[t("li",[_._v("精灵图合并，减少 HTTP 请求；")]),_._v(" "),t("li",[_._v("压缩 "),t("code",[_._v("HTML、CSS、JavaScript")]),_._v(" 文件；")]),_._v(" "),t("li",[_._v("使用 "),t("code",[_._v("CDN")]),_._v(" 托管静态文件；")]),_._v(" "),t("li",[_._v("使用 "),t("code",[_._v("localstorage")]),_._v(" 缓存和 "),t("code",[_._v("mainfest")]),_._v(" 应用缓存。")])]),_._v(" "),t("h3",{attrs:{id:"_5、谈谈性能优化问题。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、谈谈性能优化问题。"}},[_._v("#")]),_._v(" 5、谈谈性能优化问题。")]),_._v(" "),t("p",[_._v("可以在以下层面优化性能。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("缓存利用")]),_._v("：缓存 "),t("code",[_._v("Ajax")]),_._v(" ，使用 "),t("code",[_._v("CDN")]),_._v(" 、外部 "),t("code",[_._v("JavaScript")]),_._v(" 和 "),t("code",[_._v("CSS")]),_._v(" 文件缓存，添加 "),t("code",[_._v("Expires")]),_._v(" 头部，在服务器端配置 "),t("code",[_._v("Etag")]),_._v(" ，减少 "),t("code",[_._v("DNS")]),_._v(" 查找等。")]),_._v(" "),t("li",[t("strong",[_._v("请求数量")]),_._v("：合并样式和脚本，使用 "),t("code",[_._v("CSS")]),_._v(" 图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。")]),_._v(" "),t("li",[t("strong",[_._v("请求带宽")]),_._v("：压缩文件，开启 "),t("code",[_._v("GZIP")]),_._v(" 。")]),_._v(" "),t("li",[t("strong",[_._v("CSS 代码")]),_._v("：避免使用 "),t("code",[_._v("CSS")]),_._v(" 表达式、高级选择器、通配选择器。")]),_._v(" "),t("li",[t("strong",[_._v("JavaScript 代码")]),_._v("：用"),t("strong",[_._v("散列表")]),_._v("来优化查找，少用"),t("strong",[_._v("全局变量")]),_._v("，用 "),t("code",[_._v("innerHTML")]),_._v(" 代替 "),t("code",[_._v("DOM")]),_._v(" 操作，减少 "),t("code",[_._v("DOM")]),_._v(" 操作次数，优化 "),t("code",[_._v("JavaScript")]),_._v(" 性能，用 "),t("code",[_._v("setTimeout")]),_._v(" 避免页面失去响应，缓存 "),t("code",[_._v("DOM")]),_._v(" 节点查找的结果，避免使用 "),t("code",[_._v("with")]),_._v("（ "),t("code",[_._v("with")]),_._v(" 会创建自己的作用域，增加作用域链的长度），多个变量声明合并。")]),_._v(" "),t("li",[t("strong",[_._v("HTML 代码")]),_._v("：避免图片和 "),t("code",[_._v("iFrame")]),_._v(" 等 "),t("code",[_._v("src")]),_._v(" 属性为空。"),t("code",[_._v("src")]),_._v(" 属性为空，会重新加载当前页面，影响速度和效率，尽量避免在 "),t("code",[_._v("HTML")]),_._v(" 标签中写 "),t("code",[_._v("Style")]),_._v(" 属性。")])]),_._v(" "),t("h3",{attrs:{id:"_6、如果一个页面上有大量的图片-大型电商网站-网页加载很慢-可以用哪些方法优化这些图片的加载-从而提升用户体验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、如果一个页面上有大量的图片-大型电商网站-网页加载很慢-可以用哪些方法优化这些图片的加载-从而提升用户体验"}},[_._v("#")]),_._v(" 6、如果一个页面上有大量的图片（大型电商网站），网页加载很慢，可以用哪些方法优化这些图片的加载，从而提升用户体验？")]),_._v(" "),t("ul",[t("li",[_._v("对于"),t("strong",[_._v("图片懒加载")]),_._v("，可以为页面添加一个"),t("strong",[_._v("滚动条事件")]),_._v("，判断图片是否在可视区域内或者即将进入可视区域，优先加载。")]),_._v(" "),t("li",[_._v("如果为幻灯片、相册文件等，可以使用"),t("strong",[_._v("图片预加载")]),_._v("技术，对于当前展示图片的前一张图片和后一张图片优先下载。")]),_._v(" "),t("li",[_._v("如果图片为 "),t("code",[_._v("CSS")]),_._v(" 图片，可以使用 "),t("code",[_._v("CSS Sprite")]),_._v(" 、 "),t("code",[_._v("SVG sprite")]),_._v(" 、 "),t("code",[_._v("iconfont")]),_._v(" 、 "),t("code",[_._v("Base64")]),_._v(" 等技术。\n"),t("ul",[t("li",[t("strong",[_._v("什么时候用 base64 编码？")])]),_._v(" "),t("li",[_._v("当图片足够小，且需要多次复用时使用 base64 编码。")]),_._v(" "),t("li",[t("strong",[_._v("注意：①")]),_._v("大图片使用 "),t("code",[_._v("base64")]),_._v(" 编码后，可能会使图片增大原图的 "),t("code",[_._v("1/3")]),_._v(" ，所以 "),t("code",[_._v("base64")]),_._v(" 编码并不适用于大图片。"),t("strong",[_._v("②")]),_._v("使用 "),t("code",[_._v("base64")]),_._v(" 编码图片并不意味着性能优化。")])])]),_._v(" "),t("li",[_._v("如果图片过大，可以使用"),t("strong",[_._v("特殊编码")]),_._v("的图片，加载时会先加载一张压缩得特别小的缩略图，以提高用户体验。")]),_._v(" "),t("li",[_._v("如果图片展示区域小于图片的真实大小，则应在服务器端根据业务需要先行进行图片压缩，图片压缩后，图片大小与展示的就一致了。")])]),_._v(" "),t("h3",{attrs:{id:"_7、如何对网站的文件进行优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、如何对网站的文件进行优化"}},[_._v("#")]),_._v(" 7、如何对网站的文件进行优化？")]),_._v(" "),t("ul",[t("li",[_._v("可以进行"),t("strong",[_._v("文件合并")]),_._v("、"),t("strong",[_._v("文件压缩")]),_._v("使文件最小化；")]),_._v(" "),t("li",[_._v("可以使用 "),t("code",[_._v("CDN")]),_._v(" 托管文件，让用户更快速地访问；")]),_._v(" "),t("li",[_._v("可以使用"),t("strong",[_._v("多个域名")]),_._v("来缓存静态文件。")])]),_._v(" "),t("h3",{attrs:{id:"_8、请说出几种缩短页面加载时间的方法。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、请说出几种缩短页面加载时间的方法。"}},[_._v("#")]),_._v(" 8、请说出几种缩短页面加载时间的方法。")]),_._v(" "),t("p",[t("strong",[_._v("具体方法如下：")])]),_._v(" "),t("p",[t("strong",[_._v("（1）")]),_._v(" 优化图片。")]),_._v(" "),t("p",[t("strong",[_._v("（2）")]),_._v(" 选择图像存储格式（比如， "),t("code",[_._v("GIF")]),_._v(" 提供的颜色较少，可用在一些"),t("strong",[_._v("对颜色要求不高")]),_._v("的地方）。")]),_._v(" "),t("p",[t("strong",[_._v("（3）")]),_._v(" 优化 "),t("code",[_._v("CSS")]),_._v(" （压缩、合并 "),t("code",[_._v("CSS")]),_._v(" ）。")]),_._v(" "),t("p",[t("strong",[_._v("（4）")]),_._v(" 在网址后加斜杠。")]),_._v(" "),t("p",[t("strong",[_._v("（5）")]),_._v(" 为图片标明"),t("strong",[_._v("高度")]),_._v("和"),t("strong",[_._v("宽度")]),_._v("（如果浏览器没有找到"),t("strong",[_._v("高度和宽度")]),_._v("这两个参数，它需要一边下载图片一边计算大小。如果图片很多，浏览器需要不断地调整页面。这不但影响速度，而且影响浏览体验。当浏览器知道"),t("strong",[_._v("高度和宽度")]),_._v("参数后，即使图片暂时无法显示，页面上也会腾出图片的空位，然后继续加载后面的内容，从而优化加载时间，提升浏览体验）。")]),_._v(" "),t("h3",{attrs:{id:"_9、你知道哪些优化性能的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、你知道哪些优化性能的方法"}},[_._v("#")]),_._v(" 9、你知道哪些优化性能的方法？")]),_._v(" "),t("p",[_._v("具体方法如下。")]),_._v(" "),t("p",[t("strong",[_._v("（1）")]),_._v(" 减少 "),t("code",[_._v("HTTP")]),_._v(" 请求次数，控制"),t("code",[_._v("CSS Sprite")]),_._v("、"),t("code",[_._v("JavaScript")]),_._v(" 与 "),t("code",[_._v("CSS")]),_._v(" 源码、图片的大小，使用网页 "),t("code",[_._v("Gzip")]),_._v(" 、"),t("code",[_._v("CDN")]),_._v(" 托管、"),t("code",[_._v("data")]),_._v(" 缓存、图片服务器。")]),_._v(" "),t("p",[t("strong",[_._v("（2）")]),_._v(" 通过前端模板 "),t("code",[_._v("JavaScript")]),_._v(" 和数据，减少由于 HTML 标签导致的带宽浪费，在前端用变量保存 Ajax 请求结果，每次操作本地变量时，不用请求，减少请求次数。")]),_._v(" "),t("p",[t("strong",[_._v("（3）")]),_._v(" 用 "),t("code",[_._v("innerHTML")]),_._v(" 代替 "),t("code",[_._v("DOM")]),_._v(" 操作，减少 "),t("code",[_._v("DOM")]),_._v(" 操作次数，优化 "),t("code",[_._v("JavaScript")]),_._v(" 性能。")]),_._v(" "),t("p",[t("strong",[_._v("（4）")]),_._v(" 当需要设置的样式很多时，设置 "),t("code",[_._v("className")]),_._v(" 而不是直接操作 "),t("code",[_._v("Style")]),_._v(" 。")]),_._v(" "),t("p",[t("strong",[_._v("（5）")]),_._v(" 少用全局变量，缓存 "),t("code",[_._v("DOM")]),_._v(" 节点查找的结果，减少 "),t("code",[_._v("I/O")]),_._v(" 读取操作")]),_._v(" "),t("p",[t("strong",[_._v("（6）")]),_._v(" 避免使用 "),t("code",[_._v("CSS")]),_._v(" 表达式，它又称"),t("strong",[_._v("动态属性")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("（7）")]),_._v(" 预加载图片，将"),t("strong",[_._v("样式表")]),_._v("放在顶部，将"),t("strong",[_._v("脚本")]),_._v("放在底部，加上"),t("strong",[_._v("时间戳")]),_._v("。")]),_._v(" "),t("p",[t("strong",[_._v("（8）")]),_._v(" 避免在页面的主体布局中使用表，表要在其中的内容完全下载之后才会显示出来，显示的速度比 "),t("code",[_._v("DIV+CSS")]),_._v(" 布局慢。")]),_._v(" "),t("h3",{attrs:{id:"_10、你知道哪些-seo-搜索引擎优化的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、你知道哪些-seo-搜索引擎优化的方法"}},[_._v("#")]),_._v(" 10、你知道哪些 SEO 搜索引擎优化的方法？")]),_._v(" "),t("ul",[t("li",[_._v("合理的 "),t("code",[_._v("title")]),_._v(" 、"),t("code",[_._v("description")]),_._v(" 、"),t("code",[_._v("keywords")]),_._v(" ：\n"),t("ul",[t("li",[_._v("搜索对着三项的权重逐个减小， "),t("code",[_._v("title")]),_._v(" 值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同页面 "),t("code",[_._v("title")]),_._v(" 要有所不同；")]),_._v(" "),t("li",[t("code",[_._v("description")]),_._v(" 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 "),t("code",[_._v("description")]),_._v(" 有所不同；")]),_._v(" "),t("li",[t("code",[_._v("keywords")]),_._v(" 列举出重要关键词即可。")])])]),_._v(" "),t("li",[_._v("语义化的 "),t("code",[_._v("HTML")]),_._v(" 代码，符合 "),t("code",[_._v("W3C")]),_._v(" 规范：语义化代码让搜索引擎容易理解网页。")]),_._v(" "),t("li",[_._v("重要内容 "),t("code",[_._v("HTML")]),_._v(" 代码放在最前：搜索引擎抓取 "),t("code",[_._v("HTML")]),_._v(" 顺序是从上到下，有的搜索引擎对"),t("strong",[_._v("抓取长度")]),_._v("有限制，保证重要内容一定会被抓取。")]),_._v(" "),t("li",[_._v("重要内容不要用 "),t("code",[_._v("js")]),_._v("输出：爬虫不会执行 "),t("code",[_._v("js")]),_._v(" 获取内容。")]),_._v(" "),t("li",[_._v("少用 "),t("code",[_._v("iframe")]),_._v(" ：搜索引擎不会抓取 "),t("code",[_._v("iframe")]),_._v(" 中的内容。")]),_._v(" "),t("li",[_._v("非装饰性图片必须加 "),t("code",[_._v("alt")]),_._v("。")]),_._v(" "),t("li",[_._v("提高网站速度：网站速度是搜索引擎排序的一个重要指标。")])]),_._v(" "),t("h1",{attrs:{id:"🗯️-三、代码、服务器端优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🗯️-三、代码、服务器端优化"}},[_._v("#")]),_._v(" 🗯️ 三、代码、服务器端优化")]),_._v(" "),t("h3",{attrs:{id:"_1、平时你是如何对代码进行性能优化的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、平时你是如何对代码进行性能优化的"}},[_._v("#")]),_._v(" 1、平时你是如何对代码进行性能优化的？")]),_._v(" "),t("p",[_._v("（1）利用性能分析工具监测性能，包括静态 "),t("code",[_._v("Analyze")]),_._v(" 工具和运行时的 "),t("code",[_._v("Profile")]),_._v(" 工具（在 "),t("code",[_._v("Xcode")]),_._v(" 工具栏中依次单击 "),t("code",[_._v("Product→ Profile")]),_._v(" 项可以启动）。")]),_._v(" "),t("p",[_._v("（2）比如测试程序的运行时间，当单击 "),t("code",[_._v("Time Profiler")]),_._v(" 项时，应用程序开始运行，这就能获取到运行整个应用程序所消耗时间的分布和百分比。为了保证数据分析在同一使用场景下的真实性，一定要使用真机，因为此时模拟器在 "),t("code",[_._v("Mac")]),_._v(" 上运行，而 "),t("code",[_._v("Mac")]),_._v(" 上的 "),t("code",[_._v("CPU")]),_._v(" 往往比 "),t("code",[_._v("iOS")]),_._v(" 设备要快。")]),_._v(" "),t("h3",{attrs:{id:"_2、如何优化服务器端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、如何优化服务器端"}},[_._v("#")]),_._v(" 2、如何优化服务器端？")]),_._v(" "),t("p",[t("strong",[_._v("具体方法如下：")])]),_._v(" "),t("p",[_._v("（1）对组件启用 "),t("code",[_._v("Gzip")]),_._v(" 压缩。")]),_._v(" "),t("p",[_._v("（2）延长资源缓存时间，合理设置资源的过期时间，对于一些长期不更新的静态资源，其过期时间可以设置得长一些。")]),_._v(" "),t("p",[_._v("（3）减少 "),t("code",[_._v("cookie")]),_._v(" 头部信息的大小，头部信息越大，资源传输速度越慢。")]),_._v(" "),t("p",[_._v("（4）图片或者 "),t("code",[_._v("CSS")]),_._v(" 、"),t("code",[_._v("JavaScript")]),_._v(" 文件均可使用 "),t("code",[_._v("CDN")]),_._v(" 来加速。")]),_._v(" "),t("h3",{attrs:{id:"_3、如何优化服务器端的接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、如何优化服务器端的接口"}},[_._v("#")]),_._v(" 3、如何优化服务器端的接口？")]),_._v(" "),t("p",[t("strong",[_._v("具体方法如下：")])]),_._v(" "),t("p",[t("strong",[_._v("（1）接口合并")]),_._v("：如果一个页面需要请求两部分以上的数据接口，则建议合并成一个以减少 "),t("code",[_._v("HTTP")]),_._v(" 请求数。")]),_._v(" "),t("p",[t("strong",[_._v("（2）减少数据量")]),_._v("：去掉接口返回的数据中不需要的数据。")]),_._v(" "),t("p",[t("strong",[_._v("（3）缓存数据")]),_._v("：首次加载请求后，缓存数据；对于非首次请求，优先使用上次请求的数据，这样可以提升非首次请求的响应速度。")]),_._v(" "),t("h3",{attrs:{id:"_4、如何优化脚本的执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何优化脚本的执行"}},[_._v("#")]),_._v(" 4、如何优化脚本的执行？")]),_._v(" "),t("p",[_._v("脚本处理不当会阻塞页面加载、渲染，因此在使用时需注意。")]),_._v(" "),t("p",[t("strong",[_._v("（1）")]),_._v(" 把 "),t("code",[_._v("CSS")]),_._v(" 写在页面头部，把 "),t("code",[_._v("JavaScript")]),_._v(" 程序写在页面尾部或异步操作中。")]),_._v(" "),t("p",[t("strong",[_._v("（2）")]),_._v(" 避免图片和 "),t("code",[_._v("iFrame")]),_._v(" 等的空 "),t("code",[_._v("src")]),_._v(" ，空 "),t("code",[_._v("src")]),_._v(" 会重新加载当前页面，影响速度和效率。")]),_._v(" "),t("p",[t("strong",[_._v("（3）")]),_._v(" 尽量避免重设图片大小。重设图片大小是指在页面、"),t("code",[_._v("CSS")]),_._v(" 、"),t("code",[_._v("JavaScript")]),_._v(" 文件等中多次重置图片大小，多次重设图片大小会引发图片的多次重绘，影响性能")]),_._v(" "),t("p",[t("strong",[_._v("（4）")]),_._v(" 图片尽量避免使用"),t("code",[_._v("DataURL")]),_._v(" 。"),t("code",[_._v("DataURL")]),_._v(" 图片没有使用图片的压缩算法，文件会变大，并且要在解码后再渲染，加载慢，耗时长。")]),_._v(" "),t("h3",{attrs:{id:"_5、页面渲染有哪些优化方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、页面渲染有哪些优化方式"}},[_._v("#")]),_._v(" 5、页面渲染有哪些优化方式？")]),_._v(" "),t("p",[t("strong",[_._v("具体方法如下：")])]),_._v(" "),t("p",[t("strong",[_._v("（1）")]),_._v(" 通过 HTML 设置 "),t("code",[_._v("Viewport")]),_._v(" 元标签， "),t("code",[_._v("Viewport")]),_._v(" 可以加速页面的渲染，如以下代码所示。")]),_._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("<")]),_._v("meta")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[_._v("name")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[_._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v('"')]),_._v("viewport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v('"')])]),_._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[_._v("content")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[_._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v('"')]),_._v("width=device=width,initial-scale=1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v('"')])]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("/>")])]),_._v("\n")])])]),t("p",[t("strong",[_._v("（2）")]),_._v(" 减少 "),t("code",[_._v("DOM")]),_._v(" 节点数量，"),t("code",[_._v("DOM")]),_._v(" 节点太多会影响页面的渲染，应尽量减少 "),t("code",[_._v("DOM")]),_._v(" 节点数量。")]),_._v(" "),t("p",[t("strong",[_._v("（3）")]),_._v(" 尽量使用 "),t("code",[_._v("CSS3")]),_._v(" 动画，合理使用 "),t("code",[_._v("requestAnimation Frame")]),_._v(" 动画代替 "),t("code",[_._v("setTimeout")]),_._v(" ，适当使用 "),t("code",[_._v("canvas")]),_._v(" 动画（5 个元素以内使用 "),t("code",[_._v("CSS")]),_._v(" 动画，5 个元素以上使用 "),t("code",[_._v("canvas")]),_._v(" 动画（ "),t("code",[_._v("iOS 8")]),_._v(" 中可使用 "),t("code",[_._v("webGL")]),_._v(" ）。")]),_._v(" "),t("p",[t("strong",[_._v("（4）")]),_._v(" 对于高频事件优化 "),t("code",[_._v("Touchmove")]),_._v(" , "),t("code",[_._v("Scroll")]),_._v(" 事件可导致多次渲染。")]),_._v(" "),t("ul",[t("li",[_._v("使用 "),t("code",[_._v("requestAnimation Frame")]),_._v(" 监听帧变化，以便在正确的时间进行渲染，增加响应变化的时间间隔，减少重绘次数。")]),_._v(" "),t("li",[_._v("使用节流模式（基于操作节流，或者基于时间节流），减少触发次数。")])]),_._v(" "),t("p",[t("strong",[_._v("（5）")]),_._v(" 提升 "),t("code",[_._v("GPU")]),_._v(" 的速度，用 "),t("code",[_._v("CSS")]),_._v(" 中的属性（ "),t("code",[_._v("CSS3 transitions")]),_._v(" 、"),t("code",[_._v("CSS3 3D transforms")]),_._v(" 、"),t("code",[_._v("Opacity")]),_._v(" 、 "),t("code",[_._v("Canvas")]),_._v(" 、 "),t("code",[_._v("WebGL")]),_._v(" 、"),t("code",[_._v("Video")]),_._v(" ）来触发 "),t("code",[_._v("GPU")]),_._v(" 渲染。")]),_._v(" "),t("h3",{attrs:{id:"_6、如何设置-dns-缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、如何设置-dns-缓存"}},[_._v("#")]),_._v(" 6、如何设置 DNS 缓存？")]),_._v(" "),t("p",[_._v("在浏览器地址栏中输入 "),t("code",[_._v("URL")]),_._v(" 以后，浏览器首先要查询域名 "),t("code",[_._v("hostname")]),_._v(" 对应服务器的 "),t("code",[_._v("IP")]),_._v(" 地址，一般需要耗费"),t("strong",[_._v("20~120ms")]),_._v("的时间。")]),_._v(" "),t("p",[t("code",[_._v("DNS")]),_._v(" 查询完成之前，浏览器无法识别服务器 "),t("code",[_._v("IP")]),_._v(" ，因此不下载任何数据。基于性能考虑，"),t("code",[_._v("ISP")]),_._v(" 运营商、局域网路由、操作系统、客户端（浏览器）均会有相应的"),t("code",[_._v("DNS")]),_._v(" 缓存机制。")]),_._v(" "),t("p",[_._v("（1）正 "),t("code",[_._v("IE")]),_._v(" 缓存 "),t("code",[_._v("30min")]),_._v(" ，可以通过注册表中 "),t("code",[_._v("DnsCacheTimeout")]),_._v(" 项设置。")]),_._v(" "),t("p",[_._v("（2）"),t("code",[_._v("Firefox")]),_._v(" 混存 "),t("code",[_._v("1min")]),_._v(" ，通过 "),t("code",[_._v("network.dnsCacheExpiration")]),_._v(" 配置。")]),_._v(" "),t("p",[_._v("（3）在 "),t("code",[_._v("Chrome")]),_._v(" 中通过依次单击 "),t("strong",[_._v("“设置”→“选项”→“高级选项”")]),_._v(" ，并勾选 "),t("strong",[_._v("“用预提取 DNS 提高网页载入速度”")]),_._v(" 选项来配置缓存时间。")]),_._v(" "),t("h3",{attrs:{id:"_7、什么时候会出现资源访问失败"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、什么时候会出现资源访问失败"}},[_._v("#")]),_._v(" 7、什么时候会出现资源访问失败？")]),_._v(" "),t("p",[_._v("开发过程中，发现很多开发者没有设置图标，而服务器端根目录也没有存放默认的 "),t("code",[_._v("Favicon.ico")]),_._v(" ，从而导致请求 404 出现。通常在 App 的 "),t("code",[_._v("webview")]),_._v(" 里打开 "),t("code",[_._v("Favicon.ico")]),_._v(" ，不会加载这个 "),t("code",[_._v("Favicon.ico")]),_._v("，但是很多页面能够分享。")]),_._v(" "),t("p",[_._v("如果用户在浏览器中打开 "),t("code",[_._v("Favicon. ico")]),_._v(" ，就会调取失败，一般尽量保证该图标默认存在，文件尽可能小，并设置一个"),t("strong",[_._v("较长的缓存过期时间")]),_._v("。另外，应及时清理缓存过期导致岀现请求失败的资源。")]),_._v(" "),t("h3",{attrs:{id:"_8、为什么利用多个域名来存储网站资源会更有效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、为什么利用多个域名来存储网站资源会更有效"}},[_._v("#")]),_._v(" 8、为什么利用多个域名来存储网站资源会更有效？")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("CDN")]),_._v(" 缓存更方便；")]),_._v(" "),t("li",[_._v("突破浏览器并发限制；")]),_._v(" "),t("li",[_._v("节约 "),t("code",[_._v("cookie")]),_._v(" 带宽；")]),_._v(" "),t("li",[_._v("节约主域名的连接数，优化页面响应速度；")]),_._v(" "),t("li",[_._v("防止不必要的安全问题。")])]),_._v(" "),t("h3",{attrs:{id:"_9、有一个页面-他必须实时展示最新的数据-你有哪些方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、有一个页面-他必须实时展示最新的数据-你有哪些方案"}},[_._v("#")]),_._v(" 9、有一个页面，他必须实时展示最新的数据，你有哪些方案？")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("http")]),_._v(" 轮询，使用 ajax 配合定时器定时请求数据更新；")]),_._v(" "),t("li",[t("code",[_._v("websocket")]),_._v(" ，用来处理服务器端推送的长连接协议。")])]),_._v(" "),t("h1",{attrs:{id:"💭-四、性能优化文章补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💭-四、性能优化文章补充"}},[_._v("#")]),_._v(" 💭 四、性能优化文章补充")]),_._v(" "),t("blockquote",[t("p",[_._v("详解文章补充 👇")]),_._v(" "),t("ul",[t("li",[_._v("原文："),t("a",{attrs:{href:"https://juejin.cn/post/6973062729925918756",target:"_blank",rel:"noopener noreferrer"}},[_._v("关于前端性能优化问题，认识网页加载过程和防抖节流"),t("OutboundLink")],1)]),_._v(" "),t("li",[_._v("链接：https://juejin.cn/post/6973062729925918756")])])]),_._v(" "),t("h1",{attrs:{id:"💯-五、结束语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#💯-五、结束语"}},[_._v("#")]),_._v(" 💯 五、结束语")]),_._v(" "),t("p",[_._v("随着前端项目不断扩大，浏览器渲染的压力变得越来越重，因此，很多企业专都会专门成立团队去做性能优化。对于性能优化的面试题来说，主要考察应试者对网站性能优化是否有一定了解。")]),_._v(" "),t("p",[_._v("因此，如何做好性能优化，哪些操作会引起性能优化的问题，都值得应试者关注。")]),_._v(" "),t("p",[_._v("到这里，关于性能优化相关的面试题讲到这里就结束啦！希望对大家有帮助~")]),_._v(" "),t("h1",{attrs:{id:"🐣-彩蛋-one-more-thing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🐣-彩蛋-one-more-thing"}},[_._v("#")]),_._v(" 🐣 彩蛋 One More Thing")]),_._v(" "),t("h2",{attrs:{id:"🏷️-参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🏷️-参考资料"}},[_._v("#")]),_._v(" 🏷️ 参考资料")]),_._v(" "),t("p",[_._v("👉"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkxMjI3MTA1Mg==&mid=2247504051&idx=1&sn=f7f69bd28f22942c5dbca3523b4f6ce9&source=41#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[_._v("21 道关于性能优化的面试题(附答案)"),t("OutboundLink")],1)]),_._v(" "),t("h2",{attrs:{id:"🏷️pdf-内容获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🏷️pdf-内容获取"}},[_._v("#")]),_._v(" 🏷️pdf 内容获取")]),_._v(" "),t("p",[_._v("👉 微信搜索 "),t("code",[_._v("星期一研究室")]),_._v(" 并关注，回复关键词 "),t("code",[_._v("性能优化面试pdf")]),_._v(" 获取相关 "),t("code",[_._v("pdf")]),_._v(" 内容~")]),_._v(" "),t("p",[_._v("👉 回复 "),t("code",[_._v("面试大全pdf")]),_._v(" 可获取全专栏内容！")]),_._v(" "),t("h2",{attrs:{id:"🏷️-番外篇"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#🏷️-番外篇"}},[_._v("#")]),_._v(" 🏷️ 番外篇")]),_._v(" "),t("ul",[t("li",[_._v("如果这篇文章对你有用，记得"),t("strong",[_._v("留个脚印 jio")]),_._v("再走哦~")]),_._v(" "),t("li",[_._v("以上就是本文的全部内容！我们下期见！👋👋👋")])])])}),[],!1,null,null,null);v.default=e.exports}}]);