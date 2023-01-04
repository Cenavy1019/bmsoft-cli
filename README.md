# bmsoft-cli
整合各个模板的快速脚手架, 提高生产力.

## 安装
```
npm i bmsoft-cli -g
cnpm i bmsoft-cli -g
yarn add bmsoft-cli -g
```
## 功能
### 项目初始化
```
bmsoft init <you project name>
```
### 帮助
```
bmsoft help
```
### 查看版本
```
bmsoft -V
```
## 提供模板
### 1. uniapp weapp
基于uniapp的小程序快速模板, 预置了常规组件和方法


**自定义配置**
-  es – 将软件包保存为ES模块文件
- cjs – CommonJS，适用于 Node 和 Browserify/Webpack
- amd 异步模块定义，用于像RequireJS这样的模块加载器
- umd – 通用模块定义，以amd，cjs 和 iife 为一体 
