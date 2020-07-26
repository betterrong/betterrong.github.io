# hugo博客添加键盘导航




<!--more-->

## 1 前言

最近发现之前加的一个纪录片交流群改成了一个导航网站交流群，进去和他们聊了会，勾起了我对导航网站的好奇。平时不用导航网站，也就是收藏了几个专业的垂直导航，比如[前端导航](http://www.alloyteam.com/nav/)、[优设导航](https://hao.uisdc.com/)这样的，有需要的时候再用。在好奇心的驱动下，我去网上浏览了一堆导航网站，浏览过程中我发现了一个很有想法的导航网站，我很喜欢。在一番研究下，我把它集成到了我的个人博客，然后改为我的浏览器主页。

这篇文章会详细记录置过程，在配置过程中顺便搭建了[个人图床]^(使用gitee搭建)，搭建过程也一并记录下来。

{{< typeit >}}
here we go!
{{< /typeit >}}

## 2 hugo站点目录结构

用hugo生成的站点目录结构如下：

```sh
│  config.toml
│
├─archetypes
├─content
├─data
├─layouts
├─static
├─public
└─themes
```

- **config.toml**，站点全局的参数配置文件，在里面可以定义博客地址、构建配置、标题、导航栏等等。
- **archetypes**，Hugo的markdown文件中前置数据`Front Matter`定义的结构，储存`.md`的模板文件,在创建新内容时自动生成内容的配置。默认使用的是`default.md`文件，可以自定义，该文件夹的优先级高于**主题**下的`/archetypes`文件夹。`Front Matter`支持三种格式，除了`yaml`，还支持`toml`，`json`方式。
- **content**，存放网页内容的目录，即我们编写的markdown文件都存放在此目录，此目录是Hugo的默认源目录。
- **data**， data目录用来存放数据文件，一般是json文件，Hugo提供了相关命令可以从data目录下读取相关的文件数据，然后渲染到HTML页面中，将业务数据与模板分离。
- **layouts**，存放自定义的模板文件，该文件夹的优先级高于主题下的`/layouts`文件夹。
- **static**，存放静态文件，比如css、js、img等文件目录，Hugo在渲染时，会直接将static目录下的文件直接复制到public目录下，不会做任何渲染。
- **public**，执行`hugo`命令后，储存生成的静态文件。
- **themes**，存放网站主题，可以下载多个主题，themes目录下的每个子目录代表了一个主题。

所以，我们要想为博客添加自定义页面就必须把我们自定义的页面放到`/static`文件夹下，`static`这个文件夹有一个特性就是可以将里面的文件复制到public文件夹里面。因为它不是hugo生成的，所以不会被覆盖。

<img src="https://betterrong.gitee.io/imagebed/imgs/add-nav/01.png"  style="zoom:200%;" />

## 3 修改配置文件

编辑`config.toml`，在`[languages.zh-cn.menu]`下方插入如下内容：

```toml
 [[languages.zh-cn.menu.main]]
        identifier = "navigation"
        pre = "⌨"
        post = ""
        name = "键盘导航"
        url = "/navigation/"
        title = "友情链接"
        weight = 5
```

然后，重新生成`public`文件夹，

输入命令后进入`localhost:1313`查看效果：

```sh
hugo serve -e production
```

点击“键盘导航”即可跳转到自定义导航页面了。

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/02.png " ")

## 4 图床搭建

搭建图床，用来方便地管理个人图片，接下来用gitee实现图床搭建。

### 4.1 创建仓库

登入[gitee](https://gitee.com/)，新建一个仓库。

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/03.png " ")

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/04.png " ")

### 4.2 创建文件夹

在本地创建一个图床文件夹。

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/05.png " ")

初始化然后手动关联本地文件夹与远程仓库：

```sh
$ cd imagebed
$ git remote add origin https://gitee.com/likebetter/imagebed.git
```

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/06.png " ")

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/07.png " ")

### 4.3 开启Gitee Pages

在仓库中打开服务选项，选择`Gitee Pages`：

 ![](https://betterrong.gitee.io/imagebed/imgs/add-nav/08.png " ")

启动`Gitee Pages`服务

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/09.png " ")

部署完成，可看到生成的图床地址：

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/10.png " ")

### 4.4 上传图片

创建imgs文件夹，放入图片，提交即可。

这里我对图床做了美化，放入了一个自定义页面于`/imagebed`文件夹下

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/11.png " ")

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/12.png " ")

通过在该地址后面拼接远程仓库内的图片目录，就能将图片显示出来。比如位于远程仓库如下目录中的`link_ico.png`图片：

![](https://betterrong.gitee.io/imagebed/imgs/add-nav/13.png " ")

## 5 参考

[【教程】使用gitee搭建免费的图床](https://www.cnblogs.com/aflyun/p/10010319.html)
[使用Gitee搭建个人图床](https://www.cnblogs.com/AhuntSun-blog/p/12675620.html)
[hugo介绍及使用](https://luneshao.github.io/post/hugo-intro/)
[Hugo 从入门到会用](https://blog.olowolo.com/post/hugo-quick-start/#%E6%89%A9%E5%B1%95%E9%98%85%E8%AF%BB)
