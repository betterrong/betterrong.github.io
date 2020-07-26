# 如何使用 VuePress 写文档


<!--more-->

{{< typeit >}}
VuePress 是尤雨溪本人为了让自己更方便地写文档而使用 vue 创建的静态网站生成器。
{{< /typeit >}}

## 0x00 简介

VuePress 由两部分组成：第一部分是一个[极简静态网站生成器](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://www.vuepress.cn/theme/)和[插件 API](https://www.vuepress.cn/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://www.vuepress.cn/theme/default-theme-config.html)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

我目前配制好的笔记如下：

![UTt8hQ.png](https://s1.ax1x.com/2020/07/21/UTt8hQ.png " ")
![UTt3tg.png](https://s1.ax1x.com/2020/07/21/UTt3tg.png " ")

## 0x01 准备

### 1.1 安装

```shell
cnpm install -g vuepress//全局安装
```

### 1. 2 创建项目目录

```shell
mkdir MyDocs && cd MyDocs
```

### 1.3 项目初始化

```shell
npm init -y
```

将会创建一个 `package.json` 文件，内容如下：

```json
{
  "name": "MyDocs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vuepress dev docs", 	//用于实时预览
    "build": "vuepress build docs"  //用于打包项目
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

### 1.4 创建 VuePress 项目的文件夹和文件

#### 1.4.1 文件目录结构

VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

 ```
.
├── docs
│   ├── .vuepress (可选的)	//存放核心内容的文件夹
│   │   ├── components (可选的)	//存放你需要添加的vue组件
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的) //存放静态文件，如图片等
│   │   ├── styles (可选的)	//存放需要定制的样式
│   │   │   ├── index.styl
│   │   │   └── palette.styl	//配置页面主题颜色的文件
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)	//设定顶部导航栏、侧边导航栏等项目配置的核心文件
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md	//首页展示用的markdown文件
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json	//之前创建的Node.js项目描述文件


 ```
我的F:/MyDocs下的目录结构如下
```shell
$tree /f
卷 资料 的文件夹 PATH 列表
卷序列号为 FE22-9FCB

│  package.json
│
└─docs
    │  README.md
    │
    ├─.vuepress
    │  │  config.js
    │  │
    │  └─public
    │          favicon.ico
    │          notebooks.png
    │
    └─Linux
        └─vbird1
            │  README.md
            │
            └─1-introduction
                    01.md
                    02.md
                    03.md
```

### 1.5 设置页面具体内容

#### 1.5.1 修改 `config.js` 文件：

```js
module.exports = {
    title: '首页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '裂泉的前端记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', 
            { rel: 'icon', href: '/favicon.ico' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],  
    ],
}

```

修改完成后，在`docs/.vuepress/public` 文件夹放入相应的 `favicon.ico` 和`notebooks.png`

#### 1.5.2 设置首页内容

按照官方文档的格式修改 `README.md` 文件：

```markdown
---
home: true
heroImage: /notebooks.png
actionText: 鸟哥的 Linux 私房菜
actionLink: /Linux/vbird1/
features:
- title: 好记性不如烂笔头
  details: 一定要好好做好记录，对知识点进行整理与归纳。
- title: 分类管理笔记
  details: 使用 vuepress 记录系统长期的的学习笔记，hugo 写个人博客记录零碎知识点或心得。
- title: less is more
  details: 简洁就是美，笔记和博客就只应该专注于记录。切记勿舍本逐末。
footer: MIT Licensed | Copyright © 2020-present Evan You
---

​``` go
package myLife

import(
  "read"
  "coding"
  "share"
  ...
)

  for alive == true {
    learn()
  }
​```

> **好好学习，天天向上！**

```


{{< admonition type=tip title="温馨提示" open=true >}}
heroImage 的地址配置第一个 '/' 默认指向的是 docs/.vuepress/public，你需要在此文件夹放置你的首页图片。
actionLink 地址配置第一个 '/' 默认指向的是 docs/，若未路径文件不存在点击进去会跳转至 404。文件路径之后会详细讲解。
{{< /admonition >}}

## 0x02 书写文档

### 2.1 查看预览

```shell
$npm dev docs
```

打开 `http://localhost:8080/`  可预览网站。

### 2.2 修改页面导航栏、侧边栏导航栏

修改  `config.js`  文件

```js
module.exports = {
    //...省略部分代码
    
    //下面涉及到的md文件和其他文件的路径下一步再详细解释
    themeConfig: {
        logo: '/egg.png',  //网页顶端导航栏左上角的图标
        
        //顶部导航栏
        nav: [           
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            { text: '首页', link: '/' },    
            
            //格式二：添加下拉菜单，link指向的文件路径
            {
                text: '分类',  //默认显示        
                ariaLabel: '分类',   //用于识别的label
                items: [
                    { text: '文章', link: '/pages/folder1/test1.md' },  
                    //点击标签会跳转至link的markdown文件生成的页面
                    { text: '琐碎', link: '/pages/folder2/test4.md' },
                ]
            },
            { text: '功能演示', link: '/pages/folder1/test3.md' },
            
            //格式三：跳转至外部网页，需http/https前缀
            { text: 'Github', link: 'https://github.com/dwanda' },
        ],
        
        //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
        sidebar: {
            '/pages/folder1/':[         
                {
                    title: '测试菜单1',   // 一级菜单名称
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠,
                    sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
                    children: [
                        ['test1.md', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/pages/folder1/test1.md
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: false, 
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],
            
            //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
        }
    }
}

```

我的 `config.js` 文件如下

```js
module.exports = {
  title: '学习笔记',
  description: '学习笔记文档整理',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  dest: './dist',
  plugins: [],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // search: true,
    searchMaxSuggestions: 10,//只会为页面的标题、h2 、 h3 以及 tags 构建搜索索引。
    nav: [
      { text: '主页', link: '/' },
      { text: 'Linux学习',
        items: [
          { text: '鸟哥的私房菜基础学习篇', link: '/Linux/vbird1/' }
        ]
      }
    ],
    sidebar: {
      '/Linux/vbird1/': [
        {title: '鸟哥的私房菜基础学习篇',path: '/Linux/vbird1/'},
        {
          title: '1 Linux的规则和安装',
          collapsable: false,
          children: [
            {title: '1.1 计算机概论',path: '/Linux/vbird1/1-introduction/01'},
            {title: '1.2 Linux是什么与如何学习', path: '/Linux/vbird1/1-introduction/02'},
            {title: '1.3 主机规划与磁盘分区', path: '/Linux/vbird1/1-introduction/03'}
          ]
        }
      ]
    },
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated'// 文档更新时间：每个文件git最后提交的时间
    // logo: '/logo.png',//导航栏logo
    // displayAllHeaders: true // 显示所有页面的标题链接：
  }
};
```

此时我们的网页首页其他页面暂时无法跳转，因为此处点击菜单跳转时，页面对应的 markdown 文件为空，会跳转至 404 页面。而侧边栏则会自动匹配当前页面路径，若侧边栏数据存在当前页面路径，则显示出来，路径匹配不到则隐藏侧边栏，这也是为什么它可以不同页面匹配不同的侧边栏的原因。



### 2.3 markdown 及其他文件路径解析

我们的链接都是链接到 markdown 文件，在 vuepress 打包后会自动生成页面。若链接对应的 markdown 文件不存在，则会跳转 404。若存在，则跳转解析生成的页面。

还有得明确一个概念，vuepress 的文件寻址，**不同类型的文件都已经预设好不同的默认路径**。比如说上一步的 logo 图片引用的路径，就是遍历`docs/.vuepress/public` 寻找文件，我们只需要把图片放在这个文件夹就可以了。markdown 的文件就按我写的放在 docs/pages 文件夹下，里面每个文件夹名字就是一个子路径。如此类推。每个不同类型的文件必须放置在按照规定好的位置。

**文件路径的默认寻址方式**

- 和图标 / 图片等静态资源相关的，第一个 '/' 默认指向的是 docs/.vuepress/public/
-  侧边栏 / 导航栏链接的 markdown 文件，第一个 '/' 默认指向的是 docs/，我们这里是都放置在 docs/pages 里
- 嵌入在 markdown 中使用的 Vue 组件，放置在 docs/.vuepress/components 目录中

### 2.4 默认的页面路由

此处我们把 `docs` 目录作为 `targetDir` （参考 [命令行接口](https://www.vuepress.cn/api/cli.html#基本用法)），下面所有的 “文件的相对路径” 都是相对于 `docs` 目录的。

对于上述的目录结构，默认页面路由地址如下：

| 文件的相对路径     | 页面路由地址   |
| ------------------ | -------------- |
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

## 0x03 其他问题

### 3.1 热更新问题

由于项目结构没有[热更新](https://www.webpackjs.com/guides/hot-module-replacement/)，所以每次调整 config.js 之后，都需要重新 npm run dev 一次。更新已存在的 markdown 文件的时候会实时热更新。

### 3.2 修改主题颜色

只需要在我们的 **'.vuepress/styles/palette.styl'** 文件中添加一下代码，再修改它的颜色进行保存，就会自动改变。

```
    // 默认值
    $accentColor = #3eaf7c        //主题颜色
    $textColor = #2c3e50
    $borderColor = #eaecef
    $codeBgColor = #282c34
    $badgeTipColor = #42b983
    $badgeWarningColor = darken(#ffe564, 35%)
    $badgeErrorColor = #DA5961

```

### 3.3 在 markdown 中嵌入 vue 组件

首先先把 vue 组件编辑好，直接放在我们之前创建的 `docs/.vuepress/components` 文件夹中。只需要在 markdown 文件中，直接按下面的方法使用组件。无需其他引入即可[加载 vue 组件](https://vuepress.vuejs.org/zh/guide/using-vue.html#浏览器的-api-访问限制)。

```
<ClientOnly>
  <HomeLayout/>    //你的组件名字
</ClientOnly>

```

### 3.4 markdown 内容的其他扩展

- [添加本地图片资源](https://vuepress.vuejs.org/zh/guide/assets.html)
- [markdown 的样式其他扩展规则](https://vuepress.vuejs.org/zh/guide/markdown.html#代码块中的语法高亮)，包括代码行号、不同格式代码的高亮、自定义容器等。
- [markdown 的链接的默认跳转规则](https://vuepress.vuejs.org/zh/guide/markdown.html#链接)，默认都是跳转至网站内部的其他页面，如需跳转至外部页面记得加上 `http/https` 前缀。

### 3.5 自定义容器

![UTY2TS.png](https://s1.ax1x.com/2020/07/21/UTY2TS.png)

```
::: tip 这里是替换内容
这里是内容
:::
```



### 3.6 官网一些其他功能

- [整体目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html#默认的页面路由)
- [config.js 的其他细节配置](https://vuepress.vuejs.org/zh/config/#theme)
- [开启页面自动记录上一次修改时间，并显示在页面右下角](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#最后更新时间)
- [开启 pwa，实现离线缓存](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html#使用)
- [开发自己的主题](https://vuepress.vuejs.org/zh/theme/writing-a-theme.html)

## 0x04 参考

1. [1 小时搞定 vuepress 快速制作 vue 文档 / 博客 + 免费部署预览](https://juejin.im/post/5dce1e0e5188254eda3936c5#heading-0)

2. [VuePress 中文文档 | VuePress 中文网](https://www.vuepress.cn/)

3. [VuePress 手把手一小時快速踩坑](https://juejin.im/post/5ad69f6c51882579ef4f7b12)

4. [VuePress 手摸手教你搭建一个类 Vue 文档风格的技术文档 / 博客](https://segmentfault.com/a/1190000016333850)
