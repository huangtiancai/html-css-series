一、npm安装sass：
https://sass-lang.com/install
```
npm install -g sass
```

```
$sass --version
1.24.2 compiled with dart2js 2.7.0
```

二、learn sass
https://sass-lang.com/guide

1.监听单文件
```
sass --watch input.scss output.css
```
上述命令可以放在启动脚本中：
初始化一个package.json
```
npm init -y
```
添加脚本：
```
"scripts": {
  "dev": "sass --watch input.scss output.css"
}
```
启动：
```
npm run dev
```
启动命令后，进行编译，编译完成后处于监听状态，可以实时编译输入的scss

注意yarn的使用，以及npm和yarn的区别：
```
npm install -g yarn
```

参考：https://www.jianshu.com/p/254794d5e741
Yarn的优点？
- 速度快
- 安装版本统 - Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，Yarn 就会创建（或更新）yarn.lock 这个文件。这么做就保证了，每一次拉取同一个项目依赖时，使用的都是一样的模块版本
- 更简洁的输出
- 多注册来源处理
- 更好的语义化
- yarn改变了一些npm命令的名称，比如 yarn add/remove，感觉上比 npm 原本的 install/uninstall 要更清晰

Yarn和npm命令对比：
```
npm 	
yarn

npm install
yarn

npm install react --save 	
yarn add react

npm uninstall react --save 	
yarn remove react

npm install react --save-dev 	
yarn add react --dev

npm update --save 	
yarn upgrade
```

npm做的改进：
- 默认新增了类似yarn.lock的 package-lock.json
- git 依赖支持优化
- 文件依赖优化

目前暂时仍然使用npm包管理器

2.监听目录
直接启动监听
```
sass --watch sass:dist
```
或在package.json中配置启动脚本：
```
  "scripts": {
    "dev": "sass --watch sass:dist"
  }
```
启动：
```
npm run dev
```
注意：下面的例子均在package.json中配置启动脚本，直接通过npm run xxx形式启动编译和监听

3.变量-Variables
- 把反复使用的css属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值
- 如果你需要一个不同的值，只需要改变这个变量的值，则所有引用此变量的地方生成的值都会随之改变
- sass使用$符号来标识变量
3.1变量声明
```
变量              变量值/属性值
$highlight-color: #F90;
```
- 使用$符号来标识变量
- 任何可以用作css属性值的赋值都可以用作sass的变量值
- 属性值可以空格分割的多个属性值，如`$basic-border: 1px solid black;`或以逗号分割的多个属性值，如`$plain-font: "Myriad Pro"、Myriad、"Helvetica Neue"、Helvetica、"Liberation Sans"、Arial和sans-serif; sans-serif;`
- sass变量声明后并未生效，引用后才会生效

3.2变量定义的规则
- css规则只能写在选择器内部
- 与CSS属性不同，sass的规则可以（通过变量定义的方式）写在外部=>变量可以在规则块定义之外存在；
- 当变量定义在css规则块内，那么该变量只能在此规则块内使用

3.3变量的引用
- 凡是css属性的标准值（比如说1px或者bold）可存在的地方，变量就可以使用
- 在声明变量时，变量值也可以引用其他变量
- 注意通过粒度区分，为不同的值取不同名字比较实用

3.4变量名用中划线还是下划线分隔
sass的变量名可以与css中的属性名和选择器名称相同，包括中划线和下划线
中划线：$highlight-color
下划线：$highlight_color
使用中划线的方式更为普遍，这也是compass和本文都用的方式

- 中划线和下划线相互兼容
- 定义的变量和变量的引用中相互兼容
  用中划线声明的变量可以使用下划线的方式引用，反之亦然


4.嵌套-Nesting
4.1嵌套规则
css中重复写选择器是非常恼人的
如果要写一大串指向页面中同一块的样式时，往往需要一遍又一遍地写同一个ID以及其后代选择器
```css
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```
像这种情况，sass可以让你只写一遍，且使样式可读性更高
sass在输出css时会帮你把这些嵌套规则处理好，避免你的重复书写
```CSS
#content{
  article{
    h1 { color: #333 };
    p { margin-bottom: 1.4em }
  }
  aside {
     background-color: #EEE 
  }
}
```

大多数情况下这种简单的嵌套都没问题，但是有些场景下不行，比如你想要在嵌套的选择器里边立刻应用一个类似于:hover的伪类
为了解决这种以及其他情况，sass提供了一个特殊结构 &

4.2 父选择器的标识符&
```CSS
article a {
  color: blue;
  :hover { color: red }
}
```
这种情况会像后代选择器那样拼接：
```CSS
article a :hover {
  color: red;
}
```
这种情况sass就无法正常工作，达不到"article元素内链接的所有子元素在被hover时都会变成红色"的效果

解决之道为使用一个特殊的sass选择器，即父选择器 => &
```CSS
article a {
  color: blue;
  &:hover { color: red }
}
```
当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是&被父选择器直接替换：
```CSS
article a:hover {
  color: red;
}
```

同时父选择器标识符还有另外一种用法，你可以在父选择器之前添加选择器
如下父选择器之前添加了选择器body.ie
```CSS
#content aside{
  color:tomato;
  body.ie & {color: red;}
}
```
编译后：
```CSS
body.ie #content aside {
  color: red;
}
```

4.3群组选择器的嵌套
```CSS
.container{
  h1,h2,h3{color: green;}
}

nav,aside{
  a{color: red;}
}
```
4.4子组合选择器和同层组合选择器：>、+和~
```CSS
  ~ article{border-top: 1px dashed #ccc }
  > section{background:#eee}
  dl > {
    dt{color: #333;}
    dd{color: #555;}
  }
  nav + & {margin-top: 0;}
}
```

在sass中，不仅仅css规则可以嵌套，对属性进行嵌套也可以减少很多重复性的工作

4.5嵌套属性
在sass中，除了CSS选择器，属性也可以进行嵌套
要反复写`border-style``border-width``border-color`以及`border-*`等也是非常烦人的。在sass中，你只需敲写一遍border：

嵌套属性的规则是这样的：
把属性名从中划线-的地方断开，在`根属性`后边添加一个冒号:，紧跟一个{ }块，把`子属性`部分写在这个{ }块中
```CSS
nav{
  border:{
    style: solid;
    width:1px;
    color:#ccc
  }
}
```
sass会把你的子属性一一解开，把根`属性和子属性部分通过中划线-连接起来`，最后生成的效果与你手动一遍遍写的css样式一样：
```CSS
nav {
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
}
```

随着你的样式表变得越来越大，这种写法也很难保持结构清晰。有时，处理这种大量样式的唯一方法就是把它们分拆到多个文件中。`sass`通过对`css原有@import规则`的改进直接支持了这一特性

5.
Partials-部分/分布
Modules - 模块

CSS`@import`规则特性：
css有一个特别不常用的特性，即@import规则，它允许在一个css文件中导入其他css文件。然而，后果是只有执行到@import时，浏览器才会去下载其他css文件，这导致页面加载起来特别慢

sass`@import`规则特性：
- sass也有一个@import规则，但不同的是，sass的@import规则在生成css文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求
- 不需要指明被导入文件的全名，可以省略.sass或.scss文件后缀

sass`@use规则`：
必须放在其他规则之前;@import没有这个要求

5.1使用SASS部分文件
1.局部文件：那些专门为@import命令而编写的sass文件，并不需要生成对应的独立css文件，这样的sass文件称为局部文件
1.sass局部文件的文件名以下划线开头。这样，sass就不会在编译时单独编译这个文件输出css，而只把这个文件用作导入
2.当你@import一个局部文件时，还可以不写文件的全名，即省略文件名开头的下划线(前缀和后缀均可省略)
  如：导入themes/_night-sky.scss
      只需在样式表中写@import "themes/night-sky";
3.局部文件可以被多个不同的文件引用（当一些样式需要在多个页面甚至多个项目中使用时，这非常有用）

5.2默认变量值
!default

5.3嵌套导入
与原生的css不同，sass允许@import命令写在css规则内
```CSS
.blue-theme{
  @import "./blue-theme";
}
```

5.4原生的CSS导入???
sass兼容原生的css，所以它也支持原生的CSS@import
通常在sass中使用`@import`时，sass会尝试找到对应的`sass文件`并导入进来，但在下列三种情况下会`生成原生的CSS@import`，尽管这会造成浏览器解析css时的额外下载:
- 被导入文件的名字以.css结尾；
- 被导入文件的名字是一个URL地址（比如http://www.sass.hk/css/css.css），由此可用谷歌字体API提供的相应服务；
- 被导入文件的名字是CSS的url()值。


6.Mixins - 混合器

8.Extend/Inheritance 继承
```CSS
%message-shared {}
```

9.Operators - 操作符






https://sass-lang.com/guide
https://www.sass.hk
https://www.bilibili.com/video/av39876527
https://space.bilibili.com/390120104/favlist?fid=312496304&ftype=create


