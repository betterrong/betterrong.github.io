(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{356:function(s,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_0x00-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x00-基础"}},[s._v("#")]),s._v(" 0x00 基础")]),s._v(" "),a("h2",{attrs:{id:"_1-包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-包"}},[s._v("#")]),s._v(" 1 包")]),s._v(" "),a("ul",[a("li",[s._v("每个 Go 程序都是由包构成的。")]),s._v(" "),a("li",[s._v("程序从 "),a("code",[s._v("main")]),s._v(" 包开始运行。")]),s._v(" "),a("li",[s._v("按照约定，包名与导入路径的最后一个元素一致。例如，"),a("code",[s._v('"math/rand"')]),s._v(" 包中的源码均以 "),a("code",[s._v("package rand")]),s._v(" 语句开始。")])]),s._v(" "),a("h2",{attrs:{id:"_2-导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导入"}},[s._v("#")]),s._v(" 2 导入")]),s._v(" "),a("ul",[a("li",[s._v("代码用圆括号组合了导入，这是“分组”形式的导入语句。")]),s._v(" "),a("li",[s._v("也可以编写多个导入语句")])]),s._v(" "),a("h2",{attrs:{id:"_3-导出名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-导出名"}},[s._v("#")]),s._v(" 3 导出名")]),s._v(" "),a("ul",[a("li",[s._v("在 Go 中，如果一个名字以大写字母开头，那么它就是已导出的。例如，"),a("code",[s._v("Pizza")]),s._v(" 就是个已导出名，"),a("code",[s._v("Pi")]),s._v(" 也同样，它导出自 "),a("code",[s._v("math")]),s._v(" 包。")]),s._v(" "),a("li",[s._v("在导入一个包时，你只能引用其中已导出的名字。任何“未导出”的名字在该包外均无法访问。")])]),s._v(" "),a("h2",{attrs:{id:"_4-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-函数"}},[s._v("#")]),s._v(" 4 函数")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("函数可以没有参数或接受多个参数。")])]),s._v(" "),a("li",[a("p",[s._v("注意类型在变量名 "),a("strong",[s._v("之后")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("当连续两个或多个函数的已命名形参类型相同时，除最后一个类型以外，其它都可以省略。")]),s._v(" "),a("p",[a("code",[s._v("x int, y int")]),s._v("改写位"),a("code",[s._v("x, y int")])])]),s._v(" "),a("li",[a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" y\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"_5-多值返回"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-多值返回"}},[s._v("#")]),s._v(" 5 多值返回")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("函数可以返回任意数量的返回值。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("swap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\ta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("swap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"_6-命名返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-命名返回值"}},[s._v("#")]),s._v(" 6 命名返回值")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Go 的返回值可被命名，它们会被视作定义在函数顶部的变量。")])]),s._v(" "),a("li",[a("p",[s._v("返回值的名称应当具有一定的意义，它可以作为文档使用。")])]),s._v(" "),a("li",[a("p",[s._v("没有参数的 "),a("code",[s._v("return")]),s._v(" 语句返回已命名的返回值。也就是 "),a("code",[s._v("直接")]),s._v(" 返回。")])]),s._v(" "),a("li",[a("p",[s._v("直接返回语句应当仅用在短函数中。在长的函数中它们会影响代码的可读性。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" spilt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ty "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("spilt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"_7-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-变量"}},[s._v("#")]),s._v(" 7 变量")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("var")]),s._v(" 语句用于声明一个变量列表，跟函数的参数列表一样，类型在最后。")])]),s._v(" "),a("li",[a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("python"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("java "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("python"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"_8-变量的初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-变量的初始化"}},[s._v("#")]),s._v(" 8 变量的初始化")]),s._v(" "),a("ul",[a("li",[s._v("量声明可以包含初始值，每个变量对应一个。")]),s._v(" "),a("li",[s._v("如果初始化值已存在，则可以省略类型；变量会从初始值中获得类型。")])]),s._v(" "),a("h2",{attrs:{id:"_9-短变量声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-短变量声明"}},[s._v("#")]),s._v(" 9 短变量声明")]),s._v(" "),a("ul",[a("li",[s._v("在函数中，简洁赋值语句 "),a("code",[s._v(":=")]),s._v(" 可在类型明确的地方代替 "),a("code",[s._v("var")]),s._v(" 声明。")]),s._v(" "),a("li",[s._v("函数外的每个语句都必须以关键字开始（"),a("code",[s._v("var")]),s._v(", "),a("code",[s._v("func")]),s._v(" 等等），因此 "),a("code",[s._v(":=")]),s._v(" 结构不能在函数外使用。")])]),s._v(" "),a("h2",{attrs:{id:"_10-基本类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-基本类型"}},[s._v("#")]),s._v(" 10 基本类型")]),s._v(" "),a("ul",[a("li",[s._v("bool")]),s._v(" "),a("li",[s._v("string")]),s._v(" "),a("li",[s._v("int int8 int16 int32 int64 uint  int uint8 uint16 uint32 uint64 uintptr")]),s._v(" "),a("li",[s._v("byte //uint8 的别名")]),s._v(" "),a("li",[s._v("rune //int32 的别名，表示一个Unicode码点")]),s._v(" "),a("li",[s._v("float32 float64")]),s._v(" "),a("li",[s._v("complex64 complex128")]),s._v(" "),a("li",[a("code",[s._v("int")]),s._v(", "),a("code",[s._v("uint")]),s._v(" 和 "),a("code",[s._v("uintptr")]),s._v(" 在 32 位系统上通常为 32 位宽，在 64 位系统上则为 64 位宽。 当0 你需要一个整数值时应使用 "),a("code",[s._v("int")]),s._v(" 类型，除非你有特殊的理由使用固定大小或无符号的整数类型。")]),s._v(" "),a("li",[s._v("%T输出类型，%V输出值")])]),s._v(" "),a("h2",{attrs:{id:"_11-零值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-零值"}},[s._v("#")]),s._v(" 11 零值")]),s._v(" "),a("ul",[a("li",[s._v("没有明确初始值的变量声明会被赋予它们的 "),a("strong",[s._v("零值")]),s._v("。")]),s._v(" "),a("li",[s._v("零值是：\n"),a("ul",[a("li",[s._v("数值类型为 "),a("code",[s._v("0")]),s._v("，")]),s._v(" "),a("li",[s._v("布尔类型为 "),a("code",[s._v("false")]),s._v("，")]),s._v(" "),a("li",[s._v("字符串为 "),a("code",[s._v('""')]),s._v("（空字符串）。")])])])]),s._v(" "),a("h2",{attrs:{id:"_12-类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-类型转换"}},[s._v("#")]),s._v(" 12 类型转换")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("表达式 "),a("code",[s._v("T(v)")]),s._v(" 将值 "),a("code",[s._v("v")]),s._v(" 转换为类型 "),a("code",[s._v("T")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("一些关于数值的转换：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("float64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("float64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" u "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("uint")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("float64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nu "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("与 C 不同的是，Go 在不同类型的项之间赋值时需要显式转换。")])])]),s._v(" "),a("h2",{attrs:{id:"_13-类型推导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-类型推导"}},[s._v("#")]),s._v(" 13 类型推导")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在声明一个变量而不指定其类型时（即使用不带类型的 "),a("code",[s._v(":=")]),s._v(" 语法或 "),a("code",[s._v("var =")]),s._v(" 表达式语法），变量的类型由右值推导得出。")])]),s._v(" "),a("li",[a("p",[s._v("当右值声明了类型时，新变量的类型与其相同：")])])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\nj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// j 也是一个 int")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("不过当右边包含未指明类型的数值常量时，新变量的类型就可能是 "),a("code",[s._v("int")]),s._v(", "),a("code",[s._v("float64")]),s._v(" 或 "),a("code",[s._v("complex128")]),s._v(" 了，这取决于常量的精度：")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// int")]),s._v("\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.142")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// float64")]),s._v("\ng "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.867")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// complex128")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_14-常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-常量"}},[s._v("#")]),s._v(" 14 常量")]),s._v(" "),a("ul",[a("li",[s._v("常量的声明与变量类似，只不过是使用 const 关键字。")]),s._v(" "),a("li",[s._v("常量可以是字符、字符串、布尔值或数值。")]),s._v(" "),a("li",[s._v("常量不能用 := 语法声明。")])]),s._v(" "),a("h2",{attrs:{id:"_15-数值常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-数值常量"}},[s._v("#")]),s._v(" 15 数值常量")]),s._v(" "),a("ul",[a("li",[s._v("数值常量是高精度的"),a("strong",[s._v("值")]),s._v("。")]),s._v(" "),a("li",[s._v("一个未指定类型的常量由上下文来决定其类型。")]),s._v(" "),a("li",[a("code",[s._v("int")]),s._v(" 可以存放最大64位的整数，根据平台不同有时会更少。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);