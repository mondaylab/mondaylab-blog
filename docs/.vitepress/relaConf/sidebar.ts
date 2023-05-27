import { DefaultTheme } from 'vitepress';
export const sidebar: DefaultTheme.Sidebar = {
  '/column/Algorithm/': [
    {
      text: '数据结构在前端中的应用',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/column/Algorithm/001_Stack'
        },
        {
          text: '队列-事件循环',
          link: '/column/Algorithm/002_Queue'
        },
        {
          text: '链表-原型和原型链',
          link: '/column/Algorithm/003_LinkedList'
        },
        {
          text: '字典和集合-Set和Map',
          link: '/column/Algorithm/004_Dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/column/Algorithm/005_Tree'
        },
        {
          text: '图-邻接矩阵/邻接表',
          link: '/column/Algorithm/006_Graph'
        },
        {
          text: '堆-最大堆/最小堆',
          link: '/column/Algorithm/007_Heap'
        }
      ]
    },
    {
      text: '算法在前端中的应用',
      items: [
        {
          text: '分治思想和动态规划',
          link: '/column/Algorithm/008_Dynamics'
        },
        {
          text: '贪心算法和回溯算法',
          link: '/column/Algorithm/009_Greedy'
        },
        {
          text: '搜索和排序算法',
          link: '/column/Algorithm/010_Search'
        }
      ]
    }
  ],
  '/column/Interview/': [
    {
      text: '前端三件套',
      items: [
        {
          text: 'HTML篇',
          link: '/column/Interview/Html5'
        },
        {
          text: 'CSS篇',
          link: '/column/Interview/CSS'
        },
        {
          text: 'JavaScript篇',
          link: '/column/Interview/JavaScript'
        }
      ]
    },
    {
      text: '计算机基础知识',
      items: [
        {
          text: '计算机网络',
          link: '/column/Interview/Network'
        },
        {
          text: '浏览器原理',
          link: '/column/Interview/Browser'
        },
        {
          text: '计算机操作系统',
          link: '/column/Interview/OperatingSystem'
        }
      ]
    },
    {
      text: '框架和项目',
      items: [
        {
          text: 'vue.js篇',
          link: '/column/Interview/Vue'
        },
        {
          text: 'react.js篇',
          link: '/column/Interview/React'
        },
        {
          text: 'node.js篇',
          link: '/column/Interview/Node'
        },
        {
          text: 'TypeScript篇',
          link: '/column/Interview/TypeScript'
        },
        {
          text: 'Webpack篇',
          link: '/column/Interview/Webpack'
        },
        {
          text: '性能优化篇',
          link: '/column/Interview/Performance'
        },
        {
          text: '开发环境篇',
          link: '/column/Interview/Development'
        },
        {
          text: 'JavaScript设计模式',
          link: '/column/Interview/DesignMode'
        }
      ]
    },
    {
      text: '手写系列',
      items: [
        {
          text: 'CSS手写系列',
          link: '/column/Interview/CSSWriting'
        },
        {
          text: 'JavaScript手写系列',
          link: '/column/Interview/JSWriting'
        }
      ]
    },
    {
      text: '算法系列',
      items: [
        {
          text: '数据结构与算法',
          link: '/column/Interview/DataStructure'
        },
        {
          text: 'leetcode算法题',
          link: '/column/Interview/Leetcode'
        }
      ]
    }
  ],
  '/column/ComputerKnowledge/': [
    {
      text: '浏览器原理',
      items: [
        {
          text: '浏览器存储问题',
          link: '/column/ComputerKnowledge/Browser/001'
        },
        {
          text: '图解强缓存和弱缓存',
          link: '/column/ComputerKnowledge/Browser/002'
        }
      ]
    },
    {
      text: '前端安全',
      items: [
        {
          text: 'xss和csrf',
          link: '/column/ComputerKnowledge/Security/001'
        }
      ]
    },
    {
      text: '性能优化',
      items: [
        {
          text: '防抖和节流',
          link: '/column/ComputerKnowledge/PerformanceOptimization/001'
        }
      ]
    }
  ],
  '/column/BaseCommand/': [
    {
      text: 'Windows快捷键',
      items: [
        {
          text: '001-vscode快捷键',
          link: '/column/BaseCommand/WinShortcutKey/001'
        },
        {
          text: '002-Windows快捷键',
          link: '/column/BaseCommand/WinShortcutKey/002'
        },
        {
          text: '003-Notion快捷键',
          link: '/column/BaseCommand/WinShortcutKey/003'
        },
        {
          text: '004-Potplayer快捷键',
          link: '/column/BaseCommand/WinShortcutKey/004'
        }
      ]
    },
    {
      text: 'MacOS快捷键',
      items: [
        {
          text: '001-vscode快捷键',
          link: '/column/BaseCommand/MacShortcutKey/001_vscode'
        },
        {
          text: '002-MacOS快捷键',
          link: '/column/BaseCommand/MacShortcutKey/002_macos'
        },
        {
          text: '003-控制台快捷键',
          link: '/column/BaseCommand/MacShortcutKey/003_console'
        },
        {
          text: '004-Google快捷键',
          link: '/column/BaseCommand/MacShortcutKey/004_google'
        },
        {
          text: '005-Typora快捷键',
          link: '/column/BaseCommand/MacShortcutKey/005_typora'
        },
        {
          text: '006-Notion快捷键',
          link: '/column/BaseCommand/MacShortcutKey/006_notion'
        },
        {
          text: '007-Git命令',
          link: '/column/BaseCommand/MacShortcutKey/007_git'
        },
        {
          text: '008-Linux命令',
          link: '/column/BaseCommand/MacShortcutKey/008_linux'
        },
        {
          text: '008-Linux命令',
          link: '/column/BaseCommand/MacShortcutKey/009_lark'
        }
      ]
    }
  ],
  '/column/Template': [
    {
      text: 'notion模板',
      items: [
        {
          text: '001-使用notion搭建年度工作流',
          link: '/column/Template/Notion/001'
        },
        {
          text: '002-使用notion搭建每日计划工作流',
          link: '/column/Template/Notion/002'
        }
      ]
    }
  ],
  '/column/FrontEnd/': [
    {
      text: 'CSS',
      items: [
        {
          text: '001-position和z-index',
          link: '/column/FrontEnd/CSS/001'
        },
        {
          text: '002-CSS选择器优先级',
          link: '/column/FrontEnd/CSS/002'
        }
      ]
    },
    {
      text: 'JavaScript',
      items: [
        {
          text: '001-作用域和闭包',
          link: '/column/FrontEnd/JavaScript/001'
        },
        {
          text: '002-this的应用场景',
          link: '/column/FrontEnd/JavaScript/002'
        },
        {
          text: '003-promise和async/await',
          link: '/column/FrontEnd/JavaScript/003'
        },
        {
          text: '004-Web API种的DOM和BOM',
          link: '/column/FrontEnd/JavaScript/004'
        },
        {
          text: '005-事件绑定、事件冒泡和事件委托',
          link: '/column/FrontEnd/JavaScript/005'
        },
        {
          text: '006-跨域大山AJAX',
          link: '/column/FrontEnd/JavaScript/006'
        },
        {
          text: '007-HTMLCollection和NodeList',
          link: '/column/FrontEnd/JavaScript/007'
        },
        {
          text: '008-JS中的七大继承方案',
          link: '/column/FrontEnd/JavaScript/008'
        },
        {
          text: '009-手写Promise的核心功能',
          link: '/column/FrontEnd/JavaScript/009'
        }
      ]
    },
    {
      text: 'vue.js',
      items: [
        {
          text: '001-vue的基本使用和高级特性',
          link: '/column/FrontEnd/VUE/001'
        },
        {
          text: '002-vue3基础新特性',
          link: '/column/FrontEnd/VUE/002'
        },
        {
          text: '003-vue3新特性：ref、toRef和toRefs',
          link: '/column/FrontEnd/VUE/003'
        },
        {
          text: '004-vue3进阶新特性',
          link: '/column/FrontEnd/VUE/004'
        },
        {
          text: '005-vue3模块化妙用',
          link: '/column/FrontEnd/VUE/005'
        },
        {
          text: '006-vue3的teleport和suspense',
          link: '/column/FrontEnd/VUE/006'
        },
        {
          text: '007-前端路由hash和history',
          link: '/column/FrontEnd/VUE/007'
        },
        {
          text: '008-重温 vue3 composition-api',
          link: '/column/FrontEnd/VUE/008_vue3api'
        },
        {
          text: '009-vitepress 从0到1 搭建技术博客',
          link: '/column/FrontEnd/VUE/009_vitepress_blog'
        }
      ]
    },
    {
      text: 'react.js',
      items: [
        {
          text: '001-初探react',
          link: '/column/FrontEnd/React/001'
        },
        {
          text: '002-react进阶知识',
          link: '/column/FrontEnd/React/002'
        },
        {
          text: '003-Redux从入门到进阶',
          link: '/column/FrontEnd/React/003'
        },
        {
          text: '004-react的基本使用和高级特性',
          link: '/column/FrontEnd/React/004'
        },
        {
          text: '005-React hooks',
          link: '/column/FrontEnd/React/005'
        }
      ]
    },
    {
      text: 'vue.js原理解析',
      items: [
        {
          text: '001-vue2响应式原理',
          link: '/column/FrontEnd/VUEPrinciple/001'
        },
        {
          text: '002-虚拟DOM和diff算法',
          link: '/column/FrontEnd/VUEPrinciple/002'
        },
        {
          text: '003-模板编译template的背后',
          link: '/column/FrontEnd/VUEPrinciple/003'
        },
        {
          text: '004-vue3响应式原理',
          link: '/column/FrontEnd/VUEPrinciple/004'
        }
      ]
    },
    {
      text: 'TypeScript',
      items: [
        {
          text: '001-TS入门小知识',
          link: '/column/FrontEnd/TypeScript/001_tsIntro'
        },
        {
          text: '002-ts装饰器',
          link: '/column/FrontEnd/TypeScript/002_tsDecorator'
        },
        {
          text: '002-ts装饰器',
          link: '/column/FrontEnd/TypeScript/003'
        }
      ]
    },
    {
      text: 'Webpack',
      items: [
        {
          text: '001-webpack超入门核心知识',
          link: '/column/FrontEnd/Webpack/001'
        },
        {
          text: '002-webpack入门进阶知识',
          link: '/column/FrontEnd/Webpack/002'
        },
        {
          text: '003-手写一个loader和plugin',
          link: '/column/FrontEnd/Webpack/003'
        },
        {
          text: '004-webpack实战案例配置',
          link: '/column/FrontEnd/Webpack/004'
        },
        {
          text: '005-手写bundler打包工具',
          link: '/column/FrontEnd/Webpack/005'
        }
      ]
    },
    {
      text: 'vue3+ts组件库开发',
      items: [
        {
          text: '001-全局Header和列表数据渲染ColumnList',
          link: '/column/FrontEnd/ComponentLib/001'
        },
        {
          text: '002-Web世界中的表单验证',
          link: '/column/FrontEnd/ComponentLib/002'
        }
      ]
    },
    {
      text: '实战类',
      items: [
        {
          text: '001-中秋节网页',
          link: '/column/FrontEnd/Practice/001'
        }
      ]
    },
    {
      text: '青训营YouthCamp',
      items: [
        {
          text: '001-HTML基础',
          link: '/column/FrontEnd/YouthCamp/001'
        },
        {
          text: '002-CSS的奥秘',
          link: '/column/FrontEnd/YouthCamp/002'
        },
        {
          text: '003-UI设计',
          link: '/column/FrontEnd/YouthCamp/003'
        },
        {
          text: '004-如何写好JS（上）',
          link: '/column/FrontEnd/YouthCamp/004'
        },
        {
          text: '005-如何写好JS（下）',
          link: '/column/FrontEnd/YouthCamp/005'
        },
        {
          text: '006-Web视觉下的前端开发',
          link: '/column/FrontEnd/YouthCamp/006'
        },
        {
          text: '007-红绿灯梭行',
          link: '/column/FrontEnd/YouthCamp/007'
        },
        {
          text: '008-幂等问题',
          link: '/column/FrontEnd/YouthCamp/008'
        },
        {
          text: '009-扑克牌洗牌问题',
          link: '/column/FrontEnd/YouthCamp/009'
        },
        {
          text: '010-微信抢红包功能',
          link: '/column/FrontEnd/YouthCamp/010'
        },
        {
          text: '011-结营感悟',
          link: '/column/FrontEnd/YouthCamp/011'
        }
      ]
    },
    {
      text: '掘金翻译计划',
      items: [
        {
          text: '001-JS中的测试工具',
          link: '/column/FrontEnd/Translation/001'
        }
      ]
    }
  ],
  '/column/BackEnd/': [
    {
      text: 'Node.js',
      items: [
        {
          text: '001-项目部署到阿里云服务器',
          link: '/column/BackEnd/Node/001'
        }
      ]
    },
    {
      text: '开发环境Linux',
      items: [
        // {
        //   text: '001-浏览器存储问题',
        //   link: '/column/SoftwareEngineer/Guide'
        // },
        // {
        //   text: '002-图解强缓存和弱缓存',
        //   link: '/column/SoftwareEngineer/Definition'
        // },
      ]
    }
  ],
  '/column/Growing/': [
    {
      text: '年度总结',
      items: [
        {
          text: '001-2021年中总结',
          link: '/column/Growing/YearSummary/001'
        },
        {
          text: '002-2021年终总结',
          link: '/column/Growing/YearSummary/002'
        }
      ]
    },
    {
      text: '复盘总结',
      items: [
        {
          text: '001-2021.07复盘总结',
          link: '/column/Growing/ReviewSummary/001'
        },
        {
          text: '002-2021.08-09复盘总结',
          link: '/column/Growing/ReviewSummary/002'
        },
        {
          text: '003-青训营结营心得',
          link: '/column/Growing/ReviewSummary/003'
        }
      ]
    }
    // {
    //   text: "自我提升",
    //   items: [],
    // },
  ],
  '/column/Travel/': [
    {
      text: '华东地区',
      items: [
        {
          text: '001 江西·又红又砖的城市',
          link: '/column/Travel/EastChina/JiangXi'
        }
      ]
    }
    // {
    //   text: "华南地区",
    //   items: [],
    // },
    // {
    //   text: "华北地区",
    //   items: [],
    // },
  ],
  '/column/Product/': [
    {
      text: '软件工程',
      items: [
        {
          text: '000-学习指南',
          link: '/column/Product/SoftwareEngineer/000Guide'
        },
        {
          text: '001-软件是什么',
          link: '/column/Product/SoftwareEngineer/001Definition'
        },
        {
          text: '002-软件过程模型',
          link: '/column/Product/SoftwareEngineer/002ProcessModel'
        },
        {
          text: '003-三种原型实现模型',
          link: '/column/Product/SoftwareEngineer/003Prototype'
        },
        {
          text: '004-软件项目管理中的4P',
          link: '/column/Product/SoftwareEngineer/004Product'
        },
        {
          text: '005-软件的度量',
          link: '/column/Product/SoftwareEngineer/005Measure'
        },
        {
          text: '006-软件范围与估算',
          link: '/column/Product/SoftwareEngineer/006Scope'
        },
        {
          text: '007-风险分析与管理',
          link: '/column/Product/SoftwareEngineer/007RiskAnalysis'
        },
        {
          text: '008-软件项目进度安排与跟踪',
          link: '/column/Product/SoftwareEngineer/008Schedule'
        },
        {
          text: '009-结构化系统分析',
          link: '/column/Product/SoftwareEngineer/009StructuredAnalysis'
        },
        {
          text: '010-数据流图和字典案例分析',
          link: '/column/Product/SoftwareEngineer/010DataFlowDiagram'
        },
        {
          text: '011-结构化系统设计',
          link: '/column/Product/SoftwareEngineer/011StructuredDesign'
        },
        {
          text: '012-软件测试',
          link: '/column/Product/SoftwareEngineer/012SoftwareTest'
        },
        {
          text: '013-统一建模语言UML',
          link: '/column/Product/SoftwareEngineer/013UML'
        }
      ]
    },
    {
      text: '软件测试',
      items: [
        {
          text: '001-软件测试基础知识',
          link: '/column/Product/SoftwareTesting/001'
        },
        {
          text: '002-黑盒测试和测试用例基础知识',
          link: '/column/Product/SoftwareTesting/002'
        },
        {
          text: '003-8种黑盒测试方法',
          link: '/column/Product/SoftwareTesting/003'
        },
        {
          text: '004-4种白盒测试方法',
          link: '/column/Product/SoftwareTesting/004'
        },
        {
          text: '005-性能测试',
          link: '/column/Product/SoftwareTesting/005'
        },
        {
          text: '006-安全测试',
          link: '/column/Product/SoftwareTesting/006'
        }
      ]
    }
  ],
  '/column/OtherLang': [
    {
      text: 'Android',
      items: [
        {
          text: '001-个人记账App',
          link: '/column/OtherLang/Android/001'
        }
      ]
    },
    {
      text: 'PHP',
      items: [
        {
          text: '001-PHP第一个项目：HelloWorld',
          link: '/column/OtherLang/PHP/001'
        },
        {
          text: '002-本机安装ThinkCMF系统',
          link: '/column/OtherLang/PHP/002'
        },
        {
          text: '003-ThinkCMF门户应用安装',
          link: '/column/OtherLang/PHP/003'
        }
      ]
    }
  ]
};
