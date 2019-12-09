简而言之，`选择器`是 CSS 规则的一部分且位于 CSS 声明块前。
### 不同种类的CSS选择器

- 简单选择器（Simple selectors）：通过元素类型、class 或 id 匹配一个或多个元素。
- 属性选择器（Attribute selectors）：通过 属性 / 属性值 匹配一个或多个元素。
- 伪类（Pseudo-classes）：匹配处于确定状态的一个或多个元素，比如被鼠标指针悬停的元素，或当前被选中或未选中的复选框，或元素是DOM树中一父节点的第一个子节点。
- 伪元素（Pseudo-elements）:匹配处于相关的确定位置的一个或多个元素，例如每个段落的第一个字，或者某个元素之前生成的内容。 
- 组合器（Combinators）：这里不仅仅是选择器本身，还有以有效的方式组合两个或更多的选择器用于非常特定的选择的方法。例如，你可以只选择divs的直系子节点的段落，或者直接跟在headings后面的段落。
- 多重选择器（Multiple selectors）：这些也不是单独的选择器；这个思路是将以逗号分隔开的多个选择器放在一个CSS规则下面， 以将一组声明应用于由这些选择器选择的所有元素。



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
