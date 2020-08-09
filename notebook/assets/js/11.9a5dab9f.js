(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(v,_,e){"use strict";e.r(_);var t=e(42),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"linux-的文件权限与目录配置（续）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-的文件权限与目录配置（续）"}},[v._v("#")]),v._v(" Linux 的文件权限与目录配置（续）")]),v._v(" "),e("p",[v._v("作者：溶 时间：2020年08月01日")]),v._v(" "),e("h2",{attrs:{id:"_0x03-linux-目录配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0x03-linux-目录配置"}},[v._v("#")]),v._v(" 0x03 Linux 目录配置")]),v._v(" "),e("h3",{attrs:{id:"_3-1-linux-目录配置的依据-fhs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-linux-目录配置的依据-fhs"}},[v._v("#")]),v._v(" 3.1 Linux 目录配置的依据 ——FHS")]),v._v(" "),e("p",[v._v("FHS（Filesystem Hierarchy Standard）标准主要目的是："),e("strong",[v._v("让使用者可以了解到已安装软件通常放置于哪个目录下")]),v._v("， FHS 的重点在于规范每个特定的目录下应该放置什么样的数据。")]),v._v(" "),e("p",[v._v("FHS 依据文件系统使用的频繁与否与是否允许使用者修改，将目录定义成为四种交互作用的形态")]),v._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[v._v("-")]),v._v(" "),e("th",{staticStyle:{"text-align":"center"}},[v._v("可分享")]),v._v(" "),e("th",{staticStyle:{"text-align":"center"}},[v._v("不可分享")])])]),v._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[v._v("不变（static)")]),v._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[v._v("/usr")]),v._v("（软件放置处）")]),v._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[v._v("/etc")]),v._v(" （配置文件）")])]),v._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[v._v("-")]),v._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[v._v("/opt")]),v._v("（第三方软件）")]),v._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[v._v("/boot")]),v._v(" （启动与内核）")])]),v._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[v._v("可变动（variable)")]),v._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[v._v("/var/mail")]),v._v(" （用户邮箱")]),v._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[v._v("/var/run")]),v._v(" （程序相关）")])]),v._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[v._v("-")]),v._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[v._v("/var/spool/news")]),v._v(" （新闻组）")]),v._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[v._v("/var/lock")]),v._v(" （程序相关）")])])])]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("可分享的")])]),v._v(" "),e("p",[v._v("可以分享给其他系统挂载使用的目录；所以包括执行文件与用户的邮件等数据，是能够分享给网络上其他主机挂载用的目录。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("不可分享")])]),v._v(" "),e("p",[v._v("自己机器上面运行的装置文件或则是与程序有关的 socket 文件等，由于仅与自身机器有关，就不适合分享了。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("不变")])]),v._v(" "),e("p",[v._v("有些数据是不会经常变动的，跟随发行版而不变动的。例如函数库、文件说明文件、系统管理员所管理的主机服务配置文件等。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("可变动")])]),v._v(" "),e("p",[v._v("经常改变的数据，例如登录文件、一般用户可自行接收的新闻组等。")])])]),v._v(" "),e("p",[v._v("事实上， FHS FHS 针对目录树架构仅定义出三层目录下应该放置什么数据：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("/")]),v._v(" ： root 根目录，与开机系统有关。")]),v._v(" "),e("li",[e("code",[v._v("/usr")]),v._v(" ：unix software resource 与软件安装 / 执行有关。")]),v._v(" "),e("li",[e("code",[v._v("/var")]),v._v("：variable 与系统运行过程有关。")])]),v._v(" "),e("h3",{attrs:{id:"_3-2-根目录的意义与内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-根目录的意义与内容"}},[v._v("#")]),v._v(" 3.2 根目录的意义与内容")]),v._v(" "),e("p",[v._v("根目录是整个系统最重要的一个目录，里面所有的目录都是由根目录衍生出来的，同时也与"),e("strong",[v._v("启动、还原、系统修复")]),v._v("等动作有关。")]),v._v(" "),e("p",[v._v("因此 FHS 标准建议是：根目录所在分区槽应该越小越好，且应用程序所安装的软件最好不要与根目录放在同一个分区槽内， 报纸根目录越小越好。如此不但效能较佳，根目录所在的文件系统也较不容易发生问题。")]),v._v(" "),e("p",[v._v("因此 FHS 定义出"),e("strong",[v._v("根目录下")]),v._v("应该要有以下目录存在，即使没有实体目录，也希望至少有连接文件存在：")]),v._v(" "),e("h4",{attrs:{id:"_3-2-1-fhs-要求必须要存在的目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-fhs-要求必须要存在的目录"}},[v._v("#")]),v._v(" 3.2.1 FHS 要求必须要存在的目录")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("/bin")])]),v._v(" "),e("p",[v._v("放置的是单人维护模式下还能使用的命令。能被 "),e("code",[v._v("root")]),v._v(" 和一般用户使用。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/boot")])]),v._v(" "),e("p",[v._v("主要放置启动会使用到的文件。包括 Linux 内核文件以及启动选项与启动所需配置文件。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/dev")])]),v._v(" "),e("p",[v._v("任何设备与接口都是以文件的形式存在于此目录。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/etc")])]),v._v(" "),e("p",[v._v("存放系统的主要配置文件。 FHS 建议"),e("strong",[v._v("不要放置可执行文件在这个目录下")]),v._v("。")]),v._v(" "),e("p",[v._v("FHS 还规范几个重要的目录页最好在"),e("code",[v._v("/etc")]),v._v("目录下：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("/etc/opt/")]),v._v(" ：必要，放置第三方协力软件"),e("code",[v._v("/opt")]),v._v("的相关配置文件")]),v._v(" "),e("li",[e("code",[v._v("/etc/x11/")]),v._v(" ：建议，与 x window 有关的各种配置文件，尤其是"),e("code",[v._v("xorg.conf")]),v._v("这 x server 的配置文件")]),v._v(" "),e("li",[e("code",[v._v("/etc/sgml/")]),v._v(" ：建议，与 SGML 格式有关的各项配置文件")]),v._v(" "),e("li",[e("code",[v._v("/etc/xm")]),v._v("l/ ：建议，与 XML 格式有关的各项配置文件")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/lib")])]),v._v(" "),e("p",[v._v("存放的是启动时会用到的函数库，以及 "),e("code",[v._v("/bin")]),v._v(" 或 "),e("code",[v._v("/sbin")]),v._v("  下面的命令会调用的函数库。")]),v._v(" "),e("p",[v._v("FHS 还要求"),e("code",[v._v("/lib/modules")]),v._v(" 目录存在，主要放可抽换式的核心相关模块（驱动程序）")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/media")]),v._v(" 下面放置的是可删除的设备。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/mnt")]),v._v(" 如果暂时挂载某些额外的设备，一般建议可以放到这个目录中。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/opt")]),v._v(" 给第三方辅助软件放置的目录。自行安装软件即能安装到这里来。以前的 Linux 习惯放在 "),e("code",[v._v("/usr/local")]),v._v(" 目录下。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/run")]),v._v(" 系统启动后存放的各项信息。"),e("code",[v._v("/run")]),v._v(" 可以使用内存来模拟。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/sbin")]),v._v(" 启动过程中所需要的，包括启动、修复、还原系统所需要的命令。本机自行安装的软件产生的系统执行文件（system binary）则放到 /usr/local/sbin 中了。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/srv")]),v._v(" 是一些网络服务启动后，这些服务所需要的数据目录，如 "),e("code",[v._v("WWW")]),v._v(" "),e("code",[v._v("FTP")]),v._v("等。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/tmp")]),v._v("一般用户或则是正在执行的程序暂时放文件的地方。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/usr")]),v._v(" 属于第二层 FHS 规范")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/var")]),v._v("属于第二层 FHS 规范")])])]),v._v(" "),e("h4",{attrs:{id:"_3-2-2-fhs-建议可以存在的目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-fhs-建议可以存在的目录"}},[v._v("#")]),v._v(" 3.2.2 FHS 建议可以存在的目录")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("/home")]),v._v(" 系统默认的家目录。\n"),e("ul",[e("li",[e("code",[v._v("~")]),v._v("：代表目前这个用户的家目录")]),v._v(" "),e("li",[e("code",[v._v("~rong")]),v._v("：则代表 rong 的家目录")])])]),v._v(" "),e("li",[e("code",[v._v("lib<qual>")]),v._v(" 用来存放与 "),e("code",[v._v("/lib")]),v._v(" 不同格式的二进制函数库，例如支持64位的 "),e("code",[v._v("/lib64")]),v._v(" 函数库等。")]),v._v(" "),e("li",[e("code",[v._v("/root")]),v._v(" 系统管理员 root 的家目录。之所以放这里，是因为如果进入单人维护模式而仅挂载根目录时，该目录就能够拥有 root 的家目录， 所以会希望 root 的家目录与根目录放同一个分区槽中")])]),v._v(" "),e("h4",{attrs:{id:"_3-2-3-linux-中其他比较重要的目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-linux-中其他比较重要的目录"}},[v._v("#")]),v._v(" 3.2.3 LInux 中其他比较重要的目录")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("/lost+found")])]),v._v(" "),e("p",[v._v("这个目录使用标准的 "),e("code",[v._v("ext2/3/4")]),v._v(" 文件系统格式才会产生的一个目录，目的是当文件系统发生错误时， 将一些遗失的片段放到这个目录下。")]),v._v(" "),e("p",[v._v("不过如果使用的是"),e("code",[v._v("xfs")]),v._v("文件系统的话，就不会存在这个目录了。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/proc")]),v._v(" 这个目录本身是一个"),e("strong",[v._v("虚拟文件系统")]),v._v("，"),e("strong",[v._v("它放置的数据都在内存中")]),v._v("，例如系统内核、进程信息、外接设备的状态以及网络状态。本身不占任何硬盘空间。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/sys")]),v._v(" 与 "),e("code",[v._v("/proc")]),v._v(" 非常类似，也是一个"),e("strong",[v._v("虚拟的文件系统")]),v._v("，主要也是记录核心与系统硬件信息较相关的信息。 包括目前已加载的核心模块与核心侦测到的硬件装置信息等。同样"),e("strong",[v._v("不占用硬盘容量")]),v._v("。")])])]),v._v(" "),e("p",[v._v("五大目录："),e("code",[v._v("/etc")]),v._v(" "),e("code",[v._v("/bin")]),v._v(" "),e("code",[v._v("/dev")]),v._v(" "),e("code",[v._v("/lib")]),v._v(" "),e("code",[v._v("/sbin")])]),v._v(" "),e("p",[v._v("CentOS7 已将 "),e("code",[v._v("/lib")]),v._v(" "),e("code",[v._v("sbin")]),v._v(" "),e("code",[v._v("/bin")]),v._v("   移动到 "),e("code",[v._v("/usr")]),v._v(" 下。")]),v._v(" "),e("h3",{attrs:{id:"_3-3-usr-目录的意义与内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-usr-目录的意义与内容"}},[v._v("#")]),v._v(" 3.3 "),e("code",[v._v("/usr")]),v._v(" 目录的意义与内容")]),v._v(" "),e("p",[v._v("根据 FHS 的基本定义， "),e("code",[v._v("/usr")]),v._v(" 里面放置的数据属于"),e("strong",[v._v("可分享不可变动")])]),v._v(" "),e("p",[e("code",[v._v("/usr")]),v._v(" 不是 user 的缩写，而是 "),e("strong",[v._v("Unix Software Resource")]),v._v(" 的缩写（Unix 操作系统软件资源）， FHS 建议所有软件开发者，应该将他们的数据合理的分辨放置到这个目录下的次目录，而不要自行建立该软件自己独立的目录。")]),v._v(" "),e("h4",{attrs:{id:"_3-3-1-fhs-要求必须存在的目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-fhs-要求必须存在的目录"}},[v._v("#")]),v._v(" 3.3.1 FHS 要求必须存在的目录")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("/usr/bin/")])]),v._v(" "),e("p",[e("strong",[v._v("所有一般用户能使用的命令")]),v._v("都在此目录。CentOS7 已将全部的用户命令放置于此。而使用链接文件的方式将 "),e("code",[v._v("/bin")]),v._v("链接至此。FHS 要求在此目录下不该有子目录。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/usr/lib/")])]),v._v(" "),e("p",[v._v("与 "),e("code",[v._v("/lib")]),v._v("  功能相同，使用 "),e("code",[v._v("/lib")]),v._v(" 链接至此。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/usr/local/")])]),v._v(" "),e("p",[v._v("系统管理员在本机自行安装自己下载的软件（非默认提供），建议安装到此目录。 比如。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/usr/sbin/")])]),v._v(" "),e("p",[v._v("非系统正常运作所需要的系统指令。最长久的就是某些网络服务器软件的指令（daemon）。 功能基本与 "),e("code",[v._v("/sbin")]),v._v(" 差不多，因此"),e("code",[v._v("/sbin")]),v._v(" 也是链接到此目录的。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/usr/share/")])]),v._v(" "),e("p",[v._v("主要放置只读的数据文件。在该目录下的数据几乎是不分硬件架构均可读取的数据， 因为几乎上都是文本文件。常见的还有以下子目录：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("/usr/share/man")]),v._v("：联机帮助文件。")]),v._v(" "),e("li",[e("code",[v._v("/usr/share/doc")]),v._v("：软件杂项的文件说明。")]),v._v(" "),e("li",[e("code",[v._v("/usr/share/zoneinfo")]),v._v(" 与时区有关的时区文件。")])])])]),v._v(" "),e("h4",{attrs:{id:"_3-3-2-fhs-建议可存在的目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-fhs-建议可存在的目录"}},[v._v("#")]),v._v(" 3.3.2 FHS 建议可存在的目录")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("/usr/games/")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/usr/include/")])]),v._v(" "),e("p",[v._v("C/C++ 等程序语言的头文件和包含文件放置处。当我们以 tarball 方式 （tar.gz 的方式安装软件）安装某些数据时，会使用到里头的许多包含文件。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/usr/libexec/")]),v._v(" 不被一般用户常用的执行文件或脚本。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/usr/lib<qual>")]),v._v(" 与 "),e("code",[v._v("/lib<qual>")]),v._v(" 功能相同，链接过来的。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/usr/src")]),v._v(" 一般源码建议放这里，src 有 source 的意思。 至于核心源码则建议放到 /usr/src/linux 目录下。")])])]),v._v(" "),e("h3",{attrs:{id:"_3-4-var-的意义与内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-var-的意义与内容"}},[v._v("#")]),v._v(" 3.4 /var 的意义与内容")]),v._v(" "),e("p",[e("code",[v._v("/usr")]),v._v(" 是安装时会占用较大硬盘容量的目录，那么"),e("code",[v._v("/var")]),v._v(" 则是在运行后才会渐渐占用容量的。 主要放置的是针对常态性变动的文件，包括 缓存cache、日志文件（log file）以及某些软件所产生的文件， 包括程序文件（lock file，run file），或则例如 mysql 数据库的文件等。")]),v._v(" "),e("h4",{attrs:{id:"_3-4-1-fhs-要求必须存在的目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-fhs-要求必须存在的目录"}},[v._v("#")]),v._v(" 3.4.1 FHS 要求必须存在的目录")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("/var/cache/")]),v._v("：应用程序运行中使用的缓存文件。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/var/lib/")]),v._v("：")]),v._v(" "),e("p",[v._v("程序本身执行过程中，需要用到的数据文件存放处。在此目录下各自的软件应该要有各自的目录。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("var/lock/")])]),v._v(" "),e("p",[v._v("某些装置或是文件资源一次只能被一个程序使用，所以这里存放的是加锁的标识， 目前此目录已经挪到 "),e("code",[v._v("/run/lock")]),v._v("中了。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/var/log/")]),v._v("日志文件，系统注册表文件存放的目录。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/var/run/")]),v._v(" 某些程序或则是服务启动后，会将他们的 PID 放置在这个目录下，与"),e("code",[v._v("/run")]),v._v("相同，也链接到"),e("code",[v._v("/run")]),v._v("下了。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/var/mail/")]),v._v("：个人电子邮件信箱目录，不过也被放置到了 "),e("code",[v._v("/var/spool/mail")]),v._v("中了，通常两个目录互为链接文件。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("/var/spool/")])]),v._v(" "),e("p",[v._v("通常放置一些队列数据，所谓的队列就是排队等待其他程序使用的数据，这些数据被使用后通常都会被删除。 比如：系统受到新邮件会放到"),e("code",[v._v("/var/spool/mail")]),v._v(" 中，但使用者收下邮件后该邮件原则上就会被删除。 信件如果展示寄不出去，则会放到 "),e("code",[v._v("/var/spool/mqueue")]),v._v(" 中。等待被送出后会被删除。如果是计划任务数据（crontab）就会被放到 "),e("code",[v._v("/var/spool/cron")]),v._v(" 目录中。")])])]),v._v(" "),e("h3",{attrs:{id:"_3-5-针对-fhs，-centos-7-的变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-针对-fhs，-centos-7-的变化"}},[v._v("#")]),v._v(" 3.5 针对 FHS， CentOS 7 的变化")]),v._v(" "),e("p",[v._v("FHS 仅是定义出上层 "),e("code",[v._v("/")]),v._v(" 与次层"),e("code",[v._v("/var")]),v._v("、"),e("code",[v._v("/usr")]),v._v("的目录内容应该放置的文件或目录， 其他的就由开发者自行配置了。")]),v._v(" "),e("p",[v._v("如： CentOS 网络设置数据放在 /etc/sysconfig/network-scripts 下。 但是 SuSE 的则放在 /etc/sysconfig/netwok 目录下，所以名称不一致，但是记住大致的 FHS 标准，差异性其实不大")]),v._v(" "),e("p",[v._v("centOS7 相对于老版做了改进，将许多原本应该要在 "),e("code",[v._v("/")]),v._v("目录中的数据全部挪到 "),e("code",[v._v("/usr")]),v._v(" 里面去，然后进行连接设置。 包括以下这些：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("/bin")]),v._v(" ->"),e("code",[v._v("/usr/bin")])]),v._v(" "),e("li",[e("code",[v._v("/sbin")]),v._v(" -> "),e("code",[v._v("/usr/sbin")])]),v._v(" "),e("li",[e("code",[v._v("/lib")]),v._v(" ->"),e("code",[v._v("/usr/lib")])]),v._v(" "),e("li",[e("code",[v._v("/lib64")]),v._v("-> "),e("code",[v._v("/usr/lib64")])]),v._v(" "),e("li",[e("code",[v._v("/var/lock")]),v._v(" -> "),e("code",[v._v("/run/lock")])]),v._v(" "),e("li",[e("code",[v._v("/var/run")]),v._v(" ->"),e("code",[v._v("/run")])])]),v._v(" "),e("h3",{attrs:{id:"_3-6-目录树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-目录树"}},[v._v("#")]),v._v(" 3.6 目录树")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("目录树的起始点为根目录")])]),v._v(" "),e("li",[e("p",[v._v("每个目录可以使用本地的分区（partition）文件系统，也可以使用网络上的文件系统。举例来说，就是可以利用 Network File System（NFS）服务器挂载某些特定的目录")])]),v._v(" "),e("li",[e("p",[v._v("每一个文件在此目录树种的文件名（包含完整路径）都是独一无二的")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2020/08/01/a3uwZT.png",alt:"a3uwZT.png"}})])])]),v._v(" "),e("h3",{attrs:{id:"_3-7-绝对路径与相对路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-绝对路径与相对路径"}},[v._v("#")]),v._v(" 3.7 绝对路径与相对路径")]),v._v(" "),e("ul",[e("li",[e("code",[v._v(".")]),v._v(" "),e("code",[v._v("./")]),v._v(" 当前目录")]),v._v(" "),e("li",[e("code",[v._v("..")]),v._v(" "),e("code",[v._v("../")]),v._v("上级目录")]),v._v(" "),e("li",[e("code",[v._v("~")]),v._v(" 家目录")])]),v._v(" "),e("h3",{attrs:{id:"_3-8-centos-的观察，linux-版本查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-centos-的观察，linux-版本查询"}},[v._v("#")]),v._v(" 3.8 CentOS 的观察，linux 版本查询")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("通过 "),e("code",[v._v("usname -r")]),v._v(" 查看 Linux 的内核版本")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("$ uname -r\n3.10.0-1127.13.1.el7.x86_64\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])])]),v._v(" "),e("li",[e("p",[v._v("通过 "),e("code",[v._v("usname -m")]),v._v(" 查看操作系统版本")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("$ uname -m\nx86_64\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br")])])]),v._v(" "),e("li",[e("p",[v._v("通过 "),e("code",[v._v("lsb_release -a")]),v._v(" 命令查看 LSB Version 信息。")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("$ lsb_release -a\nDistributor ID：CentOS\nDescription : CentOS linux release 7.0(Core)\nRelease :  7.0\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br")])])])]),v._v(" "),e("h2",{attrs:{id:"_0x04-重点回顾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0x04-重点回顾"}},[v._v("#")]),v._v(" 0x04 重点回顾")]),v._v(" "),e("ul",[e("li",[v._v("Linux 的每个文件中，可分别给予使用者、群组与其他人三种身份的 rwx 权限。")]),v._v(" "),e("li",[v._v("用户组最有用的功能之一，就是当你团队协作时，每个账号都可以有多个用户组的支持")]),v._v(" "),e("li",[v._v("利用 ls -l 显示的文件属性中，第一个字段是文件的权限，共有十个位，第一位是文件类型，后面的三位为一组，分别是拥有者、用户组、其他人的权限，权限有 rwx 三种。")]),v._v(" "),e("li",[v._v("如果文件名之前多一个 "),e("code",[v._v(".")]),v._v("则代表这个文件是隐藏的。")]),v._v(" "),e("li",[v._v("若需要 root 权限时，可以使用 "),e("code",[v._v("su -")]),v._v(" 指令来切换身份。使用 exit 离开 su 的指令环境。")]),v._v(" "),e("li",[v._v("更改文件的用户组支持可用 chgrp，修改文件的拥有者可用 chown，修改文件权限可用 chmod。")]),v._v(" "),e("li",[v._v("chmod 修改权限的方法分为符号法与数字法，r、w、x 分别对应 4、2、1。")]),v._v(" "),e("li",[v._v("对文件来讲，权限的效能为：\n"),e("ul",[e("li",[v._v("r：可读取此文件的实际内容，如读取文本文件的文字内容等。")]),v._v(" "),e("li",[v._v("w：可用编辑、新增或则修改该文件的内容（不包括删除）。")]),v._v(" "),e("li",[v._v("x：该文件具有可以被系统执行的权限。")])])]),v._v(" "),e("li",[v._v("对于目录来说：\n"),e("ul",[e("li",[v._v("r 读取目录中的内容")]),v._v(" "),e("li",[v._v("w 修改目录中的内容")]),v._v(" "),e("li",[v._v("x 访问目录")])])]),v._v(" "),e("li",[v._v("要开放目录给任何人浏览时，应该至少要给予 r 和 x 的权限，但 w 权限不可随便给。")]),v._v(" "),e("li",[v._v("能否读到某个文件内容，根该文件所在的目录权限也有关系（目录至少需要有 x 的权限）。")]),v._v(" "),e("li",[v._v("Linux 文件名限制为：255 个英文字符或 128 个中文字符。")]),v._v(" "),e("li",[v._v("根据 FHS 官方文件指出，它们的主要目的是希望使用者可以了解到已安装软件通常放置在哪个目录下。")]),v._v(" "),e("li",[v._v("FHS 规定出来的四种目录特色为：shareable、unshareable、static、variable")]),v._v(" "),e("li",[v._v("FHS 所定义的三层目录为：/、/var、/usr")]),v._v(" "),e("li",[v._v("绝对路径文件名从根目录 / 开始写起。否则都是相对路径文件名")])])])}),[],!1,null,null,null);_.default=s.exports}}]);