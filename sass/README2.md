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

2.监听目录
https://sass-lang.com/guide
https://www.sass.hk
https://www.bilibili.com/video/av39876527
https://space.bilibili.com/390120104/favlist?fid=312496304&ftype=create


