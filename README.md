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
### 1. 基于vue2+uniapp2.0.0稳定版的小程序项目
基于uniapp的小程序稳定版快速模板, 预置了常规组件和全局方法

### 2. 基于vue3 + ts + webpack 的项目
内置了elementplus, 预置了常规组件和全局方法

### 3. 基于vue3 + vite 的简易项目
内置了elementplus, 预置了常规组件和全局方法(待更新)
### 4. 基于vue2 + vant2 + less的移动端项目
内置了vant2, 预置了常规组件和全局方法

### Q & A
Q: mac下安装出现`access denied` 或 `permission denied` 没权限的提示
A: 运行命令最前面加上`sudo`输入开机密码来安装, 如`sudo npm install bmsoft -g`

Q: window上安装后运行提示无法加载文件`C:\Users\hankin\AppData\Roaming\npm\bmsoft.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。所在位置 行:1 字符: 1`
A: 运行命令 `set-ExecutionPolicy RemoteSigned`, 输入 `Y` 回车确认, 再次运行`bmsoft` 相关命令正常
