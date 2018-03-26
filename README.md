# protobuf-layabox-docker
A Docker image for creation protobuf files(Typescript and Javascript) compatible with layabox.
# 说明
&emsp;&emsp;随着H5网游的发展，开发者对长连接（Websocket）的使用率逐步上升，而对传输协议Protobuf的使用亦是开发环节中重要的一环。为了完善LayaAir对Protobuf的支持，本人制作了一个可以由proto文件生成可以在Laya中使用的Javascript和Typescript的Docker镜像。  
# 特点
* **采用超小型Protobuf包（21k），远小于laya集成包（238k）。**
* **将PB协议生成静态代码，而非通过反射proto文件实现，因此序列化/反序列化性能高于反射模式。**
* **在LayaIDE中具有代码提示，方便coding。**
* **不调用eval指令，支持微信小程序。**
* 生成器环境搭建由Docker自动完成，支持Win、Mac、Linux操作系统，运行在隔离环境中，不污染本地开发机。也可以请运维同学协助部署到服务器上共享使用。
* 支持最新版Protobuf。

# Docker镜像安装(以Linux系统为例)
* 首先在你的系统中随意创建一个目录（如/MyProto），把所有的proto文件拷贝进去，然后按照下面步骤进行操作：
```
	git clone https://github.com/bjfumac/protobuf-layabox-docker.git
	cd protobuf-layabox-docker
	sudo docker build -t "bjfumac/protobuf-laya" .
```
* 将下面这行命令中的/your/proto/path替换成本地存放proto文件的路径,如/MyProto。冒号后面的/proto不要改：
```
	sudo docker run --name protobuf-laya -v /your/proto/path:/proto -idt 
```
&emsp;&emsp;以/MyProto为例的参考：sudo docker run --name protobuf-laya -v /MyProto:/proto -idt 
bjfumac/protobuf-laya
* 以上Docker镜像安装完成，今后不再重复操作需要上面的步骤。
<br />

* 每次开机后请执行下面这行命令：
```
	sudo docker start protobuf-laya
```
* 需要重新生成协议时请执行下面这行命令(第一次执行可能会报错，再执行一次即可，以后就都正常了)：
```
	sudo docker exec protobuf-laya sh build.sh
```
* 在存放proto的文件夹（如/MyProto）中可以找到生成的js和ts文件了。

# Javascript项目用户
* 将生成的js文件和protobuf.js上传至bin/libs/文件夹中
* 将protobuf.min.js上传至bin/libs/min/文件夹中
* 在index.html中其它script标签之前添加如下代码：
```html
	<script type="text/javascript" src="libs/protobuf.js"></script>
	<script type="text/javascript" src="libs/生成的.js"></script>
```
* 然后就可以开始用啦。具体参考Example。
# Typescript项目用户
* **请务必保证proto文件头部具有package定义，否则可能会有问题。**
* 将生成的js文件和protobuf.js上传至bin/libs/文件夹中
* 将protobuf.min.js上传至bin/libs/min/文件夹中
* 将生成的d.ts文件上传至/libs文件夹中
* 在index.html中其它script标签之前添加如下代码：
```html
	<script type="text/javascript" src="libs/protobuf.js"></script>
	<script type="text/javascript" src="libs/生成的.js"></script>
```
* 然后就可以开始用啦。具体参考Example。

