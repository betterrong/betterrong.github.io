(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{354:function(t,v,_){"use strict";_.r(v);var e=_(42),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"主机规划与磁盘分区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主机规划与磁盘分区"}},[t._v("#")]),t._v(" 主机规划与磁盘分区")]),t._v(" "),_("p",[t._v("作者：溶 时间：2020年07月15日")]),t._v(" "),_("h2",{attrs:{id:"_0x00-linux与硬件的搭配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x00-linux与硬件的搭配"}},[t._v("#")]),t._v(" 0x00 Linux与硬件的搭配")]),t._v(" "),_("p",[_("strong",[t._v("一切都是文件")])]),t._v(" "),_("h3",{attrs:{id:"_1-各硬件设备在linux中的文件名"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-各硬件设备在linux中的文件名"}},[t._v("#")]),t._v(" 1 各硬件设备在Linux中的文件名")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("设备")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("Linux中的文件名")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("SCSI、SATA、USB磁盘驱动器")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/dev/sd[a-p]")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("U盘")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/dev/sd[a-p]")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("Virtio接口")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/dev/vd[a-p]（用于虚拟机内）")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("软盘驱动器")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/dev/fd[0-7]")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("打印机")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/dev/lp[0-2]")]),t._v("(25针打印机)"),_("br"),_("strong",[t._v("/dev/usb/lp[0-15]（USB接口）")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("鼠标")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/dev/input/mouse[0-15]（通用）")]),_("br"),_("strong",[t._v("/dev/psaux(PS/2接口)")]),_("br"),_("strong",[t._v("/dev/mouse （当前鼠标）")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("CD-ROM、DVD-ROM")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/dev/scd[0-1] （通用")]),t._v("）"),_("br"),_("strong",[t._v("/dev/sr[0-1]（CentOS常见）")]),_("br"),_("strong",[t._v("/dev/cdrom （当前CD-ROM）")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("磁带机")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/dev/ht0 （IDE接口）")]),_("br"),_("strong",[t._v("/dev/st0 （SATA/SCSI接口）")]),_("br"),_("strong",[t._v("/dev/tape （当前磁带）")])])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("IDE磁盘驱动器")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("/dev/hd[a-d]（旧式系统才有）")])])])])]),t._v(" "),_("ul",[_("li",[t._v("SCSI：小型计算机接口，一种用于计算机和周边设备之间系统级接口的独立处理器标准。")]),t._v(" "),_("li",[t._v("要注意的是使用云端机时，你得到的是虚拟机，为了加速，虚拟机内的磁盘使用仿真机产生，一般被命名为 "),_("code",[t._v("/dev/vd/[a-p]")])]),t._v(" "),_("li",[t._v("SATA：串行高级技术附件")])]),t._v(" "),_("h2",{attrs:{id:"_0x01-磁盘分区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-磁盘分区"}},[t._v("#")]),t._v(" 0x01 磁盘分区")]),t._v(" "),_("h3",{attrs:{id:"_1-磁盘连接方式与设备文件名的关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-磁盘连接方式与设备文件名的关系"}},[t._v("#")]),t._v(" 1 磁盘连接方式与设备文件名的关系")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("正常的物理机器大概使用的都是/dev/sd[a-p]这样的磁盘文件名，虚拟机环境中可能为了加速，会使用/dev/vd[a-p]这样的设备文件名。")])]),t._v(" "),_("li",[_("p",[t._v("SATA/USB/SAS 等磁盘接口都是使用 SCS 模块来驱动的， 因此都是 "),_("code",[t._v("/dev/sd[a-p]")]),t._v(" 的格式。")])]),t._v(" "),_("li",[_("p",[t._v("确定顺序是按 Linux 核心侦测到的磁盘顺序分配文件名，是检测到的顺序， 比如 USB 是系统启动后才检测到，那么 USB 的文件名就是 "),_("code",[t._v("/dev/sdc")])])]),t._v(" "),_("li",[_("p",[t._v("磁盘的组成部分主要有盘片、机械手臂、磁头与主轴马达所组成，数据的写入其实是在盘片上面。 盘片上面有可细分出扇区（Sector）与磁道（Track）两种单位，扇区的物理量设计有 512 Bytes 与 4 KBytes. 假设只有一个盘片，那么盘片有点像下面这样：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://s1.ax1x.com/2020/07/22/U7W9Ug.png",alt:"U7W9Ug.png"}})])]),t._v(" "),_("li",[_("p",[t._v("碟片上面可细分出扇区和磁道两种单位，其中扇区的物理大小设计有两种，分别是512字节和4k字节。整块磁盘的第一个扇区特别重要。早期的第一个扇区里面含有的重要信息我们称为MBR格式。GPT是一个新的磁盘分区格式。")])])]),t._v(" "),_("h3",{attrs:{id:"_2-mbr（ms-dos）-和-gpt磁盘分区表（partition-table）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-mbr（ms-dos）-和-gpt磁盘分区表（partition-table）"}},[t._v("#")]),t._v(" 2 MBR（MS-DOS） 和 GPT磁盘分区表（partition table）")]),t._v(" "),_("p",[t._v("磁盘的同一个磁道称为柱面，通常是文件系统的最小单位，也是分区的最小单位。")]),t._v(" "),_("p",[t._v("GPT是可达到64位记录功能的分区表，甚至可以使用扇区号码作为分区单位。")]),t._v(" "),_("p",[t._v("我们利用参考对照柱面或扇区号码的方式来处理。")]),t._v(" "),_("h4",{attrs:{id:"_2-1-mbr分区表的格式与限制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-mbr分区表的格式与限制"}},[t._v("#")]),t._v(" 2.1 MBR分区表的格式与限制")]),t._v(" "),_("p",[t._v("第一个扇区的512字节通常有：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("主引导记录（MBR），安装启动引导程序的地方，446字节。")])]),t._v(" "),_("li",[_("p",[t._v("分区表，记录整块硬盘分区的状态，64字节。最多四组记录区，每组分区记录了该区段的起始与结束的柱面号码。")]),t._v(" "),_("p",[t._v("得到的几个重要信息：")])]),t._v(" "),_("li",[_("p",[t._v("所谓的分区指示针对那个64字节的分区表进行设置。")])]),t._v(" "),_("li",[_("p",[t._v("硬盘默认的分区表仅仅能写入四组分区信息。")])]),t._v(" "),_("li",[_("p",[t._v("四组划分信息我们称为主要或扩展分区。")])]),t._v(" "),_("li",[_("p",[t._v("分区的最小单位通常为柱面。")])]),t._v(" "),_("li",[_("p",[t._v("当系统写入磁盘时，一定会参考磁盘分区表，才能针对某个分区进行数据的处理。")])]),t._v(" "),_("li",[_("p",[t._v("扩展分区的目的是使用额外的扇区来记录分区信息，扩展分区本身并不能被拿来格式化。")])]),t._v(" "),_("li",[_("p",[t._v("由扩展分区切出来的分区，称为逻辑分区。")])]),t._v(" "),_("li",[_("p",[t._v("逻辑分区的设备名称号码由5号开始。")]),t._v(" "),_("p",[t._v("关于主分区、扩展分区、逻辑分区，有如下特性：")])])]),t._v(" "),_("ol",[_("li",[t._v("主分区和扩展分区最多有四个（硬盘限制）")]),t._v(" "),_("li",[t._v("扩展分区最多有一个（操作系统的限制）")]),t._v(" "),_("li",[t._v("逻辑分区是扩展分区持续划分出来的分区。")]),t._v(" "),_("li",[t._v("能够被格式化后作为数据存取的分区是主分区和逻辑分区，扩展分区无法格式化。")]),t._v(" "),_("li",[t._v("扩展分区的数量依操作系统而不同。")]),t._v(" "),_("li",[t._v("分区是以柱面为单位的连续磁盘空间。")]),t._v(" "),_("li",[t._v("如果扩展分区被破坏，所有的逻辑分区将被删除。")])]),t._v(" "),_("p",[t._v("MBR分区表的限制：")]),t._v(" "),_("ol",[_("li",[t._v("操作系统无法使用2.2TB以上的磁盘容量。")]),t._v(" "),_("li",[t._v("MBR仅有一个区块，若被破坏，无法或很难恢复。")]),t._v(" "),_("li",[t._v("MBR内的存放启动引导程序的区块仅仅446字节，无法存储较多程序代码。")])]),t._v(" "),_("h4",{attrs:{id:"_2-2-gpt-（guid-partition-table）磁盘分区表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-gpt-（guid-partition-table）磁盘分区表"}},[t._v("#")]),t._v(" 2.2 GPT （GUID partition table）磁盘分区表")]),t._v(" "),_("ul",[_("li",[t._v("目前已经有4k的扇区出现，为了兼容所有的磁盘，在扇区的定义上面，大多会使用逻辑区块地址（LBA）来处理。GPT将磁盘所有区块依次LBA(默认512字节)浪费规划，第一个LBA称为LBA0.")]),t._v(" "),_("li",[t._v("GPT使用34个区块来记录分区信息。GPT除了前面的34个LBA外还把整个磁盘的最后34个LBA拿来做另一个备份。")]),t._v(" "),_("li",[t._v("LBA0-MBR兼容区块。")]),t._v(" "),_("li",[t._v("LBA1- GPT表头记录，记录了分区表本身的位置和大小，同时记录了备份用的GPT分区的位置，同时放置了分区表的校验码。")]),t._v(" "),_("li",[t._v("LBA2-33 （实际记录分区信息处），LBA2到LBA33，每个LBA都可以记录4组分区记录，共可以有128组分区记录。")]),t._v(" "),_("li",[t._v("GPT分区已经没有所谓主分区、扩展分区、逻辑分区等概念了。每个分区都可以拿来格式化并使用。")])]),t._v(" "),_("h4",{attrs:{id:"_2-3-启动流程中的bios和uefi启动检测程序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-启动流程中的bios和uefi启动检测程序"}},[t._v("#")]),t._v(" 2.3 启动流程中的BIOS和UEFI启动检测程序")]),t._v(" "),_("h5",{attrs:{id:"（1）-bios-搭配-mbr-gpt的启动方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#（1）-bios-搭配-mbr-gpt的启动方式"}},[t._v("#")]),t._v(" （1） BIOS 搭配 MBR/GPT的启动方式")]),t._v(" "),_("ul",[_("li",[t._v("BIOS就是启动的时候计算机系统会主动执行的第一个程序。")]),t._v(" "),_("li",[t._v("BIOS到硬盘中读取第一个扇区的MBR位置，里面存放了最基本的启动引导程序。该程序的主要目的就是加载内核文件。")]),t._v(" "),_("li",[t._v("启动流程：\n"),_("ol",[_("li",[t._v("BIOS：启动主动执行的固件，会认识第一个可启动的设备。")]),t._v(" "),_("li",[t._v("MBR：第一个可启动设备的第一个扇区内的主引导记录块，内含启动引导代码。")]),t._v(" "),_("li",[t._v("启动引导程序：一个可读取内核文件来执行的软件。")]),t._v(" "),_("li",[t._v("内核文件：开始启动操作系统。")])])]),t._v(" "),_("li",[t._v("boot loader")]),t._v(" "),_("li",[t._v("每个分区都有自己的启动扇区。")]),t._v(" "),_("li",[t._v("实际可启动的内核文件是放置到各分区中的。")]),t._v(" "),_("li")])])}),[],!1,null,null,null);v.default=a.exports}}]);