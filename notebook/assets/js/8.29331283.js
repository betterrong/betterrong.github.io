(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{353:function(_,v,t){"use strict";t.r(v);var s=t(42),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"安装-centos7-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-centos7-x"}},[_._v("#")]),_._v(" 安装 CentOS7.x")]),_._v(" "),t("p",[_._v("作者：溶 时间：2020年07月24日")]),_._v(" "),t("h2",{attrs:{id:"_0x00-练习机的规划"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0x00-练习机的规划"}},[_._v("#")]),_._v(" 0x00  练习机的规划")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("linux 主机的角色定位")]),_._v(" "),t("p",[_._v("主要用于练习 linux 的相关技术，几乎所有数据都要安装进来，包括 x windows")])]),_._v(" "),t("li",[t("p",[_._v("选择的 distribution")]),_._v(" "),t("p",[_._v("定位为服务器的角色，所以使用号称完全兼容商业版 RHEL 的社群版，CentOS 7.x")])]),_._v(" "),t("li",[t("p",[_._v("硬盘分区配置")]),_._v(" "),t("p",[_._v("如果你的磁盘有超过 2 TB 的话，linux 默认是会以 MBR 模式来处理分区表。 我们只切除 40 GB 的磁盘来玩，所以预设上会以 MBR 来配置。 可以在安装的时候加上某些参数，"),t("strong",[_._v("强制使用 GPT 分区表")]),_._v("来配置我们的磁盘。 实际的分区情况如下")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("所需目录 / 装置")]),_._v(" "),t("th",[_._v("磁盘容量")]),_._v(" "),t("th",[_._v("文件系统")]),_._v(" "),t("th",[_._v("分区格式")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("BIOS boot")]),_._v(" "),t("td",[_._v("2 MB")]),_._v(" "),t("td",[_._v("系统自定义")]),_._v(" "),t("td",[_._v("主分区")])]),_._v(" "),t("tr",[t("td",[_._v("/boot")]),_._v(" "),t("td",[_._v("1 GB")]),_._v(" "),t("td",[_._v("xfs")]),_._v(" "),t("td",[_._v("主分区")])]),_._v(" "),t("tr",[t("td",[_._v("/")]),_._v(" "),t("td",[_._v("10 GB")]),_._v(" "),t("td",[_._v("xfs")]),_._v(" "),t("td",[_._v("LVM 方式")])]),_._v(" "),t("tr",[t("td",[_._v("/home")]),_._v(" "),t("td",[_._v("5 GB")]),_._v(" "),t("td",[_._v("xfs")]),_._v(" "),t("td",[_._v("LVM")])]),_._v(" "),t("tr",[t("td",[_._v("swap")]),_._v(" "),t("td",[_._v("1 GB")]),_._v(" "),t("td",[_._v("swap")]),_._v(" "),t("td",[_._v("LVM")])])])]),_._v(" "),t("p",[_._v("由于使用 GPT，无需考虑主、延伸、逻辑分区的差异。不过由于 CentOS 预设会使用 LVM 的方式来管理你的文件系统， 后续会讲解 LVM，这里就使用 LVM")])]),_._v(" "),t("li",[t("p",[_._v("开机管理程序（boot loader）")]),_._v(" "),t("p",[_._v("使用 CentOS 7 默认的 grub2，并且安装到 MBR 上面，也必须安装到 MBR 上面，因为硬盘全用在 LInux 上面的。")])]),_._v(" "),t("li",[t("p",[_._v("选择软件")]),_._v(" "),t("p",[_._v("练习机是要作为服务器用的，可能会用到图形界面来管理系统，会使用包含 x window 的服务器软件的方式来安装。 要注意的是，从 7.x 开始，默认选择的软件模式是以最小安装的。")])])]),_._v(" "),t("h2",{attrs:{id:"_0x01-开始安装-centos-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-开始安装-centos-7"}},[_._v("#")]),_._v(" 0x01 开始安装 CentOS 7")]),_._v(" "),t("p",[_._v("安装步骤在各主要 Linux distribution 都差不多，主要内容大概是：")]),_._v(" "),t("ol",[t("li",[_._v("调整开机媒体（BIOS）：务必使用 CD 或 DVD 光盘开机，通常需要调整 BIOS")]),_._v(" "),t("li",[_._v("选择安装模式与开机：包括图形接口 / 文字接口等，也可以加入特殊参数来开机进入安装画面")]),_._v(" "),t("li",[_._v("选择语系数据：不同地区的键盘按键不同，此时需要调整语系、键盘、鼠标等配备")]),_._v(" "),t("li",[_._v("软件选择：需要什么样的软件？全部安装还是预设安装即可？")]),_._v(" "),t("li",[_._v("磁盘分区：最重要的项目之一了，记得上面的规划安装单")]),_._v(" "),t("li",[_._v("开机管理程序、网络、失去设定与 root 密码：一些需要的系统基础设定")]),_._v(" "),t("li",[_._v("安装后的首次设定：包括用户、SELinux 与防火墙")])]),_._v(" "),t("h3",{attrs:{id:"_1-0-使用vmvare-创建虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-使用vmvare-创建虚拟机"}},[_._v("#")]),_._v(" *1. 0 使用VMvare 创建虚拟机")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("新建虚拟机")])]),_._v(" "),t("li",[t("p",[_._v("选择 "),t("code",[_._v("自定义安装")])])]),_._v(" "),t("li",[t("p",[_._v("选择 "),t("code",[_._v("稍后安装")])])]),_._v(" "),t("li",[t("p",[_._v("客户机操作系统选择 "),t("code",[_._v("Linux")]),_._v(" ，版本选择 "),t("code",[_._v("CentOS 7 64位")])])]),_._v(" "),t("li",[t("p",[_._v("虚拟机名称： "),t("code",[_._v("CentOS7")]),_._v(" , 位置： "),t("code",[_._v("D:\\Users\\likebetter\\CentOS7")])])]),_._v(" "),t("li",[t("p",[t("code",[_._v("处理器数量")]),_._v(" 跟物理主机的 CPU 个数一样。我只有一个CPU，物理机 CPU 为 4核8线程，所以，"),t("code",[_._v("处理器数量")]),_._v(" 选择 "),t("code",[_._v("1")]),_._v(" ， "),t("code",[_._v("每个处理器的内核数量")]),_._v(" 就是核心数，所以， "),t("code",[_._v("每个处理器的内核数量")]),_._v("选择"),t("code",[_._v("4")]),_._v("。VMware 占用的是最终的 “超线程”。")]),_._v(" "),t("p",[_._v("其他方案：")]),_._v(" "),t("p",[_._v("---- 物理主机处理器资源：4 核 8 线程")]),_._v(" "),t("p",[_._v("---- 配置 ： 1 * 4  1 * 8  2 * 2  2 * 4  4 * 2  8 * 1")]),_._v(" "),t("p",[_._v("配置关键：“处理器内核总数” 是否超出真实物理主机的线程总数，即 “处理器内核总数” 不能超出我们真实处理器的线程总数。")])]),_._v(" "),t("li",[t("p",[_._v("虚拟机内存配置取决于主机内存和虚拟机运行程序需要的内存。虚拟机内存肯定是要小于主机内存的，但很显然，他也不是越小越好，否则虚拟机上的程序根本运行不起来，就会出现进程被 killed 的情况。虚拟机内存可以重新分配，这里我选择 物理机内存"),t("code",[_._v("8g")]),_._v("的一半，"),t("code",[_._v("4g")]),_._v("。虚拟机内存未使用完，主机也可以使用。")])]),_._v(" "),t("li",[t("p",[_._v("我选择 nat 模式")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("桥接模式就是将主机网卡与虚拟机虚拟的网卡利用虚拟网桥进行通信。在桥接的作用下，类似于把物理主机虚拟为一个交换机，所有桥接设置的虚拟机连接到这个交换机的一个接口上，物理主机也同样插在这个交换机当中，所以所有桥接下的网卡与网卡都是交换模式的，相互可以访问而不干扰。在桥接模式下，虚拟机 ip 地址需要与主机在同一个网段，如果需要联网，则网关与 DNS 需要与主机网卡一致。")])]),_._v(" "),t("li",[t("p",[_._v("桥接设置")]),_._v(" "),t("p",[_._v("在进入系统之前，我们先确认一下主机的 ip 地址、网关、DNS 等信息。")]),_._v(" "),t("p",[_._v("然后，进入系统编辑网卡配置文件，命令为 "),t("code",[_._v("vi /etc/sysconfig/network-scripts/ifcfg-eth0")])]),_._v(" "),t("p",[_._v("添加如下内容：")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("DEVICE=eth0\nHWADDR=00:0C:29:DA:E9:99\nTYPE=Etherent\nUUID=0711466f-aelf-4ace-aa83-825cb3dfb5f7\nONBOOT=yes\nNM_CONTROLLED=YES\nBOOT_PROTO=none\nIPADDR=192.168.XXX.XXX\nNETMASK=255.255.255.0\nGATEWAY=192.168.XXX.XXX\nDNS1=XXX.XXX.XXX.XXX\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br"),t("span",{staticClass:"line-number"},[_._v("9")]),t("br"),t("span",{staticClass:"line-number"},[_._v("10")]),t("br"),t("span",{staticClass:"line-number"},[_._v("11")]),t("br")])]),t("p",[_._v("编辑完成，保存退出，然后重启虚拟机网卡，使用 ping 命令 ping 外网 ip，测试能否联网。能 ping 通外网 ip，证明桥接模式设置成功。桥接模式配置简单，但如果你的网络环境是 ip 资源很缺少或对 ip 管理比较严格的话，那桥接模式就不太适用了。")])]),_._v(" "),t("li",[t("p",[_._v("NAT（地址转换模式）")]),_._v(" "),t("p",[_._v("NAT 模式借助虚拟 NAT 设备和虚拟 DHCP 服务器，使得虚拟机可以联网,其网络结构如下图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://s1.ax1x.com/2020/07/24/UX2v3F.jpg",alt:"UX2v3F.jpg"}})]),_._v(" "),t("p",[_._v("在 NAT 模式中，主机网卡直接与虚拟 NAT 设备相连，然后虚拟 NAT 设备与虚拟 DHCP 服务器一起连接在虚拟交换机 VMnet8 上，这样就实现了虚拟机联网。那么我们会觉得很奇怪，为什么需要虚拟网卡"),t("code",[_._v("VMware Network Adapter VMnet8")]),_._v("呢？我们的 "),t("code",[_._v("VMware Network Adapter VMnet8")]),_._v(" 虚拟网卡主要是为了实现主机与虚拟机之间的通信。")]),_._v(" "),t("p",[_._v("设置虚拟机中 NAT 模式的选项，打开 vmware，点击 “编辑” 下的 “虚拟网络编辑器”，设置 NAT 参数及 DHCP 参数。")]),_._v(" "),t("p",[_._v("然后开机启动系统，编辑网卡配置文件，命令为 "),t("code",[_._v("vi /etc/sysconfig/network-scripts/ifcfg-eth0")])]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("DEVICE=eth0\n##HWADDR=00:0C:29:DA:E9:99\nTYPE=Etherent\n##UUID=0711466f-aelf-4ace-aa83-825cb3dfb5f7\nONBOOT=yes\nNM_CONTROLLED=YES\nBOOT_PROTO=dhcp//动态获取ip\n##IPADDR=192.168.XXX.XXX\n##NETMASK=255.255.255.0\n##GATEWAY=192.168.XXX.XXX\n##DNS1=XXX.XXX.XXX.XXX\n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br"),t("span",{staticClass:"line-number"},[_._v("9")]),t("br"),t("span",{staticClass:"line-number"},[_._v("10")]),t("br"),t("span",{staticClass:"line-number"},[_._v("11")]),t("br")])]),t("p",[_._v("然后重启虚拟机网卡，动态获取 ip 地址，使用 ping 命令 ping 外网 ip，测试能否联网。")])]),_._v(" "),t("li",[t("p",[_._v("Host-Only（仅主机模式）Host-Only 模式其实就是 NAT 模式去除了虚拟 NAT 设备，然后使用 VMware Network Adapter VMnet1 虚拟网卡连接 VMnet1 虚拟交换机来与虚拟机通信的，Host-Only 模式将虚拟机与外网隔开，使得虚拟机成为一个独立的系统，只与主机相互通讯。")])])])]),_._v(" "),t("li",[t("p",[_._v("磁盘容量选择40G")])]),_._v(" "),t("li",[t("p",[_._v("移除 "),t("code",[_._v("打印机")]),_._v("，"),t("code",[_._v("声卡")])])]),_._v(" "),t("li",[t("p",[_._v("选择镜像位置，开启虚拟机。")])])]),_._v(" "),t("h3",{attrs:{id:"_1-1-选择安装模式与开机（-inst-gpt-）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-选择安装模式与开机（-inst-gpt-）"}},[_._v("#")]),_._v(" 1.1 选择安装模式与开机（ inst.gpt ）")]),_._v(" "),t("h4",{attrs:{id:"_1-1-1-加入强制使用-gpt-分区表的安装参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-加入强制使用-gpt-分区表的安装参数"}},[_._v("#")]),_._v(" 1.1.1 加入强制使用 GPT 分区表的安装参数")]),_._v(" "),t("p",[_._v("磁盘小于 2 TB，系统默认会使用 MBR 模式来安装，这里修改配置参数增加 "),t("code",[_._v("inst.gpt")]),_._v(" 来使用 GPT 分区表， 注意每个参数需要有空格。")]),_._v(" "),t("p",[_._v("方向键选中 "),t("code",[_._v("install Ceentos 7")]),_._v(" 然后按Tab键，就会出现配置参数。")]),_._v(" "),t("p",[_._v("然后输入 "),t("code",[_._v("inst.gpt")]),_._v("。")]),_._v(" "),t("p",[_._v("安装 模式是 "),t("code",[_._v("带GUI的服务器")]),_._v(" ，选择 "),t("code",[_._v("兼容性程序库")]),_._v(" 和 "),t("code",[_._v("开发工具")])]),_._v(" "),t("h4",{attrs:{id:"_1-１-2-分区方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-１-2-分区方案"}},[_._v("#")]),_._v(" 1.１.2 分区方案")]),_._v(" "),t("p",[_._v("总共分配 50GB 空间")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("挂载点")]),_._v(" "),t("th",[_._v("磁盘容量")]),_._v(" "),t("th",[_._v("文件系统")]),_._v(" "),t("th",[_._v("分区格式")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("BIOS boot")])]),_._v(" "),t("td",[_._v("2MB")]),_._v(" "),t("td",[_._v("系统自定义")]),_._v(" "),t("td",[_._v("主分区")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("boot")])]),_._v(" "),t("td",[_._v("1GB")]),_._v(" "),t("td",[_._v("xfs")]),_._v(" "),t("td",[_._v("主分区")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("/")])]),_._v(" "),t("td",[_._v("15GB")]),_._v(" "),t("td",[_._v("xfs")]),_._v(" "),t("td",[_._v("LVM 方式")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("/home")])]),_._v(" "),t("td",[_._v("5GB")]),_._v(" "),t("td",[_._v("xfs")]),_._v(" "),t("td",[_._v("lVM 方式")])]),_._v(" "),t("tr",[t("td",[_._v("交换分区")]),_._v(" "),t("td",[_._v("1GB")]),_._v(" "),t("td",[_._v("swap")]),_._v(" "),t("td",[_._v("LVM 方式")])])])]),_._v(" "),t("p",[_._v("练习机使用标准分区和 LVM，三种装置类型的意义分别如下")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("标准分区：前面一直在说的分区槽，类似 /dev/vda1 之类的分区")])]),_._v(" "),t("li",[t("p",[_._v("LVM：可以弹性增加 / 消减文件系统容量的装置设定，会在后面章节持续介绍 LVM")])]),_._v(" "),t("li",[t("p",[_._v("LVM 简单配置")]),_._v(" "),t("p",[_._v("与传统 LVM 固定分配内容不同，使用多少容量才分配磁盘多少容量给你，比如你实际数据只占用了 10G, 并不会平白无故的占用 40 G 的大小，后续也会讲解")])]),_._v(" "),t("li",[t("p",[_._v("ext2/ext3/ext4")]),_._v(" "),t("p",[_._v("Linux 早期适用的文件系统类型。由于 ext3/4 文件系统多了日志的记录， 对于系统的复原比较快速。由于磁盘容量越来越大，ext 就有点不行了，除非你有特殊的需求，基本上不用这种方式了")])]),_._v(" "),t("li",[t("p",[_._v("swap")]),_._v(" "),t("p",[_._v("磁盘仿真成为内存，由于 swap 不会使用到目录树的挂载，所以不用指定挂载点")])]),_._v(" "),t("li",[t("p",[_._v("BIOS Boot")]),_._v(" "),t("p",[_._v("GPT 分区表可能会使用到的项目，若是使用 MBR 分区，则不需要这个")])]),_._v(" "),t("li",[t("p",[_._v("xfs")]),_._v(" "),t("p",[_._v("是目前 CentOS 预设的文件系统，最早是由大型服务器所开发出来的， 优点就是对大容量磁盘管理好，格式化速度相当快，很适合 TB 级别的磁盘环境")])]),_._v(" "),t("li",[t("p",[_._v("vfat")]),_._v(" "),t("p",[_._v("同时被 Linux 与 Windos 所支持的文件系统类型。 如果你的主机硬盘内同时存在 windows 与 linux 系统，为了数据交换， 就可以建立一个 vfat 的文件系统")])])]),_._v(" "),t("p",[_._v("由于 /、/home、swap 都希望使用 CentOS 提供的 LVM 管理，因此需要做一下容量固定配置的修改。")]),_._v(" "),t("p",[_._v("固定 Volume group（VG）的容量的含义：固定大小是为了留下 10 G 空间给练习的使用，否则就会占用完。，最终将这里 VG 剩余的容量分配给了 / 根目录这个 LV。实现了动态扩容")]),_._v(" "),t("h4",{attrs:{id:"_1-1-3-设置root密码和创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-设置root密码和创建用户"}},[_._v("#")]),_._v(" 1.1.3 设置root密码和创建用户")]),_._v(" "),t("ul",[t("li",[_._v("将用户设为管理员。")]),_._v(" "),t("li",[_._v("本次设置，root 密码是 "),t("code",[_._v("2020")]),_._v(" ，用户 "),t("code",[_._v("rong")]),_._v(" 密码是 "),t("code",[_._v("07")]),_._v("。")])]),_._v(" "),t("h4",{attrs:{id:"_1-1-4-关于-kickstar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-关于-kickstar"}},[_._v("#")]),_._v(" 1.1.4 关于 kickstar")]),_._v(" "),t("p",[_._v("之前的安装步骤，通通都会记录到 "),t("code",[_._v("/root/anaconda-ks.cfg")]),_._v(" 文件中， 这个文件可以提醒与协助未来想要重建一个一模一样的系统。")]),_._v(" "),t("h2",{attrs:{id:"_0x02-其他功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0x02-其他功能"}},[_._v("#")]),_._v(" 0x02 其他功能")]),_._v(" "),t("h3",{attrs:{id:"_2-1-内存压力测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-内存压力测试"}},[_._v("#")]),_._v(" 2.1 内存压力测试")]),_._v(" "),t("p",[_._v("就是测试这部主机是否稳定时，在主机上运行一些比较耗系统资源的程序，让系统在高负载的情况下去运作一阵子（可能是一天），测试稳定度的一种情况，就称为「烧机」")]),_._v(" "),t("p",[_._v("该功能在安装光盘内，还记得启动时选择的菜单吗？依次选择 troubleshooting -> Run a memory test")]),_._v(" "),t("p",[_._v("就会开始跑了，直到你按下 esc 按钮为止。只要这里不出事情，系统就比较稳定")]),_._v(" "),t("h3",{attrs:{id:"_2-2-安装笔记本或其他类-pc-计算机的参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装笔记本或其他类-pc-计算机的参数"}},[_._v("#")]),_._v(" 2.2 安装笔记本或其他类 PC 计算机的参数")]),_._v(" "),t("p",[_._v("由于笔记本电脑加入了非常多的省电机制或则是其他的硬件管理机制，包括显示适配器常常是整合型的， 使用适合一般桌面计算机的 DVD 来安装 linux 时，可能导致出现问题，无法安装到 linux 到你的笔记本电脑中。")]),_._v(" "),t("p",[_._v("这个时候应该配置 linux 核心不要加载一些特殊功能即可。 最常用的方法就是，在使用 dvd 开机时，选择？？？什么，按 tab 键，加入以下的配置项")]),_._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("nofb apm=off acpi=off pci=noacpi\n \n        Copied!\n    \n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br")])]),t("ul",[t("li",[_._v("apm（Advanced Power Management）：早期电源管理模块")]),_._v(" "),t("li",[_._v("acpi（Advanced Configuration and Power Interface）：近期的电源管理模块")]),_._v(" "),t("li",[_._v("nofb ：取消显示适配器上面的缓冲存储器的侦测")])]),_._v(" "),t("h2",{attrs:{id:"_0x03-重点回顾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0x03-重点回顾"}},[_._v("#")]),_._v(" 0x03 重点回顾")]),_._v(" "),t("ul",[t("li",[_._v("不论你要安装什么样的 Linux 操作系统角色，都应该要事先规划，例如分区、开机管理程序等")]),_._v(" "),t("li",[_._v("建议练习机安装时的磁盘分区能有 /、/boot、/home、/swap 四个分区槽")]),_._v(" "),t("li",[_._v("安装 CentOS 7.x 的模式至少有两种，分别是图形界面与文字界面")]),_._v(" "),t("li",[_._v("CentOS 7 会主动依据你的磁盘容量判断要用 MBR 或 GPT 分区方式，也可以通过配置强制使用 GPT")]),_._v(" "),t("li",[_._v("若安装笔记本电脑时失败，可以尝试在开机时加入「linux nofb apm=off acpi=off」来关闭省电功能")]),_._v(" "),t("li",[_._v("安装过程进入分区后，请以自定义分区模式来处理自己规划的分区方式")]),_._v(" "),t("li",[_._v("在安装过程中，可以建立逻辑卷管理器（LVM）")]),_._v(" "),t("li",[_._v("一般要求 swap 是 1.5 ~ 2 倍的物理内存量，但是没有 swap 也可以安装运行 linux 系统")]),_._v(" "),t("li",[_._v("CentOS 7 预设使用 xfs 作为文件系统")]),_._v(" "),t("li",[_._v("没有连上 Internet 时，可尝试关闭防火墙，但 SElinux 最好选择强制状态")]),_._v(" "),t("li",[_._v("设置不要选择启动 kdump，因为那是给核心开发者查询宕机数据的")]),_._v(" "),t("li",[_._v("可加入世界服务器来同步化时间，台湾可选择 tock.stdtime.gov.tw 这一部")]),_._v(" "),t("li",[_._v("尽量使用一般用户来操作 Linux，有必要再转身份成为 root 即可")]),_._v(" "),t("li",[_._v("即使是练习机，在设置 root 密码时，不要设置的太简单")])])])}),[],!1,null,null,null);v.default=a.exports}}]);