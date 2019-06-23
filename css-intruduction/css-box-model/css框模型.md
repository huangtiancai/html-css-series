CSS`框模型`（译者注：也被称为`盒模型`）是网页布局的基础 ——`每个元素`被表示为一个矩形的`方框`，框的`内容`、`内边距`、`边界`和`外边距`像洋葱的膜那样，一层包着一层构建起来。

浏览器渲染网页布局时，它会算出每个框的内容要用什么样式，周围的洋葱层有多大，以及框相对于其它框放在哪里。

### 框属性
文档的每个元素被构造成文档布局内的一个矩形框，框每层的大小都可以使用一些特定的CSS属性调整。相关属性如下:
![](http://pt2sht59w.bkt.clouddn.com/框模型.png)
1. `width` 和 `height`
`width` 和 `height` 设置`内容框`（content box）的`宽度`和`高度`。内容框是框内容显示的区域——包括框内的文本内容，以及表示嵌套子元素的其它框。
>注意: 还有其他属性可以更巧妙地处理内容的大小——设置大小约束而不是绝对的大小。这些属性包括min-width、max-width、min-height 和 max-height。
2. `padding`
`padding` 表示一个 CSS 框的`内边距` ——这一层位于`内容框的外边缘`与`边界的内边缘`之间。该层的大小可以通过简写属性padding 一次设置所有四个边，或用 `padding-top、padding-right、padding-bottom 和 padding-left` 属性一次设置一个边。

3. `border`
CSS 框的`边界`（border）是一个`分隔层`，位于`内边距的外边缘`以及`外边距的内边缘`之间。边界的`默认大小为0`——从而让它不可见-我们可以设置边界的厚度、风格和颜色让它出现，`border` 简写属性可以让我们一次设置所有四个边，例如  border: 1px solid black; 但这个`简写`可以被各种普通书写的更详细的属性所覆盖：
- border-top, border-right, border-bottom, border-left: 分别设置`某一边`的边界`厚度／风格／颜色`。
- border-width, border-style, border-color: 分别仅设置边界的`厚度／风格／颜色`，并应用到全部四边边界。
- 你也可以单独设置某一个边的三个不同属性，如 border-top-width, border-top-style, border-top-color，等。 
最多可详细设置4边*（厚度／风格／颜色）=12种属性
4. margin
`外边距`（margin）代表 CSS 框周围的`外部区域`，称为`外边距`，它在布局中推开其它 CSS 框。其表现与 padding 很相似；简写属性为 margin，单个属性分别为 `margin-top、margin-right、margin-bottom 和 margin-left`。
>注意: 外边距有一个特别的行为被称作外边距塌陷（margin collapsing）：当两个框彼此接触时，它们的间距将取两个相邻外边界的最大值，而非两者的总和。

html:
```
<header>Header</header>
<main>Main content</main>
<footer>Footer</footer>
```
css:
```
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
```
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





















