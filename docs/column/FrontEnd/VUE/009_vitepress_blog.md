---
title: vitepress从0到1，让每个前后端小伙伴都拥有一个属于自己的博客
author: 周一
date: '2023-05-27'
categories:
  - 前端开发
  - vue.js
sidebar: 'auto'
---



![封面](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271743078.png)

# 📸前言

之前周一的个人博客是用`vuepress`来搭建，但随着文章的数量越来越多，导致每回在启动的时候构建都特别慢，于是周一有了改构建工具的想法。这不，`vitepress`工具自发布后，在技术圈内一直有些火热，于是周一就想着把博客的整体升级为`vitepress`。在搜罗了官方文档等各大网站的资料后，总结出了以下这篇教程。希望能帮助到正想要搭建博客的小伙伴们~

在下面的文章中，将带你**从0到1**用`vitepress`搭建一个个人博客，从初始化到项目部署。一起来看看~🕵️

# 一、📡项目启航

## 1.1 将会收获

学完这篇文章，你将会收获以下内容：

- 自定义首页样式
- 拥有一个可自定义的侧导
- 高度自定义化一个专属个人的博客

## 1.2 快速搭建

首先创建并进入一个新目录：

```Bash
mkdir vitepress-demo-mondaylab && cd vitepress-demo-mondaylab
```

接着，使用你喜欢的包管理器进行初始化。这里我用`pnpm`，如下代码所示：

```Bash
# 如果没有安装过pnpm，可以全局安装下
sudo npm install -g pnpm

# 用pnpm初始化
pnpm init
```

项目初始化完成以后，使用`pnpm`将`vitepress`安装为本地依赖。如下代码所示：

```Bash
# 安装命令
pnpm add vitepress -D

# 如果使用pnpm初始化的话，需要在package.json加上一下代码
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search"
    ]
  }
}
```

在vitepress官方文档中提到，vitepress附带了一个命令行向导，来帮助我们构建一个基本的项目。通过以下命令来执行该操作：

```Bash
pnpm exec vitepress init
```

构建完成如下图所示：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271045378)

此时文件的目录结构是这样的，日下树状代码所示：

```Bash
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md 入口文件
└─ package.json
```

到这里，我们就基本完成了`vitepress`项目的初始化。最后，我们运行 `pnpm run docs:dev` 来打开项目。效果如下:

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271706282.png)

# 二、📹美化个人博客

基础框架我们已经搭建完成，但看着博客的整体内容还比较少。接下来我们需要对博客进行进一步美化。

## 2.1 整体布局

首先，我们需要了解下博客的整体布局，才能更好的做美化。

### 1、首页

对于`vitepress`来说，刚进去的那一刻，映入眼帘的就是**首页**，也就是`docs/index.md`这个文件。首页主要由以下五个部分组成：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271703443.png)

对于首页来说，我们一般会比较少去放侧边栏，更多地是放一些个人博客的概述。下面我们先来继续了解下普通文章页面的布局，配置修改放后面。

### 2、普通文章

对于普通文章页面来说，我们一般会在左侧放专栏的文章，中间放当前文章的内容，右边放文章的**锚点导航**。具体如下：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271703680.png)

## 2.2 内容完善

上面，我们了解了整体布局。接下来，依据这个布局，我们来说一步步的修改。

### 1、导航条美化navbar

在上面的两张图当中，会发现到，它们共同的部分都是**序号①**，也就是`navbar`。因此，我们先来对这部分进行美化。

#### **（1）左上角-logo和名称自定义**

修改`docs/.vitepress/config.ts`文件下的配置，具体代码为：

```JavaScript
export default defineConfig({
    title: 'mondaylab-blog-demo', // 标题
    themeConfig: {
        logo: '/avatar.png' // 表示docs/public/avartar.png
    }
})
```

**具体展示效果为：**

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271703187.png)

#### **（2）右上角-导航内容自定义**

接下来美化右上角部分，首先先确定nav在`docs/.vitepress/config.ts`文件的位置，具体如下👇🏻：

```JavaScript
export default defineConfig({
    themeConfig: {
        nav: [] // 这里传入一个数组，将相关的导航栏信息传递进来
    }
})
```

位置有了，接下来我们来定义`navbar`的内容。具体代码如下：

```JavaScript
// docs/.vitepress/relaConf/index.ts 配置内容较多，单独起个文件
export * from './navbar';

// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '个人成长',
    items: [
      {
        text: '大江南北游记',
        link: '/column/Travel/' // 表示docs/column/Travel/index.md
      },
      {
        text: '所思·所想',
        link: '/column/Growing/' // 表示docs/column/Growing/index.md
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
      {
        text: '掘金',
        link: 'https://juejin.cn/user/3131845139247960/posts'
      },
      {
        text: '飞书社区',
        link: 'https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink'
      }
    ]
  }
];

// 在config.ts中引用
import { defineConfig } from 'vitepress';
import { nav } from './relaConf';

export default defineConfig({
    themeConfig: {
        nav: nav, // 把定义的nav给替换进来
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' } // 右上角github图标
        ]
    }
})
```

到这里，我们就完成了`navbar`的美化。具体来看下效果：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271704406.png)

### 2、首页美化home

对于首页部分来说，就是上面首页图中的序号②。我们来对这部分进行美化。

#### （1）layout选择

首页部分的配置在`docs/index.md`文件，具体来看下面这些配置项：

```Bash
---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: 周一的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
    name: 周一同学
    text: Stay foolish, Stay hungry.
    tagline: /斜杠青年/人间清醒/工具控/
    image:
        # 首页右边的图片
        src: /avatar.png
        # 图片的描述
        alt: avatar
    # 按钮相关
    actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 个人成长
      link: /column/Growing/
# 按钮下方的描述
features:
  - icon: 🤹♀️
    title: Web前端
    details: 大厂程序媛，国内某互联网厂搬砖。
    link: /column/views/guide
  - icon: 👩🎨
    title: 喜欢美学
    details: 热爱一切美学，喜欢用各种设计工具造图。
  - icon: 🧩
    title: 斜杆青年
    details: 是个平平无奇但是又很热爱学习的斜杆青年。
---
```

**来看下效果：**

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271704936.png)

到此，一个像模像样的首页就有了。但有些同学会觉得，自定义力度还不够，比如说想在页面的下方再加点图片或者图标之类的，那下面我们就来说说，在vitepress中如何自定义组件。

#### （2）自定义组件

首先，我们在`docs/.vitepress/components`文件夹下定义一个文件，名为`home.vue`。然后在里面写些想要展示的内容所对应的代码，**比如：**

```HTML
<template>
  <div class="home-wrapper">
    <div v-for="item in list" :key="item" class="home-item">{{ item }}</div>
  </div>
</template>

<script lang="ts" setup>
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<style scoped>
.home-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.home-item {
  vertical-align: middle;
  margin: 4px 4px 10px;
  padding: 4px 8px;
  font-weight: bolder;
  display: inline-block;
  cursor: pointer;
  border-radius: 2px;
  line-height: 13px;
  font-size: 13px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
}
</style>
```

接着，在`docs/index.md`中引入，具体如下：

```Markdown
---
#
#
#
---

<!-- 自定义组件 -->
<script setup>
import home from './components/home.vue';
</script>

<home />
```

下面来看实现后的效果：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271704682.png)

这样，我们就实现了相应的自定义内容。按照这个思路，我们也可以在组件里面写各种自己想要添加的东西，达到**页面自定义**的效果。

到这里，navbar和主页都完成了，下面就要去写文章了。那这里有的小伙伴就会开始疑问：①文章的目录怎么存放？②不同的专栏怎么独立分类？③侧边栏怎么展示？④h1~h6的标题怎么对齐锚点？

不着急，下面我们一个个来逐一突破。

### 3、侧边栏美化Sidebar

看2.1中的第2点我们可以知道，文章页面包括**序号②③④**三个部分。那我们先来看看，怎么定义侧边栏。

#### （1）定义入口

假设说我们现在有一个专栏，叫**数据结构与算法**。那么我们会先去`navbar`定义入口。入口代码在`docs/relaConf/navbar.ts`，定义内容如下：

```TypeScript
export const nav: DefaultTheme.NavItem[] = [
    {
    text: '前端开发',
    items: [
      {
        text: '数据结构与算法',
        link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
      }
    ]
  }
]
```

定义完成之后，来看下现在的效果：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271704190.png)

此时大家会发现，左边的侧边栏莫名奇妙的。其实这是因为，在我们刚开始初始化项目的时候，脚手架给我们预置的侧边栏内容，对应 `docs/.vitepress/config.ts`中的`themeConfig.sidebar`。下面，我们来改造这个位置的内容。

#### （2）侧边栏规范化

我们当前只是定义了“数据结构与算法”专栏的入口文件，那在这个页面中的侧边栏，我们要展示的是「数据结构与算法」这个专栏所要填充的文章。比如：栈、队列、字典和集合等等。

那接下来，我们先去专栏下面建立相关文章的md文件。在`docs/column/Algorithm`文件下定义以下几个文件：

```Bash
|——— docs
  |——— column
    |——— Algorithm
      |——— 001_stack.md // 里面可以先随意填充些可辨识的内容
      |——— 002_queue.md
      |——— 003_dictionary.md
      |——— 004_truee.md
      |——— index.md
```

想要生成侧边栏的内容有了，下面我们去给侧边栏做相应的配置。同样，考虑到以后会生成很多侧边栏，我们同样把`sidebar`单独抽离成文件。**具体代码如下：**

```JavaScript
// docs/.vitepress/relaConf/index.ts 配置内容较多，单独起个文件
export * from './sidebar';

// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/Algorithm/': [
     // 第一部分
    {
      text: '栈和队列',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/column/Algorithm/001_Stack'
        },
        {
          text: '队列-事件循环',
          link: '/column/Algorithm/002_Queue'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/column/Algorithm/003_Dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/column/Algorithm/004_Tree'
        }
      ]
    }
  ]
};


// 在config.ts中引用
import { defineConfig } from 'vitepress';
import { nav } from './relaConf';

export default defineConfig({
    themeConfig: {
        sidebar: sidebar, // 把定义的sidebar给替换进来
    }
})
```

最终，我们来看下实现的效果。**具体如下图所示：**

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271704846.png)

这样，就成功替换了当前专栏的侧边栏。这里我们只对一个专栏做侧边导航栏配置，如果有多个专栏的情况下，按照上面的方法，继续叠加配置即可。

写到这里的时候，周一突然发现个问题，侧边栏的配置每回更新都要去手动修改，有时候又很容易出现错误订正的情况。然后我就在想，有没有什么办法，可以通过npm包等方式，来自动生成sidebar的配置？

于是找到了这篇文章：[基于目录为VitePress生成侧边栏 - 掘金](https://juejin.cn/post/7169108165198348302#comment)。实践了一番下来，周一觉得跟自己平常的归类整理方式相比，自定义化的程度比较低。因此这里不再做详细介绍，大家各取所需~

### 4、正文排版Markdown

侧边导航栏介绍完毕，下面我们来了解下正文的排版。有一小部分小伙伴可能不知道`markdown`语法，所以在对文章排版的时候，会自上而下地用黑体字来处理。

这里，我们来讲讲平常经常会排版的方式，就是`markdown`语法。`vitepress`官网也对`markdown`做了很好的支持，[具体可以戳此链接](https://vitepress.dev/guide/markdown)。

#### （1）md基础语法

```Markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

『- 空格』 无需列表
『1. 空格』有序列表

*** 分割线
--- 分割线

$$文字$$  方程式latex

『**文字**』 加粗字体
『*文字*』 斜体

『```代码语言 空格』  代码块

『> 空格』 引用
```

#### （2）vitepress对md的支持

上面我们介绍了最简单的`markdown`语法，还有另一个要提到的问题是，vitepress官方对markdown的扩展支持。

**包括但不限于emoji：**

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271704887.png)

**或者高亮信息：**

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271704246.png)

还有其他很多种类型的扩展支持，这里不再赘述。**具体可戳此链接查看：**https://vitepress.dev/guide/markdown#header-anchors

#### （3）最后更新时间

到这里，我们已经了解了`md`的大部分内容。配置到一半的时候，细心的小伙伴可能已经发现，在正文的最后，有个**最后更新时间LastUpdated**的样式。这其实是因为我们在`docs/index.md`文件里配置了这个文件，所以展示了这个样式。**代码如下：**

```Bash
---
lastUpdated: true
---
```

### 5、锚点导航Anchor

现在，我们来到锚点导航。锚点导航对应的是，`2.1` 第 `2` 点中的**④**区域。也就是说，点击其对应的导航，就能够跳转到文章对应地页面位置上。类似于掘金右边导航的这种效果~

回到正题，怎么配置呢？回答`.vitepress/config.ts`文件，在`themeConfig`中配置`outline`。**具体如下代码所示：**

```TypeScript
themeConfig: {
    outline: {
      level: [2, 6],
      label: '目录'
    }
  }
```

**具体展示效果如下：**

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271705337.png)

值得注意的是📢，目前锚点导航只能配置**h2-h6级**的标题，**h1标题**暂时不能配置。看了下`github`，发现有小伙伴提了`issue`，但似乎目前还没解决。静等官方解决……

## 2.3 配色相关

### 1、修改主题色

上面描述了内容主体的整体布局，接下来谈谈整体配色。也就是，整体的绿色如何更换成其他颜色呢？

首先，我们需要确定想要更换的颜色色调，需要稍微统一一下。这里推荐个网站：https://coolors.co/palettes。

可以先在上面这个网站找一套自己喜欢的颜色，比如紫色：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271705111.png)

之后呢，要做的就是，把`vitepress`项目中对应的全局变量的颜色给替换掉。**具体操作如下：**

```TypeScript
// 在.vitepress/theme/index.ts文件
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default {
  ...DefaultTheme
};
// 在.vitepress/theme/custom.css文件
/* color vars: https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css */
/* purple brand color: https://coolors.co/palette/dec9e9-dac3e8-d2b7e5-c19ee0-b185db-a06cd5-9163cb-815ac0-7251b5-6247aa */

/* Color Base */
:root {
  --vp-c-purple: #b185db;
  --vp-c-purple-light: #c19ee0;
  --vp-c-purple-lighter: #d2b7e5;
  --vp-c-purple-dark: #a06cd5;
  --vp-c-purple-darker: #9163cb;

  /* 设置字体颜色 */
  /* --vp-home-hero-name-color: transparent; */
  /* --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff); */

  /* 设置右图像渐变 */
  --vp-home-hero-image-background-image: linear-gradient( -45deg, #8e99ee 50%, #ffffff 50% );
  --vp-home-hero-image-filter: blur(150px);

}

/* Color Theme */
:root {
  --vp-c-brand: var(--vp-c-purple);
  --vp-c-brand-light: var(--vp-c-purple-light);
  --vp-c-brand-lighter: var(--vp-c-purple-lighter);
  --vp-c-brand-dark: var(--vp-c-purple-dark);
  --vp-c-brand-darker: var(--vp-c-purple-darker);
}
```

这样，我们就完成整体主题色的替换：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271705514.png)

大家可以看到，整体变成了以**紫色调**为主，右图像的渐变也有了。如果还想要修改其他跟主题色相关的颜色，可以看下官方`github`上的变量说明，进行相应的修改。

这里附上官方网站的详细说明：https://vitepress.dev/guide/extending-default-theme#customizing-css ；

以及`github`的变量地址：https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css

### 2、更换主题

当我搭建到这一步的时候，就开始想着`vitepress`有没有像`vuepress-theme-reco`类似的主题。很遗憾的是，暂时还没看到。

不过在掘金社区里搜到一些博主自己搭建了一些主题，这里不做详细介绍，感兴趣的同学可以前往查看。戳链接：

- @sugarat/theme - https://theme.sugarat.top/
- [一个简约风的VitePress博客主题](https://juejin.cn/post/7196517835380293693#heading-1)

# 三、🎥其他周边

## 3.1 搜索功能

谈到搜索，`vitepress`支持两种搜索模式：**本地搜索**和**algolia**。对于`algolia`来说，相当于把网站的数据丢给`algolia`，然后当你在网站上进行搜索时，会向`algolia`发送一个请求，然后呢，`algolia`在你上传的数据中进行搜索，之后把结果返回给你，就可以在网站上进行展示。这种方式相对比较繁琐些，这里不详细介绍，有需要可以查看这篇文章：[vitepress 如何开启 algolia 全文搜索](https://fyzhu.github.io/2022/11/01/vitepress-如何添加-algolia-搜索/)。

另一种方式是：**本地搜索**。本地搜索只需要这样处理即可：

```TypeScript
// .vitepress/config.ts

import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
```

## 3.2 国际化i18n

对于个人博客来说，一般只用到中文。不过有的小伙伴可能会想要兼容下中英文，那么可以使用**国际化i18n**来解决。`vitepress`提供了这个解决方案：

```TypeScript
// .vitepress/config.ts
themeConfig: {
    i18nRouting: true
}
```

具体路由配置见这里：https://vitepress.dev/reference/default-theme-config#i18nrouting

# 四、📽Github Page部署

到这里，我们基本完成了一个博客的搭建。那搭建完成以后，就是发布上线啦~

这里采用的是`Github Page`来进行部署，值得注意的是，如果要用`Github Page`来部署，那么需要在`git`上的仓库需要是`public`状态哦~

首先，我们在Github上新建一个仓库，假设命名为`vitepress-demo-mondaylab`。之后，我们需要再去 `config.ts` 文件里，做相应的配置。具体如下：

```ts
export default defineConfig({
  	base: '/vitepress-demo-mondaylab/',
  	title: 'mondaylab-demo-blog',  // 这里将会影响之后生成的根路径
  })
```

其次，在根目录下创建一个文件夹，名为`vitepress-starter`。之后，建立一个文件，名为`deploy.sh`。具体代码如下：

```Bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# Jacqueline712/mondaylab-blog 替换为自己的用户名和对应的仓库名
# 意思为将master构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~
git push -f git@github.com:Jacqueline712/vitepress-demo-mondaylab.git master:gh-pages

cd -
```

之后，先把我们调试完成的代码，推到`github`上的`master`分支上，然后跑脚本，发布到生产环境。本地终端运行如下代码：

```Bash
git add .
git commit -m "xxx"
git push origin HEAD:refs/for/master
sh ./vitepress-starter/deploy.sh
```

最后，可以在仓库的 `Setting → Pages` 中看到最后的地址：

![部署图片](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305271705108.png)

访问上面圈中的地址，就可以正常进行访问啦~

最后，放上此次搭建的`demo`地址，可以直接`fork`，然后将相关的文字等内容进行修改即可。

具体地址戳：https://github.com/Jacqueline712/vitepress-demo-mondaylab

# 五、🎙结束语

在搭建博客的过程中，我突然意识到，文档在日常开发中的使用还蛮广泛的。小到一个组件库的文档说明，大到一个产品的使用说明等等，都需要文档。

这篇文章也**从0到1**讲解了用`vitepress`搭建一个博客的全过程，希望对大家有帮助~

如果有一些好玩的周边插件，记得评论区分享呀~

Ending，我们下次见！🍻🍻🍻

# 💡参考资料

**如果想要从vuepress直接升级为vitepress，可以参考：**

- [vuepress升级成vitepress - 掘金](https://juejin.cn/post/7021062842790969381#heading-5)
- [如何理解vitepress以及怎么将vuepress升为vitepress - 编程语言 - 亿速云](https://www.yisu.com/zixun/618840.html)
- [Migration from VuePress | VitePress](https://vitepress.dev/guide/migration-from-vuepress#migration-from-vuepress)

**官方文档：**

- 中文版 - [vitepress 中文文档 🎉 - 掘金](https://juejin.cn/post/7147274707060916232)
- 英文版 - https://vitepress.dev/

**其他：**

- [vuepress博客搭建系列 - 保姆级教程](https://juejin.cn/column/7041871760995647502)
- [使用 VitePress 打造个人前端导航网站 - 掘金](https://juejin.cn/post/7204860462239498296#heading-0)



