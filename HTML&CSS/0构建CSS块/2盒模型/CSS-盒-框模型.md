### 块级盒(Block box) 和 内联盒子(Inline box)

盒子模型=>元素内容+内边距+外边框+外边距 1.块级盒

- 盒子会在内联的方向上占据一行
- 每个盒子都会换行
- width 和 height 属性可以发挥作用
- 一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”
- h1、p... 2.内联盒子
- 对外显示为 inline
- 盒子不会产生换行。
- width 和 height 属性将不起作用;
- 行内元素的 height width 与内容一致,无法设置行内元素的 height width
- 控制内联元素的尺寸，将内联元素转为块级=>设置 display:block 或 display:inline-block
- 内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开
- a、span...

mdn:https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model

3.内部和外部显示类型

- css 的 box 模型有一个外部显示类型，来决定盒子是块级还是内联
- 同样盒模型还有内部显示类型，它决定了盒子内部元素是如何布局的,默认情况下是按照`正常文档流`布局，也意味着它们和其他块元素以及内联元素一样(如上所述).

  4.正常文档流
  正常的流布局=>在没有改变默认布局规则情况下的页面元素布局方式
  正常的布局流=>浏览器视口内放置、组织元素的系统；
  默认规则：
  块级元素： - 块级元素按照在在文档中书写的顺序放置 - 每一个块级元素会在上一个元素下面另一起一行（块级元素的特性）=> 通过设置好的 margin 分隔 - 英语，或者其他水平书写、自上而下模式里，块级元素是垂直组织的
  行内元素： - 只要在其父级块级元素的宽度内有足够的空间，它们与其他行内元素、相邻的文本内容（或者被包裹的）被安排在同一行。 - 如果空间不够，溢出的文本或元素将移到新的一行
  注意：如果两个相邻的元素都设置了 margin 并且两个 margin 有重叠，那么更大的设置会被保留，小的则会消失，被称为外边距塌陷

mdn:https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Normal_Flow

5.margin

6.display
display 属性指定了元素的显示类型，它包含两类基础特征=>用于指定元素怎样生成盒模型（外部+内部）

- 外部显示类型定义了`元素`怎样参与`流式布局`的处理 - 关键字 inline 或者 block 等
- 内部显示类型定义了`元素内`子元素的布局方式 - 关键字 flex

如果设置 display: flex，在一个元素上，外部显示类型是 block，但是内部显示类型修改为 flex， 该盒子的所有直接子元素都会成为 flex 元素，会根据 弹性盒子（Flexbox ）规则进行布局。

display: flex; =>弹性盒子

其他内部显示类型会用到的值，例如 grid

display: grid; =>网格

用法：

```CSS
/* <display-outside> values */
/* 外部显示类型 */
display: block;
display: inline;
display: run-in;

/* <display-inside> values */
/* 内部显示类型 */
display: flow;
display: flow-root;
display: table;
display: flex;
display: grid;
display: ruby;
display: inline-block;
等等
```

mdn:https://developer.mozilla.org/zh-CN/docs/Web/CSS/display

7.弹性盒子/弹性布局（Flexbox）=> 简写：Flex

mdn:https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Flexbox
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html

8.网格
mdn:https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Grids
http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html

上面 7、8 弹性布局和网格布局 => 它们布局方式 => 浮动和定位
浮动和定位是唯一可用的且有稳定的跨浏览器兼容性的能用来构建 CSS 布局的工具，仅仅在某些布局方面它们就有限制

9.浮动

10.定位

### CSS 盒模型

CSS`框模型`（译者注：也被称为`盒模型`）是网页布局的基础 ——`每个元素`被表示为一个矩形的`方框`，框的`内容`、`内边距`、`边界`和`外边距`像洋葱的膜那样，一层包着一层构建起来。

浏览器渲染网页布局时，它会算出每个框的内容要用什么样式，周围的洋葱层有多大，以及框相对于其它框放在哪里。

#### 框属性

文档的每个元素被构造成文档布局内的一个矩形框，框每层的大小都可以使用一些特定的 CSS 属性调整。相关属性如下:
![](http://pt2sht59w.bkt.clouddn.com/框模型.png)

1. `width` 和 `height`
   `width` 和 `height` 设置`内容框`（content box）的`宽度`和`高度`。内容框是框内容显示的区域——包括框内的文本内容，以及表示嵌套子元素的其它框。
   > 注意: 还有其他属性可以更巧妙地处理内容的大小——设置大小约束而不是绝对的大小。这些属性包括 min-width、max-width、min-height 和 max-height。
2. `padding`
   `padding` 表示一个 CSS 框的`内边距` ——这一层位于`内容框的外边缘`与`边界的内边缘`之间。该层的大小可以通过简写属性 padding 一次设置所有四个边，或用 `padding-top、padding-right、padding-bottom 和 padding-left` 属性一次设置一个边。

3. `border`
   CSS 框的`边界`（border）是一个`分隔层`，位于`内边距的外边缘`以及`外边距的内边缘`之间。边界的`默认大小为0`——从而让它不可见-我们可以设置边界的厚度、风格和颜色让它出现，`border` 简写属性可以让我们一次设置所有四个边，例如 border: 1px solid black; 但这个`简写`可以被各种普通书写的更详细的属性所覆盖：

- border-top, border-right, border-bottom, border-left: 分别设置`某一边`的边界`厚度／风格／颜色`。
- border-width, border-style, border-color: 分别仅设置边界的`厚度／风格／颜色`，并应用到全部四边边界。
- 你也可以单独设置某一个边的三个不同属性，如 border-top-width, border-top-style, border-top-color，等。
  最多可详细设置 4 边\*（厚度／风格／颜色）=12 种属性

4. margin
   `外边距`（margin）代表 CSS 框周围的`外部区域`，称为`外边距`，它在布局中推开其它 CSS 框。其表现与 padding 很相似；简写属性为 margin，单个属性分别为：
   `margin-top、margin-right、margin-bottom 和 margin-left`。
   > 注意: 外边距有一个特别的行为被称作外边距塌陷（margin collapsing）：当两个框彼此接触时，它们的间距将取两个相邻外边界的最大值，而非两者的总和。

mdn:https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin

html:

```css
<header>Header</header>
<main>Main content</main>
<footer>Footer</footer>
```

css:

```css
/* General styles */

body {
    margin: 0;  /*body的外边距为0，如果设置有值的话，整个body会有个空白的外边距,另外header,main,footer也可以分别设置外边距margin*/
}

body > * {
    font-size: 20px;
    padding: 10px;
    border: 20px solid rgba(0,0,0,0.5);
    margin: 0;
}

/* specific boxes */

header, footer {
    background-color: blue;
    color: white;
}

header {

}

main {
    background-color: yellow;
    margin-bottom: 20px;     /*1.设置main的下外边距为20px*/
}

footer {
    margin-top: 15px;        /*2.设置footer的上外边距为15px*/
    /*注意，第二个操作对布局没有任何影响——这就是外边距塌陷；较小的margin有效宽度为0，只留下值较大的margin。*/
}
```

css2:

```css
/* General styles */

body {
    margin: 0;  /*body的外边距为0，如果设置有值的话，整个body会有个空白的外边距,另外header,main,footer也可以分别设置外边距margin*/
  }

body > * {
    font-size: 20px;
    padding: 10px;
    border: 20px solid rgba(0,0,0,0.5);
    margin: 0;
}

/* specific boxes */

header, footer {
    background-color: blue;
    color: white;
}

header {

}

main {
    background-color: yellow;
    /* content原本的空间：width-height:1476 x 26.40  */

    /* 将<main>元素的每一边的 margin和 padding设置为30px——注意元素的margin和padding都增加了，导致content占据的空间变小。
        content现在的空间：width-height:1359.200 x 26.40  （content的内容往内缩）*/
    /*
    padding: 30px;
    margin: 30px;
    */

    /*默认情况下，content的width 被设置为可用空间的100%（在margin, border, padding占据了它们的空间后剩下的空间的宽度）
        如果您更改了浏览器窗口的宽度，那么这些框将会变大或变小，以保持包含在示例输出窗口中。 height默认设置为content的高度。*/

    /*尝试给 <main>元素设置一个新的宽度和高度——我们一开始可以设置为400px宽和200px高——然后看看效果！
        您会注意到，宽度不再随着浏览器窗口的大小而改变。*/
    /*
    width: 200px;
    height: 200px;
    */

    /*
        尝试设置<main>元素一个百分比的宽度——比如说60%——然后看看效果！
        您应该看到，随着浏览器窗口的大小调整，宽度现在又发生了变化。
    */
    /*
    width: 60%;
    height: 200px;
    */

    /*设置你的 <main>元素的内边距和外边距的各个边为5%，然后观察结果
        随着示例输出窗口的大小增加，内边距和外边距也增加。
    */
    padding: 5%;
    margin: 5%;

    /*外边距可以接受负数，这可以用来引起元素框的重叠。尝试在 <main>元素设置margin-top: -50px 然后看看效果。*/

}

footer {

}

```

注意：

1. 如果`content框`变得`比示例输出窗口大`，它将从窗口`溢出`，此时会出现`滚动条`，你可以滚动窗口来查看盒子剩余的内容 。你可以使用[overflow 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)来控制溢出
2. `框`的`高度`不遵守`百分比的长度`；`框的高度`总是采用`框内容的高度`，除非指定一个绝对的高度（如：px 或者 em），它会比在页面上默认是 100%高度更实用。
3. `border`也忽略百分比宽度设置
4. `框的总宽度`是`width`, `padding-right`, `padding-left`, `border-right`, 以及 `border-left` 属性之和:
   框的总宽度:`width+padding-right+padding-left+border-right+border-left`
5. 在一些情况下比较恼人（例如，假使你想要一个框占窗口宽度的 50%，但边界和内边距是用像素来表示时该怎么办？），为了避免这种问题，有可能使用`属性box-sizing`来`调整框模型`。使用值[border-box](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)，它将框模型更改成这个新的模型:
   ![](http://pt2sht59w.bkt.clouddn.com/blog_imgs/box_model_alt_small.png)

CSS 中的 `box-sizing` 属性定义了 `user agent` 应该如何`计算`一个元素的`总宽度`和`总高度`。

```
box-sizing: border-box;
width: 100%;
border: solid #5B6DCD 10px;
padding: 5px;
```

**_在 CSS 盒子模型的默认定义里，你对一个元素所设置的 `width` 与 `height` 只会应用到这个元素的内容区_**。
如果这个`元素`有任何的 `border` 或 `padding` ，绘制到屏幕上时的`盒子宽度`和`高度`会加上`设置的边框和内边距值`。这意味着当你调整一个`元素的宽度和高度`时需要时刻注意到这个`元素的边框和内边距`。当我们实现响应式布局时，这个特点尤其烦人。
`box-sizing` 属性可以被用来调整这些表现:

- `content-box` 是默认值。如果你设置`一个元素的宽为100px`，那么这个元素的`内容区会有100px 宽`，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- `border-box` 告诉浏览器：你想要设置的`边框`和`内边距`的值是`包含在width内`的,即如果你将一个元素的 width 设为 100px，那么这 100px 会包含它的 border 和 padding，内容区的实际宽度是 width 减去(border + padding)的值，这使得我们更容易地设定一个元素的宽高。
  `border-box`:`内容区的实际宽度`+ `border` + `padding`
  注意：`border-box`不包含`margin`

### 语法

box-sizing 属性被指定为下面列表中的关键字:
content-box:{box-sizing: content-box}
border-box:{box-sizing: border-box}

1. `content-box`:
   默认值，标准盒子模型。 width 与 height `只包括内容的宽和高， 不包括边框（border），内边距（padding），外边距（margin）`。注意: 内边距、边框和外边距都在这个盒子的外部。 比如说，.box {width: 350px; border: 10px solid black;} 在浏览器中的渲染的实际宽度将是 370px(350+10+10=370)
   `尺寸计算公式`：

```
width = 内容的宽度
height = 内容的高度
```

宽度和高度的计算值都不包含内容的边框（border）和内边距（padding）

2. `border-box`:
   width 和 height 属性`包括内容，内边距和边框，但不包括外边距`。
   `尺寸计算公式`：

```css
width = border + padding + 内容的宽度
height = border + padding + 内容的高度
```

例子：

```html
<div class="content-box">Content box</div>
<br>
<div class="border-box">Border box</div>
```

```css
div {
    width: 160px;
    height: 80px;
    padding: 20px;
    border: 8px solid red;
    background: yellow;
}
.content-box {
    box-sizing: content-box;
    /*
        Total width:160px + (20px * 2) + (8px * 2) = 216px;
        Total height:80px + (20px * 2) + (8px * 2) = 136px;
        Content box width:160px;
        Content box height:80px;
    */
}
.border-box {
    box-sizing: border-box;
    /*
        Total width:160px;
        Total height:80px;
        Content box width:160px - (20px * 2) - (8px * 2) = 104px;
        Content box height:80px - (20px * 2) - (8px * 2) = 24px;
    */
}
```

### 高级的框操作

#### 溢流

当你使用`绝对的值`设置了一个框的大小（如，固定像素的宽/高），`允许的大小可能不适合放置内容`，这种情况下内容会从盒子`溢流`。我们使用`overflow`属性来控制这种情况的发生。它有一些可能的值，但是最常用的是：

- `auto`: 当内容过多，溢流的内容被隐藏，然后出现滚动条来让我们滚动查看所有的内容。
- `hidden`: 当内容过多，溢流的内容被隐藏。
- `visible`: 当内容过多，溢流的内容被显示在盒子的外边（这个是默认的行为）
  首先是 HTML 代码:

```html
<p class="autoscroll">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris tempus turpis id ante mollis dignissim. Nam sed
    dolor non tortor lacinia lobortis id dapibus nunc. Praesent
    iaculis tincidunt augue. Integer efficitur sem eget risus
    cursus, ornare venenatis augue hendrerit. Praesent non elit
    metus. Morbi vel sodales ligula.
</p>

<p class="clipped">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris tempus turpis id ante mollis dignissim. Nam sed
    dolor non tortor lacinia lobortis id dapibus nunc. Praesent
    iaculis tincidunt augue. Integer efficitur sem eget risus
    cursus, ornare venenatis augue hendrerit. Praesent non elit
    metus. Morbi vel sodales ligula.
</p>

<p class="default">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris tempus turpis id ante mollis dignissim. Nam sed
    dolor non tortor lacinia lobortis id dapibus nunc. Praesent
    iaculis tincidunt augue. Integer efficitur sem eget risus
    cursus, ornare venenatis augue hendrerit. Praesent non elit
    metus. Morbi vel sodales ligula.
</p>
```

CSS 代码：

```css
.autoscroll {
    overflow: auto; /*出现滚动条来让我们滚动查看所有的内容*/
}
.clipped {
    overflow: hidden; /*溢流的内容被隐藏*/
}
.default {
    overflow: visible; /*溢流的内容被显示在盒子的外边（这个是默认的行为）*/
}
```

#### 背景裁剪（Background clip）

`框的背景`是由`颜色`和`图片`组成的，它们`堆叠`在一起（background-color, background-image）。 它们被应用到一个盒子里，然后被画在盒子的下面。
它们被应用到一个盒子里，默认情况下，背景延伸到了边界外沿(`边框border的外沿`)。这通常是 OK 的，但是在一些情况下比较讨厌（假使你有一个平铺的背景图，你`只想要它延伸到内容(content)的边沿`会怎么做？），该行为可以通过设置盒子的`background-clip属性`来调整。
首先是 HTML 代码:

```html
<div class="default"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

CSS 代码：

```css
div {
    width: 60px;
    height: 60px;
    padding: 20px;
    border: 20px solid rgba(0, 0, 0, 0.5);
    margin: 20px 0;

    background-size: 140px;
    background-position: center;
    background-image:url('https://mdn.mozillademos.org/files/11947/ff-logo.png');
    background-color: gold;
}

.default {
    background-clip: border-box;  /*默认情况下，背景延伸到了边界外沿(`边框border的外沿`)*/
}
.padding-box {
    background-clip: padding-box; /*背景延伸到了内边距（padding）外沿*/
}
.content-box {
    background-clip: content-box; /*背景延伸到了内容外沿*/
}
```

#### 轮廓(Outline)

### CSS 框类型

前我们说的所有对于框的应用都表示的是`块级元素`的，然而，`CSS还有一些表现不同的其他框类型`。我们可以通过`display属性`来`设定元素的框类型`。display 属性有很多的属性值。在本篇文章，我们将关注三个最常见的类型：`block, inline, and inline-block`。

- `块框`（ block box）是定义为堆放在其他框上的框（例如：其`内容会独占一行`），而且可以设置它的宽高，`之前所有对于框模型的应用适用于块框 （ block box）`
- `行内框`（ inline box）与块框是相反的，它随着文档的文字流动（例如：它将会和周围的文字和其他行内元素出现在`同一行`，而且它的内容会像一段中的文字一样随着文字部分的流动而打乱），`对行内盒设置宽高无效`，设置 padding, margin 和 border 都会更新周围文字的位置，但是对于周围的的块框（ block box）不会有影响。
- `行内块状框`（inline-block box） 像是上述两种的集合：它不会重新另起一行但会像行内框（ inline box）一样随着周围文字而流动，而且他能够设置宽高，并且像块框一样保持了其块特性的完整性，它`不会在段落行中断开`。（在下面的示例中，行内块状框会放在第二行文本上，因为第一行没有足够的空间，并且不会突破两行。然而，如果没有足够的空间，行内框会在多条线上断裂，而它会失去一个框的形状。）
  > 注意：默认状态下 display 属性值，`块级元素display: block` ，`行内元素display: inline`

HTML 代码:

```html
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <span class="inline">Mauris tempus turpis id ante mollis dignissim.</span>
    Nam sed dolor non tortor lacinia lobortis id dapibus nunc.
</p>

<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <span class="block">Mauris tempus turpis id ante mollis dignissim.</span>
    Nam sed dolor non tortor lacinia lobortis id dapibus nunc.
</p>

<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    <span class="inline-block">Mauris tempus turpis id ante mollis dignissim.</span>
    Nam sed dolor non tortor lacinia lobortis id dapibus nunc.
</p>
```

CSS 代码：

```css
p {
    padding: 1em;
    border: 1px solid black;
}
span {
    padding: 0.5em;
    border: 1px solid green;
    background-color:   yellow;
}
.inline {
    display: inline;
}
.block {
    display: block;
}
.inline-block {
    display: inline-block;
}
```
