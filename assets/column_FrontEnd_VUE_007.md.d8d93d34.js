import{_ as e,c as a,o as t,N as s}from"./chunks/framework.6510d215.js";const g=JSON.parse('{"title":"浅谈前端路由原理hash和history","description":"","frontmatter":{"title":"浅谈前端路由原理hash和history","author":"周一","date":"2021-08-08","categories":["前端开发"],"tags":["vue.js"],"sidebar":"auto"},"headers":[{"level":1,"title":"🎹 序言","slug":"🎹-序言","link":"#🎹-序言","children":[]},{"level":1,"title":"🎸 一、前端路由原理","slug":"🎸-一、前端路由原理","link":"#🎸-一、前端路由原理","children":[{"level":2,"title":"1、SPA","slug":"_1、spa","link":"#_1、spa","children":[]},{"level":2,"title":"2、什么时候需要路由","slug":"_2、什么时候需要路由","link":"#_2、什么时候需要路由","children":[]}]},{"level":1,"title":"🎷 二、Hash 模式","slug":"🎷-二、hash-模式","link":"#🎷-二、hash-模式","children":[{"level":2,"title":"1、定义","slug":"_1、定义","link":"#_1、定义","children":[]},{"level":2,"title":"2、网页 url 组成部分","slug":"_2、网页-url-组成部分","link":"#_2、网页-url-组成部分","children":[{"level":3,"title":"（1）了解几个 url 的属性","slug":"_1-了解几个-url-的属性","link":"#_1-了解几个-url-的属性","children":[]},{"level":3,"title":"（2）演示","slug":"_2-演示","link":"#_2-演示","children":[]}]},{"level":2,"title":"3、hash 的特点","slug":"_3、hash-的特点","link":"#_3、hash-的特点","children":[]}]},{"level":1,"title":"🎺 三、History 模式","slug":"🎺-三、history-模式","link":"#🎺-三、history-模式","children":[{"level":2,"title":"1、定义","slug":"_1、定义-1","link":"#_1、定义-1","children":[]},{"level":2,"title":"2、与 hash 的区别","slug":"_2、与-hash-的区别","link":"#_2、与-hash-的区别","children":[]},{"level":2,"title":"3、history 的 API","slug":"_3、history-的-api","link":"#_3、history-的-api","children":[]},{"level":2,"title":"4、history 的特点","slug":"_4、history-的特点","link":"#_4、history-的特点","children":[]},{"level":2,"title":"5、存在问题","slug":"_5、存在问题","link":"#_5、存在问题","children":[]},{"level":2,"title":"6、两者选择","slug":"_6、两者选择","link":"#_6、两者选择","children":[]}]},{"level":1,"title":"🎻 四、结束语","slug":"🎻-四、结束语","link":"#🎻-四、结束语","children":[]},{"level":1,"title":"🐣 彩蛋 One More Thing","slug":"🐣-彩蛋-one-more-thing","link":"#🐣-彩蛋-one-more-thing","children":[{"level":2,"title":"🏷️ 参考资料","slug":"🏷️-参考资料","link":"#🏷️-参考资料","children":[]},{"level":2,"title":"🏷️ 番外篇","slug":"🏷️-番外篇","link":"#🏷️-番外篇","children":[]}]}],"relativePath":"column/FrontEnd/VUE/007.md","lastUpdated":1644826256000}'),l={name:"column/FrontEnd/VUE/007.md"},o=s(`<h1 id="🎹-序言" tabindex="-1">🎹 序言 <a class="header-anchor" href="#🎹-序言" aria-label="Permalink to &quot;🎹 序言&quot;">​</a></h1><p>众所周知， <code>hash</code> 和 <code>history</code> 在前端面试中是很常考的一道题目。在学习本文内容之前，周一对 <code>hash</code> 和 <code>history</code> 的认知可能就在 <code>hash</code> 的 <code>url</code> 里面多了个 <code>#</code> ，而 <code>history</code> 就不会。然后，我认知里还有一个是只有 <code>history</code> 才能做前后端分离，而 <code>hash</code> 跟前后端分离没有关系。然而，现实是……</p><p><img src="https://img-blog.csdnimg.cn/24025103d9d34637a5b525c504b6b12c.gif#pic_center" alt="吓到跌倒"></p><p>对于前端路由来说， <code>hash</code> 和 <code>history</code> 都可以用于前后端分离项目，且两者有各自的特点和各自的使用场景，在使用过程中主要要了解当前项目所处的场景，以便于更好地判断使用哪一种路由模式更佳。下面进入本文的讲解~😜</p><h1 id="🎸-一、前端路由原理" tabindex="-1">🎸 一、前端路由原理 <a class="header-anchor" href="#🎸-一、前端路由原理" aria-label="Permalink to &quot;🎸 一、前端路由原理&quot;">​</a></h1><h2 id="_1、spa" tabindex="-1">1、SPA <a class="header-anchor" href="#_1、spa" aria-label="Permalink to &quot;1、SPA&quot;">​</a></h2><p><strong>SPA</strong>，即<strong>单页面应用</strong>(Single Page Application)。所谓单页 <code>Web</code> 应用，就是只有一张 <code>Web</code> 页面的应用。单页应用程序 (SPA) 是加载单个 <code>HTML</code> 页面并在<strong>用户与应用程序交互时</strong>动态更新该页面的 <code>Web</code> 应用程序。浏览器一开始会加载必需的 <code>HTML</code> 、 <code>CSS</code> 和 <code>JavaScript</code> ，所有的操作都在这张页面上完成，都由 <code>JavaScript</code> 来控制。</p><p>现如今，为了配合单页面 <code>Web</code> 应用快速发展的节奏，各类<strong>前端组件化技术栈</strong>层出不穷。近几年来，通过不断的版本迭代， <code>vue</code> 和 <code>react</code> 两大技术栈脱颖而出，成为当下最受欢迎的两大技术栈。</p><h2 id="_2、什么时候需要路由" tabindex="-1">2、什么时候需要路由 <a class="header-anchor" href="#_2、什么时候需要路由" aria-label="Permalink to &quot;2、什么时候需要路由&quot;">​</a></h2><p>对于现代开发的项目来说，稍微复杂一点的 <code>SPA</code> ，都需要用到<strong>路由</strong>。而 <code>vue-router</code> 正是 <code>vue</code> 的路由标配，且 <code>vue-router</code> 有<strong>两种模式</strong>： <code>hash</code> 和 <code>history</code> 。</p><p>下面就依据这两种模式来进行一一讲解。</p><h1 id="🎷-二、hash-模式" tabindex="-1">🎷 二、Hash 模式 <a class="header-anchor" href="#🎷-二、hash-模式" aria-label="Permalink to &quot;🎷 二、Hash 模式&quot;">​</a></h1><h2 id="_1、定义" tabindex="-1">1、定义 <a class="header-anchor" href="#_1、定义" aria-label="Permalink to &quot;1、定义&quot;">​</a></h2><p><code>hash</code> 模式是一种把前端路由的路径用井号 <code>#</code> 拼接在真实 <code>url</code> 后面的模式。当井号 <code>#</code> 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 <code>onhashchange</code> 事件。</p><h2 id="_2、网页-url-组成部分" tabindex="-1">2、网页 url 组成部分 <a class="header-anchor" href="#_2、网页-url-组成部分" aria-label="Permalink to &quot;2、网页 url 组成部分&quot;">​</a></h2><h3 id="_1-了解几个-url-的属性" tabindex="-1">（1）了解几个 url 的属性 <a class="header-anchor" href="#_1-了解几个-url-的属性" aria-label="Permalink to &quot;（1）了解几个 url 的属性&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">location.protocal</td><td style="text-align:center;">协议</td></tr><tr><td style="text-align:center;">location.hostname</td><td style="text-align:center;">主机名</td></tr><tr><td style="text-align:center;">location.host</td><td style="text-align:center;">主机</td></tr><tr><td style="text-align:center;">location.port</td><td style="text-align:center;">端口号</td></tr><tr><td style="text-align:center;">location.patchname</td><td style="text-align:center;">访问页面</td></tr><tr><td style="text-align:center;">location.search</td><td style="text-align:center;">搜索内容</td></tr><tr><td style="text-align:center;">location.hash</td><td style="text-align:center;">哈希值</td></tr></tbody></table><h3 id="_2-演示" tabindex="-1">（2）演示 <a class="header-anchor" href="#_2-演示" aria-label="Permalink to &quot;（2）演示&quot;">​</a></h3><p><strong>下面用一个网址来演示以上属性：</strong></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//http://127.0.0.1:8001/01-hash.html?a=100&amp;b=20#/aaa/bbb</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">protocal</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;http:&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">localtion</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hostname</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;127.0.0.1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">host</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;127.0.0.1:8001&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//8001</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pathname</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//&#39;01-hash.html&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">serach</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;?a=100&amp;b=20&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">location</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hash</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &#39;#/aaa/bbb&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_3、hash-的特点" tabindex="-1">3、hash 的特点 <a class="header-anchor" href="#_3、hash-的特点" aria-label="Permalink to &quot;3、hash 的特点&quot;">​</a></h2><ul><li><p>hash 变化会触发网页跳转，即浏览器的前进和后退。</p></li><li><p><code>hash</code> 可以改变 <code>url</code> ，但是不会触发页面重新加载（hash 的改变是记录在 <code>window.history</code> 中），即不会刷新页面。也就是说，所有页面的跳转都是在客户端进行操作。因此，这并不算是一次 <code>http</code> 请求，所以这种模式不利于 <code>SEO</code> 优化。<code>hash</code> 只能修改 <code>#</code> 后面的部分，所以只能跳转到与当前 <code>url</code> 同文档的 <code>url</code> 。</p></li><li><p><code>hash</code> 通过 <code>window.onhashchange</code> 的方式，来监听 <code>hash</code> 的改变，借此实现无刷新跳转的功能。</p></li><li><p><code>hash</code> 永远不会提交到 <code>server</code> 端（可以理解为只在前端自生自灭）。</p></li></ul><h1 id="🎺-三、history-模式" tabindex="-1">🎺 三、History 模式 <a class="header-anchor" href="#🎺-三、history-模式" aria-label="Permalink to &quot;🎺 三、History 模式&quot;">​</a></h1><h2 id="_1、定义-1" tabindex="-1">1、定义 <a class="header-anchor" href="#_1、定义-1" aria-label="Permalink to &quot;1、定义&quot;">​</a></h2><p><code>history API</code> 是 <code>H5</code> 提供的新特性，允许开发者<strong>直接更改前端路由</strong>，即更新浏览器 <code>URL</code> 地址而<strong>不重新发起请求</strong>。</p><h2 id="_2、与-hash-的区别" tabindex="-1">2、与 hash 的区别 <a class="header-anchor" href="#_2、与-hash-的区别" aria-label="Permalink to &quot;2、与 hash 的区别&quot;">​</a></h2><p>我们用一个例子来演示， <code>hash</code> 与 <code>history</code> 在浏览器下刷新时的区别。<strong>具体如下：</strong></p><p><strong>正常页面浏览</strong></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">https://github.com/xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">刷新页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">https://github.com/xxx/yyy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">刷新页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">https://github.com/xxx/yyy/zzz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">刷新页面</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>改造 H5 history 模式</strong></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">https://github.com/xxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">刷新页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">https://github.com/xxx/yyy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">前端跳转，不刷新页面</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">https://github.com/xxx/yyy/zzz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">前端跳转，不刷新页面</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_3、history-的-api" tabindex="-1">3、history 的 API <a class="header-anchor" href="#_3、history-的-api" aria-label="Permalink to &quot;3、history 的 API&quot;">​</a></h2><p>下面阐述几种 <code>HTML5</code> 新增的 <code>history API</code> 。<strong>具体如下表：</strong></p><table><thead><tr><th style="text-align:center;">API</th><th style="text-align:center;">定义</th></tr></thead><tbody><tr><td style="text-align:center;">history.pushState(data, title [, url])</td><td style="text-align:center;">pushState 主要用于<strong>往历史记录堆栈顶部添加一条记录</strong>。各参数解析如下：<strong>①data</strong>会在 onpopstate 事件触发时作为参数传递过去；<strong>②title</strong>为页面标题，当前所有浏览器都会忽略此参数；③<strong>url</strong>为页面地址，可选，缺少时表示为当前页地址</td></tr><tr><td style="text-align:center;">history.replaceState(data, title [, url])</td><td style="text-align:center;">更改当前的历史记录，参数同上； 上面的 pushState 是添加，这个更改</td></tr><tr><td style="text-align:center;">history.state</td><td style="text-align:center;">用于存储以上方法的 data 数据，不同浏览器的读写权限不一样</td></tr><tr><td style="text-align:center;">window.onpopstate</td><td style="text-align:center;">响应 pushState 或者 replaceState 的调用</td></tr></tbody></table><h2 id="_4、history-的特点" tabindex="-1">4、history 的特点 <a class="header-anchor" href="#_4、history-的特点" aria-label="Permalink to &quot;4、history 的特点&quot;">​</a></h2><p>对于 <code>history</code> 来说，主要有以下特点：</p><ul><li>新的 <code>url</code> 可以是与当前 <code>url</code> 同源的任意 <code>url</code> ，也可以是与当前 <code>url</code> 一样的地址，但是这样会导致的一个问题是，会把<strong>重复的这一次操作</strong>记录到栈当中。</li><li>通过 <code>history.state</code> ，添加任意类型的数据到记录中。</li><li>可以额外设置 <code>title</code> 属性，以便后续使用。</li><li>通过 <code>pushState</code> 、 <code>replaceState</code> 来实现无刷新跳转的功能。</li></ul><h2 id="_5、存在问题" tabindex="-1">5、存在问题 <a class="header-anchor" href="#_5、存在问题" aria-label="Permalink to &quot;5、存在问题&quot;">​</a></h2><p>对于 <code>history</code> 来说，确实解决了不少 <code>hash</code> 存在的问题，但是也带来了新的问题。<strong>具体如下：</strong></p><ul><li>使用 <code>history</code> 模式时，在对当前的页面进行刷新时，此时浏览器会重新发起请求。如果 <code>nginx</code> 没有匹配得到当前的 <code>url</code> ，就会出现 <code>404</code> 的页面。</li><li>而对于 <code>hash</code> 模式来说， 它虽然看着是改变了 <code>url</code> ，但不会被包括在 <code>http</code> 请求中。所以，它算是被用来指导浏览器的动作，并不影响服务器端。因此，改变 <code>hash</code> 并没有真正地改变 <code>url</code> ，所以页面路径还是之前的路径， <code>nginx</code> 也就不会拦截。</li><li>因此，在使用 <code>history</code> 模式时，需要<strong>通过服务端来允许地址可访问</strong>，如果没有设置，就很容易导致出现 <code>404</code> 的局面。</li></ul><h2 id="_6、两者选择" tabindex="-1">6、两者选择 <a class="header-anchor" href="#_6、两者选择" aria-label="Permalink to &quot;6、两者选择&quot;">​</a></h2><p>下面我们再来介绍下在实际的项目中，如何对这两者进行选择。<strong>具体如下：</strong></p><ul><li><code>to B</code> 的系统推荐用 <code>hash</code> ，相对简单且容易使用，且因为 <code>hash</code> 对 <code>url</code> 规范不敏感；</li><li><code>to C</code> 的系统，可以考虑选择 <code>H5 history</code> ，但是需<strong>要服务端支持</strong>；</li><li>能先用简单的，就别用复杂的，<strong>要考虑成本和收益</strong>。</li></ul><h1 id="🎻-四、结束语" tabindex="-1">🎻 四、结束语 <a class="header-anchor" href="#🎻-四、结束语" aria-label="Permalink to &quot;🎻 四、结束语&quot;">​</a></h1><p>对于 <code>hash</code> 和 <code>history</code> 来讲，要清楚两者的区别以及两者各自的使用场景，还有各自的使用特点和优缺点。以上文章只是对前端路由原理的浅谈，希望对大家有帮助~</p><p>另下方第三个彩蛋放了一篇关于实现 <code>vue-router</code> 的文章，学有余力的小伙伴有需要自取 o！</p><h1 id="🐣-彩蛋-one-more-thing" tabindex="-1">🐣 彩蛋 One More Thing <a class="header-anchor" href="#🐣-彩蛋-one-more-thing" aria-label="Permalink to &quot;🐣 彩蛋 One More Thing&quot;">​</a></h1><h2 id="🏷️-参考资料" tabindex="-1">🏷️ 参考资料 <a class="header-anchor" href="#🏷️-参考资料" aria-label="Permalink to &quot;🏷️ 参考资料&quot;">​</a></h2><p>jarvis👉<a href="https://juejin.cn/post/6844904151206330375#heading-6" target="_blank" rel="noreferrer">在 SPA 项目的路由中，注意 hash 与 history 的区别</a></p><p>vue-router 官方文档 👉<a href="https://router.vuejs.org/zh/" target="_blank" rel="noreferrer">vue-router 的两种模式</a></p><p>值得一看 👉<a href="https://juejin.cn/post/6988316779818778631" target="_blank" rel="noreferrer">从使用到自己实现简单 Vue Router 看这个就行了</a></p><h2 id="🏷️-番外篇" tabindex="-1">🏷️ 番外篇 <a class="header-anchor" href="#🏷️-番外篇" aria-label="Permalink to &quot;🏷️ 番外篇&quot;">​</a></h2><blockquote><ul><li>关注公众号<strong>星期一研究室</strong>，第一时间关注优质文章，<strong>更多精选专栏待你解锁</strong>~</li><li>如果这篇文章对你有用，记得<strong>留个脚印 jio</strong>再走哦~</li><li>以上就是本文的全部内容！我们下期见！👋👋👋</li></ul></blockquote>`,53),n=[o];function r(c,i,d,h,p,u){return t(),a("div",null,n)}const b=e(l,[["render",r]]);export{g as __pageData,b as default};