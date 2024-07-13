import{_ as t,o as e,c as d,Q as a}from"./chunks/framework.98c15f2e.js";const _=JSON.parse('{"title":"你知道304吗？图解强缓存和协商缓存","description":"","frontmatter":{"title":"你知道304吗？图解强缓存和协商缓存","author":"周一","date":"2021-06-17","categories":["计算机基础知识"],"tags":["浏览器原理"],"sidebar":"auto"},"headers":[{"level":1,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":1,"title":"一、http 状态码","slug":"一、http-状态码","link":"#一、http-状态码","children":[{"level":2,"title":"1、引例阐述","slug":"_1、引例阐述","link":"#_1、引例阐述","children":[]},{"level":2,"title":"2、状态码分类","slug":"_2、状态码分类","link":"#_2、状态码分类","children":[]},{"level":2,"title":"3、常见状态码","slug":"_3、常见状态码","link":"#_3、常见状态码","children":[]},{"level":2,"title":"4、关于协议和规范","slug":"_4、关于协议和规范","link":"#_4、关于协议和规范","children":[]}]},{"level":1,"title":"二、http 方法","slug":"二、http-方法","link":"#二、http-方法","children":[{"level":2,"title":"1、传统的 methods","slug":"_1、传统的-methods","link":"#_1、传统的-methods","children":[]},{"level":2,"title":"2、现在的 methods","slug":"_2、现在的-methods","link":"#_2、现在的-methods","children":[]},{"level":2,"title":"3、Restful API","slug":"_3、restful-api","link":"#_3、restful-api","children":[{"level":3,"title":"（1）Restful API 是什么？","slug":"_1-restful-api-是什么","link":"#_1-restful-api-是什么","children":[]},{"level":3,"title":"（2）如何设计成一个资源？","slug":"_2-如何设计成一个资源","link":"#_2-如何设计成一个资源","children":[]}]}]},{"level":1,"title":"三、http 头部（http headers）","slug":"三、http-头部-http-headers","link":"#三、http-头部-http-headers","children":[{"level":2,"title":"1、常见的 Request headers","slug":"_1、常见的-request-headers","link":"#_1、常见的-request-headers","children":[]},{"level":2,"title":"2、常见的 Response headers","slug":"_2、常见的-response-headers","link":"#_2、常见的-response-headers","children":[]}]},{"level":1,"title":"四、http 缓存","slug":"四、http-缓存","link":"#四、http-缓存","children":[{"level":2,"title":"1、关于缓存的介绍","slug":"_1、关于缓存的介绍","link":"#_1、关于缓存的介绍","children":[{"level":3,"title":"（1）什么是缓存","slug":"_1-什么是缓存","link":"#_1-什么是缓存","children":[]},{"level":3,"title":"（2）为什么需要缓存？","slug":"_2-为什么需要缓存","link":"#_2-为什么需要缓存","children":[]},{"level":3,"title":"（3）哪些资源可以被缓存？——静态资源（js、css、img）","slug":"_3-哪些资源可以被缓存-——静态资源-js、css、img","link":"#_3-哪些资源可以被缓存-——静态资源-js、css、img","children":[]}]},{"level":2,"title":"2、http 缓存策略（强制缓存 + 协商缓存）","slug":"_2、http-缓存策略-强制缓存-协商缓存","link":"#_2、http-缓存策略-强制缓存-协商缓存","children":[{"level":3,"title":"（1）强制缓存","slug":"_1-强制缓存","link":"#_1-强制缓存","children":[{"level":4,"title":"1）强制缓存是什么？","slug":"_1-强制缓存是什么","link":"#_1-强制缓存是什么","children":[]},{"level":4,"title":"2）图例","slug":"_2-图例","link":"#_2-图例","children":[]},{"level":4,"title":"3）Cache-Control","slug":"_3-cache-control","link":"#_3-cache-control","children":[]},{"level":4,"title":"4）关于 Expires","slug":"_4-关于-expires","link":"#_4-关于-expires","children":[]}]},{"level":3,"title":"（2）协商缓存","slug":"_2-协商缓存","link":"#_2-协商缓存","children":[]}]},{"level":2,"title":"3、刷新操作方式，对缓存的影响","slug":"_3、刷新操作方式-对缓存的影响","link":"#_3、刷新操作方式-对缓存的影响","children":[{"level":3,"title":"（1）正常操作","slug":"_1-正常操作","link":"#_1-正常操作","children":[]},{"level":3,"title":"（2）手动刷新","slug":"_2-手动刷新","link":"#_2-手动刷新","children":[]},{"level":3,"title":"（3）强制刷新","slug":"_3-强制刷新","link":"#_3-强制刷新","children":[]}]}]},{"level":1,"title":"五、写在最后","slug":"五、写在最后","link":"#五、写在最后","children":[]}],"relativePath":"column/ComputerKnowledge/Browser/002.md","filePath":"column/ComputerKnowledge/Browser/002.md","lastUpdated":1681529906000}'),o={name:"column/ComputerKnowledge/Browser/002.md"},l=a("",120),i=[l];function r(c,h,s,n,p,u){return e(),d("div",null,i)}const m=t(o,[["render",r]]);export{_ as __pageData,m as default};