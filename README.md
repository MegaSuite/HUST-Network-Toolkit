<h1 align='center'>HUST Network Toolkit</h1>

## Click Stimulator

### Intro
基于浏览器的账号密码自动填充功能，通过添加自启动任务，开机解锁后会自动打开认证界面，浏览器自动填充账号密码，然后通过此脚本模拟点击登录按钮，实现自动登录。

### Usage

- 在`C:\Users\$USER\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`文件夹下创建快捷方式，填入校园网认证地址，例如：`http://192.168.50.3:8080/`，命名随便，保存之后，就会在开机解锁后自动打开浏览器进入认证界面。
- 记得打开浏览器的自动填充功能，否则无法自动填充账号密码。
- 浏览器安装插件：[Tampermonkey](https://www.tampermonkey.net/)，然后安装此脚本：[ClickStimulator](https://github.com/MegaSuite/HUST-Network-Toolkit/blob/main/ClickStimulator/ClickStimulator.user.js)
