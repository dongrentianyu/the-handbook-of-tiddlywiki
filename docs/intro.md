---
sidebar_position: 1
title: 导言
---

## 太微和太微之书是什么？

太微是对 tiddlywiki 的中文翻译，后面的文档中会视情况使用 tiddlywiki 和太微两个名词，但指向都是一样的。

太微之书是本文档，旨在从最基础的内容开始写起，让新手以最快的速度了解 tiddlywiki，了解太微生态，并上手使用。

## tiddlywiki 是什么？

tiddlywiki 是一款具有接近二十年（明年就 20 年了）发展历史的网页程序。最早是由杰里米开发，现在已经是一个不断发展的开源项目，越来越多的人参与到这个项目进来。

在 2014 年，杰里米完成了对 tiddlywiki 的重构，并发布新版本 tiddlywiki5，目前的版本号都是在 tiddlywiki5 下进行的，最新版本是 5.3.1。

## 为什么你该使用 tiddlywiki？

### 软件本身

tiddlywiki 本身是一个 HTML 网页文件，完整地包含了各种程序代码、样式表文件。如果安装了插件，插件也会完整地保存进去。

同时 tiddlywiki 又可通过 nodejs 进行部署，以更细粒化的方式进行保存备份。

而 tiddlywiki 本身可以直接实现当下笔记软件所具有的多个功能，比如标签、链接、模板化使用、自动化运行。

其次，tiddlywiki 及生态也在不断发展，拥有四百多个插件，选择一些插件就可以配置出属于自己的 tiddlywiki 了。

并且 tiddlywiki 本身是开源免费的，所以完全不用担心 tiddlywiki 会出现开发者跑路的问题。

tiddlywiki 这种把数据和程序几乎完全绑定在一起的方式，我以为是比 obsidian 拆分两者是要更好的。数据离不开程序运行，而程序需要数据来支撑。而硬要拆分两者，就只能选择基础通用的功能，无法在更高更复杂的情况下实现更多的需求。

### 更多的链接！！！

tiddlywiki 可以实现各种各样的功能，比如写关于某个项目的小册子，或者用来记日记，或者是做成商业展示网页。不过最多的还是打造成个人笔记系统和个人博客。把笔记系统写出来的内容发布公开就成了个人博客。博客也可以视作是数字花园。

最早的笔记软件一般只有标签加文件夹功能。而第二代笔记软件，大部分是在前面的基础上加上了双链和模板的功能。而不同的笔记软件还有不同之处，比如动态表格，比如大纲笔记，比如白板笔记。但这些只有动态表格 tiddlywiki 实现得比较好，大纲笔记和白板笔记还有欠缺。

而作为笔记系统，tiddlywiki 和其他笔记软件最大的不同就在于，tiddlywiki 有**更多且更丰富**的链接。标题和标签是最基本的链接，加上双链，再加上条目的字段内容也可以生成链接。而 tiddlywiki 推崇把单个条目上写成多个更小的片段。以保证能够重复使用一些笔记。所以这就导致了，可能在其他笔记系统里，一个 markdown 文件，可以写几千字甚至上万字，而在 tiddlywiki 里则只推荐写几百字到两千字左右。超过两千字的，我个人会重新处理，再分成几个条目。

这也就导致了 tiddlywiki 的链接非常多，数量级完全不一样。如果你不喜欢这样太碎、太多链接，那你可能不适合用 tiddlywiki 来写笔记。

不过没关系，可以**当成游戏**来体验下，tiddlywiki 也是一个很有意思的玩具。

### 更多的拓展

如果你是前端程序员，那么你更能探索 tiddlywiki 了。因为 tiddlywiki 支持 html 和 javascript，你可以操作 javascript 来进行更为丰富的操作。但**本文档会尽可能避免 javascript 内容**，原因很简单，我也不会 javascript。后面高阶内容里，可能会简单涉及，但主要是与插件相关的。

## 为什么会写这份文档？

目前已经有很多 tiddlywiki 教程了。但不管是官方文档，还是太微中文教程，还是 tiddlywiki-xp，都是以 tiddlywiki 自身的形式展示的。而新手又不了解 tiddlywiki，结果就导致了新手很多时候连基本的 tiddlywiki 教程都看不完，或者看不全。

随后便遇到了很多很多，各种各样的问题，从而导致 tiddlywiki 一直推广不开，只能小众发展。

现在打算以 markdown 的形式，按照通行教程思路，一步步演示 tiddlywiki 应该如何上手使用。

## 资源下载

因为 tiddlywiki 很多内容都放在了 github 上，而 github 国内又访问不是很方便。所以我建了一个 QQ 群，里面用来存放资料。里面开启禁言，如果想要讨论，可以前往大群里讨论或者去太微中文论坛里讨论。

- [QQ 资料群 854373088](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=mjGbVUANLPdTVRHeucfKMoqPANEFkl2G&authKey=xoTJ%2FYfOSjrsiuz2qjKuCPvEVEc%2BhMw0aRafEhBAFJUZ5CTNfye2DyUMC54gAW9d&noverify=0&group_code=854373088)
- [QQ 讨论群 946052860](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=NvkTXZV0144wvZpvdfGGnA9f8uqZDbp3&authKey=5OkrQ%2BUiKMivyuvmapTwYF3ItI%2BV8Ns2j7mPDLq8BxJqLZiuLbIV9Ex8FBtFlwdn&noverify=0&group_code=946052860)
- [太微中文论坛](https://talk.tidgi.fun/topic/6/%E7%BE%A4%E5%85%AC%E5%91%8A-%E6%9D%A5%E8%87%AAqq%E7%BE%A4)

我更喜欢在论坛里讨论问题，可以保存讨论内容，帮助到后来者，也更方便管理。

当然也欢迎在本项目仓库里提 issue，issue 看到了也会回复的。

另外，技术有限，所以[docusaurus](https://docusaurus.io/)能实现的功能，未必能全部实现，只能实现简单的功能，markdown 语法一旦搞复杂了，非常麻烦。

## 赞助支持

两张图片不知道怎么搞成并列，本地 markdown 能显示，但本地部署时就显示报错。花了一两个小时都没搞定，懒得再搞了，先这样吧，预计也不太会有人打赏。

![](./img/微信打赏码.jpg)
![](./img/支付宝收款码.jpg)

<figure class="half">
    <img src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg" width="100px" ></img>
    <img src="https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg" width="100px" ></img>
</figure>
