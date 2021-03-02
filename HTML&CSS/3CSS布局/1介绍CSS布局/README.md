## 页面布局：
- 正常布局流
- display属性
- 弹性盒子:flex
- 网格
- 浮动
- 定位
- CSS 表格布局
- 多列布局

## 正常布局流(Normal flow)
- 默认的HTML布局方式（块、内联元素）

下列布局技术会覆盖默认的布局行为：

## display
- inline
- block
- inline-block
- flex *
- grid *

正常流中的所有内容都有一个display的值，用作元素的默认行为方式（根据元素的类型）
- 英文段落显示在一个段落的下面，这是因为它们的样式(默认)是display:block
- 在段落中的某个文本周围创建链接，则该链接将与文本的其余部分保持内联，并且不会打断到新行。这是因为<a>元素默认为display:inline
- 更改默认样式

## 弹性布局
display:flex

## Grid 布局
display:grid

## float 浮动
none
left：诸如 left 能够让块级元素互相并排成一行，而不是一个堆叠在另一个上面
right

## position 定位
- relative
- absolute
- fixed
- static

## 表格布局
display: table


## 多列布局
- column-count
- ...

