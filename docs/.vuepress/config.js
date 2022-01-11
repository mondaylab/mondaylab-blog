module.exports = {
  title: '星期一研究室mondaylab',
  description: '分享前沿学习干货，不止前端',
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '周一的博客', 
        items: [
            { text: 'Github', link: 'https://github.com/Jacqueline712' },
            { text: '掘金', link: 'https://juejin.cn/user/3131845139247960/posts' },
            { text: 'CSDN', link: 'https://blog.csdn.net/weixin_44803753' },
        ]
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
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
          ]
    }
}