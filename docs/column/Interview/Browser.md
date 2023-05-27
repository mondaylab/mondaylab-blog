---
title: 「offer来了」浏览器原理被问懵？5大知识板块巩固你的http知识体系
author: 周一
date: '2021-11-09'
categories:
  - 前端开发
tags:
  - offer来了
sidebar: 'auto'
---

# 🏔️ 序言

大家都知道，浏览器原理对于前端面试来说是一个久经不衰的话题。因为浏览器所设计到的内容真的是非常非常的广。小到一个简单的 `http` 知识，大到跨域问题，前端安全问题等等都涉及到前端安全相关。所以，自然而然地，也是面试中一个非常重要地考点之一。

在下面的这篇文章中，将讲解关于我在准备面试过程中遇到的所有浏览器相关的问题，并将进行系统的归纳和总结。一起来开启你的 `http` 学习旅途 ⑧~

# 🌄 一、http 和 https 协议

# （一）http 和 https 之间的关系 🧭

## 1、http 和 https 是什么？

**HTTP**：(HyperText Transfer Protocol)超文本传输协议

**HTTPS**：(Hypertext Transfer Protocol Secure)超文本传输安全协议

## 2、http 和 https 的区别

|              | http                                     | https                                        |
| ------------ | ---------------------------------------- | -------------------------------------------- |
| **名称**     | 超文本传输协议                           | 超文本传输安全协议                           |
| **默认端口** | 80                                       | 443                                          |
| **发送方式** | 明文发送                                 | 加密传输                                     |
| **安全性**   | 安全性相对差：容易被监听、被伪装、被篡改 | 安全性相对较好：防止监听、防止伪装、防止篡改 |
| **响应速度** | 响应快（3 个包）                         | 响应慢（12 个包）tcp 3 个 ssl 9 个           |
| **成本**     | 较低                                     | 成本较高，证书需要购买                       |
| **链接缓存** | 相对高效                                 | 相对不高，会增加数据开销和功耗               |

**口语化答题：**

`http` 是超文本传输协议，是互联网上应用最为广泛的一种**网络协议**，是一个 `客户端` 和 `服务器端` 请求和应答的标准，用于从 `WWW` 服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。 **而对于 https，它是以<u>安全</u>为目标的 http 通道，是 http 的安全版，在 http 中加入了 ssl 层，https 的安全基础是 ssl。**（👉 这一段解答 http 和 https 是什么）

`http` 的连接很简单，是无状态的，传输的数据都是没有加密的，也就是明文的，网景公司设置了 `ssl` 协议来对 `http` 协议传输的数据进行加密处理，**所以说 https 协议是由 http 和 ssl 协议构建的可进行加密传输和身份认证的网络协议，比 http 协议的安全性更高。**（解答明文和加密发送的内容）

`http` 是超文本传输协议，信息是明文传输，https 协议需要证书，且费用较高，是具有安全性的 ssl 加密传输协议，使用不同的连接方式，端口不同，**一般来说，http 协议的端口是 80，而 https 的端口为 443。**（👉 解答端口号问题）

使用 `https` 协议可以认证用户和服务器，确保数据发送到正确的客户端和服务器端。对于 `https` 协议的工作原理，客户端在使用 `https` 方式与 `web` 服务器通信时，首先客户使用`https` 的 `url` 访问服务器，则要求 `web` 服务器建立 `ssl` 连接， `web` 服务器接收到客户端的请求之后，会将网站的证书，返回或者传输给客户端，然后客户端和 `web` 服务器端开始协商 `ssl` 连接的安全等级，也就是加密等级，通过双方协商一致的安全等级，建立会话密钥，然后通过网站的公钥来加密会话密钥，并传送给网站。**（web 服务器通过自己的私钥解密出会话密钥，通过会话密钥加密与客户端之间的通信）** （👉 解答 `https` 的连接方式）

建议使用 `https` ，比起同等 `http` 网站，使用 `https` 加密的网站在搜索结果中的排名会更高哦！

`https` 协议握手阶段比较费时，会使页面加载时间延长 `50%` ，增加 `10%~20%` 的耗电， `https` 缓存也不如 `http` 高效，会增加数据开销， `ssl` 证书也是需要钱 💴 的，功能越强大证书费用越高，同时， `ssl` 证书是需要绑定 `ip` 的，不能在同一个 `ip` 上绑定多个域名。（👉 解答 `https` 的缺点）

**小 `Tips` ：**

- www，即 `World Wide Web` ，是万维网的简称。
- 为什么是 `80` 端口？80 是 `http` 协议的默认端口，是在输入网站的时候，其实浏览器（ 非 `IE` ）已经帮你输入协议了，所以你输入 `baudu.com` ，其实是访问了 `baidu.com:80` 。

# （二）http 协议 🧭

## 1、http1.0、http1.1、http2.0 协议的基本内容

### （1）http1.0

**引入时间**： `http1.0` 是**1996 年**引入的。

**主要内容：**

- `http1.0` 仅提供了最基本的认证，用户名和密码都**未加密**；
- `http1.0` 仅支持**短连接**，每次发送数据都会经过 `TCP` 三次握手和四次挥手，**效率低**；
- `http1.0` 只使用了**header**的 `if=modified-Since` 和 `Expires` 作为**缓存失效**的标准；
- `http1.0` 不支持**端点续传**，每次发送数据都会发送**全部数据**；
- `http1.0` 认为每台计算机都**只能绑定一个 IP 地址**，不支持虚拟网络。

### （2）http1.1

**引入时间**：`http1.1`是**1999 年**引入的。

**主要内容：**

- `http1.1` 使用了**摘要算法** (MD5/SHA-1) 进行身份验证；
- `http1.1` 默认使用**长连接**，即只需要建立一次连接，可以传输多次数据，传输完成之后，只需要一次切断即可。通过请求头的 `keep-alive` 设置 ( `connection: keep-alive/close` ) ；

- `http1.1` 支持**断点续传**，通过请求头的 `Range` 实现此功能；

- `http1.1 ` 使用了**虚拟网络**，在一台物理服务器上可以存在多个虚拟主机，共享同一个 `IP` 地址。

### （3）http2.0

**引入时间**：**2015 年**建立。

**主要内容：**

- **头部压缩**：利用**HPACK 算法**进行压缩；

  > **为什么引入头部压缩？**
  >
  > 由于 HTTP1.1 头部经常出现 Cookie、Accept、Sever、Range 等字段可能会占用几百到几千字节，而 `body` 有时只有几十字节（“**头重身轻**”）。

- **二进制格式**： `HTTP2.0` 选择了更靠近**TCP/IP 的二进制格式**，抛弃了**ASCII 码**，提高了解析效率；

- **强化安全**： `HTTP2.0` 一般都跑在**HTTPS**上；

- **多路复用**：一个连接上可以有**多个请求**。

> **小 tips：**
>
> 记忆点：算法、连接、头部、断电续传、虚拟网络

## 2、http1.0、http1.1、http2.0 协议之间的区别

### （1）http1.0 和 http1.1 主要区别

**① 长连接**

- `http1.0` 需要使用`keep-alive` 参数来告知服务器端要建立一个长连接，而 `http1.1` 默认支持长连接；
- 使用长连接的原因在于， `http` 是基于**TCP/IP 协议**的，创建一个 `TCP` 连接需要经过三次握手，有一定的开销，如果每次通讯都要重新建立连接的话，对性能有影响。因此最好能维持一个**长连接**，可以用一个长连接来发多个请求。

**② 节约带宽**

- `http1.1` 支持**只发送 header 信息**（不带任何 `body` 信息），如果服务器认为客户端**有权限**请求服务器，则返回**100**，否则返回**401**；
  - 客户端如果接受到 `100` ，才开始把请求 `body` 发送到服务器；
  - 这样当服务器返回 `401` 的时候，客户端就可以不用发送请求 `body` 了，节约了带宽；
- 另外 `http1.1` 还支持只传送内容的一部分；这样当客户端已经有一部分的资源后，只需要跟服务器请求另外的部分资源即可；这是支持**文件断点续传**的基础。

**③HOST 域（虚拟网络）**

- `http1.1` 可以在 `web server` 上（例如`tomat`）设置虚拟站点，也就是说， `web server` 上的多个**虚拟站点**可以共享**同一个 ip 和端口**；
- `http1.0` 是没有`host`域的， `http1.1` 才支持这个参数。

### （2）http1.1 和 http2.0 主要区别

**① 多路复用**

- 在 `http1.1` 协议中，浏览器客户端在同一时间针对同一域名的请求有一定**数据限制**，超过限制数目的请求会被阻塞。
- `http2.0` 使用了**多路复用**的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比 `http1.1` 大了好几个数量级。
- 当然 `http1.1` 也可以多建立几个 `TCP` 连接，来支持处理更多并发的请求，但是创建 `TCP` 连接本身也是有开销的。

**② 首部压缩**

- `http1.1` 不支持 `header` 数据的压缩， `http2.0` 使用**HPACK 算法**对 `header` 的数据进行压缩，这样数据体积小了，在网络上传输就会更快。

**③ 服务器推送**

- 意思是说，当我们对支持 `http2.0` 的 `web server` 请求数据的时候，服务器会顺便把一些客户端需要的资源一起推送到客户端，免得客户端再次创建连接发送请求到服务器端获取。这种方式非常合适**加载静态资源**。
- 那么服务器端推送的这些资源是存在哪里呢？其实是存在客户端的某处地方，客户端直接从本地加载这些资源就可以了，不用走网络，速度自然是快很多的。

## 3、http2.0

### （1）http2.0 项目设定目标

- 页面加载时间 ( `PLT` ) 减少 `50%` 。

- 无需网站作者修改任何内容。

- 将部署复杂性降至最低，无需变更网络基础设施。

- 与开源社区合作开发此新协议。

- 收集真实性能数据，验证实验性协议是否有效。

### （2）http2.0 特性

**① 多路复用(请求与响应复用)**

在 `http1.1` 中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量限制（连接数量），超过限制会被阻塞。

` http2.0` 使用了**多路复用**的技术，做到同一个连接并发处理多个请求，且多路复用允许同时通过单一的 `HTTP/2` 连接发送多重的请求-响应信息。

**② 二进制分帧层**

`HTTP/2` 所有性能增强的核心在于**新的二进制分帧层**，它定义了如何封装 `HTTP` 消息并在客户端与服务器之间传输。

`HTTP2.0` 会将所有的传输信息分割为更小的信息或者帧（二进制分帧），并对他们进行二进制编码。

**③ 标头压缩**

每个 `HTTP` 传输都需要承载一组标头，这些标头说明了传输的资源及其属性。

`HTTP/2` 使用 **HPACK 压缩格式**来压缩请求和响应标头元数据， `HPACK` 压缩格式是：

- 支持通过**静态霍夫曼代码**对传输的标头字段进行编码，从而减小了各个传输的大小。

- 要求客户端和服务器同时**维护和更新**一个包含之前见过的标头字段的索引列表（换句话说，它可以建立一个共享的压缩上下文），此列表随后会用作参考，对之前传输的值进行有效编码。

**④ 服务器推送**

`HTTP/2` 除了对最初请求的响应外，服务器还可以向客户端推送额外资源，而无需客户端明确地请求，很适合加载静态资源。

**⑤ 数流优先级**

将 `HTTP` 消息分解为很多独立的帧之后，我们就可以复用**多个数据流**中的帧，客户端和服务器交错发送和传输这些帧的**顺序**就成为**关键的性能决定因素**。

为了做到这一点，`HTTP/2` 标准允许每个数据流都有一个关联的**权重**和**依赖**关系：

可以向每个数据流分配一个介于 `1` 至 `256` 之间的整数，每个数据流与其他数据流之间可以存在**显式依赖关系**。

**⑥ 每个来源一个连接**

每个数据流都拆分成**很多帧**，而这些帧可以交错，还可以分别设定**优先级**。 因此，所有 `HTTP/2` 连接都是**永久的**，而且仅需要每个来源一个连接，随之带来诸多性能优势。

**⑦ 流控制**

流控制是一种阻止发送端向接收端发送大量数据的机制，以免超出后者的需求或处理能力。

在什么情况下会用到流控制呢？一般在发送方可能非常繁忙、处于较高的负载之下，也可能仅仅希望为特定数据流分配固定量的资源的情况下。会用到流控制。

## 4、说下 http 缓存吧（浏览器缓存）

### （1）什么是缓存？又有什么用？

**定义**：缓存是一种保存**资源副本**并在下次请求时直接使用该副本的技术。

**作用**：

- 可以显著提高网站和应用程序的性能。
- 减少了等待时间和网络流量。
- 减少了显示资源表示形式所需的时间。
- 使得页面加载更加快速。
- 缓解服务器端压力，提升性能。

### （2）你知道有哪些缓存方式吗？

- 浏览器缓存
- 代理缓存
- 网关缓存
- `CDN` 缓存
- 反向代理缓存

### （3）缓存位置

**1）Service Worker**

`Service Worker` 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。

**2）Memory Cache（内存中的缓存）**

读取高效，但是持续性很短，一旦关闭 `Tab` 页面，内存中的缓存也就被释放了。

**3）Disk Cache（硬盘中的缓存）**

读取速度慢，容量和存储时效性上有优势。

**4）Push Cache（推送缓存）**

push Cache 是 http/2 中的内容，只在会话（**Session**）中存在，一旦会话结束就被释放，并且缓存时间也很短暂。

### （4）http 的缓存是怎么生效的

http 缓存分为`强制缓存`和`协商缓存`。

**1）强制缓存**

强制缓存就是文件直接从缓存中获取，不需要发送请求。

**2）协商缓存**

协商缓存意思是文件已经被缓存了，但是否从缓存中读取是需要和服务器进行协商，具体如何协商要看**请求头/响应头**的字段设置，相比于强制缓存，协商缓存是需要发送请求的。

**3）强缓存相关字段**

`Cache-Control`：通用消息头字段，被用于在 http 请求和响应中，通过指定指令来实现缓存机制。

强缓存相关字段有 `expires，cache-control`。如果 `cache-control 与 expires` 同时存在的话， `cache-control` 的优先级高于 `expires`。

- **缓存请求指令**

**Cache-Control**: `no-cache` 、 `no-store` 、 `max-age=<seconds>` 、 `max-stale[=<seconds>]` 、 `min-fresh=<seconds>` 、 `no-transform` 、 `only-if-cached`

- **缓存响应指令**

**Cache-control**: `public` 、 `private` 、 `no-cache` 、 `no-store` 、 `no-transform` 、 `proxy-revalidate` 、 `max-age=<seconds>` 、 `s-maxage=<seconds>` 、 `must-revalidate`

- **cache-control 指令解释**

| **指令**                             | **说明**                                                                                                                                                                                               |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| public                               | 所有内容都将被缓存(客户端和代理服务器都可缓存)                                                                                                                                                         |
| private                              | 内容只缓存到私有缓存中(仅客户端可以缓存，代理服务器不可缓存)                                                                                                                                           |
| no-cache                             | 必须先与服务器确认返回的响应是否被更改，然后才能使用该响应来满足后续对同一个网址的请求。因此，如果存在合适的验证令牌 (ETag)，no-cache 会发起往返通信来验证缓存的响应，如果资源未被更改，可以避免下载。 |
| no-store                             | 所有内容都不会被缓存到缓存或 Internet 临时文件中                                                                                                                                                       |
| must-revalidation/proxy-revalidation | 如果缓存的内容失效，请求必须发送到服务器/代理以进行重新验证                                                                                                                                            |
| max-age=xxx (xxx is numeric)         | 缓存的内容将在 xxx 秒后失效, 这个选项只在 HTTP 1.1 可用, 并如果和 Last-Modified 一起使用时, 优先级较高                                                                                                 |

**4）协商缓存相关字段**

协商缓存相关字段有 `Last-Modified/If-Modified-Since，Etag/If-None-Match` 。

**5）协商缓存生效过程**

- **浏览器第一次请求：**

![浏览器第一次请求](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270825163.png)

- **浏览器第二次请求：**

![浏览器第二次请求](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270825373.png)

**6）浏览器缓存——如何选择，什么时候用哪一个呢？**

浏览器缓存分为强缓存和协商缓存。当客户端请求某个资源时，**获取缓存的流程如下**：

- 先根据这个资源的一些 `http header` 判断它是否命中强缓存，如果命中，则直接从本地获取缓存资源，不会发请求到服务器；
- 当强缓存没有命中时，客户端会发送请求到服务器，服务器通过另一些 `request header` 验证这个资源是否命中协商缓存，称为 `http` 再验证，如果命中，服务器将请求返回，但不返回资源，而是告诉客户端直接从缓存中获取，客户端收到返回后就会从缓存中获取资源；
- 强缓存和协商缓存共同之处在于，如果命中缓存，服务器都不会返回资源； 区别是，强缓存不对服务器发送请求，但协商缓存会。当协商缓存也没命中时，服务器就会将资源发送回客户端。
- 当 `ctrl+f5` 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存；
- 当 `f5` 刷新网页时，跳过强缓存，但是会检查协商缓存。

> - **详细文章补充 👇**
>
> - 原文：[你知道 304 吗？图解强缓存和协商缓存](https://juejin.cn/post/6974529351270268958)
>
> - 链接：https://juejin.cn/post/6974529351270268958

## 5、http 常见的头部字段

### （1）General 通用首部

| 字段           | 说明           |
| -------------- | -------------- |
| Request URL    | 请求的域名     |
| Request Method | 请求方式       |
| Status Code    | 返回的状态码   |
| Remote Address | 请求的远程地址 |

### （2）Response 响应首部

| **字段**         | **说明**                                                                             |
| ---------------- | ------------------------------------------------------------------------------------ |
| Cache-Control    | 服务器应遵循的缓存机制                                                               |
| Connection       | 连接方式（keep-alive：保持持久连接）                                                 |
| Content-Encoding | Web 服务器表明自己使用了什么压缩方法（gzip、deflate）                                |
| Content-Language | Web 服务器告诉浏览器自己响应的对象的语言                                             |
| Content-Length   | Web 服务器告诉浏览器自己响应的对象的长度                                             |
| Content-Range    | Web 服务器表明该响应包含的部分对象为整个对象的哪个部分，比如：Content-Range:bytes    |
| Content-Type     | Web 服务器告诉浏览器自己响应对象的类型。比如：Content-Type:application/xml           |
| ETag             | 告知**客户端**实体标识，是一种可将资源以**字符串形式**做唯一标识的方式，值有强弱之分 |
| Expired          | Web 服务器表明该实体什么时候过期                                                     |
| Last-Modified    | Web 服务器表明该实体最后修改时间                                                     |
| Set-Cookie       | 开始状态管理所使用的 Cookie 信息                                                     |
| Location         | 与 redirection 配合使用，重定向                                                      |

### （3）Request 请求首部

| 字段                | 说明                                                                                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Accept              | 可接受的响应内容类型（Content-Types）                                                                                                                              |
| Accept-Charset      | 可接受的字符集                                                                                                                                                     |
| Accept-Encoding     | 浏可接受的响应内容的编码方式                                                                                                                                       |
| Accept-Language     | 浏览器接收支持的语言                                                                                                                                               |
| Accept-Datetime     | 可接受的按照时间来表示的响应内容版本                                                                                                                               |
| Authorization       | 用于表示 HTTP 协议中需要认证资源的认证信息                                                                                                                         |
| Cache-Control       | 用来指定当前的请求/回复中的，是否使用缓存机制                                                                                                                      |
| Connection          | 客户端（浏览器）想要优先使用的连接类型                                                                                                                             |
| Cookie              | 由之前服务器通过 Set-Cookie 设置的一个 HTTP 协议 Cookie                                                                                                            |
| Content-MD5         | 请求体的内容的二进制 MD5 散列值（数字签名），以 Base64 编码的结果                                                                                                  |
| Content-Length      | 以 8 进制表示的请求体的长度                                                                                                                                        |
| Content-Type        | 请求体的 MIME 类型 （用于 POST 和 PUT 请求中）                                                                                                                     |
| Referrer            | 来源协议，即发送请求页面的 url                                                                                                                                     |
| Expect              | 表示客户端要求服务器做出特定的行为                                                                                                                                 |
| From                | 发起此请求的用户的邮件地址                                                                                                                                         |
| If-Modified-Since   | 允许在对应的资源未被修改的情况下返回 304 未修改                                                                                                                    |
| If-None-Match       | 条件请求，判断实体 ETag 与资源的 ETag 是否不一致，如果不一致则返回 200，请求响应和协商缓存；如果一致则返回 304 未修改（ 304 Not Modified），从本地缓存中读取即可。 |
| If-Unmodified-Since | 仅当该实体自某个特定时间以来未被修改的情况下，才发送回应                                                                                                           |
| Max-Forwards        | 限制该消息可被代理及网关转发的次数                                                                                                                                 |
| Range               | 表示请求某个实体的一部分，字节偏移以 0 开始                                                                                                                        |
| User-Agent          | 浏览器的身份标识字符串                                                                                                                                             |
| Upgrade             | 要求服务器升级到一个高版本协议                                                                                                                                     |

### （4）Cookie

**1）Cookie 服务的首部字段**

| 首部字段名     | 说明                               | 首部类型     |
| -------------- | ---------------------------------- | ------------ |
| **Set-Cookie** | 开始状态管理所使用的的 Cookie 信息 | 响应首部字段 |
| **Cookie**     | 客户端接收到的 Cookie 信息         | 请求首部字段 |

- **Set-Cookie 字段的属性：**

| 属性         | 说明                                                                                  |
| ------------ | ------------------------------------------------------------------------------------- |
| NAME=VALUE   | 赋予 Cookie 的名称和其字段值（必须项）                                                |
| expires=DATE | Cookie 的有效期（指定浏览器可发送 Cookie 的有效期，若不指定则默认为浏览器关闭前为止） |
| path=PATH    | 用于限制指定 Cookie 发送范围的文件目录（若不指定则默认为文档所在目录）                |
| domain-域名  | 作为 Cookie 适用对象的域名（若不指定则默认为创建 Cookie 的服务器名）                  |
| Secure       | 仅在 HTTPS 安全通信时才会发送 Cookie                                                  |
| httpOnly     | 加以限制，使 Cookie 不能被 JavaScript 脚本访问                                        |

- **Cookie：**

告知服务器，客户端想获得 http 状态管理支持时，就会在请求中包含从服务器接收到的 Cookie。接收多个时，同样可以以多个发送。

## 6、http 状态码

| 状态码 |         描述         |
| :----: | :------------------: |
|  1XX   |       提示信息       |
|  2XX   | 成功，请求被成功处理 |
|  3XX   |      重定向相关      |
|  4XX   |      客户端错误      |
|  5XX   |     服务器端错误     |

常见的有 200（正常） 、404（无法找到该网页资源） 、304（跳转页面） 、500（服务器错误）等，**具体如下：**

| 状态码 | 含义                                     | 用途                                                                                                                                                     |
| ------ | ---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100    | Continue 继续                            | 客户端应继续其请求                                                                                                                                       |
| 101    | Switching Protocols 切换协议             | 服务器根据客户端的请求切换协议。只能切换到更 高级的协议，例如，切换到 HTTP 的新版本协议                                                                  |
| 200    | OK 请求成功                              | 一般用于 GET 与 POST 请求                                                                                                                                |
| 201    | Created 已创建                           | 成功请求并创建了新的资源                                                                                                                                 |
| 202    | Accepted 已接受                          | 已经接受请求，但未处理完成                                                                                                                               |
| 203    | Non-Authoritative Information 非授权信息 | 请求成功。但返回的 meta 信息不在原始的服务器，而是一个副本                                                                                               |
| 204    | No Content 无内容                        | 服务器成功处理，但未返回内容。在未更新网页的情况下， 可确保浏览器继续显示当前文档                                                                        |
| 205    | Reset Content 重置内容                   | 服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域                                                                 |
| 206    | Partial Content 部分内容                 | 服务器成功处理了部分 GET 请求                                                                                                                            |
| 300    | Multiple Choices 多种选择                | 请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择                                                             |
| 301    | Moved Permanently 永久移动               | 请求的资源已被永久的移动到新 URI，返回信息会 包括新的 URL，浏览器会自动定向到新 URL。今后任何新的请求都应使用新的 URI 代替                               |
| 302    | Found 临时移动                           | 与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI                                                                                              |
| 304    | Not Modified 未修改                      | 所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 305    | Use Proxy 使用代理                       | 所请求的资源必须通过代理访问                                                                                                                             |
| 400    | Bad Request                              | 客户端请求的语法错误，服务器无法理解                                                                                                                     |
| 401    | Unauthorized                             | 请求要求用户的身份认证                                                                                                                                   |
| 402    | Payment Required                         | 保留，将来使用                                                                                                                                           |
| 403    | Forbidden                                | 服务器理解请求客户端的请求，但是拒绝执行此请求                                                                                                           |
| 404    | Not Found                                | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站 设计人员可设置"您所请求的资源无法找到"的个性页面                                            |
| 405    | Method Not Allowed                       | 客户端请求中的方法被禁止                                                                                                                                 |
| 503    | Service Unavailable                      | 由于超载或系统维护，服务器暂时无法处理客户端的请求。 延时的长度可包含在服务器的 Retry-After 头信息中                                                     |
| 504    | Gateway Time-out                         | 充当网关或代理的服务器，未及时从远端服务器获取请求                                                                                                       |
| 505    | HTTP Version not supported               | 服务器不支持请求的 HTTP 协议的版本，无法完成处理                                                                                                         |

## 7、http 的请求方式场景

### （1）http 请求方式

- `get` ，请求指定的页面信息，并返回实体主体；
- `post` ，请求服务器接受**所指定的文档**作为对所标识的 `URL` 的新的从属实体；
- `head` ，类似于 get 请求，只不过返回的响应中没有**具体的内容**，用户获取**报头**；
- `options` ，允许客户端查看服务器的**性能**，比如说服务器支持的请求方式等等；
- `PUT` ，传输文件；
- `DELETE` ，删除文件；
- `OPTIONS` ，询问支持的方法；
- `TRACE` ，追踪路径；
- `CONNECT` ，要求用**隧道协议**连接<u>代理</u>。

### （2）GET 和 HEAD 的区别

- `HEAD` 方法与 `GET` 相同，除了服务器在响应中不得返回**消息正文**。响应 `HEAD` 请求的 `HTTP` 标头中包含的元信息应该与响应 GET 请求发送的信息相同。此方法可用于获取有关请求所隐含的实体的元信息，而无需转移实体主体本身。
- 此方法通常用于测试超文本链接的有效性、可访问性和最新修改。
- 对 `HEAD` 请求的响应可以是可缓存的，因为响应中包含的信息可以用于从该资源更新先前缓存的实体。如果新的字段值表示缓存的实体与当前实体不同（如`Content-Length` ， `Content-MD5` ， `ETag` 或 `Last-Modified` 的更改所指示），则缓存必须将缓存条目视为过期。

### （3）GET 和 POST 的区别

- `GET` 参数通过 `url` 传递， `POST` 放在 `body` 中。（http 协议规定， `url` 在请求头中，所以大小被限制得很小）。
- `GET` 请求在 `url` 中传递的参数是有长度限制的，而 `POST` 没有。原因见上 ↑↑↑
- `GET` 在浏览器回退时是无害的，而 `POST` 会再次提交请求。
- `GET` 请求会被浏览器主动 `cache` ，而 `POST` 不会，除非主动设置。
- `GET` 比 `POST` 更不安全，因为参数直接暴露在 `url` 中，所以不能用来传递敏感信息。
- 对参数的数据类型， `GET` 只接受 `ASCII` 字符，而 `POST` 没有限制。
- `GET` 请求只能进行 `url(x-www=form-urlencoded)` 编码，而 `POST` 支持多种编码方式。
- `GET` 产生一个数据包； `POST `产生两个 `TCP` 数据包。对于 `GET` 方式的请求，浏览器会把 `http` 的 `header` 和 `data` 一并发送出去，服务器响应 `200` （返回数据）。而对于 `POST` ，浏览器先发送 `header` ，服务器响应 `100 continue` ，浏览器再发送 `data` ，服务器响应 `200 OK` （返回数据）。

### （4）为什么跨域的复杂请求需要预检？

- 复杂请求可能会对服务器产生**副作用**。
- 例如 `delete` 和 `put` ，它们都会对服务器数据进行修改，所以在请求之前都要**先询问服务器**，当前网页域名是否在服务器的**许可名单**中，服务器允许后，浏览器才会发出正式的请求，否则不会发送正式请求。

## 8、http 请求过程

### （1）问题集锦

- 从浏览器地址栏输入 url 后发生了什么
- url 渲染过程
- 解析 url 中的参数（写代码）
- url 输入到页面展示的全过程
- html 解析渲染过程

### （2）问题解答

- 浏览器对请求的 `url` 进行 `DNS` 域名解析，找到真实的 `IP` 地址；

- 根据这个 `IP` ，找到对应的服务器，发起 `TCP` 的三次握手；

- 建立 `TCP` 连接后发起 `HTTP` 请求；

- 服务器响应 `HTTP` 请求，浏览器得到 `html` 代码；

- 浏览器解析 `html` 代码，并请求 `html` 代码中的资源（如 `js` 、 `css` 、图片等）；

  **注**：先得到 `html` 代码，才能去找这些资源；

- 浏览器对页面进行渲染呈现给用户；

- 服务器关闭 `TCP` 连接。

### （3）补充

在了解了 `http` 请求过程后，**需引申了解：**

**①** `DNS` 域名如何解析；

**②**`TCP` 三次握手；

**③**为什么要三次握手；

**④**为什么 `HTTP` 请求要基于 `TCP` 来实现；

**⑤** `TCP` 四次挥手；

**⑥**为什么要四次挥手；

**⑦**为什么建立连接是三次握手，关闭连接是四次挥手？

**⑧**如果已经建立连接，但是客户端突然出现故障了怎么办？

**⑨** `http` 的请求方式有哪些。

## 9、http 的渲染步骤

**http 渲染步骤为：**

- **①**解析 HTML 文件，构建 DOM Tree；
- **②**解析 CSS 文件，构建 CSSOM Tree（CSS 规则树）；
- **③**将 DOM Tree 和 CSSOM Tree 合并，构建 Render Tree（渲染树）；
- **④**reflow（重排）：根据 Render Tree 进行节点信息计算（layout）；
- **⑤**repaint（重绘）：根据计算好的信息绘制整个页面（Painting）。

# （三）https 协议 🧭

## 1、https 的优缺点

### （1）优点

**1）发送数据到正确的客户端**

使用 `HTTPS` 协议可认证用户和服务器，确保数据发送到正确的客户机和服务器。

**2）更安全**

`HTTPS` 协议是由 `SSL+HTTP` 协议构建的可进行加密传输、身份认证的网络协议，要比 `http` 协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。

**3）增加中间人攻击的成本**

`HTTPS`是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。

**4）搜索排名更高**

谷歌在 2014 跳转搜索算法，采用 `HTTPS` 加密的网站在搜索结果中的排名将会更高。

百度也在 2018 年发布百度对 `HTTPS` 站点的扶持态度，表明 `HTTPS` 将作为优质特征之一影响搜索排序。

### （2）缺点

**1）页面渲染更耗时间**

因为`SSL`的缘故，` HTTPS`协议握手阶段比较费时，会使页面的加载时间延长近 `50%` 。

**2）成本增加**

`SSL`证书需要花钱，功能越强大的证书费用越高。

**3）HTTPS 连接缓存不如 HTTP 高效**

`HTTPS`连接缓存不如 `HTTP` 高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响。

**4）SSL 证书通常需要绑定 IP**

`SSL`证书通常需要绑定`IP`，不能在同一 `IP`上绑定多个域名， `IPv4` 资源不可能支撑这个消耗。

**5）有局限性**

`HTTPS` 协议的加密范围也比较有限，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用。最关键的， `SSL` 证书的信用链体系并不安全，特别是在某些国家可以控制 `CA` 根证书的情况下，中间人攻击一样可行。

## 2、https 的访问过程

### 问题集锦：

- https 的握手过程
- https 的请求过程
- https 的加密和解密过程

### 简略解释：

- 客户使用 `http` 的 `URL` 访问 `Web` 服务器，要求与 `Web` 服务器建立 `SSL` 连接。
- `Web`服务器收到客户端请求后，会将网站的证书信息（证书中包含**公钥**）传送一份给客户端。
- 客户端的浏览器与 `Web` 服务器开始协商 `SSL` 连接的安全等级，也就是信息加密的等级。
- 客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密， 并传送给网站。
- `Web` 服务器利用自己的私钥解密出会话密钥。
- `Web` 服务器利用会话密钥加密与客户端之间的通信。

![https握手过程1](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270825825.png)

### 详细解释：

1. **客户端发起`HTTPS` 请求**

用户在浏览器里输入一个 `https` 网址，然后连接到 `server` 的 `443` 端口。

2. **服务端的配置**

就是指上述提到的数字证书；

3. **传送证书**

`Web` 服务器收到客户端请求后，会将网站的证书信息（证书中包含公钥）传送一份给客户端。

4. **客户端解析证书**

客户端会对证书进行判断，验证公钥是否有效，存在问题弹出会警告；若没有问题，生成一个随机值（私钥），然后用证书继续进行加密；

5. **传送加密信息**

客户端将上加密后的随机值（私钥）提供给服务端，服务端会对其进行解密；

6. **服务端解密信息**

服务端解密后得到随机值（私钥），然后把内容通过该值进行对称加密。对称加密就是指把要返回的信 息和随机值（私钥）混合加密，这样除非知道随机值（私钥），不然无法获取数据。

7. **传输加密后的信息**

继续将加密后的信息传递给客户端；

8. **客户端解密信息**

客户端用之前生成的私钥（随机值）解密服务端传过来的信息，于是获取了解密后的内容。

![https握手过程2](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270826951.png)

## 3、https 为什么是安全的

`HTTPS` 相对于 `HTTP` 协议，加入了**TLS/SSL**，它的全称为**安全传输层协议**，是介于**TCP 和 HTTP 之间**的一层安全协议。

`TLS/SSL` 的功能实现主要依赖三类基本算法：**散列函数 hash**、**对称加密**、**非对称加密**。这三类算法的**作用**如下：

- 基于散列函数验证信息的完整性；
- 对称加密算法采用协商的秘钥对数据加密；
- 非对称加密实现身份认证和秘钥协商。

![TLS/SSL](https://mondaylab-1309616765.cos.ap-shanghai.myqcloud.com/images/202305270826588.png)

## 4、https 如何进行性能优化？

### （1）https 访问速度优化

**1）设置 HSTS**

服务端返回一个`HSTS`的`http header`，浏览器获取到头部之后，在一段时间内，不管用户输入[www.baidu.com ](http://www.baidu.com/)还是[http://www.baidu.com ](http://www.baidu.com/)，都会默认将请求内部跳转成[https://www.baidu.com ](http://www.baidu.com/)。

**2）Session resume**

`Session resume`顾名思义就是复用`Session`，实现简化握手。

```
减少了CPU消耗，因为不需要进行非对称秘钥交换的计算。
提升访问速度，不需要进行第二次的完全握手，节省了一个 RTT 和计算耗时。
```

**3）Nginx 设置 Ocsp stapling**

`OSCP Stapling`工作原理简单来说就是浏览器发起`Client Hello`时会携带一个`Certificate status request`的扩展，服务端看到这个扩展后将`OSCP`内容直接返回给浏览器，完成证书状态检查。由于浏览器不需要向**CA 站点**查询证书状态，这个功能对访问速度的提升非常明显。

**4）使用`SPDY `或者`HTTP2`**

**SPDY** 最大的特性就是多路复用，能将多个 **HTTP** 请求在同一个连接上一起发出去，不像目前的 **HTTP** 协议，只能串行地逐个发送请求。

**HTTP2** 支持多路复用，有同样的效果。

```
SPDY 和 HTTP2 目前的实现默认使用HTTPS协议。
SPDY 和 HTTP2 都支持现有的 HTTP 语义和API，对web应用几乎是透明的。
```

**5）False start**

简单概括 `False Start` 的原理就是在 `client_key_exchange` 发出时将应用层数据一起发出来，能够节省一个 `RTT` 。

### （2）https 计算性能优化

**1）优先使用 ECC 椭圆加密算术**

`ECC` 椭圆加密算术相比普通的离散对数计算**在速度和性能上**要强很多。

| 对称密钥大小 | RSA 和 DH 密钥大小 | ECC 密钥大小 |
| :----------: | :----------------: | :----------: |
|      80      |        1024        |     160      |
|     112      |        2048        |     224      |
|     128      |        3072        |     256      |
|     192      |        7680        |     384      |
|     256      |       15360        |     521      |

对称密钥算法： `AES` 、 `DES` 、 `RC4`

非对称加密算法： `RSA` 、 `DH` 、 `ECC`

**2）使用最新版的 openssl**

`openSSL` 是一个开放源代码的软件库包，应用程序可以使用这个包来进行安全通信，避免窃听。

一般来讲，新版的 `OpenSSL` 相比老版的**计算速度**和**安全性**都会有提升。

**3）硬件加速方案**

- `SSL` 专用加速卡。

- `GPUSSL` 加速。

**4）TLS 远程代理计算**

# 🏖️ 二、浏览器存储

## 1、浏览器存储的方式

|     特性     |                      cookie                      |       localStorage       | sessionStorage |        indexedDB         |
| :----------: | :----------------------------------------------: | :----------------------: | :------------: | :----------------------: |
| 数据生命周期 |        一般由服务器生成，可以设置过期时间        | 除非被清理，否则一直存在 | 页面关闭就清理 | 除非被清理，否则一直存在 |
| 数据存储大小 |                        4K                        |            5M            |       5M       |           无限           |
| 与服务端通信 | 每次都会携带在 header 中，对于请求性能有一定影响 |          不参与          |     不参与     |          不参与          |

**补充**：`cookie` 原本并不是用来储存的，而是用来与服务端通信的，需要存取请自行封装 api。

而 `localStorage` 则自带 `getItem` 和 `setItem` 方法，使用很方便。

**localStorage 注意点：**

- `localStorage` 只能存字符串，存取 `JSON` 数据需配合 `JSON.stringify()` 和 `JSON.parse()` ；

- 遇上禁用 `setItem` 的浏览器，需要使用 `try...catch` 捕获异常。

## 2、cookie、localStorage 和 sessionStorage

### （1）cookie、localStorage 和 sessionStorage 是什么？

**1）cookie**

- `cookie` 是一个非常具体的东西，指的就是浏览器里面能**永久存储**的一种数据，仅仅是**浏览器**实现的一种数据存储功能。
- `cookie` 由服务器生成，发送给浏览器，浏览器把 `cookie` 以**kv 的形式**保存到某个目录下的文本文件内，下一次请求同一网站时会把该 `cookie` 发送给服务器。

- `cookie` 的过期时间由客户端设置。**若不设置过期时间**，则表示这个 `cookie` 的生命期为浏览器会话期间，关闭浏览器窗口， `cookie` 就会消失。这种生命期为浏览器会话期的 `cookie` 被称为**会话 cookie**。**如果设置了过期时间**，则在设置的 `cookie` 过期时间之前一直有效，即使窗口或浏览器关闭也会一直有效。
- 会话 cookie 一般不存储在硬盘而是保存在**内存**里，当然这个行为并不是规范规定的。若设置了过期时间，浏览器就会把 cookie 保存到**硬盘**上，关闭后再打开浏览器后这些 `cookie` 仍然有效直到超过设定的过期时间。对于保存在内存里的 `cookie` ，不同的浏览器有不同的处理方式。
- 可用 `document.cookie = ""` 来设置 `cookie` 的值。cookie 的值是键值对的形式存在，当设置的键一样时，会覆盖掉原先的值。当键不一样时，对进行叠加操作。

**2）localStorage**

- 始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
- 同源窗口都会共享，并且不会失效，不管窗口或者浏览器关闭与否都会始终生效。

**3）sessionStorage**

- 浏览器存储的一种形式。

- 仅在当前浏览器窗口关闭前有效，不可能持久保持。
- 在相同浏览器里，如果是在当前页面里面跳转进入一个新的页面，可以共享；而如果是直接打开一个新的页面，不能共享。

### （2）cookie、localStorage 和 sessionStorage 的异同点

**1）三者的相同点在于：**

- 都是保存在浏览器端、且同源的。

**2）三者的区别在于：**

- **与服务器通信不同：**

  `cookie` 数据始终在同源的 `http` 请求中携带（即使不需要），即 `cookie` 在浏览器和服务器间来回传递，而**sessionStorage 和 localStorage 不会自动把数据发送给服务器**，仅在本地保存；

  `cookie` **会**随着 `http` 请求被发送出去，而 `loacalStorage` 和 `sessionStorage` **不会**随着 `http` 请求被发送出去。

  `cookie` 数据还有路径（path）的概念，可以限制 `cookie` 只属于某个路径下。

- **存储大小限制也不同：**

  `cookie` 数据不能超过 4K，同时因为每次 `http` 请求都会携带 `cookie `、所以 `cookie` 只适合保存**很小的数据**，如**会话标识**；

  `sessionStorage` 和 `localStorage` 虽然也有存储大小的限制，但比 `cookie` 大得多，可以达到 `5M` 或更大。

- **数据有效期不同：**

  `sessionStorage` ：仅在当前浏览器窗口关闭之前有效；

  `localStorage` ：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；

  `cookie` ：只在设置的 `cookie` 过期时间之前有效，即使窗口关闭或浏览器关闭。

- **作用域不同：**

  `sessionStorage` **不在不同的浏览器窗口中共享**，即使是同一个页面；

  `localstorage` 和 `cookie` 在**所有同源窗口中都是共享的**；

## 3、cookie 的用途

### （1）保存用户登录状态

例如将用户 `id` 存储于一个 `cookie` 内，这样当用户下次访问该页面 时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。

`cookie` 还可以设置过期时间，当超过时间期限后，`cookie` 就会自动消失。因此，系统往往可以提示用户保持登录状态的时间：**常见选项有一个月、三个 月、一年等**。

### （2）跟踪用户行为

例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。 如果每次都需要选择所在地是繁琐的，当利用了 `cookie` 后就会显得很人性化了，系统能够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区 的天气情况。

因为一切都是在后台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便定制页面。如果网站提供了换肤或更换布局的功能，那么可以使用 cookie 来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以保存上一次访问的界面风格。

## 4、session 和 token

### （1）Session

**举个例子：**

- `session` 从字面上讲，就是**会话**。这个就类似于你和一个人交谈，你怎么知道当前和你交谈的是张三而不是李四呢？对方肯定有某种特征（长相、身高等等）表明他就是张三。
- `session` 也是类似的道理，服务器要知道当前发请求给自己的是谁。
- 为了做这种区分，服务器就要给每个客户端分配不同的“**身份标识**”，这个身份表示也就是我们平常所说的 `sessionId` 。然后客户端每次向服务器发请求的时候，都带上这个“**身份标识**”，服务器就知道这个请求来自于谁了。
- 至于客户端怎么保存这个“**身份标识**”，可以有很多种方式，对于浏览器客户端，大部分情况下都默认采用 `cookie` 的方式，当然也可以使用 `localStorage` 和 `sessionStorage` 存储这个**身份标识**，大家可以依据自身需求进行使用。
- 需要注意的是， `session` 为一个会话，当页面不同即使是同一页面打开两次，也被视为同一次会话。
- 服务器使用 `session` 把用户的信息**临时**保存在了服务器上，用户离开网站后 `session` 会被销毁。
- 这种用户信息存储方式相对 `cookie` 来说更安全，但是 `session` 有一个**缺陷**：如果 web 服务器做了负载均衡，那么下一个操作请求到了另一台服务器的时候 `session` 会丢失。

**综上所述，对 session 做个总结：**

- 当程序需要为某个客户端的请求创建一个 `session` 时，服务器首先检查这个客户端的请求里是否已包含了一个 `session` 标识（ 称为 `sessionId` ），如果已包含则说明以前已经为此客户端创建过 `session` ，服务器就按照此 `sessionId` 把其对应的 `session` 检索出来使用（检索不到，会新建一个）；反之，如果客户端请求不包含 `sessionId` ，则为客户端创建一个 `session` 并且生成一个与此 `session` 相关联的 `sessionId` ， `sessionId` 的值应该是一个既不会重复，又不容易被找到规律以仿造的字符串，这个 `sessionId` 将被在本次响应中返回给客户端保存。保存这个 `sessionId` 的方式可以采用 `cookie` ，也可以是 `locaStorage` 和 `sessionStorage` ，这样在交互过程中浏览器可以自动的按照规则把这个标识发送给服务器。

### （2）Token

- 在 Web 领域基于 `Token` 的身份验证随处可见。在大多数使用 `Web API` 的互联网公司中， `token` 是**多用户下处理认证的最佳方式**。

- 以下**几点特性**会让你在程序中使用基于 `Token` 的身份验证：

  - 无状态、可扩展；
  - 支持移动设备；
  - 跨程序调用；
  - 安全。

- 大部分你见到过的 `API` 和 `Web` 应用都使用 `token` 。例如 `Facebook` , `Twitter` , `Google` , `GitHub` 等。

> - **详细文章补充 👇**
> - 原文：[解决浏览器存储问题，不得不了解的 cookie,localStorage 和 sessionStorage](https://juejin.cn/post/6973404323904503844)
>
> - 链接：https://juejin.cn/post/6973404323904503844

# 🏜️ 三、跨域

## 1、什么是同源策略？

浏览器自带的一种**安全策略**，它是指网址中的**协议**、**域名**、**端口**三个都相同时才能互相访问，即若协议、域名、端口有一个不相同时，浏览器禁止页面加载或执行与自身不同域的脚本。

## 2、为什么浏览器会有同源策略？

因为如果没有同源策略，别人就可以轻松的获取我们网站的 `cookie` 信息，或是对网页进行 `DOM` 操作；

这是一件非常恐怖的事情，尤其是 `cookie` 信息，它里面存在着 `sessionID` ，这是与服务端的 `session` 会话的重要凭证，如果被别人得到了 `cookie`，有很大可能会造成数据被盗取等后果。

## 3、同源策略限制内容有哪些？

- 存储在浏览器中的数据，如 `localStroage` 、 `Cookie` 和 `IndexedDB` 不能通过脚本跨域访问；
- 不能通过脚本操作不同域下的 `DOM` ；
- 不能通过 `ajax` 请求不同域的数据。

## 4、跨域问题解决方案

### （1）通过 jsonp 跨域

**问题集锦：**

- `JSONP` 的原理
- `JSONP` 如何安全通信

**1）JSONP 的原理**

`JSONP（JSON with Padding）` 是数据格式 `JSON` 的一种“**使用模式**”，可以让网页从别的网域要数据。

根据 `XmlHttpRequest`对象受到同源策略的影响，而利用 `<script>` 元素的这个开放策略，网页可以得到从其他来源动态产生的 `JSON` 数据，而这种使用模式就是所谓的 `JSONP` 。

用 `JSONP` 抓到的数据并不是 `JSON` ，而是任意的 `JavaScript` ，用 `JavaScript` 解释器运行而不是用 `JSON` 解析器解析。

所以，通过 `Chrome` 查看所有 `JSONP` 发送的 `Get` 请求都是 `js` 类型，而非 `XHR` 。

**2）JSONP 包含两部分：回调函数和数据**

**回调函数**是当响应到来时要放在当前页面被调用的函数。

**数据**就是传入回调函数中的 `json` 数据，也就是回调函数的参数了。

```javascript
function handleResponse(response) {
  console.log('The responsed data is: ' + response.data);
}
var script = document.createElement('script');
script.src = 'http://www.baidu.com/json/?callback=handleResponse';
document.body.insertBefore(script, document.body.firstChild);
/*handleResonse({"data": "zhe"})*/
//原理如下：
//当我们通过script标签请求时
//后台就会根据相应的参数(json,handleResponse)
//来生成相应的json数据(handleResponse({"data": "zhe"}))
//最后这个返回的json数据(代码)就会被放在当前js文件中被执行
//至此跨域通信完成
```

**3）缺点：**

- 只能使用**Get 请求**。
- 不能注册**success**、**error**等事件监听函数，不能很容易的确定 `JSONP` 请求是否失败。
- `JSONP` 是从其他域中加载代码执行，容易受到**跨站请求伪造**的攻击，其安全性无法确保。

### （2）通过修改 document.damain 来进行跨域（主域相同）

**1）前提条件：**

这两个域名必须属于同一个基础域名！而且所用的协议，端口都要一致，否则无法利用 `document.domain` 进行跨域，所以只能跨子域

在根域范围内，允许把 `domain` 属性的值设置为它的上一级域。例如，在 `aaa.xxx.com` 域内，可以把 `domain` 设置为 `xxx.com` 但不能设置为 `xxx.org` 或者 `com` 。

**2）举例**

比如：http://www.a.com/a.html和http://www.script.a.com/b.html

**① 在www.a.com/a.html中：**

```javascript
document.domain = 'a.com';
var ifr = document.createElement('iframe');
ifr.src = 'http://www.script.a.com/b.html';
ifr.display = none;
document.body.appendChild(ifr);
ifr.onload = function () {
  var doc = ifr.contentDocument || ifr.contentWindow.document;
  //在这里操作doc，也就是b.html
  ifr.onload = null;
};
```

**② 在www.script.a.com/b.html中：**

document.domain = 'a.com';

在两个 `html` 下通过 `js` 将 `document.name = 'xxx.com';` 设置一致，来达到互相访问的作用。

### （3）使用 window.name 来进行跨域

**1）如何适用 window.name 进行跨域？**

`window.name` 通过在 `iframe` （一般动态创建）中加载跨域 HTML 文件来起作用。然后， `HTML` 文件将传递给请求者的字符串内容赋值给 `window.name` 。然后，请求者可以检索 `window.name` 值作为响应。

**2）限制**

`iframe` 标签的跨域能力；

`window.name` 属性值在文档刷新后依旧存在的能力（且最大允许 2M 左右）。

**3）举例**

比如：http://www.a.com/a.html和http://www.b.com/b.html

**①a.html**

```javascript
<script>
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none'; // 隐藏

  var state = 0; // 防止页面无限刷新
  iframe.onload = function() {
      if(state === 1) {
          console.log(JSON.parse(iframe.contentWindow.name));
          // 清除创建的iframe
          iframe.contentWindow.document.write('');
          iframe.contentWindow.close();
          document.body.removeChild(iframe);
      } else if(state === 0) {
          state = 1;
          // 加载完成，指向当前域，防止错误(proxy.html为空白页面)
          // Blocked a frame with origin "http://www.a.com/a.html" from accessing a cross-origin frame.
          iframe.contentWindow.location = 'http://www.a.com/a.html';
      }
  };

  iframe.src = 'http://www.b.com/b.html';
  document.body.appendChild(iframe);
</script>
```

**② 在 b.com/b.html 中包含：**

```javascript
<script>window.name = '要传送的内容';</script>
```

### （4）使用 HTML5 新引进的 window.postMessage 方法

**1）window.postMessage 方法**

`HTML5` 新特性，可以用来向其他所有的 `window` 对象发送消息。需要注意的是我们必须要保证所有的脚本执行完才发送 `MessageEvent` ，如果在函数执行的过程中调用了它，就会让后面的函数超时无法执行。

**2）举例**

**①a.com/index.html：**

```javascript
<iframe id="ifr" src="b.com/index.html"></iframe>
<script type="text/javascript">
    window.onload = function() {
         var ifr = document.getElementById('ifr');
         var targetOrigin = 'http://b.com'; // 若写成'http://b.com/c/proxy.html'效果一样
         // 若写成'http://c.com'就不会执行postMessage了
         ifr.contentWindow.postMessage('I was there!', targetOrigin);
    };
</script>
```

**②b.com/index.html：**

```javascript
<script type="text/javascript">
     window.addEventListener('message', function(event){
      // 通过origin属性判断消息来源地址
      if (event.origin == 'http://a.com') {
         alert(event.data); // 弹出"I was there!"
         alert(event.source); // 对a.com、index.html中window对象的引用
         // 但由于同源策略，这里event.source不可以访问window对象
      }
     }, false);
</script>
```

### （5）cors

**1）cors 跨域**

`Cross-Origin Resource Sharing（CORS）` 跨域资源共享是一份浏览器技术的规范，提供了 `Web` 服务从不同域传来沙盒脚本的方法，以避开浏览器的同源策略，确保安全的跨域数据传输。现代浏览器使用 `CORS` 在 `API` 容器如 `XMLHttpRequest` 来减少 `HTTP` 请求的风险来源。与 `JSONP` 不同，`CORS` 除了 `GET` 要求方法以外也支持其他的 `HTTP` 要求。

**2）**服务器一般需要增加如下**响应头**的一种或几种：

```javascript
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

**3）**跨域请求默认不会携带**Cookie 信息**，如果需要携带，请配置下述参数：

```javascript
"Access-Control-Allow-Credentials": true
// Ajax设置
"withCredentials": true
```

**4）IE 中对 CORS 的实现是 xdr**

```javascript
var xdr = new XDomainRequest();
xdr.onload = function(){
 console.log(xdr.responseText);
}
xdr.open('get', 'http://www.baidu.com');
......
xdr.send(null);
```

**5）其它浏览器中的实现就在 xhr 中**

```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
 if(xhr.readyState == 4){
  if(xhr.status >= 200 && xhr.status < 304 || xhr.status == 304){
   console.log(xhr.responseText);
  }
 }
}
xhr.open('get', 'http://www.baidu.com');
......
xhr.send(null);
```

**6）实现跨浏览器的 CORS**

```javascript
unction createCORS(method, url){
 var xhr = new XMLHttpRequest();
 if('withCredentials' in xhr){
  xhr.open(method, url, true);
 }else if(typeof XDomainRequest != 'undefined'){
  var xhr = new XDomainRequest();
  xhr.open(method, url);
 }else{
  xhr = null;
 }
 return xhr;
}
var request = createCORS('get', 'http://www.baidu.com');
if(request){
 request.onload = function(){
   ......
 };
 request.send();
}
```

### （6）动态创建 script

`script` 标签不受同源策略的限制。

```javascript
function loadScript(url, func) {
  var head = document.head || document.getElementByTagName('head')[0];
  var script = document.createElement('script');
  script.src = url;
  script.onload = script.onreadystatechange = function () {
    if (
      !this.readyState ||
      this.readyState == 'loaded' ||
      this.readyState == 'complete'
    ) {
      func();
      script.onload = script.onreadystatechange = null;
    }
  };
  head.insertBefore(script, 0);
}
window.baidu = {
  sug: function (data) {
    console.log(data);
  },
};
loadScript('http://suggestion.baidu.com/su?wd=w', function () {
  console.log('loaded');
});
//我们请求的内容在哪里？
//我们可以在chorme调试面板的source中看到script引入的内容
```

### （7）利用 location.hash 跨域

**1）原理：**

原理是利用 `location.hash` 来进行传值。

**2）举例：**

假设域名 `a.com` 下的文件 `cs1.html` 要和 `cnblogs.com` 域名下的 `cs2.html` 传递信息。

**①** `cs1.html` 首先创建自动创建一个隐藏的`iframe` ， `iframe` 的 `src` 指向 `cnblogs.com` 域名下的 `cs2.html` 页面

**②** `cs2.html` 响应请求后再将通过修改 `cs1.html` 的 `hash` 值来传递数据

**③**同时在 `cs1.html` 上加一个定时器，隔一段时间来判断 `location.hash` 的值有没有变化，一旦有变化则获取获取 `hash` 值

注：由于两个页面不在同一个域下 `IE` 、 `Chrome` 不允许修改 `parent.location.hash` 的值，所以要借助于 `a.com` 域名下的一个代理 `iframe` 。

代码如下：

**先是 a.com 下的文件 cs1.html 文件：**

```javascript
function startRequest() {
  var ifr = document.createElement('iframe');
  ifr.style.display = 'none';
  ifr.src = 'http://www.cnblogs.com/lab/cscript/cs2.html#paramdo';
  document.body.appendChild(ifr);
}
function checkHash() {
  try {
    var data = location.hash ? location.hash.substring(1) : '';
    if (console.log) {
      console.log('Now the data is ' + data);
    }
  } catch (e) {}
}
setInterval(checkHash, 2000);
```

**cnblogs.com 域名下的 cs2.html:**

```javascript
//模拟一个简单的参数处理操作

switch (location.hash) {
  case '#paramdo':
    callBack();
    break;
  case '#paramset':
    //do something……
    break;
}

function callBack() {
  try {
    parent.location.hash = 'somedata';
  } catch (e) {
    // ie、chrome的安全机制无法修改parent.location.hash，
    // 所以要利用一个中间的cnblogs域下的代理iframe
    var ifrproxy = document.createElement('iframe');
    ifrproxy.style.display = 'none';
    ifrproxy.src = 'http://a.com/test/cscript/cs3.html#somedata'; // 注意该文件在"a.com"域下
    document.body.appendChild(ifrproxy);
  }
}
```

**a.com 下的域名 cs3.html：**

```javascript
//因为parent.parent和自身属于同一个域，所以可以改变其location.hash的值

parent.parent.location.hash = self.location.hash.substring(1);
```

### （8）websocket

**问题集锦：**

- 实时协作编辑使用什么协议？websocket
- websocket 是什么，与轮询有什么不同？
- Websocket 怎么建立的？和 HTTP 的关系？
- Websocket 有没有同源限制？

**1）websocket 是什么？**

web sockets 是一种浏览器的 API，它的目标是在一个单独的持久连接上提供全双工、双向通信。(同源策略对 web sockets 不适用)

**2）web sockets 原理**

客户端会发起一个 HTTP 请求给服务器，请求升级协议，之后服务器进行协议切换，并返回给客户端，至此建立的连接会使得从 HTTP 协议升级为 web socket 协议。

**3）什么时候会用到 websocket？**

只有在支持 web socket 协议的服务器上才能正常工作。

```javascript
var socket = new WebSockt('ws://www.baidu.com'); //http->ws; https->wss
socket.send('hello WebSockt');
socket.onmessage = function (event) {
  var data = event.data;
};
```

**4）轮询**

- 轮询，是指客户端向服务端接二连三的询问是否有新消息。
- 兼容性：短轮询 > 长轮询 > WebSocket。
- 性能方面：Websocket > 长轮询 > 短轮询。

### （9）nginx 的反向代理

**1）nignx 是什么？**

- 可以不用目标服务器配合，不过需要搭建一个中转 `nginx` 服务器，用于**转发请求**。
- 需要在**运维层面**修改，且有可能请求的资源并不在我们的<u>控制范围内</u>（第三方），所以该方式不能作为通用的解决方案。

# ⛺ 四、前端安全

## 1、跨站脚本攻击 XSS

### （1）XSS 是什么

跨站脚本攻击，缩写为 `XSS` (Cross Site Scripting)，是利用网页的漏洞，通过某种方式给网页注入恶意代码，使用户加载网页时执行注入的恶意代码。

### （2）XSS 的攻击类型

`XSS` 一共分为三种：

- 非持久型跨站（也叫反射型）
- 持久型跨站（也叫存储型）
- `DOM` 跨站

**1）非持久型跨站（反射型）**

**① 攻击步骤**

- 攻击者构造出特殊的 `URL` ，其中包含恶意代码。
- 用户打开带有恶意代码的 `URL` 时，网站服务端将恶意代码从 `URL` 中取出，拼接在 `HTML` 中返回给浏览器。
- 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
- 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

**② 攻击场景**

反射型 `XSS` (也被称为非持久性 `XSS` )漏洞常见于通过 `URL` 传递参数的功能，如网站搜索、跳转等。

**③ 攻击方式**

由于需要用户主动打开恶意的 `URL` 才能生效，攻击者往往会结合多种手段诱导用户点击。

`POST` 的内容也可以触发反射型 `XSS` ，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。

**2）持久型跨站（存储型）**

**① 攻击步骤**

- 攻击者将恶意代码提交到目标网站的数据库中。
- 用户打开目标网站时，网站服务端将恶意代码从数据库取出，拼接在`HTML`中返回给浏览器。
- 用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行。
- 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

**② 攻击场景**

存储型 `XSS` 攻击 (也被称为持久型 `XSS` )常见于带有用户保存数据的网站功能，如论坛发帖、商品评论、用户私信等。

**③ 危害**

它是最危险的一种跨站脚本，相比反射型 `XSS` 和 `DOM` 型 `XSS` 具有更高的**隐蔽性**，所以危害更大，因为它**不需要用户手动触发**。

任何允许用户存储数据的 `web` 程序都可能存在存储型 `XSS` 漏洞，当攻击者提交一段 `XSS` 代码后，被服务器端接收并存储，当所有浏览者访问某个页面时都会被 `XSS` 。

**3）DOM 跨站**

**① 攻击步骤**

- 攻击者构造出特殊的 `URL` ，其中包含恶意代码。
- 用户打开带有恶意代码的 `URL` 。
- 用户浏览器接收到响应后解析执行，前端 `JavaScript` 取出 `URL` 中的恶意代码并执行。
- 恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作。

**② 危害**

DOM 通常代表在`html`、`xhtml`和`xml`中的对象，使用 `DOM` 可以允许程序和脚本动态的访问和更新文档的内容、结构和样式。它不需要服务器解析响应的直接参与，触发 XSS**依靠的是浏览器端的 DOM 解析**，所以防范**DOM 型 XSS 完全就是前端的责任,须注意！**。

> 小结：
>
> **反射型跟存储型的区别是：**
>
> 存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。
>
> **DOM 型跟前两种区别是：**
>
> DOM 型 XSS 攻击中，取出和执行恶意代码由**浏览器端**完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于**服务端**的安全漏洞。
>
> 三者的对比：
>
> | 类型       | 存储区                  | 插入点          |
> | :--------- | :---------------------- | :-------------- |
> | 反射型 XSS | URL                     | HTML            |
> | 存储型 XSS | 后端数据库              | HTML            |
> | DOM 型 XSS | 后端数据库/前端存储/URL | 前端 JavaScript |

### （3）如何防御 XSS

只要有输入数据的地方，就可能存在 `XSS` 危险。

**1）设置 HttpOnly**

在 `cookie` 中设置 `HttpOnly` 属性后， `js` 脚本将无法读取到 `cookie` 信息。

**2）转义字符串**

`XSS` 攻击大多都是由**数据的输入和输出**作为攻击点进行攻击，所以针对这几个攻击点，对**数据**进行过滤。

其中，数据包括前端数据的输入和输出、后端数据的输入和输出。

**那么，数据过滤是什么？又如何对数据进行过滤呢？**

数据过滤是对**输入格式**的检查，例如：邮箱，电话号码，用户名，密码……等，按照规定的格式输入。它不仅仅是前端负责，后端也要做相同的过滤检查。如果没有做数据过滤，攻击者完全可以绕过正常的**输入流程**，直接利用**相关接口**向服务器发送设置。

因此，可以通过**封装过滤函数**对数据进行过滤，目的是将几个攻击者常用的输入内容都进行转移，这样就避免了浏览器解析成了脚本代码。

```javascript
function escape(str) {
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quto;');
  str = str.replace(/'/g, '&#39;');
  str = str.replace(/`/g, '&#96;');
  str = str.replace(/\//g, '&#x2F;');
  return str;
}
```

**3）白名单**

对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用**白名单过滤**的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。

> - 详细文章补充 👇
> - 原文：[浅谈 Web 前端安全策略 xss 和 csrf，及又该如何预防？](https://juejin.cn/post/6972690033694228494)
> - 链接：https://juejin.cn/post/6972690033694228494

## 2、跨站请求伪造 csrf

### （1）什么是 csrf

跨站请求伪造(Cross-site request forgery)，也被称为 `one-click attack` 或者 `session riding` ，通常缩写为 `CSRF` 或者 `XSRF` ，是一种挟制用户在当前已登录的 `Web` 应用程序上执行**非本意的操作**的攻击方法。如：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的**用户验证**，达到冒充用户对被攻击的网站执行某项操作的目的。

### （2）csrf 攻击流程

要完成一次 `CSRF` 攻击，受害者必须依次完成**两个步骤**：

- 登录受信任网站 A，并在本地生成 `Cookie` 。
- 在不登出 A 的情况下，访问危险网站 B。

看到这里，你也许会说：“如果我不满足以上两个条件中的一个，我就不会受到 `CSRF` 的攻击”。是的，确实如此，但你不能保证以下情况不会发生：

- 你不能保证你登录了一个网站后，不再打开一个 `tab` 页面并访问另外的网站。
- 你不能保证你关闭浏览器了后，你本地的 `Cookie` 立刻过期，你上次的会话已经结束。（事实上，关闭浏览器不能结束一个会话，但大多数人都会错误的认为关闭浏览器就等于退出登录/结束会话了......）
- 上述中所说的网站，可能是一个存在其他漏洞，但又**很受信任的**且**经常被人访问的**网站。

### （3）CSRF 的特点

- 攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
- 攻击利用受害者在被攻击网站的**登录凭证**，冒充受害者提交操作，而不是直接窃取数据。
- 整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。

### （4）CSRF 攻击场景

跨站请求可以用各种方式：

- 图片 `URL` 、超链接、 `CORS` 、 `Form` 提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。
- `CSRF` 通常是跨域的，因为外域通常更容易被攻击者掌控。但是如果本域下有容易被利用的功能，比如可以发图和链接的论坛和评论区，攻击可以直接在本域下进行，且这种攻击更加危险。

### （5）CSRF 常见的攻击类型

**1）GET 类型的 CSRF**

`GET` 类型的 `CSRF` 利用非常简单，只需要一个 `HTTP` 请求，一般会这样利用：

```html
<img src="http://bank.example/withdraw?amount=10000&for=hacker" />
```

在受害者访问含有这个 img 的页面后，浏览器会自动向 `http://bank.example/withdraw?account=xiaoming&amount=10000&for=hacker` 发出一次 `HTTP` 请求。 `bank.example` 就会收到包含**受害者登录信息**的一次跨域请求。

**2）POST 类型的 CSRF**

这种类型的 `CSRF` 利用起来通常使用的是一个**自动提交**的表单，如：

```html
<form action="http://bank.example/withdraw" method="POST">
  <input type="hidden" name="account" value="xiaoming" />
  <input type="hidden" name="amount" value="10000" />
  <input type="hidden" name="for" value="hacker" />
</form>
<script>
  document.forms[0].submit();
</script>
```

访问该页面后，表单会自动提交，相当于模拟用户完成了一次 POST 操作。

POST 类型的攻击通常比 `GET` 要求更加严格一点，但仍并不复杂。任何个人网站、博客，被黑客上传页面的网站都有可能是发起攻击的来源，后端接口不能将安全寄托在仅允许 `POST` 上面。

**3）链接类型的 CSRF**

链接类型的 `CSRF` 并不常见，比起其他两种用户打开页面就中招的情况，这种需要用户点击链接才会触发。这种类型通常是在论坛中发布的图片中嵌入恶意链接，或者以广告的形式诱导用户中招，攻击者通常会以比较夸张的词语诱骗用户点击，例如：

```js
<a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">
	重磅消息！！
<a/>
```

### （6）如何防御 csrf

**1）验证码**

强制用户必须与应用进行交互，才能完成最终请求。此种方式能很好的遏制 `csrf` ，但是用户体验比较差。

**2）Referer check**

请求**来源限制**，此种方法成本最低，但是并不能保证 100% 有效，因为服务器并不是什么时候都能取到 `Referer` ，并且低版本的浏览器存在伪造 `Referer` 的风险。

**3）token**

`token` 验证的 `CSRF` 防御机制是**公认最合适的**方案。

### （7）CSRF 与 XSS 区别

- 通常来说 `CSRF` 是由 `XSS` 实现的，`CSRF` 时常也被称为 `XSRF`（`CSRF` 实现的方式还可以是直接通过命令行发起请求等）。
- 本质上讲，`XSS` 是**代码注入问题**，`CSRF` 是 **HTTP 问题**。 `XSS` 是内容没有过滤导致浏览器将攻击者的输入当代码执行，`CSRF` 则是因为浏览器在发送 `HTTP` 请求时候。
- 自动带上 `cookie` ，而一般网站的 `session` 都存在 `cookie` 里面( `Token` 验证可以避免)。

> - **详细文章补充 👇**
> - 原文：[浅谈 Web 前端安全策略 xss 和 csrf，及又该如何预防？](https://juejin.cn/post/6972690033694228494)
> - 链接：https://juejin.cn/post/6972690033694228494

# 🏞️ 五、其他问题

## 1、Chrome 浏览器用过哪些调试工具

- `Element` 面板（鼠标）；
- `console` 面板（对一些提示信息进行输出）；
- `sources` 面板（调试 `js` ）；
- `Network` 面板（查看网络请求的状态、接口调用的情况……）。

## 2、浏览器内核的理解

**（1）主要分为两个部分**：`渲染引擎`、`js引擎`

- `渲染引擎：` 负责取得网页的内容（html css img …），以及计算网页的显示方式，然后输出至显示器或者打印机，浏览器的内核不同对于网页的语法解释也不同，所以渲染的效果也不一样。
- `js引擎：` 解析和执行 `javascript` 来实现网页的动态效果。

**（2）部分浏览器的内核**

- `IE：` `trident`内核
- `Fireforx：` `gekco`内核
- `Safari：` `webkit`内核
- `Opera：` 以前是`presto`内核，`Opera`现已改用`Google - Chrome` 的`Blink` 内核
- `Chrome:` `Blink`(基于`webkit`，`Google`与`Opera Software`共同开发)

# 🏡 六、结束语

在上文中，从 `http` 的基础知识，到浏览器缓存问题，再到跨域，前端安全问题，系统地梳理了浏览器在前端面试中的考点。

到这里，本文就讲解结束啦！希望对大家有帮助~

如对文章有补充，或者有发现小细节错误，欢迎小伙伴们评论区留言或联系 `vx:MondayLaboratory` ，及时订正~

让这份面试内容更加地尽善尽美，造福更多在备试中的小伙伴们！

最后，预祝各位看到这篇文章的小伙伴们，都能够斩获到自己心仪的 `offer` ~🥂🥂🥂

# 🐣 彩蛋 One More Thing

## 🏷️pdf 内容获取

👉 微信关注公众号 `星期一研究室` ，回复关键字 `浏览器面试pdf` 即可获取相关 `pdf` 内容~

👉 回复 `面试大全pdf` 可获取全专栏内容！

## 🏷️ 更新地址

👉 [offer 来了面试专栏](https://juejin.cn/column/7007991853089849351)

