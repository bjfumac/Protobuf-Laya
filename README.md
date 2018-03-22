# protobuf-layabox-docker
A Docker image for creation protobuf files(Typescript and Javascript) compatible with layabox.
# 说明
随着H5网游的发展，开发者对长连接（Websocket）的使用率逐步上升，而对传输协议Protobuf的使用亦是开发环节中重要的一环。为了完善LayaAir对Protobuf的支持，本人制作了一个可以由proto文件生成可以在Laya中使用的Javascript和Typescript的Docker镜像。  
# 特点
* 生成器环境搭建由Docker自动完成，支持全部PC操作系统，运行在隔离环境中，不污染本地开发机。也可以请运维同学协助放到服务器上共享使用。
* 兼容LayaAir。
* 支持最新版Protobuf。
* 在LayaIDE中具有代码提示，方便coding。
# Docker镜像安装(以Linux系统为例)
```
git clone https://github.com/bjfumac/protobuf-layabox-docker.git
cd protobuf-layabox-docker
sudo docker build -t "bjfumac/protobuf-laya" .
-- 将下面这行命令中的~/local替换成本地存放proto文件的路径
docker run --name protobuf-laya -v ~/local:/proto -idt bjfumac/protobuf-laya
--每次重新开机后请执行下面这行命令
docker start protobuf-laya
-- 每次重新生成协议请执行下面这行命令
docker exec protobuf-laya sh build.sh
```
# Javascript项目用户
* 将生成的js文件和protobuf.js上传至bin/h5/res/文件夹中
* 在index.html中其它script标签之前添加如下代码：
```html
<script src='protobuf.js' loader='laya'></script>
<script src='生成的.js' loader='laya'></script>
```
* 然后就可以开始用啦。api使用请参考[Protobuf.js](https://github.com/dcodeIO/protobuf.js)
# Typescript项目用户
* **请务必保证proto文件具有package属性，否则会造成巨大的修改量**
* 将生成的js文件和protobuf.js上传至bin/h5/res/文件夹中
* 将生成的d.ts文件上传至libs文件夹中
* 打开d.ts文件并做如下修改：
```
删除第一行 import * as $protobuf from "protobufjs";
全文替换将export关键字修改为declare，将namespace关键字修改为module
```
* 在index.html中其它script标签之前添加如下代码：
```html
<script src='protobuf.js' loader='laya'></script>
<script src='生成的.js' loader='laya'></script>
```
* 然后就可以开始用啦，请忽略编译过程中d.ts的警告，对程序运行没有影响。api使用请参考[Protobuf.js](https://github.com/dcodeIO/protobuf.js)

