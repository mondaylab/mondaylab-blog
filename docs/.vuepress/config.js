const sidebar = require("./sidebar.js");
module.exports = {
  title: '星期一研究室mondaylab',
  description: '分享前沿学习干货，不止前端',
  base: '/mondaylab-blog/',
  theme: 'reco',
  // 移动端搜索框优化
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
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
            // 此处读到README.md文件中，或者下方sidebar中对应的链接
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
        icon: "reco-tag"
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
        icon: "reco-account"
      }
    ],
    sidebar,
    subSidebar: 'auto',
    // 更换时间格式
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    type: "blog",
    // 标签设置
    blogConfig: {
      category: {
        location: 2,
        text: "目录索引",
      },
      tag: {
        location: 3,
        text: "标签索引",
      },
    },
    // 此处放导航栏最左侧的logo
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "SyllableCheng",
    authorAvatar: "/avatar.png",
    // 备案
    record: 'vuepress-theme-reco@1.6.10',
    // 项目开始时间，只填写年份
    startYear: '2022'
  }
}