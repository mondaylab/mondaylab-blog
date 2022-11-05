---
title: 代码缺乏装饰？使用ts装饰器来装饰你的代码
author: 周一
date: '2022-01-17'
categories:
  - 前端开发
tags:
  - TypeScript
sidebar: 'auto'
---

# 👏 序言

在 `ts` 中，有一个经常被我们熟用但是又很少去注意的一个知识点，装饰器。那在下文中，将讲解类的装饰器，一起类装饰器中的几种其他的装饰器。

下面开始本文的讲解~😜

# 😉 一、类的装饰器

## 1、什么是装饰器

首先，我们先来讲， `TypeScript` 中，类的装饰器是什么。

装饰器实际上是一种对类的修饰工具。**比如说：**某一天可能有个女孩子想要出去逛街，那么她可能会画个美美的妆出门。因此，我们可以把**装饰器**视为是**化妆**的这个过程，也就是一个美化的过程。

现在就是，假设我们有一个类，然后呢，**要对它额外进行一些修饰**，这个就是装饰器要干的事情了。

## 2、装饰器的特点

首先我们需要先来了解装饰器的几个特点。**具体如下：**

- 装饰器本身就是一个**函数**；
- 装饰器接收的参数是**构造函数**；
- 装饰器通过 `@` 符号来进行使用。

依据以上这几个特点，下面我们来了解几种类的装饰器。

## 3、几种类的装饰器

### （1）执行顺序

```js
// 第一个装饰器
function testDecorator(constructor: any) {
  console.log('decorator');
}

// 第二个装饰器
function testDecorator1(constructor: any) {
  console.log('decorator1');
}

// 装饰器执行的时候，是从下到上，从右到左的顺序
@testDecorator
@testDecorator1
class Test {}

const test = new Test(); // decorator1 decorator
```

装饰器执行的时候，是**从下到上**，从**右到左**的顺序。

### （2）参数判断

我们如何让**类装饰器**接收一个参数呢？**来看一段代码：**

```js
// 外面再包一层函数
function testDecorator(flag: boolean) {
  // 工厂模式
  if (flag) {
    return function (constructor: any) {
      constructor.prototype.getName = () => {
        console.log('Monday');
      };
    };
  } else {
    return function (constructor: any) {};
  }
}

@testDecorator(true)
class Test {}

const test = new Test();
(test as any).getName(); // Monday
```

通过上面这段代码我们可以了解到，我们通过对类装饰器的外部再包上一层函数，这其实有点像柯里化的形式，之后**通过外部的这个函数进行传参**，也就是上面代码中的 `flag` 。最终类装饰器**返回一个函数作为结果**，顺利地进行传参。

### （3）装饰器标准写法

上面的两个装饰器属于两个比较简单和不太规范的装饰器。下面我们来展现一种比较标准的写法：

```js
function testDecorator() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = 'Tuesday';
      getName() {
        return this.name;
      }
    };
  };
}

const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test = new Test('Monday');
console.log(test.getName()); // Tuesday

```

在上面的代码中， `(...args: any[]) => any` 是一个**函数**，返回值是一个**对象**的类型。这个函数会接收很多参数，函数把这些参数合并到一起，变成一个数组，也就是 `...args` 。那 `<T extends new (...args: any[]) => any>` 是什么意思呢？意思是， `T` 可以通过 `new (...args: any[]) => any` 这种类型的构造函数，给**实例化**出来。所以 `T` 现在可以理解为是一个类或者是 `constructor` 这样的一个构造函数。

最终，我们通过 `testDecorator()()` 这样的方式，让 `test` 实例可以访问到 `getName()` 方法，并打印出 `Tuesday` 。

# 🤐 二、类的其他装饰器

## 1、方法装饰器

这里我想要强调的一个问题是，大家觉得，类装饰器的**执行时刻**是什么样的？类装饰器在**类定义完成之后**就可以立即对**类**进行一个装饰。

那方法装饰器，是什么样的呢？

**方法装饰器**，跟**类装饰器**也是一样的。它会等类创建好了之后，**立即地**把方法去做一个修改。

很多小伙伴可能会误认为，我是不是得**实例化**的时候，才会对**方法**去做一个装饰呢？其实不是这样的，只要在定义完**类**以后，**类**就会帮助我们对**类的方法**去做一个装饰。**先来看一段代码：**

```js
// 普通方法， target 对应的是类的 prototype
// 静态方法， target 对应的是类的 构造函数
function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // console.log(target);
  // descriptor的作用：对方法中的属性做一些编辑
  descriptor.writable = true;
  // 通过调用 .value 的方式，可以对原来的方法做一些变更
  descriptor.value = function () {
    return 'decorator';
  };
}

class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}

const test = new Test('Monday');
test.getName = () => {
  return '123';
};
console.log(test.getName()); // decorator
```

大家先看上面这段代码，可能有的小伙伴会觉得，最终打印的是 `123` 。但其实，因为我们对方法进行了装饰，所以最终打印的结果是 `decorator` 。

因此，一个装饰器对**一个方法**做完装饰之后，就可以多做很多事情了。包括**原型 target，key 值 和 descriptor** ，都可以对方法做很多修改。

## 2、访问器的装饰器

现在，我们来学习类里面中，访问器的装饰器。我们先来看一段代码：

```js
function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // console.log(123);
}

class Test {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  // 这里不能写@visitDecorator，同时写两个会引发报错
  get name() {
    return this._name;
  }
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}

const test = new Test('Monday');
test.name = 'Tuesday';
console.log(test.name); // Tuesday

```

其中， `@visitDecorator` 是一个**访问器装饰器**。我们现在来解释下上面代码中的运行路径。

第一部分， `test.name = 'Tuesday'` 走的是 `set` 方法，把 `Tuesday` 这个值赋值给 `name` 。之后，等到我们运行 `console.log` 的时候，就是去调用 `get` 方法，所以最终打印出来的也就是 `Tuesday` 而不是 `Monday` 。

## 3、属性的装饰器

我们先来看第一种属性的装饰器。**具体代码如下：**

```js
function nameDecorator(target: any, key: string): any {
  const descriptor: PropertyDescriptor = {
    writable: true,
  };
  return descriptor;
}

class Test {
  @nameDecorator
  name = 'Monday';
}

const test = new Test();
test.name = 'Tuesday';
console.log(test.name); // Tuesday
```

属性装饰器的写法，也是一个 `decorator` 的形式，即上述代码中的 `@nameDecorator` 。这个装饰器接收两个参数，分别是 **原型 target** 和 **属性的名字 key** 。在这里我们可以返回一个 `descriptor` 来替换掉属性原始的 `descriptor` 。替换完成之后，最终打印 `Tuesday` 。

---

继续，我们来看第二种装饰器。**具体代码如下：**

```js
// 该装饰器无法直接修改实例上的属性值(name)，而只能修改原型上的属性值(name)
function nameDecorator(target: any, key: string): any {
  target[key] = 'Tuesday';
}

// name存储在类的实例上
class Test {
  @nameDecorator
  name = 'Monday';
}

const test = new Test();
test.name = 'Hello~';
console.log((test as any).name); // Hello~
console.log((test as any).__proto__.name); // Tuesday
```

这种类型的装饰器中，值得注意的点是， `nameDecorator` 只能用来修改**原型上**的属性值，而**无法**直接修改**实例上**的属性值。

## 4、参数装饰器

上面我们讲到了对类里面的方法、访问器和属性做修饰，现在，我们再来了解一种新的装饰器：对类里面的方法中的**参数**做修饰。**先来看一段代码：**

```js
// 原型，方法名，参数所在的位置
function paramDecorator(target: any, key: string, paramIndex: number): any {
  console.log(target, key, paramIndex); // Test { getInfo: [Function] } , 'getInfo' , 1(参数所在位置是第2个位置)
}

class Test {
  getInfo(name: string, @paramDecorator age: number) {
    console.log(name, age);
  }
}

const test = new Test();
test.getInfo('Monday', 18); // Monday 18
```

大家可以看到，通过对方法中的参数进行装饰，我们可以获取到装饰器的**原型**，**方法名**和**参数所在的位置**，这个就是参数装饰器。

# 😐 三、装饰器实际使用的小例子

上面我们讲到了很多种装饰器相关的原理知识，现在我们用一个实际使用的例子来带大家更好的使用装饰器。**先看一段代码：**

```js
const userInfo: any = undefined;

function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (e) {
        console.log(msg);
      }
    };
  };
}

class Test {
  @catchError('userInfo.name 不存在')
  getName() {
    return userInfo.name;
  }
  @catchError('userInfo.age 不存在')
  getAge() {
    return userInfo.age;
  }
  @catchError('userInfo.gender 不存在')
  getGender() {
    return userInfo.gender;
  }
}

const test = new Test();
test.getName(); // userInfo.name 不存在
test.getAge(); // userInfo.age 不存在
test.getGender(); // userInfo.gender 不存在
```

在上面的代码中，我们做的是捕获异常的一个功能。通过封装 `@catchError` 装饰器，来对我们最终使用的三个方法，`getName` 、 `getAge` 和 `getGender` ，对这三个方法进行**异常捕获**。

以上算是对装饰器的一次小小的实践，后续深入学习可以再参考一些书籍去多练习。

# 😏 四、结束语

在上面的文章中，我们讲解了装饰器中最基础的**类装饰器**，以及类装饰器中的 4 中其他类型的装饰器。最后，我们还用了一个小例子去简单地了解了，装饰器在实际应用中的一些操作。

到这里，关于装饰器的学习就接近尾声啦！不知道小伙伴们对装饰器又有了一些新的了解呢？

如果您觉得这篇文章有帮助到您的的话不妨点赞支持一下哟~~😉

我们下期再见！👋👋👋

# 🥳 往期推荐

🛵[TypeScript，从 0 到入门带你进入类型的世界](https://juejin.cn/post/6980248901966102564)
