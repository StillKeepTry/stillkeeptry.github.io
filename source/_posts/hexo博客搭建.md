title: hexo博客搭建
date: 2015-11-28 23:23:41
categories: 初学之道
tags: [hexo]
---

`wordpress`感觉更适合用来发一些日志啊,什么传记之类的文章.技术性的文章还是得`markdown+latex`这种完美支持的才好.来爽爽`hexo+github.io`的使用.先写第一篇,当做helloworld吧.

<!-- more -->

-------

## hexo安装

[hexo](https://hexo.io/zh-cn/) 的安装需要先安装npm,利用npm来安装hexo.npm不需要我多介绍了吧

```bash
npm install -g hexo
```

之后的需要依赖node.js,貌似系统apt-get安装的node不太对,所以采用以下方式

**cURL:**

```bash
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
```

---

## hexo建站
安装 Hexo 完成后,请执行下列命令,Hexo 将会在指定文件夹中新建所需要的文件.

```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```

新建完成后,文件夹目录如下:
```bash
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

---

## 目录文件说明

### _config.yml

网站的 [配置](https://hexo.io/zh-cn/docs/configuration.html) 信息,您可以在此配置大部分的参数.

### package.json
应用程序的信息. EJS, Stylus 和 Markdown renderer 已默认安装,您可以自由移除.

### scaffolds
 [模板](https://hexo.io/zh-cn/docs/writing.html) 文件夹. hexo根据scaffold来建立文件.

### source
资源文件夹是存放用户资源的地方
插入图片可以采用`![](/images/avatar.jpg)`

![](/images/avatar.jpg)

### themes
 [主题](https://hexo.io/zh-cn/docs/themes.html) 文件夹

---

## 博客已经完成的和待完成的

### hexo 博客已经完成的

- 主题设置成了[`Next:Mist`](http://theme-next.iissnan.com/)
- 标签,分类完成
- mathjax 完成学习, ($a = b + c$)

### 希望实现
- 考虑怎么把tag标签变好看一点

