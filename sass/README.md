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
与CSS属性不同，变量可以在css规则块定义之外存在；
当变量定义在css规则块内，那么该变量只能在此规则块内使用
```
$nav-color: #F90;
nav {
  $width: 100px;
  width: $width;
  color: $nav-color;
}

//编译后

nav {
  width: 100px;
  color: #F90;
}
```
$nav-color这个变量定义在了规则块外边，所以在这个样式表中都可以像 nav规则块那样引用它;
$width这个变量定义在了nav的{ }规则块内，所以它只能在nav规则块 内使用=>可以在样式表的其他地方重新定义和使用$width变量

3.3变量的引用




4.嵌套-Nesting
5.Partials-部分/分布
6.Modules
7.Mixins
8.Extend/Inheritance
9.Operators





https://sass-lang.com/guide
https://www.sass.hk
https://www.bilibili.com/video/av39876527
https://space.bilibili.com/390120104/favlist?fid=312496304&ftype=create


