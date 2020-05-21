### 层叠
`CSS` 是 `Cascading Style Sheets` 的缩写，这暗示`层叠（cascade）`的概念是很重要的。
在最基本的层面上，它表明CSS规则的顺序很重要。
`什么选择器`在`层叠`中胜出`取决于三个因素`（这些都是按重量级顺序排列的——前面的的一种会否决后一种）：
1. 重要性（Importance）
2. 专用性（Specificity）
3. 源代码次序（Source order）
#### 重要性
在CSS中，有一个特别的语法可以让一条规则总是优先于其他规则：`!important`。把它加在属性值的后面可以使这条声明有无比强大的力量。  
```
<p class="better">This is a paragraph.</p>
<p class="better" id="winning">One selector to rule them all!</p>
```

```
/*id/class选择器优先于element选择器,即使element选择器在后面也不会覆盖*/
/*比起class而言id专用性更高,红色背景色和1pixel的黑色边框都应应用于第二元素，第一个元素获得灰色背景色，没有边框*/
#winning{
    background-color: red;
    border: 1px solid black;
}
/*第二元素不会被应用:“灰色背景色，没有边框”，即使class选择器在后面也不会覆盖*/
.better{
    background-color: gray;
    border: none;/*若在这个声明后加上 !important后，尽管id具有更高的优先性，该声明也将优先于前面规则中的边界值声明。*/
}

/*element选择器*/
p{
    background-color: blue;
    color: white;
    padding: 5px;
}
```
>注意: 重载这个 `!important` 声明的唯一方法是在后面的源码或者是一个拥有更高专用性的源码中包含相同的 `!important` 特性的声明。

#### 专用性
`专用性`基本上是衡量`选择器的具体程度`的一种方法——`它能匹配多少元素`(匹配的元素越多，专用性越低)
`元素选择器`具有`很低的专用性`。
`类选择器`具有`更高的专用性`，所以将战胜元素选择器。
`ID选择器`有甚至`更高的专用性`, 所以将战胜类选择器.
战胜ID选择器的唯一方法是使用 `!important`

一个选择器具有的专用性的量是用`四种不同的值`（或组件）来衡量的，它们可以被认为是`千位，百位，十位和个位`——在四个列中的四个简单数字：

- 千位：如果声明是在`style 属性`中该列加1分（这样的声明没有选择器，所以它们的专用性总是1000。）否则为0。
- 百位：在整个选择器中每包含一个`ID选择器`就在该列中加1分。
- 十位：在整个选择器中每包含一个`类选择器、属性选择器、或者伪类`就在该列中加1分。
- 个位：在整个选择器中每包含一个`元素选择器或伪元素`就在该列中加1分。
注意: 通用选择器 (*), 复合选择器 (+, >, ~, ' ') 和否定伪类 (:not) 在`专用性`中无影响。
```
<div id="outer" class="container">
    <div id="inner" class="container">
        <ul>
            <li class="nav"><a href="#">One</a></li>
            <li class="nav"><a href="#">Two</a></li>
        </ul>
    </div>
</div>
```
```
/*专用性值*/
/*specificity:0101 */
#outer a {
    background-color: red;
}
/*specificity:0201 */
#outer #inner a {
    background-color: blue;
}
/*前两个选择器正在竞争链接的背景颜色的样式——第二个赢得并使背景色为蓝色
    第二个有一个额外的ID选择器在链中：其专用性值为201比101大
*/


/*specificity:0104 */
#outer div ul li a {
    color: yellow;
}
/*specificity:0113 */
#outer div ul .nav a {
    color: white;
}
/*第三个和第四个选择器在链接文本颜色的样式上进行竞争——第二个选择器获胜使文本变白
    因为缺少一个元素选择器，缺少的选择器被换成类选择器，它的值是十，而不是个位。所以专用性值为113>104。
*/

/*specificity:0024 */
div div li:nth-child(2) a:hover {
    border: 10px solid black;
}

/*specificity:0023 */
div li:nth-child(2) a:hover {
    border: 10px dashed black;
}

/*specificity:0033 */
div div .nav:nth-child(2) a:hover {
    border: 10px double black;
}
/*第五个-第七个选择器在“当鼠标放在链接上出现的样式”上进行竞争-第七个选择器获胜，使边框变成双线
    他们的专用性值分别为24 23 33
*/
a {
    display: inline-block;  /*不独占一行的块级元素:不独占一行+能够改变元素的height，width的值,可以设置padding，margin的各个属性值，top，left，bottom，right都能够产生边距效果. */
    line-height: 40px;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    width: 200px;
    margin-bottom: 10px;
}
ul {
    padding: 0;
}
li {
    list-style-type: none;
}
```
#### 源代码次序
如果多个相互竞争的选择器具有`相同`的`重要性`和`专用性`，那么第三个因素将帮助决定哪一个规则获胜——`后面的规则将战胜先前的规则`。例如:
```
p {
  color: blue;
}

/* This rule will win over the first one */
p {
  color: red;
}
```
而在这个例子中的`第一个规则`将获胜，因为`专用性高于源代码顺序`
```
/* This rule will win */
.footnote {
  color: blue;
}

p {
  color: red;
}
```

#### 规则混合
在考虑所有这些`层叠理论`和`什么样式优先于其他样式`被应用时，你应该记住的一件事是:
所有这些都发生在`属性级别`上——`属性覆盖其他属性`，但你`不会让整个规则凌驾于其他规则之上`(即一个规则不会完全覆盖另外一个规则，会有部分属性覆盖另外一个规则，也会出现属性的混合)。
```
<p>I'm <strong>important</strong></p>
```
```
/*specificity:0002 */
P strong {
    background-color: khaki;
    color: green;
}
/*specificity:0001 */
strong {
    text-decoration: underline;
    color: red;
}
/*
在这个例子中:
因为专用性的关系,第一条规则中的color属性覆盖掉了第二条中的颜色值。
但是，对于第一条中的 background-color和第二条中的text-decoration 的属性都在strong元素之中得到了体现。
你也注意到了这个元素之中的字体是加粗的：这是浏览器默认的样式规则。
*/
```


### 继承
CSS为处理继承提供了四种特殊的通用属性值：
- `inherit`： 该值将应用到选定元素的属性值设置为与其父元素一样。
- `initial` ：该值将应用到选定元素的属性值设置为与浏览器默认样式表中该元素设置的值一样。如果浏览器默认样式表中没有设置值，并且该属性是自然继承的，那么该属性值就被设置为 inherit。
- `unset` ：该值将属性重置为其自然值，即如果属性是自然继承的，那么它就表现得像 inherit，否则就是表现得像 initial。
- `revert` ：如果当前的节点没有应用任何样式，则将该属性恢复到它所拥有的值。换句话说，属性值被设置成自定义样式所定义的属性（如果被设置）， 否则属性值被设置成用户代理的默认样式。
`注意`: initial 和 unset 不被IE支持。
`inherit`值是最有趣的——它允许我们显式地`让一个元素`从其`父类`继承一个属性值。
例子：
```
<ul>
    <li>Default <a href="#">link</a> color</li>
    <li class="inherit">Inherit the <a href="#">link</a> color</li>
    <li class="initial">Reset the <a href="#">link</a> color</li>
    <li class="unset">Unset the <a href="#">link</a> color</li>
</ul>
```

```
body {
    color: green;   /*设置<body> 的color为绿色,注意的是默认情况下浏览器设置链接的颜色为蓝色,而不是自然继承color属性*/
}
.inherit a{
    color: inherit;   
    /*设置一个类 inherit 的元素内的链接，并从父类继承它的颜色。
    <body>-><ul>-><li>-><a>  继承了父元素的<body的颜色>*/
}
.initial a{
    color: initial;   /*设置他们的颜色为 initial 。通常， initial 的值被浏览器设置成了黑色，因此该链接被设置成了黑色。*/
}
.unset a{
    color: unset;  
    /* unset  ——即我们不设置值(包括默认情况下浏览器也不会设置链接为蓝色)。因为color属性是一个自然继承的属性
    它实际上就像把值设置成 inherit 一样。结果是，该链接被设置成了与body一样的颜色——绿色。*/
}
```














