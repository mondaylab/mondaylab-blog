import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.98c15f2e.js";const d=JSON.parse('{"title":"万字总结vue的基本使用和高级特性，周边插件vuex和vue-router任你挑选","description":"","frontmatter":{"title":"万字总结vue的基本使用和高级特性，周边插件vuex和vue-router任你挑选","author":"周一","date":"2021-06-21","categories":["前端开发"],"tags":["vue.js"],"sidebar":"auto"},"headers":[{"level":1,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":1,"title":"一、vue 的使用","slug":"一、vue-的使用","link":"#一、vue-的使用","children":[{"level":2,"title":"1、vue-cli","slug":"_1、vue-cli","link":"#_1、vue-cli","children":[]},{"level":2,"title":"2、基本使用","slug":"_2、基本使用","link":"#_2、基本使用","children":[{"level":3,"title":"（1）模板（插值，指令）","slug":"_1-模板-插值-指令","link":"#_1-模板-插值-指令","children":[]},{"level":3,"title":"（2）computed 和 watch","slug":"_2-computed-和-watch","link":"#_2-computed-和-watch","children":[]},{"level":3,"title":"（3）class 和 style","slug":"_3-class-和-style","link":"#_3-class-和-style","children":[]},{"level":3,"title":"（4）条件","slug":"_4-条件","link":"#_4-条件","children":[]},{"level":3,"title":"（5）循环（列表）渲染","slug":"_5-循环-列表-渲染","link":"#_5-循环-列表-渲染","children":[]},{"level":3,"title":"（6）事件","slug":"_6-事件","link":"#_6-事件","children":[]},{"level":3,"title":"（7）表单","slug":"_7-表单","link":"#_7-表单","children":[]}]},{"level":2,"title":"3、组件","slug":"_3、组件","link":"#_3、组件","children":[{"level":3,"title":"（1）props 和$emit（适合父子组件间的通信）","slug":"_1-props-和-emit-适合父子组件间的通信","link":"#_1-props-和-emit-适合父子组件间的通信","children":[]},{"level":3,"title":"（2）组件间通信 - 自定义事件","slug":"_2-组件间通信-自定义事件","link":"#_2-组件间通信-自定义事件","children":[]},{"level":3,"title":"（3）组件生命周期","slug":"_3-组件生命周期","link":"#_3-组件生命周期","children":[]}]}]},{"level":1,"title":"二、vue 的高级特性","slug":"二、vue-的高级特性","link":"#二、vue-的高级特性","children":[{"level":2,"title":"1、自定义 v-model","slug":"_1、自定义-v-model","link":"#_1、自定义-v-model","children":[]},{"level":2,"title":"2、$nextTick","slug":"_2、-nexttick","link":"#_2、-nexttick","children":[{"level":3,"title":"（1）知识点","slug":"_1-知识点","link":"#_1-知识点","children":[]},{"level":3,"title":"（2）例子展示 🌰","slug":"_2-例子展示-🌰","link":"#_2-例子展示-🌰","children":[]}]},{"level":2,"title":"3、slot 插槽","slug":"_3、slot-插槽","link":"#_3、slot-插槽","children":[{"level":3,"title":"（1）插槽的作用","slug":"_1-插槽的作用","link":"#_1-插槽的作用","children":[]},{"level":3,"title":"（2）三种插槽类型","slug":"_2-三种插槽类型","link":"#_2-三种插槽类型","children":[{"level":4,"title":"1）普通 slot 插槽","slug":"_1-普通-slot-插槽","link":"#_1-普通-slot-插槽","children":[]},{"level":4,"title":"2）作用域插槽 slot-scope","slug":"_2-作用域插槽-slot-scope","link":"#_2-作用域插槽-slot-scope","children":[]},{"level":4,"title":"3）具名插槽","slug":"_3-具名插槽","link":"#_3-具名插槽","children":[]}]}]},{"level":2,"title":"4、动态、异步组件","slug":"_4、动态、异步组件","link":"#_4、动态、异步组件","children":[{"level":3,"title":"（1）动态组件","slug":"_1-动态组件","link":"#_1-动态组件","children":[{"level":4,"title":"1）举个例子 🌰","slug":"_1-举个例子-🌰","link":"#_1-举个例子-🌰","children":[]},{"level":4,"title":"2）动态组件的用法和应用场景","slug":"_2-动态组件的用法和应用场景","link":"#_2-动态组件的用法和应用场景","children":[]},{"level":4,"title":"3）演示","slug":"_3-演示","link":"#_3-演示","children":[]}]},{"level":3,"title":"（2）异步组件","slug":"_2-异步组件","link":"#_2-异步组件","children":[]}]},{"level":2,"title":"5、keep-alive","slug":"_5、keep-alive","link":"#_5、keep-alive","children":[{"level":3,"title":"（1）定义和应用场景","slug":"_1-定义和应用场景","link":"#_1-定义和应用场景","children":[]},{"level":3,"title":"（2）举例 🌰","slug":"_2-举例-🌰","link":"#_2-举例-🌰","children":[]}]},{"level":2,"title":"6、mixin","slug":"_6、mixin","link":"#_6、mixin","children":[{"level":3,"title":"（1）mixin 是什么","slug":"_1-mixin-是什么","link":"#_1-mixin-是什么","children":[]},{"level":3,"title":"（2）mixin 的问题","slug":"_2-mixin-的问题","link":"#_2-mixin-的问题","children":[]},{"level":3,"title":"（3）举个栗子 🌰","slug":"_3-举个栗子-🌰","link":"#_3-举个栗子-🌰","children":[]}]}]},{"level":1,"title":"三、vue 的周边插件：vuex 和 vue-router","slug":"三、vue-的周边插件-vuex-和-vue-router","link":"#三、vue-的周边插件-vuex-和-vue-router","children":[{"level":2,"title":"1、vuex","slug":"_1、vuex","link":"#_1、vuex","children":[{"level":3,"title":"（1）vuex 基本概念","slug":"_1-vuex-基本概念","link":"#_1-vuex-基本概念","children":[]},{"level":3,"title":"（2）用于 vue 组件中的 API","slug":"_2-用于-vue-组件中的-api","link":"#_2-用于-vue-组件中的-api","children":[]},{"level":3,"title":"（3）图例","slug":"_3-图例","link":"#_3-图例","children":[]}]},{"level":2,"title":"2、vue-router","slug":"_2、vue-router","link":"#_2、vue-router","children":[{"level":3,"title":"（1）路由模式","slug":"_1-路由模式","link":"#_1-路由模式","children":[]},{"level":3,"title":"（2）路由配置","slug":"_2-路由配置","link":"#_2-路由配置","children":[{"level":4,"title":"1）动态路由","slug":"_1-动态路由","link":"#_1-动态路由","children":[]},{"level":4,"title":"2）懒加载","slug":"_2-懒加载","link":"#_2-懒加载","children":[]}]}]},{"level":2,"title":"3、导航钩子","slug":"_3、导航钩子","link":"#_3、导航钩子","children":[{"level":3,"title":"（1）全局导航钩子","slug":"_1-全局导航钩子","link":"#_1-全局导航钩子","children":[{"level":4,"title":"1）全局前置守卫","slug":"_1-全局前置守卫","link":"#_1-全局前置守卫","children":[]},{"level":4,"title":"2）全局后置钩子","slug":"_2-全局后置钩子","link":"#_2-全局后置钩子","children":[]}]},{"level":3,"title":"（2）单独路由独享钩子","slug":"_2-单独路由独享钩子","link":"#_2-单独路由独享钩子","children":[]},{"level":3,"title":"（3）组件内导航钩子","slug":"_3-组件内导航钩子","link":"#_3-组件内导航钩子","children":[]}]}]},{"level":1,"title":"四、结束语","slug":"四、结束语","link":"#四、结束语","children":[]}],"relativePath":"column/FrontEnd/VUE/001.md","filePath":"column/FrontEnd/VUE/001.md","lastUpdated":1685151998000}'),p={name:"column/FrontEnd/VUE/001.md"},o=l("",334),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};