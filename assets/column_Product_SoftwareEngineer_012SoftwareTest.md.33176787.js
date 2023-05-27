import{_ as l,c as t,o as r,N as n}from"./chunks/framework.6510d215.js";const _=JSON.parse('{"title":"『软件工程12』软件工程实践方法——软件测试","description":"","frontmatter":{"title":"『软件工程12』软件工程实践方法——软件测试","author":"周一","date":"2021-06-04","categories":["产品汪"],"tags":["软件工程"],"sidebar":"auto"},"headers":[{"level":1,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":1,"title":"一、软件测试概述","slug":"一、软件测试概述","link":"#一、软件测试概述","children":[{"level":2,"title":"1、软件测试的目的","slug":"_1、软件测试的目的","link":"#_1、软件测试的目的","children":[{"level":3,"title":"（1）从用户和开发者角度","slug":"_1-从用户和开发者角度","link":"#_1-从用户和开发者角度","children":[]},{"level":3,"title":"（2）Myers 软件测试目的","slug":"_2-myers-软件测试目的","link":"#_2-myers-软件测试目的","children":[]}]}]},{"level":1,"title":"2、软件测试的原则","slug":"_2、软件测试的原则","link":"#_2、软件测试的原则","children":[{"level":2,"title":"3、软件测试的对象","slug":"_3、软件测试的对象","link":"#_3、软件测试的对象","children":[]},{"level":2,"title":"4、测试信息流","slug":"_4、测试信息流","link":"#_4、测试信息流","children":[]},{"level":2,"title":"5、测试与软件开发各阶段的关系","slug":"_5、测试与软件开发各阶段的关系","link":"#_5、测试与软件开发各阶段的关系","children":[]}]},{"level":1,"title":"二、软件测试用例","slug":"二、软件测试用例","link":"#二、软件测试用例","children":[{"level":2,"title":"1、黑盒测试概述","slug":"_1、黑盒测试概述","link":"#_1、黑盒测试概述","children":[]},{"level":2,"title":"2、白盒测试概述","slug":"_2、白盒测试概述","link":"#_2、白盒测试概述","children":[]},{"level":2,"title":"3、白盒测试方法","slug":"_3、白盒测试方法","link":"#_3、白盒测试方法","children":[]},{"level":2,"title":"4、条件测试路径选择","slug":"_4、条件测试路径选择","link":"#_4、条件测试路径选择","children":[]},{"level":2,"title":"5、循环测试路径选择","slug":"_5、循环测试路径选择","link":"#_5、循环测试路径选择","children":[{"level":3,"title":"（1）简单循环","slug":"_1-简单循环","link":"#_1-简单循环","children":[]},{"level":3,"title":"（2）嵌套循环","slug":"_2-嵌套循环","link":"#_2-嵌套循环","children":[]},{"level":3,"title":"（3）连锁循环","slug":"_3-连锁循环","link":"#_3-连锁循环","children":[]},{"level":3,"title":"（4）非结构循环","slug":"_4-非结构循环","link":"#_4-非结构循环","children":[]}]},{"level":2,"title":"6、基本路径测试","slug":"_6、基本路径测试","link":"#_6、基本路径测试","children":[]},{"level":2,"title":"7、黑盒测试的测试用例设计","slug":"_7、黑盒测试的测试用例设计","link":"#_7、黑盒测试的测试用例设计","children":[]}]},{"level":1,"title":"三、软件测试步骤","slug":"三、软件测试步骤","link":"#三、软件测试步骤","children":[{"level":2,"title":"1、单元测试","slug":"_1、单元测试","link":"#_1、单元测试","children":[{"level":3,"title":"（1）单元测试的定义","slug":"_1-单元测试的定义","link":"#_1-单元测试的定义","children":[]},{"level":3,"title":"（2）单元测试的内容","slug":"_2-单元测试的内容","link":"#_2-单元测试的内容","children":[]},{"level":3,"title":"（3）单元测试的步骤","slug":"_3-单元测试的步骤","link":"#_3-单元测试的步骤","children":[]}]},{"level":2,"title":"2、组装测试","slug":"_2、组装测试","link":"#_2、组装测试","children":[{"level":3,"title":"（1）组装测试的什么","slug":"_1-组装测试的什么","link":"#_1-组装测试的什么","children":[]},{"level":3,"title":"（2）组装测试需考虑问题","slug":"_2-组装测试需考虑问题","link":"#_2-组装测试需考虑问题","children":[]}]},{"level":2,"title":"3、确认测试","slug":"_3、确认测试","link":"#_3、确认测试","children":[{"level":3,"title":"（1）确认测试是什么","slug":"_1-确认测试是什么","link":"#_1-确认测试是什么","children":[]},{"level":3,"title":"（2）确认测试的步骤","slug":"_2-确认测试的步骤","link":"#_2-确认测试的步骤","children":[]}]},{"level":2,"title":"4、系统测试","slug":"_4、系统测试","link":"#_4、系统测试","children":[{"level":3,"title":"（1）系统测试是什么","slug":"_1-系统测试是什么","link":"#_1-系统测试是什么","children":[]}]}]},{"level":1,"title":"四、写在最后","slug":"四、写在最后","link":"#四、写在最后","children":[]}],"relativePath":"column/Product/SoftwareEngineer/012SoftwareTest.md","lastUpdated":1685151998000}'),o={name:"column/Product/SoftwareEngineer/012SoftwareTest.md"},s=n('<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>在一项系统软件完成之后，且在上线之前，需要经过不断的软件测试，找出 <code>bug</code> 和错误，不断修补，才能正式上线。在下面的这篇文章中，将讲解软件测试的一些基础知识以及测试用例的设计和软件测试的步骤。</p><p>接下来开始进行讲解。</p><h1 id="一、软件测试概述" tabindex="-1">一、软件测试概述 <a class="header-anchor" href="#一、软件测试概述" aria-label="Permalink to &quot;一、软件测试概述&quot;">​</a></h1><h2 id="_1、软件测试的目的" tabindex="-1">1、软件测试的目的 <a class="header-anchor" href="#_1、软件测试的目的" aria-label="Permalink to &quot;1、软件测试的目的&quot;">​</a></h2><h3 id="_1-从用户和开发者角度" tabindex="-1">（1）从用户和开发者角度 <a class="header-anchor" href="#_1-从用户和开发者角度" aria-label="Permalink to &quot;（1）从用户和开发者角度&quot;">​</a></h3><p><strong>基于不同的立场，存在着两种完全不同的测试目的：</strong></p><ul><li><p><strong>从用户的角度出发</strong>，普遍希望通过软件测试暴露软件中隐藏的错误和缺陷，以考虑是否可接受该产品。</p></li><li><p><strong>从软件开发者的角度出发</strong>，则希望测试表明软件产品中不存在错误的过程，验证该软件已正确地实现了用户的要求，树立人们对软件质量的信心。</p></li></ul><h3 id="_2-myers-软件测试目的" tabindex="-1">（2）Myers 软件测试目的 <a class="header-anchor" href="#_2-myers-软件测试目的" aria-label="Permalink to &quot;（2）Myers 软件测试目的&quot;">​</a></h3><ul><li><p><strong>测试</strong>是程序的执行过程，目的在于发现错误；</p></li><li><p>一个好的测试用例在于<strong>能发现至今未发现的错误</strong>；</p></li><li><p>一个成功的测试是<strong>发现了至今未发现的错误的测试</strong>。</p></li></ul><p>总结来说就是，测试的目的是想以最少的时间和人力，<strong>系统地找出软件中潜在的各种错误和缺陷</strong>。如果我们成功地实施了测试，我们就能够发现软件中的错误。测试的附带收获是，它能够证明<strong>软件的功能和性能与需求说明相符合</strong>。实施测试收集到的测试结果数据为<strong>可靠性分析</strong>提供了依据。</p><h1 id="_2、软件测试的原则" tabindex="-1">2、软件测试的原则 <a class="header-anchor" href="#_2、软件测试的原则" aria-label="Permalink to &quot;2、软件测试的原则&quot;">​</a></h1><ul><li>应当把“<strong>尽早地和不断地进行软件测试</strong>”作为软件开发者的座右铭。</li><li>测试用例应由<strong>测试输入数据</strong>和<strong>对应的预期输出结果</strong>这两部分组成。</li><li>程序员应<strong>避免检查自己的程序</strong>。</li><li>在设计测试用例时，应包括<strong>合理的输入条件</strong>和<strong>不合理的输入条件</strong>。</li><li>充分注意测试中的群集现象。经验表明，测试后程序中<strong>残存的错误数目</strong>与该程序中<strong>已发现的错误数目</strong>成正比。</li><li>严格执行<strong>测试计划</strong>，排除测试的随意性。</li><li>应当对每一个<strong>测试结果</strong>做全面检查。</li><li>妥善保存测试计划，测试用例，出错统计和最终分析报告，为<strong>维护</strong>提供方便。</li></ul><h2 id="_3、软件测试的对象" tabindex="-1">3、软件测试的对象 <a class="header-anchor" href="#_3、软件测试的对象" aria-label="Permalink to &quot;3、软件测试的对象&quot;">​</a></h2><p>软件测试并不等于程序测试。软件测试应贯穿于软件定义与开发的整个期间。</p><p>需求规格说明、概要设计规格说明、详细设计规格说明以及源程序，都应成为软件测试的对象。</p><p><strong>简单来说</strong>，就是程序、数据和文档都应该成为测试对象。</p><h2 id="_4、测试信息流" tabindex="-1">4、测试信息流 <a class="header-anchor" href="#_4、测试信息流" aria-label="Permalink to &quot;4、测试信息流&quot;">​</a></h2><p><strong>测试信息的步骤：</strong></p><ul><li>软件配置（对象）：软件需求规格说明、软件设计规格说明、源代码等；</li><li>测试配置（方法）：测试计划、测试用例、测试程序等；</li><li>测试工具：测试数据自动生成程序、静态分析程序、动态分析程序、测试结果分析程序、以及驱动测试的测试数据库等等。</li><li>测试结果分析：比较实测结果与预期结果，评价错误是否发生。</li><li>排错（调试）：对已经发现的错误进行错误定位和确定出错性质，并改正这些错误，同时修改相关的文档。</li><li>修正后的文档再测试：直到通过测试为止。</li></ul><p><strong>得出结论：</strong></p><p>通过收集和分析测试结果数据，对软件建立<strong>可靠性</strong>模型。</p><p>利用可靠性分析，评价软件质量。</p><p>如果测试发现不了错误，可以肯定，测试配置考虑得不够细致充分，错误仍然潜伏在软件中。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270924134.png" alt="测试信息流"></p><h2 id="_5、测试与软件开发各阶段的关系" tabindex="-1">5、测试与软件开发各阶段的关系 <a class="header-anchor" href="#_5、测试与软件开发各阶段的关系" aria-label="Permalink to &quot;5、测试与软件开发各阶段的关系&quot;">​</a></h2><p>（1）软件开发过程是一个<strong>自顶向下</strong>，<strong>逐步细化</strong>的过程，主要有以下步骤：</p><ul><li><strong>软件计划阶段</strong>定义软件作用域。</li><li><strong>软件需求分析阶段</strong>建立软件信息域、功能和性能需求、约束等。</li><li>软件设计。</li><li>把设计用某种程序设计语言转换成程序代码。</li></ul><p>（2）而测试过程是按照相反顺序安排的<strong>自底向上</strong>，<strong>逐步集成</strong>的过程。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270924500.png" alt="测试过程"></p><h1 id="二、软件测试用例" tabindex="-1">二、软件测试用例 <a class="header-anchor" href="#二、软件测试用例" aria-label="Permalink to &quot;二、软件测试用例&quot;">​</a></h1><h2 id="_1、黑盒测试概述" tabindex="-1">1、黑盒测试概述 <a class="header-anchor" href="#_1、黑盒测试概述" aria-label="Permalink to &quot;1、黑盒测试概述&quot;">​</a></h2><p>把<strong>测试对象</strong>看做一个<strong>黑盒子</strong>，测试人员完全<strong>不考虑程序内部</strong>的逻辑结构和内部特性，只依据需求规格说明来检查程序的功能是否符合。</p><p>黑盒测试又叫做<strong>功能测试</strong>或<strong>数据驱动测试</strong>。</p><p>黑盒测试方法是在<strong>程序接口</strong>上进行测试，主要是为了发现以下错误：</p><ul><li><p>是否有不正确或遗漏了的功能?</p></li><li><p>在接口上，输入能否正确地接受? 能否输出正确的结果?</p></li><li><p>是否有数据文件访问错误?</p></li><li><p>性能上是否能够满足要求?</p></li></ul><p>用黑盒测试发现程序中的错误，必须在<strong>所有可能的输入条件和输出条件</strong>中确定测试数据，来检查程序是否都能产生正确的输出。</p><p>但这是不可能发生的事情。为什么呢？</p><p>假设一个程序 P 有输入量 X 和 Y 及输出量 Z。在字长为 32 位的计算机上运行。若 X、Y 取整数，按照黑盒测试方法进行<strong>穷举测试</strong>：</p><p>可能采用的测试数据组：<strong>2<sup>32</sup> x 2<sup>32</sup> ＝ 264。</strong></p><p>如果测试一组数据需要 1 毫秒，一年工作<strong>365× 24</strong>小时，完成所有测试需<strong>5 亿年</strong>。</p><p>5 亿年！想想都不太可能。所以说，程序一般没有办法引入穷举测试。</p><h2 id="_2、白盒测试概述" tabindex="-1">2、白盒测试概述 <a class="header-anchor" href="#_2、白盒测试概述" aria-label="Permalink to &quot;2、白盒测试概述&quot;">​</a></h2><p>把测试对象看做一个<strong>透明的</strong>盒子，它允许测试人员利用程序<strong>内部的逻辑结构</strong>设计测试用例，对程序所有<strong>逻辑路径</strong>进行测试。</p><p>通过在不同点检查程序的状态，确定实际的状态<strong>是否与预期的状态一致</strong>。</p><p>因此白盒测试又称为<strong>结构测试</strong>或<strong>逻辑驱动测试</strong>。</p><p>白盒测试方法，主要对程序模块作出以下检查：</p><ul><li>对程序模块的<strong>所有独立的执行路径</strong>至少测试一次；</li><li>对<strong>所有的逻辑判定</strong>，取“<strong>真</strong>”与取“<strong>假</strong>”的两种情况都至少测试一次；</li><li>在循环的边界和运行界限内执行循环体；</li><li>测试<strong>内部数据结构的有效性</strong>等等。</li></ul><p>对一个具有<strong>多重选择和循环嵌套</strong>的程序，<strong>不同的路径数目可能是天文数字</strong>。给出一个小程序的流程图，它包括了一个执行<strong>20 次</strong>的循环。</p><p>包含的不同执行路径数达<strong>5<sup>20</sup><strong>条，对每一条路径进行测试需要</strong>1 毫秒</strong>，假定一年工作<strong>365 × 24</strong>小时，要想把所有路径测试完，需 3170 年。</p><p>比起穷举测试的 5 亿年，3170 年似乎少了不少。但是呢？3170 年会不会也挺太漫长的。</p><p>因此，我们要引入一些黑白盒测试方法来解决这些问题。</p><h2 id="_3、白盒测试方法" tabindex="-1">3、白盒测试方法 <a class="header-anchor" href="#_3、白盒测试方法" aria-label="Permalink to &quot;3、白盒测试方法&quot;">​</a></h2><p><strong>白盒测试方法主要有以下 6 种方法：</strong></p><ul><li>语句覆盖</li><li>判定覆盖</li><li>条件覆盖</li><li>判定-条件覆盖</li><li>条件组合覆盖</li><li>路径覆盖</li></ul><p>白盒测试方法这里篇幅较长，放在<a href="https://blog.csdn.net/weixin_44803753/article/details/117383217" target="_blank" rel="noreferrer">另外一篇文章</a>中，有需要的小伙伴自取~</p><h2 id="_4、条件测试路径选择" tabindex="-1">4、条件测试路径选择 <a class="header-anchor" href="#_4、条件测试路径选择" aria-label="Permalink to &quot;4、条件测试路径选择&quot;">​</a></h2><p>当程序中的判定条件超过一个时，形成的分支结构可以分为两类：<strong>嵌套型分支结构</strong>和<strong>连锁型分支结构</strong>。</p><p>对于嵌套型分支结构，若有 <code>n</code> 个判定语句，需要 <code>n+1</code> 个测试用例；</p><p>对于连锁型分支结构， 若有 <code>n</code> 个判定语句，需要有 <code>2n</code> 个测试用例，覆盖它的 <code>2n</code> 条路径。</p><p><strong>如下图所示：</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270925261.png" alt="嵌套型和连锁型分支结构"></p><h2 id="_5、循环测试路径选择" tabindex="-1">5、循环测试路径选择 <a class="header-anchor" href="#_5、循环测试路径选择" aria-label="Permalink to &quot;5、循环测试路径选择&quot;">​</a></h2><p>循环分为 4 种不同类型：<strong>简单循环</strong>、<strong>连锁循环</strong>、<strong>嵌套循环</strong>和<strong>非结构循环</strong>。如下图所示：</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270925849.png" alt="循环测试路径选择"></p><p>接下来对这四种循环进行一一介绍。</p><h3 id="_1-简单循环" tabindex="-1">（1）简单循环 <a class="header-anchor" href="#_1-简单循环" aria-label="Permalink to &quot;（1）简单循环&quot;">​</a></h3><p><strong>① 零次循环：</strong> 从循环入口到出口。</p><p><strong>② 一次循环：</strong> 检查循环初始值。</p><p><strong>③ 二次循环：</strong> 检查多次循环。</p><p><strong>④m 次循环：</strong> 检查在多次循环。</p><p><strong>⑤ 最大次数循环：</strong> 比最大次数多一次、少一次的循环。</p><h3 id="_2-嵌套循环" tabindex="-1">（2）嵌套循环 <a class="header-anchor" href="#_2-嵌套循环" aria-label="Permalink to &quot;（2）嵌套循环&quot;">​</a></h3><p><strong>①</strong>对最内层循环做<strong>简单循环</strong>的全部测试。所有其它层的循环变量置为<strong>最小值</strong>。</p><p><strong>② 逐步外推</strong>，对其外面一层循环进行测试。测试时保持所有外层循环的循环变量取最小值，所有其它嵌套内层循环的循环变量取“典型”值。</p><p><strong>③ 反复进行</strong>，直到所有各层循环测试完毕。</p><p><strong>④</strong>对全部各层循环同时取<strong>最小循环次数</strong>，或者同时取<strong>最大循环次数</strong>。</p><h3 id="_3-连锁循环" tabindex="-1">（3）连锁循环 <a class="header-anchor" href="#_3-连锁循环" aria-label="Permalink to &quot;（3）连锁循环&quot;">​</a></h3><p>如果各个循环<strong>互相独立</strong>，则可以用与简单循环相同的方法进行测试。但如果几个循环<strong>不是互相独立的</strong>，则需要使用测试嵌套循环的办法来处理。</p><h3 id="_4-非结构循环" tabindex="-1">（4）非结构循环 <a class="header-anchor" href="#_4-非结构循环" aria-label="Permalink to &quot;（4）非结构循环&quot;">​</a></h3><p>这一类循环应该使用<strong>结构化程序设计方法</strong>重新设计测试用例。</p><h2 id="_6、基本路径测试" tabindex="-1">6、基本路径测试 <a class="header-anchor" href="#_6、基本路径测试" aria-label="Permalink to &quot;6、基本路径测试&quot;">​</a></h2><p>基本路径测试法也已经放到<a href="https://blog.csdn.net/weixin_44803753/article/details/117383217" target="_blank" rel="noreferrer">白盒测试方法文章</a>当中，有需要的小伙伴自取~</p><h2 id="_7、黑盒测试的测试用例设计" tabindex="-1">7、黑盒测试的测试用例设计 <a class="header-anchor" href="#_7、黑盒测试的测试用例设计" aria-label="Permalink to &quot;7、黑盒测试的测试用例设计&quot;">​</a></h2><p><strong>黑盒测试方法主要有以下 8 种方法：</strong></p><ul><li>等价类划分法</li><li>边界值分析法</li><li>错误推测法</li><li>因果图法</li><li>判定表驱动法</li><li>正交实验设计法</li><li>场景法</li><li>功能图法</li></ul><p>黑盒测试方法篇幅较长，已放在<a href="https://blog.csdn.net/weixin_44803753/article/details/115395928" target="_blank" rel="noreferrer">另外一篇文章</a>中，有需要的小伙伴自行查阅~</p><h1 id="三、软件测试步骤" tabindex="-1">三、软件测试步骤 <a class="header-anchor" href="#三、软件测试步骤" aria-label="Permalink to &quot;三、软件测试步骤&quot;">​</a></h1><p>测试过程需要按照 4 个步骤进行，分别是<strong>单元测试（模块）</strong>、<strong>组装测试（集成）</strong>、<strong>确认测试</strong>和<strong>系统测试</strong>。<strong>详细过程如下：</strong></p><ul><li><p>开始是<strong>单元测试</strong>，集中对使用源代码实现的<strong>每一个程序单元</strong>进行测试，检查各个程序模块是否正确地实现了规定的功能。</p></li><li><p><strong>组装测试</strong>把<strong>已测试过的模块</strong>组装起来，主要对与设计相关的软件体系结构的构造进行测试。</p></li><li><p><strong>确认测试</strong>则是要检查已实现的软件是否满足了需求规格说明中已经确定的各种需求，以及软件配置是否完全、正确。</p></li><li><p><strong>系统测试</strong>把已经经过确认的软件纳入实际运行环境中，与其它系统成份地组合在一起进行测试。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270925929.png" alt="软件测试的步骤"></p></li></ul><p>以下将对这四个测试步骤进行一一讲解。</p><h2 id="_1、单元测试" tabindex="-1">1、单元测试 <a class="header-anchor" href="#_1、单元测试" aria-label="Permalink to &quot;1、单元测试&quot;">​</a></h2><h3 id="_1-单元测试的定义" tabindex="-1">（1）单元测试的定义 <a class="header-anchor" href="#_1-单元测试的定义" aria-label="Permalink to &quot;（1）单元测试的定义&quot;">​</a></h3><p>单元测试又称模块测试，是针对软件设计的最小单位 —— <strong>程序模块</strong>，进行正确性检验的测试工作。其目的在于发现各模块内部可能存在的各种差错。</p><p>单元测试需要<strong>从程序的内部结构出发</strong>设计测试用例。多个模块可以平行地独立进行单元测试。</p><h3 id="_2-单元测试的内容" tabindex="-1">（2）单元测试的内容 <a class="header-anchor" href="#_2-单元测试的内容" aria-label="Permalink to &quot;（2）单元测试的内容&quot;">​</a></h3><p>在单元测试时，测试者需要依据详细设计说明书和源程序清单，了解该模块的 I/O 条件和模块的逻辑结构，<strong>主要采用白盒测试的测试用例，辅之以黑盒测试的测试用例</strong>，使之对任何合理的输入和不合理的输入，都能鉴别和响应。</p><p>如下图所示：</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270925328.png" alt="单元测试的内容"></p><p>下面对这五个测试内容进行一一讲解。</p><p><strong>1）模块接口测试</strong></p><p>在单元测试的开始，应该对通过被测模块的数据流进行测试。<strong>测试项目包括：</strong></p><ul><li>调用本模块的输入参数是否正确；</li><li>本模块调用子模块时输入给子模块的参数是否正确；</li><li>全局量的定义在各模块中是否一致；</li></ul><p>在做<strong>内外存交换</strong>时要考虑：</p><ul><li><p>文件属性是否正确；</p></li><li><p><code>OPEN</code> 与 <code>CLOSE</code> 语句是否正确；</p></li><li><p>缓冲区容量与记录长度是否匹配；</p></li><li><p>在进行读写操作之前是否打开了文件；</p></li><li><p>在结束文件处理时是否关闭了文件；</p></li><li><p>正文书写／输入错误，</p></li><li><p><code>I/O</code> 错误是否检查并做了处理。</p></li></ul><p><strong>2）局部数据结构测试</strong></p><ul><li>不正确或不一致的数据类型说明；</li><li>使用尚未赋值或尚未初始化的变量；</li><li>错误的初始值或错误的缺省值；</li><li>变量名拼写错或书写错；</li><li>不一致的数据类型；</li><li>全局数据对模块的影响。</li></ul><p><strong>3）路径测试</strong></p><ul><li>选择适当的测试用例，对模块中<strong>重要的执行路径</strong>进行测试；</li><li>应当设计测试用例来查找因<strong>错误的计算</strong>、<strong>不正确的比较</strong>或<strong>不正常的控制流</strong>而导致的错误；</li><li>对<strong>基本执行路径和循环</strong>进行测试，可以发现到大量的路径错误。</li></ul><p><strong>4) 错误处理测试</strong></p><ul><li>出错的描述是否难以理解；</li><li>出错的描述是否能够与具体错误相定位；</li><li>显示的错误与实际的错误是否相符；</li><li>对错误条件的处理正确与否；</li><li>在对错误进行处理之前，错误条件是否已经引起系统的干预等。</li></ul><p><strong>5) 边界测试</strong></p><ul><li>注意<strong>数据流</strong>、<strong>控制流</strong>中刚好等于、大于或小于确定的比较值时出错的可能性；</li><li>对这些地方要仔细地选择<strong>测试用例</strong>，认真加以测试；</li><li>如果对<strong>模块运行时间</strong>有要求的话，还要专门进行<strong>关键路径测试</strong>，以确定<strong>最坏情况下</strong>和<strong>正常情况下</strong>影响模块运行时间的因素。</li></ul><h3 id="_3-单元测试的步骤" tabindex="-1">（3）单元测试的步骤 <a class="header-anchor" href="#_3-单元测试的步骤" aria-label="Permalink to &quot;（3）单元测试的步骤&quot;">​</a></h3><p>模块并<strong>不是一个独立的</strong>程序，因此，在考虑<strong>测试模块</strong>时，同时要考虑<strong>它和外界的联系</strong>，用一些<strong>辅助模块</strong>去模拟与被测模块相联系的其它模块。其中，<strong>辅助模块包括：</strong></p><ul><li>驱动模块 (driver)；</li><li>桩模块 (stub) —— 存根模块。</li></ul><p>依据驱动模块和桩模块，<strong>单元测试的步骤如下图所示：</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270925418.png" alt="单元测试的步骤"></p><p>如果一个模块要完成<strong>多种功能</strong>，可以将这个模块看成是由<strong>几个小的程序</strong>组成。必须对其中的每个小的程序先进行单元测试所需要做的工作，对<strong>关键模块</strong>还要做<strong>性能测试</strong>。</p><p>对支持某些标准规定的程序，更要着手进行<strong>互联测试</strong>。有人把这种情况特别称为<strong>模块测试</strong>，以区别<strong>单元测试</strong>。</p><h2 id="_2、组装测试" tabindex="-1">2、组装测试 <a class="header-anchor" href="#_2、组装测试" aria-label="Permalink to &quot;2、组装测试&quot;">​</a></h2><h3 id="_1-组装测试的什么" tabindex="-1">（1）组装测试的什么 <a class="header-anchor" href="#_1-组装测试的什么" aria-label="Permalink to &quot;（1）组装测试的什么&quot;">​</a></h3><p>组装测试 ，也称为<strong>集成测试</strong>或<strong>联合测试</strong>。</p><h3 id="_2-组装测试需考虑问题" tabindex="-1">（2）组装测试需考虑问题 <a class="header-anchor" href="#_2-组装测试需考虑问题" aria-label="Permalink to &quot;（2）组装测试需考虑问题&quot;">​</a></h3><p>通常，在单元测试的基础上，需要将所有模块按照设计的要求组装成为<strong>系统</strong>。这时<strong>需要考虑的问题是：</strong></p><ul><li><p>在把各个模块连接起来的时侯，<strong>穿越模块接口的数据</strong>是否会丢失；</p></li><li><p>一个模块的功能<strong>是否会</strong>对另一个模块的功能产生不利的影响；</p></li><li><p>各个子功能组合起来，能否达到预期要求的父功能；</p></li><li><p>全局数据结构是否有问题；</p></li><li><p><strong>单个模块的误差累积起来，是否会放大</strong>，从而达到不能接受的程度。</p></li><li><p><strong>在单元测试的同时可进行组装测试</strong>，发现并排除在模块连接中可能出现的问题，最终构成要求的软件系统。</p></li><li><p>子系统的组装测试特别称为<strong>部件测试</strong>，它所做的工作是要找出组装后的<strong>子系统与系统需求规格说明之间</strong>的不一致。</p></li><li><p>通常，把<strong>模块</strong>组装成为系统的方式有两种：</p><ul><li><strong>一次性</strong>组装方式</li><li><strong>增殖式</strong>组装方式</li></ul></li></ul><h2 id="_3、确认测试" tabindex="-1">3、确认测试 <a class="header-anchor" href="#_3、确认测试" aria-label="Permalink to &quot;3、确认测试&quot;">​</a></h2><h3 id="_1-确认测试是什么" tabindex="-1">（1）确认测试是什么 <a class="header-anchor" href="#_1-确认测试是什么" aria-label="Permalink to &quot;（1）确认测试是什么&quot;">​</a></h3><p>确认测试又称<strong>有效性测试</strong>。</p><p>任务是验证软件的功能和性能和其它特性是否与用户的要求一致。</p><p>在软件的需求规格说明书中明确规定软件的功能和性能要求。</p><p>它包含的信息就是<strong>软件确认测试</strong>的基础。</p><p><strong>如下图所示：</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270925402.png" alt="确认测试"></p><h3 id="_2-确认测试的步骤" tabindex="-1">（2）确认测试的步骤 <a class="header-anchor" href="#_2-确认测试的步骤" aria-label="Permalink to &quot;（2）确认测试的步骤&quot;">​</a></h3><ul><li>进行有效性测试（黑盒测试）；</li><li>软件配置复查；</li><li><code>α</code> 测试和 <code>β</code> 测试；</li><li>验收测试 <code>（Acceptance Testing）</code> 。</li></ul><h2 id="_4、系统测试" tabindex="-1">4、系统测试 <a class="header-anchor" href="#_4、系统测试" aria-label="Permalink to &quot;4、系统测试&quot;">​</a></h2><h3 id="_1-系统测试是什么" tabindex="-1">（1）系统测试是什么 <a class="header-anchor" href="#_1-系统测试是什么" aria-label="Permalink to &quot;（1）系统测试是什么&quot;">​</a></h3><p>将通过确认测试的软件，作为<strong>整个基于计算机系统的一个元素</strong>，与计算机硬件、外设、某些支持软件、数据和人员等其它系统元素结合在一起</p><p><strong>在实际运行环境下</strong>，对计算机系统进行一系列的<strong>组装测试</strong>和<strong>确认测试</strong>。</p><h1 id="四、写在最后" tabindex="-1">四、写在最后 <a class="header-anchor" href="#四、写在最后" aria-label="Permalink to &quot;四、写在最后&quot;">​</a></h1><p>🙋🙋🙋</p><p>在软件工程实践中，也有软件测试这一步骤。但相较于软件测试这一整个大体系而言，软件测试在软件工程中所占的比例较小，个人认为掌握部分基础的内容即可。如有需要学习软件测试的其他内容，也可以到<a href="https://blog.csdn.net/weixin_44803753/category_10923158.html" target="_blank" rel="noreferrer">『软件测试』</a>专栏中进行查看~</p><p>软件工程实践方法中的软件测试讲到这里就结束啦！如有需要了解软件工程相关的其他内容，可到『<a href="https://blog.csdn.net/weixin_44803753/category_10895589.html?spm=1001.2014.3001.5482" target="_blank" rel="noreferrer">软件工程</a>』栏目进行查看学习~</p><p>同时，有不理解或有误的地方也欢迎评论区评论或私信我交流~</p>',145),e=[s];function i(a,g,p,h,d,c){return r(),t("div",null,e)}const m=l(o,[["render",i]]);export{_ as __pageData,m as default};
