---
title: 《从前端到全栈》小册钻研
author: 周一
date: '2023-07-22'
categories:
  - 服务端开发
tags:
  - Node.js
sidebar: 'auto'

---

# 《从前端到全栈》小册钻研

## 第一部分：实现一个文章生成器

这部分主要基于一个[开源库](https://github.com/menzi11/BullshitGenerator)做了一些改进，让生成的文章语句更加通顺一些。嗯，虽然还是狗屁不通。🤡👀

具体代码仓库：https://github.com/mondaylab/bullshit-generator-js-mondaylab



## 第二部分：前后端打通todolist功能

**基础：**

- 利用`node`的`tcp`、`http`等模块，进一步深入理解和实践**强缓存、协商缓存和文件压缩**在实际场景中的应用。



**实现todolist功能：**

- 以**拦截切面**为引导，实现能够注册多个拦截切面的函数，同时，将这些拦截切面包装成一个异步的洋葱模型的拦截器框架。
- 有了拦截切面后，还实现了动态路由，让用户能够通过 `/` 的方式，直接访问到页面或者接口数据。
- 与此同时，使用`sqlite`作为连接的数据库，用来存储用户<u>登录信息</u>、<u>session信息</u>和<u>todolist信息</u>。
- 目前已实现接口：获取列表(/list)、增加todo信息(/add)、修改todo信息(/update)、登录功能(/login) 。



**优化环节：**

- 使用`node.js`的内置模块`Cluster`实现多进程的`HTTP`服务器；
- 利用多进程的特点，实现**实时热更新服务器**的功能。



**具体代码仓库：**

- 代码仓库链接戳：https://github.com/mondaylab/http-impl







