import{_ as t,o as e,c as o,Q as l}from"./chunks/framework.98c15f2e.js";const g=JSON.parse('{"title":"《从前端到全栈》小册钻研","description":"","frontmatter":{"title":"《从前端到全栈》小册钻研","author":"周一","date":"2023-07-22","categories":["服务端开发"],"tags":["Node.js"],"sidebar":"auto"},"headers":[{"level":1,"title":"《从前端到全栈》小册钻研","slug":"《从前端到全栈》小册钻研","link":"#《从前端到全栈》小册钻研","children":[{"level":2,"title":"第一部分：实现一个文章生成器","slug":"第一部分-实现一个文章生成器","link":"#第一部分-实现一个文章生成器","children":[]},{"level":2,"title":"第二部分：前后端打通todolist功能","slug":"第二部分-前后端打通todolist功能","link":"#第二部分-前后端打通todolist功能","children":[]}]}],"relativePath":"column/BackEnd/Node/002_fullStack.md","filePath":"column/BackEnd/Node/002_fullStack.md","lastUpdated":1699052479000}'),a={name:"column/BackEnd/Node/002_fullStack.md"},r=l('<h1 id="《从前端到全栈》小册钻研" tabindex="-1">《从前端到全栈》小册钻研 <a class="header-anchor" href="#《从前端到全栈》小册钻研" aria-label="Permalink to &quot;《从前端到全栈》小册钻研&quot;">​</a></h1><h2 id="第一部分-实现一个文章生成器" tabindex="-1">第一部分：实现一个文章生成器 <a class="header-anchor" href="#第一部分-实现一个文章生成器" aria-label="Permalink to &quot;第一部分：实现一个文章生成器&quot;">​</a></h2><p>这部分主要基于一个<a href="https://github.com/menzi11/BullshitGenerator" target="_blank" rel="noreferrer">开源库</a>做了一些改进，让生成的文章语句更加通顺一些。嗯，虽然还是狗屁不通。🤡👀</p><p>具体代码仓库：<a href="https://github.com/mondaylab/bullshit-generator-js-mondaylab" target="_blank" rel="noreferrer">https://github.com/mondaylab/bullshit-generator-js-mondaylab</a></p><h2 id="第二部分-前后端打通todolist功能" tabindex="-1">第二部分：前后端打通todolist功能 <a class="header-anchor" href="#第二部分-前后端打通todolist功能" aria-label="Permalink to &quot;第二部分：前后端打通todolist功能&quot;">​</a></h2><p><strong>基础：</strong></p><ul><li>利用<code>node</code>的<code>tcp</code>、<code>http</code>等模块，进一步深入理解和实践<strong>强缓存、协商缓存和文件压缩</strong>在实际场景中的应用。</li></ul><p><strong>实现todolist功能：</strong></p><ul><li>以<strong>拦截切面</strong>为引导，实现能够注册多个拦截切面的函数，同时，将这些拦截切面包装成一个异步的洋葱模型的拦截器框架。</li><li>有了拦截切面后，还实现了动态路由，让用户能够通过 <code>/</code> 的方式，直接访问到页面或者接口数据。</li><li>与此同时，使用<code>sqlite</code>作为连接的数据库，用来存储用户<u>登录信息</u>、<u>session信息</u>和<u>todolist信息</u>。</li><li>目前已实现接口：获取列表(/list)、增加todo信息(/add)、修改todo信息(/update)、登录功能(/login) 。</li></ul><p><strong>优化环节：</strong></p><ul><li>使用<code>node.js</code>的内置模块<code>Cluster</code>实现多进程的<code>HTTP</code>服务器；</li><li>利用多进程的特点，实现<strong>实时热更新服务器</strong>的功能。</li></ul><p><strong>具体代码仓库：</strong></p><ul><li>代码仓库链接戳：<a href="https://github.com/mondaylab/http-impl" target="_blank" rel="noreferrer">https://github.com/mondaylab/http-impl</a></li></ul>',13),i=[r];function s(d,n,c,u,h,p){return e(),o("div",null,i)}const m=t(a,[["render",s]]);export{g as __pageData,m as default};
