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

























