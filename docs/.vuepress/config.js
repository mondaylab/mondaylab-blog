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
        text: '宝藏专栏', 
        items: [
          {
            text: '数构与前端',
            link: '/column/Algorithm'
          },
          {
            text: '面试通关秘籍',
            link: '/column/Interview'
          },
          {
            text: '软件工程',
            link: '/column/SoftwareEngineer'
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
          // { text: 'CSDN', link: 'https://blog.csdn.net/weixin_44803753' }
        ],
        icon: "reco-home"
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "基础学习",
        path: '/handbook/ConditionTypes',
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionTypes" },
          { title: "泛型", path: "/handbook/Generics" }
        ],
      }
    ],
    subSidebar: 'auto'
  },
  // 更换时间格式
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}