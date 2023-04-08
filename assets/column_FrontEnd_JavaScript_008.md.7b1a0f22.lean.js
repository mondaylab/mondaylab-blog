import{_ as s,c as n,o as a,N as l}from"./chunks/framework.6510d215.js";const C=JSON.parse('{"title":"一文梳理JavaScript中常见的七大继承方案","description":"","frontmatter":{"title":"一文梳理JavaScript中常见的七大继承方案","author":"周一","date":"2021-08-16","categories":["前端开发"],"tags":["JavaScript"],"sidebar":"auto"},"headers":[{"level":1,"title":"📖 序言","slug":"📖-序言","link":"#📖-序言","children":[]},{"level":1,"title":"📔 文章内容抢先看","slug":"📔-文章内容抢先看","link":"#📔-文章内容抢先看","children":[]},{"level":1,"title":"📝 一、基础知识预备","slug":"📝-一、基础知识预备","link":"#📝-一、基础知识预备","children":[{"level":2,"title":"1. 继承的定义","slug":"_1-继承的定义","link":"#_1-继承的定义","children":[]},{"level":2,"title":"2. 继承的方式","slug":"_2-继承的方式","link":"#_2-继承的方式","children":[]}]},{"level":1,"title":"📚 二、6 大常见继承方式","slug":"📚-二、6-大常见继承方式","link":"#📚-二、6-大常见继承方式","children":[{"level":2,"title":"1. 原型链继承 💡","slug":"_1-原型链继承-💡","link":"#_1-原型链继承-💡","children":[{"level":3,"title":"（1）构造函数、原型和实例的关系","slug":"_1-构造函数、原型和实例的关系","link":"#_1-构造函数、原型和实例的关系","children":[]},{"level":3,"title":"（2）基本思想","slug":"_2-基本思想","link":"#_2-基本思想","children":[]},{"level":3,"title":"（3）实现原型链继承","slug":"_3-实现原型链继承","link":"#_3-实现原型链继承","children":[]},{"level":3,"title":"（4）图例阐述","slug":"_4-图例阐述","link":"#_4-图例阐述","children":[]},{"level":3,"title":"（5）破坏原型链","slug":"_5-破坏原型链","link":"#_5-破坏原型链","children":[]},{"level":3,"title":"（6）优缺点","slug":"_6-优缺点","link":"#_6-优缺点","children":[]}]},{"level":2,"title":"2. 盗用构造函数继承 💡","slug":"_2-盗用构造函数继承-💡","link":"#_2-盗用构造函数继承-💡","children":[{"level":3,"title":"（1）基本思想","slug":"_1-基本思想","link":"#_1-基本思想","children":[]},{"level":3,"title":"（2）使用方式","slug":"_2-使用方式","link":"#_2-使用方式","children":[]},{"level":3,"title":"（3）实现原型链继承","slug":"_3-实现原型链继承-1","link":"#_3-实现原型链继承-1","children":[]},{"level":3,"title":"（4）优缺点","slug":"_4-优缺点","link":"#_4-优缺点","children":[]}]},{"level":2,"title":"3. 组合继承 💡","slug":"_3-组合继承-💡","link":"#_3-组合继承-💡","children":[{"level":3,"title":"（1）基本思想","slug":"_1-基本思想-1","link":"#_1-基本思想-1","children":[]},{"level":3,"title":"（2）实现组合继承","slug":"_2-实现组合继承","link":"#_2-实现组合继承","children":[]},{"level":3,"title":"（3）图例","slug":"_3-图例","link":"#_3-图例","children":[]},{"level":3,"title":"（4）优缺点","slug":"_4-优缺点-1","link":"#_4-优缺点-1","children":[]}]},{"level":2,"title":"4. 原型式继承 💡","slug":"_4-原型式继承-💡","link":"#_4-原型式继承-💡","children":[{"level":3,"title":"（1）基本思想","slug":"_1-基本思想-2","link":"#_1-基本思想-2","children":[]},{"level":3,"title":"（2）实现原型式继承","slug":"_2-实现原型式继承","link":"#_2-实现原型式继承","children":[]},{"level":3,"title":"（3）优缺点","slug":"_3-优缺点","link":"#_3-优缺点","children":[]}]},{"level":2,"title":"5. 寄生式继承 💡","slug":"_5-寄生式继承-💡","link":"#_5-寄生式继承-💡","children":[{"level":3,"title":"（1）基本思想","slug":"_1-基本思想-3","link":"#_1-基本思想-3","children":[]},{"level":3,"title":"（2）实现寄生式继承","slug":"_2-实现寄生式继承","link":"#_2-实现寄生式继承","children":[]},{"level":3,"title":"（3）优缺点","slug":"_3-优缺点-1","link":"#_3-优缺点-1","children":[]}]},{"level":2,"title":"6. 寄生式组合继承 💡","slug":"_6-寄生式组合继承-💡","link":"#_6-寄生式组合继承-💡","children":[{"level":3,"title":"（1）基本思想","slug":"_1-基本思想-4","link":"#_1-基本思想-4","children":[]},{"level":3,"title":"（2）实现寄生式组合继承","slug":"_2-实现寄生式组合继承","link":"#_2-实现寄生式组合继承","children":[]},{"level":3,"title":"（3）图例","slug":"_3-图例-1","link":"#_3-图例-1","children":[]},{"level":3,"title":"（4）优缺点","slug":"_4-优缺点-2","link":"#_4-优缺点-2","children":[]}]}]},{"level":1,"title":"🗞️ 三、Class 的继承","slug":"🗞️-三、class-的继承","link":"#🗞️-三、class-的继承","children":[{"level":2,"title":"1. 基本概念","slug":"_1-基本概念","link":"#_1-基本概念","children":[]},{"level":2,"title":"2. Object.getPrototypeOf()","slug":"_2-object-getprototypeof","link":"#_2-object-getprototypeof","children":[]},{"level":2,"title":"3. super 关键字","slug":"_3-super-关键字","link":"#_3-super-关键字","children":[{"level":3,"title":"（1）作为函数使用","slug":"_1-作为函数使用","link":"#_1-作为函数使用","children":[]},{"level":3,"title":"（2）作为对象使用","slug":"_2-作为对象使用","link":"#_2-作为对象使用","children":[{"level":4,"title":"1）在普通方法中","slug":"_1-在普通方法中","link":"#_1-在普通方法中","children":[]},{"level":4,"title":"2）在静态方法中","slug":"_2-在静态方法中","link":"#_2-在静态方法中","children":[]}]}]},{"level":2,"title":"4. 类的 prototype 属性和 ** proto ** 属性","slug":"_4-类的-prototype-属性和-proto-属性","link":"#_4-类的-prototype-属性和-proto-属性","children":[{"level":3,"title":"（1）class 的继承链","slug":"_1-class-的继承链","link":"#_1-class-的继承链","children":[]},{"level":3,"title":"（2）特殊情况继承","slug":"_2-特殊情况继承","link":"#_2-特殊情况继承","children":[]},{"level":3,"title":"（3）实例的 ** proto ** 属性","slug":"_3-实例的-proto-属性","link":"#_3-实例的-proto-属性","children":[]}]}]},{"level":1,"title":"📑 四、结束语","slug":"📑-四、结束语","link":"#📑-四、结束语","children":[]},{"level":1,"title":"🐣 彩蛋 One More Thing","slug":"🐣-彩蛋-one-more-thing","link":"#🐣-彩蛋-one-more-thing","children":[{"level":2,"title":"（：参考资料","slug":"参考资料","link":"#参考资料","children":[]},{"level":2,"title":"（：番外篇","slug":"番外篇","link":"#番外篇","children":[]}]}],"relativePath":"column/FrontEnd/JavaScript/008.md","lastUpdated":1644826256000}'),p={name:"column/FrontEnd/JavaScript/008.md"},o=l("",209),e=[o];function r(c,t,y,F,D,i){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{C as __pageData,b as default};
