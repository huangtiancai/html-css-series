CSS预处理器(css preprocessor)，Sass便是其中之一

Sass (Syntactically Awesome StyleSheets)是css的一个扩展开发工具，它允许你使用变量、条件语句等，使开发更简单可维护。
官方文档：https://sass-lang.com/documentation

一、环境准备
sass基于Ruby语言开发而成，因此安装sass前需要安装Rub
官网下载Rub:https://rubyinstaller.org/downloads
rubyinstaller-devkit-2.5.7-1-x64.exe

注意版本下载的问题，版本过高会影响后续sass的安装，2.7版本经测试影响安装sass

安装完成后需测试安装有没有成功,运行CMD输入以下命令：
```
$ ruby -v
ruby 2.7.0p0 (2019-12-25 revision 647ee6f091) [x64-mingw32]
```

请尽可能用比较新的 RubyGems 版本，建议 2.6.x 以上。
```
gem update --system //该命令请翻墙一下
$ gem -v
3.1.2
```

```
//删除替换原gem源
$ gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
https://gems.ruby-china.com/ added to sources
https://rubygems.org/ removed from sources

//打印是否替换成功
$ gem sources -l
*** CURRENT SOURCES ***

https://gems.ruby-china.com/

# 确保只有 gems.ruby-china.com
```

二、sass安装
Ruby自带一个叫做RubyGems的系统，用来安装基于Ruby的软件。我们可以使用这个系统来 轻松地安装Sass和Compass。
要安装最新版本的Sass和Compass，你需要输入下面的命令：
```
//安装如下(如mac安装遇到权限问题需加 sudo gem install sass)
gem install sass
gem install compass
```
安装完成之后，你应该通过运行下面的命令来确认应用已经正确地安装到了电脑中：
```
sass -v
compass -v
```
如下sass常用更新、查看版本、sass命令帮助等命令：
```
//更新sass
gem update sass

//查看sass版本
sass -v

//查看sass帮助
sass -h
```

三、编译sass
Sass文件后缀为 .scss，因此要编译成 .css 文件
1.命令行编译
```
sass 
```

















