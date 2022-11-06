---
title: 花了一天的时间，地板式扫盲了所有vue3的API盲点
author: 周一
date: '2021-10-16'
categories:
  - 前端开发
  - vue.js
sidebar: 'auto'
---

![封面图](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211061155979.png)

# 📍前言

最近在一次理解`vue`项目的代码时，发现周一对好多`API`都不太熟悉。这间接导致的问题是，代码理解速度要比平常要慢很多。于是乎，赶忙把`vue API`的学习提上了日程。

在下面的文章中，将地板式地扫盲`vue3`文档中`API`模块的所有内容，融入周一的理解进行深入介绍。下面就来一起看看吧~🍬



# 一、🖇框架搭建

## 1、关于文档

首先附上官方文档的具体材料：https://cn.vuejs.org/api/



## 2、VUE3 API整体盘点

在`vue3`的全新`API`中，有部分在`vue2`的基础上沿用了。还有另外一部分，是`vue3`所新增加的。我们先来看`vue3 API`文档主要包含哪些内容？

`vue3 API`主要包含以下六个部分：

- 全局API —— 全局会用到的API
- 组合式API —— vue3所拥有的组合式API
- 选项式API —— vue2所拥有的选项式API
- 内置内容 —— 指令、组件、特殊元素和特殊属性
- 单文件组件 —— 语法定义、`<script setup>`和CSS功能
- 进阶API —— 渲染函数、服务端渲染、TS工具类型和自定义渲染

![vue3 API盘点](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202210221726829.png)



下面将依据上面提到的六大点内容，来进行相应的剖析和讲解。



# 二、🎨全局API

vue3的全局API包含两个部分：应用实例和通用API。那它们各自都有哪些内容呢？

## 1、应用实例



![02_应用实例](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060902102.png)



## 2、通用API



![02_通用](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060904564.png)

# 三、🚲组合式API

谈到`vue3` ，相信大家最为熟悉的就是 `composition API` 了，也就是 `组合式 API` 。那么，`vue3` 的 `组合式 API` 都给我们带来了什么呢？

## 1、setup



![01_setup](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060904915.png)



## 2、响应式：核心



![02_响应式核心](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060904779.png)



## 3、响应式：工具函数



![03_响应式工具函数](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060904095.png)







## 4、响应式：进阶



![04_响应式进阶](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211061340792.png)





## 5、生命周期钩子



![05_生命周期钩子](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211061334281.png)





## 6、依赖注入



![06_依赖注入](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211061335445.png)





# 四、🌠选项式API

`选项式API` 即 `options API` 。可能有的小伙伴会觉得它在 `vue2` 项目下会更为常见一些。但在 `vue3` 项目中，也是有一些 `选项式API` 值得我们去挖掘的。那都有哪些内容呢，我们来一探究竟。

## 1、状态选项



![01_状态选项](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211061336814.png)



## 2、渲染选项



![02_渲染选项](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060906257.png)





## 3、生命周期选项



![03_生命周期选项](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060906824.png)



## 4、组合选项



![04_组合选项](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060906481.png)



## 5、其他杂项



![05_其他杂项](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060906768.png)





## 6、组件实例



![06_组件实例](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060906347.png)



# 五、🏕内置内容

`vue3` 的内置内容包括**指令**、**组件**、**特殊元素element**和**特殊属性attributes**。如果要谈在什么场景下会用到内置内容，那周一可能觉得，在一般的 `vue` 项目开发中，基本都会用到**内置内容**。较为常见的是用v-if和v-else-if来判断什么时候显示某个组件，什么时候不显示某个组件。

还有像 `v-model` 、`v-on` 和 `v-for` 等指令，都是在 `vue` 项目中非常高频率使用的指令。那 `vue3` 的内置内容都还有哪些东西呢？请看下方介绍。

## 1、指令

![01_指令](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060907371.png)







## 2、组件



![02_组件](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211061337411.png)



## 3、特殊元素



![03_特殊元素](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060909886.png)







## 4、特殊属性Attributes



![04_特殊属性Attributes](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211061339057.png)



# 六、📸单文件组件

对于 `vue` 来说，相信大家都会非常熟悉它的组件化思想，似乎有一种理念是：万物皆可组件。那对于一个组件来说，我们都需要了解它的什么内容呢？比如，我们写的 `<template>` 是什么，用 `<script setup>` 和 `<script lang="ts">` 都分别是什么含义，`<style>` 用了 `scoped` 是什么意思，`:slotted` 插槽选择器又在什么情况下使用呢？我们一起来一探究竟。

## 1、SFC语法定义

![01_SFC语法定义](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060909888.png)





## 2、单文件组件script setup



![02_单文件组setup](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211061215861.png)



## 3、css功能



![03_CSS功能](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060910375.png)





# 七、📈进阶API

上面我们了解了 `vue3` 的基础API，准确来说，上面的 `API` 可以解决实际工作中 `80%` 的问题。那下面，我们就再来看一些较为进阶的 `api` 操作。下面所涉及到的这些 `API` ，更多的是可以在**某些定制化的场景**下，做一些高阶的操作。比如：我们可以在一个 `headless` 组件里，用 `render` 和 `h()` 函数，来渲染自定义的页面。那 `进阶 API` 都还有哪些东西呢，来看下面的内容。

## 1、渲染函数



![01_渲染函数](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060910707.png)



## 2、服务端渲染



![02_服务端渲染](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060910645.png)



## 3、TypeScript工具类型



![03_TypeScript工具类型](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060910077.png)



## 4、自定义渲染



![04_自定义渲染](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202211060910534.png)



# 八、🛒结束语

到这里，我们也就讲完了 `vue3 API` 所有的知识点。个人认为，原理知识的学习，是为了更好的将其运用到项目中。所以在学完以上内容后，不妨可以进一步将其运用到项目里，总结出工作中的最佳实践。

文章根据周一的理解做了一些输出，有观点不当之处欢迎交流~



# 🐣彩蛋 One More Thing

思维导图`github`地址：https://github.com/Jacqueline712/vue3-api

`vue3` 入门指南文章推荐：[焕然一新的 Vue 3 中文文档要来了🎉](https://juejin.cn/post/7077701166397653028)

以上就是本文的全部内容，我们下期见！🍻🍻🍻









