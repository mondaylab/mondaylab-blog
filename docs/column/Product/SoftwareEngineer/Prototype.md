---
title: 『软件工程3』你应该知道的三种原型实现模型：抛弃式、演化式、增量式
author: 周一
date: '2021-12-12'
categories:
  - 产品汪
tags:
  - 软件工程
sidebar: 'auto'
---

## 一、抛弃式原型开发

**1、定义**：验证和澄清系统的需求描述，重新构造系统。

**2、流程图**

![](https://img-blog.csdnimg.cn/20210321152836998.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**3、典型例子**

开发者与客户进行沟通交流，之后获取到客户的需求，于是开发者开发了该图形用户界面（GUI）的原型。但是之后呢，系统并没有用 GUI 继续做开发，而是采用 C++或者是其他语言来开发。

**4、有利条件**

（**1**）Reduce risk in a project, see if something can be done.

> 降低项目中的风险，评估哪些事情可以做，哪些事情不能做；

（**2**）Capture requirements(e.g. whether client likes the GUI or not) .

> 捕捉需求，比如：客户是否喜欢 GUI 界面。

**5、不利条件**

（**1**）Resources can be wasted, so control is needed.

> 资源可能会被浪费，因此需要控制。

（**2**）Good Project Management is required.

> 需要良好的项目管理。

（**3**）Good communication with the client is required.

> 与客户保持良好的沟通。

（**4**）When is it a good time to stop developing the prototype.

> 无法判断停止开发原型的时间。

## 二、演化式原型开发

**1、定义**：逐步改进和细化原型，将原型进化为最终系统。

**2、流程图**

![](https://img-blog.csdnimg.cn/20210321152849795.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**3、典型例子**

与汽车行业类似，一款车型也在逐步完善。

![](https://img-blog.csdnimg.cn/20210321152859852.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**4、有利条件**

（**1**）The client can see the changes that they want.

> 客户可以看到他们想要的改变。

（**2**）Very good for improving user interface acceptance.

> 有利于提高用户界面的接受程度。

**5、不利条件**

（**1**）Very weak on documentation (e.g. system keeps changing)

> 不利于文档撰写，比如：系统持续改变，那么文档就不好落笔。

（**2**）The entire project needs strong project control,the same as leader needs to monitor development.

> 整个项目需要强有力的项目控制，同时领导者也需要监控项目的发展进程。

（**3**）When is it a good time to stop evolving and finishing the project and possible lead to a badly structured system.

> 是什么时候停止发展和结束项目，我们都不知道；所以这很有可能会导致系统结构不良。

（**4**）Special development staff may be required.

> 可能需要特殊的开发人员。

**6、适用情况**

（**1**）Small projects.

> 小型项目。

（**2**）Limited projects that are limited by time or money.

> 受时间或金钱限制的有限项目。

（**3**）Those projects that need done quickly.

> 那些需要快速完成的项目。

（**4**）Projects whose details cannot be determined in advance.

> 无法预先确定其细节的项目。

（**5**）Projects with a high graphical content.

> ​ 图形内容丰富的项目。

## 三、增量式原型开发

**1、定义**：在建立软件总体设计基础上，采用增量开发方法，使原型成为最终系统。

**2、流程图**

![](https://img-blog.csdnimg.cn/20210321152908588.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**3、典型例子**

**英文版**：

**A software company and a client may agree on delivery of system parts. For example, a website delivery might be:**

1st January - Delivery of web-server, web-pages,verification and validation scripts.

5th February - Delivery of database, security software.

21st February - Delivery of merchant payment system.

**中文版**：

**一个软件公司和客户就系统部件的交付达成协议。 例如，一个网站交付可能是：**

1 月 1 日 - 交付 ① 网络服务器；② 网页；③ 验证和确认脚本。

2 月 5 日 - 交付数据库和安全软件。

2 月 21 日 - 商家付款系统的交付。

**4、有利条件**

（**1**）Good for breaking a larger system into parts, so components can be built easier.

> ​ 非常适合将较大的系统分解为多个部分，因此组件可以更轻松地被构建。

（**2**）Customer sees the system in stages, so no "big bang" approach.

> ​ 客户分阶段看到系统，所以可能比较少会有“大爆炸”的态度。

**5、不利条件**

（**1**）Requires good communication and agreement.

> 需要良好的沟通和协商。

（**2**）Requires good project management, control and monitoring work.

> 需要良好的项目管理，控制和监视工作。

（**3**）communication and agreement.

> 需要良好的沟通和协商。

（**4**）Requires good project management, control and monitoring work.

> 需要良好的项目管理，控制和监视工作。

如果这篇文章对你有帮助，记得留下**star**哦~
