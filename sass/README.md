一、npm安装sass：
https://sass-lang.com/install
```
npm install -g sass
```

```
$sass --version
1.24.2 compiled with dart2js 2.7.0
```

二、learn sass
https://sass-lang.com/guide

1.监听单文件
```
sass --watch input.scss output.css
```
上述命令可以放在启动脚本中：
初始化一个package.json
```
npm init -y
```
添加脚本：
```
"scripts": {
  "dev": "sass --watch input.scss output.css"
}
```
启动：
```
npm run dev
```
启动命令后，进行编译，编译完成后处于监听状态，可以实时编译输入的scss

注意yarn的使用，以及npm和yarn的区别：
```
npm install -g yarn
```

参考：https://www.jianshu.com/p/254794d5e741
Yarn的优点？
- 速度快
- 安装版本统 - Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，Yarn 就会创建（或更新）yarn.lock 这个文件。这么做就保证了，每一次拉取同一个项目依赖时，使用的都是一样的模块版本
- 更简洁的输出
- 多注册来源处理
- 更好的语义化
- yarn改变了一些npm命令的名称，比如 yarn add/remove，感觉上比 npm 原本的 install/uninstall 要更清晰

Yarn和npm命令对比：
```
npm 	
yarn

npm install
yarn

npm install react --save 	
yarn add react

npm uninstall react --save 	
yarn remove react

npm install react --save-dev 	
yarn add react --dev

npm update --save 	
yarn upgrade
```

npm做的改进：
- 默认新增了类似yarn.lock的 package-lock.json
- git 依赖支持优化
- 文件依赖优化

目前暂时仍然使用npm包管理器

2.监听目录
直接启动监听
```
sass --watch sass:dist
```
或在package.json中配置启动脚本：
```
  "scripts": {
    "dev": "sass --watch sass:dist"
  }
```
启动：
```
npm run dev
```
注意：下面的例子均在package.json中配置启动脚本，直接通过npm run xxx形式启动编译和监听

3.变量-Variables
- 把反复使用的css属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值
- 如果你需要一个不同的值，只需要改变这个变量的值，则所有引用此变量的地方生成的值都会随之改变
- sass使用$符号来标识变量
3.1变量声明
```
变量              变量值/属性值
$highlight-color: #F90;
```
- 使用$符号来标识变量
- 任何可以用作css属性值的赋值都可以用作sass的变量值
- 属性值可以空格分割的多个属性值，如`$basic-border: 1px solid black;`或以逗号分割的多个属性值，如`$plain-font: "Myriad Pro"、Myriad、"Helvetica Neue"、Helvetica、"Liberation Sans"、Arial和sans-serif; sans-serif;`
- sass变量声明后并未生效，引用后才会生效

3.2变量定义的规则
- css规则只能写在选择器内部
- 与CSS属性不同，sass的规则可以（通过变量定义的方式）写在外部=>变量可以在规则块定义之外存在；
- 当变量定义在css规则块内，那么该变量只能在此规则块内使用

3.3变量的引用
- 凡是css属性的标准值（比如说1px或者bold）可存在的地方，变量就可以使用
- 在声明变量时，变量值也可以引用其他变量
- 注意通过粒度区分，为不同的值取不同名字比较实用

3.4变量名用中划线还是下划线分隔
sass的变量名可以与css中的属性名和选择器名称相同，包括中划线和下划线
中划线：$highlight-color
下划线：$highlight_color
使用中划线的方式更为普遍，这也是compass和本文都用的方式

- 中划线和下划线相互兼容
- 定义的变量和变量的引用中相互兼容
  用中划线声明的变量可以使用下划线的方式引用，反之亦然


4.嵌套-Nesting
4.1嵌套规则
css中重复写选择器是非常恼人的
如果要写一大串指向页面中同一块的样式时，往往需要一遍又一遍地写同一个ID以及其后代选择器
```css
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```
像这种情况，sass可以让你只写一遍，且使样式可读性更高
sass在输出css时会帮你把这些嵌套规则处理好，避免你的重复书写
```CSS
#content{
  article{
    h1 { color: #333 };
    p { margin-bottom: 1.4em }
  }
  aside {
     background-color: #EEE 
  }
}
```

大多数情况下这种简单的嵌套都没问题，但是有些场景下不行，比如你想要在嵌套的选择器里边立刻应用一个类似于:hover的伪类
为了解决这种以及其他情况，sass提供了一个特殊结构 &

4.2 父选择器的标识符&
```CSS
article a {
  color: blue;
  :hover { color: red }
}
```
这种情况会像后代选择器那样拼接：
`article a :hover { color: red }` 
这种情况sass就无法正常工作，达不到"article元素内链接的所有子元素在被hover时都会变成红色"的效果

解决之道为使用一个特殊的sass选择器，即父选择器 => &
```CSS
article a {
  color: blue;
  &:hover { color: red }
}
```
当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是&被父选择器直接替换：
`article a:hover { color: red }`



5.Partials-部分/分布
6.Modules
7.Mixins
8.Extend/Inheritance
9.Operators





https://sass-lang.com/guide
https://www.sass.hk
https://www.bilibili.com/video/av39876527
https://space.bilibili.com/390120104/favlist?fid=312496304&ftype=create


