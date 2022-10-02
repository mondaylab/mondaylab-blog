---
title: Vscode快捷键
author: 周一
date: '2022-09-24'
categories:
  - 学习干货
tags:
  - MacOS快捷键
sidebar: 'auto'
---

这里附上官网最全的 `vscode` 快捷键指南，详情地址戳：https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

下面将整理周一在日常使用到的一些常见快捷键~

## 通用操作

- `Shift+Command+P, F1` 展示命令面板
- `Command+P` 快速打开某一个文件
- `Shift+Command+N` 创建一个新的窗口
- `Command+W` 关闭某一文件或关闭当前窗口
- `Command+,` 打开settings界面
- `Command+K+S` 键盘快捷键指引



## 基础编辑

- `Command+K` 剪切
- `Command+C` 复制
- `Option+↓ / Option+↑` 移动当前行到下行/移动当前行到上行
- `Shift+Option+↓ / Shift+Option+↑` 复制当前行到下行/复制当前行到上行
- `Command+Enter / Shift+Command+Enter` 向下插入一行/向上插入一行
- `Shift+Command+\` 跳转到匹配的括号
- `Command+] / Command+[` 向后缩进/向前缩进
- `Home / End` 去到当前行的最开头/最结尾
- `Command+↑ / Command+↓` 去到当前文件的最开头/最结尾
- `Control+PgUp / Control+PgDn` 以**行**为单位向上滚动/向下滚动
- `Command+PgUp /Command+PgDn` 以**页**为单位向上滚动/向下滚动
- `Option+Command+[ / Option+Command+]` 折叠/展开当前模块代码
- `Command+K+[ / Command+K+]` 折叠/展开所有子区域
- `Command+K+0 / Command+K+J` 折叠/展开所有区域
- `Command+K+C` 添加行注释
- `Command+K+U` 移除行注释
- `Command+/` 切换行注释
- `ShiftOption+A` 切换块注释
- `Option+Z` 如果一行太长了，可以让它自动切换换行



## 光标和选择

- `Option+click` 插入一个新的光标，可以理解为插入同时选中多行中的某个位置
- `Option+Command+↑` 为当前位置的上一行中的同个位置插入光标
- `Option+Command+↓` 为当前位置的下一行中的同个位置插入光标
- `Command+U` 撤销上一个光标的操作
- `Shift+Option+I` 在已选中行的末尾插入光标
- `Command+L` 选中当前行
- `Shift+Command+L` 选择当前所选择内容的**所有匹配项**
- `Command+F2` 选择当前单词所选择单词的**所有匹配项**
- `Control+Shift+Command+ → / ←` 扩大/缩小选择的范围
- `Shift+Option+drag mouse` 同时拖拽好多个光标
- `Shift+Option+Command+ ↑ / ↓` 向上/下选中每一行中与当前行同一位置的光标
- `Shift+Option+Command+ ← / →` 向左/右选择内容
- `Shift+Option+Command+PgUp` 当前页面
- `Shift+Option+Command+PgDn` 当前位置向上/下一个页面，选中所有光标



## 搜索和替换

- `Command+F` 查找
- `Option+Command+F` 查找和替换
- `Command+G / Shift+Command+G` 查找下一个内容/查找前一个内容
- `Option+Enter` 选中国所有查找后的匹配项
- `Command+D` 选中所有**下一个要匹配单词**的所有项
- `Command+K+D` 将最后一个选择**移动到**下一个要查找的匹配项





## 富文本编辑

- `Control+Space, Command+I` 触发建议（api提示等等）
- `Shift+Command+Space` 触发参数提示
- `Shift+Option+F` 格式化文档
- `Command+K+F` 格式化选择的内容
- `F12` 跳转到当前光标背后的逻辑代码处
- `Option+F12` 同上，但不跳转，只是在页面中查看
- `Command+K/F12` 在侧边打开定义
- `Command+.` 快速修复
- `Shift+F12` 显示引用内容
- `F2` 对所选择内容重命名
- `Command+K+X` 删除末尾处的空白
- `Command+K M` 改变文件语言（只有在notebook编辑器失焦的情况下生效）



## 导航相关

- `Command+T` 展示所有有当前搜索字符的文件
- `Control+G` 去向某一行
- `Command+P` 打开某一个文档
- `Shift+Command+O` 查找当前文件的关键字
- `Shift+Command+M` 展示问题面板
- `F8 / Shift+F8` 转到下一个/上一个错误或警告
- `Control+Shift+Tab` 顶部导航栏编辑器组的历史记录
- `Control+- / Control+Shift+-` 后退/前进（与浏览器类似）
- `Control+Shift+M` 切换选项卡来移动焦点


## 编辑器管理

- `Command+W` 关闭编辑器
- `Command+K` 关闭文件夹
- `Command+\` 切割编辑器
- `Command+1 / Command+2 / Command+3` 把整个编辑器切割成1/2/3组
- `Command+K+← / Command+K+→` 将光标聚焦到当前行的最左边/最右边
- `Command+K Shift+Command+← / Command+K Shift+Command+→` 向左/右移动编辑器
- `Command+K+← / Command+K+→` 向左/右移动正在活动的光标

## 文档管理

- `Command+N` 新建一个文件
- `Command+O` 打开某个文件
- `Command+S` 保存
- `Shift+Command+S` 保存到某一个目录下
- `Option+Command+S` 保存所有文件
- `Command+W` 关闭当前文件
- `Command+K+W` 关闭所有文件
- `Shift+Command+T` 重新打开关闭的编辑器
- `Command+K Enter` 让预览模式的编辑器保持打开的状态
- `Control+Tab / Control+Shift+Tab` 打开当前导航栏的前一个文件/后一个文件
- `Command+K P` 复制已激活文件的路径
- `Command+K R` 在文件夹中显示当前活动文件
- `Command+K O` 在新的窗口展示当前活动的文件（这种类型的都待挖掘如何使用，没怎么验证的出来）



## 展示相关

- `Control+Command+F` 打开/关闭全屏模式
- `Option+Command+0` 切换编辑器的布局（水平/垂直）
- `Command+= / Shift+Command+-` 放大/缩小窗口
- `Command+B` 切换侧边栏的可见性
- `Shift+Command+E` 显示资源管理器（系统是切换成中英文）/切换焦点
- `Shift+Command+F` 展示搜索框
- `Control+Shift+G` 显示源代码管理
- `Shift+Command+D` 展示debug的框框
- `Shift+Command+X` 展示插件区（下载volar等插件）
- `Shift+Command+H` 在文件中替换某一个词
- `Shift+Command+J` 切换搜索详情
- `Shift+Command+U` 展示输出面板
- `Shift+Command+V` 打开markdown预览模式
- `Command+K V` 打开markdown预览模式到侧边
- `Command+K Z` zen模式



## 调试相关

- `F9` 切换断点
- `F5` 开始/继续
- `F11 / Shift+F11` 进入/退出
- `F10` 跳过
- `Shift+F5` 停止
- `Command+K+I` 显示悬停状态



## 集成终端

- Control+` 展示集成终端
- Control+Shift+` 创建一个新的终端
- `Command+C` 复制已选择的内容
- `Command+↑ / ↓` 往上/下滚动
- `PgUp / PgDn` 以页面为单位往上/下滚动
- `Command+Home / End` 滚动至顶部/底部











