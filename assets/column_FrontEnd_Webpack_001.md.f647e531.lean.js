import{_ as s,c as n,o as a,N as l}from"./chunks/framework.6510d215.js";const b=JSON.parse('{"title":"不会webpack的前端可能是捡来的，万字总结webpack的超入门核心知识","description":"","frontmatter":{"title":"不会webpack的前端可能是捡来的，万字总结webpack的超入门核心知识","author":"周一","date":"2021-07-15","categories":["前端开发"],"tags":["Webpack"],"sidebar":"auto"},"headers":[{"level":1,"title":"🎨 序言","slug":"🎨-序言","link":"#🎨-序言","children":[]},{"level":1,"title":"📅 一、webpack 究竟是什么","slug":"📅-一、webpack-究竟是什么","link":"#📅-一、webpack-究竟是什么","children":[{"level":2,"title":"1、写在前面","slug":"_1、写在前面","link":"#_1、写在前面","children":[]},{"level":2,"title":"2、什么是模块打包工具？","slug":"_2、什么是模块打包工具","link":"#_2、什么是模块打包工具","children":[]}]},{"level":1,"title":"📐 二、如何用 Webpack 搭建环境","slug":"📐-二、如何用-webpack-搭建环境","link":"#📐-二、如何用-webpack-搭建环境","children":[{"level":2,"title":"1、安装 node","slug":"_1、安装-node","link":"#_1、安装-node","children":[]},{"level":2,"title":"2、创建项目","slug":"_2、创建项目","link":"#_2、创建项目","children":[]},{"level":2,"title":"3、初始化项目","slug":"_3、初始化项目","link":"#_3、初始化项目","children":[]},{"level":2,"title":"4、安装 webpack","slug":"_4、安装-webpack","link":"#_4、安装-webpack","children":[]},{"level":2,"title":"5、安装具体版本的 webpack","slug":"_5、安装具体版本的-webpack","link":"#_5、安装具体版本的-webpack","children":[]}]},{"level":1,"title":"⚙️ 三、Webpack 的配置文件","slug":"⚙️-三、webpack-的配置文件","link":"#⚙️-三、webpack-的配置文件","children":[{"level":2,"title":"1、默认配置文件","slug":"_1、默认配置文件","link":"#_1、默认配置文件","children":[]},{"level":2,"title":"2、用 npm script 来简化我们的打包代码","slug":"_2、用-npm-script-来简化我们的打包代码","link":"#_2、用-npm-script-来简化我们的打包代码","children":[]},{"level":2,"title":"3、浅谈 webpack 打包输出内容","slug":"_3、浅谈-webpack-打包输出内容","link":"#_3、浅谈-webpack-打包输出内容","children":[]}]},{"level":1,"title":"🔑 四、Loader","slug":"🔑-四、loader","link":"#🔑-四、loader","children":[{"level":2,"title":"1、引例阐述","slug":"_1、引例阐述","link":"#_1、引例阐述","children":[]},{"level":2,"title":"2、什么是 Loader","slug":"_2、什么是-loader","link":"#_2、什么是-loader","children":[]},{"level":2,"title":"3、使用 Loader 打包静态资源（图片篇）","slug":"_3、使用-loader-打包静态资源-图片篇","link":"#_3、使用-loader-打包静态资源-图片篇","children":[{"level":3,"title":"（1）自定义命名图片","slug":"_1-自定义命名图片","link":"#_1-自定义命名图片","children":[]},{"level":3,"title":"（2）打包各种类型的图片文件","slug":"_2-打包各种类型的图片文件","link":"#_2-打包各种类型的图片文件","children":[]},{"level":3,"title":"（3）打包到 image 文件下","slug":"_3-打包到-image-文件下","link":"#_3-打包到-image-文件下","children":[]},{"level":3,"title":"（4）url-loader","slug":"_4-url-loader","link":"#_4-url-loader","children":[]}]},{"level":2,"title":"4、使用 Loader 打包静态资源（样式篇）","slug":"_4、使用-loader-打包静态资源-样式篇","link":"#_4、使用-loader-打包静态资源-样式篇","children":[{"level":3,"title":"（1）打包 css 文件","slug":"_1-打包-css-文件","link":"#_1-打包-css-文件","children":[]},{"level":3,"title":"（2）打包 sass 文件","slug":"_2-打包-sass-文件","link":"#_2-打包-sass-文件","children":[]},{"level":3,"title":"（3）兼容性问题","slug":"_3-兼容性问题","link":"#_3-兼容性问题","children":[]}]},{"level":2,"title":"5、增加配置项","slug":"_5、增加配置项","link":"#_5、增加配置项","children":[]},{"level":2,"title":"6、如何使用 webpack 打包字体文件","slug":"_6、如何使用-webpack-打包字体文件","link":"#_6、如何使用-webpack-打包字体文件","children":[]}]},{"level":1,"title":"🧲 五、使用 plugins 让打包更便携","slug":"🧲-五、使用-plugins-让打包更便携","link":"#🧲-五、使用-plugins-让打包更便携","children":[{"level":2,"title":"1、html-webpack-plugin","slug":"_1、html-webpack-plugin","link":"#_1、html-webpack-plugin","children":[]},{"level":2,"title":"2、clean-webpack-plugin","slug":"_2、clean-webpack-plugin","link":"#_2、clean-webpack-plugin","children":[]}]},{"level":1,"title":"🗞️ 六、Entry 和 Output","slug":"🗞️-六、entry-和-output","link":"#🗞️-六、entry-和-output","children":[]},{"level":1,"title":"🗺️ 七、SourceMap","slug":"🗺️-七、sourcemap","link":"#🗺️-七、sourcemap","children":[{"level":2,"title":"1、引例阐述","slug":"_1、引例阐述-1","link":"#_1、引例阐述-1","children":[]},{"level":2,"title":"2、sourceMap","slug":"_2、sourcemap","link":"#_2、sourcemap","children":[]},{"level":2,"title":"3、sourceMap 常见配置","slug":"_3、sourcemap-常见配置","link":"#_3、sourcemap-常见配置","children":[]}]},{"level":1,"title":"🧱 八、使用 WebpackDevServer 提升开发效率","slug":"🧱-八、使用-webpackdevserver-提升开发效率","link":"#🧱-八、使用-webpackdevserver-提升开发效率","children":[{"level":2,"title":"1、--watch","slug":"_1、-watch","link":"#_1、-watch","children":[]},{"level":2,"title":"2、webpackDevServer","slug":"_2、webpackdevserver","link":"#_2、webpackdevserver","children":[{"level":3,"title":"（1）安装 webpackDevServer","slug":"_1-安装-webpackdevserver","link":"#_1-安装-webpackdevserver","children":[]},{"level":3,"title":"（2）配置 package.json 文件","slug":"_2-配置-package-json-文件","link":"#_2-配置-package-json-文件","children":[]},{"level":3,"title":"（3）配置 webpack 文件","slug":"_3-配置-webpack-文件","link":"#_3-配置-webpack-文件","children":[]},{"level":3,"title":"（4）配置端口号","slug":"_4-配置端口号","link":"#_4-配置端口号","children":[]}]}]},{"level":1,"title":"🌡️ 九、Hot Module Replacement 热模块更新","slug":"🌡️-九、hot-module-replacement-热模块更新","link":"#🌡️-九、hot-module-replacement-热模块更新","children":[{"level":2,"title":"1、引例阐述","slug":"_1、引例阐述-2","link":"#_1、引例阐述-2","children":[]},{"level":2,"title":"2、热模块更新配置","slug":"_2、热模块更新配置","link":"#_2、热模块更新配置","children":[]}]},{"level":1,"title":"📀 十、使用 Babel 处理 ES6 语法","slug":"📀-十、使用-babel-处理-es6-语法","link":"#📀-十、使用-babel-处理-es6-语法","children":[{"level":2,"title":"1、ES6 语法转换为 ES5 语法","slug":"_1、es6-语法转换为-es5-语法","link":"#_1、es6-语法转换为-es5-语法","children":[]},{"level":2,"title":"2、Babel-polyfill","slug":"_2、babel-polyfill","link":"#_2、babel-polyfill","children":[]}]},{"level":1,"title":"📚 十一、结束语","slug":"📚-十一、结束语","link":"#📚-十一、结束语","children":[]},{"level":1,"title":"🐣 彩蛋 One More Thing","slug":"🐣-彩蛋-one-more-thing","link":"#🐣-彩蛋-one-more-thing","children":[{"level":2,"title":"往期推荐","slug":"往期推荐","link":"#往期推荐","children":[]},{"level":2,"title":"番外篇","slug":"番外篇","link":"#番外篇","children":[]}]}],"relativePath":"column/FrontEnd/Webpack/001.md","lastUpdated":1644826256000}'),p={name:"column/FrontEnd/Webpack/001.md"},e=l("",293),o=[e];function c(r,t,D,F,y,i){return a(),n("div",null,o)}const C=s(p,[["render",c]]);export{b as __pageData,C as default};
