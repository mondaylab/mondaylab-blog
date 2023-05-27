import{_ as t,c as o,o as s,N as n}from"./chunks/framework.6510d215.js";const u=JSON.parse('{"title":"『软件工程9』结构化系统分析——解决软件“做什么”问题","description":"","frontmatter":{"title":"『软件工程9』结构化系统分析——解决软件“做什么”问题","author":"周一","date":"2021-05-28","categories":["产品汪"],"tags":["软件工程"],"sidebar":"auto"},"headers":[{"level":1,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":1,"title":"一、系统分析的任务和过程","slug":"一、系统分析的任务和过程","link":"#一、系统分析的任务和过程","children":[{"level":2,"title":"1、系统分析的任务","slug":"_1、系统分析的任务","link":"#_1、系统分析的任务","children":[]},{"level":2,"title":"2、系统分析的过程","slug":"_2、系统分析的过程","link":"#_2、系统分析的过程","children":[{"level":3,"title":"（1）问题识别","slug":"_1-问题识别","link":"#_1-问题识别","children":[]},{"level":3,"title":"（2）分析与综合","slug":"_2-分析与综合","link":"#_2-分析与综合","children":[]},{"level":3,"title":"（3）编制文档","slug":"_3-编制文档","link":"#_3-编制文档","children":[]},{"level":3,"title":"（4）系统分析评审","slug":"_4-系统分析评审","link":"#_4-系统分析评审","children":[]}]}]},{"level":1,"title":"二、结构化分析方法","slug":"二、结构化分析方法","link":"#二、结构化分析方法","children":[{"level":2,"title":"1、结构化分析方法是什么？","slug":"_1、结构化分析方法是什么","link":"#_1、结构化分析方法是什么","children":[]},{"level":2,"title":"2、结构化分析方法使用的工具","slug":"_2、结构化分析方法使用的工具","link":"#_2、结构化分析方法使用的工具","children":[{"level":3,"title":"（1）数据流图 (Data Flow Diagram, DFD)","slug":"_1-数据流图-data-flow-diagram-dfd","link":"#_1-数据流图-data-flow-diagram-dfd","children":[]},{"level":3,"title":"（2）数据字典 (Data Flow Diagram, DFD)","slug":"_2-数据字典-data-flow-diagram-dfd","link":"#_2-数据字典-data-flow-diagram-dfd","children":[]},{"level":3,"title":"（3）结构化英语 (Data Flow Diagram, DFD)","slug":"_3-结构化英语-data-flow-diagram-dfd","link":"#_3-结构化英语-data-flow-diagram-dfd","children":[]},{"level":3,"title":"（4）判定表 (Data Flow Diagram, DFD)","slug":"_4-判定表-data-flow-diagram-dfd","link":"#_4-判定表-data-flow-diagram-dfd","children":[]},{"level":3,"title":"（5）判定树 (Data Flow Diagram, DFD)","slug":"_5-判定树-data-flow-diagram-dfd","link":"#_5-判定树-data-flow-diagram-dfd","children":[]}]}]},{"level":1,"title":"三、动态分析方法","slug":"三、动态分析方法","link":"#三、动态分析方法","children":[{"level":2,"title":"1、为什么需要系统动态分析方法？","slug":"_1、为什么需要系统动态分析方法","link":"#_1、为什么需要系统动态分析方法","children":[]},{"level":2,"title":"2、最常用的动态分析方法","slug":"_2、最常用的动态分析方法","link":"#_2、最常用的动态分析方法","children":[{"level":3,"title":"（1）状态迁移图","slug":"_1-状态迁移图","link":"#_1-状态迁移图","children":[]},{"level":3,"title":"（2）时序图","slug":"_2-时序图","link":"#_2-时序图","children":[]}]}]},{"level":1,"title":"四、写在最后","slug":"四、写在最后","link":"#四、写在最后","children":[]}],"relativePath":"column/Product/SoftwareEngineer/009StructuredAnalysis.md","lastUpdated":1685151998000}'),a={name:"column/Product/SoftwareEngineer/009StructuredAnalysis.md"},l=n(`<h1 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h1><p>我们都知道软件是什么，但有时候会止步于软件要“做什么”的问题。在下面这篇文章中，我们将从结构化系统分析的角度出发，来解决软件“做什么”的问题。</p><h1 id="一、系统分析的任务和过程" tabindex="-1">一、系统分析的任务和过程 <a class="header-anchor" href="#一、系统分析的任务和过程" aria-label="Permalink to &quot;一、系统分析的任务和过程&quot;">​</a></h1><h2 id="_1、系统分析的任务" tabindex="-1">1、系统分析的任务 <a class="header-anchor" href="#_1、系统分析的任务" aria-label="Permalink to &quot;1、系统分析的任务&quot;">​</a></h2><p>借助当前系统的逻辑模型，去导出目标系统的逻辑模型，解决目标系统“做什么”的问题。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270934193.png" alt="系统分析的任务"></p><h2 id="_2、系统分析的过程" tabindex="-1">2、系统分析的过程 <a class="header-anchor" href="#_2、系统分析的过程" aria-label="Permalink to &quot;2、系统分析的过程&quot;">​</a></h2><p>系<strong>统分析的过程包含以下四个步骤：</strong></p><ul><li>问题识别</li><li>分析与综合</li><li>编制文档</li><li>系统分析评审</li></ul><p>接下来将对这四个步骤进行一一讲解。</p><h3 id="_1-问题识别" tabindex="-1">（1）问题识别 <a class="header-anchor" href="#_1-问题识别" aria-label="Permalink to &quot;（1）问题识别&quot;">​</a></h3><p><strong>1）</strong> 从系统的角度来理解软件并评审<strong>软件范围</strong>是否恰当。</p><p><strong>2）</strong> 确定软件的<strong>需求</strong>，即提出这些需求<strong>应实现的条件</strong>，和这些需求<strong>应达到的标准</strong>。</p><p><strong>软件的需求包括：</strong></p><ul><li><strong>功能需求</strong>（最重要，功能是一切需求的根本）</li><li>性能需求</li><li>环境需求</li><li>可靠性需求</li><li>资源使用需求</li><li>成本消耗需求</li><li>开发进度需求</li><li>用户界面需求</li><li>安全保密需求（经常会被遗漏的需求）</li></ul><p><strong>3）</strong> 建立通信路径。建立和分析所需要的通信路径，以保证能顺利地对问题进行分析。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270934738.png" alt="通信路径"></p><h3 id="_2-分析与综合" tabindex="-1">（2）分析与综合 <a class="header-anchor" href="#_2-分析与综合" aria-label="Permalink to &quot;（2）分析与综合&quot;">​</a></h3><p><strong>1）</strong> 逐步<strong>细化软件功能</strong>，找出系统<strong>各元素间</strong>的<u>联系</u>、<u>接口特性</u>和<u>设计上的约束</u>，分析<strong>是否满足功能要求，是否合理</strong>。</p><p><strong>2）</strong> 剔除不合理部分，增加其需要部分。最终综合成系统的解决方案，给出目标系统的<strong>详细逻辑模型</strong>。<code>（核心：建立逻辑模型）</code></p><p><strong>3）常用的分析方法</strong></p><ul><li>面向<strong>数据流</strong>的结构化分析方法 <code>(SA)</code></li><li>面向<strong>数据结构</strong>的 <code>Jackson</code> 方法 <code>(JSD)</code></li><li>面向<strong>数据结构</strong>的结构化数据系统开发方法 <code>(DSSD)</code></li><li>面向<strong>对象</strong>的分析方法 <code>(OOA)</code> 等</li></ul><h3 id="_3-编制文档" tabindex="-1">（3）编制文档 <a class="header-anchor" href="#_3-编制文档" aria-label="Permalink to &quot;（3）编制文档&quot;">​</a></h3><ul><li>软件需求说明书；</li><li>数据要求说明书；</li><li>初步的用户手册；</li><li>修改、完善与确定软件开发实施计划。</li></ul><h3 id="_4-系统分析评审" tabindex="-1">（4）系统分析评审 <a class="header-anchor" href="#_4-系统分析评审" aria-label="Permalink to &quot;（4）系统分析评审&quot;">​</a></h3><p>系统分析的评审内容主要有以下内容：</p><ul><li><p>系统定义的目标是否<strong>与用户的要求一致</strong>；</p></li><li><p>系统需求分析阶段提供的<strong>文档资料是否齐全</strong>；</p></li><li><p>文档中的所有<strong>描述是否完整、清晰、准确</strong>反映用户要求；</p></li><li><p>与所有其它系统成分的重要<strong>接口</strong>是否都已经描述；</p></li><li><p>被开发项目的<strong>数据流</strong>与<strong>数据结构</strong>是否足够；</p></li><li><p>所有<strong>图表</strong>是否清楚，在不补充说明时能否理解；</p></li><li><p>主要功能是否已包括在规定的<strong>软件范围之内</strong>，是否都已充分说明；</p></li><li><p>设计的<strong>约束条件</strong>或<strong>限制条件</strong>是否符合实际；</p></li><li><p>开发的<strong>技术风险</strong>是什么；</p></li><li><p>是否考虑过软件需求的<strong>其它方案</strong>；</p></li><li><p>是否考虑过<strong>将来</strong>可能会提出的软件需求；</p></li><li><p>是否详细制定了<strong>检验标准</strong>，它们能否对系统定义是否成功进行确认；</p></li><li><p>……</p></li></ul><h1 id="二、结构化分析方法" tabindex="-1">二、结构化分析方法 <a class="header-anchor" href="#二、结构化分析方法" aria-label="Permalink to &quot;二、结构化分析方法&quot;">​</a></h1><h2 id="_1、结构化分析方法是什么" tabindex="-1">1、结构化分析方法是什么？ <a class="header-anchor" href="#_1、结构化分析方法是什么" aria-label="Permalink to &quot;1、结构化分析方法是什么？&quot;">​</a></h2><ul><li>结构化分析方法是一种<strong>面向数据流</strong>进行需求分析的方法；</li><li>适用于<strong>数据处理类型</strong> <code>（MIS）</code> 软件的需求分析；</li><li>用<strong>抽象模型</strong>的概念，按照软件内部<strong>数据传递</strong>、<strong>变换</strong>的关系，<strong><u>自顶向下逐层分解</u></strong>，直到满足所有功能要求为止。（自顶向下逐层分解是结构化分析的基本思路）</li></ul><h2 id="_2、结构化分析方法使用的工具" tabindex="-1">2、结构化分析方法使用的工具 <a class="header-anchor" href="#_2、结构化分析方法使用的工具" aria-label="Permalink to &quot;2、结构化分析方法使用的工具&quot;">​</a></h2><p><strong>结构化分析所使用的工具主要有五种：</strong></p><ul><li>数据流图 <code>(DFD)</code></li><li>数据字典 <code>(DD)</code></li><li>结构化英语 <code>(Structured English)</code></li><li>判定表 <code>(Decision Table)</code></li><li>判定树 <code>(Decision Tree)</code></li></ul><p>接下来将对这五种工具进行一一介绍。</p><h3 id="_1-数据流图-data-flow-diagram-dfd" tabindex="-1">（1）数据流图 (Data Flow Diagram, DFD) <a class="header-anchor" href="#_1-数据流图-data-flow-diagram-dfd" aria-label="Permalink to &quot;（1）数据流图 (Data Flow Diagram, DFD)&quot;">​</a></h3><p><strong>1）作用</strong></p><ul><li>数据流图是组织中<strong>信息运动</strong>的抽象，是信息系统<strong>逻辑模型</strong>的主要形式，是分析人员与用户进行<strong>交流</strong>的有效手段，也是<strong>系统设计的依据</strong>之一。</li><li>简单来说，数据流图是用<strong>一种图形</strong>及与图形相关的<strong>注释</strong>来表示系统的逻辑功能。</li></ul><p><strong>2）主要图形元素</strong></p><p>数据流图主要图形元素为以下四种。<strong>圆圈</strong>代表数据加工，<strong>矩形</strong>代表外部实体，<strong>箭头</strong>代表数据流，<strong>“椅子”形状图形</strong>代表数据存储文件。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270934557.png" alt="主要图形元素"></p><p>了解完数据流图的主要图形元素，再来了解这四种主要图形元素常用的三种符号。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935955.png" alt="常用的三种数据流图基本成分的符号"></p><p>讲到这里，相信大家都对数据流图的主要图形元素有了一定的了解，那么我们继续来对这四个元素的含义做个归纳。</p><ul><li><strong>外部项(外部实体)：</strong> 外部项在数据流图中表示所描述系统的<strong>数据来源</strong>和<strong>去处</strong>的各种实体或工作环节。系统开发不能改变这些外部项本身的结构和固有属性。</li><li><strong>加工(数据加工)：</strong> 又称<strong>数据处理逻辑</strong>，描述系统对信息进行处理的逻辑功能。</li><li><strong>数据存储：</strong> 逻辑意义上的数据存储环节，即系统信息处理功能所需要的、不考虑存储物理介质和技术手段的数据存储环节。</li><li><strong>数据流：</strong> 与所描述系统信息处理功能有关的<strong>各类信息的载体</strong>，是各加工环节进行处理和输出的数据集合。</li></ul><p>介绍完具体的主要图形元素，我们还要<strong>思考一个问题</strong>：这些图形要怎么连接才是合理的？是不是只有有随意一个图形出现就可以了？那结果自然是否定的。这就引出了我们应该要注意的一个问题：<strong>数据流图的规范。</strong> <strong>具体内容如下：</strong></p><blockquote><p><strong>DFD 中允许的数据流：</strong> &gt;<strong>①</strong>实体 -&gt; 加工；<strong>②</strong>加工 -&gt; 实体；<strong>③</strong>加工 -&gt; 加工；<strong>④</strong>加工 -&gt; 存储；<strong>⑤</strong>存储 -&gt; 加工。</p></blockquote><blockquote><p><strong>DFD 中不允许的数据流：</strong> &gt;<strong>①</strong>实体 -&gt; 实体；<strong>②</strong>实体 -&gt; 存储；<strong>③</strong>存储 -&gt; 实体；<strong>④</strong>存储 -&gt; 存储。</p></blockquote><blockquote><p><strong>总结：</strong> 所有的数据流都要<strong>有加工</strong>，任意一个<strong>没有经过加工</strong>的数据流都是不规范的。 <strong>注意：</strong> 所有数据流信息都要标注，除了加工与存储相连时传递的信息刚好是数据存储的内容（可省略），其它一律不可以。</p></blockquote><p><strong>3）数据流图的层次结构</strong></p><ul><li>为了表达数据处理过程的数据加工情况，需要采用<strong>层次结构</strong>的数据流图。</li><li>按照系统的层次结构进行<strong>逐步分解</strong>，以<strong>分层的</strong>数据流图反映这种结构关系，能清楚地表达和容易理解系统。</li><li>在多层数据流图中，<strong>顶层流图</strong>仅包含<strong>一个加工</strong>，它代表被开发的系统。它的输入流是该系统的输入数据，输出流是系统所输出的数据。除顶层数据流图外，其他数据流图<strong>从零开始</strong>编号。</li><li><strong>中间层流图</strong>则表示<strong>对其上层父图的细化</strong>。它的每一加工可能继续细化，形成子图。</li><li><strong>底层流图</strong>是指其<strong>加工不需再做分解</strong>的数据流图，它处在<strong>最底层</strong>。</li></ul><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935021.png" alt="数据流图的层次结构"></p><p><strong>4）检查和修改数据流图的原则</strong></p><ul><li>数据流图上所有图形符号<strong>只限于</strong>上述四种基本图形元素。</li><li>数据流图的主图<strong>必须包括上述四种基本元素</strong>，<strong>缺一不可</strong>。</li><li>数据流图的主图上的数据流必须<strong>封闭</strong>在外部实体之间。</li><li>每个加工至少有<strong>一个输入数据流</strong>和<strong>一个输出数据流</strong>，而且<strong>所有的数据流都要经过<u>加工</u></strong>。</li><li>在数据流图中，需<strong>按照层次给加工框编号</strong>，编号表明该加工所处层次及上下层的亲子关系；有一种特殊情况就是，<strong>顶层图的加工可以不用加编号</strong>。</li><li>当数据流图只有<strong>一个加工</strong>时，可以<strong>不考虑存储</strong>，但当数据流图有<strong>多个加工</strong>时，<strong>一定要考虑存储</strong>。</li><li>规定任何一个数据流子图必须与它上一层的一个加工对应，两者的输入数据流和输出数据流必须一致，即<strong>父图与子图的平衡</strong>。</li><li>图上每个元素都<strong>必须有名字</strong>。</li><li>数据流图中<strong>不可夹带</strong>控制流。</li></ul><p><strong>5）错误实例</strong> 我们来看几个错误实例。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935737.png" alt="错误实例1"></p><p><strong>错误原因：</strong> 布局不够合理，实体应该在四周，加工在中间。</p><hr><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935129.png" alt="错误实例2"></p><p><strong>错误原因：</strong> 数据流图画的像数据流程图。</p><hr><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935319.png" alt="错误实例3"></p><p><strong>错误原因：</strong> 数据流没有标注，加工项没有编号。</p><hr><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935687.png" alt="错误实例4"></p><p><strong>错误原因：</strong> 加工项出现名词。</p><hr><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270935377.png" alt="错误实例5"></p><p><strong>错误原因：</strong> 加工项只有输入没有输出。</p><hr><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936288.png" alt="错误实例6"></p><p><strong>错误原因：</strong> 没有数据存储。</p><hr><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936536.png" alt="错误实例7"></p><p><strong>错误原因：</strong> 实体与数据存储相连，所有的实体和存储都必须经过加工。</p><p><strong>6）数据流图的局限性</strong></p><p>只能给出系统逻辑功能的一个总框架，缺乏详细、具体的内容。 <strong>7）案例分析</strong></p><p>关于<strong>数据流图的案例分析</strong>放在<a href="https://blog.csdn.net/weixin_44803753/article/details/117262564" target="_blank" rel="noreferrer">下一篇文章</a>中，大家可以根据自身需求进行查看。</p><h3 id="_2-数据字典-data-flow-diagram-dfd" tabindex="-1">（2）数据字典 (Data Flow Diagram, DFD) <a class="header-anchor" href="#_2-数据字典-data-flow-diagram-dfd" aria-label="Permalink to &quot;（2）数据字典 (Data Flow Diagram, DFD)&quot;">​</a></h3><p><strong>1）作用</strong></p><p>数据字典对数据流图中的各种成分起<strong>注解</strong>、<strong>说明</strong>作用，给这些成分赋以实际的内容。</p><p>数据字典与数据流图配合，能清楚地表达数据处理的要求。</p><p>条目：数据流、数据元素、数据存储、数据加工、外部实体</p><p><strong>2）条目</strong></p><p>数据字典有<strong>五个条目</strong>，即数据流图 <code>DFD</code> 的四要素 + 数据元素，分别是 <code>数据流</code> 、 <code>数据元素</code> 、 <code>数据存储</code> 、 <code>数据加工</code> 、 <code>外部实体</code> 。</p><p><strong>具体图例如下：</strong></p><p><strong>条目一：数据流</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936001.png" alt="条目一：数据流"></p><p><strong>条目二：数据元素</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936854.png" alt="条目二：数据元素"></p><p><strong>条目三：数据存储</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936500.png" alt="条目三：数据存储"></p><p><strong>条目四：数据加工</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936258.png" alt="条目四：数据加工"></p><p><strong>条目五：外部项</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936225.png" alt="条目五：外部项"></p><p><strong>3）数据结构的符号描述</strong></p><table><thead><tr><th style="text-align:center;">符号</th><th style="text-align:center;">含义</th><th style="text-align:center;">举例</th></tr></thead><tbody><tr><td style="text-align:center;">=</td><td style="text-align:center;">被定义为</td><td style="text-align:center;">x=a</td></tr><tr><td style="text-align:center;">+</td><td style="text-align:center;">与</td><td style="text-align:center;">x=a+b</td></tr><tr><td style="text-align:center;">[…,…]或[...|...]</td><td style="text-align:center;">或</td><td style="text-align:center;">x = [a , b]，x = [a|b]</td></tr><tr><td style="text-align:center;">{ ... }或 m{...}n</td><td style="text-align:center;">重复</td><td style="text-align:center;">x = {a}, x = 3{a}8</td></tr><tr><td style="text-align:center;">(...)</td><td style="text-align:center;">可选</td><td style="text-align:center;">x = (a)</td></tr><tr><td style="text-align:center;">“...”</td><td style="text-align:center;">基本数据元素</td><td style="text-align:center;">x = “a”</td></tr><tr><td style="text-align:center;">..</td><td style="text-align:center;">连结符</td><td style="text-align:center;">x = 1..9</td></tr></tbody></table><p><strong>4）案例分析</strong></p><p>关于<strong>数据字典的案例分析</strong>放在<a href="https://blog.csdn.net/weixin_44803753/article/details/117262564" target="_blank" rel="noreferrer">下一篇文章</a>中，大家可以根据自身需求进行查看。下面将结构化英语。</p><p>在讲结构化英语之前，我们需要先来了解一个知识点。</p><p>对于数据流图的<strong>每一个基本加工</strong>，都必须要有一个<strong>基本加工逻辑说明</strong>，那么基本加工逻辑说明是什么呢？基本加工逻辑说明是用来描述基本加工如何把 <code>输入数据流</code> 变换为 <code>输出数据流</code> 的加工规则。且用于写基本加工逻辑说明的工具主要有 <code>结构化英语</code> 、 <code>判定表</code> 和 <code>判定树</code> ，所以说 <code>结构化英语</code> 是一个用来写基本加工逻辑说明的工具。</p><p>了解完这个知识点后，我们开始来看结构化英语是什么吧！</p><h3 id="_3-结构化英语-data-flow-diagram-dfd" tabindex="-1">（3）结构化英语 (Data Flow Diagram, DFD) <a class="header-anchor" href="#_3-结构化英语-data-flow-diagram-dfd" aria-label="Permalink to &quot;（3）结构化英语 (Data Flow Diagram, DFD)&quot;">​</a></h3><p><strong>1）结构化英语是什么</strong></p><ul><li>结构化英语就是一种基本加工逻辑说明的方法。</li><li>结构化英语是一种介于<strong>自然语言</strong>和<strong>形式化语言</strong>之间的语言。</li><li>语言的正文用<strong>基本控制结构</strong>进行分割，加工中的操作用<strong>自然语言</strong>短语来表示。</li></ul><p><strong>2）结构化英语的词汇表构成</strong></p><ul><li>英语命令动词；</li><li>数据词典中定义的名字；</li><li>有限的自定义词；</li><li>逻辑关系词 <code>IF_THEN_ELSE</code> 、<code>CASE_OF</code> 、<code>WHILE_DO</code> 、<code>REPEAT_UNTIL</code> 等组成。</li></ul><p><strong>3）常见基本控制结构</strong></p><ul><li>顺序结构；</li><li>重复结构<code>while_do</code> 或 <code>repeat_until</code> 结构；</li><li>判定结构：<code>if_then_else</code> 或 <code>case_of</code> 结构。</li></ul><p><strong>4）案例：商店业务处理系统中”检查发货单“</strong></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> 发货单金额超过$500 </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> 欠款超过了60天 </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">在偿还欠款前不予批准</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> //（欠款未超期）</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">发批准书，发货单</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> //（发货单金额未超过$500）</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> 欠款超过60天 </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">发批准书，发货单及赊欠报告</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> //（欠款未超期）</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">发批准书，发货单</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_4-判定表-data-flow-diagram-dfd" tabindex="-1">（4）判定表 (Data Flow Diagram, DFD) <a class="header-anchor" href="#_4-判定表-data-flow-diagram-dfd" aria-label="Permalink to &quot;（4）判定表 (Data Flow Diagram, DFD)&quot;">​</a></h3><p><strong>1）使用条件</strong></p><p>如果数据流图的加工需要依赖于<strong>多个逻辑条件</strong>的取值，使用判定表来描述比较合适。</p><p><strong>2）图例</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936685.png" alt="条件桩条件项"></p><p><strong>3）案例剖析</strong></p><p><strong>案例一：检查发货单</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936395.png" alt="判定表-检查发货单"></p><p>大家可以看到，在上图中，左上角的地方是条件，也称为条件桩。而因为条件引发的操作/动作，即左下角部分，称为动作桩。</p><p>有了条件桩和动作桩以后，它们有一一对应的数据。条件桩对应条件项，动作桩对应动作项，即右上角和右下角部分。</p><p><strong>案例二：旅游预订票系统“计算折扣量”</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936446.png" alt="判定表-旅游管理系统"></p><p>同样的，与依据案例一的例子同样判断。上面是条件桩和条件项，下面是动作桩和动作项。</p><h3 id="_5-判定树-data-flow-diagram-dfd" tabindex="-1">（5）判定树 (Data Flow Diagram, DFD) <a class="header-anchor" href="#_5-判定树-data-flow-diagram-dfd" aria-label="Permalink to &quot;（5）判定树 (Data Flow Diagram, DFD)&quot;">​</a></h3><p><strong>1）使用条件</strong></p><p>判定树也是<strong>用来表达加工逻辑</strong>的一种工具，有时侯它<strong>比判定表更直观</strong>。</p><p><strong>2）案例剖析</strong></p><p>同样，我们依据判定表的两个例子来做成判定树。</p><p><strong>案例一：检查发货单</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270936773.png" alt="判定树-检查发货单"></p><p><strong>案例二：旅游预订票系统“计算折扣量”</strong></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937484.png" alt="判定树-旅游管理系统"></p><p>从上面两张图中可以看到，<strong>判定树相较于判定表来说会更加直观</strong>。</p><h1 id="三、动态分析方法" tabindex="-1">三、动态分析方法 <a class="header-anchor" href="#三、动态分析方法" aria-label="Permalink to &quot;三、动态分析方法&quot;">​</a></h1><h2 id="_1、为什么需要系统动态分析方法" tabindex="-1">1、为什么需要系统动态分析方法？ <a class="header-anchor" href="#_1、为什么需要系统动态分析方法" aria-label="Permalink to &quot;1、为什么需要系统动态分析方法？&quot;">​</a></h2><ul><li><p>系统的需求规格说明通常是用<strong>自然语言</strong>来叙述的，但是用自然语言描述往往会出现<strong>歧义性</strong>。</p></li><li><p>因此，为了直观地分析系统的动作，从特定的视角出发去描述系统的行为，需要采用<strong>动态分析</strong>的方法。</p></li></ul><h2 id="_2、最常用的动态分析方法" tabindex="-1">2、最常用的动态分析方法 <a class="header-anchor" href="#_2、最常用的动态分析方法" aria-label="Permalink to &quot;2、最常用的动态分析方法&quot;">​</a></h2><h3 id="_1-状态迁移图" tabindex="-1">（1）状态迁移图 <a class="header-anchor" href="#_1-状态迁移图" aria-label="Permalink to &quot;（1）状态迁移图&quot;">​</a></h3><p><strong>1）状态迁移图是什么？</strong></p><p>状态迁移图，即 <code>State Transition Diagram</code>，缩写为 <code>STD</code> 。状态迁移图是描述<u>系统的状态</u><strong>如何使外部的信号进行推移</strong>的一种图形表示。</p><p><strong>2）状态迁移图的表示方式</strong></p><ul><li>圆圈 <code>○</code> 表示可得到的系统状态。</li><li>箭头 <code> →</code> 表示从一种状态向另一种状态的迁移。</li></ul><p><strong>3）案例剖析：CPU 进程的状态迁移</strong></p><p>假设某个系统当前有多个状态申请占用 CPU 运行的进程, 其中 CPU 所分配进程的状态迁移如下。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937518.png" alt="状态迁移图"></p><p>由上图可分析出状态迁移图，状态迁移表以及相对应的状态，如下图所示。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937377.png" alt="状态迁移相应状态表示"></p><p><strong>4）状态迁移图的优点</strong></p><ul><li><p>状态之间的关系能够直观地被捕捉到。</p></li><li><p>由于状态迁移图的单纯性，能够机械地分析许多情况，可很容易地建立分析工具。</p></li></ul><h3 id="_2-时序图" tabindex="-1">（2）时序图 <a class="header-anchor" href="#_2-时序图" aria-label="Permalink to &quot;（2）时序图&quot;">​</a></h3><p><strong>1）时序图是什么？</strong></p><p>时序图 <code>（Sequence Diagram）</code> ，又名序列图、循序图，是一种 <code>UML</code> 交互图。它通过描述对象之间发送消息的时间顺序来显示多个对象之间的动态协作。</p><p><strong>2）案例剖析：功能事件</strong></p><p>在下图中, 对于事件 <code>e</code> , <code>功能1～功能3</code> 的处理时间总计为 <code>(T1＋T2＋T3）</code> ，其中功能间切换时间为 <code>0</code> 。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937540.png" alt="功能事件"></p><p><strong>3）案例剖析：进程间的通信流</strong></p><p>在下图中，采用<strong>扩充时序图</strong>可表示进程间的通信流，用于分析几个事件的交错现象。 <code>C1</code> 与 <code>C2</code> ，<code>R1</code> 与 <code>R2</code> 是交错的。因此，可以做如下分析：“ <code>HOST1</code> 在等待 <code>C1</code> 的回答时（即 <code>R1</code> 期间），要能接收从 <code>HOST2</code> 发出的命令 <code>C2</code> 。”</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270937357.png" alt="进程间的通信流"></p><h1 id="四、写在最后" tabindex="-1">四、写在最后 <a class="header-anchor" href="#四、写在最后" aria-label="Permalink to &quot;四、写在最后&quot;">​</a></h1><p>对于软件工程中的结构化系统分析来说，主要解决软件“做什么”的问题。特别是关于数据流图和数据字典的内容较多，学完要多消化总结。同时我也将在下一篇文章讲解关于数据流图与数据字典的一些案例分析。</p><p>关于软件工程的结构化系统分析就讲到这里啦！如有需要了解软件工程相关的其他内容，可到『<a href="https://blog.csdn.net/weixin_44803753/category_10895589.html?spm=1001.2014.3001.5482" target="_blank" rel="noreferrer">软件工程</a>』栏目进行查看学习~</p>`,162),r=[l];function e(g,i,p,d,c,h){return s(),o("div",null,r)}const y=t(a,[["render",e]]);export{u as __pageData,y as default};
