CSS是由两块内容组合而成的：
`属性（Property）`：一些人类可理解的标识符，这些标识符`指出你想修改哪一些样式`，例如：字体，宽度，背景颜色等。
`属性值（Value）：每个指定的属性都`需要给定一个值`，这个值表示你想`把那些样式特征修改成什么样`，例如，你想把字体，宽度或背景颜色改成什么。

### CSS规则集
![](http://pt2sht59w.bkt.clouddn.com/blog_imgs/css_declaration.png)
整个结构称为 `规则集`（通常简称“规则”），各部分释义如下：
**选择器（Selector）**
HTML 元素的名称位于规则集开始。它选择了`一个或多个`需要添加样式的元素（在这个例子中就是 p 元素）。要`给不同元素`添加样式只需要`更改选择器`就行了。
**声明（Declaration）**
一个单独的规则。如 color: red; 用来`指定添加样式元素的属性`。
**属性（Properties）**
改变 HTML 元素样式的`途径`。（本例中 color 就是 `<p>` 元素的属性。）CSS 编写人员决定修改哪个属性以改变规则。
**属性的值（Property value）**
更多的属性[参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)
在属性的右边，冒号后面即`属性的值`，它从指定属性的众多外观中选择一个值（我们除了 red 之外还有很多属性值可以用于 color ）。
注意其他重要的语法：

- 每个规则集（除了选择器的部分）都应该包含在成对的大括号里（{}）。
- 在每个声明里要用冒号（:）将属性与属性值分隔开。
- 在每个规则集里要用分号（;）将各个声明分隔开。
如果要同时修改多个属性，只需要将它们用分号隔开，就像这样：
```
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```
也可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。例如：
```
p, li, h1 {
  color: red;
}
```

### CSS 声明
CSS 引擎会通过计算，将对应的 `CSS 声明`应用到页面的`每一个元素上`，从而使得元素们以适当的方式布局，并展示出适当的样式。特别需要记住的是，`CSS 的属性和属性值都是区分大小写的`。属性和属性值之间，`用英文半角冒号 (:) 隔离`，如下图所示。
![](http://pt2sht59w.bkt.clouddn.com/blog_imgs/css_syntax___declaration.png)

#### CSS 声明块
`声明`按块分组，每一组声明都用一对大括号包裹，用 ({) 开始，用 (}) 结束。
`声明块`里的每一个声明必须`用半角分号（;）分隔`，否则代码会不生效（至少不会按预期结果生效）。
`声明块`里的`最后一个声明`结束的地方，不需要加分号，但是最后加分号是个好习惯，因为可以防止在后续增加声明时忘记加分号。
![](http://pt2sht59w.bkt.clouddn.com/blog_imgs/declarations-block.png.png)

### CSS 选择器和规则
如何告知我们的`声明块`哪些元素是它们需要应用的。
通过在`每个声明块`前`加上选择器（selector）`来完成这一动作，选择器是一种`模式`，它能在页面上`匹配一些元素`。这将使相关的声明仅被应用到`被选择`的元素上。
`选择器`加上`声明块`被称为`规则集`（ruleset），通常简称`规则`（rule）。
![](http://pt2sht59w.bkt.clouddn.com/blog_imgs/css_syntax_ruleset.png.png)
`选择器`可以很复杂 —— 你可以制作一个匹配多种元素的规则，这是通过把多个选择器囊括成用逗号分隔的选择器（一组,）来达成

`一个元素`可以被`多个选择器所匹配`，因此，一个给定的属性可能被多个规则设置多次。 CSS 定义了哪个规则比其它规则`更具优先级`，则更具优先级的规则必定被应用：这被称为`层叠算法（cascade algorithm）`，关于层叠算法的更多内容和运作原理见`层叠和继承`

### CSS 语句（CSS statements）
`CSS 规则`是样式表的主要组成块 —— 是你在 CSS 中`最常见的块`。但这有一些其它类型的块，你以后偶尔会碰上 —— CSS 规则只是被称为 CSS 语句中的一种。其它类型如下：
#### @-规则(At-rules) 
在CSS中被用来传递元数据、条件信息或其它描述性信息。它由（@）符号开始，紧跟着一个表明它是哪种规则的描述符，之后是这种规则的语法块，并最终由一个半角分号（;）结束。[参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/At-rule)
- @charset 和 @import （元数据）
- @media 或 @document （条件信息，又被称为嵌套语句，见下方。)
- @font-face （描述性信息）
示例：
```
@import 'custom.css';
```
该`@-规则`向`当前 CSS` 导入`其它 CSS 文件`
#### 嵌套语句 
- @media 只有在运行浏览器的设备匹配其表达条件时才会应用该@-规则的内容；
- @supports 只有浏览器确实支持被测功能时才会应用该@-规则的内容；
- @document 只有当前页面匹配一些条件时才会应用该@-规则的内容。
示例：
```
@media (min-width: 801px) {
  body {
    margin: 0 auto;
    width: 800px;
  }
}
```
上述的`嵌套语句`只有在页面宽度超过801像素时才会应用。

### 空格

### 注释
CSS中的注释以` /* `开始并以` */ `结束
1. 帮助他人理解该代码
2. 对`暂时注释`某些部分的代码`进行测试`很有用，例如当您尝试查找是代码的哪一部分导致错误时。
```
/* 基本元素样式 */
/* -------------------------------------------------------------------------------------------- */
body {font: 1em/150% Helvetica, Arial, sans-serif; padding: 1em; margin: 0 auto; max-width: 33em;}
@media (min-width: 70em) {
  /* 特别指明全局字体大小，在大屏或大窗口下加大字体大小以增加可读性 */
  body {font-size: 130%;}
}

h1 {font-size: 1.5em;}

/* 处理嵌套在DOM中的特定元素  */
/* -------------------------------------------------------------------------------------------- */
div p, #id:first-line {background-color: red; background-style: none}
div p                 {margin          :   0; padding         : 1em;}
div p + p             {padding-top     :   0;                       }
```

### 简写
一些属性比如 `font`，`background`，`padding`，`border`，和 `margin` 被称为`简写属性` —— 这是由于它们`允许你在一行设置多个属性`，从而节省时间并使代码更整洁。
例如，像这行代码：
```
/* 在padding和margin这样的简写属性中，赋值的顺序是top、right、bottom、left。 
   它们还有其他简写方式，例如给padding两个值，则第一个值表示top/bottom，第二个值表示left/right */
padding: 10px 15px 15px 5px;
```
和以下的所有代码做了相同的工作：
```
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```
这一行：
```
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```
和以下的所有代码做了相同的工作：
```
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-scroll: fixed;
````

**赋值的顺序**:
4值：top right bottom left。
2值：top bottom

更多参考[CSS选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)