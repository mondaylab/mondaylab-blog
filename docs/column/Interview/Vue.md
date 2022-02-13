---
title: 「offer来了」从基础到进阶原理，从vue2到vue3，48个知识点保姆级带你巩固vuejs知识体系
author: 周一
date: '2021-12-12'
categories:
  - 前端开发
tags:
  - offer来了
sidebar: 'auto'
---

# 🖼️ 序言

对于前端来说， `vuejs` 是一大常考点。基本上只要候选人的简历上有涉及到 `vue` 的内容，那么面试官一般都会考察。那么，对于 `vue` 来说，我们需要从 `vue2` 到 `vue3` 来做一个基本的学习，以更好的应对面试官的各种刁难问题。

在下面的这篇文章中，将从 `vue2` 的基础知识，到 `vue2` 的原理知识，再到 `vue3` 的基础知识和原理知识做一个归纳和总结。同时，周一也将整理出相关的面试题，以供大家可以有一个更好的参考。

下面开始进入本文的讲解~

# 🎙️ 一、vue2.x 基础知识预备

在了解常见的面试题之前，需要先对 `vue` 的基础知识有一个体系的了解。**详细见下图 👇**

![vue2.x基础知识思维导图](https://img-blog.csdnimg.cn/2e59d51fe90942878aaa3622420c02c3.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

> - 关于以上内容，已整理成博文，戳下方链接进入学习 👇
>
> - 原文：[万字总结 vue 的基本使用和高级特性，周边插件 vuex 和 vue-router](https://juejin.cn/post/6976040670939054093)
>
> - 链接：https://juejin.cn/post/6976040670939054093

# 📻 二、vue2.x 基础知识常见面试题

基于以上知识点，我们将其细分为面试中的常考题。**详细见下图 👇**

![vue2.x基础知识面试题整理](https://img-blog.csdnimg.cn/5a8948b2d6984cdea2a186df7e59f53e.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

接下来对这些题进行一一解答。

## 1、请说出 vue.cli 项目中 src 目录每个文件夹和文件的用法？

```bash
├── assets 放置静态资源
├── components 放组件
├── router 定义路由的相关配置
├── views 视图
├── app.vue 应用主组件
├── main.js 入口文件
```

## 2、vue.cli 中怎样使用自定义的组件？有遇到过哪些问题？

**如何使用：**

- 在 `components` 目录新建你的组件文件（ `smithButton.vue` ）；
- 在需要用的页面中导入：`import smithButton from '../components/smithButton.vue'`；
- 注入到 `vue` 的子组件的 `components` 属性上，`components:{smithButton}`
- 在 `template` 视图 `view` 中使用；
- 流程：创建组件 → 导入组件 → 注入组件 → 使用组件

**会遇到的问题：**

`smithButton` 命名，使用的时候需要用 `smith-button` ，在创建时常用到驼峰命名，但在使用时需把驼峰转换为 `-` 表示；

**vue 组件解决什么问题？**

`vue` 组件可以提升整个项目的开发效率。能够页面抽象成多个相对独立的模块，解决了我们传统项目开发效率低、难维护、复用性等等问题。

## 3、v-show 和 v-if 的区别

- `v-show` 通过 `css` 中的 `display` 来控制显示和隐藏；
- `v-if` 组件是真正的渲染和销毁，而不是显示和隐藏；
- 当频繁切换显示状态时，用 `v-show` ，否则用 `v-if` 。

## 4、为何 v-for 中要用 key

- 必须使用 `key` ，且不能是 `index` 和 `random` ；
- 原因在于，在 `vue` 的 `diff` 算法中，通过对 `tag` 和 `key` 来判断是否为相同节点 `sameNode` ，如果是相同节点，则会尽可能的复用原有的 `DOM` 节点。
- 使用 `key` 的好处是：减少渲染次数，提升渲染性能。

## 5、描述 Vue 组件生命周期

### （1）单组件生命周期

一般来说，组件生命周期的执行顺序为：**挂载阶段 → 更新阶段 → 销毁阶段**。下面给出常用组件生命周期的解析。

| 生命周期钩子      | 介绍                                                                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| beforeCreate      | 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。                                                                                      |
| **created**       | 页面还没有渲染，但是 vue 的实例已经初始化结束。                                                                                                                      |
| beforeMount       | 在挂载开始之前被调用：相关的 render 函数首次被调用。                                                                                                                 |
| **mounted**       | 页面已经渲染完毕。                                                                                                                                                   |
| beforeUpdate      | 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。                                                |
| updated           | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。                      |
| activated         | keep-alive 组件激活时调用。                                                                                                                                          |
| deactivated       | keep-alive 组件停用时调用。                                                                                                                                          |
| **beforeDestroy** | 实例销毁之前调用。在这一步，实例仍然完全可用。**常用场景有：** 自定义事件的绑定要解除、setTimeout 等定时任务需要销毁、自己绑定的 window 或者 document 事件需要销毁。 |
| destroyed         | Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。                                                     |

### （2）父子组件生命周期关系

**加载渲染过程**

```bash
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
```

**子组件更新过程**

```bash
父beforeUpdate->子beforeUpdate->子updated->父updated
```

**父组件更新过程**

```bash
父beforeUpdate->父updated
```

**销毁过程**

```bash
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
```

## 6、Vue 组件如何通讯（常见）

`vue` 组件常见的通讯方式有以下三种：

- 父子组件 `props` 和 `this.$emit` ；
- 自定义事件 `event.$no` 、 `event.$off ` 和 `event.$emit` ；
- `vuex` 。

## 7、描述组件渲染和更新的过程

关于组件的渲染和更新过程，需要了解以下这张图。大家可以从 `1-6` 依次按顺序地对下图的整个过程进行细化和解读。

![组件渲染和更新过程](https://img-blog.csdnimg.cn/img_convert/b5a868e744ceb3c88ecbdbbb6af572e8.webp?x-oss-process=image/format,png)

## 8、vue 如何处理刷新数据不丢失

- 对 `vuex` 进行配置，将 `vuex` 的状态储存到 `localStorage` 中；
- 在页面加载时读取 `localStorage` 里的状态信息；
- 在页面刷新时将 `vuex` 里的信息保存到 `localStorage` 里；
- 在页面中将 `vuex` 里的信息使用 `computed` 接收。

## 9、双向数据绑定 v-model 的实现原理

- `input` 元素的 `value = this.name` ；

- 绑定 `input` 事件 `this.name = $event.target.value` ；

- `data` 更新后触发重新渲染 `re-render` ；
- 最核心问题：了解 `v-model` 在模板编译之后，产生的内容是什么。

## 10、computed 有何特点

- 具有缓存功能，当 `data` 不变时不会进行计算；

- 有效地**提高性能**。

## 11、为何组件 data 必须是一个函数

- `export` 看似是一个对象，但是 `.vue` 文件编译出来后是一个类；
- 在每一个地方（ `data` ， `method` ……）等等进行使用就是对 `class` 进行实例化；

- 我们在实例化的时候执行 `data` ；

- 如果这个 `data` 不是函数的话，那每一个组件的实例数据就都一样了，就**共享**了；

- 因此需要让它在**闭包**之中。

## 12、ajax 请求应该放在哪个生命周期

- `mounted` 表示整个渲染完成， `dom` 也加载完成，因此 `ajax` 请求应该放在 `mounted` 生命周期中；

- 本质上 `js` 是单线程的，并且 `ajax` 是**异步获取数据**，是异步加载的一个机制；

- 如果将其放在 `mounted` 之前是没有用的，这样做只会让逻辑更加混乱；

- 原因在于，如果在 `mounted` 之前放 `ajax` 请求，那么这个时候 `js` 还没有渲染完成。且又因为 `ajax` 请求的数据还是异步的，因此即使是在 `mounted` 之前也不能加载，也不会有提前加载的效果。

## 13、如何将组件所有 props 传递给子组件？

- 父组件通过 `$props` 的而方式将自己的属性传递给子组件；

- 之后子组件通过 `<User v-bind = "$props" />` 这种方式去接收父组件传递过来的参数。

- **注：** 细节知识点，优先级不高

## 14、如何自己实现 v-model

**第一步**，我们先定义一个子组件，名字叫 `CustomVModel.vue` ，具体代码如下：

```html
<template>
  <!-- $emit是子组件往父组件传递数据 -->
  <input
    type="text"
    :value="text1"
    @input="$emit('change1', $event.target.value)"
  />
  <!--
        1. 上面的 input 使用了 :value 来绑定数据，而不是使用 v-model
        2. 上面的 change1 和 model.event 要对应起来
        3. 上面的 text1 与下面props的 text1 属性对应起来
    -->
</template>

<script>
  export default {
    model: {
      prop: 'text1', // 对应下面 props 的 text1
      event: 'change1',
    },
    props: {
      text1: String,
      default() {
        return '';
      },
    },
  };
</script>
```

**第二步**，我们在父组件中使用上面的这个子组件：

```html
<template>
  <div>
    <p>vue 高级特性</p>
    <hr />

    <!-- 自定义 v-model -->
    <p>{{name}}</p>
    <CustomVModel v-model="name" />
  </div>
</template>

<script>
  import CustomVModel from './CustomVModel';

  export default {
    components: {
      CustomVModel,
    },
    data() {
      return {
        name: 'Monday',
      };
    },
  };
</script>
```

通过上面的代码我们可以发现，通过绑定 `value` 属性和 `input` 事件这两个语法糖，最终实现数据的双向绑定。

此时我们看下浏览器的显示效果。

![自定义v-model](https://img-blog.csdnimg.cn/img_convert/7a093065cc865ad1d669eeeb0fce45e7.png)

通过上图我们自己发现，结果跟实际的 `v-model` 结果是一样的。至此，我们就实现了自定义的 `v-model` ，以此来操作**数据的双向绑定**。

## 15、多个组件有相同的逻辑，如何抽离？

- 在 `vue2.x` 中，当多个组件有相同的逻辑时，可以使用 `mixin` 来进行逻辑抽离；

- 值得注意的是， `mixin` 存在有以下问题：
  - 变量来源不明确，不利于阅读。
  - 多个 `mixin` 可能会造成**命名冲突**。
  - `mixin` 和组件可能出现**多对多**的关系，复杂度较高。
- 因此，要慎用 `mixin` ，且 `vue3.x` 已经出了 `Composition API` ，来解决 `vue2.x` 中存在的这些问题。

## 16、何时要使用异步组件

- 当加载大组件时，需要用到异步组件；

- 当 `vue-router` 路由要进行**异步加载**时，需要用到异步组件；

- 异步组件可以达到优化性能的效果。

## 17、何时使用 keep-alive

- `keep-alive` 可以**缓存组件**，使得组件**不需要重复渲染**；

- 比如像多个静态 `tab` 页的切换；

- `keep-alive` 可以达到优化性能的效果。

## 18、何时需要使用 beforeDestory

- 当**解绑自定义事件 `event.$off`** 时，需使用 `beforeDestory` 来对事件进行销毁操作；

- 当使用定时器绑定时间时，在定时器操作结束时，需要**清除定时器**；

- **解绑自定义的 `DOM` 事件，如 `window scroll` 等**，需要在 `beforeDestory` 生命周期来对其进行事件解绑。

**注意：** 如果以上三者不做的话，很容易造成**内存泄漏**。

## 19、什么是作用域插槽

- 父组件模板的所有东西只会在父级作用域内编译；
- 子组件模板的所有东西只会在子集作用域内编译；
- 而作用域插槽想解决的问题就是，**让父组件可以访问到子组件的数据**。

## 20、vuex 中 action 和 mutation 有何区别

- `action` 中可以处理异步， `mutation` 不可以；

- `mutation` 做原子操作，即做一个操作，比较原子的；

- `action` 可以整合多个 `mutation` ，可以理解为整理多个原子操作的集合。

## 21、vue-router 常用的路由模式

- `hash` 默认

- `H5 history` （需要服务端支持）

> - 已将路由模式整理成博客，具体戳下方链接 👇
>
> - 原文：[浅谈前端路由原理](https://juejin.cn/post/6993840419041706014)
>
> - 链接：https://juejin.cn/post/6993840419041706014

## 22、如何配置 vue-router 异步加载

- 在 `vue-router` 中，使用 `import` 来实现异步加载。

## 23、scope 是怎么实现的

**（1）scoped 的实现原理：**

- 给 `DOM` 节点加一个不重复的属性 `data-v-5db9451a` 来标志唯一性。
- 如果组件内部还有组件，只会给最外层的组件里的标签加上唯一属性字段，不影响组件内部引用的组件。

**（2）vue 中 scoped 的作用：**

- 实现组件的私有化，当前 `style` 样式属性只属于当前模块，不污染全局。
- 但是当我们使用公共组件的时候会造成很多困难。

**（3）谨慎使用：**

- 父组件无 `scoped` 属性，子组件带有 `scoped` ，父组件是无法操作子组件的。
- 父组件有 `scoped` 属性，子组件无 `scoped` 。父组件也无法设置子组件样式。因为父组件的所有标签都会带有 `data-v-5db9451a` 唯一标志，但子组件不会带有这个唯一标志属性。
- 父子组件都有，同理也无法设置样式，更改起来增加代码量。

## 24、vue 常用性能优化方式

- 合理使用 `v-show` 和 `v-if`
- 合理使用 `computed`
- `v-for` 时加 `key` ，以及避免和 `v-if` 同时使用
- 自定义事件、 `DOM` 事件及时销毁
- 合理使用异步组件
- 合理使用 `keep-alive`
- `data` 层级不要太深，尽量扁平
- 使用 `vue-loader` 在开发环境做模板编译（预编译）
- 合理使用 `keep-alive`
- `webpack` 层面的优化
- 使用 `SSR`

# 📟 三、vue2.x 原理知识预备

在了解常见的面试题之前，需要先对 `vue2.x` 的原理知识有一个体系的了解。**详细见下图 👇**

![vue2.x原理知识思维导图](https://img-blog.csdnimg.cn/bb377ec5fae64ebd8f71d7705e798819.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

> - 关于以上内容，已整理成博文，戳下方链接进入学习 👇
>
> - 原文 1：[手把手教你剖析 vue 响应式原理，监听数据不再迷茫](https://juejin.cn/post/6978278417951096839)
>
> - 链接 1：https://juejin.cn/post/6978278417951096839
>
> - 原文 2：[面试中的网红虚拟 DOM，你知多少呢？深入解读 diff 算法](https://juejin.cn/post/6978621084862005285)
>
> - 链接 2：https://juejin.cn/post/6978621084862005285
>
> - 原文 3：[模板编译 template 的背后，究竟发生了什么事？带你了解 template 的纸短情长](https://juejin.cn/post/6978965732633608222)
>
> - 链接 3：https://juejin.cn/post/6978965732633608222

# 📠 四、vue 原理知识常见面试题

基于以上知识点，我们将其细分为面试中的常考题。**详细见下图 👇**

![vue2.x原理知识面试题整理](https://img-blog.csdnimg.cn/f1c34087412546659108c3758d0e47a4.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

接下来对这些题目进行一一解答。

## 1、对 MVVM 的理解

所谓 `MVVM` ，即 **Model-View-ViewModel** 。

**View** 即 **视图** ，也就是 `DOM ` 。

**Model** 即 **模型** ，可以理解为 `Vue` 中组件里面的 `data` 。

那么这两者之间，就通过 **ViewModel** 来做关联。而 `ViewModel` 可以做的事情有很多，比如说像监听事件，监听指令等。当 `Model` 层的数据发生修改时，就可以通过 `ViewModel` ，来把数据渲染到 `View` 视图层上。反之，当 `View` 层触发 `DOM` 事件时，就可以通过 `ViewModel` ，从而使得 `Model` 层实现数据的修改。

这就是 `Vue` 中的数据驱动视图，通过修改 `Model` 层的数据，来驱动到 `View` 的视图中来。

![MVVM](https://img-blog.csdnimg.cn/img_convert/4356c8bfc1613bde3eaae8c08e85f028.webp?x-oss-process=image/format,png)

## 2、监听 data 变化的核心 API 是什么

- 所谓 `vue` 的响应式，即组件 `data` 的数据一旦变化，就会立刻触发视图的更新。实现数据驱动视图的第一步，需要了解实现响应式的一个核心 `API` ，即 `Object.defineProperty` 。
- 通过 `Object.defineProperty` ，我们可以实现对数据进行 `get` 和 `set` 操作，即**获取数据**和**修改数据**的操作，从而达到对数据进行响应式的监听。

## 3、vue 如何监听数组变化

要想让 `Object.defineProperty()` 这个 `API` 拥有监听数组的能力，我们可以这么做。**具体代码如下：**

```js
// 触发更新视图
function updateView() {
  console.log('视图更新');
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
// 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach((methodName) => {
  arrProto[methodName] = function () {
    updateView(); // 触发视图更新
    oldArrayProperty[methodName].call(this, ...arguments);
    // Array.prototype.push.call(this, ...arguments)
  };
});

// 重新定义属性，监听起来
function defineReactive(target, key, value) {
  // 深度监听
  observer(value);

  // 核心 API
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 深度监听
        observer(newValue);

        // 设置新值
        // 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值
        value = newValue;

        // 触发更新视图
        updateView();
      }
    },
  });
}

// 监听对象属性
function observer(target) {
  if (typeof target !== 'object' || target === null) {
    // 不是对象或数组
    return target;
  }

  // 污染全局的 Array 原型(如果直接定义在这里面，会直接污染全局)
  // Array.prototype.push = function () {
  //     updateView()
  //     ...
  // }

  if (Array.isArray(target)) {
    target.__proto__ = arrProto;
  }

  // 重新定义各个属性（for in 也可以遍历数组）
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}

// 准备数据
const data = {
  name: 'monday',
  age: 20,
  info: {
    address: '深圳', // 需要深度监听
  },
  nums: ['打篮球', '出来玩', '打乒乓球'],
};

// 监听数据
observer(data);

// 测试
data.info.address = '上海'; // 深度监听
data.nums.push('神游'); // 监听数组

复制代码;
```

**此时浏览器的打印效果如下：**

![监听数组](https://img-blog.csdnimg.cn/img_convert/e1d51919ba14e4587714025dccab8ac2.webp?x-oss-process=image/format,png)

我们可以看到，两个数据对应的视图都更新了。通过对**数组原型**的重新定义，我们就让 `Object.defineProperty()` 实现了**监听数组**的能力。

## 4、请描述响应式原理

![组件渲染和更新过程](https://img-blog.csdnimg.cn/img_convert/b5a868e744ceb3c88ecbdbbb6af572e8.webp?x-oss-process=image/format,png)
**响应式原理概述：**

- 任何一个 `Vue` 组件都会生成一个 `render` 函数。
- 之后 `render` 函数会生成一个 `vnode` 。
- 同时，在执行 `render` 函数的时候会触发 `data` 里面的 `getter` ，触发后则会生成依赖。
- 所谓依赖，就是在 `data` 触发到哪个变量，就会将哪一个变量观察起来。
- 之后，需要查看触发到的这个变量是否是之前作为依赖被观察起来的，如果是，则触发 `setter` 进行数据修改；如果不是，则直接进行监听操作；
- 最后，如果确定是之前作为依赖被重新观察起来的，那就执行 `re-render` 重新渲染操作，并且进行 `patch(vnode, newVnode)` 。

## 5、请用 vnode 描述一个 DOM 结构

根据下方的 `html` 代码，用 `v-node` 模拟出该 `html` 代码的 `DOM` 结构。

**html 代码：**

```html
<div id="div1" class="container">
  <p>vdom</p>
  <ul style="font-size:20px;">
    <li>a</li>
  </ul>
</div>
复制代码
```

**用 JS 模拟出以上代码的 DOM 结构：**

```js
{
	tag: 'div',
    props:{
        className: 'container',
        id: 'div1'
    },
    children: [
        {
            tag: 'p',
            chindren: 'vdom'
        },
        {
            tag: 'ul',
            props:{ style: 'font-size: 20px' },
            children: [
                {
                    tag: 'li',
                    children: 'a'
                }
                // ....
            ]
        }
    ]
}
```

## 6、diff 算法的时间复杂度

- 树的时间复杂度是 **O(n<sup>3</sup>)** ，因此，我们就想办法，优化其时间复杂度**从 O(n<sup>3</sup>)到 O(n)**，以达到操作 `vdom` 节点，那这个优化过程其实我们所说的 `diff` 算法。
- 所以， `diff` 算法的时间复杂度为 `O(n)` 。

## 7、简述 diff 算法过程

- 首先，对比节点本身，要先判断是否为同一节点，如果不为相同节点，则删除该节点重新创建节点进行替换；
- 如果为相同节点时，进行 `patchVnode` ，判断如何对该节点的子节点进行处理，先判断一方有子节点一方没有子节点的情况（如果新的 `children` 没有子节点，则将旧的子节点移除）；
- 比较如果都有子节点，则进行 `updateChildren` ，判断如何对这些新老节点的子节点进行操作（ `diff` 核心）。
- 匹配时，找到相同的子节点，递归比较子节点。

**注意：** 在 `diff` 中，只对同层的子节点进行比较，放弃跨级的节点比较，使得时间复杂从 `O(n^3)` 降低值 `O(n)` ，也就是说，只有当新旧 `children` 都为多个子节点时才需要用核心的 `diff` 算法进行同层级比较。

## 8、vue 模板编译的原理是什么

- `vue` 在进行模板编译之后，会先转化成一个 `render` 函数，之后继续执行 `render` 函数，执行完成之后返回一个 `vnode` ；
- 在得到 `vnode` 之后，基于 `vnode` 的基础上，再执行 `patch` 和 `diff` 。

## 9、vue 为何是异步渲染，$nextTick 有何用？

- `vue` 是组件级更新，一旦当前组件里的数据变了，那么它就会去更新这个组件。
- 但是试想一下，如果当数据更改一次，组件就要去重新渲染一次，这样对性能来说都是不太友好的。
- 因此，为了防止数据一更新就更新组件，所以需要异步渲染来处理。
- 而异步渲染的核心的方法就是 `nextTick` ， `$nextTick` 可以在 `DOM` 更新完之后，**再触发回调**。

## 10、SPA 单页面应用是什么？

**SPA**，即**单页面应用**(Single Page Application)。所谓单页 `Web` 应用，就是只有一张 `Web` 页面的应用。单页应用程序 (SPA) 是加载单个 `HTML` 页面并在**用户与应用程序交互时**动态更新该页面的 `Web` 应用程序。浏览器一开始会加载必需的 `HTML` 、 `CSS` 和 `JavaScript` ，所有的操作都在这张页面上完成，都由 `JavaScript` 来控制。

现如今，为了配合单页面 `Web` 应用快速发展的节奏，各类**前端组件化技术栈**层出不穷。近几年来，通过不断的版本迭代， `vue` 和 `react` 两大技术栈脱颖而出，成为当下最受欢迎的两大技术栈。

## 11、hash 和 history 的区别是什么？

### （1）hash

- hash 变化会触发网页跳转，即浏览器的前进和后退。
- `hash` 可以改变 `url` ，但是不会触发页面重新加载（hash 的改变是记录在 `window.history` 中），即不会刷新页面。也就是说，所有页面的跳转都是在客户端进行操作。因此，这并不算是一次 `http` 请求，所以这种模式不利于 `SEO` 优化。`hash` 只能修改 `#` 后面的部分，所以只能跳转到与当前 `url` 同文档的 `url` 。
- `hash` 通过 `window.onhashchange` 的方式，来监听 `hash` 的改变，借此实现无刷新跳转的功能。
- `hash` 永远不会提交到 `server` 端（可以理解为只在前端自生自灭）。

### （2）history

- 新的 `url` 可以是与当前 `url` 同源的任意 `url` ，也可以是与当前 `url` 一样的地址，但是这样会导致的一个问题是，会把**重复的这一次操作**记录到栈当中。
- 通过 `history.state` ，添加任意类型的数据到记录中。
- 可以额外设置 `title` 属性，以便后续使用。
- 通过 `pushState` 、 `replaceState` 来实现无刷新跳转的功能。
- 使用 `history` 模式时，在对当前的页面进行刷新时，此时浏览器会重新发起请求。如果 `nginx` 没有匹配得到当前的 `url` ，就会出现 `404` 的页面。
- 而对于 `hash` 模式来说， 它虽然看着是改变了 `url` ，但不会被包括在 `http` 请求中。所以，它算是被用来**指导浏览器的动作**，并不影响服务器端。因此，改变 `hash` 并没有真正地改变 `url` ，所以页面路径还是之前的路径， `nginx` 也就不会拦截。
- 因此，在使用 `history` 模式时，需要**通过服务端来允许地址可访问**，如果没有设置，就很容易导致出现 `404` 的局面。

## 12、hash 和 history 两者的选择

- `to B` 的系统推荐用 `hash` ，相对简单且容易使用，且因为 `hash` 对 `url` 规范不敏感；
- `to C` 的系统，可以考虑选择 `H5 history` ，但是需**要服务端支持**；
- 能先用简单的，就别用复杂的，**要考虑成本和收益**。

# 🖨️ 五、vue3.x 知识预备

关于 `vue3` 模块，我将把**基础知识**和**原理**的内容结合在一起进行整理。**详细见下图 👇**

![vue3.x知识思维导图](https://img-blog.csdnimg.cn/2bf1e184acdb4e6bb366998c59f94dd7.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

> - 关于以上内容，已整理成博文，戳下方链接进入学习 👇
>
> - **原文 1：** [一文了解 vue3 基础新特性](https://juejin.cn/post/6976400439793172487)
>
> - **链接 1：** https://juejin.cn/post/6976400439793172487
>
> - **原文 2：** [敲黑板！vue3 重点！一文了解 Composition API 新特性：ref、toRef、toRefs](https://juejin.cn/post/6976679225239535629)
>
> - **链接 2：** https://juejin.cn/post/6976679225239535629
>
> - **原文 3：** [一文 get 一波 vue3.x 进阶新特性](https://juejin.cn/post/6977135865730433038)
>
> - **链接 3：** https://juejin.cn/post/6976040670939054093
>
> - **原文 4：** [vue2 的响应式原理学“废”了吗？继续观摩 vue3 响应式原理 Proxy](https://juejin.cn/post/6979368550225936392)
>
> - **链接 4：** https://juejin.cn/post/6979368550225936392

# ⌨️ 六、vue3.x 常见面试题

基于以上知识点，我们将其细分为面试中的常考题。**详细见下图 👇**

![vue3.x基础知识面试题整理](https://img-blog.csdnimg.cn/a87959b1fa964d7fba41a19b86d0c636.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

接下来对这些题进行一一解答。

## 1、vue3 和 vue2 有什么优势？

- `vue3` 比 `vue2` 来说，**性能上更好**，**代码体积更小**，并且有**更好的 ts 支持**。
- 同时，更为突出的特点是， `vue3` 有**更好的代码组织能力**，有**更好的逻辑抽离能力**，并且还有**更多各式各样的新功能**。
- 其中尤为突出的就是大家平常耳熟能详的 `Composition API` 和 `Options API` 。

## 2、描述 vue3 生命周期

以下给出 `Vue2` 与 `Vue3` 生命周期的对比。

| Vue2 生命周期(Options API) | Vue3 生命周期(Composition API) |                                                                      含义                                                                       |
| :------------------------: | :----------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|        beforeCreate        |             setup              |                                  在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用                                  |
|          created           |             setup              |                                                 页面还没有渲染，但是 vue 的实例已经初始化结束。                                                 |
|        beforeMount         |         onBeforeMount          |                                              在挂载开始之前被调用：相关的 render 函数首次被调用。                                               |
|          mounted           |           onMounted            |                                                               页面已经渲染完毕。                                                                |
|        beforeUpdate        |         onBeforeUpdate         |              数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。              |
|          updated           |           onUpdated            | 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。 |
|       beforeDestory        |        onBeforeUnmount         |                                                 实例销毁之前调用。在这一步，实例仍然完全可用。                                                  |
|          destroy           |          onUnmounted           |                                                              Vue 实例销毁后调用。                                                               |

## 3、如何看待 Composition API 和 Options API

对于 `Composition API` 和 `Options API` 的使用，**主要有以下几点建议：**

- 两者不建议共用，不然很容易引起混乱；
- 对于小型项目、或者业务逻辑比较简单的项目，建议使用 `Options API` ；
- 对于中大型项目、或者逻辑比较复杂的项目，建议使用 `Composition API` ，相较于 `Options API` 来说， `Composition API` 对大型项目更好一些，逻辑的抽离，代码的复用，使得大型项目得以更好的维护。

## 4、如何理解 ref、toRef 和 toRefs

### （1）ref 是什么

- `ref` 是可以生成 `值类型`（即基本数据类型） 的响应式数据；
- `ref` 可以用于**模板**和**reactive**；
- `ref` 通过 `.value` 来修改值（一定要记得加上 `.value` ）；
- `ref` 不仅可以用于**响应式**，还可以用于模板的 `DOM` 元素。

### （2）toRef 是什么

- `toRef` 可以响应对象 `Object` ，其针对的是某一个响应式对象（ `reactive` 封装）的属性 `prop` 。
- `toRef` 和对象 `Object` 两者**保持引用关系**，即一个改完另外一个也跟着改。

- `toRef` 如果用于普通对象（非响应式对象），产出的结果不具备响应式。**如下代码所示：**

```js
//普通对象
const state = {
  age: 20,
  name: 'monday',
};
//响应式对象
const state = reactive({
  age: 20,
  name: 'monday',
});
```

### （3）toRefs 是什么

- 与 `toRef` 不一样的是， `toRefs` 是针对整个对象的所有属性，目标在于将响应式对象（ `reactive` 封装）转换为普通对象。
- 普通对象里的每一个属性 `prop` 都对应一个 `ref` 。
- `toRefs` 和对象 `Object` 两者**保持引用关系**，即一个改完另外一个也跟着改。

## 5、vue3 升级了哪些重要的功能？

- createApp
- emits(父子组件间的通信)
- 多事件处理
- Fragment
- 移除 `.sync`
- 异步组件
- 移除 filter
- Teleport
- Suspense

## 6、Composition API 如何实现代码的逻辑复用？

- `composition API` 通过把代码的逻辑抽离出来进行封装，并把封装的内容直接引用到**生命周期**里面，已达到代码的逻辑复用效果。

## 7、Vue3 如何实现响应式？

- 利用 `reactive` 注册响应式对象，对**函数返回值**进行操作。
- 利用 `Proxy` 劫持数据的 `get` , `set` , `deleteProperty` , `has` , `own` 。
- 利用 `WeakMap` , `Map` , `Set` 来实现依赖收集。
- **缺点：** 使用大量 `ES6` 新增特性，旧版本浏览器兼容性差。

## 8、Watch 和 watchEffect 的区别是什么？

- 两者都可以监听 `data` 属性变化；
- `watch` 需要**明确监听哪个属性**；
- 而 `watchEffect` 会根据其中的属性，**自动监听**其变化。

## 9、setup 中如何获取组件实例?

在 `vue2 ` 中， `Options API` 可以使用 `this` 来获取组件的实例，但是到现在的 `vue3` ，已经被摒弃掉了。在 `setup` 和其他 `Composition API` 中没有 `this` ，但是它提供了一个 `getCurrentInstance` 来获取当前的实例。

## 10、vue3 为何比 vue2 快？

- Proxy 响应式
- PatchFlag
- hoistStatic
- cacheHandler
- SSR 优化
- tree-shaking

## 11、vite 是什么？

- `vite` 是一个前端的**打包工具**，是 `vue` 作者发起的一个项目；
- `vite` 借助 `vue` 的影响力，发展较快，和 `webpack` 有着一定的竞争关系；
- 优势： `vite` 使得程序**在开发环境下无需打包**，且启动非常快速。

## 12、Composition API 和 React hooks 的对比

- 前者 `setup` 只会被调用一次，而后者函数会被多次调用。
- 前者无需 `useMemo `和 `useCallback` （即缓存数据和缓存函数），因为 `setup` 只调用一次。
- 前者无需顾虑调用顺序，而后者需要保证 `hooks` 的顺序一致。
- 前者 `reactive+ref` 比后者的 `useState` ，要难理解。

# 📸 七、结束语

从 `vue2.x` 的基础知识，再到 `vue2.x` 的原理知识，最后到 `vue3.x` 的新特性和原理知识学习，全文贯穿着 `vue` 的知识要点及相关知识点所涉及到的一些面试题。

最后，关于这部分内容已整理成 `PDF` ，获取方式放在彩蛋里面，有需要的小伙伴自取 o！

# 🐣 彩蛋 One More Thing

## 🏷️ 往期推荐

`vue2.x` 和 `vue3.x` 的原理学习，累计博文输出 `11` 篇，以下是相关专栏文章~

- vue.js 基础知识 👉[基础知识专栏传送门](https://juejin.cn/column/6976040277068759077)
- vue.js 原理知识 👉[原理知识专栏传送门](https://juejin.cn/column/6976041758945706015)

面试专栏 `pdf` 版本：

- 微信搜索 `星期一研究室` 并关注，回复关键词 `vue面试pdf` 获取相关资料~

- 回复 `面试大全pdf` 可获取全系列资料！

更新地址：

- [offer 来了面试专栏](https://juejin.cn/column/7007991853089849351)

## 🏷️ 番外篇

- 如果这篇文章对你有用，记得**留个脚印 jio**再走哦~
- 以上就是本文的全部内容！我们下期见！👋👋👋
