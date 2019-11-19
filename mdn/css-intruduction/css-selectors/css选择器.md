简而言之，`选择器`是 CSS 规则的一部分且位于 CSS 声明块前。
![](http://pt2sht59w.bkt.clouddn.com/blog_imgs/css_syntax_ruleset.png)

### 不同种类的CSS选择器

- 简单选择器（Simple selectors）：通过元素类型、class 或 id 匹配一个或多个元素。
- 属性选择器（Attribute selectors）：通过 属性 / 属性值 匹配一个或多个元素。
- 伪类（Pseudo-classes）：匹配处于确定状态的一个或多个元素，比如被鼠标指针悬停的元素，或当前被选中或未选中的复选框，或元素是DOM树中一父节点的第一个子节点。
- 伪元素（Pseudo-elements）:匹配处于相关的确定位置的一个或多个元素，例如每个段落的第一个字，或者某个元素之前生成的内容。 
- 组合器（Combinators）：这里不仅仅是选择器本身，还有以有效的方式组合两个或更多的选择器用于非常特定的选择的方法。例如，你可以只选择divs的直系子节点的段落，或者直接跟在headings后面的段落。
- 多重选择器（Multiple selectors）：这些也不是单独的选择器；这个思路是将以逗号分隔开的多个选择器放在一个CSS规则下面， 以将一组声明应用于由这些选择器选择的所有元素。

### 简单选择器
1. 类型选择器（又名元素选择器）
此选择器只是`一个选择器名`和`指定的HTML元素名`的`不区分大小写`的匹配。这是选择所有指定类型的`最简单方式`
2. 类选择器
类选择器由一个`点“.”以及类后面的类名`组成。类名是在HTML class文档元素属性中没有空格的任何值。
文档中的`多个元素`可以`具有相同的类名`;
`单个元素可以有多个类名`(***以空格分开多个类名的形式书写***)。以下是一个简单的例子：
3. ID 选择器
ID选择器是由一个哈希/磅符号 (#)，后面跟着给定元素的ID名称组成的。 任何元素都可以使用id属性设置唯一的ID名称。 由你自己决定选择一个ID名称是什么。 这是选择单个元素的`最有效的方式`。
4. 通用选择器

### 属性选择器

1. 存在和值（Presence and value）属性选择器
这些属性选择器尝试`匹配精确的属性值`：
- [attr]：该选择器选择包含 attr 属性的所有元素，不论 attr 的值为何。
- [attr=val]：该选择器仅选择 attr 属性被赋值为 val 的所有元素。
- [attr~=val]：该选择器仅选择具有 attr 属性的元素，而且要求 val 值是 attr 值包含的被空格分隔的取值列表里中的一个。
2. 子串值（Substring value）属性选择器
这种情况的属性选择器也被称为`“伪正则选择器”`，因为它们提供类似 regular expression 的灵活匹配方式（但请注意，这些选择器并不是真正的正则表达式）：
- [attr|=val] : 选择attr属性的值是 val 或值以 val- 开头的元素（注意，这里的 “-” 不是一个错误，这是用来处理语言编码的）。
- [attr^=val] : 选择attr属性的值以 val 开头（包括 val）的元素。
- [attr$=val] : 选择attr属性的值以 val 结尾（包括 val）的元素。
- [attr*=val] : 选择attr属性的值中包含子字符串 val 的元素（一个子字符串就是一个字符串的一部分而已，例如，”cat“ 是 字符串 ”caterpillar“ 的子字符串）。

### 伪类和伪元素 Pseudo-classe and pseudo-elements
1. 伪类（pseudo class）
一个 `CSS  伪类`（pseudo-class） 是一个`以冒号(:)作为前缀`，被`添加到一个选择器末尾`的关键字，当你希望样式在特定状态下才被呈现到指定的元素时，你可以往元素的选择器后面加上对应的伪类（pseudo-class）。
你可能希望 `某个元素`在处于`某种状态下`呈现另一种样式，例如`当鼠标悬停在元素上面`时，或者`当一个复选框被禁用或被勾选`时，又或者当一个元素是它在 DOM 树中父元素的第一个子元素时。
如
```
/*当光标悬停于链接,让链接呈现高亮并且去除下划线*/
a:hover {
    color: darkred;
    text-decoration: none;
}
```
2. 伪元素(pseudo elements)
`伪元素`（Pseudo-element）跟`伪类`很像，但它们又有不同的地方。它们都是关键字，但这次伪元素`前缀是两个冒号 (::)` ， 同样是`添加到选择器后面`去`选择某个元素的某个部分`。
- ::after
- ::before
- ::first-letter
- ::first-line
- ::selection
- ::backdrop

### 组合器和多个选择器
虽然一次使用一个选择器就很有用，但在某些情形中却可能导致效率低下。
`CSS选择器`在你`开始组合`他们时就`进行细粒度选择`的会更加有效。
基于元素之间的`相互关联关系`，CSS提供了几种方法来对元素进行选择。下表使用连接符展示了这些关联关系(A和B代表前文所述的任意选择器):

名称|组合器|选择
---|---|---
选择器组|A,B|匹配满足A（和/或）B的任意元素（参见下方 同一规则集上的多个选择器）.
后代选择器|A B|匹配B元素，满足条件：B是A的后代结点（B是A的子节点，或者A的子节点的子节点）
子选择器|A > B|匹配B元素，满足条件：B是A的直接子节点
相邻兄弟选择器|A + B|匹配B元素，满足条件：B是A的下一个兄弟节点（AB有相同的父结点，并且B紧跟在A的后面）
通用兄弟选择器|A ~ B|匹配B元素，满足条件：B是A之后的任意一个兄弟节点（AB有相同的父节点，B在A之后，但不一定是紧挨着A）     

#### 组合器示例

```
/* 基本的table样式 */
table {
    font: 1em sans-serif;
    border-collapse: collapse;
    border-spacing: 0;
}
/*给行列加边框*/
table td,table th {
    border: 1px solid black;
}

/* 所有table里的thead里的所有th */
table thead th {
    background-color: yellowgreen;
    color: red;
}
/* 所有table里的tbody里的所有td（第一个除外），每个td都是由它上边的td选择(上边的节点选择其兄弟节点) */
table td+td {
    text-align: center;  /*文本对齐方式*/
}
/*table里所有的tbody里的td当中的最后一个 */
table tbody td:last-child {
    text-align: right;
}   
/* 所有table里的tfoot里的th */
table tfoot th {
    text-align: right;
    border-top-width: 5px;
    border-left: none;
    border-bottom: none;
}
/* 在table当中，所有的th之后的td */
table th+td {
    text-align: right;
    border-top-width: 5px;
    color: red;
    background-color: yellow;
}
/* 定位在“with-currency”类中拥有属性lang并且这个属性值为en-US的元素中的，最后td(:last-child)节点的前面（::before）*/
/*为最后一列价格添加美元符号*/
.with-currency[lang="en-US"] td:last-child::before {
    content: "$";
}
```

#### 应用同一规则的选择器组
通过相互间用逗号分隔的多个选择器所形成的组，可以一次性将同一规则同时应用到多组选定元素。例如：
```
p, li {
  font-size: 1.6em;
}
```
或者
```
h1, h2, h3, h4, h5, h6 {
  font-family: helvetica, 'sans serif';
}
```
