/**
 * @description 基础配置
 */
import { defineConfig } from "vitepress";
import { sidebar, nav } from "./relaConf";
import { demoBlockPlugin } from "vitepress-theme-demoblock";
const anchor = require("markdown-it-anchor"); // markdown的库

export default defineConfig({
  // 基本配置
  base: process.env.BASE || "/mondaylab-blog/", // 项目的基础路径
  title: "星期一研究室mondaylab", // 文档的标题
  description: "分享前沿学习干货，不止前端", // 文档描述
  lastUpdated: true,

  // 移动端搜索框优化
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],

  // 配置markdown写作风格
  markdown: {
    toc: {
      // level 默认只显示 [2, 3]
      level: [1, 2, 3, 4],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: "less",
      });
    },
  },

  // 主题配置
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/Jacqueline712" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021-present 周一",
    },
  },
});
