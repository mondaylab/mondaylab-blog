---
title: 『软件工程9』结构化系统分析——解决软件“做什么”问题
author: 周一
date: '2021-05-28'
categories:
  - 产品汪
tags:
  - 软件工程
sidebar: 'auto'
---

# 前言

我们都知道软件是什么，但有时候会止步于软件要“做什么”的问题。在下面这篇文章中，我们将从结构化系统分析的角度出发，来解决软件“做什么”的问题。

# 一、系统分析的任务和过程

## 1、系统分析的任务

借助当前系统的逻辑模型，去导出目标系统的逻辑模型，解决目标系统“做什么”的问题。

![系统分析的任务](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270934193.png)

## 2、系统分析的过程

系**统分析的过程包含以下四个步骤：**

- 问题识别
- 分析与综合
- 编制文档
- 系统分析评审

接下来将对这四个步骤进行一一讲解。

### （1）问题识别

**1）** 从系统的角度来理解软件并评审**软件范围**是否恰当。

**2）** 确定软件的**需求**，即提出这些需求**应实现的条件**，和这些需求**应达到的标准**。

**软件的需求包括：**

- **功能需求**（最重要，功能是一切需求的根本）
- 性能需求
- 环境需求
- 可靠性需求
- 资源使用需求
- 成本消耗需求
- 开发进度需求
- 用户界面需求
- 安全保密需求（经常会被遗漏的需求）

**3）** 建立通信路径。建立和分析所需要的通信路径，以保证能顺利地对问题进行分析。

![通信路径](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270934738.png)

### （2）分析与综合

**1）** 逐步**细化软件功能**，找出系统**各元素间**的<u>联系</u>、<u>接口特性</u>和<u>设计上的约束</u>，分析**是否满足功能要求，是否合理**。

**2）** 剔除不合理部分，增加其需要部分。最终综合成系统的解决方案，给出目标系统的**详细逻辑模型**。`（核心：建立逻辑模型）`

**3）常用的分析方法**

- 面向**数据流**的结构化分析方法 `(SA)`
- 面向**数据结构**的 `Jackson` 方法 `(JSD)`
- 面向**数据结构**的结构化数据系统开发方法 `(DSSD)`
- 面向**对象**的分析方法 `(OOA)` 等

### （3）编制文档

- 软件需求说明书；
- 数据要求说明书；
- 初步的用户手册；
- 修改、完善与确定软件开发实施计划。

### （4）系统分析评审

系统分析的评审内容主要有以下内容：

- 系统定义的目标是否**与用户的要求一致**；
- 系统需求分析阶段提供的**文档资料是否齐全**；
- 文档中的所有**描述是否完整、清晰、准确**反映用户要求；
- 与所有其它系统成分的重要**接口**是否都已经描述；
- 被开发项目的**数据流**与**数据结构**是否足够；
- 所有**图表**是否清楚，在不补充说明时能否理解；
- 主要功能是否已包括在规定的**软件范围之内**，是否都已充分说明；
- 设计的**约束条件**或**限制条件**是否符合实际；
- 开发的**技术风险**是什么；
- 是否考虑过软件需求的**其它方案**；

- 是否考虑过**将来**可能会提出的软件需求；

- 是否详细制定了**检验标准**，它们能否对系统定义是否成功进行确认；

- ……

# 二、结构化分析方法

## 1、结构化分析方法是什么？

- 结构化分析方法是一种**面向数据流**进行需求分析的方法；
- 适用于**数据处理类型** `（MIS）` 软件的需求分析；
- 用**抽象模型**的概念，按照软件内部**数据传递**、**变换**的关系，**<u>自顶向下逐层分解</u>**，直到满足所有功能要求为止。（自顶向下逐层分解是结构化分析的基本思路）

## 2、结构化分析方法使用的工具

**结构化分析所使用的工具主要有五种：**

- 数据流图 `(DFD)`
- 数据字典 `(DD)`
- 结构化英语 `(Structured English)`
- 判定表 `(Decision Table)`
- 判定树 `(Decision Tree)`

接下来将对这五种工具进行一一介绍。

### （1）数据流图 (Data Flow Diagram, DFD)

**1）作用**

- 数据流图是组织中**信息运动**的抽象，是信息系统**逻辑模型**的主要形式，是分析人员与用户进行**交流**的有效手段，也是**系统设计的依据**之一。
- 简单来说，数据流图是用**一种图形**及与图形相关的**注释**来表示系统的逻辑功能。

**2）主要图形元素**

数据流图主要图形元素为以下四种。**圆圈**代表数据加工，**矩形**代表外部实体，**箭头**代表数据流，**“椅子”形状图形**代表数据存储文件。

![主要图形元素](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270934557.png)

了解完数据流图的主要图形元素，再来了解这四种主要图形元素常用的三种符号。

![常用的三种数据流图基本成分的符号](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935955.png)

讲到这里，相信大家都对数据流图的主要图形元素有了一定的了解，那么我们继续来对这四个元素的含义做个归纳。

- **外部项(外部实体)：** 外部项在数据流图中表示所描述系统的**数据来源**和**去处**的各种实体或工作环节。系统开发不能改变这些外部项本身的结构和固有属性。
- **加工(数据加工)：** 又称**数据处理逻辑**，描述系统对信息进行处理的逻辑功能。
- **数据存储：** 逻辑意义上的数据存储环节，即系统信息处理功能所需要的、不考虑存储物理介质和技术手段的数据存储环节。
- **数据流：** 与所描述系统信息处理功能有关的**各类信息的载体**，是各加工环节进行处理和输出的数据集合。

介绍完具体的主要图形元素，我们还要**思考一个问题**：这些图形要怎么连接才是合理的？是不是只有有随意一个图形出现就可以了？那结果自然是否定的。这就引出了我们应该要注意的一个问题：**数据流图的规范。** **具体内容如下：**

> **DFD 中允许的数据流：** >**①**实体 -> 加工；**②**加工 -> 实体；**③**加工 -> 加工；**④**加工 -> 存储；**⑤**存储 -> 加工。

> **DFD 中不允许的数据流：** >**①**实体 -> 实体；**②**实体 -> 存储；**③**存储 -> 实体；**④**存储 -> 存储。

> **总结：** 所有的数据流都要**有加工**，任意一个**没有经过加工**的数据流都是不规范的。
> **注意：** 所有数据流信息都要标注，除了加工与存储相连时传递的信息刚好是数据存储的内容（可省略），其它一律不可以。

**3）数据流图的层次结构**

- 为了表达数据处理过程的数据加工情况，需要采用**层次结构**的数据流图。
- 按照系统的层次结构进行**逐步分解**，以**分层的**数据流图反映这种结构关系，能清楚地表达和容易理解系统。
- 在多层数据流图中，**顶层流图**仅包含**一个加工**，它代表被开发的系统。它的输入流是该系统的输入数据，输出流是系统所输出的数据。除顶层数据流图外，其他数据流图**从零开始**编号。
- **中间层流图**则表示**对其上层父图的细化**。它的每一加工可能继续细化，形成子图。
- **底层流图**是指其**加工不需再做分解**的数据流图，它处在**最底层**。

![数据流图的层次结构](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935021.png)

**4）检查和修改数据流图的原则**

- 数据流图上所有图形符号**只限于**上述四种基本图形元素。
- 数据流图的主图**必须包括上述四种基本元素**，**缺一不可**。
- 数据流图的主图上的数据流必须**封闭**在外部实体之间。
- 每个加工至少有**一个输入数据流**和**一个输出数据流**，而且**所有的数据流都要经过<u>加工</u>**。
- 在数据流图中，需**按照层次给加工框编号**，编号表明该加工所处层次及上下层的亲子关系；有一种特殊情况就是，**顶层图的加工可以不用加编号**。
- 当数据流图只有**一个加工**时，可以**不考虑存储**，但当数据流图有**多个加工**时，**一定要考虑存储**。
- 规定任何一个数据流子图必须与它上一层的一个加工对应，两者的输入数据流和输出数据流必须一致，即**父图与子图的平衡**。
- 图上每个元素都**必须有名字**。
- 数据流图中**不可夹带**控制流。

**5）错误实例**
我们来看几个错误实例。

![错误实例1](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935737.png)

**错误原因：** 布局不够合理，实体应该在四周，加工在中间。

---



![错误实例2](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935129.png)

 **错误原因：** 数据流图画的像数据流程图。

---



![错误实例3](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935319.png)

**错误原因：** 数据流没有标注，加工项没有编号。

---

![错误实例4](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935687.png)

**错误原因：** 加工项出现名词。

---

![错误实例5](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935377.png)

**错误原因：** 加工项只有输入没有输出。

---

![错误实例6](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936288.png)



**错误原因：** 没有数据存储。

---

![错误实例7](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936536.png)

**错误原因：** 实体与数据存储相连，所有的实体和存储都必须经过加工。

**6）数据流图的局限性**

只能给出系统逻辑功能的一个总框架，缺乏详细、具体的内容。
**7）案例分析**

关于**数据流图的案例分析**放在[下一篇文章](https://blog.csdn.net/weixin_44803753/article/details/117262564)中，大家可以根据自身需求进行查看。

### （2）数据字典 (Data Flow Diagram, DFD)

**1）作用**

数据字典对数据流图中的各种成分起**注解**、**说明**作用，给这些成分赋以实际的内容。

数据字典与数据流图配合，能清楚地表达数据处理的要求。

条目：数据流、数据元素、数据存储、数据加工、外部实体

**2）条目**

数据字典有**五个条目**，即数据流图 `DFD` 的四要素 + 数据元素，分别是 `数据流` 、 `数据元素` 、 `数据存储` 、 `数据加工` 、 `外部实体` 。

**具体图例如下：**

**条目一：数据流**

![条目一：数据流](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936001.png)

**条目二：数据元素**

![条目二：数据元素](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936854.png)

**条目三：数据存储**

![条目三：数据存储](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936500.png)

**条目四：数据加工**

![条目四：数据加工](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936258.png)

**条目五：外部项**

![条目五：外部项](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936225.png)

**3）数据结构的符号描述**

|       符号        |     含义     |          举例           |
| :---------------: | :----------: | :---------------------: |
|         =         |   被定义为   |           x=a           |
|         +         |      与      |          x=a+b          |
| […,…]或[...\|...] |      或      | x = [a , b]，x = [a\|b] |
| { ... }或 m{...}n |     重复     |   x = {a}, x = 3{a}8    |
|       (...)       |     可选     |         x = (a)         |
|       “...”       | 基本数据元素 |         x = “a”         |
|        ..         |    连结符    |        x = 1..9         |

**4）案例分析**

关于**数据字典的案例分析**放在[下一篇文章](https://blog.csdn.net/weixin_44803753/article/details/117262564)中，大家可以根据自身需求进行查看。下面将结构化英语。

在讲结构化英语之前，我们需要先来了解一个知识点。

对于数据流图的**每一个基本加工**，都必须要有一个**基本加工逻辑说明**，那么基本加工逻辑说明是什么呢？基本加工逻辑说明是用来描述基本加工如何把 `输入数据流` 变换为 `输出数据流` 的加工规则。且用于写基本加工逻辑说明的工具主要有 `结构化英语` 、 `判定表` 和 `判定树` ，所以说 `结构化英语` 是一个用来写基本加工逻辑说明的工具。

了解完这个知识点后，我们开始来看结构化英语是什么吧！

### （3）结构化英语 (Data Flow Diagram, DFD)

**1）结构化英语是什么**

- 结构化英语就是一种基本加工逻辑说明的方法。
- 结构化英语是一种介于**自然语言**和**形式化语言**之间的语言。
- 语言的正文用**基本控制结构**进行分割，加工中的操作用**自然语言**短语来表示。

**2）结构化英语的词汇表构成**

- 英语命令动词；
- 数据词典中定义的名字；
- 有限的自定义词；
- 逻辑关系词 `IF_THEN_ELSE` 、`CASE_OF` 、`WHILE_DO` 、`REPEAT_UNTIL` 等组成。

**3）常见基本控制结构**

- 顺序结构；
- 重复结构`while_do` 或 `repeat_until` 结构；
- 判定结构：`if_then_else` 或 `case_of` 结构。

**4）案例：商店业务处理系统中”检查发货单“**

```bash
if 发货单金额超过$500 then
      if 欠款超过了60天 then
              在偿还欠款前不予批准
      else //（欠款未超期）
              发批准书，发货单
else //（发货单金额未超过$500）
      if 欠款超过60天 then
              发批准书，发货单及赊欠报告
      else //（欠款未超期）
              发批准书，发货单

```

### （4）判定表 (Data Flow Diagram, DFD)

**1）使用条件**

如果数据流图的加工需要依赖于**多个逻辑条件**的取值，使用判定表来描述比较合适。

**2）图例**

![条件桩条件项](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936685.png)

**3）案例剖析**

**案例一：检查发货单**

![判定表-检查发货单](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936395.png)

大家可以看到，在上图中，左上角的地方是条件，也称为条件桩。而因为条件引发的操作/动作，即左下角部分，称为动作桩。

有了条件桩和动作桩以后，它们有一一对应的数据。条件桩对应条件项，动作桩对应动作项，即右上角和右下角部分。

**案例二：旅游预订票系统“计算折扣量”**

![判定表-旅游管理系统](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936446.png)

同样的，与依据案例一的例子同样判断。上面是条件桩和条件项，下面是动作桩和动作项。

### （5）判定树 (Data Flow Diagram, DFD)

**1）使用条件**

判定树也是**用来表达加工逻辑**的一种工具，有时侯它**比判定表更直观**。

**2）案例剖析**

同样，我们依据判定表的两个例子来做成判定树。

**案例一：检查发货单**

![判定树-检查发货单](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936773.png)

**案例二：旅游预订票系统“计算折扣量”**

![判定树-旅游管理系统](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937484.png)

从上面两张图中可以看到，**判定树相较于判定表来说会更加直观**。

# 三、动态分析方法

## 1、为什么需要系统动态分析方法？

- 系统的需求规格说明通常是用**自然语言**来叙述的，但是用自然语言描述往往会出现**歧义性**。

- 因此，为了直观地分析系统的动作，从特定的视角出发去描述系统的行为，需要采用**动态分析**的方法。

## 2、最常用的动态分析方法

### （1）状态迁移图

**1）状态迁移图是什么？**

状态迁移图，即 `State Transition Diagram`，缩写为 `STD` 。状态迁移图是描述<u>系统的状态</u>**如何使外部的信号进行推移**的一种图形表示。

**2）状态迁移图的表示方式**

- 圆圈 `○` 表示可得到的系统状态。
- 箭头 ` →` 表示从一种状态向另一种状态的迁移。

**3）案例剖析：CPU 进程的状态迁移**

假设某个系统当前有多个状态申请占用 CPU 运行的进程, 其中 CPU 所分配进程的状态迁移如下。

![状态迁移图](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937518.png)

由上图可分析出状态迁移图，状态迁移表以及相对应的状态，如下图所示。

![状态迁移相应状态表示](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937377.png)

**4）状态迁移图的优点**

- 状态之间的关系能够直观地被捕捉到。

- 由于状态迁移图的单纯性，能够机械地分析许多情况，可很容易地建立分析工具。

### （2）时序图

**1）时序图是什么？**

时序图 `（Sequence Diagram）` ，又名序列图、循序图，是一种 `UML` 交互图。它通过描述对象之间发送消息的时间顺序来显示多个对象之间的动态协作。

**2）案例剖析：功能事件**

在下图中, 对于事件 `e` , `功能1～功能3` 的处理时间总计为 `(T1＋T2＋T3）` ，其中功能间切换时间为 `0` 。

![功能事件](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937540.png)

**3）案例剖析：进程间的通信流**

在下图中，采用**扩充时序图**可表示进程间的通信流，用于分析几个事件的交错现象。 `C1` 与 `C2` ，`R1` 与 `R2` 是交错的。因此，可以做如下分析：“ `HOST1` 在等待 `C1` 的回答时（即 `R1` 期间），要能接收从 `HOST2` 发出的命令 `C2` 。”

![进程间的通信流](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937357.png)

# 四、写在最后

对于软件工程中的结构化系统分析来说，主要解决软件“做什么”的问题。特别是关于数据流图和数据字典的内容较多，学完要多消化总结。同时我也将在下一篇文章讲解关于数据流图与数据字典的一些案例分析。

关于软件工程的结构化系统分析就讲到这里啦！如有需要了解软件工程相关的其他内容，可到『[软件工程](https://blog.csdn.net/weixin_44803753/category_10895589.html?spm=1001.2014.3001.5482)』栏目进行查看学习~

