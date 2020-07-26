# 如何编写markdown（备份）




<!--more-->

{{< typeit >}}
本文档主要是测试书写文档中可能用到的各种语法。
{{< /typeit >}}

 [WYSIWYG]^(所见即所得) 

[Markdown基本语法参考](https://hugoloveit.com/zh-cn/basic-markdown-syntax/)

## 1 打字机动画

### 1.1 简单内容

{{< typeit >}}
这是一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*...
{{< /typeit >}}

```markdown
{{</* typeit */>}}
这一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*...
{{</* /typeit */>}}
```

一个带有 `h4` 标签的 `typeit` 示例:

```markdown
{{</* typeit tag=h4 */>}}
这一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*...
{{</* /typeit */>}}
```

呈现的输出效果如下:

{{< typeit tag=h3 >}}
这一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*...
{{< /typeit >}}

### 1.2 代码内容

代码内容也是允许的, 并且通过使用参数 `code` 指定语言类型可以实习语法高亮.

一个带有 `code` 参数的 `typeit` 示例:

```markdown
{{</* typeit code=go */>}}
package main
import "fmt" 

func main() {
   fmt.Println("hello,world!")
}
{{</* /typeit */>}}
```

呈现的输出效果如下:

{{< typeit code=go >}}
package main 
import "fmt" 

func main() {
   fmt.Println("hello,world!")
}
{{< /typeit >}}

### 1.3 分组内容

按顺序开始一组 `typeit` 内容的打字动画。

一组具有相同 `group` 参数值的 `typeit` 内容将按顺序开始打字动画。

示例：

```markdown
{{</* typeit group=paragraph */>}}
**首先**, 这个段落开始
{{</* /typeit */>}}

{{</* typeit group=paragraph */>}}
**然后**, 这个段落开始
{{</* /typeit */>}}
```

呈现的输出效果如下:

{{< typeit group=paragraph >}}
**首先**, 这个段落开始
{{< /typeit >}}

{{< typeit group=paragraph >}}
**然后**, 这个段落开始
{{< /typeit >}}

## 2 横幅

```markdown
{{</* admonition type=tip title="This is a tip" open=false */>}}
一个 **技巧** 横幅
{{</* /admonition */>}}
或者
{{</* admonition tip "This is a tip" false */>}}
一个 **技巧** 横幅
{{</* /admonition */>}}
```

{{< admonition type=tip title="This is a tip" open=false >}}
一个 **技巧** 横幅
{{< /admonition >}}

`admonition` shortcode 支持 **12** 种 帮助你在页面中插入提示的横幅.

{{< admonition note >}}
一个 **注意** 横幅 note
{{< /admonition >}}

{{< admonition abstract >}}
一个 **摘要** 横幅 abstract
{{< /admonition >}}

{{< admonition info >}}
一个 **信息** 横幅 info
{{< /admonition >}}

{{< admonition tip >}}
一个 **技巧** 横幅 tip
{{< /admonition >}}

{{< admonition success >}}
一个 **成功** 横幅 success
{{< /admonition >}}

{{< admonition question >}}
一个 **问题** 横幅 question
{{< /admonition >}}

{{< admonition warning >}}
一个 **警告** 横幅 warning
{{< /admonition >}}

{{< admonition failure >}}
一个 **失败** 横幅 failure
{{< /admonition >}}

{{< admonition danger >}}
一个 **危险** 横幅 danger
{{< /admonition >}}

{{< admonition bug >}}
一个 **Bug** 横幅 bug
{{< /admonition >}}

{{< admonition example >}}
一个 **示例** 横幅 example
{{< /admonition >}}

{{< admonition quote >}}
一个 **引用** 横幅 quote
{{< /admonition >}}

## 3 mermaid

[mermaid](https://mermaidjs.github.io/) 是一个可以帮助你在文章中生成图表和流程图的库, 类似 Markdown 的语法。

只需将你的 mermaid 代码插入 `mermaid` shortcode 中即可。

### 3.1 流程图

```markdown
{{</* mermaid */>}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{</* /mermaid */>}}
```

{{< mermaid >}}
graph LR;
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]
{{< /mermaid >}}

### 3.2 饼图

一个 **饼图** `mermaid` 示例:

```markdown
{{</* mermaid */>}}
pie
    "东部" : 112
    "西部" : 56
    "北部" : 24
    "南部" : 8
{{</* /mermaid */>}}
```

呈现的输出效果如下:

{{< mermaid >}}
pie
    "东部" : 112
    "西部" : 56
    "北部" : 24
    "南部" : 8
{{< /mermaid >}}

## 4 echarts

[ECharts](https://echarts.apache.org/) 是一个帮助你生成交互式数据可视化的库。

ECharts 提供了常规的 [折线图](https://echarts.apache.org/zh/option.html#series-line), [柱状图](https://echarts.apache.org/zh/option.html#series-line), [散点图](https://echarts.apache.org/zh/option.html#series-scatter), [饼图](https://echarts.apache.org/zh/option.html#series-pie), [K线图](https://echarts.apache.org/zh/option.html#series-candlestick), 用于统计的 [盒形图](https://echarts.apache.org/zh/option.html#series-boxplot), 用于地理数据可视化的 [地图](https://echarts.apache.org/zh/option.html#series-map), [热力图](https://echarts.apache.org/zh/option.html#series-heatmap), [线图](https://echarts.apache.org/zh/option.html#series-lines), 用于关系数据可视化的 [关系图](https://echarts.apache.org/zh/option.html#series-graph), [treemap](https://echarts.apache.org/zh/option.html#series-treemap), [旭日图](https://echarts.apache.org/zh/option.html#series-sunburst), 多维数据可视化的 [平行坐标](https://echarts.apache.org/zh/option.html#series-parallel), 还有用于 BI 的 [漏斗图](https://echarts.apache.org/zh/option.html#series-funnel), [仪表盘](https://echarts.apache.org/zh/option.html#series-gauge), 并且支持图与图之间的混搭。

只需在 `echarts` shortcode 中以 `JSON`/`YAML`/`TOML`格式插入 ECharts 选项即可。

一个 `TOML` 格式的 `echarts` 示例:

```toml
{{</* echarts */>}}
[title]
text = "折线统计图"
top = "2%"
left = "center"

[tooltip]
trigger = "axis"

[legend]
data = [
  "邮件营销",
  "联盟广告",
  "视频广告",
  "直接访问",
  "搜索引擎"
]
top = "10%"

[grid]
left = "5%"
right = "5%"
bottom = "5%"
top = "20%"
containLabel = true

[toolbox]
[toolbox.feature]
[toolbox.feature.saveAsImage]
title = "保存为图片"

[xAxis]
type = "category"
boundaryGap = false
data = [
  "周一",
  "周二",
  "周三",
  "周四",
  "周五",
  "周六",
  "周日"
]

[yAxis]
type = "value"

[[series]]
name = "邮件营销"
type = "line"
stack = "总量"
data = [
  120.0,
  132.0,
  101.0,
  134.0,
  90.0,
  230.0,
  210.0
]

[[series]]
name = "联盟广告"
type = "line"
stack = "总量"
data = [
  220.0,
  182.0,
  191.0,
  234.0,
  290.0,
  330.0,
  310.0
]

[[series]]
name = "视频广告"
type = "line"
stack = "总量"
data = [
  150.0,
  232.0,
  201.0,
  154.0,
  190.0,
  330.0,
  410.0
]

[[series]]
name = "直接访问"
type = "line"
stack = "总量"
data = [
  320.0,
  332.0,
  301.0,
  334.0,
  390.0,
  330.0,
  320.0
]

[[series]]
name = "搜索引擎"
type = "line"
stack = "总量"
data = [
  820.0,
  932.0,
  901.0,
  934.0,
  1290.0,
  1330.0,
  1320.0
]
{{</* /echarts */>}}
```

呈现的输出效果如下:

{{< echarts >}}
[title]
text = "折线统计图"
top = "2%"
left = "center"

[tooltip]
trigger = "axis"

[legend]
data = [
  "邮件营销",
  "联盟广告",
  "视频广告",
  "直接访问",
  "搜索引擎"
]
top = "10%"

[grid]
left = "5%"
right = "5%"
bottom = "5%"
top = "20%"
containLabel = true

[toolbox]
[toolbox.feature]
[toolbox.feature.saveAsImage]
title = "保存为图片"

[xAxis]
type = "category"
boundaryGap = false
data = [
  "周一",
  "周二",
  "周三",
  "周四",
  "周五",
  "周六",
  "周日"
]

[yAxis]
type = "value"

[[series]]
name = "邮件营销"
type = "line"
stack = "总量"
data = [
  120.0,
  132.0,
  101.0,
  134.0,
  90.0,
  230.0,
  210.0
]

[[series]]
name = "联盟广告"
type = "line"
stack = "总量"
data = [
  220.0,
  182.0,
  191.0,
  234.0,
  290.0,
  330.0,
  310.0
]

[[series]]
name = "视频广告"
type = "line"
stack = "总量"
data = [
  150.0,
  232.0,
  201.0,
  154.0,
  190.0,
  330.0,
  410.0
]

[[series]]
name = "直接访问"
type = "line"
stack = "总量"
data = [
  320.0,
  332.0,
  301.0,
  334.0,
  390.0,
  330.0,
  320.0
]

[[series]]
name = "搜索引擎"
type = "line"
stack = "总量"
data = [
  820.0,
  932.0,
  901.0,
  934.0,
  1290.0,
  1330.0,
  1320.0
]
{{< /echarts >}}

## 5 mappbox

[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js) 是一个 JavaScript 库，它使用 WebGL, 以 [vector tiles](https://docs.mapbox.com/help/glossary/vector-tiles/) 和 [Mapbox styles](https://docs.mapbox.com/mapbox-gl-js/style-spec/) 为来源, 将它们渲染成互动式地图.

`mapbox` shortcode 有以下命名参数来使用 Mapbox GL JS:

* **lng** *[必需]* (**第一个**位置参数)

  地图初始中心点的经度, 以度为单位.

* **lat** *[必需]* (**第二个**位置参数)

  地图初始中心点的纬度, 以度为单位.

* **zoom** *[可选]* (**第三个**位置参数)

  地图的初始缩放级别, 默认值是 `10`.

* **marked** *[可选]* (**第四个**位置参数)

  是否在地图的初始中心点添加图钉, 默认值是 `true`.

* **light-style** *[可选]* (**第五个**位置参数)

  浅色主题的地图样式, 默认值是[前置参数](../theme-documentation-content#front-matter)或者[网站配置](../theme-documentation-basics#site-configuration)中设置的值.

* **dark-style** *[可选]* (**第六个**位置参数)

  深色主题的地图样式, 默认值是[前置参数](../theme-documentation-content#front-matter)或者[网站配置](../theme-documentation-basics#site-configuration)中设置的值.

* **navigation** *[可选]*

  是否添加 [NavigationControl](https://docs.mapbox.com/mapbox-gl-js/api#navigationcontrol), 默认值是[前置参数](../theme-documentation-content#front-matter)或者[网站配置](../theme-documentation-basics#site-configuration)中设置的值.

* **geolocate** *[可选]*

  是否添加 [GeolocateControl](https://docs.mapbox.com/mapbox-gl-js/api#geolocatecontrol), 默认值是[前置参数](../theme-documentation-content#front-matter)或者[网站配置](../theme-documentation-basics#site-configuration)中设置的值.

* **scale** *[可选]*

  是否添加 [ScaleControl](https://docs.mapbox.com/mapbox-gl-js/api#scalecontrol), 默认值是[前置参数](../theme-documentation-content#front-matter)或者[网站配置](../theme-documentation-basics#site-configuration)中设置的值.

* **fullscreen** *[可选]*

  是否添加 [FullscreenControl](https://docs.mapbox.com/mapbox-gl-js/api#fullscreencontrol), 默认值是[前置参数](../theme-documentation-content#front-matter)或者[网站配置](../theme-documentation-basics#site-configuration)中设置的值.

* **width** *[可选]*

  地图的宽度, 默认值是 `100%`.

* **height** *[可选]*

  地图的高度, 默认值是 `20rem`.

一个简单的 `mapbox` 示例:

```markdown
{{</* mapbox 112.500 27.918 10 true  "mapbox://styles/mapbox/streets-zh-v1?optimize=true" */>}}
```

呈现的输出效果如下:

{{< mapbox 112.500 27.918 10 true  "mapbox://styles/mapbox/streets-zh-v1?optimize=true" >}}

## 6 音乐

### 6.1 自定义音乐url

支持[本地资源引用](../theme-documentation-content#contents-organization)的完整用法。

一个使用自定义音乐 URL 的 `music` 示例:

```markdown
{{</* music url="/music/Intro.mp3" name=intro artist=王备 cover="/images/intro.jpg" */>}}
```

{{< music url="/music/Intro.mp3" name=intro artist=王备 cover="/images/intro.jpg" >}}

### 6.2 音乐平台 URL 的自动识别

一个使用音乐平台 URL 的自动识别的 `music` 示例:

```markdown
{{</* music auto="https://music.163.com/#/album?id=39308" */>}}
或者
{{</* music "https://music.163.com/#/album?id=39308" */>}}
```

呈现的输出效果如下:

{{< music auto="https://music.163.com/#/album?id=39308" >}}

### 6.3 自定义音乐平台, 类型和 ID

`music` shortcode 有以下命名参数来使用自定义音乐平台:

* **server** *[必需]* (**第一个**位置参数)

  [`netease`, `tencent`, `kugou`, `xiami`, `baidu`]

  音乐平台.

* **type** *[必需]* (**第二个**位置参数)

  [`song`, `playlist`, `album`, `search`, `artist`]

  音乐类型.

* **id** *[必需]* (**第三个**位置参数)

  歌曲 ID, 或者播放列表 ID, 或者专辑 ID, 或者搜索关键词, 或者创作者 ID.

一个使用自定义音乐平台的 `music` 示例:

```markdown
{{</* music server="netease" type="song" id="122672" */>}}
或者
{{</* music netease song 122672 */>}}
```

呈现的输出效果如下:

{{< music server="netease" type="song" id="122672" autoplay=“true” >}}

### 6.4 其他参数

`music` shortcode 有一些可以应用于以上三种方式的其它命名参数:

* **theme** *[可选]*

  {{< version 0.2.0 changed >}} 音乐播放器的主题色, 默认值是 `#448aff`.

* **fixed** *[可选]*

  是否开启固定模式, 默认值是 `false`.

* **mini** *[可选]*

  是否开启迷你模式, 默认值是 `false`.

* **autoplay** *[可选]*

  是否自动播放音乐, 默认值是 `false`.

* **volume** *[可选]*

  第一次打开播放器时的默认音量, 会被保存在浏览器缓存中, 默认值是 `0.7`.

* **mutex** *[可选]*

  是否自动暂停其它播放器, 默认值是 `true`.
  
   `music` shortcode 还有一些只适用于音乐列表方式的其它命名参数:

* **loop** *[可选]*

  [`all`, `one`, `none`]

  音乐列表的循环模式, 默认值是 `none`.

* **order** *[可选]*

  [`list`, `random`]

  音乐列表的播放顺序, 默认值是 `list`.

* **list-folded** *[可选]*

  初次打开的时候音乐列表是否折叠, 默认值是 `false`.

* **list-max-height** *[可选]*

  音乐列表的最大高度, 默认值是 `340px`.

## 7 哔哩哔哩

`bilibili` shortcode 提供了一个内嵌的用来播放 bilibili 视频的响应式播放器.

如果视频只有一个部分, 则仅需要视频的 BV `id`, 例如:

```code
https://www.bilibili.com/video/BV1hW41197Fi
```

一个 `bilibili` 示例:

```markdown
{{</* bilibili BV1hW41197Fi */>}}
或者
{{</* bilibili id=BV1hW41197Fi */>}}
```

呈现的输出效果如下:

{{< bilibili id=BV1hW41197Fi >}}

如果视频包含多个部分, 则除了视频的 BV `id` 之外, 还需要 `p`, 默认值为 `1`, 例如:

```code
https://www.bilibili.com/video/BV1Gb411T7mB?p=10
```

一个带有 `p` 参数的 `bilibili` 示例:

```markdown
{{</* bilibili BV1Gb411T7mB 10 */>}}
或者
{{</* bilibili id=BV1Gb411T7mB p=10 */>}}
```

呈现的输出效果如下:

{{< bilibili id=BV1Gb411T7mB p=10 >}}



## 8 内容

### 内容摘要

默认情况下, Hugo 自动将内容的前 70 个单词作为摘要.

你可以通过在 [网站配置](../theme-documentation-basics#site-configuration) 中设置 `summaryLength` 来自定义摘要长度.

如果您要使用 [CJK]^(中文/日语/韩语) 语言创建内容, 并且想使用 Hugo 的自动摘要拆分功能，请在 [网站配置](../theme-documentation-basics#site-configuration) 中将 `hasCJKLanguage` 设置为 `true`.

##### 手动摘要拆分

另外, 你也可以添加 `<!--more-->` 摘要分割符来拆分文章生成摘要.

摘要分隔符之前的内容将用作该文章的摘要.

{{< admonition >}}
请小心输入`<!--more-->` ; 即全部为小写且没有空格.
{{< /admonition >}}

##### 前置参数摘要

你可能希望摘要不是文章开头的文字，在这种情况下, 你可以在文章前置参数的 `summary` 变量中设置单独的摘要。

##### 使用文章描述作为摘要

你可能希望将文章前置参数中的 `description` 变量的内容作为摘要.

你仍然需要在文章开头添加 `<!--more-->` 摘要分割符. 将摘要分隔符之前的内容保留为空. 然后 **LoveIt**主题会将你的文章描述作为摘要。

{{< admonition >}}
不建议在摘要内容中包含富文本块元素, 这会导致渲染错误. 例如代码块, 图片, 表格等.
{{< /admonition >}}

## 9Markdown 扩展语法 

**LoveIt** 主题提供了一些扩展的语法便于你撰写文章。

### Emoji 支持

### 数学公式

**LoveIt** 基于 [$ \KaTeX $](https://katex.org/) 提供数学公式的支持.

在网站配置 中的 `[params.math]` 下面设置属性 `enable = true`,
并在文章的前置参数中设置属性 `math: true`来启用数学公式的自动渲染.

{{< admonition tip >}}
有一份 [$ \KaTeX $ 中支持的 $ \TeX $ 函数](https://katex.org/docs/supported.html) 清单.
{{< /admonition >}}

#### 公式块

默认的公式块分割符是 `$$`/`$$` 和 `\\[`/`\\]`:

```markdown
$$ c = \pm\sqrt{a^2 + b^2} $$

\\[ f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi \\]
```

呈现的输出效果如下:

$$ c = \pm\sqrt{a^2 + b^2} $$

\\[ f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi \\]

#### 行内公式

默认的行内公式分割符是  `$`/`$` 和 `\\(`/`\\)`:

```markdown
$ c = \pm\sqrt{a^2 + b^2} $ 和 \\( f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi \\)
```

呈现的输出效果如下:

$ c = \pm\sqrt{a^2 + b^2} $ 和 \\( f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi \\)

{{< admonition tip >}}
可以在网站配置中自定义公式块和行内公式的分割符.
{{< /admonition >}}

#### Copy-tex

**[Copy-tex](https://github.com/Khan/KaTeX/tree/master/contrib/copy-tex)** 是一个 **$ \KaTeX $** 的插件.

通过这个扩展, 在选择并复制 $ \KaTeX $ 渲染的公式时, 会将其 $ \LaTeX $ 源代码复制到剪贴板.

在网站配置 中的 `[params.math]` 下面设置属性 `copyTex = true` 来启用 Copy-tex.

选择并复制上一节中渲染的公式, 可以发现复制的内容为 LaTeX 源代码.

#### mhchem

**[mhchem](https://github.com/Khan/KaTeX/tree/master/contrib/mhchem)** 是一个 **$ \KaTeX $** 的插件.

通过这个扩展, 可以在文章中轻松编写漂亮的化学方程式.

在你的网站配置中的 `[params.math]` 下面设置属性 `mhchem = true` 来启用 mhchem.

```markdown
$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$
```

呈现的输出效果如下:

$$ \ce{CO2 + C -> 2 CO} $$

$$ \ce{Hg^2+ ->[I-] HgI2 ->[I-] [Hg^{II}I4]^2-} $$

### 字符注音或者注释 {#ruby}

**LoveIt** 主题支持一种 **字符注音或者注释** Markdown 扩展语法:

```markdown
[Hugo]{?^}(一个开源的静态网站生成工具)
```

呈现的输出效果如下:

[Hugo]^(一个开源的静态网站生成工具)

### 分数 {#fraction}

**LoveIt** 主题支持一种 **分数** Markdown 扩展语法:

```markdown
[浅色]{?/}[深色]

[99]{?/}[100]
```

呈现的输出效果如下:

[浅色]/[深色]

[90]/[100]

### 转义字符 {#escape-character}

详情请看[转义字符](https://hugoloveit.com/zh-cn/theme-documentation-content/#fontawesome)

