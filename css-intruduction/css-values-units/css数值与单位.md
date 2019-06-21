本文将会涉及如下CSS的值：
- 数值: 长度值，用于指定例如元素宽度、边框（border）宽度或字体大小；以及无单位整数。用于指定例如相对线宽或运行动画的次数。
- 百分比: 可以用于指定尺寸或长度——例如取决于父容器的长度或高度，或默认的字体大小。
- 颜色: 用于指定背景颜色，字体颜色等。
- 坐标位置: 例如，以屏幕的左上角为坐标原点定位元素的位置。
- 函数: 例如，用于指定背景图片或背景图片渐变。

### 数值
#### 长度和尺寸
`像素 (px)` 是一种`绝对单位`（absolute units）， 因为无论其他相关的设置怎么变化，`像素指定的值是不会变化的`。
相对单位，他们是相对于当前元素的字号（ font-size ）或者视口（viewport ）尺寸:
`em`:1em与当前元素的字体大小相同（更具体地说，一个大写字母M的宽度）。CSS样式被应用之前，浏览器给网页设置的`默认基础字体大小`是`16像素`，这意味着对一个元素来说1em的计算值`默认为16像素`。
```
/*设置了第一个段落的 margin，padding 和 border-width*/
p {
    margin: 5px;
    padding: 10px;
    border: 2px solid black;
    background-color: cyan;
}
/*p元素的顺数第一个子元素*/
p:nth-child(1){
    width: 150px;
    font-size: 18px;
}
/*p元素的顺数第二个子元素*/
p:nth-child(2){
    width: 400px;
    font-size: 30px;
}
/*p元素的倒数第二个子元素*/
p:nth-last-child(3){
    width: 300px;
    font-size: 25px;
}
```

#### 无单位的值
例如，如果你想让一个元素`完全去除外边框和内边框`，你可以`只使用无单位的0`——因为0就是0，不管单位是什么！
```
margin:0;
```
无单位的行高:
另一个例子是 `line-height`，设置元素中`每行文本`的高度。
你可以`使用单位`设置特定的行的高度，但`使用一个无单位的值`往往更容易，它就像一个简单的乘法因子。
```
/*无单位的行高*/
p:nth-last-child(1) {
    line-height: 1.5;/*默认是font-size的值为16px; 行高为1.5即1.5倍，也就是24px*/
}
```

### 百分比
大部分`使用特定数值指定`的内容同样可以`使用百分比`来指定。这使的我们可以创建那些，例如，其宽度总是会被调整到`其父容器宽度一定的百分比`。而那些宽度被设置为某个固定单位值（如px或em）的盒子，它们总是保持固定的尺寸，`即使它们父容器的宽度发生变化`。

```
div .boxes {
    margin: 10px;
    font-size: 200%;
    height: 150px;
    border: 2px solid black;
}

.boxes:nth-child(1) {
    background-color: red;
    width: 80%;
}

.boxes:nth-child(2) {
    background-color: yellow;
    width: 40%;
}
```
这`两种不同的框布局类型`通常被称为`动态（流体）布局`（跟随浏览器视口大小的变化）和`固定宽度布局`（不管怎样都保持不变），两种布局方式有着不同的应用场景：
- 可以使用`动态布局`来确保标准文档始终适合于屏幕，并且可以在不同大小的移动设备屏幕上表现良好。
- 一个`固定宽度的布局`可以用来保持`在线地图的大小相同`；浏览器视口可以在地图上滚动，只在一个时间内查看一定数量的地图。您可以立即看到的量取决于您的视口有多大。

### 颜色
现代计算机中可用的标准颜色系统是24位，通过不同的红、绿、蓝通道，每个通道有256种不同的值，从而显示出大约1670万种不同的颜色。  (256 x 256 x 256 = 16,777,216.)
注意：三原色：红、绿、蓝
1. 关键词
CSS中最简单、最古老的颜色类型就是[颜色关键词](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#Color_keywords)。这些都是代表特定颜色值的特定字符串。例如，下面的代码:

```
p {
  background-color: red;
}
```
2. 十六进制值
十六进制颜色或十六进制代码:哈希/磅符号（#）+十六进制数
这些值比较复杂，不太容易理解，但是它们比关键字更灵活——您可以使用十六进制值来表示您想要在颜色方案中使用的任何颜色。
```
/*# + 十六进制值*/
p:nth-child(3){
    background-color: #ff0000;
}
p:nth-child(4){
    background-color: #0000ff;
}
p:nth-child(5){
    background-color:  #e0b0ff;
}
```
3. RGB
一个RGB值是`一个函数`——rgb() ——给定的三个参数，分别表示`红色，绿色和蓝色`通道的颜色值，这与十六进制值的工作方式大致相同。区别在于，RGB中每个通道不是由两个十六进制数字表示的，而是`由0到255之间`的`十进制数`表示的。
`RGB值`的支持度与`十六进制`不相上下，在你的工作中你可能不会遇到不支持它们的浏览器。
```
/*RGB*/
p:nth-child(6){
    background-color: rgb(255,0,0);
}
p:nth-child(7){
    background-color: rgb(0,0,255);
}
p:nth-child(8){
    background-color: rgb(224,176,255);
}
```
4. HSL
支持度比RGB稍微差一点的是`HSL`（旧版本的IE浏览器不支持），这是在众多开发者对其产生兴趣之后才实现的——`hsl()函数`接受三个表示`色调、饱和度以及明度`的参数，使用与上述三种不同的方式来区分大约1670万种颜色：
5. RGBA 和 HSLA
RGBA和HSLA——不仅允许您设置想要显示的颜色,还有此颜色的`透明度`（ transparency ）。
它们和与之相应的函数采用同样的参数,再`加上第四个范围在0-1的值`——`设置透明度`,或者说`alpha通道`。
0是完全透明的,1是完全不透明的。
```
p:nth-child(1){
    background-color: rgba(255, 0, 0, 0.3);
    position: relative;
    top: 30px;
    left: 50px;
}
p:nth-child(2){
    background-color: hsla(240, 100%, 50%, 0.3);
}
```
6. 不透明度（Opacity）
还有另一种方法来指定透明度，通过CSS——opacity 属性。与`设置某个特定颜色的透明度`相比，这会设置`所有选定元素`以及它们的`子节点的不透明度`。为了看出他们的区别，我们来研究下面这个例子：
```
/* Red with RGBA */
p:nth-child(1){
    background-color: rgba(255,0,0,0.2);
}
/* Red with opacity */
p:nth-child(2){
    background-color: rgb(255, 0, 0);
    opacity: 0.2;
}
```
注意区别:
第一个盒子使用`RGBA`颜色，只有一个`半透明的背景`.
第二个盒子里的`都是透明的`，`包括文本`。您要仔细思考使用两者的时机——
例如，当您想创建一个覆盖图片的标题，图片能透过标题显示，且标题的文本显示不受影响，此时应该使用RGBA修改标题背景色的透明度；
另一方面，当您想要创建一个动画效果，让整个UI元素从完全隐藏到可见，此时应该使用不透明度（Opacity）。

### 函数
上述的函数rgb(),hls(),rgba(),hsla()   
其他地方也会看到函数：
```
/* calculate the new position of an element after it has been rotated by 45 degress */
transform: rotate(45deg);
/* calculate the new position of an element after it has been moved across 50px and down 60px */
transform: translate(50px, 60px);
/* calculate the computed value of 90% of the current width minus 15px */
width: calc(90% - 15px);
/* fetch an image from the network to be used as a background image */
background-image: url('myimage.png');
```
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





















































































































