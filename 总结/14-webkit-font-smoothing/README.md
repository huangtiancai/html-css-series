关于-webkit-font-smoothing属性

1. font-smoothing
font-smoothing不是标准的CSS3属性，曾出现在提案中，最终被移除。
前缀-webkit是chrome和safari的私有属性，-moz是Firefox的私有属性。

2. -webkit-font-smoothing
-webkit-font-smoothing有三个值:none，subpixel-antialiased，antialiased
-webkit-font-smoothing：none，无抗锯齿。
-webkit-font-smoothing：subpixel-antialiased，默认值，效果一般。
-webkit-font-smoothing：antialiased，抗锯齿，字体清晰。

3. -moz-osx-font-smoothing
-moz-osx-font-smoothing，是火狐针对ios系统制定的规则，有两个值，inherit，grayscale（字体抗锯齿，比较清晰）

4. 总结

为了尽可能的使字体好看，设置:
```css
{
  -webkit-font-smoothing: antialiased; /*chrome、safari*/
  -moz-osx-font-smoothing: grayscale; /*firefox*/
}
```
当符合条件时字体好看，不影响其他情况下的字体展现。