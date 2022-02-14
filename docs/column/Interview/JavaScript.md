---
title: 「offer来了」保姆级巩固你的js知识体系（4.0w字）
author: 周一
date: '2021-11-04'
categories:
  - 前端开发
tags:
  - offer来了
sidebar: 'auto'
---

# 🧐 序言

大家都知道， `js` 在前端面试中的占比可以说是非常大了。基本上在每一场面试中，有 40% 以上的题都是 `js` 的题目。 `js` 不仅考察一个前端人的基础能力，更重要的是前端可以说是以 `js` 为本，所以也很考察我们的代码能力和逻辑思维。如果说在面试前端中 `js` 都不过关，那其实还是蛮危险的。

下面的这篇文章中，将讲解我整个秋招备试过程的所有题目。其中，有些知识点是一个很大的范围，但是放在面试系列中整理的话只能是概括性介绍，我将会以链接的方式，将我之前写的文章和其他相关模块的文章，放在题目后进行标注，方便大家更详细的了解当下模块的扩展知识点。

下面开始本文的讲解~📚

# 🥳 思维导图环节

在真正开篇之前，先用一张思维导图来了解全文的内容。**详情见下图 👇**

![js面试复习框架](https://img-blog.csdnimg.cn/075757d6bec644689c3165fb8913e9c6.png#pic_center)

思维导图收入囊中了，就该开始来架起 `js` 的知识体系啦~

# 😏 一、JS 规范

## 1、说几条 JavaScript 的基本规范。

- `for-in` 循环中的变量应该使用 let 关键字明确限定作用域，从而避免作用域污染。

```js
for (let i in obj) {
}
```

- 比较布尔值/数值时，需用 `===` / `!==` 来比较；
- `switch` 语句必须带有 `default` 分支；
- 不要使用全局函数；
- 使用对象字面量替代 `new Array` 这种形式，以下给出对象字面量的例子。

```js
let person = {
  name: '张三',
  age: 13,
  like: ['打篮球', '打排球'],
};
```

## 2、对原生 JavaScript 的了解。

数据类型、运算、对象、 `Function` 、继承、闭包、作用域、原型链、事件、`RegExp` 、`JSON` 、`Ajax` 、`DOM` 、`BOM` 、内存泄漏、异步装载、模板引擎、前端`MVC` 、路由、模块化、`Canvas` 、`ECMAScript` 。

## 3、说下对 JS 的了解吧。

是基于原型的**动态语言**，主要特性有**this**、**原型**和**原型链**。

JS 严格意义上来说分为：**语言标准部分**（ `ECMAScript` ）+ **宿主环境部分**。

**语言标准部分**

- `2015年`发布 `ES6` ，引入诸多特性，使得能够编写大型项目成为可能，标准自 `2015年` 之后以年号作为代号，每年一更。

**宿主环境部分**

- 在浏览器宿主环境包括 `DOM` + `BOM` 等
- 在 `Node` ，宿主环境包括一些文件、数据库、网络、与操作系统的交互等

## 4、JS 原生拖拽节点

- 给需要拖拽的节点绑定 `mousedown` ，`mousemove` ，`mouseup` 事件。
- `mousedown` 事件触发后，开始拖拽。
- `mousemove` 时，需要通过 `event.clientX` 和 `clientY` 获取拖拽位置，并实时**更新位置**。
- `mouseup` 时，拖拽结束。
- 需要注意**浏览器边界值**，设置**拖拽范围**。

## 5、谈谈你对 ES6 的理解

- 新增模板字符串（为 `JavaScript` 提供了简单的字符串插值功能）。
- 箭头函数。
- `for-of`（用来遍历数据——例如数组中的值）。
- `arguments` 对象可以被不确定的参数和默认参数完美替代。
- `ES6` 将 `promise` 对象纳入规范，提供了原生的 `promise` 对象。
- 增加了 `let` 和 `const` 命令，用来声明变量。
- 还有就是引入 `module` 模块的概念。

## 6、知道 ES6 的 class 嘛？

`ES6` 中的 `class` 是，为这个类的函数对象直接添加方法，而不是加在这个函数对象的原型对象上。

## 7、说说你对 AMD 和 Commonjs 的理解

- `CommonJS` 是服务器端模块的规范，`Node.js` 采用了这个规范。
- `CommonJS` 规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。`AMD` 规范则是非同步加载模块，允许指定回调函数。
- `AMD` 推荐的风格通过返回一个对象作为模块对象。`CommonJS` 的风格则是通过对 `module.exports` 或 `exports` 的属性赋值来达到暴露模块对象的目的。

## 8、如何理解前端模块化

前端模块化就是复杂的文件编程中一个个独立的模块，比如 js 文件等等，分成独立的模块有利于重用（复用性）和维护（版本迭代），这样会引来模块之间相互依赖的问题，所以有了 commonJS 规范，AMD，CMD 规范等等，以及用于 js 打包（变异等处理）的工具 webpack。

## 9、面向对象编程思想

- 基本思想是使用对象，类，继承，封装等基本概念来进行程序设计；
- 易维护；
- 易扩展；
- 开发工作的重用性、继承性高，降低重复工作量；
- 缩短了开发周期。

## 10、用过 TypeScript 吗？它的作用是什么？

`TypeScript` 为 `JS` 添加类型支持，以及提供最新版的 `ES` 语法的支持，有利于团队协作和排错，开发大型项目。

## 11、PWA 使用过吗？serviceWorker 的使用原理是啥？

`渐进式网络应用（PWA）`是谷歌在 `2015年底` 提出的概念。基本上算是**web 应用程序**，但在外观和感觉上与 `原生app` 类似。支持 `PWA` 的网站可以提供**脱机工作**、**推送通知**和**设备硬件访问**等功能。

`Service Worker` 是浏览器在后台独立于网页运行的脚本，它打开了通向不需要网页或用户交互的功能的大门。 现在，它们已包括如推送通知和后台同步等功能。 将来， `Service Worker` 将会支持如定期同步或地理围栏等其他功能。

**注**：渐进式网络应用 Progressive Network Application

# 😲 二、数据类型

## 1、问：0.1+0.2 === 0.3 吗？为什么？

在正常的数学逻辑思维中， `0.1+0.2=0.3` 这个逻辑是正确的，但是在 `JavaScript` 中 `0.1+0.2 !== 0.3` ，这是为什么呢？这个问题也会偶尔被用来当做面试题来考查面试者对 `JavaScript` 的数值的理解程度。

```js
0.1 + 0.2 == 0.3; // false
```

在 `JS` 中，二进制的浮点数 `0.1` 和 `0.2` 并不是精确的，所以它们相加的结果并非正好等于 `0.3` ，而是一个比较接近 `0.3` 的数字 `0.30000000000000004` ，所以条件判断结果为 `false` 。

原因在于在 `JS` 当中，采用的是 `IEEE 754` 的双精度标准，所以计算机内部在**存储数据编码**的时候，0.1 在计算机内部不是精确的 `0.1` ，而是一个有舍入误差的 `0.1` 。当代码被编译或解析后， `0.1` 已经被四舍五入成一个与之很接近的计算机内部数字，以至于计算还没开始，一个很小的舍入错误就已经产生了。这也就是 `0.1 + 0.2` 不等于 `0.3` 的原因。

**那如何避免这样的问题？**

最常用的方法就是**将浮点数转化成整数计算**，因为**整数**都是可以精确表示的。

通常就是把计算数字提升 10 的 N 次方倍再除以 `10` 的 `N` 次方，一般都用 `1000` 就行了。

```js
(0.1 * 1000 + 0.2 * 1000) / 1000 == 0.3; //true
```

## 2、js 数据类型有哪些？具体存在哪里？判断方式是什么？

**（1）js 数据类型**

`js` 数据类型包括**基本数据类型**和**引用数据类型**。

**（2）具体存放在哪里？**

**基本数据类型：**

基本数据类型，是指 `Numer` 、 `Boolean` 、 `String` 、 `null` 、 `undefined` 、 `Symbol` （ES6 新增的）、 `BigInt（ES2020）` 等值，它们在内存中都是存储在栈中的，即直接访问该变量就可以得到存储在**栈**中的对应该变量的值。

若将一个变量的值赋值给另一个变量，则这两个变量在内存中是**独立的**，修改其中任意一个变量的值，不会影响另一个变量。这就是基本数据类型。

**引用数据类型：**

那引用数据类型呢，是指 `Object ` 、 `Array` 、 `Function` 等，他们在内存中是存在于**栈和堆**当中的，即我们要访问到引用类型的值时，需要先访问到该变量在**栈**中的地址（指向堆中的值），然后再通过这个地址，访问到存放在**堆**中的数据。这就是引用数据类型。

**（3） 常用判断方式：typeof、instanceof、===**

**1）typeof：**

**定义**：返回数据类型的字符串表达（小写）

**用法**：typeof + 变量

**可以判断**：

- undefined/ 数值 / 字符串 / 布尔值 / function （返回 'undefined' / 'number' / 'string' / 'boolean' / 'function'）

- null 与 object 、object 与 array （null、array、object 都会返回 'object' ）

```js
<script type="text/javascript">
    console.log(typeof "Tony");                // 返回 string
    console.log(typeof 5.01);                  // 返回 number
    console.log(typeof false);                 // 返回 boolean
    console.log(typeof undefined);             // 返回 undefined
    console.log(typeof null);                  // 返回 object
    console.log(typeof [1,2,3,4]);             // 返回 object
    console.log(typeof {name:'John', age:34}); // 返回 object
</script>
```

**2）instanceof：**

**定义**：判断对象的具体类型

**用法**：`b instanceof A` → 表明 `b` 是否是 `A` 的实例对象

**可以判断**：

专门用来判断对象数据的类型: `Object` , `Array` 与 `Function`

判断 `String` ， `Number` ， `Boolean` 这三种类型的数据时，直接赋值为 `false` ，调用构造函数创建的数据为 `true`

```js
<script type='text/javascript'>
  let str = new String("hello world") //console.log(str instanceof String); →
  true str = "hello world" //console.log(str instanceof String); → false let num
  = new Number(44) //console.log(num instanceof Number); → true num = 44
  //console.log(num instanceof Number); → false let bool = new Boolean(true)
  //console.log(bool instanceof Boolean); → true bool = true //console.log(bool
  instanceof Boolean); → false
</script>
```

```js
<script type="text/javascript">
    var items = [];
    var object = {};

    function reflect(value) {
        return value;
    }

    console.log(items instanceof Array);        // true
    console.log(items instanceof Object);       // true
    console.log(object instanceof Object);      // true
    console.log(object instanceof Array);       // false
    console.log(reflect instanceof Function);   // true
    console.log(reflect instanceof Object);     // true
```

**3）===：**

**可以判断**： `undefined` ， `null`

```js
<script type='text/javascript'>
  let str; console.log(typeof str, str === undefined); //'undefined', true let
  str2 = null; console.log(typeof str2, str2 === null); // 'object', true
</script>
```

## 3、什么是浅拷贝？什么是深拷贝？说明并分别写出代码。

### （1）浅拷贝

所谓浅拷贝，就是一个变量赋值给另一个变量，其中一个变量的值改变，则两个变量的值都变了，即对于浅拷贝来说，是数据在拷贝后，新拷贝的对象内部仍然有一部分数据会随着源对象的变化而变化。

```js
// 分析
function shallowCopy(obj) {
  let copyObj = {};
  for (let i in obj) {
    copyObj[i] = obj[i];
  }
  return copyObj;
}

// 实例
let a = {
  name: '张三',
  age: 19,
  like: ['打篮球', '唱歌', '跳舞'],
};

let b = shallowCopy(a);

a.name = '李四';
a.like[0] = '打打乒乓球';
console.log(a);
console.log(b);
```

### （2）深拷贝

**定义**：深拷贝 就是，新拷贝的对象内部所有数据都是独立存在的，不会随着源对象的改变而改变。

**深拷贝有两种方式**：递归拷贝和利用 JSON 函数进行深拷贝。

- **递归拷贝的实现原理是**：对变量中的每个元素进行获取，若遇到**基本类型值**，直接获取；若遇到**引用类型值**，则继续对该值内部的每个元素进行获取。
- **JSON 深拷贝的实现原理是**：将变量的值转为字符串形式，然后再转化为对象赋值给新的变量。

**局限性**：深拷贝的局限性在于，会忽略 `undefined` ，不能序列化函数，不能解决循环引用的对象。

**递归拷贝方式实现代码：**

```js
// 分析
function deepCopy(obj) {
  // 判断是否为引用数据类型
  if (typeof obj === 'object') {
    let result = obj.constructor === Array ? [] : {};
    // 对引用类型继续进行遍历，如果遍历没有结束的话
    for (let i in obj) {
      result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
    }

    return result;
  }
  // 为基本数据类型，直接赋值返回
  else {
    return obj;
  }
}

// 实例 - 利用递归函数做深拷贝
let c = {
  name: '张三',
  age: 12,
  like: ['打乒乓球', '打羽毛球', '打太极'],
};

let d = deepCopy(c);

c.name = '李四';
c.like[0] = '打篮球';
console.log(c);
console.log(d);
```

**JSON 深拷贝实现代码：**

```js
// 实例 - 利用json函数做深拷贝
let e = {
  name: '张三',
  age: 19,
  like: ['打羽毛球', '唱歌', '跳舞'],
};

let f = JSON.parse(JSON.stringify(e));

// 注意： JSON函数做深度拷贝时不能拷贝正则，Date，方法函数等

e.name = '李四';
e.like[0] = '打乒乓球';

// console.log(e);
// console.log(f);
```

这里可以在参考我之前写过的一篇文章辅助理解 👉[栈在前端中的应用，顺便再了解下深拷贝和浅拷贝！](https://juejin.cn/post/6963231689396977672)

## 4、JS 整数是怎么表示的？

JS 整数通过 `Number` 类型来表示，遵循 `IEEE 754` 标准，通过 `64位` 来表示一个数字，即 `1+11+52` （符号位+指数位+小数部分有效位），最大安全数字是 2<sup>53</sup> - 1，对应 `16位` 十进制数。

**注**：1 位十进制数对应 4 位二进制数

## 5、Number 的存储空间是多大？如果后台发送了一个超过最大数字怎么办？

Math.pow(2,53)，53 为有效数字；如果后台发送一个超过最大数字，会发生截断，等于 `JS` 能支持的最大安全数字 2<sup>53</sup> - 1。

## 6、NAN 是什么，用 typeof 会输出什么？

Not a Number，表示非数字。

```js
typeof NaN === 'number'; //true
```

## 7、Symbol 有什么用处？

- 可以用来表示一个**独一无二**的变量，**防止命名冲突**。
- 除此之外， `Symbol` 还可以用来**模拟私有**属性。

> - **详细文章补充 👇**
> - 原文：[面试官：JavaScript 原始数据类型 Symbol 有什么用？](https://www.cnblogs.com/lzkwin/p/12666300.html)
> - 链接：https://www.cnblogs.com/lzkwin/p/12666300.html

## 8、null，undefined 的区别

- `undefined` 表示不存在这个值。
- `undefined` 是一个表示“无”的原始值或者说表示“缺少值”，就是此处应该有一个值，但是**还没有定义**。尝试读取时就会返回 `undefined` 。
- 例如变量被声明了，但没有赋值时，就等于 `undefined` 。
- `null` 表示一个对象被定义了，值为“空值”。
- `null` 是一个对象（空对象，没有**任何属性和方法**）。
- 例如作为函数的参数时，表示该函数的参数不是对象。
- 在验证 `null` 时，一定要使用 `===` ，因为 `==` 无法区分 `null` 和 `undefined` 。

## 9、JS 隐式转换，显示转换

一般非基础类型进行转换时会调用**valueOf**，如果 `valueOf` 无法返回基本类型值，就会调用**toString**。

**（1）字符串和数字**

- “+”操作符，如果有一个为字符串，那么都转化到字符串然后执行字符串拼接。
- “-”操作符，转换为数字，相减(-a, a\*1, a/1)都能进行隐式强制类型转换。

```
[] + {} 和 {} + []
```

**（2）布尔值到数字**

- 1 + true = 2；
- 1 + false = 1;

**（3）转换为布尔值**

- for 中第二个
- while
- if
- 三元表达式
- || （逻辑或）和 &&（逻辑与）左边的操作个数

**（4）符号**

- 不能被转换为数字
- 能被转换为布尔值（都是 true）
- 可以被转换成字符串“Symbol(cool)”

**（5）宽松相等和严格相等**

宽松相等允许进行强制类型转换，而严格相等不允许。

**① 字符串与数字**

- 转换为数字然后比较

**② 其他类型与布尔类型**

- 先把布尔类型转换为数字，然后继续进行比较

**③ 对象与非对象**

- 执行对象的 `ToPrimitive` （对象）然后继续进行比较

**④ 假值列表**

- undefined
- null
- false
- +0，-0，NaN
- “”

## 10、介绍下 js 有哪些内置对象

- `Object` 是 `Javascript` 中所有对象的父对象；
- 其他数据封装类对象：`Object` 、`Array` 、`Boolean` 、`Number` 和 `String`；
- 其他对象：`Function` 、`Arguments` 、`Math` 、`Date` 、`RegExp` 、`Error`。

## 11、js 有哪些方法定义对象

- 对象字面量：`let obj = {}` ；
- 构造函数：`let obj = new Object()` ；
- Object.create()：`let obj = Object.create(object.prototype)` ；

## 12、如何判断一个对象是不是空对象？

```js
Object.keys(obj).length === 0;
```

## 13、手写题：获取 url 参数 getUrlParams(url)

```js
//封装函数getUrlParams, 将URL地址的参数解析为对象
function getUrlParams(url) {
  let obj = {};

  if (url.indexOf('?') === -1) {
    return obj;
  }

  let first_res = url.split('?')[1];
  let second_res = first_res.split('&');

  for (let i in second_res) {
    third = second_res[i].split('=');
    obj[third[0]] = third[1];
  }
  return obj;
}

// 测试代码

let URL = 'https://www.sogou.com/web?ie=UTF-8&query=搜索内容&_em=3';
console.log(getUrlParams(URL));
```

## 14、数组能够调用的函数有哪些？

- `push` 向数组尾部添加元素
- `pop` 删除并返回数组最后一个元素
- `splice` 添加/删除元素
- `slice` 返回选定的元素
- `shift` 删除第一个元素并返回
- `unshift` 向数组开头添加一个或更多元素，并返回新长度
- `sort` 对数组元素进行排序
- `find` 返回通过测试的数组的第一个元素
- `findIndex`
- `map/filter/reduce` 等函数式编程方法
- 原型链上的方法：`toString/valueOf`

## 15、函数中的 arguments 是数组吗？类数组转数组的方法了解一下？

是类数组，是属于鸭子类型的范畴，只是长得像数组。

- ... 运算符
- Array.from
- Array.prototype.slice.apply(arguments)

## 16、手写题：如何判断数组类型？

```js
// 方法一：instanceof方法
let arr = [1, 2, 3];
console.log(arr instanceof Array);

// 方法二：constructor方法
let arr = [1, 2, 3];
console.log(arr.constructor === Array);

// 方法三：isArray方法
let arr = [1, 2, 3];
console.log(Array.isArray(arr));

// 方法四：Object.prototype方法
let arr = [1, 2, 3];
console.log(Object.prototype.toString.call(arr) === '[object Array]');

// 方法五：Array.__proto__方法
let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);

// 方法六：Object.getPrototypeOf方法
let arr = [1, 2, 3];
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 方法七：Array.prototype.isPrototypeOf方法
let arr = [1, 2, 3];
console.log(Array.prototype.isPrototypeOf(arr));
```

## 17、手写题：sort 快速打乱数组

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(() => Math.random() - 0.5);
//利用sort，返回结果为大于等于0时被交换位置，小于0时交换位置。
```

## 18、手写题：数组去重操作

```js
/*   数组去重：让数组所有元素都独一无二，没有重复元素   */

// 创建一个含有重复元素的数组
let arr = [1, 1, 2, 3, 3, 6, 7, 2, 9, 9];

// 第一种方法：利用 Set数据结构 + Array.from() 函数
function removeRepeat1(arr) {
  return Array.from(new Set(arr));
}

// 第二种方法： 利用 Set数据结构 + ...扩展运算符
function removeRepeat2(arr) {
  return [...new Set(arr)];
}

// 第三种方法： 利用 indexOf 函数
function removeRepeat3(arr) {
  let new_arr = [];

  for (let i in arr) {
    let item = arr[i];

    if (new_arr.indexOf(item) === -1) {
      new_arr.push(item);
    }
  }

  return new_arr;
}

// 第四种方法： 利用 includes 函数
function removeRepeat4(arr) {
  let new_arr = [];

  for (let i in arr) {
    let item = arr[i];

    if (!new_arr.includes(item)) {
      new_arr.push(item);
    }
  }

  return new_arr;
}

// 第五种方法： 利用 filter 函数
function removeRepeat5(arr) {
  return arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
}

// 第六种方法： 利用 Map 数据结构
function removeRepeat6(arr) {
  let map = new Map();
  let new_arr = [];

  for (let i in arr) {
    let item = arr[i];

    if (!map.has(item)) {
      map.set(item, true);
      new_arr.push(item);
    }
  }

  return new_arr;
}

// 测试方法
console.log(removeRepeat1(arr));
console.log(removeRepeat2(arr));
console.log(removeRepeat3(arr));
console.log(removeRepeat4(arr));
console.log(removeRepeat5(arr));
console.log(removeRepeat6(arr));
```

## 19、手写题：数组扁平化

```js
/*  数组扁平化就是将多维数组转成一维数组   */

// 多维数组
let arr = [1, 2, [3, 4, [6, 7]]];

// 第一种方法：利用 flat() 函数
function flatArr1(arr) {
  return arr.flat(Infinity);
}

// 第二种方法： 正则匹配
function flatArr2(arr) {
  return JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
}

// 第三种方法：利用 reduce() 遍历所有的元素
function flatArr3(arr) {
  return arr.reduce((i, j) => {
    return i.concat(Array.isArray(j) ? flatArr3(j) : j);
  }, []);
}

// 第四种方法：直接使用递归函数
function flatArr4(arr) {
  let new_arr = [];

  function innerArr(v) {
    for (let i in v) {
      let item = v[i];

      if (Array.isArray(item)) {
        innerArr(item);
      } else {
        new_arr.push(item);
      }
    }
  }

  innerArr(arr);

  return new_arr;
}

// 方法测试
console.log(flatArr1(arr));
console.log(flatArr2(arr));
console.log(flatArr3(arr));
console.log(flatArr4(arr));
```

## 20、`new` 操作符具体干了什么呢？

`new` 一个对象的过程是：

- 创建一个**空对象**；
- 对新对象进行 `[prototype]` 绑定（即 `son. __ proto __ =father.prototype` ）；
- 新对象和函数调用的 `this` 会绑定起来；
- 执行构造函数中的方法；
- 如果函数**没有返回值**则自动返回这个新对象。

## 21、手写题：手写一个 new 方法

```js
function father(name) {
  this.name = name;
  this.sayname = function () {
    console.log(this.name);
  };
}

function myNew(ctx, ...args) {
  //...args为ES6展开符，也可以使用arguments
  // 先用Oject创建一个空的对象
  let obj = new Object();
  // 新对象会执行prototype连接
  obj.__proto__ = ctx.prototype;
  // 新对象和函数调用的this绑定起来
  let res = ctx.call(obj, ...args);
  // 判断函数返回值如果是null或者undefined则返回obj，否则就返回res
  return res instanceof Object ? res : obj;
}

let son = myNew(father, 'Bob');
son.sayname();
```

## 22、js 如何实现继承？

- 原型链继承
- 盗用构造函数继承
- 组合继承
- 原型式继承
- 继承式继承
- 寄生式组合继承
- class 的继承

> - 详解文章补充 👇
> - 原文：[一文梳理 JavaScript 中常见的七大继承方案](https://blog.csdn.net/weixin_44803753/article/details/119280627)
> - 链接：https://blog.csdn.net/weixin_44803753/article/details/119280627
> - 碎碎念：对于 js 的继承问题来说，要明确几种继承之间的关系，以及各自的优缺点，还有手写每一种继承。

## 23、JS 中的垃圾回收机制

简单来说，垃圾回收机制就是，**清除无用变量，释放更多内存，展现更好性能**。

**必要性：**由于**字符串**、**对象**和**数组**没有固定大小，所有只有当他们的大小已知时，才能对他们进行动态的存储分配。

`JavaScript` 程序每次创建字符串、数组或对象时，解释器都必须**分配内存**来存储那个**实体**。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则， `JavaScript` 的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。

这段话解释了为什么系统需要垃圾回收， `JS` 不像 `C/C++` ，它有自己的一套**垃圾回收机制**（`GarbageCollection`）。

`JavaScript` 的解释器可以检测到何时程序不再使用一个对象了，当他确定了一个对象是无用的时候，他就知道不再需要这个对象，可以把它所占用的内存释放掉了。

**例如：**

```js
var a = 'hello world';
var b = 'world';
var a = b;
//这时，会释放掉"hello world"，释放内存以便再引用
```

**垃圾回收的方法**：标记清除法、引用计数法。

**标记清除法**

这是最常见的垃圾回收方式，当变量进入环境时，就标记这个变量为”**进入环境**“，从逻辑上讲，永远不能释放进入环境的变量所占的内存，只要执行流程进入相应的环境，就可能用到他们。当离开环境时，就标记为“**离开环境**”。

垃圾回收器在运行的时候会给存储在内存中的变量都**加上标记**（所有都加），然后去掉环境变量中的变量，以及被环境变量中的变量所引用的变量（条件性去除标记），删除所有被标记的变量，删除的变量无法在环境变量中被访问所以会被删除，最后垃圾回收器完成了内存的清除工作，并回收他们所占用的内存。

**引用计数法**

另一种不太常见的方法就是**引用计数法**，引用计数法的意思就是每个值没有引用的次数。当声明了一个变量，并用一个引用类型的值赋值给该变量，则这个值的引用次数为 `1` ；相反的，如果包含了对这个值引用的变量又取得了另外一个值，则原先的引用值引用次数就减 `1` ，当这个值的引用次数为 `0` 的时候，说明没有办法再访问这个值了，因此就把所占的内存给回收进来，这样垃圾收集器再次运行的时候，就会释放引用次数为 `0` 的这些值。

用引用计数法会存在内存泄露，**下面来看原因：**

```js
function problem() {
  var objA = new Object();
  var objB = new Object();
  objA.someOtherObject = objB;
  objB.anotherObject = objA;
}
```

在这个例子里面， `objA` 和 `objB` 通过各自的属性相互引用，这样的话，两个对象的引用次数都为 `2` ，在采用引用计数的策略中，由于函数执行之后，这两个对象都离开了作用域，函数执行完成之后，因为计数不为 `0` ，这样的相互引用如果大量存在就会导致内存泄露。

特别是在 `DOM` 对象中，也容易存在这种问题：

```js
var element=document.getElementById（’‘）;
var myObj=new Object();
myObj.element=element;
element.someObject=myObj;
```

这样就不会有垃圾回收的过程。

> - 详解文章补充 👇
>
> - 原文：[JavaScript 的垃圾回收机制，清除无用变量，释放多余内存，展现更好的性能](https://blog.csdn.net/l_ppp/article/details/106858295)
>
> - 链接：https://blog.csdn.net/l_ppp/article/details/106858295

# 🤐 三、作用域、原型链、闭包

## 1、作用域

### （1）什么是作用域？

`ES5` 中只存在两种作用域：**全局作用域**和**函数作用域**。在 `Javascript` 中，我们将作用域定义为**一套规则**，这套规则用来管理引擎如何在当前作用域以及嵌套子作用域中根据标识符名称进行变量（变量名和函数名）查找。

**作用域**，就是当访问一个变量时，编译器在执行这段代码时，会首先从**当前的作用域**中查找是否有这个标识符，如果没有找到，就会去**父作用域**查找，如果父作用域还没有找到则继续**向上查找**，直到**全局作用域**为止。可理解为该上下文中声明的**变量**和声明的**作用范围**，可分为**块级作用域**和**函数作用域**。

### （2）什么是作用域链？

- 作用域链可以看成是将变量对象按顺序连接起来的一条链子。
- 每个执行环境中的作用域都是不同的。
- 当我们引用变量时，会顺着当前执行环境的作用域链，从作用域链的开头开始，依次往上寻找对应的变量，直到找到作用域链的尾部，报错 `undefined` 。
- 作用域链保证了**变量的有序访问**。
- **注意**：作用域链只能**向上访问**，到 `window` 对象即被终止。

## 2、原型链

### （1）什么是原型？什么是原型链？

- **原型和原型链**：在 `Javascript` 中，每个对象都会在其内部初始化一个属性，这个属性就是 `prototype`（原型）。当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去 `prototype` 里找这个属性，这个 `prototype` 又会有自己的 `prototype` ，于是就这样一直找下去，这样逐级查找形似一个链条，且通过 `[[prototype]]` 属性连接，这个连接的过程被称为**原型链**。
- **关系**：`instance.constructor.prototype === instance.__ proto __` ；

### （2）什么是原型链继承？

**原型链继承**，是类比类的继承，即当有两个构造函数 `A` 和 `B` ，将一个构造函数 `A` 的原型对象，通过其 `[[prototype]]` 属性连接另外一个构造函数 B 的原型对象时，这个过程被称为**原型继承**。

### （3）手写题：原型链之 instance 原理

```js
// 判断A是否为B的实例
const instanceOf = (A, B) => {
  // 定义一个指针P指向A
  let p = A;
  // 当P存在时则继续执行
  while (p) {
    // 判断P值是否等于B的prototype对象，是则说明A是B的实例
    if (p === B.prototype) {
      return true;
    }
    // 不断遍历A的原型链，直到找到B的原型为止
    p = p.__proto__;
  }
  return false;
};

console.log(instanceOf([], Array));
```

## 3、闭包

### （1）闭包是什么？

闭包，是指函数内部再嵌套函数，且在嵌套的函数内有权访问另外一个函数作用域中的变量。

### （2）js 代码的执行过程

看完闭包的定义，我们再来了解 `js` 代码的整个执行过程，**具体如下：**

`JavaScript` 代码的整个执行过程，分为两个阶段，**代码编译阶段**与**代码执行阶段**。编译阶段由**编译器**完成，将代码翻译成可执行代码，这个阶段**作用域规则**会确定。执行阶段由**引擎**完成，主要任务是执行可执行代码，执行上下文在这个阶段创建。

![闭包是什么](https://img-blog.csdnimg.cn/20210502145239801.png#pic_center)

### （3）一般如何产生闭包？

- 函数作为返回值被传递
- 函数作为参数被返回

### （4）闭包产生的本质

- 当前环境中存在指向**父级作用域**的引用

### （5）闭包的特性

- 函数内再嵌套函数
- 内部函数可以引用外层的参数和变量
- 参数和变量不会被垃圾回收机制回收

### （6）闭包的优缺点

- **优点**：能够实现封装和缓存等。
- **缺点**：**①**消耗内存；**②**使用不当会内存溢出。

### （7）解决方法

- 在退出函数之前，将不使用的局部变量全部删除。

### （8）let 闭包

let 会产生**临时性死区**，在当前的**执行上下文**中，会进行**变量提升**，但是未被初始化，所以在上下文执行阶段时，执行代码如果还没有执行到变量赋值，就引用此变量会引发报错，因为此变量未被初始化。

### （9）闭包的应用场景

- 函数柯里化
- 模块

### （10）手写题：函数柯里化

**1）柯里化是什么**

柯里化指的是，有这样一个函数，它接收函数 `A` ，并且能返回一个新的函数，这个新的函数能够处理函数 `A` 的**剩余参数**。

**2）代码实现**

下面给出三种具体的实现方式，**代码如下：**

```js
/**
 *  函数柯里化：将一个接收多个参数的函数变为接收任意参数返回一个函数的形式，便于之后继续调用，直到最后一次调用，才返回结果值  
    例子：有一个add函数，用于返回所有参数的和，add(1, 2, 3, 4, 5) 返回的是15
          现在要将其变为类似 add(1)(2)(3)(4)(5) 或者 add(1)(2, 3, 4)(5) 的形式，并且功能相同
 */

// 普通的add()函数
function add() {
  let sum = 0;
  let args = [...arguments];
  for (let i in args) {
    sum += args[i];
  }
  return sum;
}

// 第一种add()函数柯里化方式
// 缺点：最后返回的结果是函数类型，但会被隐式转化为字符串，调用toString()方法

function add1() {
  // 创建数组，用于存放之后接收的所有参数
  let args = [...arguments];

  function getArgs() {
    args.push(...arguments);
    return getArgs;
  }

  getArgs.toString = function () {
    return args.reduce((a, b) => {
      return a + b;
    });
  };

  return getArgs;
}

// 第二种add()函数柯里化方式
// 缺点：需要在最后再自调用一次，即不传参调用表示已没有参数了
function add2() {
  let args = [...arguments];

  return function () {
    // 长度为0时直接把所有数进行相加
    if (arguments.length === 0) {
      return args.reduce((a, b) => {
        return a + b;
      });
    } else {
      // 定义一个_args为了用来遍历
      let _args = [...arguments];
      // 长度不为0时要进行遍历
      for (let i = 0; i < _args.length; i++) {
        args.push(_args[i]);
      }
      return arguments.callee;
    }
  };
}

// 第三种add()函数柯里化方式
// 缺点：在刚开始传参之前，设定总共需要传入参数的个数
function add3(length) {
  // slice(1)表示从第二个元素开始取值
  let args = [...arguments].slice(1);

  return function () {
    args = args.concat([...arguments]);
    if (arguments.length < length) {
      return add3.apply(this, [length - arguments.length].concat(args));
    } else {
      // 返回想要实现的目的
      return args.reduce((a, b) => a + b);
    }
  };
}

// 测试代码
let res = add(1, 2, 3, 4, 5);
let res1 = add1(1)(2)(3)(4)(5);
let res2 = add2(1)(2, 3, 4)(5)();
let res3 = add3(5);

console.log(res);
console.log(res1);
console.log(res2);
console.log(res3(1)(2, 3)(4)(5));
```

### （11）补充

> 详解文章补充 👇
>
> - 原文：[剖析作用域和闭包，浅析函数柯里化](https://juejin.cn/post/6970469489938792455)
> - 链接：https://juejin.cn/post/6970469489938792455

## 4、变量对象

### （1）变量对象

**变量对象**，是执行上下文中的一部分，可以抽象为一种**数据作用域**，也可以理解为就是**一个简单的对象**，它存储着该执行上下文中的**所有变量**和**函数声明**（不包含函数表达式）。

### （2）活动对象

**活动对象(AO)**：当变量对象所处的上下文为 `active EC` 时，成为**活动对象**。

### （3）变量提升

函数在运行的时候，会首先创建**执行上下文**，然后将执行上下文入栈，当此执行上下文处于**栈顶**时，开始运行执行上下文。

在创建执行上下文的过程中会做三件事：**创建变量对象**，**创建作用域链**，**确定 this 指向**，其中创建变量对象的过程中，首先会为 `arguments` 创建一个属性，值为 `arguments` ，然后会扫描 `function` 函数声明，创建一个同名属性，值为函数的引用，接着会扫码 `var` 变量声明，创建一个同名属性，值为 `undefined` ，这就是变量提升 。

**以下给出具体实例：**

```js
js(b); //call b
console.log(a); //undefined
let a = 'Hello World';
function b() {
  console.log('call b');
}
```

```js
b(); // call b second
function b() {
  console.log('call b fist');
}
function b() {
  console.log('call b second');
}
var b = 'Hello world';
```

# 😜 四、事件

## 1、事件模型

> W3C 中定义事件的发生经历三个阶段：捕获阶段（capturing）、目标阶段（targetin）、冒泡阶段（bubbling）。

- 冒泡型事件：当你使用事件冒泡时，子级元素先触发，父级元素后触发。
- 捕获型事件：当你使用事件捕获时，父级元素先触发，子级元素后触发。
- `DOM` 事件流：同时支持两种事件模型：捕获型事件和冒泡型事件。

## 2、事件是如何实现的？

基于**发布订阅模式**，就是在浏览器加载的时候会读取事件相关的代码，但是只有实际等到具体的事件触发的时候才会执行。

比如点击按钮，这是个事件（ `Event` ），而负责处理事件的代码段通常被称为事件处理程序（Event Handler），也就是「启动对话框的显示」这个动作。

在 `Web` 端，我们常见的就是 `DOM` 事件：

- **DOM0 级事件**，直接在 `html` 元素上绑定 `on-event` ，比如 `onclick`，取消的话，`dom.onclick = null`，**同一个事件只能有一个处理程序**，后面的会覆盖前面的。
- **DOM2 级事件**，通过 `addEventListener` 注册事件，通过 `removeEventListener` 来删除事件，一个事件可以有多个事件处理程序，按顺序执行，捕获事件和冒泡事件。
- **DOM3 级事件**，增加了事件类型，比如 `UI` 事件，焦点事件，鼠标事件。

## 3、怎么加事件监听？

> 通过 onclick 和 addEventListener 来对事件进行监听。

## 4、什么是事件委托？

### （1）定义

- 事件代理(Event Delegation)，又称为**事件委托**，是 `Javascript` 中常用的**绑定事件**技巧。
- “事件代理”即是把**原本需要绑定的事件**委托给**父元素**，让父元素担当事件监听的职务。

### （2）原理

- 事件代理的原理是 `DOM` 元素的事件冒泡。

### （3）好处

- 使用事件代理的好处是可以**提高性能**。
- 可以大量节省内存占用，减少事件注册，比如说在 `ul` 上代理所有 `li` 的 `click` 事件。
- 可以实现当**新增子对象**时无需再次对其进行绑定。

### （4）补充

> **详解文章补充（事件）👇**
>
> - 原文：[你真的理解事件绑定、事件冒泡和事件委托吗？](https://juejin.cn/post/6971940848439132196)
> - 链接：https://juejin.cn/post/6971940848439132196

## 5、说说事件循环 event loop

### （1）定义

首先， `js` 是**单线程**的，主要的任务是**处理用户的交互**，而用户的交互无非就是响应 `DOM` 的增删改，那如何处理事件响应呢？

浏览器的各种 `Web API` 会为异步的代码提供了一个单独的运行空间，当异步的代码运行完毕以后，会将代码中的回调送入到 `Task Queue`（任务队列）中去，等到调用栈空时，再将队列中的回调函数压入调用栈中执行，等到栈空以及任务队列也为空时，调用栈仍然会不断检测任务队列中是否有代码需要执行，这一过程就是完整的 `Event loop` 了。

同时需要注意的是，`js` 引擎在执行过程中有优先级之分， `js` 引擎在一次事件循环中， 会先执行 `js` 线程的主任务，然后会去查找是否有**微任务** `microtask（promise）`，如果有那就优先执行微任务，如果没有，再去查找**宏任务** `macrotask（setTimeout、setInterval）` 进行执行。

![事件循环与任务队列](https://img-blog.csdnimg.cn/20210502174821289.png#pic_center)

### （2）常用的宏任务和微任务

**1）常用的宏任务和微任务有：**

| 名称   | 举例（常用）                                                       |
| ------ | ------------------------------------------------------------------ |
| 宏任务 | script、setTimeout 、setInterval 、setImmediate、I/O、UI Rendering |
| 微任务 | process.nextTick()、Promise                                        |

上诉的 `setTimeout` 和 `setInterval` 等都是任务源，真正进入任务队列的是他们分发的任务。

**2）优先级**

- setTimeout = setInterval 一个队列
- setTimeout > setImmediate
- process.nextTick > Promise

```js
for (const macroTask of macroTaskQueue) {
  // 2.再执行宏任务
  handleMacroTask();
  for (const microTask of microTaskQueue) {
    // 1.先执行微任务
    handleMicroTask();
  }
}
```

### （3）setTimeout(fn,0)多久才执行，Event loop？

`setTimeout` 按照顺序放到**队列**里面，然后等待函数调用栈清空之后才开始执行，而这些操作进入队列的顺序，则由设定的延迟时间来决定。

### （4）补充

> **详解文章补充（事件循环）👇**
>
> - 原文 1：[详解队列在前端的应用，深剖 JS 中的事件循环 Eventloop，再了解微任务和宏任务](https://juejin.cn/post/6968750855071727630)
> - 链接 1：https://juejin.cn/post/6968750855071727630
> - 原文 2：[浏览器与 Node 环境下的 Event Loop](https://juejin.cn/post/6886992599006380045)
> - 链接 2：https://juejin.cn/post/6886992599006380045

# 🤪 五、this 问题

## 1、描述下 this（谈谈对 this 对象的理解）

- `this` ，函数执行的上下文，总是指向函数的**直接调用者**（而非间接调用者），可以通过 `apply` ， `call` ， `bind` 改变 `this` 的指向。
- 如果有 `new` 关键字，`this` 指向 `new` 出来的那个对象。
- 在事件中，`this` 指向触发这个事件的对象，特殊的是，`IE` 中的 `attachEvent` 中的 `this` 总是指向全局对象 `window` 。
- 对于**匿名函数**或者**直接调用的函数**来说，`this` 指向**全局上下文**（浏览器为 `window` ，`NodeJS` 为 `global`），剩下的函数调用，那就是谁调用它， `this` 就指向谁。
- 对于 `es6` 的箭头函数，箭头函数的指向取决于**该箭头函数声明的位置**，在哪里声明， `this` 就指向哪里。

## 2、this 绑定的四大规则

this 绑定四大规则遵循以下顺序：

**New 绑定 > 显示绑定 > 隐式绑定 > 默认绑定**

下面一一介绍四大规则。

### （1）New 绑定

- **New 绑定**： `new` 调用函数会创建一个全新的对象，并将这个对象绑定到函数调用的 `this` 。`New` 绑定时，如果是 `new` 一个硬绑定函数，那么会用 `new` 新建的对象替换这个硬绑定 `this` 。**具体实现代码如下：**

```js
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); //2
```

### （2）显式绑定

- **显示绑定**：通过在函数上运行 `call` 和 `apply` ，来显示绑定的 `this` 。**具体实现代码如下：**

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
foo.call(obj); //2
```

- 显示绑定之**硬绑定**

```js
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}
function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments);
  };
}
var obj = {
  a: 2,
};
var bar = bind(foo, obj);
```

### （3）隐式绑定

- **隐式绑定**：调用位置是否有**上下文对象**，或者是否被某个对象拥有或者包含，那么隐式绑定规则会把函数调用中的 `this` 绑定到这个上下文对象。而且，对象属性链只有上一层或者说最后一层在**调用位置**中起作用。**具体实现代码如下：**

```js
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo,
};
obj.foo(); // 2
```

### （4）默认绑定

- **默认绑定**：没有其他修饰（ `bind` 、 `apply` 、 `call` ），在<u>非严格模式下</u>定义指向**全局对象**，在<u>严格模式下</u>定义指向 `undefined` 。**具体实现代码如下：**

```js
function foo() {
  console.log(this.a);
}
var a = 2;
foo(); //undefined
```

## 3、如果一个构造函数，bind 了一个对象，用这个构造函数创建出的实例会继承这个对象的属性吗？为什么？

> 不会继承，因为根据 `this` 绑定四大规则，`new` 绑定的优先级高于 `bind` 显示绑定，通过 `new` 进行构造函数调用时，会创建一个新对象，这个新对象会代替 `bind` 的对象绑定，作为此函数的 `this`，并且在此函数没有返回对象的情况下，返回这个新建的对象。

## 4、箭头函数和普通函数有啥区别？箭头函数能当构造函数吗？

### （1）箭头函数和普通函数定义

**普通函数**通过 `function` 关键字定义， `this` 无法结合**词法作用域**使用，在运行时绑定，只取决于函数的调用方式，在哪里被调用，调用位置。（取决于调用者，和是否独立运行）。

箭头函数使用被称为**胖箭头**的操作 `=>` 来定义，箭头函数不应用普通函数 `this` 绑定的四种规则，而是根据外层（函数或全局）的作用域来决定 `this` ，且**箭头函数的绑定无法被修改**（ `new` 也不行）。

### （2）箭头函数和普通函数的区别

- 箭头函数常用于**回调函数**中，包括**事件处理器**或**定时器**。
- 箭头函数和 `var self = this` ，都试图取代传统的 `this` 运行机制，将 `this` 的绑定拉回到**词法作用域**。
- 没有原型、没有 `this` 、没有 `super`，没有 `arguments` ，没有 `new.target` 。
- 不能通过 `new` 关键字调用。
  - 一个函数内部有两个方法：`[[Call]]` 和 `[[Construct]]`，在通过 `new` 进行函数调用时，会执行 `[[construct]]` 方法，创建一个实例对象，然后再执行这个函数体，将函数的 `this` 绑定在这个实例对象上。
  - 当直接调用时，执行 `[[Call]]` 方法，直接执行**函数体**。
  - 箭头函数没有 `[[Construct]]` 方法，**不能被用作构造函数调用**，当使用 `new` 进行函数调用时会报错。

```js
function foo() {
  return (a) => {
    console.log(this.a);
  };
}

let obj1 = {
  a: 2,
};

let obj2 = {
  a: 3,
};

let bar1 = foo.call(obj1);
let bar2 = bar1.call(obj2);

console.log(bar1); // object
console.log(bar2); // 2 undefind
```

## 5、了解 this 嘛，apply，call，bind 具体指什么？

### （1）三者的区别

- `apply` 、`call` 、`bind` 三者都是函数的方法，都可以改变函数的 `this` 指向。
- `apply` 和 `call` 都是改变函数 `this` 指向，并在**传入参数**后立即调用执行该函数。
- `bind` 是在改变函数 `this` 指向后，并传入参数后返回一个新的函数，不会立即调用执行。

### （2）传参方式

`apply` 传入的参数是**数组**形式的，`call` 传入的参数是**按顺序的逐个传入并以逗号隔开**， `bind` 传入的参数既可以是**数组**形式，也可以是**按顺序逐个传入**。**具体方式见下方：**

```js
apply:
Array.prototype.apply(this, [args1, args2])
ES6 之前用来展开数组调用,  foo.apply(null, []) ， ES6 之后使用 ... 操作符；

call:
Array.prototype.call(this, args1, args2)。

bind:
Array.prototype.bind(this, args1, args2)；
Array.prototype.bind(this, [args1, args2])。
```

### （3）手写 apply、call、bind

**apply：**

```js
// 实现apply函数，在函数原型上封装myApply函数 , 实现和原生apply函数一样的效果

Function.prototype.myApply = function (context) {
  // 存储要转移的目标对象
  _this = context ? Object(context) : window;

  // 在转移this的对象上设定一个独一无二的属性，并将函数赋值给它
  let key = Symbol('key');
  _this[key] = this;

  // 将数组里存储的参数拆分开，作为参数调用函数
  let res = arguments[1] ? _this[key](...arguments[1]) : _this[key]();

  // 删除
  delete _this[key];

  // 返回函数返回值
  return res;
};

// 测试代码
let obj = {
  name: '张三',
};

function showName(first, second, third) {
  console.log(first, second, third);
  console.log(this.name);
}

showName.myApply(obj, [7, 8, 9]);
```

**call：**

```js
// 实现call函数，在函数原型上封装myCall函数 , 实现和原生call函数一样的效果

Function.prototype.myCall = function (context) {
  // 存储要转移的目标对象
  let _this = context ? Object(context) : window;

  // 在转移this的对象上设定一个独一无二的属性，并将函数赋值给它
  let key = Symbol('key');
  _this[key] = this;

  // 创建空数组，存储多个传入参数
  let args = [];

  // 将所有传入的参数添加到新数组中
  for (let i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  // 将新数组拆开作为多个参数传入，并调用函数
  let res = _this[key](...args);

  // 删除
  delete _this[key];

  // 返回函数返回值
  return res;
};

let obj = {
  name: '张三',
};

function showName(first, second, third) {
  console.log(first, second, third);
  console.log(this.name);
}

showName.myCall(obj, 7, 8, 9);
```

**bind：**

```js
// 实现Bind函数，在函数原型上封装myBind函数 , 实现和原生bind函数一样的效果

Function.prototype.myBind = function (context) {
  // 存储要转移的目标对象
  let _this = context ? Object(context) : window;

  // 在转移this的对象上设定一个独一无二的属性，并将函数赋值给它
  let key = Symbol('key');
  _this[key] = this;

  // 创建函数闭包
  return function () {
    // 将所有参数先拆分开，再添加到新数组中，以此来支持多参数传入以及数组参数传入的需求
    let args = [].concat(...arguments);

    // 调用函数
    let res = _this[key](...args);

    // 删除
    delete _this[key];

    // 返回函数返回值
    return res;
  };
};

// 测试代码
let obj = {
  name: '张三',
};

function showName(first, second, third) {
  console.log(first, second, third);
  console.log(this.name);
}

showName.myBind(obj)([7, 8, 9]);
```

# 😋 六、Ajax 问题

## 1、Ajax 原理

- `Ajax` 的原理简单来说是在**用户**和**服务器**之间加了一个**中间层**（AJAX 引擎），通过 `XMLHTTPRequest` 对象来向服务器发起异步请求，从服务器获得数据，然后用 `javascript` 来操作 `DOM` 而更新页面。
- 使用户操作与服务器响应异步化。这其中最关键的一步就是**从服务器获得请求数据**。
- `Ajax` 的过程只涉及 `Javascript` 、`XMLHttpRequest` 和 `DOM` ，其中 `XMLHttpRequest` 是 `ajax` 的核心机制。

## 2、Ajax 解决浏览器缓存问题

- 在 `ajax` 发送请求前加上 `anyAjaxObj.setRequestHeader("If-Modified-Since","0")` 。
- 在 `ajax` 发送请求前加上 `anyAjaxObj.setRequestHeader("Cache-Control","no-cache")` 。
- 在 `URL` 后面加上一个随机数： `"fresh=" + Math.random()` 。
- 在 `URL` 后面加上时间搓：`"nowtime=" + new Date().getTime()` 。

## 3、js 单线程

- **单线程**：只有一个线程，只能做一件事情。

- **原因**：避免 `DOM` 渲染的冲突。

  - 浏览器需要渲染 `DOM` ；
  - `JS` 可以修改 `DOM` 结构；
  - `JS` 执行的时候，浏览器 `DOM` 渲染会暂停；
  - 两段 `JS` 也不能同时执行（都修改 `DOM` 就冲突了）；
  - `Webworker` 支持多线程，但是不能访问 `DOM`。

- **解决方案**：异步。

## 4、异步编程的实现方式

### （1）回调函数

- 优点：简单、容易理解
- 缺点：不利于维护，代码耦合高

### （2）事件监听（采用时间驱动模式，取决于某个事件是否发生）

- 优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函数
- 缺点：**事件驱动型**，流程不够清晰

### （3）发布/订阅(观察者模式)

- 类似于事件监听，但是可以通过“**消息中心**”，了解现在有多少发布者，多少订阅者

### （4）Promise 对象

- 优点：可以利用 `then` 方法，进行**链式写法**；可以书写错误时的**回调函数**；
- 缺点：编写和理解，相对比较难

### （5）Generator 函数

- 优点：函数体内外的**数据交换**、**错误处理机制**
- 缺点：**流程管理**不方便

### （6）async 函数

- 优点：内置执行器、更好的语义、更广的适用性、返回的是 `Promise` 、结构清晰。
- 缺点：错误处理机制

## 5、js 脚本加载问题，async、defer 问题

- 如果依赖其他脚本和 `DOM` 结果，使用 `defer`。
- 如果与 `DOM` 和其他脚本依赖不强时，使用 `async`。
- 总结：依赖性强用 `defer` ，依赖性不强用 `async` 。

## 6、关于 window.onload 和 DOMContentLoaded

```js
window.addEventListener('load', function () {
  //页面的全部资源加载完才会执行，包括图片、视频等
});

document.addEventListener('DOMContentLoaded', function () {
  //DOM 渲染完即可执行，此时图片、视频还可能没加载完 -> 尽量选择此方法
});
```

> - 关于 DOM 和 BOM 操作的补充 👇
>
> - 原文：[提升对前端的认知，不得不了解 Web API 的 DOM 和 BOM](https://juejin.cn/post/6971567246174846989)
> - 链接：https://juejin.cn/post/6971567246174846989

## 7、ajax、axios、fetch 区别

### （1）ajax

- 本身是针对 `MVC` 的编程,不符合现在前端 `MVVM` 的浪潮。
- 基于原生的 `XHR` 开发， `XHR` 本身的架构不清晰，已经有了 `fetch` 的替代方案。
- `JQuery` 整个项目太大，单纯使用 `ajax` 却要引入整个 `JQuery` 非常的不合理（采取个性化打包的方案又不能享受 `CDN` 服务）。

### （2）axios

- 从浏览器中创建 `XMLHttpRequest`。
- 从 `node.js` 发出 `http` 请求。
- 支持 `Promise API` 。
- 拦截请求和响应。
- 转换请求和响应数据。
- 取消请求。
- 自动转换 `JSON` 数据。
- 客户端支持防止 `CSRF/XSRF`。

### （3）fetch

- `fetch` 返回的 `promise` 不会被标记为 `reject` ，即使该 `http` 响应的状态码是 `404` 或 `500` 。仅当网络故障或请求被阻止时，才会标记为 `reject` 。
- 只对网络请求报错，对 `400` ， `500` 都当做成功的请求，需要封装去处理。
- 这里对于 `cookie` 的处理比较特殊，不同浏览器对 `credentials` 的默认值不一样，也就使得默认情况下 `cookie` 变的不可控。
- 本身无自带 `abort` ，无法超时控制，可以使用 `AbortController` 解决取消请求问题。
- 没有办法原生监测请求的进度，而 `XHR` 可以。

## 8、手写题：手写 Ajax 函数

```js
/*
	1. get()方法
	   参数：url（请求的地址）、data（携带数据）、callback（成功回调函数）、dataType（返回数据类型）
	2. post()方法
	   参数：url（请求的地址）、data（携带数据）、callback（成功回调函数）、dataType（返回数据类型）
	3. ajax()方法
	   参数：obj（对象中包含了各种参数），其中有url、data、dataType、async、type
*/

let $ = {
  createXHR: function () {
    if (window.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else {
      return new ActiveXObject();
    }
  },
  get: function (url, data, callback, dataType) {
    let dataType = dataType.toLowerCase();
    if (data) {
      url += '?';
      Object.keys(data).forEach((key) => (url += `${key}=${data[key]}&`));
      url = url.slice(0, -1);
    }
    let xhr = this.createXHR();

    xhr.open('get', url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          let res =
            dataType === 'json'
              ? JSON.parse(xhr.responseText)
              : xhr.responseText;
          callback(res, xhr.status, xhr);
        }
      }
    };
  },
  post: function (url, data, callback, dataType) {
    let dataType = dataType.toLowerCase();

    let xhr = this.createXHR();

    let str = '';
    if (data) {
      Object.keys(data).forEach((key) => (str += `${key}=${data[key]}&`));
      str = str.slice(0, -1);
    }
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(str);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          let res =
            dataType === 'json'
              ? JSON.parse(xhr.responseText)
              : xhr.responseText;
          callback(res, xhr.status, xhr);
        }
      }
    };
  },
  ajax: function (params) {
    // 初始化参数
    let type = params.type ? params.type.toLowerCase() : 'get';
    let isAsync = params.isAsync ? params.isAsync : 'true';
    let url = params.url;
    let data = params.data ? params.data : {};
    let dataType = params.dataType.toLowerCase();

    let xhr = this.createXHR();

    let str = '';

    // 拼接字符串
    Object.keys(data).forEach((key) => (str += `${key}=${data[key]}&`));
    str = str.slice(0, -1);

    if (type === 'get') url += `?${str}`;

    return new Promise((resolve, reject) => {
      // 创建请求
      xhr.open(type, url, isAsync);

      if (type === 'post') {
        xhr.setRequestHeader(
          'Content-Type',
          'application/x-www-form-rulencoded'
        );
        xhr.send(str);
      } else {
        xhr.send();
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            let res =
              dataType === 'json'
                ? JSON.parse(xhr.responseText)
                : xhr.responseText;
            resolve(res); // 请求成功，返回数据
          } else {
            reject(xhr.status); // 请求失败，返回状态码
          }
        }
      };
    });
  },
};
```

## 9、手写题：手写 Promise 原理

```js
class MyPromise {
  constructor(fn) {
    this.resolvedCallbacks = [];
    this.rejectCallbacks = [];

    // pending 即在等待状态
    this.state = 'PENDING';
    this.value = '';

    fn(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    if (this.state === 'PENDING') {
      this.state = 'RESOLVED';
      this.value = value;

      this.resolvedCallbacks.map((cb) => cb(value));
    }
  }

  reject(value) {
    if (this.state === 'PENDING') {
      this.state = 'REJECTED';
      this.value = value;

      this.rejectCallbacks.map((cb) => cb(value));
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === 'PENDING') {
      this.resolvedCallbacks.map((cb) => cb(onFulfilled));
      this.rejectCallbacks.map((cb) => cb(onRejected));
    }

    if (this.state === 'RESOLVED') {
      onFulfilled(this.value);
    }

    if (this.state === 'REJECTED') {
      onRejected(this.value);
    }
  }
}
```

## 10、手写题：基于 Promise 手写 Promise.all

```js
/**
 * promise的三种状态：
 * 1.pending：等待状态，比如正在网络请求，或定时器没有到时间；
 * 2.fulfill：满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调then函数
 * 3.reject：拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调catch函数
 */
/*----------------------------------------------------------------- */
// 函数.then()
// 函数then是Promise中的一个方法，它会在Promise处于fulfill状态时调用触发
// resolve和reject是默认传入的函数参数
new Promise((resolve, reject) => {
  setTimeout(() => {
    // 在Promise中调用resolve函数，会使Promise变为fulfill状态
    // resolve函数可以传入一个参数，作为then函数的默认传入参数
    resolve('成功');
  }, 1000);
}).then((data) => {
  console.log(data); //结果输出成功
});

/*----------------------------------------------------------------- */
// 函数 .catch()
// 函数catch是Promise的一个方法。它会在Promise处于reject状态时调用触发
new Promise((resolve, reject) => {
  setTimeout(() => {
    // 在Promise调用reject函数，会使Promise变为reject状态
    // reject函数可以传入一个参数，作为catch函数的默认传入参数
    reject('失败');
  }, 1000);
}).catch((err) => {
  console.log(err); //结果输出：失败
});

/*----------------------------------------------------------------- */
// 函数.finally()
// 函数finally是Promise中的一个方法，它会在Promise的最后触发，无论Promise处于什么状态
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功啦！');
  }, 1000);
})
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log('Promise结束');
  });

/* 
    结果输出：成功啦！
            Promise结束
*/

/*----------------------------------------------------------------- */
// 函数all()
// 函数all是Promise中的一个方法，它用于将多个promise实例，包装成一个新的promise实例
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('我是第一个异步请求的数据');
    });
  }, 1000),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('我是第二个异步请求的数据');
    }, 1000);
  }),
]).then((results) => {
  console.log(results); // ['我是第一个异步请求的数据', '我是第二个异步请求的数据']
});

/*----------------------------------------------------------------- */
// 实际应用
let string1 = 'I am';
new Promise((resolve, reject) => {
  setTimeout(() => {
    let string2 = string1 + 'Monday';
    resolve(string2);
  }, 1000);
})
  .then((data) => {
    return new Promise((resolve, reject) => {
      let string3 = data + 'in CSDN';
      resolve(string3);
    });
  })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log('Promise结束');
  });

/*
    输出结果：
    I am Monday in CSDN！
    Promise结束
*/
```

> **详解文章补充（Promise）👇**
>
> - 原文：[保姆级一步步带你实现 promise 的核心功能](https://blog.csdn.net/weixin_44803753/article/details/119392804)
> - 链接：https://blog.csdn.net/weixin_44803753/article/details/119392804

# 🥰 七、手写题补充

## 1、性能优化相关

### （1）手写节流函数

**节流**：每隔一段时间执行一次，通常用在高频率触发的地方，降低频率。—— 如：鼠标滑动、拖拽

通俗来讲，节流是从频繁触发执行变为每隔一段时间才执行一次。

```js
//封装节流函数，实现节流
function throttle(func, delay = 500) {
  let timer = null;
  let status = false;

  return function (...args) {
    if (status) return;

    status = true;

    timer = setTimeout(() => {
      func.apply(this, args);
      status = false;
    }, delay);
  };
}
```

### （2）手写防抖函数

**防抖**：一段时间内连续触发，不执行，直到超出限定时间执行最后一次。—— 如： `input` 、 `scroll` 滚动

通俗来讲，防抖是从频繁触发执行变为最后一次才执行。

```js
//封装防抖函数，实现防抖
function denounce(func, delay = 500) {
  let timer = null;
  return function (...args) {
    // 如果有值，清除定时器，之后继续执行
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

> - **详解文章补充（防抖节流）👇**
>
> - 原文：[关于前端性能优化问题，认识网页加载过程和防抖节流](https://juejin.cn/post/6973062729925918756)
> - 链接：https://juejin.cn/post/6973062729925918756

### （3）图片懒加载

**定义：**

懒加载突出一个“懒”字，懒就是拖延迟的意思，所以“懒加载”说白了就是**延迟加载**，比如我们加载一个页面，这个页面很长很长，长到我们的浏览器可视区域装不下，那么懒加载就是优先加载可视区域的内容，其他部分等进入了可视区域在加载。

**代码实现：**

```js
let img = document.getElementsByTagName('img'); // 获取img标签相关的
let num = img.length; // 记录有多少张图片
let count = 0; // 计数器，从第一张图片开始计数

lazyload(); // 首次加载别忘了加载图片

function lazyload() {
  let viewHeight = document.documentElement.clientHeight; // clientHeight 获取屏幕可视区域的高度
  let scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop; // 滚动条卷去的高度
  for (let i = 0; i < num; i++) {
    // 元素现在已经出现在视觉区域中
    if (img[i].offsetTop < scrollHeight + viewHeight) {
      // 当src不存在时，跳出本轮循环，继续下一轮
      if (img[i].getAttribute('src') !== 'default.jpg') {
        continue;
      } else {
        // 当src属性存在时，获取src的值，并将其赋值给img
        img[i].src = img[i].getAttribute('data-src');
        count++;
      }
    }
  }
}
```

> - **详细文章补充 👇**
> - 原文：[原生 js 实现图片懒加载（lazyLoad）](https://zhuanlan.zhihu.com/p/55311726)
> - 链接：https://zhuanlan.zhihu.com/p/55311726

## 2、原生 API 手写

### （1）forEach

**用法：**

`forEach()` 方法对数组的每个元素执行一次给定的函数。原生 `API` 具体解析如下：

```js
arr.forEach(function (currentValue, currentIndex, arr) {}, thisArg);

//currentValue  必需。当前元素
//currentIndex  可选。当前元素的索引
//arr           可选。当前元素所属的数组对象。
//thisArg       可选参数。当执行回调函数时，用作 this 的值。
```

**代码实现：**

```js
Array.prototype.myForEach = function (fn, thisArg) {
  if (typeof fn !== 'function') {
    throw new Error('参数必须为函数');
  }
  if (!Array.isArray(this)) {
    throw new Error('只能对数组使用forEach方法');
  }
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    fn.call(thisArg, arr[i], i, arr);
  }
};

// 测试
let arr = [1, 2, 3, 4, 5];
arr.myForEach((item, index) => {
  console.log(item, index);
});

// 测试 thisArg
function Counter() {
  this.sum = 0;
  this.count = 0;
}

// 因为 thisArg 参数（this）传给了forEach()，每次调用时，它都被传给 callback 函数，作为它的 this 值
Counter.prototype.add = function (array) {
  array.myForEach(function (entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};

const obj = new Counter();
obj.add([2, 5, 9]);

console.log(obj.count); // 3 === (1 + 1 + 1)
console.log(obj.sum); // 16 === (2 + 5 + 9)
```

### （2）map

**用法：**

`map` 函数会依次处理数组中的每一个元素，并返回一个新的数组，且对原来的数组不会产生影响。

```js
array.map(function (currentValue, index, arr) {});
```

**代码实现：**

```js
Array.prototype.myMap = function (arr, mapCallback) {
  // 检查参数是否正确
  if (
    !Array.isArray(arr) ||
    !Array.length ||
    typeof mapCallback !== 'function'
  ) {
    return [];
  } else {
    let result = [];
    for (let i = 0; (len = arr.length); i++) {
      result.push(mapCallback(arr[i], i, arr));
    }
    return result;
  }
};

// 测试
let arr = [1, 2, 3, 4, 5];
arr.map((item, index) => {
  console.log(item * 2);
}); // 2, 4, 6, 8, 10
```

### （3）filter

**用法：**

`filter()` 方法返回**执行结果为 true 的项组成的数组**。

```js
arr.filter(function (item, index, arr) {}, context);
```

**代码实现：**

```js
Array.prototype.myFilter = function (fn, context) {
  if (typeof fn !== 'function') {
    throw new Error(`${fn} is not a function`);
  }

  let arr = this;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(context, arr[i], i, arr);
    // 判断条件是否为真
    if (result) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

// 测试
let arr = [1, 2, 3, 4, 5, 'A', 'B', 'C'];
console.log(arr.myFilter((item) => typeof item === 'string')); // [ 'A', 'B', 'C' ]
```

### （4）reduce

**用法：**

- 参数： 一个回调函数，一个初始化参数 (非必须)
- 回调函数参数有 4 个值( `res` : 代表累加值， `cur` : 目前值， `index` : 第几个， `arr` ：调用 `reduce` 的数组)
- 整体返回 `res` 累加值

```js
arr.reduce((res, cur, index, arr) => res + cur, 0);
```

**代码实现：**

```js
/**
 *
 * @param {fn} callback res→代表累加值，cur→目前值，index→第几个，arr→调用reduce的数组
 * @param {*} initialValue 初始化参数(可选)
 */

Array.prototype.myReduce = function (cb, initValue) {
  if (!Array.isArray(this)) {
    throw new TypeError('not a array');
  }
  // 数组为空，并且有初始值，报错
  if (this.length === 0 && arguments.length < 2) {
    throw new TypeError('Reduce of empty array with no initial value');
  }
  let arr = this;
  let res = null;
  // 判断有没有初始值
  if (arguments.length > 1) {
    res = initValue;
  } else {
    res = arr.splice(0, 1)[0]; //没有就取第一个值
  }
  arr.forEach((item, index) => {
    res = cb(res, item, index, arr); // cb 每次执行完都会返回一个新的 res值，覆盖之前的 res
  });
  return res;
};

// 测试结果
let arr = [1, 2, 3, 4];
let result = arr.myReduce((res, cur) => {
  return res + cur;
});
console.log(result); // 10
```

## 3、其余手写题

### （1）JSONP 的实现

`JSONP` 的原理：`JSONP` 的出现使得 `script` 标签不受**同源策略**约束，用来进行跨域请求，优点是**兼容性好**，缺点就是**只能用于 `GET` 请求**。

```js
const jsonp = ({ url, params, callbackName }) => {
  const generateUrl = () => {
    let dataSrc = '';
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  };
  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = generateUrl();
    document.body.appendChild(scriptElement);
    window[callbackName] = (data) => {
      resolve(data);
      document.removeChild(scriptElement);
    };
  });
};
```

### （2）Object.create

**用法：**

`Object.creat(object[,propertiesObject])` ，用于创建一个新对象，且这个新对象继承 `object` 的属性。第二个参数 `propertyObject` 也是对象，是一个可选参数，它旨在为新创建的对象指定**属性对象**。该属性对象可能包含以下值：

| 属性         | 说明                                                                         |
| ------------ | ---------------------------------------------------------------------------- |
| configurable | 表示新创建的对象是否是可配置的，即对象的属性是否可以被删除或修改，默认 false |
| enumerable   | 对象属性是否可枚举的，即是否可以枚举，默认 false                             |
| writable     | 对象是否可写，是否或以为对象添加新属性，默认 false                           |
| get          | 对象 getter 函数，默认 undefined                                             |
| set          | 对象 setter 函数，默认 undefined                                             |

**代码实现：**

```js
/**
 *
 * @param {*} proto 新创建对象的原型对象
 * @param {*} propertyObject 要定义其可枚举属性或修改的属性描述符的对象
 * @returns
 */
Object.create2 = function (proto, propertyObject = undefined) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null.');
  }
  // 创建一个空的构造函数 F
  function F() {}
  // F 原型指向 proto
  F.prototype = proto;
  // 创建 F 的实例
  const obj = new F();
  // propertiesObject有值则调用 Object.defineProperties
  if (propertyObject != undefined) {
    Object.defineProperties(obj, propertyObject);
  }
  if (proto === null) {
    // 创建一个没有原型对象的对象，Object.create(null)
    obj.__proto__ = null;
  }
  // 返回 这个 obj
  return obj;
};

const person = {
  name: 'monday',
  printIntroduction: function () {
    console.log(`My name is ${this.name}, and my age is ${this.age}`);
  },
};

const me = Object.create2(person);

me.name = 'Tuesday';
me.age = 18;

me.printIntroduction();
```

### （3）Object.assign

**用法：**

`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

**代码实现：**

```js
Object.assign2 = function (target, ...source) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  let res = Object(target);
  source.forEach(function (obj) {
    if (obj != null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = obj[key];
        }
      }
    }
  });
  return res;
};

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign2(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }

console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
```

### （4）手写发布订阅

**代码实现：**

```js
class Subject {
  constructor(name) {
    this.name = name; // 被观察者的名字
    this.message = '今天是晴天'; // 存放一个值
    this.observers = []; // 存放所有观察者
  }

  on(observer) {
    this.observers.push(observer);
  }

  triggle(data) {
    this.message = data;
    this.observers.forEach((item) => item.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update(newDate) {
    console.log(`我是观察者${this.name}: ${newDate}`);
  }
}

// 测试代码
let subject = new Subject('message');

let o1 = new Observer('小红');
let o2 = new Observer('小明');

subject.on(o1); // 我是观察者小红: 明天会下雨
subject.on(o2); // 我是观察者小明: 明天会下雨

subject.triggle('明天会下雨');
```

# 😉 八、结束语

以上收录周一整个秋招备试过程中 `JavaScript` 的所有面试题，上面的面试题可能还不够全，如有想要补充的内容也欢迎联系 `vx:MondayLaboratory` ，希望能够让文章内容更加尽善尽美，造福更多备试的小伙伴~

最后，预祝各位看到这篇文章的小伙伴们，都能够斩获到自己心仪的 `offer` ~

# 🐣 彩蛋 One More Thing

## （：pdf 内容获取

👉 微信关注公众号 `星期一研究室` ，回复关键字 `js面试pdf` 即可获取相关 `pdf` 内容~

👉 回复 `面试大全pdf` 可获取全专栏内容！

## （：更新地址

👉 [offer 来了面试专栏](https://juejin.cn/column/7007991853089849351)

## （：番外篇

- 如果您觉得这篇文章有帮助到您的的话不妨点赞支持一下哟~~😉
- 以上就是本文的全部内容！我们下期见！👋👋👋
