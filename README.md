# protobuf-layabox-docker
A Docker image for creation protobuf files(Typescript and Javascript) compatible with layabox.
# 说明
随着H5网游的发展，开发者对长连接（Websocket）的使用率逐步上升，而对传输协议Protobuf的使用亦是开发环节中重要的一环。为了完善LayaAir对Protobuf的支持，本人制作了一个可以由proto文件生成可以在Laya中使用的Javascript和Typescript的Docker镜像。  
# 特点
* **采用超小型Protobuf包（78k），远小于laya集成包（238k）。**
* **将PB协议生成静态代码，而非通过反射proto文件实现，因此序列化/反序列化性能高于反射模式。**
* **在LayaIDE中具有代码提示，方便coding。**
* 生成器环境搭建由Docker自动完成，支持全部PC及服务器操作系统，运行在隔离环境中，不污染本地开发机。也可以请运维同学协助部署到服务器上共享使用。
* 不调用eval指令，支持微信小程序。
* 支持最新版Protobuf。

# Docker镜像安装(以Linux系统为例)
```
git clone https://github.com/bjfumac/protobuf-layabox-docker.git
cd protobuf-layabox-docker
sudo docker build -t "bjfumac/protobuf-laya" .
-- 将下面这行命令中的~/local替换成本地存放proto文件的路径
docker run --name protobuf-laya -v ~/local:/proto -idt bjfumac/protobuf-laya
--以上Docker镜像安装完成
--每次开机后请执行下面这行命令
docker start protobuf-laya
-- 每次重新生成协议请执行下面这行命令
docker exec protobuf-laya sh build.sh
```
# Javascript项目用户
* 将生成的js文件和protobuf.js上传至bin/libs/文件夹中
* 在index.html中其它script标签之前添加如下代码：
```html
	<script type="text/javascript" src="libs/protobuf.js"></script>
	<script type="text/javascript" src="libs/生成的.js"></script>
```
* 然后就可以开始用啦。具体参考Example。
# Typescript项目用户
* **请务必保证proto文件头部具有package定义，否则可能会有问题。**
* 将生成的js文件和protobuf.js上传至bin/libs/文件夹中
* 将生成的d.ts文件上传至libs文件夹中
* 在index.html中其它script标签之前添加如下代码：
```html
	<script type="text/javascript" src="libs/protobuf.js"></script>
	<script type="text/javascript" src="libs/生成的.js"></script>
```
* 然后就可以开始用啦。具体参考Example。

