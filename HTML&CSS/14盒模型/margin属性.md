margin：CSS盒模型-框属性之一；

1.margin设定元素的四个方向（上下左右）的外边距：
margin-top
margin-right
margin-bottom
margin-left

2.指定的外边距允许为负数

3.margin的top和bottom属性对非替换内联元素无效，例如<span>和<code>?

4.语法：
```bash
形式语法: [ <length> | <percentage> | auto ]{1,4}
```

5.取值
接受1~4个可选参数，每个参数有三种格式：
length-指定一个固定的宽度，可以为负数
percentage-相对于该元素的包含块的宽度（相对于该块的百分比）。该值可以为负数
auto-浏览器会自动选择一个合适的margin来应用。它可以用于将一个块居中。比如，div { width:50%;  margin:0 auto; } 会把这个div容器水平居中。

```bash
margin: style                  /*单值语法  所有边缘 */   举例： margin: 1em; 
margin: vertical horizontal    /*二值语法  纵向 横向 */  举例： margin: 5% auto;
margin: top horizontal bottom  /*三值语法 上 横向 下*/   举例： margin: 1em auto 2em; 
margin: top right bottom left  /*四值语法 上 右 下 左*/  举例： margin: 2px 1em 0 auto;
```



