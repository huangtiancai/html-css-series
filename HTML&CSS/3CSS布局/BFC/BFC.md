定位方案:
1. 普通流：
自上而下布局
行内：水平排列
块级元素：渲染为完整的一行

2. 浮动 * 清除浮动
3. 绝对定位、相对定位

BFC - 块格式化上下文（Block Formatting Context，BFC）  -> 属于普通流
1. 可以看成元素的一种属性
2. 元素拥有BFC,元素就可以看作是隔离的独立容器，容器里面的元素不会在布局上影响到外面的元素
3. 如何触发BFC(如何为元素添加BFC属性)
  - 根元素（<html>）
  - `浮动元素（元素的 float 不是 none）`
  - 绝对定位元素（元素的 position 为 absolute 或 fixed）
  - 行内块元素（元素的 display 为 inline-block）
  - 表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值）
  - 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
  - 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、- - tbody、thead、tfoot 的默认属性）或 inline-table）
  - overflow 计算值(Computed)不为 visible 的块元素
  - contain 值为 layout、content 或 paint 的元素
  - display 值为 flow-root 的元素
  - 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
  - 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
  - 多列容器（元素的 column-count 或 column-width (en-US) 不为 auto，包括 column-count 为 1） -> 瀑布流
  - column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

BFC特性，作用；
1. 避免外边距重叠（外边距塌陷）
2. 清楚浮动
3. 阻止元素被福哦的那个元素覆盖