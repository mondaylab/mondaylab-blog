import{_ as e,c as l,o as a,N as t}from"./chunks/framework.6510d215.js";const p=JSON.parse('{"title":"「offer来了」进程线程有啥关系？10个知识点带你巩固操作系统基础知识","description":"","frontmatter":{"title":"「offer来了」进程线程有啥关系？10个知识点带你巩固操作系统基础知识","author":"周一","date":"2021-11-10","categories":["前端开发"],"tags":["offer来了"],"sidebar":"auto"},"headers":[{"level":1,"title":"🎹 序言","slug":"🎹-序言","link":"#🎹-序言","children":[]},{"level":1,"title":"🎸 一、思维导图","slug":"🎸-一、思维导图","link":"#🎸-一、思维导图","children":[]},{"level":1,"title":"🎺 二、常见面试题","slug":"🎺-二、常见面试题","link":"#🎺-二、常见面试题","children":[{"level":2,"title":"1、进程和线程以及它们的区别","slug":"_1、进程和线程以及它们的区别","link":"#_1、进程和线程以及它们的区别","children":[]},{"level":2,"title":"2、进程间通信的几种方式","slug":"_2、进程间通信的几种方式","link":"#_2、进程间通信的几种方式","children":[{"level":3,"title":"（1）管道(pipe)及命名管道(named pipe)","slug":"_1-管道-pipe-及命名管道-named-pipe","link":"#_1-管道-pipe-及命名管道-named-pipe","children":[]},{"level":3,"title":"（2）信号(signal)","slug":"_2-信号-signal","link":"#_2-信号-signal","children":[]},{"level":3,"title":"（3）消息队列","slug":"_3-消息队列","link":"#_3-消息队列","children":[]},{"level":3,"title":"（4）共享内存","slug":"_4-共享内存","link":"#_4-共享内存","children":[]},{"level":3,"title":"（5）信号量","slug":"_5-信号量","link":"#_5-信号量","children":[]},{"level":3,"title":"（6）套接字","slug":"_6-套接字","link":"#_6-套接字","children":[]}]},{"level":2,"title":"3、线程同步的方式","slug":"_3、线程同步的方式","link":"#_3、线程同步的方式","children":[{"level":3,"title":"（1）互斥量 Synchronized/Lock","slug":"_1-互斥量-synchronized-lock","link":"#_1-互斥量-synchronized-lock","children":[]},{"level":3,"title":"（2）信号量 Semphare","slug":"_2-信号量-semphare","link":"#_2-信号量-semphare","children":[]},{"level":3,"title":"（3）事件(信号)Wait/Notify","slug":"_3-事件-信号-wait-notify","link":"#_3-事件-信号-wait-notify","children":[]}]},{"level":2,"title":"4、什么是死锁？死锁产生的条件？","slug":"_4、什么是死锁-死锁产生的条件","link":"#_4、什么是死锁-死锁产生的条件","children":[{"level":3,"title":"（1）死锁的概念","slug":"_1-死锁的概念","link":"#_1-死锁的概念","children":[]},{"level":3,"title":"（2）死锁产生的四个必要条件","slug":"_2-死锁产生的四个必要条件","link":"#_2-死锁产生的四个必要条件","children":[]},{"level":3,"title":"（3）处理死锁的基本策略和常用方法","slug":"_3-处理死锁的基本策略和常用方法","link":"#_3-处理死锁的基本策略和常用方法","children":[]}]},{"level":2,"title":"5、进程有哪几种状态？","slug":"_5、进程有哪几种状态","link":"#_5、进程有哪几种状态","children":[]},{"level":2,"title":"6、线程有几种状态？","slug":"_6、线程有几种状态","link":"#_6、线程有几种状态","children":[]},{"level":2,"title":"7、段式存储管理","slug":"_7、段式存储管理","link":"#_7、段式存储管理","children":[{"level":3,"title":"（1）段式存储管理是什么？","slug":"_1-段式存储管理是什么","link":"#_1-段式存储管理是什么","children":[]},{"level":3,"title":"（2）段式管理的优缺点","slug":"_2-段式管理的优缺点","link":"#_2-段式管理的优缺点","children":[]},{"level":3,"title":"（3）页式存储管理方案","slug":"_3-页式存储管理方案","link":"#_3-页式存储管理方案","children":[]},{"level":3,"title":"（4）页式存储管理的优缺点","slug":"_4-页式存储管理的优缺点","link":"#_4-页式存储管理的优缺点","children":[]}]},{"level":2,"title":"8、进程调度策略","slug":"_8、进程调度策略","link":"#_8、进程调度策略","children":[{"level":3,"title":"（1）FCFS(先来先服务，队列实现，非抢占的)","slug":"_1-fcfs-先来先服务-队列实现-非抢占的","link":"#_1-fcfs-先来先服务-队列实现-非抢占的","children":[]},{"level":3,"title":"（2）SJF(最短作业优先调度算法)","slug":"_2-sjf-最短作业优先调度算法","link":"#_2-sjf-最短作业优先调度算法","children":[]},{"level":3,"title":"（3）优先级调度算法(可以是抢占的，也可以是非抢占的)","slug":"_3-优先级调度算法-可以是抢占的-也可以是非抢占的","link":"#_3-优先级调度算法-可以是抢占的-也可以是非抢占的","children":[]},{"level":3,"title":"（4）时间片轮转调度算法(可抢占的)","slug":"_4-时间片轮转调度算法-可抢占的","link":"#_4-时间片轮转调度算法-可抢占的","children":[]},{"level":3,"title":"（5）多级队列调度算法","slug":"_5-多级队列调度算法","link":"#_5-多级队列调度算法","children":[]},{"level":3,"title":"（6）多级反馈队列调度算法","slug":"_6-多级反馈队列调度算法","link":"#_6-多级反馈队列调度算法","children":[]}]},{"level":2,"title":"9、页面调度算法","slug":"_9、页面调度算法","link":"#_9、页面调度算法","children":[]},{"level":2,"title":"10、局部性原理","slug":"_10、局部性原理","link":"#_10、局部性原理","children":[]}]},{"level":1,"title":"🎻 三、结束语","slug":"🎻-三、结束语","link":"#🎻-三、结束语","children":[]},{"level":1,"title":"🐣 彩蛋 One More Thing","slug":"🐣-彩蛋-one-more-thing","link":"#🐣-彩蛋-one-more-thing","children":[{"level":2,"title":"🏷️pdf 内容获取","slug":"🏷️pdf-内容获取","link":"#🏷️pdf-内容获取","children":[]},{"level":2,"title":"🏷️ 更新地址","slug":"🏷️-更新地址","link":"#🏷️-更新地址","children":[]},{"level":2,"title":"🏷️ 番外篇","slug":"🏷️-番外篇","link":"#🏷️-番外篇","children":[]}]}],"relativePath":"column/Interview/OperatingSystem.md","lastUpdated":1644826256000}'),r={name:"column/Interview/OperatingSystem.md"},n=t("",93),i=[n];function o(s,h,d,c,g,u){return a(),l("div",null,i)}const k=e(r,[["render",o]]);export{p as __pageData,k as default};
