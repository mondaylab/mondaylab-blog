const { sidebar } = require("./sidebar.js");
module.exports = {
  title: '星期一研究室mondaylab',
  description: '分享前沿学习干货，不止前端',
  base: '/mondaylab-blog/',
  theme: 'reco',
  // 移动端搜索框优化
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    toc: {
      // includeLevel 默认只显示 [2, 3]
      includeLevel: [1, 2, 3, 4]
    },
    extractHeaders: [ 'h1', 'h2', 'h3', 'h4' ]
  },
  themeConfig: {
    // 取消404公益
    noFoundPageByTencent: false,
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
          }
        ],
        icon: "reco-tag"
      },
      {
        text: '干货集合',
        items: [
          {
            text: '快捷键',
            link: '/column/Learning/'
          },
          // {
          //   text: 'offer来了',
          //   link: '/column/Interview/'
          // }
        ],
        icon: "reco-tag"
      },
      {
        text: '分类索引',
        items: [
          
          {
            text: '产品汪',
            link: '/column/Product/'
          },
          {
            text: '前端开发',
            link: '/column/FrontEnd/'
          },
          {
            text: '其他语言',
            link: '/column/OtherLang/'
          },
          {
            text: '服务端开发',
            link: '/column/BackEnd/'
          },
          {
            text: '计算机基础知识',
            // 此处读到README.md文件中，或者下方sidebar中对应的链接
            link: '/column/ComputerKnowledge/'
          },
          {
            text: '碎碎念个人成长',
            link: '/column/Growing/'
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
    // subSidebar: 'auto',
    // 更换时间格式
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    type: "blog",
    // 标签设置
    blogConfig: {
      // category: {
      //   location: 2,
      //   text: "分类索引",
      // },
      // tag: {
      //   location: 3,
      //   text: "标签索引",
      // },
    },
    // 此处放导航栏最左侧的logo
    logo: "/avatar.png",
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