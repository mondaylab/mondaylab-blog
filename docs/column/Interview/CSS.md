---
title: 「offer来了」1张思维导图，6大知识板块，带你梳理面试中CSS的知识
author: 周一
date: '2021-12-12'
categories:
  - 前端开发
tags:
  - offer来了
---

![封面](https://img-blog.csdnimg.cn/5a1dbad07798496f91314396406e0887.png#pic_center)

@[toc](「面试专栏」前端面试之css篇)

# ⌛ 序言

对于前端来说， `css` 是初学者必学的一个知识。基本上在涉猎了 `html` 之后，随之学习的就是 `css` 。同时， `css` 也是前端必考的一个知识点，像水平垂直居中、两栏布局和三栏布局以及 `bfc` 等等，都是面试的常考点也是必考点。因此， 在下面的文章中，将系统地整理周一在秋招过程中所遇到的题目。

一起来学习 ⑧~~⏰

# ✏️ 一、CSS 框架先梳理

我们先用一张思维导图来了解关于 `css` 的一些常考题。**详情见下图 👇**

![思维导图](https://img-blog.csdnimg.cn/10c53fa8a2844239b80eaaf90c008989.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

下面开始梳理各个题目的解答~[⏳](https://emojipedia.org/hourglass-not-done/)

# 🖌️ 二、基础样式问题

## 1、请你讲一讲 css 的权重和优先级

### （1）权重

|   等级   |               定义               | 计算值 |
| :------: | :------------------------------: | :----: |
| **0 级** | 通配选择器、选择符和逻辑组合伪类 |   0    |
| **1 级** |            标签选择器            |   1    |
| **2 级** |    类选择器、属性选择器和伪类    |   10   |
| **3 级** |            ID 选择器             |  100   |
| **4 级** |          style 属性内联          |  1000  |
| **5 级** |            !important            | 10000  |

### （2）优先级

权重相同，写在后面的覆盖前面的，“后来居上”原则

使用 `!important` 达到最大优先级，都使用 `!important` 时，权重大的优先级高

> - **详细文章补充 👇**
> - 原文：[谁动了我的选择器？深入理解 CSS 选择器优先级](https://juejin.cn/post/6994580720807051301)
> - 链接：https://juejin.cn/post/6994580720807051301

## 2、说一下 CSS 的 position 属性

`static` ：无特殊定位，对象遵循正常文档流。 `top` ， `right` ， `bottom` ， `left` 等属性不会被应用。

`relative` ：对象遵循正常文档流，但将依据 `top` ， `right` ， `bottom` ， `left` 等属性在正常文档流中偏移位置。而其层叠通过 `z-index` 属性定义。

`absolute` ：对象脱离正常文档流，使用 `top` ， `right` ， `bottom` ， `left` 等属性进行绝对定位。而其层叠通过 `z-index` 属性定义。

`fixed` ：对象脱离正常文档流，使用 `top` ， `right` ， `bottom` ， `left` 等属性以窗口为参考点进行定位，当出现滚动条时，对象不会随着滚动。而其层叠通过 `z-index` 属性定义。

`sticky` ：具体是类似 `relative` 和 `fixed` ，在 `viewport` 视口滚动到阈值之前应用 `relative` ，滚动到阈值之后应用 `fixed` 布局，由 `top` 决定。

> - **详细文章补充 👇**
> - 原文：[你可能对 position 和 z-index 有一些误解](https://juejin.cn/post/6993468505773309982)
> - 链接：https://juejin.cn/post/6993468505773309982

## 3、span 标签是否可以设置宽高， margin 和 padding 呢？

这道题考察的是 `margin` 和 `padding` 对行内元素的影响。

`span` 标签是行内元素，设置不了宽高。但是 `margin` 和 `padding` 可以设置，但值得注意的是，设置 `margin` 和 `padding` 时，只有水平方向有效果，垂直方向没有效果。

在一篇文章中看到这样一段解释：

```bash
While padding can be applied to all sides of an inline element,only left and right padding will have an effect on surrounding content.In the example below,50px of padding has been applied to all sides of the element.As you can see,it has an affect on the content on each side,but not on content above or below.
```

上面这段话解释了，当 `padding` 被应用与行内元素时，只对左右的水平方向有影响，而对上下的垂直方向是没有影响的。

## 4、css 能够实现继承的相关属性

### （1）字体系列属性

- font：组合字体
- font-family：规定元素的字体系列
- font-weight：设置字体的粗细
- font-size：设置字体的尺寸
- font-style：定义字体的风格
- font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
- font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。
- font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。

### （2）文本系列属性

- text-indent：文本缩进
- text-align：文本水平对齐
- line-height：行高
- word-spacing：增加或减少单词间的空白（即字间隔）
- letter-spacing：增加或减少字符间的空白（字符间距）
- text-transform：控制文本大小写
- direction：规定文本的书写方向
- color：文本颜色

### （3）元素可见性

- visibility

### （4）表格布局属性

- caption-side、border-collapse、border-spacing、empty-cells、table-layout

### （5）列表布局属性

- list-style-type、list-style-image、list-style-position、list-style

### （6）生成内容属性

- quotes

### （7）光标属性

- cursor

### （8）页面样式属性

- page、page-break-inside、windows、orphans

### （9）声音样式属性

- speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation

> - **详细文章戳下面链接 👇**
> - 原文：[CSS 中可以和不可以继承的属性](https://www.cnblogs.com/thislbq/p/5882105.html)
> - 链接：https://www.cnblogs.com/thislbq/p/5882105.html

## 5、visibility 和 display 的差别（还有 opacity)

- `visibility` ：设置 `hidden` 会隐藏元素，但是其位置还存在与页面文档流中，不会被删除，所以会触发浏览器渲染引擎的重绘；
- `display` ：设置了 `none` 属性会隐藏元素，且其位置也不会被保留下来，所以会触发浏览器渲染引擎的回流和重绘；
- `opacity` ：会将元素设置为透明，但是其位置也在页面文档流中，不会被删除，所以会触发浏览器渲染引擎的重绘；同时，值得注意的是， `opacity` 可以设置过渡效果。

## 6、CSS3 有哪些新特性

- 新增各种 CSS 选择器 （ `:not(.input)` ：表示所有 `class` 不是 `input` 的节点）
- 圆角 （border-radius:8px）
- 多列布局 （column）
- 阴影和反射 （Shadow\Reflect）
- 文字特效 （text-shadow）
- 线性渐变 （gradient）
- 旋转，缩放，定位，倾斜 （transform）
- 动画 （Animation）
- 多背景，背景裁剪

## 7、css3 新增伪类 - 伪元素

**第一组：**

- `p:first-of-type` 选择属于其父元素的首个元素的每个元素。
- `p:last-of-type` 选择属于其父元素的最后元素的每个元素。
- `p:only-of-type` 选择属于其父元素唯一的元素的每个元素。
- `p:only-child` 选择属于其父元素的唯一子元素的每个元素。
- `p:nth-child(2)` 选择属于其父元素的第二个子元素的每个元素。

**第二组：**

- `:enabled` 已启用的表单元素。
- `:disabled` 已禁用的表单元素。
- `:checked` 单选框或复选框被选中。
- `::before` 在元素之前添加内容。
- `::after` 在元素之后添加内容,也可以用来做清除浮动。
- `::first-line` 添加一行特殊样式到首行。
- `::first-letter` 添加一个特殊的样式到文本的首字母。

**第三组：**

- 伪类语法一个 `:` ，它是为了弥补 `css` 常规类选择器的不足。
- 伪元素语法两个 `:` ，它是凭空创建的一个虚拟容器生成的元素。

## 8、display:inline-block 什么时候不会显示间隙？

- 浮动

- 移除空格
- 使用 `margin` 负值
- 使用 `font-size:0`
- `letter-spacing` 字间距
- `word-spacing` 词间距

## 11、rgba() 和 opacity 的透明效果有什么不同？

- `rgba()` 和 `opacity` 都能实现透明效果，但最大的不同是 `opacity` 作用于元素，以及元素内的所有内容的透明度；
- 而 `rgba()` 只作用于元素的颜色或其背景色。（ 设置 `rgba` 透明的元素的子元素不会继承透明效果 ）

## 12、为什么要初始化 CSS 样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 `CSS` 初始化往往会出现浏览器之间的页面显示差异。

当然，初始化样式会对 `SEO` 有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。

最简单的初始化方法：

```css
* {
  padding: 0;
  margin: 0;
}
```

淘宝的样式初始化代码：

```css
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
}

code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}

small {
  font-size: 12px;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

sup {
  vertical-align: text-top;
}

sub {
  vertical-align: text-bottom;
}

legend {
  color: #000;
}

fieldset,
img {
  border: 0;
}

button,
input,
select,
textarea {
  font-size: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

# 📁 三、适配问题

## 1、px、em 的区别

- `px` 和 `em` 都是长度单位，区别是：
- `px` 值固定，容易计算。
- `em` 值不固定，是相对单位，其相对应父级元素的字体大小会调整

## 2、项目中移动端怎么用 rem 做的适配

`rem` 作用于根元素，也就是作用于 `html` 元素。在实际的项目中，通常会在初始化样式中这样设置：

```css
html {
  font-size: 625%; /* 即 16px * 625% = 100px */
}
body {
  font-size: 0.16rem; /* 即 0.16rem * 100 = 16px */
}
```

## 3、px、em 和 rem 的适用背景

- `px` ，绝对长度单位，最常用；
- `em`，相对长度单位，不常用；
- `rem`，相对长度单位，常用于响应式布局。

# 📂 四、动画类

## 1、css3 缩放、旋转相关的 API

要弄懂 `css` 动画相关的 `API` ，特别是 `animation` 、 `transition` 、 `transform` 、 `translate` 这几个属性，要历届清楚他们之间的区别。**具体如下：**

- `animation` ：用于设置动画属性，他是一个简写的属性，包含**6 个属性**；
- `transition` ：用于设置元素的样式过度，和 `animation` 有着类似的效果，但细节上有很大的不同；
- `transform` ：用于元素进行**旋转**、**缩放**、**移动**或**倾斜**，和设置样式的动画并没有什么关系；
- `translate` ： `translate` 只是 `transform` 的一个属性值，即移动，除此之外还有 `scale` 等。

## 2、如果需要手动写动画，你认为最小时间间隔是多久，为什么？

多数显示器默认频率是 `60Hz` ，即 `1` 秒刷新 `60` 次，所以理论上最小间隔为 $\frac{1×1000ms}{60}＝16.7ms$

## 3、有没有做过动画？如何实现一个元素从做向右移动，每秒 1px

- translate transition transform
- requestAnimationFrame
- animation 动画

## 4、使用 css 实现一个持续的动画效果

```css
animation: mymove 5s infinite;

@keyframes mymove {
  from {
    top: 0px;
  }

  to {
    top: 200px;
  }
}
```

# 🗂️ 五、浏览器相关

## 1、Sass、LESS 是什么？大家为什么要使用他们？

### （1）是什么

他们是 `CSS` 预处理器，也是**动态样式语言**，是 `CSS` 上的一种**抽象层**。他们是一种特殊的语法/语言编译成 `CSS` 。

例如 `Less` 是一种动态样式语言. 将 `CSS` 赋予了动态语言的特性，如变量，继承，运算， 函数 `. LESS` 既可以在客户端上运行 (支持 `IE 6+` , `Webkit` , `Firefox` )，也可以在**服务端**运行 (借助 `Node.js` )。

### （2）为什么要使用它们？

- 结构清晰，便于扩展。
- 可以方便地屏蔽浏览器私有语法差异。这个不用多说，封装对浏览器语法差异的重复处理，减少无意义的机械劳动。
- 可以轻松实现多重继承。
- 完全兼容 `CSS` 代码，可以方便地应用到老项目中。`LESS` 只是在 `CSS` 语法上做了扩展，所以老的 `CSS` 代码也可以与 `LESS` 代码一同编译。

## 2、stylus，sass，less 区别

- 均具有“变量”、“混合”、“嵌套”、“继承”、“颜色混合”五大基本特性。
- `Sass` 和 `LESS` 语法较为严谨， `LESS` 要求一定要使用大括号 `{}` ， `Sass` 和 `Stylus` 可以通过缩进表示层次与嵌套关系。
- `Sass` 无全局变量的概念， `LESS` 和 `Stylus` 有类似于其它语言的作用域概念。
- `Sass` 是基于 `Ruby` 语言的，而 `LESS` 和 `Stylus` 可以基于 `NodeJS NPM` 下载相应库后进行编译；这也是为什么安装 `Sass` 的时候有时候会报错，需要安装 `python` 脚本。

## 3、重排和重绘是什么

重绘不一定需要重排，重排必然会导致重绘。

**重排**：当渲染树的一部分必须更新并且节点的尺寸发生了变化，浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。

通俗来说，即当 DOM 的变化引发了元素几何属性的变化，比如改变元素的宽高，元素的位置，导致浏览器不得不重新计算元素的几何属性，并重新构建渲染树，这个过程称为“重排”。

**重绘**：是在一个元素的外观被改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。

通俗来说，即完成重排后，要将重新构建的渲染树渲染到屏幕上，这个过程就是“重绘”。

**DOM 树**：表示页面的结构

**渲染树**：表示页面的节点如何显示。

一旦渲染树构建完成，就要开始绘制（paint）页面元素了。

## 4、什么时候会导致重排问题发生？

- 添加、删除、更新 `DOM` 节点。
- 通过 `display: none` 隐藏一个 `DOM` 节点 —— 触发重排和重绘。
- 通过 `visibility: hidden` 隐藏一个 `DOM` 节点 —— 只触发重绘，因为没有几何变化。
- 移动或者给页面中的 `DOM` 节点添加动画。
- 添加一个样式表，调整样式属性。
- 用户行为，例如调整窗口大小，改变字号，或者滚动。

| 常见的重排元素 |              |                |            |
| -------------- | ------------ | -------------- | ---------- |
| width          | height       | padding        | margin     |
| display        | border-width | border         | top        |
| position       | font-size    | float          | text-align |
| overflow-y     | font-weight  | overflow       | left       |
| font-family    | line-height  | vertical-align | right      |
| clear          | white-space  | bottom         | min-height |

## 5、如何减少重排对性能的影响？

- 尽可能限制重排的影响范围，尽可能在低层级的 DOM 节点上，如下述例子中，如果你要改变 p 的样式，class 就不要加在 div 上，通过父元素去影响子元素不好。

  ```html
  <body>
    <div class="hello">
      <h4>hello</h4>
      <p><strong>Name:</strong>BDing</p>
      <h5>male</h5>
      <ol>
        <li>coding</li>
        <li>loving</li>
      </ol>
    </div>
  </body>
  ```

  当 `p` 节点上发生 `reflow` 重排时， `hello` 和 `body` 也会重新渲染，甚至 h5 和 ol 都会收到影响。

- 避免设置大量的 `style` 属性，因为通过设置 `style` 属性改变结点样式的话，每一次设置都会触发一次 `reflow` ，所以最好是使用 `class` 属性。

- 实现元素的动画，它的 position 属性，最好是设为 `absoulte` 或 `fixed` ，这样不会影响其他元素的布局动画实现的速度的选择。比如实现一个动画，以 `1` 个像素为单位移动这样最平滑，但是 reflow 就会过于频繁，大量消耗 `CPU` 资源，如果以 `3` 个像素为单位移动则会好很多。

- 不要使用 `table` 布局，因为 `table` 中某个元素旦触发了` reflow` ，那么整个 `table` 的元素都会触发 `reflow` 。那么在不得已使用 `table` 的场合，可以设置 `table-layout:auto` ；或者是 `table-layout:fixed` ；这样可以让 `table` 一行一行的渲染，这种做法也是为了限制 reflow 的影响范围。

- 如果 `CSS` 里面有计算表达式，每次都会重新计算一遍，出发一次 `reflow` 。

# 📏 六、性能优化相关

## 1、link 与 @import 的区别

`link` 是 `HTML` 方式， `@import` 是 `CSS` 方式。

`link` 最大限度支持**并行下载**， `@import` **过多嵌套导致串行下载**，出现 `FOUC` (文档样式短暂失效) 。

`link` 可以通过 `rel="alternate stylesheet"` 指定候选样式。

浏览器对 `link` 支持早于 `@import` ，可以使用 `@import` 对老浏览器隐藏样式。

`@import` 必须在样式规则之前，可以在其引入的 `css` 文件中再引用其他文件。

总体来说： `link` 优于 `@import` ， `link` 优先级也更高。

# 📐 七、布局相关

## 1、说下 css 的 IFC

`IFC` 是**行内格式上下文**，有以下特点：

- 内部的 `Box` 会水平放置；
- 水平的间距由 `margin`，`padding`，`border` 决定。

## 2、说下 css 的 BFC

### （1）BFC 是什么

`BFC` (Block Formatting Context) 是块级格式上下文，是 `Web` 页面中盒模型布局的 `CSS` 渲染模式，指一个独立的渲染区域或者说是一个隔离的独立容器。

### （2）形成 BFC 的五种条件（创建规则）

- 根元素（ `html` 就是一个 `bfc` ）
- 浮动元素（ `float` 不取值为 `none` ）
- 绝对定位元素（ `position` 取值为 `absolute` 或 `fixed` ）
- display 取值为 `inline-block` 、 `table-cell` 、 `table-caption` 、 `flex` 、`inline-flex` 之一的元素
- `overflow` 不取值为 `visible` 的元素（ `hidden` ， `auto`， `scroll` ）

### （3）BFC 的特性

- 内部的 `Box` 会在垂直方向上一个接一个的放置。
- 垂直方向上的距离由 `margin` 决定
- `bfc` 的区域不会与 `float` 的元素区域重叠。
- 计算 `bfc` 的高度时，浮动元素也参与计算
- `bfc` 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素。

### （4）BFC 的作用

- 可以包含浮动元素
- 不被浮动元素覆盖
- 阻止父子元素的 `margin` 折叠

## 3、BFC 会与 float 元素相互覆盖吗？为什么？举例说明

不会，因为 `BFC` 是页面中一个独立的隔离容器，其内部的元素不会与外部的元素相互影响，比如两个 `div` ，上面的 `div` 设置了 `float` ，那么如果下面的元素不是 `BFC` ，也没有设置 `float`，会形成对上面的元素进行包裹内容的情况，如果设置了下面元素为 `overflow：hidden` ；属性那么就能够实现经典的两列布局，左边内容固定宽度，右边因为是 `BFC` 所以会进行自适应。

## 4、行内元素 float:left 后是否变为块级元素？

行内元素设置成浮动之后变得更加像是 `inline-block` （行内块级元素，设置 成这个属性的元素会同时拥有行内和块级的特性，最明显的不同是它的默认宽度不是 `100%` ），这时候给行内元素设置 `padding-top` 和 `padding-bottom` 或者 `width` 、 `height` 都是有效果的

## 5、两个 div 上下排列，都设 margin，有什么现象？

- 都正取大
- 一正一负相加

问：为什么会有这种现象？你能解释一下吗？

- 是由块级格式上下文决定的， `BFC` ，元素在 `BFC` 中会进行上下排列，然后垂直距离由 `margin` 决定，并且会发生重叠，具体表现为同正取最大的，同负取绝对值最大的，一正一负，相加；
- `BFC` 是页面中一个独立的隔离容器，内部的子元素不会影响到外部的元素。

## 6、 清除浮动有哪些方法？

### （1）后果

不清除浮动会发生高度塌陷：浮动元素父元素高度自适应（父元素不写高度时，子元素写了浮动后，父元素会发生高度塌陷）

### （2）方法

- `clear` 清除浮动（添加空 `div` 法）在浮动元素下方添加空 `div` ,并给该元素写 `css` 样式：`{clear:both;height:0;overflow:hidden;}`；
- 给浮动元素**父级**设置高度；
- 父级同时浮动（需要给**父级同级元素**添加浮动）；
- 父级设置成 `inline-block` ，其 `margin: 0 auto` 居中方式失效；
- 给父级添加 `overflow:hidden` 清除浮动方法；
- 万能清除法 `after` 伪类清浮动（现在主流方法，推荐使用），代码如下：

```css
.float_div:after {
  content: '.';
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.float_div {
  zoom: 1;
}
```

## 7、讲一讲 flex 属性

了解 `flex` 布局吗，讲讲 `flex` 的 `css` 属性及其含义， `flex:1` 代表什么， `flex-basis` 什么含义？

- 弹性盒布局，`CSS3` 的新属性，用于方便布局，比如垂直居中
- `flex` 属性是 `flex-grow` 、 `flex-shrink` 和 `flex-basis` 的简写

## 8、了解 box-sizing 吗？说下 css 的盒子模型

### （1）css 盒模型

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括： 外边距（margin） 、 边框 （border） 、 内边距（padding） 、 实际内容（content） 四个属性。 CSS 盒模型：标准模型 + IE 模型

标准盒子模型：宽度=内容的宽度（content）+ border + padding

低版本 IE 盒子模型：宽度=内容宽度（content+border+padding），如何设置成 IE 盒子模型：

```css
box-sizing: border-box;
```

### （2） IE 盒子模型和 W3C 盒子模型

- W3C 盒模型： 内容(content)、填充( padding )、边界( margin )、 边框( border )；
  - box-sizing: content-box
  - width = content width;
- IE 盒子模型： IE 的 content 部分把 border 和 padding 计算了进去；
  - box-sizing: border-box
  - width = border + padding + content width

### （3）box-sizing 属性

`box-sizing` 属性可以被用来调整这些表现：

- `content-box` 是默认值。如果你设置一个元素的宽为`100px`，那么这个元素的内容区会有`100px`宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- `border-box` 告诉浏览器：你想要设置的边框和内边距的值是包含在 `width` 内的。也就是说，如果你将一个元素的 `width` 设为 `100px` ，那么这 `100px` 会包含它的 `border`和 `padding` ，内容区的实际宽度是 `width减去(border + padding)的值` 。大多数情况下，这使得我们更容易地设定一个元素的宽高。

## 9、说下 css3 的 flexbox

- `css3` 的 `flexbox` ，即**弹性盒布局模型**。它是一个用于页面布局的全新 `CSS3` 功能， `Flexbox` 可以把列表放在同一个方向（从上到下排列，从左到右），并让列表能延伸到占用可用的空间。
- 较为复杂的布局还可以通过嵌套一个伸缩容器（ `flex container` ）来实现。
- 采用 `Flex` 布局的元素，称为 `Flex` 容器（ `flex container` ），简称"容器"。
- 它的所有子元素自动成为容器成员，称为 `Flex` 项目（ `flex item` ），简称"项目"。
- 常规布局是基于块和内联流方向，而 `Flex` 布局是基于 `flex-flow` 流可以很方便的用来做局中，能对不同屏幕大小自适应。
- 在布局上有了比以前更加灵活的空间。

## 10、说下 css 的水平垂直居中

### （1）水平居中方法

- 元素为行内元素，设置父元素 `text-align:center`
- 如果元素宽度固定，可以设置左右 `margin` 为 `auto` ;
- 如果元素为绝对定位，设置父元素 `position` 为 `relative` ，元素设 `left:0;right:0;margin:auto` ;
- 使用 `flex-box` 布局，指定 `justify-content` 属性为 `center`
- `display` 设置为 `tabel-ceil`

### （2）垂直居中方法

- 将显示方式设置为表格， `display:table-cell` ，同时设置 `vertial-align:middle`
- 使用 `flex` 布局，设置为 `align-item：center`
- 绝对定位中设置 `bottom:0,top:0`，并设置 `margin:auto`
- 绝对定位中固定高度时设置 `top:50%`，`margin-top` 值为高度一半的负值
- 文本垂直居中设置 `line-height` 为 `height` 值

## 11、用 css2 和 css3 分别写一下垂直居中和水平居中

### （1）css2 方法

**水平居中：**

- div + margin: auto；
- span + text-align。

**垂直居中：**

- 使用 `position` 然后 `left/top` 和 `margin` 的方式垂直居中（已知宽高和未知宽高）；
- 使用 position + margin；
- 使用 display: table-cell。

### （2）css3 方法

**水平居中：**

- flex 布局

**垂直居中：**

- flex 布局

### （3）代码实现

#### Ⅰ. 已知宽高，进行水平垂直居中

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>已知宽高，进行水平垂直居中</title>
    <style>
      .outer {
        position: relative;
        width: 400px;
        height: 600px;
        background: yellow;
      }

      .inner {
        position: absolute;
        width: 200px;
        height: 300px;
        background: gray;
        left: 50%;
        top: 50%;
        margin: -150px 0 0 -100px;
      }
    </style>
  </head>

  <body>
    <div class="outer">
      <div class="inner"></div>
    </div>
  </body>
</html>
```

#### Ⅱ. 宽高未知，比如内联元素，进行水平垂直居中

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>宽高未知，比如内联元素，进行水平垂直居中</title>
    <style>
      .outer {
        position: relative;
        width: 400px;
        height: 600px;
        background: yellow;
      }

      .inner {
        position: absolute;
        background: gray;
        left: 50%;
        top: 50%;
        /* translate，指往x轴平移和往y平移；
                x轴：正数表示往右平移，负数表示往左平移
                y轴：正数表示往下平移，负数表示往上平移 */
        transform: translate(-50%, -50%);
      }
    </style>
  </head>

  <body>
    <div class="outer"><span class="inner">我想居中显示</span></div>
  </body>
</html>
```

#### Ⅲ. 绝对定位的 div 水平垂直居中

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用绝对定位的div进行水平垂直居中</title>
    <style>
      .outer {
        width: 400px;
        height: 600px;
        background-color: yellow;
        position: relative;
      }

      .inner {
        position: absolute;
        background: gray;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 200px;
        height: 300px;
        margin: auto;
      }
    </style>
  </head>

  <body>
    <div class="outer">
      <div class="inner">我想居中显示</div>
    </div>
  </body>
</html>
```

#### Ⅳ. 图片和其他元素使用 display: table-cell; 进行垂直居中

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用tabel-cell进行水平垂直居中</title>
    <style>
      .outer {
        width: 400px;
        height: 600px;
        background-color: yellow;
        /* 让其变为单元格元素 */
        display: table-cell;
        /* 文本的垂直居中方式 */
        vertical-align: middle;
      }

      .inner {
        background: gray;
        width: 200px;
        height: 300px;
        /* 当对行内元素设置margin和padding时，只有水平方向有效果，垂直方向没有效果 */
        /* 水平居中方式 */
        margin: 0 auto;
      }
    </style>
  </head>

  <body>
    <div class="outer">
      <div class="inner">我想居中显示</div>
    </div>
  </body>
</html>
```

#### Ⅴ. 使用 flex 布局进行水平垂直居中

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>css3实现垂直和水平居中</title>
  </head>
  <style>
    .outer {
      width: 400px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: yellow;
    }

    .inner {
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: gray;
    }
  </style>

  <body>
    <div class="outer">
      <div class="inner">居中显示</div>
    </div>
  </body>
</html>
```

## 12、CSS 实现自适应正方形、等宽高比矩形

### （1）方法

- padding 撑高
- 伪元素设置 `margin-top:100%` 撑高

### （2）代码实现

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS实现自适应正方形、等宽高比矩形</title>
  </head>
  <style>
    /* 第一种方法：padding撑高画正方形 */
    .outer1 {
      width: 400px;
      height: 600px;
      background-color: beige;
    }

    .inner1 {
      width: 100%;
      padding-bottom: 100%;
      background-color: green;
    }

    /* 第二种方法：伪元素设置margin-top */
    .inner2 {
      width: 100px;
      overflow: hidden;
      background-color: cadetblue;
    }

    .inner2::after {
      content: '';
      margin-top: 100%;
      /* 块状，让其可以设置宽高才能正常显示 */
      display: block;
    }
  </style>

  <body>
    <!-- 第一种方法：padding撑高画正方形 -->
    <div class="outer1">
      <div class="inner1"></div>
    </div>
    <!-- 第二种方法：伪元素设置margin-top -->
    <div class="inner2"></div>
  </body>
</html>
```

## 13、如何实现两栏布局

### （1）两栏布局是什么

所谓两栏布局，就是左边定宽，右边自适应。

### （2）方法

- `bfc` 和 `float`
- `flex`
- `position`

### （3）代码实现

#### Ⅰ. bfc 和 float 实现两栏布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>bfc和float实现两栏布局</title>
  </head>
  <style>
    div {
      height: 500px;
    }

    .aside {
      width: 200px;
      float: left;
      background-color: yellow;
    }

    .main {
      /* overflow:hidden 触发一个bfc */
      overflow: hidden;
      background-color: gray;
    }
  </style>

  <body>
    <div class="aside"></div>
    <div class="main"></div>
  </body>
</html>
```

#### Ⅱ. flex 实现两栏布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>flex实现两栏布局</title>
  </head>
  <style>
    div {
      height: 100%;
    }

    .container {
      display: flex;
    }

    .left {
      flex: 0 0 200px;
      /* flex-grow/flex-shrink/flex-basis */
      background-color: yellow;
    }

    .right {
      /* 
        当container_width > sum(flex_basis)时，flex-shrink值不会生效，各item根据flex-grow按比例分配剩余的空间
        当container_width < sum(flex_basis)时，flex-grow值不会生效，各item以flex-basis为基础值，根据flex-shrink按比例缩小
        */
      flex: 1 1;
      background-color: grey;
    }
  </style>

  <body>
    <div class="container">
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </body>
</html>
```

#### Ⅲ. position 实现两栏布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>position实现两栏布局</title>
  </head>
  <style>
    .container {
      display: flex;
      position: relative;
    }

    .left {
      position: absolute;
      width: 300px;
      background-color: yellow;
    }

    .right {
      width: 100%;
      margin-left: 300px;
      background-color: gray;
    }
  </style>

  <body>
    <div class="container">
      <div class="left">hello</div>
      <div class="right">hi</div>
    </div>
  </body>
</html>
```

## 14、如何实现三栏布局

### （1）三栏布局是什么

所谓三栏布局，就是左右定宽，右边自适应。

### （2）方法

- 圣杯布局
- 双飞翼布局
- `flex` 布局
- `position` 布局
- `float` 布局

### （3）代码实现

#### Ⅰ. 圣杯布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>实现三栏布局之圣杯布局</title>
  </head>

  <style>
    .container {
      padding: 0 300px 0 200px;
    }

    .center {
      float: left;
      background-color: yellow;
      width: 100%;
    }

    .left {
      float: left;
      width: 200px;
      background-color: green;
      margin-left: -100%;
      position: relative;
      left: -200px;
    }

    .right {
      float: left;
      width: 300px;
      margin-left: -300px;
      background-color: grey;
      position: relative;
      right: -300px;
    }
  </style>

  <body>
    <div class="container">
      <div class="center">中间区域</div>
      <div class="left">左侧区域</div>
      <div class="right">右侧区域</div>
    </div>
  </body>
</html>
```

#### Ⅱ. 双飞翼布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>实现两栏布局</title>
  </head>
  <style>
    .container {
      width: 100%;
      float: left;
      background-color: green;
    }

    .center {
      margin-left: 200px;
      margin-right: 300px;
    }

    .left {
      width: 200px;
      float: left;
      background-color: yellow;
      margin-left: -100%;
    }

    .right {
      width: 300px;
      float: left;
      background-color: grey;
      margin-left: -300px;
    }
  </style>

  <body>
    <!-- 
        与圣杯模式相似，只是中间盒子增加一个内容盒子，用内容盒子设置左右margin，留给左右盒子，避免内容被遮挡。(不需要定位了)
        1：中间盒子宽度width:100%;独占一行
        2：三个盒子设置float： left;
        3：使用margin-left属性将左右两边的盒子拉回与中间盒子同一行
            .left{ margin-left: -100%};向左走一个父盒子的宽度
            .right{ margin-left: 负的自身宽度}
        4: 中间主盒子里面的内容盒子设置左右margin，避免被遮挡内容 
    -->
    <div class="container">
      <div class="center">center</div>
    </div>
    <div class="left">left</div>
    <div class="right">right</div>
  </body>
</html>
```

#### Ⅲ. flex 布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>flex实现三栏布局</title>
  </head>
  <style>
    .container {
      display: flex;
    }

    .center {
      flex: 1 1;
      /* order 用于设置弹性盒对象元素的顺序 */
      order: 2;
      background-color: yellow;
    }

    .left {
      flex: 0 0 200px;
      order: 1;
      background-color: green;
    }

    .right {
      flex: 0 0 300px;
      order: 3;
      background-color: gray;
    }
  </style>

  <body>
    <div class="container">
      <div class="center">center</div>
      <div class="left">left</div>
      <div class="right">right</div>
    </div>
  </body>
</html>
```

#### Ⅳ. position 布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>position实现两栏布局</title>
  </head>
  <style>
    div {
      height: 500px;
    }

    .container {
      position: relative;
    }

    .left {
      width: 200px;
      background-color: green;
      position: absolute;
      left: 0;
      top: 0;
    }

    .right {
      width: 200px;
      background-color: yellow;
      position: absolute;
      right: 0;
      top: 0;
    }

    .middle {
      background-color: grey;
      margin-left: 200px;
      margin-right: 200px;
    }
  </style>

  <body>
    <div class="container">
      <div class="left">left</div>
      <div class="middle">middle</div>
      <div class="right">right</div>
    </div>
  </body>
</html>
```

#### Ⅴ. float 布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>float实现三栏布局</title>
  </head>
  <style>
    div {
      height: 500px;
    }

    .left {
      float: left;
      width: 200px;
      background-color: green;
    }

    .right {
      float: right;
      width: 200px;
      background-color: yellow;
    }

    .middle {
      background-color: grey;
      /* 触发一个bfc */
      overflow: hidden;
    }
  </style>

  <body>
    <div class="container">
      <div class="left">left</div>
      <div class="right">right</div>
      <div class="middle">middle</div>
    </div>
  </body>
</html>
```

# 💡 八、结束语

对于 `css` 的面试来说， `position` 、 `css` 选择器优先级以及手写各种布局是久经不衰的话题。所以在复习的过程中，要理解清楚各个知识点所涉及到的内容，这样，在面试中就不难被面试官问倒啦！

到这里，关于 `css` 的常考面试题讲解就结束啦！希望对大家有帮助~

如文章有误或有想补充的新内容，欢迎加我微信指出呀，👉 `vx: MondayLaboratory` ~

往后专栏内容如有新补充也将放在下面的**更新地址**，大家可以戳下方链接直达！

# 🐣 彩蛋 One More Thing

## （：资料获取

👉 微信关注公众号 `星期一研究室` ，回复关键字 `css面试pdf` 即可获取相关资料~

👉 回复 `面试大全pdf` 可获取全系列资料！

## （：更新地址

👉 [offer 来了面试专栏](https://juejin.cn/column/7007991853089849351)

## （：番外篇

- 如果您觉得这篇文章有帮助到您的的话不妨点赞支持一下哟~~😉
- 以上就是本文的全部内容！我们下期见！👋👋👋
