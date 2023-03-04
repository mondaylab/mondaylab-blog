import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "个人成长",
    items: [
      {
        text: "大江南北游记",
        link: "/column/Travel/",
      },
      {
        text: "所思·所想",
        link: "/column/Growing/",
      },
    ],
  },
  {
    text: "精选专栏",
    items: [
      {
        text: "数构与前端",
        // 此处读到README.md文件中，或者下方sidebar中对应的链接
        link: "/column/Algorithm/",
      },
      {
        text: "offer来了",
        link: "/column/Interview/",
      },
    ],
  },
  {
    text: "干货社区",
    items: [
      {
        text: "快捷键",
        link: "/column/BaseCommand/",
      },
      {
        text: "模板管理",
        link: "/column/Template/",
      },
    ],
  },
  {
    text: "分类索引",
    items: [
      {
        text: "产品汪",
        link: "/column/Product/",
      },
      {
        text: "前端开发",
        link: "/column/FrontEnd/",
      },
      {
        text: "其他语言",
        link: "/column/OtherLang/",
      },
      {
        text: "服务端开发",
        link: "/column/BackEnd/",
      },
      {
        text: "计算机基础知识",
        // 此处读到README.md文件中，或者下方sidebar中对应的链接
        link: "/column/ComputerKnowledge/",
      },
      {
        text: "碎碎念个人成长",
        link: "/column/Growing/",
      },
    ],
  },
  {
    text: "关于我",
    items: [
      { text: "Github", link: "https://github.com/Jacqueline712" },
      {
        text: "掘金",
        link: "https://juejin.cn/user/3131845139247960/posts",
      },
      {
        text: "飞书社区",
        link: "https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink",
      },
      { text: "CSDN", link: "https://blog.csdn.net/weixin_44803753" },
      {
        text: "知乎",
        link: "https://www.zhihu.com/people/zheng-zi-ji-67-89/posts",
      },
      // { text: '公众号', link: 'https://blog.csdn.net/weixin_44803753' }
    ],
  },
];
