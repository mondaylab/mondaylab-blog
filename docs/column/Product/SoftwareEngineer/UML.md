---
title: 『软件工程13』浅谈面向对象方法，统一建模语言UML
author: 周一
date: '2021-12-12'
categories:
  - 产品汪
tags:
  - 软件工程
---

@[toc](浅谈面向对象方法UML)

在下面的这篇文章中，将讲解我们平常常用的一种面向对象的画图方法，即统一建模语言**UML**(Unified Modeling Language)。

接下来开始进行讲解。

# 一、UML 的含义

- 标准的建模语言（具有语言的规范）
- 促进沟通（各种图示表达规范）
- 支持系统构建（正向工程，反向工程）

# 二、UML 的主要内容

## 1、UML 的概念模型

UML 具有一个完整的概念模型，提供了一套完整、全面的表达方法，其主要元素包括：**①UML 的基本构造块**；**②**支配这些构造块如何放在一起的**规则**；**③**一些运用于整个 UML 的**公共机制**。

## 2、UML 概念模型图例

UML 概念模型$\begin{cases}
基本构造块\begin{cases}
事物：结构事物、行为事物、分组事物、注释事物 \\
关系：依赖、关联、泛化、实现 \\
图：用例图、类图、对象图、包图、交互图等
\end{cases} \\
规则 \\
公共机制\begin{cases}
规格说明 \\
修饰 \\
通用划分 \\扩展机制
\end{cases}
\end{cases}$

下面依据概念模型中的这三大类进行一一讲解。

# 三、UML 的基本构造块

在 UML 中可以将词汇划分为 3 中构造块，即 3 类词汇或基本元素：事物、关系和图。

## 1、UML 中的事物

### （1）UML 中的四种事物

事物是对模型中最具有代表性的成分的抽象，可分为**结构事物**、**行为事物**、**分组事物**和**注释事物**。

**1）结构事物**

通常是模型的静态部分，描述概念的物理元素。**主要有以下五种结构事物：**

- 类 `(class)` ：与面向对象方法中类的概念一致。
- 接口 `(interface)` ：描述了一个类或构件的一个服务的操作集。
- 用例 `(use case)` ：代表了一个系统功能，是对一组动作序列的描述，系统执行这些动作将产生一个对特定的参与者（即系统用户）有价值而且可观察的结果。
- 构件 `(component)` ：描述的是系统中的软件物理事物。
- 节点 `(node)` ：是在运行时存在的物理元素，表示了一种可计算的资源。

**2）行为事物**

行为事物主要有：状态、交互。

**3）分组事物**

分组事物主要有：包。

**4）注释事物**

注释事物主要有：注解。

### （2）UML 中各种事物的图示法

依据上面对四种事物的描述，下面给出 UML 中各种事物的图示。

![UML中各种事物的图示法](https://img-blog.csdnimg.cn/20210529201854231.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

## 2、UML 中的四种关系

UML 中的四种关系是：依赖、关联、泛化、实现。

### （1）依赖

两个模型元素中，有一个是独立的，一个是非独立的，**独立的模型元素**发生改变，会影响**非独立的模型元素**。

用带箭头的虚线来表示依赖关系。

**如图所示：**

![依赖关系](https://img-blog.csdnimg.cn/20210529202027243.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

### （2）关联

关联是一种**结构化**的关系，指两个模型元素**有联系**。双向关联用**一条实线**来表示。

注意：关联关系有多重度，主要有： `0` 、 `1` 、 `0..1` 、 `0..*` 、 `1..*` 。

**如图所示：**

![关联关系](https://img-blog.csdnimg.cn/20210529202037203.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

值得注意的是，关联中有两种特殊的关联关系：**组合和聚合**。

如果是组合和聚合类型，则再加一个**棱形符号**。

**如下图所示：**

![组合](https://img-blog.csdnimg.cn/20210529202050121.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)
![聚合](https://img-blog.csdnimg.cn/20210529202056723.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

### （3）泛化

是**一般**与**特殊**的关系，也就是**继承**的关系。用**实线加空心三角号**来表示。

**如图所示：**

![泛化关系](https://img-blog.csdnimg.cn/20210529202110142.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

### （4）实现

实现关系是，一种模型元素保证另外一种模型元素的执行，该关系主要用在**接口**中。用**一条实线**来表示。

**如图所示：**

![实现关系](https://img-blog.csdnimg.cn/20210529202121870.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

讲到这里，以下再给出一张完整的图来回顾这四种关系。

![四种关系](https://img-blog.csdnimg.cn/20210529202131866.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

## 3、UML 中的图形（五大类十种图）

### （1）用例图

**1）用例图的定义**

用例图从**用户角度**描述系统功能，并指出各功能的操作者。

用例图显示**若干角色**或**执行者** `(actor)` 以及这些角色与系统提供的用例之间的连接关系。用例图定义的是**系统的功能需求**。

**2）用例图的基本构成**

- 用例；
- 角色；
- 角色之间的关系（如果有，主要是泛化）；
- 角色和用例之间的关系（单向关联或双向关联）；
- 用例和用例之间的关系（包含、扩展、泛化）。

**3）元素与元素之间的关系**

**include：**

- include（包含关系），当两个或多个用例中共用一组相同的动作，可以将其抽出来作为一个**独立的子用例**，供多个基用例所共享。
- 基用例**并非一个完整的用例**，所以必须和子用例**一起使用**才够完整。
- include 关系在用例图中使用**带箭头的虚线**表示(在线上标注 `<<include>>` )，箭头从**基用例指向子用例**。

**extend：**

- extend（扩展关系），对基用例的**扩展**，基用例是一个**完整的**用例，即使没有子用例的参与，也可以完成一个完整的功能。
- extend 的基用例中将存在一个扩展点，只有当**扩展点被激活**时，子用例才会被执行。
- extend 关系在用例图中使用带箭头的虚线表示（在线上标注 `<<extend>>` ），箭头从**子用例指向基用例**。

**子用例和基用例的关系：**

（泛化关系）子用例将**继承**父用例的所有结构、行为和关系。也就是说在任何使用基用例的地方都可以用子用例来代替。

（泛化关系）在用例图中使用**空心的箭头**表示，箭头方向从**子用例指向基用例**。

**4）图示**

![用例图](https://img-blog.csdnimg.cn/20210529202151247.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

### （2）静态图：类图、对象图、包图

**1）类图**

**① 定义：** 类图(class diagram)描述系统所有涉及到的类以及类和类之间的关系。

**② 类图的基本构成：**

- 类（类名、属性和方法）；
- 类和类之间的关系（依赖、关联、泛化、实现）。

**2）对象图**

**① 定义：** 对象图是类图的**实例**，几乎使用与类图完全相同的标识，但两者之间又有一定的差别，如下图例所示。

**② 图例：**

![对象图](https://img-blog.csdnimg.cn/20210529202203833.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

### （3）行为图：状态图、活动图

**1）状态图**

**① 定义：** 状态图(state chart diagram)描述系统涉及到的某个对象的所有状态以及状态和状态之间转换的事件。

**② 状态图的基本构成：**

- 状态（圆角矩形）；
- 状态的起点、终点；
- 状态之间转换的事件；
- 注解（有时会有）。

**③ 图例：**

![状态图](https://img-blog.csdnimg.cn/20210529202213207.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**2）活动图**

**① 定义：** 活动图(activity diagram)描述满足用例功能需求所要进行的活动以及活动间的约束关系。

**② 活动图的基本构成：**

- 活动（注意符号与状态不同）；
- 活动的起点、终点（终点有时有多个）；
- 活动之间用箭头连接；
- 判定（有时会有，棱型框）；
- 同步条（表示活动的分叉或汇合，包括水平、垂直两种）；
- 泳道（表示活动的不同职责）。

**③ 图例：**

![活动图](https://img-blog.csdnimg.cn/20210529202226568.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

### （4）交互图：顺序图、协作图

**1）顺序图**

**① 定义：** 顺序图显示对象之间的动态合作关系。。

**② 顺序图的基本构成：**

- 对象；
- 生命线（对象正下方的虚线，表示对象在一段时期内的存在） ；
- 窄矩形条（表示对象被激活，说明对象正在执行某种操作）；
- 交互的消息（有顺序之分，消息其实就是接收对象的操作方法）；
- 注解（有时会有）；
- 可以转换成协作图。

**③ 图例：**

![顺序图](https://img-blog.csdnimg.cn/20210529202235835.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**2）协作图**

**① 定义：** 协作图(callobaration diagram)和顺序图的作用一样，反映的也是**动态协作**。

**② 协作图的基本构成：**

- 对象；
- 实线（对象之间的连接线，注意没有箭头） ;
- 交互的消息（有顺序之分，消息其实就是接收对象的操作方法）；
- 注解（有时会有）；
- 可以转换成顺序图。

**③ 图例：**

![协作图](https://img-blog.csdnimg.cn/2021052920224535.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

### （5）实现图：构建图、部署图

**1）构件图**

**① 定义：**描述代码构件的物理结构以及各构件之间的依赖关系。

**② 构件图的基本构成：** 构件。

**③ 图例：**

![构件图](https://img-blog.csdnimg.cn/20210529203719513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**2）部署图**

**① 定义：** 系统中硬件的物理体系结构。

**② 部署图的基本构成：**

- 三维立方体表示部件；
- 节点名称位于立方体上部。

**③ 图例：**

![部署图](https://img-blog.csdnimg.cn/20210529203733675.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

# 四、写在最后

到这里，关于软件工程的体系知识就讲解结束啦！后面将会继续更新一些实践的内容。敬请期待！

如有需要了解软件工程相关的其他内容，可到『[软件工程](https://blog.csdn.net/weixin_44803753/category_10895589.html?spm=1001.2014.3001.5482)』栏目进行查看学习~

:raising_hand::raising_hand::raising_hand:

同时，有不理解或有误的地方也欢迎评论区评论或私信我交流~

> - 关注公众号 **星期一研究室** ，不定期分享学习干货，学习路上不迷路~
> - 如果这篇文章对你有用，记得**点个赞加个关注**再走哦~
