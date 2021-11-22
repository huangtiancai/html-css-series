### 概述
网格布局Grid是最强大的 CSS 布局方案。
它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。以前，只能通过复杂的 CSS 框架达到的效果，现在浏览器内置了。

Grid与Flex的区别：
Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别
- Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局
- Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局
Grid 布局远比 Flex 布局强大。

### 基本概念
#### 容器和项目
采用网格布局的区域，称为"容器"（container）。
容器内部采用网格定位的子元素，称为"项目"（item）

- 网格容器 - Grid Container
- 网格项 - Grid Item 网格容器直接子元素
- 网格线 - Grid Line
- 网格单元 - Grid Cell
- ....


### Grid布局的属性
display:grid/inline-grid 网格容器
grid-template-columns    网格列
grid-template-rows       网格行