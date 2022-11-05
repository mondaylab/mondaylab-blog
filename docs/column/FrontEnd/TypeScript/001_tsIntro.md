---
title: 还不会ts？一文带你打开ts的大门
author: 周一
date: '2022-01-05'
categories:
  - 前端开发
tags:
  - TypeScript
sidebar: 'auto'
---

# 序言

众所周知， `js` 是一门**弱类型语言**，并且规范较少。这就很容易导致在项目上线之前我们很难发现到它的错误，等到项目一上线，浑然不觉地， `bug` 就**UpUp**了。于是，在过去的这两年， `ts` 悄悄的崛起了。

周一随着一波热潮，也开始进入了 `ts` 的世界，不得不感叹 `ts` 的静态美。

下面的文章中将讲解我对 `TS` 入门的一些归纳总结。一起来了解一下吧！

# 一、什么是 TypeScript？

## 1、编程语言的类型

| 动态类型语言（Dynamic Typed Language） | 静态类型语言（Statically Typed Langeage） |
| :------------------------------------: | :---------------------------------------: |
|               JavaScript               |               C,C++,C#,JAVA               |

## 2、TypeScript 究竟是什么？

- Typescript，即 `Javascript that scales` ；
- `ts` 把不看重类型的动态语言 `JS` 转变成**关注类型的静态语言**；

- 可以说 ts 是**静态类型风格的类型系统**；
- 从 `es6` 到 `es10` 甚至是 `esnext` 的语法支持；
- 兼容各种浏览器，各种系统，各种服务器，完全开源。

# 二、为什么要学习 TypeScript？

## 1、程序更容易理解

动态语言存在**函数或者方法中其输入输出的参数类型**等问题，同时，动态语言还受到各种各样的约束，比如需要**手动调试**等等。那么有了 `ts` ，代码本身就可以解决上述问题了， `ts` 让程序更容易理解，程序理解我们，我们就可以少干很很多事情。

就像我们在与别人交谈时，假如我们逻辑很清晰的表达给对方，对方马上听懂了，并且理解了我们，我们也很省力，不用长篇大论的介绍。

## 2、效率更高

`ts` 可以在在**不同的代码块和定义**中进行跳转，并且**代码有补全功能**。

同时， `ts` 还有丰富的接口提示，可以通过使用 `.` 来提示所有的接口内容。

## 3、更少的错误

`ts` 在**编程期间**，就可以**发现大部分的错误**。这样就可以杜绝掉一些比较常见的错误，也使得后面程序运行更加通畅。

## 4、非常好的包容性

`ts` 可以完全地兼容 `Javascript` ，同时，如果要引入像 `JQuery` 之类的**第三方库**时，可以单独**编写类型文件**来引入这些库。

## 5、一点小缺点

相比于 `js` 来讲， `ts` 在学习之初，需要去习惯一些规范，短期内会增加一点学习成本。但短期的学习成本增加将会使得在后期的开发当中减少很多不必要的错误和麻烦，间接的也为自己的开发带来很大的益处。

闲谈到此结束，让我们一起来进入 `ts` 的世界吧！

# 三、typescript 入门

## 1、如何安装 TypeScript

```bash
npm install -g typescript
```

## 2、查看版本号

```bash
tsc -v
```

## 3、运行 ts 文件

安装 `ts-node` ，`ts-node` 可以让 `node` 直接运行 `ts` 代码，无需使用 `tsc` 即可将 `ts` 代码编译成 `js` 代码。可以理解为 `ts-node` 包装了一层 `node` ，使得让 `node` 可以直接运行 `ts` 代码。

```bash
npm i ts-node@8.4.1 -g
ts-node demo.ts
```

## 4、创建 ts 项目

```bash
npm init -y
tsc --init
npm i ts-node -D
npm i typescript -D
```

## 5、安装nodemon工具

`nodemon` 是一个自动检测工具，它所起到的作用是：可以自动检测到目录中的文件更改，检测到的时候，将**重新启动**应用程序来调试基于 `node.js` 的应用程序。安装命令如下：

```bash
npm install -g nodemon
```

安装完成之后，我们可以在 `package.json` 中配置自动检测，以让程序可以自动重启应用程序。**具体配置如下：**

```json
"scripts": {
  	"dev": "nodemon --watch src/ -e ts --exec ts-node ./src/app.ts"
} 
```

我们来剖析下上面这段命令，各桥段的含义如下：

- `nodemon --watch src/` 表示检测目录是跟 `package.json` 同级目录下的 `src` ；
- `-e ts` 表示 `nodemon` 命令准备要监听的是以 `ts` 为后缀的文件；
- `--exec ts-node ./src/project/app.ts` 表示的是，当检测到 `src` 目录下有任何变化时，都要重新执行 `app.ts` 文件。

## 6、Parcel打包支持浏览器运行TS文件

上面我们讲到的是 `ts` 在 `node` 环境下区运行，那接下来我们将讲解在浏览器环境下要怎么样去运行 `ts` 文件呢，这里要谈到的一个工具是 `parcel` 。

首先，我们可以先安装 `parcel` 打包工具：具体命令为：

```bash
npm install parcel-bundler --save-dev
```

之后，我们在 `package.json` 中给 `npm` 添加启动项，让项目支持启动 `parcel` 工具包。配置如下：

```bash
"scripts" :  {
	"start": "parcel ./index.html"
}
```

最后，我们可以通过 `npm run start` 命令，来启动 `parcel` 工具包。

# 四、Typescript 数据类型

## 1、原始数据类型和 Any 类型

### （1）原始数据类型

```ts
//定义一个布尔值数据
let isDone: boolean = false;

//定义一个数字类型
let age: number = 20;

//定义字符串类型
let firstName: string = 'monday';
let message: string = `Hello, ${firstName}`;

//定义undefind和null类型
let u: undefined = undefined;
let n: null = null;

//给数字赋值undefid
let num: number = undefined;
```

### （2）Any 类型

如果我们有时候不能确定一个数据是什么类型的话，那么我们可以用 any 类型来定义。比如：

```ts
//定义一个any类型数据
let notSure: any = 4;
notSure = 'maybe a string';
notSure = true;

notSure.myName;
notSure.getName();
```

## 2、数组和元组

### （1）数组

```ts
//声明一个数字类型的数组
//注意：后面的数组只能传递数字，传递其他类型的数据都会报错
let arrOfNumbers: number[] = [1, 2, 3];
arrOfNumbers.push(3);

function test() {
  //arguments 为类数组
  console.log(arguments);
}
```

### （2）元组

```ts
//确定一个元组里面的内容和数量，下面表示确定user这个元组必须且只能接收两个参数
//同时第一个属性必须是String类型，第二个属性是Number类型
let user: [String, Number] = ['abc', 13];
```

## 3、interface 接口

**interface 的定义：**

- 对 `对象Object` 的形状 `(shape)` 进行描述；
- Duck Typing（鸭子类型）。

**我们来看一段代码：**

```ts
interface Person {
  // readonly表示只读状态
  readonly id: number;
  name: String;
  //加一个问号表示该参数可选可不选
  age?: number;
}

let monday: Person = {
  id: 1,
  name: 'monday',
  age: 18,
};

monday.id = 12323; //因为加了readonly，所以此时访问不了，会报错
```

## 4、function 函数

**function 函数是什么：**

- 在 `JS` 中，函数是一等公民。
- 函数和其他类型的对象都一样，可以作为**参数**，可以**存入数组**，也可以**被另外一个函数返回**，可以被**赋值给另外一个变量**。
- 函数主要由两个部分组成：**输入（传参）**和**输出（返回结果）**。

**我们来看个例子：**

```ts
function add(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}

let result = add(1, 2, 3);
console.log(result); //6
```

通过以上函数，我们实现了两个树或者三个树的相加操作。此时，需要我们注意的是，**可选参数**后面不能再添加**不确定参数**，否则程序就会发生混乱。**比如：**

```ts
function add(x: number, y: number, z?: number, t: number): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}
```

以上代码中的 `t` 是肯定不被允许添加的，因为前面已经有了可选参数 `z` ，而后面又突然健冒出来个 `t` ，想想都不太合理。

---

到这里，假设我们有一个新的变量名，名字叫 `add2` 。这个时候我们想要给它一个像 `add` 函数一样的类型。**那么该怎么处理呢？**

```ts
let add2: (x: number, y: number, z?: number) => number = add;
```

注意上面这个箭头 `=>` 不是 `ES6` 中的箭头函数，而是 `ts` 中声明**函数类型返回值**的方法。

上面这个语句中就说明了， `add2` 返回的值是一个 `number` 类型数值，并且让它等于 `add` 函数。同时，要记得的是，在 `ts` 当中，凡是在 `:` 后面都是声明在声明类型。

---

上面这样写好像有点冗余，我们来用 `interface` 来实现同样的效果。

在第 3 点的 `interface` 中我们了解到， `interface` 是对对象的形状进行描述，但值得注意的是， `interface` 也可以是**对函数的形状进行描述**。我们用代码来实现一下。

```ts
interface ISum {
  (x: number, y: number, z?: number): number;
}

let add2: ISum = add;
```

通过以上代码，我们看到，用 `interface` 来封装一个函数的返回值来行，看起来优雅了不少。这里先体会一下， `interface` 的强大之处，在后面还会继续讲解。

## 5、类型推论、联合类型和类型断言

### （1）类型推论

有时候我们还没有给一个数据定义类型，就直接给它赋值了。这个时候我们要怎么来判断呢。这个数据的类型呢？

**比如：**

```ts
let str = 123;
```

当出现这样的情况时，编译器会直接给 `str` 赋上 `number` 类型。那么此时如果我们想这么干：

```ts
let str = 123;
str = 'asd'; //会报错
```

结果当然时不行的。当第一次赋值的时候，编译器就已经给 `str` 一个 `number` 类型，认定 `str` 就是 `number` 类型。而后我们还想要给 `str` 赋值上一个 `string` 类型的数据，肯定是会报错的。

### （2）联合类型

有时候我们对一个数据的类型不够确定，比如说不知道某一个数据它是 `number` 类型还是 `string` 类型。这个时候我们就可以用**联合类型**来进行一波操作。

```ts
let numberOrString: number | string;
```

通过这种方式，我们对我们所定义的属性 `numberOrString` 进行联合类型操作。

一般情况下，**联合类型**会结合**类型断言**来进行使用。接下来我们来讲**类型断言**。

### （3）类型断言

**1）** 当 `TypeScript` 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法，而有时候呢，我们确实需要**在还不确定类型的时候**就访问其中一个类型特有的属性或方法。因此我们采用**类型断言**的方式将其指定为一个类型。（这么做只是先欺骗了 `ts` ，让其信任我们所指定的类型）

```ts
let str = 123;
function getLength(input: string | number): number {
  // 用as对input进行类型断言,先给input指定一个类型，后面判断不是再进行转换
  //注意:类型断言只做类型选择,而不做类型转换
  const str = input as string;
  console.log(typeof str);
  if (str.length) {
    return str.length;
  } else {
    const number = input as number;
    return number.toString().length;
  }
}
```

**2）** 看到这里，已经开始感觉到类型断言的神奇之处。但用上面这种方法感觉好像还有一点点冗余，于是我们引入一个 `type guard` ，即**类型守护**。我们来看下实现方式。

```ts
let str = 123;
function getLength2(input: string | number): number {
  if (typeof input === 'string') {
    return input.length;
  } else {
    return input.toString().length;
  }
}
```

上面这种方法被称为是 `typeof` 语法做类型守护。

**3）** 继续，我们来看另外一种做**类型守护**的方法， **`in` 语法** 。**具体代码如下：**

```ts
interface Bird {
  fly: Boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

function trainAnimal(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}
```

在上面的 `'sing' in animal` 中，我们就可以判断到 `animal` 是一个 `Bird` 类型，之后进行 `else` 操作。上面判断已经是 `Bird` ，那下面的 `else` 他就会去往 `Dog` 类型找，因此也就可以找到 `bark` 方法。

# 五、Typescript 中的类：class

在 `js` 中我们用了构造函数和原型链的方式来实现继承，同时在 `ES6` 中出现了 `class` 类继承的方法。那在 `typescript` 中呢，继承的方法又更加丰富了。让我们一起来一探究竟吧！

## 1、类的定义

我们先来看下类的定义。

### （1）类（Class）

类定义了**一切事物**的抽象特点，包含它的属性和方法。**比如：**

```ts
class Animal {
  // 构造函数是实例化执行时候的逻辑
  constructor(name) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}
```

阅读以上代码我们可以知道，通过 `class` 可以定义一个**类**。

### （2）对象（Object）

对象 `Object` ，就是**类的实例**。**举个例子：** 🙆‍♂️

我们可以把类 `class` 比喻成一张**蓝图**，比如说汽车是一个 `class` ，那么它就像是一张造汽车的图纸。第二个是 `Object `， `Object` 通过 `new` 生成，那么前面有了汽车的蓝图，我们现在就可以创造实实在在的汽车了。我们可以说一辆特斯拉是汽车的实例，也可以说宝马是汽车的另外一个实例。

同样我们用上面的例子来做衍生。**具体如下：**

```ts
class Animal {
  // 构造函数是实例化执行时候的逻辑
  constructor(name) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}
const snake = new Animal('lily');
console.log(snake.run());
```

阅读以上代码我们可以知道，我们定义了一个 `snake` ，这个 `snake` 继承了 `Animal` 类，因此它就可以用 `Animal` 类的**属性**和**方法**。

**此时打印结果如下：**

![实例](https://img-blog.csdnimg.cn/img_convert/ded88788789ccbcaedd23d6fb13a59a6.png)

### （3）面向对象（OOP）的三大特性

面向对象的三大特性分别为：**封装**、**继承**、**多态** 。

- **封装：** 指将数据的**操作细节**隐藏起来，只暴露对外的接口。那这样子的话，对于外界的调用端来说，他们不需要也不可能知道细节，只能通过**对外的接口**来访问该对象。
- **继承：** 子类可以继承父类，子类除了拥有父类的所有特征外，还会拥有一些**更具体的特性**。
- **多态：** 由继承产生的相关不同的类，**对同一个方法可以有不同的响应**。比如，猫和狗，他们都可以继承 `Animal` 类，但是他们分别实现 `run()` 方法，此时呢，针对某一个实例，我们无需了解它是猫还是狗，这个时候可以直接调用 `run()` ，程序会自动判断出来，应该如何去执行这个方法。

同样，我们用上面的代码做衍生，来看**继承**和**多态**是怎么样的。

---

**继承：**

```ts
class Animal {
  // 构造函数是实例化执行时候的逻辑
  constructor(name) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}
const snake = new Animal('lily');
// console.log(snake.run())

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaoqi = new Dog('xiaoqi');
console.log(xiaoqi.run());
console.log(xiaoqi.bark());
```

**此时打印结果如下：**

![继承](https://img-blog.csdnimg.cn/img_convert/c2589bef78fb155bd3ee1798b45b6563.png)

从上面可以看到， `Dog` 继承了 `Animal` 类，此时 `Dog` 就拥有了 `Animal` 类的属性和方法。而 `xiaoqi` 实例化了 `Dog` ，因此它也拥有 `Dog` 的属性和方法。

---

**多态：**

```ts
class Animal {
  // 构造函数是实例化执行时候的逻辑
  constructor(name) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}
const snake = new Animal('lily');
// console.log(snake.run())
//-----------------------------------
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const xiaoqi = new Dog('xiaoqi');
console.log(xiaoqi.run());
console.log(xiaoqi.bark());
//-----------------------------------
class Cat extends Animal {
  // 静态方法不需要进行实例化，直接在类上调用即可
  static categories = ['mammal'];
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  run() {
    return `Meow, ` + super.run();
  }
}
const maomao = new Cat('maomao');
console.log(maomao.run());
// 直接访问静态属性
// 为什么要有静态属性？当定义和实例没有太大关系时，可以考虑使用静态方法实现
console.log(Cat.categories);
```

**此时打印结果如下：**

![多态](https://img-blog.csdnimg.cn/img_convert/86441ea8f96ed96e1ccb1b6e258384fa.png)

阅读代码我们可以发现， `xiaoqi` 继承了 `dog ` 的 `run()` 方法，而 `Cat` 继承了 `Animal` 类，但是它对 `run()` 方法进行了改写，因此最终的 `run()` 方法为改写后的效果。

所以， `maomao` 继承了 `Cat` 类，最后 `maomao` 调用 `run()` 方法时，就会调用 `Cat` 里面改写的 `run()` 方法，而不是 `Animal` 类的 `run()` 方法。

这样， `xiaoqi` 和 `maomao` 虽然同样继承自 `Animal` 类，但他们调用 `run()` 方法的结果各自相互独立，如此，就实现了多态。

同时，我们还要注意一个点，就是静态属性。大家可以看到上面定义的 `categories` ，用了 `static` 来定义它为静态属性。当把变量定义为静态属性时，则当外部需要该静态方法时，不需要进行实例化，之类在类上调用即可。

那么问题来了，我们什么时候才需要有静态属性呢？

其实，当定义的内容和实例没有太大关系时，就可以考虑使用**静态方法**。比如**常量的使用**，常量基本是固定的，不会变的，所以我们可以考虑直接使用**静态方法**来获取它。

## 2、Typescript 中的类

Typescript 是通过什么方式来增强类的呢，typescript 一般通过以下**四种修饰符**来增强类：

|  修饰符   |            含义            |
| :-------: | :------------------------: |
|  public   |  修饰的属性或方法是公有的  |
|  private  |  修饰的属性或方法是私有的  |
| protected | 修饰的属性或方法是受保护的 |
| readonly  |        只能读不能写        |

有了以上这四种修饰符呢，我们就可以给类的方法和属性进行**权限管理**。为什么要做权限管理呢？因为总有些内容，我们是不愿意暴露给外部使用的，所以需要进行权限管理。

值得注意的是，对于 `protected` 这个修饰符来说，**只有子类可以访问父类的属性和方法**，**其他实例都不能访问**。这其实可以把 `protected` 这个变量理解为**遗产**，父类的东西直接给子女继承，其余外部人员一概不能访问。

## 3、类和接口

### （1）解决什么问题

继承存在着这样一个困境，在面向对象的世界中，一个类只能继承另外一个类，有时候同类之间有一些共同的特性，但是使用子类来继承父类又很难完成。于是接口就出现了。

### （2）如何解决

类可以使用 `implements` 来实现接口，怎么做呢？我们可以**把这些相同的特性提取成接口**，然后用 `implements` 这个**关键字**来实现，这样就大大提高了面向对象的灵活性。

### （3）举个例子

假如我们现在要让一辆汽车和**一部手机**来实现**打开播放器的功能**，**那么我们会这么实现：**

```ts
class Car {
  switchRadio(trigger: boolean) {}
}

class CellPhone {
  switchRadio(trigger: boolean) {}
}
```

但是这样子看起来好像就没有特别雅观。于是我们可以写一个**打开播放器**的接口,然后用 `implements` 来实现这个功能。**代码如下：**

```ts
interface Radio {
  switchRadio(trigger: boolean): void;
}

class Car implements Radio {
  switchRadio(trigger: boolean) {}
}

class CellPhone implements Radio {
  switchRadio(trigger: boolean) {}
}
```

这样，就让 `Car` 和 `CellPhone` 实现了打开播放器的功能。

接下来，我们继续写一个接口，可以实现检查电池电量的功能。并且让手机不仅可以打开播放器，还可以检查电池电量。**代码如下：**

```ts
interface Radio {
  switchRadio(trigger: boolean): void;
}

interface Battery {
  checkBatteryStatus(): void;
}

class Car implements Radio {
  switchRadio(trigger: boolean) {}
}

class CellPhone implements Radio, Battery {
  switchRadio(trigger: boolean) {}
  checkBatteryStatus() {}
}
```

阅读代码我们可以发现，我们要给继承两个接口 `Radio,Battery` ，这样看似乎还有点冗余。于是我们可以这样实现：

```ts
interface Radio {
  switchRadio(trigger: boolean): void;
}

interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void;
}

class Car implements Radio {
  switchRadio(trigger: boolean) {}
}

class CellPhone implements RadioWithBattery {
  switchRadio(trigger: boolean) {}
  checkBatteryStatus() {}
}
```

通过 `interface` 继承 `interface` ，最终用 `implement` 去抽象和验证**类的属性和方法**，达到抽离功能的目的。

相信通过以上的简单了解，大家能感受到一点 `interface` 的奇妙之处。

## 4、抽象类

### （1）抽象类是什么

所谓抽象类，就是把共用性的一些东西给抽离出来，也就是把通用性的一些东西做一些封装。

### （2）举个例子

我们来举个例子，看下**抽象类**是怎么使用的。**具体代码如下：**

```ts
// 抽象类
abstract class Geom {
  width: number;
  getType() {
    return 'demo';
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea() {
    return 123;
  }
}

class Squre {}
class Triangle {}
```

### （3）抽象类和接口

有小伙伴可能已经发现，抽象类跟上面我们学到的接口似乎有点相似。那事实上，抽象类是把一些**跟类相关的，通用的一些方法**给抽象出来。而接口呢，是把各种**跟对象和属性相关的**给抽象出来。这是他们两者的区别，但它们的本质都是去**把一些通用性的东西做封装**。

# 六、枚举

## 1、普通枚举

枚举常使用于我们在程序中需要做权限管理或者做判断时等各种场景。枚举比较简单，**下面直接用代码演示：**

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); //0
console.log(Direction.Down); //1
console.log(Direction.Left); //2
console.log(Direction.Right); //3
console.log(Direction[0]); //Up
```

除了以上基本用法外，我们还可以**给枚举赋值：**

```ts
enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); //10
```

## 2、常量枚举

我们来定义一个常量，与 `enum` 做判断。

```ts
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

//定义一个常量，直接与enum做判断
const value = 'Up';
if (value === Direction.Up) {
  console.log('go Up!'); // go Up!
}
```

使用常量枚举可以有效地提升性能，**常量**会内联枚举的任何用法，而不会把枚举变成任意的 `Javascript` 代码。

这样一说，那是不是所有的 `enum` 都可以使用常量枚举呢？答案自然是否定的。

**枚举的值有两种类型**，一种是**常量值枚举**(constant)，一种是**计算值枚举**(computed)。只有**常量值枚举**可以进行**常量枚举**，而**计算值枚举**不能进行**常量枚举**。

# 七、泛型

接下来我们来讲 `TypeScript` 中最难的一部分，**泛型**。

## 1、普通泛型

**泛型**，即 `generics` 。指在定义函数、接口或类的时候，我们不预先指定类型，而是在使用的时候再指定类型和其特征。

可以理解为，泛型就相当于一个**占位符**或者是一个**变量**，在使用时再动态的填入进去，填进去以后既可以来确定我们的类型值。

**接下来我们用代码来演示一下：**

```ts
function echo<T>(arg: T): T {
  return arg;
}

const result = echo(true);
console.log(result); // true
```

我们通过 `<>` 来定义一个未知的泛型，之后当我们给它赋值时，就可以对应值的数据类型。

---

现在我们再用泛型来定义一个 `number` 类型的数组。**具体代码如下：**

```ts
// 早期定义一个number类型的数组
let arr: number[] = [1, 2, 3];
// 用泛型定义一个number类型的数组
let arrTwo: Array<number> = [1, 2, 3];
```

---

假如我们现在要调换两个元素的位置，那么用泛型我们可以这么实现。**具体代码如下：**

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap(['abc', 123]);
console.log(result2[0]); //123
console.log(result2[1]); //abc
```

通过**泛型**，我们就顺利调换了两个元素的位置。

## 2、约束泛型

在泛型中使用 `extends` 关键字，就可以让传入值满足我们**特定的约束条件**，而不是毫无理由的随意传入。

比如，我们想要让我们定义的内容是一个**数组**，我们可以这么处理。**具体代码如下：**

```ts
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
const arrs = echoWithArr([1, 2, 3]);
```

这样，就把 `arrs` 定义为一个数组。

---

假设我们现在想要让我们**定义的内容**可以访问到 `length` 方法，那么我们需要加一点佐料。**具体代码如下：**

```ts
interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength('str');
const obj = echoWithLength({ length: 10, width: 20 });
const arr2 = echoWithLength([1, 2, 3]);
```

通过 `extends` 关键字来继承特定的 `interface` ，使得我们定义的内容 `str` ， `obj` ，`arr2` 达到可以访问 length 方法的目的。

通过以上举例，我们可以知道，泛型可以用来灵活的**约束参数的类型**，参数不需要是个特别死板的类型，而可以通过我们的约束来达到我们想要的目的。

## 3、泛型在类和接口中的使用

### （1）泛型在类中的使用

```ts
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}
// 确定这是一个number类型的队列
const queue = new Queue<number>();
queue.push(1);
console.log(queue.pop().toFixed());
```

### （2）泛型在接口中的使用

```ts
interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 1, value: 'str' };
let kp2: KeyPair<string, number> = { key: 'str', value: 2 };
```

通过以上代码演示可以发现，泛型就像是创建了一个**拥有特定类型的容器**，就仿佛给一个**容器**贴上标签一样。

## 4、泛型中 keyof 语法的使用

```js
interface Person {
    name: string;
    age: number;
    gender: string;
}

// type T = 'name';
// key: 'name';
// Person['name'];

// type T = 'age';
// key: 'age';
// Person['age'];

// type T = 'gender';
// key: 'gender';
// Person['gender'];

class Teacher {
    constructor(private info: Person) {}
    // keyof关键字
    getInfo<T extends keyof Person>(key: T): Person[T] {
        return this.info[key];
    }
}

const teacher = new Teacher({
    name: 'Monday',
    age: 18,
    gender: 'female'
});

const test = teacher.getInfo('age');
console.log(test);
```

# 八、类型别名

## 1、类型别名

**类型别名**，即 `type aliase` 。类型别名可以看作是一个**快捷方式**，可以把一个写起来很繁琐的类型创建一个简单的写法。**比如：**

```ts
//用以下这种写法，每次都要写一长串的(x: number, y: number) => number
let sum: (x: number, y: number) => number;
const result = sum(1, 2);

//用type给类型进行别名
type PlusType = (x: number, y: number) => number;
let sum2: PlusType;
const result2 = sum2(2, 3);

//一个类型可以是字符串也可以是数字
type StrOrNumber = string | number;
let result3: StrOrNumber = '123';
result3 = 123;
```

## 2、字符串字面量

**字符串字面量**，指可以提供一系列非常方便使用的**常量写法**。**比如：**

```ts
const str: 'name' = 'name';
const number: 1 = 1;
type Direction = 'Up' | 'Down' | 'Left' | 'Right';
let toWhere: Direction = 'Left';
```

## 3、交叉类型

**交叉类型**，使用 `type` 这个**扩展对象**的一种方式。**比如：**

```ts
interface IName {
  name: string;
}
type IPerson = IName & { age: number };
let person: IPerson = { name: 'monday', age: 18 };
```

# 九、命名空间

## 1、namespace 是什么

假设我现在有一个命名空间，那么命名空间里面的内容**将不会被暴露出去**。**如下代码所示：**

```js
namespace Home {
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
    }

    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
    }

    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
    }

    class Page {
        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }
}

```

在上面的代码中，有一个命名为 `Home` 的命名空间，里面一共有 `4` 个类。那么这个时候，我们想要在**外部**使用其中的某一个类，是没有办法的。

那如果我们想要将命名空间里面的某个类给暴露出去，该怎么处理呢？

通常情况下，我们会在**类的前面**加上 `export` 关键字。类似下面这样：

```js
namespace Home {
    // 加上 export 关键字
    export class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
    }

    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
    }

    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
    }

    class Page {
        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }
}
```

大家可以看到，加上 `export` 关键字，就可以将该类在外部进行暴露。而没有加 `export` 关键字的，在外部就依然是访问不到的。

现在我们来看下它具体如何使用。**具体代码如下：**

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <script src="./dist/page.js"></script>
</head>

<body>
  <script>
    new Home.Header();
  </script>
</body>

</html>
```

大家可以看到，通过 `new Home.Header();` 的方式，我们可以访问到命名空间 `Home` 中暴露出来的 `Header` 类。而其他没有加 `export` 关键字的，都是无法正常访问到的，它让本来**全局的四个变量**变得只剩下 `Home` 一个，这就是命名空间 `namespace` 给我们带来的好处。

## 2、namespace 的好处

现在，我们来梳理一下命名空间给我们带来的好处。`namespace` 给我们带来的一个好处就是，用一个**类似模块化的开发方式**，让我们能够尽可能少的去生成全局变量。或者说，把一组相关的内容封装在一块，最终**对外提供统一的暴露接口**。

## 3、依赖命名空间声明

假设我们要在一个命名空间里面去引入另一个命名空间，该怎么使用呢？**如下代码所示：**

```js
// Home这个命名空间要去依赖其他命名空间的声明
///<reference path='./components.ts' />

namespace Home {
  export class Page {
    user: Components.User = {
      name: 'monday'
    }
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
```

我们可以通过 `///<reference path='./components.ts' /> ` 这种方式，去引入 `Components` 命名空间，以供我们使用。

# 十、声明文件

我们在写 ts 时，难免会有遇到要引入第三方库的时候。这个时候就需要 ts 来做特殊处理。**主要有以下两种做法：**

## 1、 .d.ts 文件引入

假设我们要引入 `JQuery` 库来使用，那么我们可以在外部新增一个 `JQuery.d.ts` 文件，**文件内代码如下：**

```ts
// 第一种类型：定义全局变量
declare var JQuery: (selector: string) => any;

// 第二种类型：定义全局函数→传递函数
declare function $(readFunc: () => void): void;

// 第三种类型：定义全局函数→传递字符串
interface JQueryInstance {
  html: (html: string) => {};
}
declare function $(selector: string): JQueryInstance;
```

之后便可以在我们定义的 `ts` 文件下引用 `JQuery` 相关库的内容。**比如：**

```ts
$(function () {
  $('body').html('<div>123</div>');
});
```

## 2、使用 interface 语法实现函数重载

上面的第二和第三种类型，使用了**传递函数**和**传递字符串**的两种方式，来实现了**函数重载**。那么下面，我们来用 `interface` 语法，来改造一下这种函数重载的方式。 `.d.ts` 文件代码如下：

```js
interface JQueryInstance {
  html: (html: string) => JQueryInstance;
}

// 使用interface的语法，实现函数重载
interface JQuery {
  (readFunc: () => void): void;
  (selector: strring): JQueryInstance;
}
declare var $: JQuery;
```

大家可以看到，我们通过 `interface` 的方式，将 `readFunc` 和 `selector` 给一起并入 `JQuery` 接口中，最后我们直接将 `JQuery` 给暴露出去即可。

## 3、声明对象

上面我们遇到的是 `$` 只是函数的时候，进行的函数重载。那如果此时的 `$` 既要当作是**函数**使用，又要当作是**对象**使用呢？假设我们现在有这么一段代码：

```js
$(function () {
  $('body').html('<div>123</div>');
  new $.fn.init();
});
```

现在，我们要在 `$` 中去访问到 `fn` 和 `init` ，那这个时候 `$` 不仅要当作是函数来使用，还要当作是对象来使用。具体我们可以在 `.d.ts` 文件中这么处理。**具体代码如下：**

```js
interface JQueryInstance {
    html: (html: string) => JQueryInstance;
}

// 函数重载
declare function $(readyFunc: () => void): void;
declare function $(selector: string): JQueryInstance;

// 如何对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
declare namespace $ {
    namespace fn {
        class init {}
    }
}
```

大家可以看到，我们定义了命名空间，并在命名空间里卖弄继续嵌套命名空间，同时，用 `class` 类进行了类型定义。最终，我们就可以成功访问到 `$.fn.init()` 啦！

## 4、npm 模块化引入

我们也可以安装对应的第三方库的 `npm` 包，这个包是类型定义文件。假如我们现在要引入一个 `JQuery` 库，那么我们可以这么处理。

```ts
npm install --save @type/jquery
```

接下来我们对 `.d.ts` 文件进行改造，**具体代码如下：**

```js
// ES6 模块化
declare module 'jquery' {
    interface JQueryInstance {
        html: (html: string) => JQueryInstance;
    }
    // 混合类型
    function $(readyFunc: () => void): void;
    function $(selector: string): JQueryInstance;
    namespace $ {
        namespace fn {
            class init {}
        }
    }
    export = $;
}
```

最后，来到我们想要引入 `$` 的 `ts` 文件中。**具体代码如下：**

```js
import $ from 'jquery';

$(function () {
  $('body').html('<div>123</123>');
  new $.fn.init();
});
```

# 十一、内置类型

我们在写 `ts` 代码时，其实不知不觉已经使用了很多的**内置对象**。对象呢，是指根据标准（标准指 `ECMA` 、 `DOM` 等标准），在全局作用域 `global` 上面存在的对象。那我们在运行 `tsc` 时，这些内置的对象就会被当作附加的礼物给程序加载进行。接下来我们来体会一下几种常见的内置对象。

**全局对象：**

```ts
// global object 全局对象
const a: Array<number> = [1, 2, 3];
const date = new Date();
date.getTime();
const reg = /abc/;
reg.test('abc');
```

**内置对象：**

```ts
// build-in object 内置对象
Math.pow(2, 2);
```

**DOM 和 BOM 对象：**

```ts
// DOM 和 BOM
let body = document.body;
let allLis = document.querySelectorAll('li');
allLis.keys();

document.addEventListener('click', (e) => {
  e.preventDefault();
});
```

**功能性类型：**

```ts
// Utility Types 功能性类型
interface IPerson {
  name: string;
  age: number;
}

let monday: IPerson = { name: 'monday', age: 20 };

//可选属性
type IPartial = Partial<IPerson>;
let monday2: Ipartial = { name: 'monday' };

//移除某一个属性
type Omit = Omit<IPerson, 'name'>;
let monday3: Omit = { age: 20 };
```

# 十二、TypeScript 中的配置文件

往往我们在刚初始化一个 `ts` 项目时，都会先运行 `tsc --init` ，之后呢，会生成一个 `tsconfig.json` 文件。在这个文件下呢，有很多的配置。那接下来，我们就来分析下其中一些比较值得注意的配置项。

```json
{
  "include": ["./demo.ts"], // 只编译 ./demo.ts 文件
  "exclude": ["./demo.ts"], // 不编译 ./demo.ts 文件
  "files": ["./demo.ts"], // 只编译 ./demo.ts 文件
  "removeComments": true, // 表示打包时移除掉ts文件中的注释
  "noImplicityAny": true, // 当设置为true时，表示所有的参数都应该设置类型，否则会报错；当设置为false时，则不要求显式地设置any
  "strictNullChecks": true, // 当设置为true时，表示强制检查null类型；当设置为false时，则表示不强制检查null类型
  "rootDir": "./src", // 指定输入的文件的地址
  "outFile": "./build/page.js", // 将所有文件最终统一打包到build目录下的page.js文件里
  "outDir": "./build", // 指定输出的文件的地址
  "incremental": true, // 增量编译，即之前编译过的现在就不用编译了
  "allowJs": true, // 允许指定文件夹下的所有文件进行编译
  "checkJs": true, // 对编译后的js文件进行语法检测
  "sourceMap": true, // 编译后的结果再生成一个 .map 文件
  "noUnusedLocals": true, // 对写出的多余的，但是又没有实际作用的代码进行提示
  "noUnuesdParameters": true, // 对函数的参数进行校验，如果函数中的参数没有进行使用，则会错误提示
  "baseUrl": "./" // TypeScript下的根路径是什么路径
}
```

# 十三、在 ts 中对代码进行模块化组织

上面我们看着命名空间的使用方法似乎还有一点麻烦。那事实上，在 `ts` 中，我们还可以对代码进行**模块化组织**，通常是通过 `import` 语句来处理。怎么处理呢？

## 1、项目结构

![项目结构](https://img-blog.csdnimg.cn/f284fb13142949f7b7569ee629d5f236.png#)

## 2、模块化拆分

**第一步**，先来定义 `src|components.ts` 下的代码。**具体代码如下：**

```js
export class Header {
  constructor() {
    const elem = document.createElement('div');
    elem.innerText = 'This is Header';
    document.body.appendChild(elem);
  }
}

export class Content {
  constructor() {
    const elem = document.createElement('div');
    elem.innerText = 'This is Content';
    document.body.appendChild(elem);
  }
}

export class Footer {
  constructor() {
    const elem = document.createElement('div');
    elem.innerText = 'This is Footer';
    document.body.appendChild(elem);
  }
}
```

**第二步**，使用模块化的方式进行调用。在 `src|page.ts` 文件下，**具体代码如下：**

```js
import { Header, Content, Footer } from './components';

export class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
```

大家可以看到，上面我们使用了 `import` 语句，来将类进行模块化调用。

第三步，在项目的 `index.html` 中引用，最终运行。**具体代码如下：**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js"></script>
    <script src="./build/page.js"></script>
  </head>

  <body>
    <script>
      require(['page'], function (page) {
        new page.Page();
      });
    </script>
  </body>
</html>
```

大家可以看到，如果是在没有使用 `webpack` 等打包工具的情况下，那么我们需要使用 `cdn` 的方式去引入一个 `require` 的库，以便于后续可以使用 `require` 这种语法。

最终我们来看下浏览器的显示效果。**如下图：**

![展示效果](https://img-blog.csdnimg.cn/0ce97715d82b49b8a1636e255195a238.png#pic_center)

可以看到，最终展示除了我们想要的效果。那在上面中，我们就简单了解了在 `TypeScript` 中，如何通过 `import` 语句来对模块进行拆分和组合。

# 十四、结束语

关于 `ts` 的入门讲到这里就结束啦！希望大家能对 `ts` 有一个简单的认识！

如果这篇文章对你有用，记得**留个脚印 jio**再走哦~

# 彩蛋 One More Thing

## （：专栏直通车

专栏点这里 👉[https://juejin.cn/column/6979926803238354952](https://juejin.cn/column/6979926803238354952)

## （：番外

注：这篇文章是对[上一篇文章](https://juejin.cn/column/6979926803238354952)的补充，增加了一些进阶语法。

以上就是本文的全部内容，我们下期见！🥂🥂🥂
