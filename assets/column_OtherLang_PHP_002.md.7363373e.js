import{_ as t,o as s,c as o,Q as n}from"./chunks/framework.98c15f2e.js";const _=JSON.parse('{"title":"PHP做二次开发：本机安装ThinkCMF系统","description":"","frontmatter":{"title":"PHP做二次开发：本机安装ThinkCMF系统","author":"周一","date":"2021-11-18","categories":["其他语言"],"tags":["PHP"],"sidebar":"auto"},"headers":[],"relativePath":"column/OtherLang/PHP/002.md","filePath":"column/OtherLang/PHP/002.md","lastUpdated":1685151998000}'),g={name:"column/OtherLang/PHP/002.md"},r=n('<p><strong>使用工具</strong>：phpEnv、TortoiseGit <strong>具体步骤</strong>： <strong>1</strong>.获取 thinkcmf 源代码 <strong>2</strong>.修改 Hosts 文件设置虚拟域名指向本机 <strong>3</strong>.配置 apache 建立本地站点 <strong>4</strong>.建立数据库 <strong>5</strong>.访问本地站点开始安装</p><p><strong>第一步：获取 thinkcmf 源代码</strong><strong>1</strong>.打开浏览器访问 gitee.com，搜索 thinkCMF，找到软件库（一般是第一个），复制软件仓库的克隆地址 <strong>2</strong>.打开软件浏览器，git 克隆源代码到具体文件夹（下面称此文件夹为工作站） <strong>注</strong>：<strong>①</strong>此文件夹目录需记住，在后面的步骤中会用到 <strong>②</strong>如本地软件没有下载 git 相关软件，则直接下载软件包再放到具体文件夹中即可</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270901723.png" alt="（1）打开gitee.com网站"></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270901181.png" alt="（2）下载thinkcmf代码"></p><p><strong>第二步：修改 Hosts 文件设置虚拟域名指向本机</strong><strong>1</strong>.打开 hosts 文件所在地址：<strong>C:\\Windows\\System32\\drivers\\etc</strong>,用任意文本编辑器进行编辑； <strong>2</strong>.设置 127.0.0.1 test.com 在最后一行，之后保存 <strong>注</strong>：test.com 即设置任意域名指向本机，test 仅为参考名，可根据自身情况修改</p><p><strong>第三步：配置 apache 建立本地站点</strong><strong>1</strong>.打开 phpEnv 软件，点击中间位置的站点管理，新建一个站点，各空白区填写内容如下： <strong>①</strong>网站域名：填写与第二步的第 2 点中一样的域名，如：原来为 test.com，则在新建站点中网站域名即输入 test.com； <strong>②</strong>网站目录：工作站中 thinkcmf 下的 public 目录； 之后点击新增，启动服务；</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270901011.png" alt="（3）启动服务成功后截图"></p><p><strong>第四步：建立数据库</strong><strong>1</strong>.打开数据库管理（phpEnv 三大按钮中最右方按钮），输入本机数据库密码，打开数据库； <strong>2</strong>.新建一个数据库，名称为 thinkcmf。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270901303.png" alt="（4）输入数据库密码"></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270901436.png" alt="（5）新建一个数据库"></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270902965.png" alt="（6）完成数据库创建"></p><p><strong>第五步：访问本地站点开始安装</strong><strong>1</strong>.浏览器访问 test.com 进入站点，开始安装，点击<strong>接受|下一步</strong>，设置<strong>数据库密码</strong>（本机数据库密码）和<strong>数据库名</strong>（thinkcmf），继续设置创始人信息，创始人信息包括：管理员账号、密码和 Email（注：此处信息开发者自行设置，但是务必记得，在后面的 thinkcmf 中会用到），点击创建数据，创建成功后点击进入前台，CMF 系统即安装成功。</p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270902912.png" alt="（7）安装成功"></p><p><img src="https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270902152.png" alt="（8）进入前台界面"></p>',14),a=[r];function c(p,m,e,i,h,l){return s(),o("div",null,a)}const u=t(g,[["render",c]]);export{_ as __pageData,u as default};
