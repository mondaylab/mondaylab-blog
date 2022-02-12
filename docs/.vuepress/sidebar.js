module.exports = {
  sidebar: {
    '/column/Algorithm/': [
      {
        title: '数据结构在前端中的应用',
        sidebarDepth: 2,
        children: [
          {
            title: '栈-深拷贝和浅拷贝',
            path: '/column/Algorithm/Stack'
          },
          {
            title: '队列-事件循环',
            path: '/column/Algorithm/Queue'
          },
          {
            title: '链表-原型和原型链',
            path: '/column/Algorithm/LinkedList'
          },
          {
            title: '字典和集合-Set和Map',
            path: '/column/Algorithm/Dictionary'
          },
          {
            title: '树-深/广度优先遍历',
            path: '/column/Algorithm/Tree'
          },
          {
            title: '图-邻接矩阵/邻接表',
            path: '/column/Algorithm/Chart'
          }
        ]
      },
      {
        title: '算法在前端中的应用',
        sidebarDepth: 2,
        children: [
          {
            title: '分治思想和动态规划',
            path: '/column/Algorithm/Dynamics'
          },
          {
            title: '贪心算法和回溯算法',
            path: '/column/Algorithm/Greedy'
          },
          {
            title: '搜索和排序算法',
            path: '/column/Algorithm/Search'
          }
        ]
      }
    ],
    '/column/Interview/': [
      {
        title: '前端三件套',
        sidebarDepth: 2,
        children: [
          {
            title: 'HTML篇',
            path: '/column/Interview/Html5'
          },
          {
            title: 'CSS篇',
            path: '/column/Interview/CSS'
          },
          {
            title: 'JavaScript篇',
            path: '/column/Interview/JavaScript'
          }
        ]
      },
      {
        title: '计算机基础知识',
        sidebarDepth: 2,
        children: [
          {
            title: '计算机网络',
            path: '/column/Interview/Network'
          },
          {
            title: '浏览器原理',
            path: '/column/Interview/Browser'
          },
          {
            title: '计算机操作系统',
            path: '/column/Interview/OperatingSystem'
          }
        ]
      },
      {
        title: '框架和项目',
        sidebarDepth: 2,
        children: [
          {
            title: 'vue.js篇',
            path: '/column/Interview/Vue'
          },
          {
            title: 'react.js篇',
            path: '/column/Interview/React'
          },
          {
            title: 'node.js篇',
            path: '/column/Interview/Node'
          },
          {
            title: 'TypeScript篇',
            path: '/column/Interview/TypeScript'
          },
          {
            title: 'Webpack篇',
            path: '/column/Interview/Webpack'
          },
          {
            title: '性能优化篇',
            path: '/column/Interview/Performance'
          },
          {
            title: '开发环境篇',
            path: '/column/Interview/Development'
          },
          {
            title: 'JavaScript设计模式',
            path: '/column/Interview/DesignMode'
          }
        ]
      },
      {
        title: '手写系列',
        sidebarDepth: 2,
        children: [
          {
            title: 'CSS手写系列',
            path: '/column/Interview/CSSWriting'
          },
          {
            title: 'JavaScript手写系列',
            path: '/column/Interview/JSWriting'
          }
        ]
      },
      {
        title: '算法系列',
        sidebarDepth: 2,
        children: [
          {
            title: '数据结构与算法',
            path: '/column/Interview/DataStructure'
          },
          {
            title: 'leetcode算法题',
            path: '/column/Interview/Leetcode'
          }
        ]
      }
    ],
    '/column/SoftwareEngineer/': [
      {
        title: '软件工程',
        sidebarDepth: 2,
        children: [
          {
            title: '00-学习指南',
            path: '/column/SoftwareEngineer/Guide'
          },
          {
            title: '01-软件是什么',
            path: '/column/SoftwareEngineer/Definition'
          },
          {
            title: '02-软件过程模型',
            path: '/column/SoftwareEngineer/ProcessModel'
          },
          {
            title: '03-三种原型实现模型',
            path: '/column/SoftwareEngineer/Prototype'
          },
          {
            title: '04-软件项目管理中的4P',
            path: '/column/SoftwareEngineer/Product'
          },
          {
            title: '05-软件的度量',
            path: '/column/SoftwareEngineer/Measure'
          },
          {
            title: '06-软件范围与估算',
            path: '/column/SoftwareEngineer/Scope'
          },
          {
            title: '07-风险分析与管理',
            path: '/column/SoftwareEngineer/RiskAnalysis'
          },
          {
            title: '08-软件项目进度安排与跟踪',
            path: '/column/SoftwareEngineer/Schedule'
          },
          {
            title: '09-结构化系统分析',
            path: '/column/SoftwareEngineer/StructuredAnalysis'
          },
          {
            title: '10-数据流图和字典案例分析',
            path: '/column/SoftwareEngineer/DataFlowDiagram'
          },
          {
            title: '11-结构化系统设计',
            path: '/column/SoftwareEngineer/StructuredDesign'
          },
          {
            title: '12-软件测试',
            path: '/column/SoftwareEngineer/SoftwareTest'
          },
          {
            title: '13-统一建模语言UML',
            path: '/column/SoftwareEngineer/UML'
          }
        ]
      }
    ],
    '/column/Browser/': [
      {
        title: '浏览器原理',
        sidebarDepth: 2,
        children: [
          {
            title: '001-浏览器存储问题',
            path: '/column/SoftwareEngineer/Guide'
          },
          {
            title: '002-图解强缓存和弱缓存',
            path: '/column/SoftwareEngineer/Definition'
          },  
        ]
      }
    ],
    // '/': [
    //   {
    //     title: '欢迎学习',
    //     path: '/',
    //     collapsable: false, // 不折叠
    //     children: [
    //       { title: "学前必读", path: "/" }
    //     ]
    //   },
    //   {
    //     title: "基础学习",
    //     path: '/handbook/ConditionTypes',
    //     collapsable: false, // 不折叠
    //     children: [
    //       { title: "条件类型", path: "/handbook/ConditionTypes" },
    //       { title: "泛型", path: "/handbook/Generics" }
    //     ],
    //   }, 
    // ]
  },
}