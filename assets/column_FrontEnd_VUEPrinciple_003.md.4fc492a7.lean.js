import{_ as s,c as n,o as a,N as l}from"./chunks/framework.6510d215.js";const u=JSON.parse('{"title":"模板编译template的背后，究竟发生了什么事？带你了解template的纸短情长","description":"","frontmatter":{"title":"模板编译template的背后，究竟发生了什么事？带你了解template的纸短情长","author":"周一","date":"2021-06-29","categories":["前端开发"],"tags":["vue.js原理解析"],"sidebar":"auto"},"headers":[{"level":1,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":1,"title":"一、📑 初识模板编译","slug":"一、📑-初识模板编译","link":"#一、📑-初识模板编译","children":[{"level":2,"title":"1、vue 组件中使用 render 代替 template","slug":"_1、vue-组件中使用-render-代替-template","link":"#_1、vue-组件中使用-render-代替-template","children":[]},{"level":2,"title":"2、模板编译总结","slug":"_2、模板编译总结","link":"#_2、模板编译总结","children":[]}]},{"level":1,"title":"二、✏️ 感受模板编译的美","slug":"二、✏️-感受模板编译的美","link":"#二、✏️-感受模板编译的美","children":[{"level":2,"title":"1、with 语法","slug":"_1、with-语法","link":"#_1、with-语法","children":[{"level":3,"title":"（1）例子展示 🌰","slug":"_1-例子展示-🌰","link":"#_1-例子展示-🌰","children":[]},{"level":3,"title":"（2）知识点归纳","slug":"_2-知识点归纳","link":"#_2-知识点归纳","children":[]}]}]},{"level":1,"title":"三、📈 编译模板","slug":"三、📈-编译模板","link":"#三、📈-编译模板","children":[{"level":2,"title":"1、编译模板碎碎念","slug":"_1、编译模板碎碎念","link":"#_1、编译模板碎碎念","children":[]},{"level":2,"title":"2、编译模板过程","slug":"_2、编译模板过程","link":"#_2、编译模板过程","children":[{"level":3,"title":"（1）初始化一个 npm 环境","slug":"_1-初始化一个-npm-环境","link":"#_1-初始化一个-npm-环境","children":[]},{"level":3,"title":"（2）安装编译器","slug":"_2-安装编译器","link":"#_2-安装编译器","children":[]},{"level":3,"title":"（3）新建新文件","slug":"_3-新建新文件","link":"#_3-新建新文件","children":[]},{"level":3,"title":"（4）了解缩写函数","slug":"_4-了解缩写函数","link":"#_4-了解缩写函数","children":[]},{"level":3,"title":"（5）编译插值","slug":"_5-编译插值","link":"#_5-编译插值","children":[]},{"level":3,"title":"（6）编译表达式","slug":"_6-编译表达式","link":"#_6-编译表达式","children":[]},{"level":3,"title":"（7）编译属性和动态属性","slug":"_7-编译属性和动态属性","link":"#_7-编译属性和动态属性","children":[]},{"level":3,"title":"（8）编译条件","slug":"_8-编译条件","link":"#_8-编译条件","children":[]},{"level":3,"title":"（9）编译循环","slug":"_9-编译循环","link":"#_9-编译循环","children":[]},{"level":3,"title":"（10）编译事件","slug":"_10-编译事件","link":"#_10-编译事件","children":[]},{"level":3,"title":"（11）编译 v-model","slug":"_11-编译-v-model","link":"#_11-编译-v-model","children":[]}]},{"level":2,"title":"3、模板编译总结","slug":"_3、模板编译总结","link":"#_3、模板编译总结","children":[]}]},{"level":1,"title":"四、🔑 组件渲染/更新过程","slug":"四、🔑-组件渲染-更新过程","link":"#四、🔑-组件渲染-更新过程","children":[{"level":2,"title":"1、初识组件渲染/更新","slug":"_1、初识组件渲染-更新","link":"#_1、初识组件渲染-更新","children":[]},{"level":2,"title":"2、组件渲染/更新过程","slug":"_2、组件渲染-更新过程","link":"#_2、组件渲染-更新过程","children":[{"level":3,"title":"（1）初次渲染过程","slug":"_1-初次渲染过程","link":"#_1-初次渲染过程","children":[{"level":4,"title":"1）解析模板为 render 函数","slug":"_1-解析模板为-render-函数","link":"#_1-解析模板为-render-函数","children":[]},{"level":4,"title":"2）触发响应式","slug":"_2-触发响应式","link":"#_2-触发响应式","children":[]},{"level":4,"title":"3）执行 render 函数，生成 vnode","slug":"_3-执行-render-函数-生成-vnode","link":"#_3-执行-render-函数-生成-vnode","children":[]}]},{"level":3,"title":"（2）更新过程","slug":"_2-更新过程","link":"#_2-更新过程","children":[{"level":4,"title":"1）更新过程细述","slug":"_1-更新过程细述","link":"#_1-更新过程细述","children":[]},{"level":4,"title":"2）完成流程图","slug":"_2-完成流程图","link":"#_2-完成流程图","children":[]}]},{"level":3,"title":"（3）异步渲染","slug":"_3-异步渲染","link":"#_3-异步渲染","children":[]}]},{"level":2,"title":"3、小结","slug":"_3、小结","link":"#_3、小结","children":[]}]},{"level":1,"title":"五、✔️ 结束语","slug":"五、✔️-结束语","link":"#五、✔️-结束语","children":[]}],"relativePath":"column/FrontEnd/VUEPrinciple/003.md","lastUpdated":1685151998000}'),e={name:"column/FrontEnd/VUEPrinciple/003.md"},p=l("",169),o=[p];function t(c,r,i,y,D,F){return a(),n("div",null,o)}const C=s(e,[["render",t]]);export{u as __pageData,C as default};