(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{212:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"扫雷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扫雷","aria-hidden":"true"}},[t._v("#")]),t._v(" 扫雷")]),t._v(" "),s("h3",{attrs:{id:"在线demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在线demo","aria-hidden":"true"}},[t._v("#")]),t._v(" 在线Demo")]),t._v(" "),s("ul",[s("li",[t._v("扫雷 ："),s("a",{attrs:{href:"http://www.almx.top/awesome/#/sweep",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线试玩"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.almx.top/image/awesome-game/sweepDemo.png",alt:"awesome"}})]),t._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("ol",[s("li",[t._v("棋盘的每个格子分为三种类型的其中一种：")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("雷：emmm 就是一颗雷")]),t._v(" "),s("li",[t._v("数字：以当前格为中心的九宫格内雷的数量")]),t._v(" "),s("li",[t._v("空白：以当前格为中心的九宫格内没有雷")])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("当点击某个格子的时候有对应以上三种类型的三种情况：")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("雷：emmmm 游戏结束")]),t._v(" "),s("li",[t._v("数字：显示当前数字，提示用户雷的数量")]),t._v(" "),s("li",[t._v("空白：需要以当前点击格子为中心向外递归寻找类型为数字的格子来停止递归，如图\n"),s("img",{attrs:{src:"http://www.almx.top/image/awesome-game/sweep_ex1.png",alt:"awesome"}})])])]),t._v(" "),s("h2",{attrs:{id:"递归"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归","aria-hidden":"true"}},[t._v("#")]),t._v(" 递归")]),t._v(" "),s("ol",[s("li",[t._v("假设点击空白格的坐标"),s("code",[t._v("[x,y]")]),t._v("，则以它为中心的另八个格子坐标为：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取九宫格数据")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//左上")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//中上")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//右上")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//中左")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//中右")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//左下")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//中下")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//右下")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("过滤掉边界外的坐标，获得以坐标为集合的二维数组：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("maxX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maxY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boardSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//棋盘的边界值")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" filterArr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("posX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" posY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("posX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" posY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" posX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" maxX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" posY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" maxY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("遍历坐标的集合，再去获取以每一项为中心的另八个坐标的集合，进行递归;\n"),s("img",{attrs:{src:"http://www.almx.top/image/awesome-game/sweep_ex2.png",alt:"awesome"}})]),t._v(" "),s("li",[t._v("当递归的途中某个坐标的类型不为空白，为数字时，则停止递归，如下图:\n"),s("img",{attrs:{src:"http://www.almx.top/image/awesome-game/sweep_ex3.png",alt:"awesome"}})])]),t._v(" "),s("blockquote",[s("p",[t._v("点击红色向外遍历 => 紫色箭头 => 绿色箭头（找到数字格）=> 跳过绿色箭头的递归 => 开始黑色箭头的递归")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("为避免递归的过程中重复递归某一坐标，则给每个棋格对象添加是否递归过的布尔值，通过判断则可避免重复递归")]),t._v(" "),s("li",[t._v("最后会得到扩展开的边界都为数字格的棋盘；")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.almx.top/image/awesome-game/sweep_ex4.png",alt:"awesome"}})]),t._v(" "),s("blockquote",[s("p",[t._v("emmmm 不要在意画风。")])]),t._v(" "),s("h2",{attrs:{id:"旗子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旗子","aria-hidden":"true"}},[t._v("#")]),t._v(" 旗子")]),t._v(" "),s("ol",[s("li",[t._v("需要给所有雷类型的格子插上旗子来获得胜利")]),t._v(" "),s("li",[t._v("点击数字格子时判断九宫格内的旗子是否正确排雷")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("只有当旗子数量大于或等于点击格的数字时才判断")]),t._v(" "),s("li",[t._v("旗子误插时则分别显示三种状态：")])]),t._v(" "),s("blockquote",[s("p",[t._v("正确的雷（正常显示）\n排掉的雷（绿色背景的雷）\n错排的雷（红色背景的雷）")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://www.almx.top/image/awesome-game/sweep_ex5.png",alt:"awesome"}})]),t._v(" "),s("h3",{attrs:{id:"完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完成","aria-hidden":"true"}},[t._v("#")]),t._v(" 完成")])])}),[],!1,null,null,null);a.default=n.exports}}]);