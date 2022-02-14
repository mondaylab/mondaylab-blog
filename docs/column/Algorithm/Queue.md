---
title: 详解队列在前端的应用，深剖JS中的事件循环Eventloop，再了解微任务和宏任务
author: 周一
date: '2021-06-01'
categories:
  - 前端开发
tags:
  - 数构与前端
sidebar: 'auto'
---

# 前言

`队列` 在日常生活中的应用非常广泛，比如我们最熟悉不过的食堂排队打饭、击鼓传花等等问题。同时，它在前端中的应用也非常广泛，比如，事件循环 `Event loop` 、JS 异步中的任务队列。

所以呢，对于前端来说， `队列` 结构是一个必学的知识点。在接下来的这篇文章中，将讲解关于 `队列` 在前端中的应用。

# 一、队列是什么

队列是一种**先进先出**（FIFO）的线性表。它只允许在表的**一端**进行插入，而在**另一端**删除元素。

# 二、应用场景

- 需要先进先出的场景。
- 比如：食堂排队打饭、火车站排队买票、JS 异步中的任务队列、计算最近请求次数……。

# 三、前端与队列：事件循环与任务队列

## 1、event loop

`event loop`，也被称为**事件循环**或**事件轮询**。因为 JS 是单线程运行的，且异步需要基于回调来实现，所以， `event loop` 就是异步回调的实现原理。

## 2、JS 如何执行

**JS 在程序中的执行遵循以下规则：**

- 从前到后，一行一行执行
- 如果某一行执行报错，则停止下面代码的执行
- 先把同步代码执行完，再执行异步

一起来看一个实例：

```js
console.log('Hi');

setTimeout(function cb1() {
  console.log('cb1'); //cb1 即callback回调函数
}, 5000);

console.log('Bye');

//打印顺序：
//Hi
//Bye
//cb1
```

从上例代码中可以看到， `JS` 是先执行同步代码，所以先打印 `Hi` 和 `Bye` ，之后执行异步代码，打印出 `cb1` 。

以此代码为例，下面开始讲解 `event loop` 的过程。

## 3、event loop 过程

对于上面这段代码，执行过程如下图所示。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210520163909621.gif#pic_center)

从上图中可以分析出这段代码的运行轨迹。首先 `console.log('Hi')` 是同步代码，直接执行并打印出 `Hi` 。接下来继续执行定时器 `setTimeout` ，定时器是异步代码，所以这个时候浏览器会将它交给 `Web APIs` 来处理这件事情，因此先把它放到 `Web APIs` 中，之后继续执行 `console.log('Bye')` ， `console.log('Bye')` 是同步代码，在调用堆栈 `Call Stack` 中执行，打印出 `Bye` 。

到这里，调用堆栈 `Call Stack` 里面的内容全部执行完毕，当调用堆栈的内容为空时，浏览器就会开始去任务队列寻找下一个任务，此时任务队列就会去 `Web API` 里面寻找任务，遵循先进先出原则，找到了定时器，且定时器里面是回调函数 `cb1` ，于是把回调函数 `cb1` 传入任务队列中，此时 `Web API` 也空了，任务队列里面的任务就会传入到调用堆栈里`Call Stack` 里执行，最终打印出 `cb1` 。

## 4、 DOM 事件和 event loop

先来看两段代码。

```js
console.log('Hi');

setTimeout(function cb1() {
  console.log('cb1'); //cb 即 callback
}, 5000);

console.log('Bye');

/*
 输出结果：
Hi
Bye
cb1
*/
```

```html
<button id="btn1">提交</button>

<script>
  console.log('Hi');

  document.getElementById('btn1').click(function (e) {
    console.log('button clicked');
  });

  console.log('Bye');
</script>

/* 输出结果： Hi Bye button clicked */
```

以上这两段代码中，第一段是关于 `setTimeout` 的事件循环，第二段是关于 `DOM` 事件的事件循环。那有小伙伴就会有疑问说， `DOM` 事件不是异步操作吗，为什么输出结果依然是在最后呢？

其实， `DOM` 事件确实不是异步操作，但是它也使用**回调**，基于 `event loop` 事件循环机制，所以当我们点击的时候，会触发 `DOM` 事件，并进行打印。

总结下 `DOM` 事件和 `event loop` 的区别：

- `JS` 是单线程的；
- 异步（ `setTimeout` ， `ajax` 等）使用回调，基于 `event loop` ；
- `DOM` 事件不是异步，但也使用回调，基于 `event loop` 。

## 5、event loop 总结

初阶认识完 event loop 后，来做个总结：

**总结 event loop 过程 1**

- 同步代码，一行一行放在 `Call Stack` 执行；
- 遇到异步，会先“记录”下，等待时机（定时、网络请求）；
- 时机到了，就移动到 `Callback Queue`。

**总结 event loop 过程 2**

- 如果 `Call Stack` 为空（即同步代码执行完），则 `event Loop` 开始工作；
- 轮询查找 `Callback Queue` ，如果有则移动到 `Call Stack` 执行；
- 然后继续轮询查找（跟永动机一样，不断循环查找）。

# 四、宏任务和微任务

## 1、引例

我们先来看一段代码。

```js
console.log(100);
setTimeout(() => {
  console.log(200);
});
Promise.resolve().then(() => {
  console.log(300);
});
console.log(400);
/**
 * 打印结果：
 * 100
 * 400
 * 300
 * 200
 */
```

在上面这段代码中，第一个和第二个打印结果是基于同步，我们都知道要打印 `100` 和 `400` ，但是第三个和第四个打印结果，理论上按照打印顺序应该是 `200` 和 `300` 才是，为什么是打印 `300` 和 `200` 呢？这就涉及到一个**宏任务和微任务的问题**。接下来将对宏任务和微任务进行讲解。

## 2、宏任务和微任务

### （1）常用的宏任务和微任务

| 名称   | 举例（常用）                                                                       |
| ------ | ---------------------------------------------------------------------------------- |
| 宏任务 | script、setTimeout 、setInterval 、setImmediate、Ajax、DOM 事件、I/O、UI Rendering |
| 微任务 | process.nextTick()、Promise、async/await                                           |

上述的 `setTimeout` 和 `setInterval` 等都是任务源，真正进入任务队列的是他们分发的任务。

**注意：** 微任务执行时机比宏任务要早！！

### （2）宏任务和微任务的优先级

**优先级**

- setTimeout = setInterval 一个队列
- setTimeout > setImmediate
- process.nextTick > Promise

### （3）代码实现微任务和宏任务

```js
for (const macroTask of macroTaskQueue) {
  handleMacroTask();
  for (const microTask of microTaskQueue) {
    handleMicroTask();
  }
}
```

### （4）event loop 和 DOM 渲染

在上面的**主题三第 4 点**中讲过， `DOM` 事件基于回调，也是基于 `event loop` 机制的。那 DOM 事件在程序执行到什么时候，才会渲染呢？

同样来看这段代码。

```js
<button id = "btn1">提交</button>

<script>
    console.log('Hi');

    document.getElementById('btn1').click(function(e){
        console.log('button clicked');
    });

    console.log('Bye');
</script>

/*
 输出结果：
Hi
Bye
button clicked
*/
```

![event loop 和 DOM渲染](https://img-blog.csdnimg.cn/20210520163932223.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

由上图可知，当程序调用栈空闲时，程序会先尝试去进行 `DOM` 渲染，最后再触发 `Event Loop` 机制。所以，在上面的这段代码中，程序会先打印同步代码 `Hi` 和 `Bye` ，等待同步代码打印完毕后，会再查找 `DOM` 事件，进行渲染，最后再触发 `event loop` 。

总结 `event loop` 和 `DOM` 渲染的关系：

- 在程序执行的时候， `JS` 是单线程的，且和 `DOM` 渲染共用一个线程；
- 所以 `JS` 在执行的时候，得留一些时机提供给 `DOM` 渲染。

- 每次 `Call Stack` 清空（即每次轮询结束），表示同步任务执行完成；
- 程序会一直给 `DOM` 重新渲染的机会， `DOM` 结构如有改变则重新渲染；
- 然后再去触发下一次 `Event Loop` 。

### （5）微任务、宏任务和 DOM 渲染的关系

先了解微任务、宏任务和 `DOM` 渲染的关系：

- **宏任务：** `DOM` 渲染**后**触发，如 `setTimeout` 。
- **微任务：** `DOM` 渲染**前**触发，如 `Promise` 。

我们先来演示现象，再追究其原理。

**1）演示 1**

```js
const $p1 = $('<p>一段文字</p>');
const $p2 = $('<p>一段文字</p>');
const $p3 = $('<p>一段文字</p>');
$('#container').append($p1).append($p2).append($p3);

//微任务：DOM 渲染前触发
Promise.resolve().then(() => {
  console.log('length', $('#container').children().length);
  alert('Promise then');
  //(alert 会阻断 js 执行， 也会阻断 DOM 渲染，便于查看效果)
});
```

以上这段代码中，浏览器显示效果如下。

![微任务](https://img-blog.csdnimg.cn/20210520164020196.gif#pic_center)

在图中可以看出，微任务 `promise` 在 `DOM` 渲染前就触发了，所以 `DOM` 对应的文字还没显示时， `Promise` 就已经打印。

**2）演示 2**

```js
const $p1 = $('<p>一段文字</p>');
const $p2 = $('<p>一段文字</p>');
const $p3 = $('<p>一段文字</p>');
$('#container').append($p1).append($p2).append($p3);

//宏任务：DOM 渲染后触发
setTimeout(() => {
  console.log('length1', $('#container').children().length);
  alert('SetTimeout');
  //(alert 会阻断 js 执行， 也会阻断 DOM 渲染，便于查看效果)
});
```

以上这段代码中，浏览器显示效果如下。

![宏任务](https://img-blog.csdnimg.cn/20210520164100186.gif#pic_center)

在图中可以看出，当 `DOM` 对应的文字已经显示时， `setTimeout` 弹框才出现，所以宏任务 `setTimeout` 是在 `DOM` 渲染后（即 `DOM` 渲染并显示结束）才触发。

讲到这里，回到我们前面所说的知识点。

- **宏任务：** `DOM` 渲染**后**触发，如 `setTimeout` 。
- **微任务：** `DOM` 渲染**前**触发，如 `Promise` 。

从上面的演示后，相信大家应该明白了微任务、宏任务和 `DOM` 的关系。在第一个演示中，微任务 `Promise` 在 `DOM` 还没有渲染时就触发了，所以微任务都是在 `DOM` 渲染前触发。在第二个演示中，宏任务 `setTimeout` 在文字显示结束后才触发 `alert` ，所以微任务都是在 `DOM` 渲染后才进行触发。

### （6）为何微任务更早

理解完微任务和宏任务与 DOM 的关系后，我们也大致基本了解了为什么微任务比宏任务更早。接下来我们在从 `eventloop` 层面来看，为什么微任务会比宏任务更早，为什么会在 DOM 渲染前就开始触发呢？

先用一张图来表示。

![微任务宏任务](https://img-blog.csdnimg.cn/20210520164132570.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

微任务在执行时不会经过 `Web APIs` ，它会把它放到一个叫做 micro task queue` （即宏任务队列）当中。且微任务是`ES6` 语法规定的，宏任务是由浏览器规定的，所以它会比宏任务更早。

到这里，我们讲完了 `event loop` 以及与其相关的宏任务和微任务，下面我们再用一张图来总结实际运用的执行顺序。

![微任务宏任务](https://img-blog.csdnimg.cn/20210520164145692.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**从上图中可以得出结论：**

**第一步**，程序先程序 `Call Stack` 里面的内容，待 `Call Stack` 清空时，执行当前的微任务；

**第二步**，程序找到微任务队列的任务，执行微任务；

**第三步**，待微任务执行完毕后，尝试执行 DOM 渲染；

**第四步**， `DOM` 渲染结束后，触发 `event loop` ，执行宏任务。

# 五、结束语

队列在前端中的应用可以算是很非常频繁了。基本上我们写的异步函数在执行过程中，都会涉及到事件循环问题。且在前端的面试当中，经常会被问到 `event loop` 、事件循环或者事件轮询是什么，很多面试者就很容易在这块内容吃亏。相信通过上文的学习，大家都对 `eventloop` 、微任务和宏任务有了一个更深的认识。

队列在前端中的应用就讲到这里啦！如有不理解或者文章有误欢迎评论区留言或私信我交流~

> - 关注公众号 **星期一研究室** ，第一时间关注学习干货，**更多有趣的专栏待你解锁**~
>
> - 如果这篇文章对你有用，记得**点个赞加个关注**再走哦~
> - 我们下期见！🥂🥂🥂
