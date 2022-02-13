---
title: 「offer来了」面试中必考的15个html知识点
author: 周一
date: '2021-12-12'
categories:
  - 前端开发
tags:
  - offer来了
sidebar: 'auto'
---

# ⚡ 序言

对于前端开发人员来说， `html` 可能是最早接触的一门语言之一。基本上刚开始学前端，都会先学 `html` 。虽说它的内容看起来不多，但是在面试中，还是有一些考点需要我们去注意。下面就 `html` 在前端面试中的考点，进行介绍。一起来学习吧~🧐

# ⭐ 一、题集内容抢先看

![html面试题复习框架](https://img-blog.csdnimg.cn/6de4a4c8e77f421693b355859bec0394.png#pic_center)

# 🌠 二、规范相关

## 1、你如何理解 HTML 结构的语义化

- 更符合 `W3C` 统一的规范标准，是**技术趋势**。
- 没有样式时浏览器的默认样式也能让页面结构很清晰。
- 对功能障碍用户友好。屏幕阅读器（如果访客有视障）会完全根据你的标记来“读”你的网页。
- 对其他非主流终端设备友好。例如机顶盒、 `PDA` 、各种移动终端。
- 对 `SEO` 友好。

## 2、浏览器是怎么对 Html5 的离线储存资源进行管理和加载的呢

**是什么：**

- 在线的情况下，浏览器发现 `html` 头部有 `manifest` 属性，它会请求 `manifest` 文件，如果是第一次访问 `app` ，那么浏览器就会根据 `manifest` 的内容下载相应的资源并且进行离线存储。
- 如果已经访问过 `app` 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 `manifest` 文件与旧的 `manifest` 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

**如何使用：**

- 页面头部像上面一样加入一个 `manifest` 的属性；
- 在 `cache.manifest` 文件下**编写离线存储的资源**；
- 在**离线状态**时，操作 `window.applicationCache` 进行需求实现。

## 3、HTML W3C 的标准

标签闭合、标签小写、不乱嵌套、使用外链 `css` 和 `js` 、结构行为表现的分离。

## 4、Doctype 作用? 严格模式与混杂模式如何区分？它们有何意义?

- `<!DOCTYPE>` 声明位于文档中的最前面，处于 `html` 标签之前。告知浏览器的解析器， 用什么文档类型、规范来解析这个文档。
- 严格模式的排版和 `JS` 运作模式是**以该浏览器支持的最高标准**运行。
- 在**混杂模式**中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以**防止站点无法工作**。
- `DOCTYPE` 不存在或格式不正确会导致文档以**混杂模式**呈现。

## 5、viewport 的 content 属性作用

```html
<meta name="viewport" content="" /> width – viewport的宽度[device-width |
pixel_value]width如果直接设置pixel_value数值，大部分的安卓手机不支持，但是ios支持；
height – viewport 的高度 （范围从 223 到 10,000 ） user-scalable [yes |
no]是否允许缩放 initial-scale [数值] 初始化比例（范围从 > 0 到 10）
minimum-scale [数值] 允许缩放的最小比例 maximum-scale [数值] 允许缩放的最大比例
target-densitydpi
值有以下（一般推荐设置中等响度密度或者低像素密度，后者设置具体的值
dpi_value，另外webkit内核已不准备再支持此属性） -- dpi_value
一般是70-400//没英寸像素点的个数 -- device-dpi设备默认像素密度 -- high-dpi
高像素密度 -- medium-dpi 中等像素密度 -- low-dpi 低像素密度
```

**附带问题：** 怎样处理 移动端 `1px` 被 渲染成 `2px` 问题?

**局部处理：**

`meta` 标签中的 `viewport` 属性 ， `initial-scale` 设置为 `1` 。

`rem` 按照设计稿标准走，外加利用 `transfrome` 的 `scale(0.5)` 缩小一倍即可。

**全局处理：**

`meta` 标签中的 `viewport` 属性 ， `initial-scale` 设置为 `0.5` 。

`rem` 按照设计稿标准走即可。

## 6、meta 相关

```html
<!DOCTYPE html>
<!--H5标准声明，使用 HTML5 doctype，不区分大小写-->
<head lang="”en”">
  <!--标准的 lang 属性写法-->
  <meta charset="’utf-8ʹ" />
  <!--声明文档使用的字符编码-->
  <meta http-equiv="”X-UA-Compatible”" content="”IE" ="edge,chrome" ="1″" />
  <!--优先使用指定浏 览器使用特定的文档模式-->
  <meta name="”description”" content="”不超过150个字符”" />
  <!--页面描述-->
  <meta name="”keywords”" content="””" />
  <!-- 页面关键词-->
  <meta name="”author”" content="”name," email@gmail.com” />
  <!--网页作者-->
  <meta name="”robots”" content="”index,follow”" />
  <!--搜索引擎抓取-->
  <meta
    name="”viewport”"
    content="”initial-scale"
    ="1,"
    maximum-scale="3,"
    minimum-sc
    <meta
    name="”apple-mobile-web-app-title”"
    content="”标题”"
  />
  <!--iOS 设备 begin-->
  <meta name="”apple-mobile-web-app-capable”" content="”yes”" />
  <!--添加到主屏后的标 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏-->
  <meta name="”apple-mobile-web-app-status-bar-style”" content="”black”" />
  <meta name="”renderer”" content="”webkit”" />
  <!-- 启用360浏览器的极速模式(webkit)-->
  <meta http-equiv="”X-UA-Compatible”" content="”IE" ="edge”" />
  <!--避免IE使用兼容模式-->
  <meta http-equiv="”Cache-Control”" content="”no-siteapp”" />
  <!--不让百度转码-->
  <meta name="”HandheldFriendly”" content="”true”" />
  <!--针对手持设备优化，主要是针对一些老的 不识别viewport的浏览器-->
  <meta name="”MobileOptimized”" content="”320″" />
  <!--微软的老式浏览器-->
  <meta name="”screen-orientation”" content="”portrait”" />
  <!--uc强制竖屏-->
  <meta name="”x5-orientation”" content="”portrait”" />
  <!--QQ强制竖屏-->
  <meta name="”full-screen”" content="”yes”" />
  <!--UC强制全屏-->
  <meta name="”x5-fullscreen”" content="”true”" />
  <!--QQ强制全屏-->
</head>
```

# 💫 三、标签相关

## 1、说说 title 和 alt 属性

- 两个属性都是**当鼠标滑动到元素上的时候**显示。
- `alt` 是 `img` 的特有属性，是**图片内容的等价描述**，图片无法正常显示时候的替代文字。
- `title` 属性可以用在除了`base`，`basefont`，`head`，`html`，`meta`，`param`，`script`和`title` 之外的所有标签，是**对`dom`元素的一种类似注释说明**。

## 2、 iframe 有那些缺点？

- `iframe` 会阻塞主页面的 `Onload` 事件
- 搜索引擎的检索程序无法解读这种页面， 不利于 `SEO`
- `iframe` 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
- 使用 `iframe` 之前需要考虑这两个缺点。如果需要使用 `iframe` ，最好是通过 `javascript` 动态
- 给 `iframe` 添加 `src` 属性值，这样可以绕开以上两个问题

## 3、Html5 有哪些新特性、移除了哪些元素

### （1）新增元素

- 绘画 `canvas`
- 用于媒介回放的 `video` 和 `audio` 元素
- 本地离线存储 `localStorage` 长期存储数据，浏览器关闭后数据不丢失
- `sessionStorage` 的数据在浏览器关闭后会自动删除
- 语义化更好的内容元素，比如 `article` 、`footer`、`header`、`nav`、`section`
- 表单控件 ， `calendar` 、 `date` 、 `time` 、 `email` 、 `url` 、 `search`
- 新的技术 `webworker` 、 `websocket` 、 `Geolocation`

### （2）移除的元素

- 纯表现的元素： `basefont` 、 `big` 、 `center` 、 `font` 、 `s` 、 `strike` 、 `tt` 、 `u`
- 对可用性产生负面影响的元素： `frame` 、 `frameset` 、 `noframes`

### （3）支持 HTML5 新标签

- `IE8/IE7/IE6` 支持通过 `document.createElement` 方法产生的标签。
- 可以利用这一特性让这些浏览器支持 `HTML5` 新标签。
- 浏览器支持新标签后，还需要添加标签默认的样式。

## 4、Label 的作用是什么？是怎么用的？

`label` 标签用来定义**表单控制间**的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

```html
<label for="Name">Number:</label>

<input type="“text“name" ="Name" id="Name" />

<label>Date:<input type="text" name="B" /></label>
```

## 5、div+css 的布局较 table 布局有什么优点

- 改版的时候更方便，只需要修改 `css` 文件。
- 页面加载速度更快、结构化清晰、页面显示简洁。
- 表现与结构相分离。
- 易于优化 `seo` ，搜索引擎更友好，排名更容易靠前。

## 6、简述一下 src 与 href 的区别

- `src` 用于替换当前元素， `href` 用于在当前文档和引用资源之间确立联系。
- `src` 是 `source` 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求 `src` 资源时会将其指向的资源下载并应用到文档内，例如 `js` 脚本， `img` 图片和 `frame` 等元素。

- 同时， `src` 指的是，当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也就是为什么将 `js` 脚本放在底部而不是头部。
- `href` 是 `Hypertext Reference` 的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加 `<link href="common.css" rel="stylesheet">` ，那么浏览器会识别该文档为 `css` 文件，就会**并行下载资源**并且不会停止对当前文档的处理。这也是为什么建议使用 `link` 方式来加载 `css` ，而不是使用 `@import` 方式。

## 7、知道网页制作会用到的图片格式有哪些吗

- `png-8`，`png-24`，`jpeg`，`gif`，`svg`。
- 但是上面的那些都不是面试官想要的最后答案。面试官希望听到是 Webp。（考察是否有关注新技术，新鲜事物）
- 科普一下 `Webp` ： `WebP` 格式，谷歌（`google`）开发的一种旨在**加快图片加载速度**的图片格式。图片压缩体积大约只有 `JPEG` 的 `2/3` ，并能节省大量的服务器带宽资源和数据空间。`Facebook` 、 `Ebay` 等知名网站已经开始测试并使用 `WebP` 格式。
- 在质量相同的情况下， `WebP` 格式图像的体积要比 `JPEG` 格式图像**小 40%**。

## 8、如何在 HTML5 页面中嵌入音频与视频？

`HTML5` 包含嵌入音频文件的标准方式，支持的格式包括 `MP3`、`Wav` 和 `Ogg`：

```html
<audio controls>
  <source src="jamshed.mp3" type="audio/mpeg" />
  Your browser does'nt support audio embedding feature.
</audio>
```

和音频一样，`HTML5` 定义了嵌入视频的标准方法，支持的格式包括：`MP4`、`WebM` 和 `Ogg`：

```html
<video width="450" height="340" controls>
  <source src="jamshed.mp4" type="video/mp4" />
  Your browser does'nt support video embedding feature.
</video>
```

## 9、HTML 全局属性(global attribute)有哪些

- `class` ：为元素设置类标识
- `data-*` ：为元素增加自定义属性
- `draggable` ：设置元素是否可拖拽
- `id` ：元素 `id` ，文档内唯一
- `lang` ：元素内容的的语言
- `style` ：行内 `css` 样式
- `title` ：元素相关的建议信息

# ✨ 四、结束语

`html` 相关的内容在面试中考察的部分不多，但该记忆的内容还是得稍微记一下，以防在面试中突然被面试官问倒。

关于 `html` 相关的题目整理到这里就结束啦！希望对大家有帮助！

如文章有误或有想补充的新内容，欢迎加我微信指出呀，👉 `vx: MondayLaboratory`~

周一在整个春秋招备试的过程中，深知**从 0 到 1**准备是非常不容易的。也想要把我所学的所有内容进行整理，让这个面试专栏更加尽善尽美，造福更多在准备面试的小伙伴~💬

往后专栏内容如有新补充也将放在下面的**更新地址**，大家可以戳下方链接直达~

# 🐣 彩蛋 One More Thing

## （：资料获取

👉 微信关注公众号 `星期一研究室` ，回复关键字 `html面试pdf` 即可获取相关资料~
👉 回复 `面试大全pdf` 可获取全系列资料！

## （：更新地址

👉 [offer 来了面试专栏](https://juejin.cn/column/7007991853089849351)

## （：番外篇

- 如果您觉得这篇文章有帮助到您的的话不妨点赞支持一下哟~~😉
- 以上就是本文的全部内容！我们下期见！👋👋👋
