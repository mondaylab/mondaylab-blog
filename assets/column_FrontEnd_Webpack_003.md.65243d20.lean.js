import{_ as s,c as n,o as a,N as l}from"./chunks/framework.6510d215.js";const b=JSON.parse('{"title":"万字总结webpack实战案例配置","description":"","frontmatter":{"title":"万字总结webpack实战案例配置","author":"周一","date":"2021-08-04","categories":["前端开发"],"tags":["Webpack"],"sidebar":"auto"},"headers":[{"level":1,"title":"🛴 序言","slug":"🛴-序言","link":"#🛴-序言","children":[]},{"level":1,"title":"🚌 一、Library 的打包","slug":"🚌-一、library-的打包","link":"#🚌-一、library-的打包","children":[{"level":2,"title":"1. webpack 打包库","slug":"_1-webpack-打包库","link":"#_1-webpack-打包库","children":[]},{"level":2,"title":"2. 库引用冲突","slug":"_2-库引用冲突","link":"#_2-库引用冲突","children":[]}]},{"level":1,"title":"🚍 二、PWA 的打包配置","slug":"🚍-二、pwa-的打包配置","link":"#🚍-二、pwa-的打包配置","children":[{"level":2,"title":"1. PWA 是什么","slug":"_1-pwa-是什么","link":"#_1-pwa-是什么","children":[]},{"level":2,"title":"2. webpack 中的 PWA","slug":"_2-webpack-中的-pwa","link":"#_2-webpack-中的-pwa","children":[]}]},{"level":1,"title":"🚎 三、TypeScript 的打包配置","slug":"🚎-三、typescript-的打包配置","link":"#🚎-三、typescript-的打包配置","children":[{"level":2,"title":"1. 引例阐述","slug":"_1-引例阐述","link":"#_1-引例阐述","children":[]},{"level":2,"title":"2. webpack 对 ts 的配置","slug":"_2-webpack-对-ts-的配置","link":"#_2-webpack-对-ts-的配置","children":[{"level":3,"title":"（1）背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":3,"title":"（2）配置步骤","slug":"_2-配置步骤","link":"#_2-配置步骤","children":[]}]},{"level":2,"title":"3. ts 识别第三方库","slug":"_3-ts-识别第三方库","link":"#_3-ts-识别第三方库","children":[]}]},{"level":1,"title":"🚕 四、WebpackDevServer 进阶操作","slug":"🚕-四、webpackdevserver-进阶操作","link":"#🚕-四、webpackdevserver-进阶操作","children":[{"level":2,"title":"1. WebpackDevServer 实现请求转发","slug":"_1-webpackdevserver-实现请求转发","link":"#_1-webpackdevserver-实现请求转发","children":[]},{"level":2,"title":"2. WebpackDevServer 解决单页面应用路由问题","slug":"_2-webpackdevserver-解决单页面应用路由问题","link":"#_2-webpackdevserver-解决单页面应用路由问题","children":[]}]},{"level":1,"title":"🚖 五、ESLint 在 Webpack 中的配置","slug":"🚖-五、eslint-在-webpack-中的配置","link":"#🚖-五、eslint-在-webpack-中的配置","children":[{"level":2,"title":"1. ESLint 是什么","slug":"_1-eslint-是什么","link":"#_1-eslint-是什么","children":[]},{"level":2,"title":"2. 如何安装 ESLint","slug":"_2-如何安装-eslint","link":"#_2-如何安装-eslint","children":[]},{"level":2,"title":"3. 为什么要在 webpack 中配置 ESLint","slug":"_3-为什么要在-webpack-中配置-eslint","link":"#_3-为什么要在-webpack-中配置-eslint","children":[]}]},{"level":1,"title":"🏎️ 六、Webpack 性能优化","slug":"🏎️-六、webpack-性能优化","link":"#🏎️-六、webpack-性能优化","children":[{"level":2,"title":"1. 跟上技术的迭代(Node,Npm,Yarn)","slug":"_1-跟上技术的迭代-node-npm-yarn","link":"#_1-跟上技术的迭代-node-npm-yarn","children":[]},{"level":2,"title":"2. 在尽可能少的模块上应用 Loader","slug":"_2-在尽可能少的模块上应用-loader","link":"#_2-在尽可能少的模块上应用-loader","children":[]},{"level":2,"title":"3. 合理使用插件","slug":"_3-合理使用插件","link":"#_3-合理使用插件","children":[]},{"level":2,"title":"4. resolve 参数合理配置","slug":"_4-resolve-参数合理配置","link":"#_4-resolve-参数合理配置","children":[{"level":3,"title":"（1）常见配置","slug":"_1-常见配置","link":"#_1-常见配置","children":[]},{"level":3,"title":"（2）参数讲解","slug":"_2-参数讲解","link":"#_2-参数讲解","children":[]}]},{"level":2,"title":"5. 使用 DllPlugin 提高打包速度","slug":"_5-使用-dllplugin-提高打包速度","link":"#_5-使用-dllplugin-提高打包速度","children":[]},{"level":2,"title":"6. 控制包文件大小","slug":"_6-控制包文件大小","link":"#_6-控制包文件大小","children":[]},{"level":2,"title":"7. 多进程打包","slug":"_7-多进程打包","link":"#_7-多进程打包","children":[]},{"level":2,"title":"8. 合理使用 sourceMap","slug":"_8-合理使用-sourcemap","link":"#_8-合理使用-sourcemap","children":[]},{"level":2,"title":"9. 结合 stats 分析打包结果","slug":"_9-结合-stats-分析打包结果","link":"#_9-结合-stats-分析打包结果","children":[]},{"level":2,"title":"10. 开发环境内存编译","slug":"_10-开发环境内存编译","link":"#_10-开发环境内存编译","children":[]},{"level":2,"title":"11. 开发环境无用插件剔除","slug":"_11-开发环境无用插件剔除","link":"#_11-开发环境无用插件剔除","children":[]}]},{"level":1,"title":"🏍️ 七、多页面打包配置","slug":"🏍️-七、多页面打包配置","link":"#🏍️-七、多页面打包配置","children":[]},{"level":1,"title":"🛵 八、结束语","slug":"🛵-八、结束语","link":"#🛵-八、结束语","children":[]},{"level":1,"title":"🐣 彩蛋 One More Thing","slug":"🐣-彩蛋-one-more-thing","link":"#🐣-彩蛋-one-more-thing","children":[{"level":2,"title":"（：往期推荐","slug":"往期推荐","link":"#往期推荐","children":[]},{"level":2,"title":"（：番外篇","slug":"番外篇","link":"#番外篇","children":[]}]}],"relativePath":"column/FrontEnd/Webpack/003.md","lastUpdated":1644826256000}'),p={name:"column/FrontEnd/Webpack/003.md"},e=l("",174),o=[e];function r(c,t,D,i,y,F){return a(),n("div",null,o)}const A=s(p,[["render",r]]);export{b as __pageData,A as default};
