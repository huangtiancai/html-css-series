简而言之，`选择器`是 CSS 规则的一部分且位于 CSS 声明块前

全局选择器|通配选择器
元素选择器
类选择器
id选择器

属性选择器

并集选择器 - 选择器组   选择器1,选择器2,选择器3{ style properties }
交集选择器 - 复合选择器 选择器1选择器2选择器3{ style properties }
后代选择器 - 祖先元素 后代元素{ style properties }
子选择器   - 父元素>子元素{ style properties }

相邻兄弟选择器 - A + B{ style properties }
通用兄弟选择器 - A ~ B { style properties }


详细：
### 不同种类的 CSS 选择器

- 简单选择器（Simple selectors）：通过元素类型、class 或 id 匹配一个或多个元素。
- 属性选择器（Attribute selectors）：通过 属性 / 属性值 匹配一个或多个元素。
- 伪类（Pseudo-classes）：匹配处于确定状态的一个或多个元素，比如被鼠标指针悬停的元素，或当前被选中或未选中的复选框，或元素是 DOM 树中一父节点的第一个子节点。
- 伪元素（Pseudo-elements）:匹配处于相关的确定位置的一个或多个元素，例如每个段落的第一个字，或者某个元素之前生成的内容。
- 组合器（Combinators）：这里不仅仅是选择器本身，还有以有效的方式组合两个或更多的选择器用于非常特定的选择的方法。例如，你可以只选择 divs 的直系子节点的段落，或者直接跟在 headings 后面的段落。
- 多重选择器（Multiple selectors）：这些也不是单独的选择器；这个思路是将以逗号分隔开的多个选择器放在一个 CSS 规则下面， 以将一组声明应用于由这些选择器选择的所有元素。

https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors