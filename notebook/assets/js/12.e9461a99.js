(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(s,t,v){"use strict";v.r(t);var _=v(42),a=Object(_.a)({},(function(){var s=this,t=s.$createElement,v=s._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h1",{attrs:{id:"linux-的文件与目录管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#linux-的文件与目录管理"}},[s._v("#")]),s._v(" Linux 的文件与目录管理")]),s._v(" "),v("p",[s._v("作者：溶 时间：2020年08月01日")]),s._v(" "),v("h2",{attrs:{id:"_0x01-目录与路径"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-目录与路径"}},[s._v("#")]),s._v(" 0x01 目录与路径")]),s._v(" "),v("h3",{attrs:{id:"_1-1-相对路径与绝对路径"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-相对路径与绝对路径"}},[s._v("#")]),s._v(" 1.1 相对路径与绝对路径")]),s._v(" "),v("ul",[v("li",[s._v("绝对路径：由根目录开头，如 /home/rong")]),s._v(" "),v("li",[s._v("相对路径：不是由根目录开头的，如 ./rong")])]),s._v(" "),v("h3",{attrs:{id:"_1-2目录的相关操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2目录的相关操作"}},[s._v("#")]),s._v(" 1.2目录的相关操作")]),s._v(" "),v("p",[s._v("以下的特殊目录需要着重了掌握")]),s._v(" "),v("ul",[v("li",[v("code",[s._v(".")]),s._v("：代表此层目录")]),s._v(" "),v("li",[v("code",[s._v("..")]),s._v("：上一层目录")]),s._v(" "),v("li",[v("code",[s._v("-")]),s._v("：前一个工作目录")]),s._v(" "),v("li",[v("code",[s._v("~")]),s._v("：目前用户身份坐在的家目录")]),s._v(" "),v("li",[v("code",[s._v("~account")]),s._v("：表示 account 这个用户的家目录（account 是个账户名称）")])]),s._v(" "),v("p",[s._v("需要特别注意的是，在所有目录下都会看到两个目录 "),v("code",[s._v(". 与 ..")]),s._v("，当前目录和上一层目录。根目录是上一层和根目录自己是同一个目录。")]),s._v(" "),v("p",[s._v("常见的处理目录的指令：")]),s._v(" "),v("ul",[v("li",[s._v("cd：变换目录")]),s._v(" "),v("li",[s._v("pwd：显示当前目录\n"),v("ul",[v("li",[s._v("pwd -p 显示真实路径而不是链接路径。")])])]),s._v(" "),v("li",[s._v("mkdir：建立一个新的目录\n"),v("ul",[v("li",[s._v("mkdir -m 设置目录的权限，不使用默认权限")]),s._v(" "),v("li",[s._v("mkdir -p 递归创建目录")])])]),s._v(" "),v("li",[s._v("rmdir：删除一个空的目录\n"),v("ul",[v("li",[s._v("rmdir -p 删除上层的空目录")])])])]),s._v(" "),v("h3",{attrs:{id:"_1-3-执行文件路径的变量-path"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-执行文件路径的变量-path"}},[s._v("#")]),s._v(" 1.3 执行文件路径的变量 $PATH")]),s._v(" "),v("p",[s._v("PATH 这个变量的内容是由一堆目录组成的，每个目录之间用冒号隔开，每个目录有顺序之分。")]),s._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[v("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),v("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),v("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),v("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v("}")]),s._v(':/root"')]),s._v("\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br")])]),v("p",[s._v("这个命令可以把 /root 这个目录加到环境变量中去。")]),s._v(" "),v("p",[s._v("为了安全起见，"),v("code",[s._v(".")]),s._v("（本目录）不建议添加到 PATH 中，这也是和windows 的区别。")]),s._v(" "),v("ul",[v("li",[s._v("不同身份使用者预设的 PATH 不同，默认能够随意执行的指令也不同（如 root 与 mrcode)")]),s._v(" "),v("li",[s._v("PATH 是可以修改的")]),s._v(" "),v("li",[s._v("使用绝对路径或相对路径直接指定某个指令文件名来执行，会比搜寻 PATH 来的正确")]),s._v(" "),v("li",[s._v("指令应该要放置到正确的目录下，执行才比较方便")]),s._v(" "),v("li",[s._v("当前目录「.」建议不要放到 PATH 中")])]),s._v(" "),v("h3",{attrs:{id:"_0x02-文件与目录管理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0x02-文件与目录管理"}},[s._v("#")]),s._v(" 0x02 文件与目录管理")]),s._v(" "),v("h3",{attrs:{id:"_2-1-文件与目录的查看-ls"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-文件与目录的查看-ls"}},[s._v("#")]),s._v(" 2.1 文件与目录的查看 ls")]),s._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-aAdfFhilnrRSt"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 文件名或目录名称Â\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--color"),v("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("never,auto,always"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 文件名或目录名称\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("--full-time"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 文件名或目录名称\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br"),v("span",{staticClass:"line-number"},[s._v("3")]),v("br")])]),v("p",[s._v("选项与参数：")]),s._v(" "),v("ul",[v("li",[v("p",[v("code",[s._v("-a")]),s._v(" "),v("strong",[s._v("全部的文件，连同隐藏文件（开头为 .）一起列出来（常用）")])])]),s._v(" "),v("li",[v("p",[v("code",[s._v("-d")]),s._v(" "),v("strong",[s._v("仅列出目录本身，而不是列出目录内的文件数据（常用）")])])]),s._v(" "),v("li",[v("p",[v("code",[s._v("-F")]),s._v("：根据文件、目录等信息，给予附加数据结构")]),s._v(" "),v("p",[s._v("如：")]),s._v(" "),v("ul",[v("li",[v("code",[s._v("*")]),s._v(" 代表可执行文件，")]),s._v(" "),v("li",[v("code",[s._v("/")]),s._v(" 代表目录")]),s._v(" "),v("li",[v("code",[s._v("=")]),s._v(" 代表 socket 文件")]),s._v(" "),v("li",[v("code",[s._v("|")]),s._v(" 代表 FIFO 文件")])])]),s._v(" "),v("li",[v("p",[v("code",[s._v("-h")]),s._v("：将文件容量以人类较易读的方式（例如 GB、KB）列出来")])]),s._v(" "),v("li",[v("p",[v("code",[s._v("-i")]),s._v("：列出 inode 号码")])]),s._v(" "),v("li",[v("p",[v("code",[s._v("-l")]),s._v(": "),v("strong",[s._v("详细信息显示，包含文件的属性与权限等数据")])])]),s._v(" "),v("li",[v("p",[v("code",[s._v("-n")]),s._v("：列出 UID 与 GID 而非使用者与群组的名称")])]),s._v(" "),v("li",[v("p",[v("code",[s._v("-R")]),s._v("：连同子目录内容一起列出来，等于该目录下的所有文件都会显示出来")])]),s._v(" "),v("li",[v("p",[v("code",[s._v("-S")]),s._v("：按文件容量大小排序")])]),s._v(" "),v("li",[v("p",[v("code",[s._v("-t")]),s._v("：按时间排序")])]),s._v(" "),v("li",[v("p",[v("code",[s._v("time={atime，ctime}")]),s._v("：输出 access 时间或改变权限属性时间（ctime），而非内容变更时间")])])]),s._v(" "),v("p",[v("strong",[s._v("由于"),v("code",[s._v("ls -l")]),s._v("使用频率很高，为此，很多 distribution 在预设情况中已经将 "),v("code",[s._v("ll")]),s._v(" 设定为 ls -l")])]),s._v(" "),v("h3",{attrs:{id:"_2-2-复制、删除与移动：-cp、rm、mv"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-复制、删除与移动：-cp、rm、mv"}},[s._v("#")]),s._v(" 2.2 复制、删除与移动： cp、rm、mv")]),s._v(" "),v("ul",[v("li",[s._v("cp：copy 复制文件，该指令还有其他功能，如建立链接文件、比较两文件的新旧而给予更新，复制整个目录等功能")]),s._v(" "),v("li",[s._v("mv：move 移动目录与文件，也可以直接拿来当做重命名（rename）")]),s._v(" "),v("li",[s._v("rm：remove 移除文件")])]),s._v(" "),v("h3",{attrs:{id:"_2-2-1-cp-复制文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-cp-复制文件"}},[s._v("#")]),s._v(" 2.2.1 cp 复制文件")]),s._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-adfilprsu"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 来源文件（source）目标文件（destination）\n"),v("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" source1 source2 source3 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(" directory\n")])]),s._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[s._v("1")]),v("br"),v("span",{staticClass:"line-number"},[s._v("2")]),v("br")])]),v("p",[s._v("选项与参数：")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("a")]),s._v("：相当于 -dr --preserve=all 的一是一，至于 dr 请参考下列说明；（常用）")]),s._v(" "),v("li",[s._v("d：若来源文件为链接文件的属性（link file），则复制链接文件属性而非文件本身")]),s._v(" "),v("li",[s._v("f：强制（force）的意思，若目标文件已经存在且无法开启，则移除后再尝试一次")]),s._v(" "),v("li",[v("strong",[s._v("i")]),s._v("：若目标文件已经存在时，在覆盖时会先询问动作的进行。（常用）")]),s._v(" "),v("li",[s._v("l：进行硬链接（hard link）的链接文件的建立，而非复制文件本身")]),s._v(" "),v("li",[v("strong",[s._v("p")]),s._v("：连同文件的属性（权限、用户、时间）一起复制过去，而非使用默认属性；（备份文件常用）")]),s._v(" "),v("li",[v("strong",[s._v("r")]),s._v("：递归持续复制，用于目录的复制行为。（常用）")]),s._v(" "),v("li",[s._v("s：复制称为符号链接文件（symbolic link），亦即快捷方式文件")]),s._v(" "),v("li",[s._v("u：destination 与 source 旧才更新 destination，或 destination 不存在的情况下才复制")])]),s._v(" "),v("p",[s._v("最后需要注意的是：如果来源档有两个以上，则最后一个目的文件一定要是目录才行")]),s._v(" "),v("p",[s._v("而且"),v("strong",[s._v("不同身份者执行这个指令会有不同的结果产生")]),s._v("，尤其是 -a、-p 的选项，对于不同身份来说， 差异则非常的大。")]),s._v(" "),v("p",[s._v("这里讲得太细了，先跳过，等以后对 Linux 有更多理解后再做补充。")])])}),[],!1,null,null,null);t.default=a.exports}}]);