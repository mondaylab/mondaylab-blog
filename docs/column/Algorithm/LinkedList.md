---
title: 详解链表在前端的应用，顺便再弄懂原型和原型链！
author: 周一
date: '2021-12-12'
---

# 前言

`链表` 在前端中的应用常用于原型和原型链当中。在接下来的这篇文章中，将讲解关于 `链表` 在前端中的应用。

# 一、链表 VS 数组

- 数组：增删非首尾元素时往往**需要移动元素**；
- 链表：增删非首尾元素，**不需要移动元素**，只需要更改 `next` 的指向即可。

# 二、JS 中的链表

- Javascript 中没有链表；
- 可以用 Object 模拟链表。

# 三、前端与链表：JS 中的原型链

## 1、原型是什么？

- 在 `Javascript` 中，每个对象都会在其内部初始化一个属性，这个属性就是**原型对象**（简称原型）。

## 2、原型链是什么？

- 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去 `prototype` 里找这个属性，这个 `prototype` 又会有自己的 `prototype` ，于是就这样一直找下去，这样逐级查找形似一个链条，且通过 `[[prototype]]` 属性连接，这个连接的过程被称为**原型链**。
- 原型链的本质是**链表**，且原型链上的节点是**各种原型对象**，如： `Function.prototype` 、 `Object.prototype` ……。
- 原型链通过 `__proto__` 属性连接各种原型对象。

## 3、原型链长啥样？

### （1）arr → Array.prototype → Object.prototype → null

- arr.** proto ** = Array.prototype；
- Array.** proto **= Object.prototype；
- Object.** proto **= null。

**先用代码来演示这段关系：**

```js
let arr = [];
console.log(arr.__proto__ === Array.prototype); //  true
console.log(arr.__proto__.__proto__ === Object.prototype); //  true
console.log(arr.__proto__.__proto__.__proto__); //null
```

**解释说明：**

假设我们定义了一个对象，名字叫 `arr` ，那么 `arr.__proto__` 表示的是 arr 这个对象的原型，在这个例子中 `let arr = []` 间接调用了 `new Array` ，所以我们通过 `Array.prototype` 来表示 `Array` 这个构造函数的原型对象，通过对 `arr.__proto__` 和 `Array.prototype` 进行比较，发现两者相等，所以说， `arr` 的原型属性就是构造函数 `Array` 的原型对象。

与上述类似的，我们发现 `arr.__proto__` 和 `Array.prototype` 相等，那么继续往源头查找下去， `Array` 又有它自己的原型属性，那么这个时候 `Array` 的原型属性 `arr.__proto__.__proto__` 又会等于什么呢？

其实，在 `js` 当中， `Object` 是所有对象的父对象，也就是说绝大多数的对象都有一个共同的原型 `Object.prototype` 。所以，这个时候 `Array` 的原型属性 `arr.__proto__.__proto__` 就等于 `Object.prototype` ，到此为止，找到最原始的**父**对象 `Object` 的原型之后，基本就快结束了。我们最后再检验 `Object` 的原型属性 `arr.__proto__.__proto__.__proto__` ，发现是 `null` 空值，也就意味着原型链已经走到了最源头的位置。

**总结：**

- `Object` 是所有对象的**父对象**。
- 从上面例子中可以看到，所有原型对象都会**先指向**自己的 `__proto__` 属性，**之后再指向**自己的原型，**最后指向**父对象 `Object` 的原型。

下面再给出两个例子，大家可以依据（1）的方法进行检验。

### （2）obj → Object.prototype → null

- obj.** proto ** = Object.prototype；
- Object.** proto **= null。

**用代码来演示这段关系：**

```js
let obj = {};
console.log(obj.__proto__ === Object.prototype); //  true
console.log(obj.__proto__.__proto__); //null
```

### （3）func → Function.prototype → Object.prototype → null

- func.** proto ** = Function.prototype；
- Function.** proto **= Object.prototype；
- Object.** proto **= null。

**用代码来演示这段关系：**

```js
let func = function () {};
console.log(func.__proto__ === Function.prototype); //  true
console.log(func.__proto__.__proto__ === Object.prototype); //  true
console.log(func.__proto__.__proto__.__proto__); //null
```

### （4）class 中的原型

**1）先来看第一段代码。**

```js
//父类
class People {
  constructor() {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
}

//子类
class Student extends People {
  constructor(name, number) {
    super(name);
    this.number = number;
  }
  sayHi() {
    console.log(`姓名：${this.name}，学号：${this.number}`);
  }
}

console.log(typeof Student); //function
console.log(typeof People); //function

let xialuo = new Student('夏洛', 10010);
console.log(xialuo.__proto__);
console.log(Student.prototype);
console.log(xialuo.__proto__ === Student.prototype); //true
```

从上面代码中可以看到， `typeof Student` 和 `typeof People` 的值是 `function` ，所以 `class` 实际上是函数，也就是语法糖。

再看下面三个 `console.log` 打印的值，我们来梳理一个原型间的关系。首先 `Student` 是一个 `class` ，那么每个 `class` 都有它的**显式原型** `prototype` ，而 `xialuo` 是一个实例，每个实例都有它的**隐式原型** `__proto__` 。它们两者之间的关系就是，实例 `xialuo` 的 `__proto__` 指向对应的 `class` （即 `Student` ）的 `prototype` 。

**因此，对于 class 中的原型，可以得出以下结论：**

- 每个 `class` 都有显式原型 `prototype` ；
- 每个实例都有隐式原型 `__proto__` ;
- 实例的 `__proto__` 指向对应 `class` 的 `prototype` 。

**2）再来看第二段代码。**

```js
//父类
class People {
  constructor() {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} eat something`);
  }
}

//子类
class Student extends People {
  constructor(name, number) {
    super(name);
    this.number = number;
  }
  sayHi() {
    console.log(`姓名：${this.name}，学号：${this.number}`);
  }
}

let xialuo = new Student('夏洛', 10010);
console.log(xialuo.name); //夏洛
console.log(xialuo.number); //10010
console.log(Student.sayHi()); //姓名：夏洛，学号：10010
```

从上面代码中可以得出， `Student` 类本身有 `number` 这个属性，所以它会直接读取自身 `number` 的值。同时，它是没有 `name` 这个属性的，但是由于它继承自父类 `People` ，所以当它找不到 `name` 则个属性时，它会自动的往 `__proto__` 中查找，于是就往它的父类 `People` 进行查找。

**所以，从上面的演示中可以得出基于原型的执行规则：**

- 先获取属性（比如 `xialuo.name` 和 `xiaoluo.number` ） 或者获取执行方法 （比如 `xialuo.sayhi()` ）；
- 获取后，先在自身属性和方法上寻找；
- 如果找不到则自动去 `__proto__` 中查找。

### （5）new Object() 和 Object.create() 区别

- `{}` 等同于 `new Object()` ，原型为 `Object.prototype` ；
- `Object.create(null)` 没有原型；
- `Object.create({...})` 可指定原型。

## 4、原型链知识点

（**1**）如果 `A` 沿着原型链能找到 `B.prototype` ，那么 `A instanceof B` 为 `true` 。

**举例 1：**

```js
let obj = {};
console.log(obj instanceof Object); //true
```

对于 `obj instanceof Object` 进行左右运算， `obj instanceof Object` 的意思是查询 `obj` 的原型链上是否有 `Object` 的原型对象，即 `obj` 是否是 `Object` 的实例。

**举例 2：**

```js
let func = function () {};
console.log(func instanceof Function); //true
console.log(func instanceof Object); //true
```

对于 `func` 来说， `func` 既是 `Function` 的实例，也是 `Object` 的实例。

（**2**）如果 `A` 对象上没有找到 `x` 属性，那么会沿着原型链找 `x` 属性。

**举例：**

```js
const obj = {};

Object.prototype.x = 'x';

console.log(obj.x); //x
```

从上述代码中可以看到，`obj` 在自己的区域内没有找到 x 的值，则会继续往它的原型链找，最终找到 `Object.prototype.x` ，所以 `obj.x = x` 。

接下来我们用两道常见的面试题来回顾这两个知识点。

## 5、常见面试题

### （1）instanceof 原理

**知识点**：如果 `A` 沿着原型链能找到 `B.prototype` ，那么 `A instanceof B` 为 `true` 。

**解法**：遍历 `A` 的原型链，如果找到 `B.prototype` ，返回 `true` ，否则返回 `false` 。

**代码演示：**

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
```

### （2）看代码，得出输出结果。

看下面一段代码，请给出 4 个 `console.log` 打印的值。

```js
let foo = {};
let F = function () {};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a); //value a
console.log(foo.b); //undefind

console.log(F.a); //value a
console.log(F.b); //value b
```

**知识点**：如果在 `A` 对象上没有找到 `x` 属性，那么会沿着原型链找 `x` 属性。

**解法**：明确 `foo` 和 `F` 变量的原型链，沿着原型链找 `A` 属性和 `B` 属性。

**解析**：从上面一段代码中可以看到， `foo` 是一个对象，那么它的 `__proto__` 属性指向 `Object.prototype` ，所以此时 `foo.a` 会往它的原型链上面找具体的值，也就是 `Object.prototype.a` 的值。同理， `foo.b` 会往它的原型链找值，但是找不到 `Object.prototype.b` 的值，所以最终返回 `undefined` 。 `F.a` 和 `F.b` 也是同样的道理，大家可以进行一一验证。

# 四、写在最后

原型和原型链在前端中是再基础不过的知识了！我们平常所写的每一个对象中，基本上都有它的原型和原型链。因此，对于前端来说，如果原型和原型链的关系都不明白的话，不知不觉中很容易写出各种各样的 bug，这对于后续维护和程序来说都是一个巨大的灾难。所以，了解原型和原型链，对于前端来说是一项必备的技能。

链表在前端中的应用就讲到这里啦！如果有不理解或者有误的地方也欢迎私聊我或加我微信指正~

> - 公众号：星期一研究室
> - 微信：MondayLaboratory

创作不易，如果这篇文章对你有用，记得点个 **Star** 哦~
