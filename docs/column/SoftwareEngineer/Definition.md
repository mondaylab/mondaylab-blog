---
title: 『软件工程1』详解软件是什么
author: 周一
date: '2021-12-12'
---

@[TOC](软件基本概念)

## 一、什么是产品

**1**、从**用户**的角度
产品实际上就是**信息**，以某种方式使得用户世界更加美好
**2**、从**软件工程师**的角度
产品实际上就是**软件**

## 二、软件的双重角色

**1、产品**
软件是一个**信息变换器**，用来获取、显示及管理信息等
**2、产品交付使用的载体**
软件是 ① 操作系统的基础；② 通信网络的基础；③ 其他软件工具和环境的基础

## 三、软件的涵义及特征

**1、软件的涵义**
软件 Software = 程序 Program + 数据 Data + 文档 Document，这些项的每一个均包含一个配置
**2、软件的特征**
（**1**）软件是被**开发或设计**的，而不是传统意义上被制造的
（**2**）软件不会“磨损”，但是会退化
注：需了解两种曲线：**①**硬件故障率曲线（浴缸曲线）；**②**软件故障率曲线；**具体形式图如下：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031815073912.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318150753618.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)
（3）虽然软件产业正在向**基于构件**的组装前进，大多数软件仍然是定制的
->构件：是**可复用的**组成部分，可被用于构造其他软件，比如一些被封装的对象类、功能模块及软件框架等

## 四、软件应用

**1**、系统软件
**2**、应用软件
**3**、工程/科学软件
**4**、Web 应用软件
**5**、人工智能软件
**6**、……

## 五、软件危机

**1、软件危机的表现**
（1）对软件**开发成本**和**进度**的估计常常不准确（开发成本超出预算，实际进度比预定计划一再拖延的现象并不罕见）
（2）用户对“已完成”系统**不满意**的现象经常发生
（3）软件产品的**质量**往往靠不住，bug 一大堆
（4）软件的**可维护程度**非常之低
（5）软件通常没有适当的**文档资料**
（6）软件的**成本不断提高**
（7）软件**开发生产率的提高**赶不上硬件的发展和人们需求的增长
**2、软件危机引发的思考**
（**1**）How do we ensure the quality of the software that we produce?
我们如何确保我们所产生软件的质量？
（**2**）How do we meet growing demand and still maintain budget control?
我们如何满足日益增长的需求，同时又保持预算控制？
（**3**）How do we upgrade an ageing “software plan”?
我们如何升级老化的“软件计划”？
（**4**）How do we avoid disastrous time delays?
我们如何避免灾难性的时间延误？
（5）How do we successfully institute new software technologies?
我们如何成功的研究新的软件技术？
**3、减轻软件危机的途径**
（**1**）对计算机软件有一个正确的认识（**软件 ≠ 程序**）。
（**2**）必须充分认识到软件开发不是某种**个体劳动的神秘技巧**，而应该是一种组织良好、管理严密、各类人员协同配合、共同完成的**工程项目**。
（**3**）推广使用在实践中总结出来的开发软件的**成功技术和方法**。
（**4**）开发和使用更好的**软件工具**。

## 六、软件神话

**1、三大软件神话**
**（1）管理者的神话**
**①**已有了关于开发软件的标准和规程的书籍，可提供所有的信息。
**②**已有了很多很好的软件开发工具和最新的计算机。
**③**如果已落后于计划，可以增加更多的程序员来赶上进度。
**④**如果决定“外包”，就可以放松让承包公司去建造。
**（2）客户神话**
**①**有了对目标的一般性描述，就可以开始写程序。
**②**项目需求可以不断变更，因为软件是灵活的。
**But...变更的代价是：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318160659802.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**（3）实践者的神话**
**①**一旦写出程序并正常运行，工作就结束了。
**②**在程序真正开始运行之前无法评估其质量。
**③**一个成功的项目唯一应该提交的就是运行程序。
**④**软件工程将使我们创建大量的、不必要的文档，并总是延缓进度。
**2、软件开发过程中各单位分配比例**
（**1**）工作量分配比例
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318160717914.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

（**2**）费用分配比例
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210318160724394.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)
如果这篇文章对你有帮助，记得留下**star**哦~
