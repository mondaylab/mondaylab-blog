---
title: Google控制台快捷键
author: 周一
date: '2022-10-15'
categories:
  - 学习干货
tags:
  - Google控制台快捷键
sidebar: 'auto'
---

# 🎯背景

对于开发者来说，最熟悉的调试工具之一莫过于 `google` 的 `console` 控制台。那为什么周一会想到要来整理 `console` 的快捷键呢，原因在于，最近在开发中，有较大的控制台使用频率。用着用着发现，每回想要点按**光标**或者**hover**等功能时候，都得鼠标移进移出的，这其实有一点影响开发效率。于是带着这个困扰，周一踏上了整理 `console` 快捷键的征程。下面将整理`console`相关一些比较常用的快捷键。

关于 `console` 快捷键相关网站：https://developer.chrome.com/docs/devtools/shortcuts/?utm_source=devtools。以下所有快捷键将在**控制台面板**中执行才有效哦~



# ⌨️通用快捷键

## 打开调试工具

| 功能                     | Mac OS                              | Windows / Linux        |
| ------------------------ | ----------------------------------- | ---------------------- |
| 打开最后一次使用过的面板 | Command+Option+I                    | F12 or Control+Shift+I |
| 打开**Console**面板      | Command+Option+J                    | Control+Shift+J        |
| 打开**Elements**面板     | Command+Shift+C or Command+Option+C | Control+Shift+C        |



## 全局快捷键

| 功能                                                         | Mac OS                 | Windows / Linux               |
| ------------------------------------------------------------ | ---------------------- | ----------------------------- |
| 展示控制台中的 `settings` 设置面板，可以按Esc退出            | F1 or Function+F1      | F1                            |
| 切换到下一个面板                                             | Command+]              | Control+]                     |
| 切换到上一个面板                                             | Command+[              | Control+[                     |
| 切换到上一个曾经使用过的面板位置                             | Command+Shift+D        | Control+Shift+D               |
| 切换设备的模式（手机/网页模式）                              | Command+Shift+M        | Control+Shift+M               |
| 切换到**检查元素**的模式（光标模式）                         | Command+Shift+C        | Control+Shift+C               |
| 打开 **[Command 菜单](https://developer.chrome.com/docs/devtools/command-menu/)** | Command+Shift+P        | Control+Shift+P               |
| 拉出 **[抽屉](https://developer.chrome.com/docs/devtools/customize/#drawer)** | Escape                 | Escape                        |
| 普通刷新                                                     | Command+R              | F5 or Control+R               |
| 强制刷新                                                     | Command+Shift+R        | Control+F5 or Control+Shift+R |
| 搜索当前面板的文本（仅支持Elements、Console、Sources、Performance、Memory、JavaScript Profiler和Quick Source） | Command+F              | Control+F                     |
| 打开抽屉里面的搜索（这里可以搜索所有已加载的资源）           | Command+Option+F       | Control+Shift+F               |
| 打开Souces面板里面的某一个文档                               | Command+O or Command+P | Control+O or Control+P        |
| 放大面板                                                     | Command+Shift++        | Control+Shift++               |
| 缩小面板                                                     | Command+-              | Control+-                     |
| 恢复初始化面板的大小                                         | Command+0              |                               |



# ⌨️各面板快捷键

## Element面板

| Action                                                       | Mac                         | Windows / Linux                  |
| ------------------------------------------------------------ | --------------------------- | -------------------------------- |
| 撤销                                                         | Command+Z                   | Control+Z                        |
| 重做                                                         | Command+Shift+Z             | Control+Y                        |
| 选择已选择元素的上一行/下一行                                | 向上↑ / 下↓箭头             | 向上↑ / 下↓箭头                  |
| 展开当前已选择元素的节点（如果当前节点已经被展开，那么这个快捷键将会去选择在这个节点下面的元素） | 向右箭头→                   | 向右箭头→                        |
| 折叠当前已选择元素的节点（如果当前节点已经被折叠，那么这个快捷键将会去选择在这个节点上面的那个元素） | 向左箭头←                   | 向左箭头←                        |
| 展开/折叠当前已选择节点，和展开/折叠已选择节点的所有子节点   | 按住option并且点击左/右箭头 | 按住Control+Alt并且点击左/右箭头 |
| 将当前已选择元素切换为**属性可编辑**的模式                   | Enter                       | Enter                            |
| 选择下一个/上一个可编辑的属性                                | Tab / Shift+Tab             | Tab / Shift+Tab                  |
| 隐藏当前已选择的元素                                         | H                           | H                                |
| 将当前已选择选择切换成 **Edit as HTML** 的模式               | Function+F2                 | F2                               |



## Style面板

| Action                                                       | Mac                                                          | Windows / Linux                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Go to the line where a property value is declared            | Hold Command then click the property value                   | Hold Control then click the property value                   |
| Cycle through the RBGA, HSLA, and Hex representations of a color value | Hold Shift then click the **Color Preview** box next to the value | Hold Shift then click the **Color Preview** box next to the value |
| Select the next / previous property or value                 | Click a property name or value then press Tab / Shift+Tab    | Click a property name or value then press Tab / Shift+Tab    |
| Increment / decrement a property value by 0.1                | Click a value then press Option+Up Arrow / Option+Down Arrow | Click a value then press Alt+Up Arrow / Alt+Down Arrow       |
| Increment / decrement a property value by 1                  | Click a value then press Up Arrow / Down Arrow               | Click a value then press Up Arrow / Down Arrow               |
| Increment / decrement a property value by 10                 | Click a value then press Shift+Up Arrow / Shift+Down Arrow   | Click a value then press Shift+Up Arrow / Shift+Down Arrow   |
| Increment / decrement a property value by 100                | Click a value then press Command+Up Arrow / Command+Down Arrow | Click a value then press Control+Up Arrow / Control+Down Arrow |
| Cycle through the degrees (deg), gradians (grad), radians (rad) and turns (turn) representations of an angle value | Hold Shift then click the **Angle Preview** box next to the value | Hold Shift then click the **Angle Preview** box next to the value |
| Increment / decrement an angle value by 1                    | Click the **Angle Preview** box next to the value then press Up Arrow / Down Arrow | Click the **Angle Preview** box next to the value then press Up Arrow / Down Arrow |
| Increment / decrement an angle value by 10                   | Click the **Angle Preview** box next to the value then press Shift+Up Arrow / Shift+Down Arrow | Click the **Angle Preview** box next to the value then press Shift+Up Arrow / Shift+Down Arrow |
| Increment / decrement an angle value by 15                   | Click the **Angle Preview** box next to the value then press Shift, click / mouse slide on the **Angle Clock Overlay** | Click the **Angle Preview** box next to the value then press Shift, click / mouse slide on the **Angle Clock Overlay** |



## Souces面板

| Action                                                       | Mac                                                          | Windows / Linux                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Pause script execution (if currently running) or resume (if currently paused) | F8 or Command+\                                              | F8 or Control+\                                              |
| Step over next function call                                 | F10 or Command+'                                             | F10 or Control+'                                             |
| Step into next function call                                 | F11 or Command+;                                             | F11 or Control+;                                             |
| Step out of current function                                 | Shift+F11 or Command+Shift+;                                 | Shift+F11 or Control+Shift+;                                 |
| [Continue to a certain line of code while paused](https://developer.chrome.com/blog/new-in-devtools-60/#continue) | Hold Command and then click the line of code                 | Hold Control and then click the line of code                 |
| Select the call frame below / above the currently-selected frame | Control+. / Control+,                                        | Control+. / Control+,                                        |
| Save changes to local modifications                          | Command+S                                                    | Control+S                                                    |
| Save all changes                                             | Command+Option+S                                             | Control+Alt+S                                                |
| Go to line                                                   | Control+G                                                    | Control+G                                                    |
| Jump to a line number of the currently-open file             | Press Command+O to open the **[Command Menu](https://developer.chrome.com/docs/devtools/command-menu/)**, type : followed by the line number, then press Enter | Press Control+O to open the **[Command Menu](https://developer.chrome.com/docs/devtools/command-menu/)**, type : followed the line number, then press Enter |
| Jump to a column of the currently-open file (for example line 5, column 9) | Press Command+O to open the **[Command Menu](https://developer.chrome.com/docs/devtools/command-menu/)**, type :, then the line number, then another :, then the column number, then press Enter | Press Control+O to open the **[Command Menu](https://developer.chrome.com/docs/devtools/command-menu/)**, type :, then the line number, then another :, then the column number, then press Enter |
| Go to a function declaration (if currently-open file is HTML or a script), or a rule set (if currently-open file is a stylesheet) | Press Command+Shift+O, then type in the name of the declaration / rule set, or select it from the list of options | Press Control+Shift+O, then type in the name of the declaration / rule set, or select it from the list of options |
| Close the active tab                                         | Option+W                                                     | Alt+W                                                        |
| Toggle the **Navigation** sidebar on the left                | Command+Shift+Y                                              | Control+Shift+Y                                              |
| Toggle the **Debugger** sidebar on the right                 | Command+Shift+H                                              | Control+Shift+H                                              |





## 代码编辑器

| Action                                                       | Mac                                                    | Windows / Linux                                        |
| ------------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| Delete all characters in the last word, up to the cursor     | Option+Delete                                          | Control+Delete                                         |
| Add or remove a [line-of-code breakpoint](https://developer.chrome.com/docs/devtools/javascript/breakpoints#loc) | Focus your cursor on the line and then press Command+B | Focus your cursor on the line and then press Control+B |
| Go to matching bracket                                       | Control+M                                              | Control+M                                              |
| Toggle single-line comment. If multiple lines are selected, DevTools adds a comment to the start of each line | Command+/                                              | Control+/                                              |
| Select / de-select the next occurrence of whatever word the cursor is on. Each occurrence is highlighted simultaneously | Command+D / Command+U                                  | Control+D / Control+U                                  |



## Network面板

| Action                                 | Mac       | Windows / Linux |
| -------------------------------------- | --------- | --------------- |
| Start / stop recording                 | Command+E | Control+E       |
| Record a reload                        | Command+R | Control+R       |
| Replay a selected XHR request          | R         | R               |
| Hide the details of a selected request | Escape    | Escape          |



## Performance面板

| Action                 | Mac       | Windows / Linux |
| ---------------------- | --------- | --------------- |
| Start / stop recording | Command+E | Control+E       |
| Save recording         | Command+S | Control+S       |
| Load recording         | Command+O | Control+O       |



## Memory面板

| Action                 | Mac       | Windows / Linux |
| ---------------------- | --------- | --------------- |
| Start / stop recording | Command+E | Control+E       |



## Console面板

| Action                                                       | Mac                                                          | Windows / Linux                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| Accept autocomplete suggestion                               | Right Arrow or Tab                                           | Right Arrow or Tab             |
| Reject autocomplete suggestion                               | Escape                                                       | Escape                         |
| Get previous statement                                       | Up Arrow                                                     | Up Arrow                       |
| Get next statement                                           | Down Arrow                                                   | Down Arrow                     |
| Focus the **Console**                                        | Control+`                                                    | Control+`                      |
| Clear the **Console**                                        | Command+K or Option+L                                        | Control+L                      |
| Force a multi-line entry. Note that DevTools should detect multi-line scenarios by default, so this shortcut is now usually unnecessary | Shift+Return                                                 | Shift+Enter                    |
| Execute                                                      | Return                                                       | Enter                          |
| Expand all sub-properties of an object that's been logged to the Console | Hold Alt then click **Expand**![img](https://developer.chrome.com/docs/devtools/images/expand.png) | Hold Alt then click **Expand** |



## Search Tab

Search Tab，顾名思义，可以说是搜索的抽屉。

| Action                             | Mac                   | Windows / Linux      |
| ---------------------------------- | --------------------- | -------------------- |
| Expand/collapse all search results | Command+Option+{ or } | Control+Shift+{ or } |



# ⌨️推荐文

在网络上找到一些整理的相对较全的，放这里供大家参考。具体如下👇🏻

- [Chrome控制台快捷键](https://www.shouce.ren/api/view/a/12778)

- ……



