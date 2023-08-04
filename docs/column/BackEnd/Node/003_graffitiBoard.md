---
title: 工程化基础概念
author: 周一
date: '2023-07-22'
categories:
  - 服务端开发
tags:
  - Node.js
sidebar: 'auto'
---






# 一、什么是前端工程化？

前端工程本质上是软件工程的一种，关注的是性能、稳定性、可用性、可维护性等方面，注重基本的开发效率、运行效率的同时，思考维护效率。一切以这些为目标的工作都是“前端工程化”。

**工程化是一种思想而不是某种技术。**

如果我们只是用 `JS` 编写一小段程序，让它跑在我们自己选定的运行时环境，比如某个确定版本的浏览器，或者确定版本的 `Node.js` 运行时中，可能并不需要前端工程化。但如果我们实现一个比较复杂的 `Web` 应用，需要让代码跑在不同的环境，以及与多人一同协作，考虑工程化就非常有必要了。

对于前端工程化来说，通常要解决以下问题：

1. 模块化和组件化：如何让我们编写的代码能够被其他人、其他应用、其他模块所**复用**（这一部分可以参考《[前端工程师进阶 10 日谈](https://juejin.cn/book/6891929939616989188/section)》）。
2. 兼容性和跨平台性：如何让我们编写的代码在不同的平台、不同的环境中正确运行。
3. 规范化和标准化：如何保持代码风格的统一、接口设计的标准、模型和范式的规范，以保证项目的可维护性。
4. 自动化测试和持续集成：如何让我们的代码能够被自动测试，并在发布时通过 `CI/CD` 验证，以保证代码的稳定性和可靠性。
5. 处理静态资源：将 `HTML` 压缩，`CSS` 和 `JS` 上传到 `CDN`，以优化网页访问速度。
6. 解决安全性问题：防止 `CSRF` 和 `XSS` 等。





# 二、关于Babel

## 1、babel的作用

- 可以使用`Babel`来编译`JavaScript`代码，以让其能够适配不同版本的运行环境。
- 不过呢，只让`Babel`做这样的工作有些“大材小用”了。`Babel`真正的强大之处在于它可以实现各种插件，用来解析和转换`JavaScript`代码。这些插件可以实现很多功能，甚至可以实现新的语法。



## 2、Babel 插件机制

首先，我们来简单了解一下 `Babel` 和它的插件机制。

Babel 是通用的多功能 JavaScript 编译器，准确的说，它是一个 JavaScript 代码转换器（transpiler）。它的核心功能是接收一段 JavaScript 代码，然后对这段代码进行转换，最后输出转换后的代码。

这个过程通常分为几个步骤：

![img](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202307290727173.awebp)

首先是**解析**(parse)，在这个步骤里，`Babel` 接收代码，并将代码解析成抽象语法树（Abstract Syntex Tree）。

接着是**转换**(transpile)，在这个步骤里，`Babel` 会对抽象语法树进行遍历（traverse）和替换（replace）。

最后是**生成**(generate)，根据新的抽象语法树生成编译后的代码。

`Babel` 的插件机制主要就是在转换阶段对抽象语法树进行遍历和替换的过程。`Babel`插件的作用就是在这个过程中，对抽象语法树进行修改，从而达到转换的目的。



## 3、使用打包器打包

前面我们介绍了 `Babel`，它可以将采用新语言特性或新规范的 `JS` 文件编译成旧版本的文件，以便这些文件在旧版本浏览器中运行。但是，如果我们的项目很复杂，有多个模块，仅有 `Babel` 编译还不够，因为旧版本浏览器不支持模块化语法，我们不能很方便地引入多个模块。这时，我们需要使用 **打包器（bundler）** 将多个模块打包成一个文件，以便在旧版本浏览器中运行。

打包器不仅可以将模块化的项目编译成一个文件，还能够减少浏览器加载 `JS` 文件的数量，节省 `http` 请求数量，从而能够提高 `Web` 应用的性能。

在 `JavaScript` 社区，有很多打包器，比如 `Webpack`、`Rollup`、`Parcel`、`ESbuild`、`Vite` 等等。这些打包器都有自己的特点，比如 `Webpack` 支持模块化、打包、压缩、热更新等功能，而 `Rollup` 只支持模块化和打包，而且打包后的文件体积更小，至于 `ESBuild`、`Vite` 等新一代的打包器，则采用性能更高的编程语言（如Golang）编写，打包速度更快。



# 三、关于测试

## 1、测试框架

可以选择的 `JavaScript` 单元测试框架非常多，比较有名的有 `Mocha`、`Jasmine`、`AVA`、`Jest` 等等。在这里，选择 [Jest](https://link.juejin.cn/?target=https%3A%2F%2Fjestjs.io%2F) 作为我们的单元测试框架。

Jest 框架的特点有：

- 由 Facebook 开发和维护
- 开箱即用配置少，API 简单
- 支持断言（Assertion）和仿真（Mock）
- 支持快照（Snap）测试
- 基于 Istanbul 的测试覆盖度报告
- 智能并行测试，执行速度快



## 2、测试配置

- 如果想要让最新的`Jest` 原生支持`ESM`的特性，那么需要安装`crooss-env`。
- 同时，需要在`.eslintrc.js`中添加`env`配置项`jest: true`，这样，`eslint`就可以识别`jest`框架定义的方法了。
- 也可以使用`Jest`检查测试覆盖率，对于测试覆盖度来说，它是评判一个库代码可靠性和质量的一个重要衡量标准，一般来说，**测试覆盖度越高，库的可靠性和质量越高**。
- 要用 `Jest` 检查测试覆盖率也非常简单，我们只需在`package.json`文件中添加一个脚本命令`test:coverage`：

```json
{
  ...
  "scripts": {
    ...省略...

    "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest",
    "test:coverage": "cross-env NODE_OPTIONS=--experimental-vm-modules jest --coverage",
  },
}
```



## 3、Jest使用

- `Jest` 框架以 `test` 方法定义测试用例，它的第一个参数是**用例名**，第二个参数是一个**回调函数**，表示一个测试用例。框架会自动执行这个测试用例中的代码。

- `Jest` 支持语义化的断言，可以用**非常语义化的方式**书写测试规则，比如代码`expect(m1).toBe(m2)` ，它的含义是期望 `m1` 等于 `m2`。这里 Jest 会深度比较两个对象的每个属性，所以相当于 `deepEquals`。关于 Jest 支持的各种断言，可以查看[官方文档](https://jestjs.io/docs/expect)。

- `Jest` 框架中，`test` 的回调函数不仅可以支持普通函数，也可以支持**异步函数**。所以，如果要测试异步方法，可以如下面代码这么用（async/await），非常方便。

  ```js
  test('some case', async () => {
    const result = await foo.bar();
    expect(result).toBe('something');
  });
  ```

- 运行测试命令行：`npm test`，默认执行项目目录下所有 `*.test.js` 文件





# 四、持续集成与品质管理

## 1、持续集成

```yaml
# 工作流名称
name: CI

# on：触发条件，这里我们设置的是当代码提交到 master 分支时触发
on:
  push:
    branches:
      - master

# jobs：工作流中的任务，这里我们只有一个任务，就是运行单元测试。
jobs:
  run-tests:
    runs-on: ubuntu-latest # 指定执行环境，指定ubuntu-latest，是github提供的虚拟环境。我们也可以使用macos-latest或者windows-latest
    strategy: # strategy指定了任务的执行策略，这里我们指定 node 的版本为 16
      matrix:
        node-version: [16]
    # steps指定了任务的执行步骤，这里我们有四个步骤：
    # actions/checkout@v3：这是一个 GitHub Action，用于将代码 checkout 到虚拟机中
    # actions/setup-node@v3：这是一个 GitHub Action，用于安装指定版本的 node
   # Install dependencies：安装依赖
   # test 运行单元测试
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          registry-url: https://registry.npmjs.org
      - name: Install dependencies 📦️
        run: npm install
       # 为了让Code Climate可以从git action获取信息
      - name: Code Climate Coverage Action # CC_TEST_REPORTER_ID 是  code climate的一个token
        uses: paambaati/codeclimate-action@v3.2.0
        env:
          CC_TEST_REPORTER_ID: 0cad7f41ea82b1b3ae2b1d64cc05c040ed59a17c16ca0a125ff711031b5905be
        with:
          coverageCommand: npm run test:coverage
          debug: true

```



## 2、品质管理

帮助我们管理代码质量的工具：`SonarCode`、`Code Climate`等。这些工具可以帮助我们分析代码的质量，包括代码的复杂度、测试覆盖率、代码的重复率等。我们可以根据这些指标来判断代码的质量，从而决定是否需要对代码进行重构。

代码测试覆盖率默认并不能在 `Code Climate` 中给出，因为 `Code Climate` 不会自动分析测试代码，而是从 `GitHub Actions` 中获取信息.因此，我们需要将 `Code Climate` 和 `GitHub Actions` 进行集成，这样才能在 `Code Climate` 中看到测试覆盖率的指标。













