module.exports = {
  title: '星期一研究室mondaylab',
  description: '分享前沿学习干货，不止前端',
  base: '/mondaylab-blog/',
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
        icon: "reco-home"
      },
      { 
        text: '精选专栏', 
        items: [
          {
            text: '数构与前端',
            // 此处读到README.md文件中
            link: '/column/Algorithm/'
          },
          {
            text: 'offer来了',
            link: '/column/Interview/'
          },
          {
            text: '软件工程',
            link: '/column/SoftwareEngineer/'
          }
        ],
        icon: "reco-home"
      },
      { 
        text: '快速预览', 
        items: [
          { text: 'Github', link: 'https://github.com/Jacqueline712' },
          { text: '掘金', link: 'https://juejin.cn/user/3131845139247960/posts' },
          { text: 'CSDN', link: 'https://blog.csdn.net/weixin_44803753' },
          { text: 'InfoQ', link: 'https://www.infoq.cn/profile/3AC1A95FEC468A/publish' },
          { text: '知乎', link: 'https://www.zhihu.com/people/zheng-zi-ji-67-89/posts' },
          // { text: '公众号', link: 'https://blog.csdn.net/weixin_44803753' }
        ],
        icon: "reco-home"
      }
    ],
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
      ]
      // {
      //   title: '欢迎学习',
      //   path: '/',
      //   collapsable: false, // 不折叠
      //   children: [
      //     { title: "学前必读", path: "/" }
      //   ]
      // },
      // {
      //   title: "基础学习",
      //   path: '/handbook/ConditionTypes',
      //   collapsable: false, // 不折叠
      //   children: [
      //     { title: "条件类型", path: "/handbook/ConditionTypes" },
      //     { title: "泛型", path: "/handbook/Generics" }
      //   ],
      // }
    },
    subSidebar: 'auto'
  },
  // 更换时间格式
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}