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

| 功能                                                         | Mac OS                                                       | Windows / Linux                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 展示 `settings` 设置面板，可以按Esc退出                      | F1 or Function+F1                                            | F1                                                           |
| Focus the next panel                                         | Command+]                                                    | Control+]                                                    |
| Focus the previous panel                                     | Command+[                                                    | Control+[                                                    |
| Switch back to whatever [docking position](https://developer.chrome.com/docs/devtools/customize/#placement) you last used. If DevTools has been in its default position for the entire session, then this shortcut undocks DevTools into a separate window | Command+Shift+D                                              | Control+Shift+D                                              |
| Toggle **[Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)** | Command+Shift+M                                              | Control+Shift+M                                              |
| Toggle **Inspect Element Mode**                              | Command+Shift+C                                              | Control+Shift+C                                              |
| Open the **[Command Menu](https://developer.chrome.com/docs/devtools/command-menu/)** | Command+Shift+P                                              | Control+Shift+P                                              |
| Toggle the **[Drawer](https://developer.chrome.com/docs/devtools/customize/#drawer)** | Escape                                                       | Escape                                                       |
| Normal reload                                                | Command+R                                                    | F5 or Control+R                                              |
| Hard reload                                                  | Command+Shift+R                                              | Control+F5 or Control+Shift+R                                |
| Search for text within the current panel. Supported only in the **Elements**, **Console**, **Sources**, **Performance**, **Memory**, **JavaScript Profiler**, and **Quick Source** panels. | Command+F                                                    | Control+F                                                    |
| Opens the **Search** tab in the **[Drawer](https://developer.chrome.com/docs/devtools/customize/#drawer)**, which lets you search for text across all loaded resources | Command+Option+F                                             | Control+Shift+F                                              |
| Open a file in the **Sources** panel                         | Command+O or Command+P                                       | Control+O or Control+P                                       |
| Zoom in                                                      | Command+Shift++                                              | Control+Shift++                                              |
| Zoom out                                                     | Command+-                                                    | Control+-                                                    |
| Restore default zoom level                                   | Command+0                                                    | Control+0                                                    |
| Run snippet                                                  | Press Command+O to open the **[Command Menu](https://developer.chrome.com/docs/devtools/command-menu/)**, type ! followed by the name of the script, then press Enter | Press Control+O to open the **[Command Menu](https://developer.chrome.com/docs/devtools/command-menu/)**, type ! followed by the name of the script, then press Enter |





# ⌨️各面板快捷键

## Element面板

| Action                                                       | Mac                                                          | Windows / Linux                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Undo change                                                  | Command+Z                                                    | Control+Z                                                    |
| Redo change                                                  | Command+Shift+Z                                              | Control+Y                                                    |
| Select the element above / below the currently-selected element | Up Arrow / Down Arrow                                        | Up Arrow / Down Arrow                                        |
| Expand the currently-selected node. If the node is already expanded, this shortcut selects the element below it | Right Arrow                                                  | Right Arrow                                                  |
| Collapse the currently-selected node. If the node is already collapsed, this shortcut selects the element above it | Left Arrow                                                   | Left Arrow                                                   |
| Expand or collapse the currently-selected node and all of its children | Hold Option then click the arrow icon next to the element's name | Hold Control+Alt then click the arrow icon next to the element's name |
| Toggle **Edit Attributes** mode on the currently-selected element | Enter                                                        | Enter                                                        |
| Select the next / previous attribute after entering **Edit Attributes** mode | Tab / Shift+Tab                                              | Tab / Shift+Tab                                              |
| Hide the currently-selected element                          | H                                                            | H                                                            |
| Toggle **Edit as HTML** mode on the currently-selected element | Function+F2                                                  | F2                                                           |



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



