# Protobuf-Laya
A Docker image for creation protobuf files compatible with LayaAir(Layabox).
# 说明
&emsp;&emsp;支持Laya 2.x的版本请访问[这个仓库](https://github.com/bjfumac/Protobuf-MiniGame)

&emsp;&emsp;随着Html5游戏行业的发展，H5游戏的类型慢慢地从单机小游戏、轻交互休闲游戏到重交互竞技类游戏过渡，开发者对网络实时数据交互的需求开始上升，而数据交互的核心：交互协议的选择成了关键一环。 那么我们该选什么样的数据交互协议呢？<br />
&emsp;&emsp;如果你的项目只需要个排行榜这样的功能，那么xml、json足够满足你的需求，开发流程简单，游戏包体小巧。<br />
&emsp;&emsp;如果你的项目前后端交互较多，甚至是实时交互，那么我推荐选择Protobuf，它是google创造的一种数据交换的格式，广泛地应用在各种互联网场景中。在网络游戏中，Protobuf亦大放光彩。大多数实时网游的数据交互协议都是采用Protobuf或是它的变体实现的。我相信你一定听说过它。<br />
&emsp;&emsp;由于JavaScript有多种模块化机制，彼此兼容性较差，导致官方的Protobuf在LayaAir中使用困难。在社区中也经常有人会问到相关问题。因此为了完善LayaAir对Protobuf的支持，本人制作了一个基于Docker的Protobuf生成器以解决上述问题。  
# 特点
* **采用超小型Protobuf包（21k），远小于旧集成包（238k）。**
* **将PB协议生成静态代码，而非通过反射proto文件实现，因此拥有更高的序列化/反序列化性能。**
* **协议结构体在LayaIDE中具有完整的代码提示和类型检测，无需hard code，避免拼写造成的潜在错误，提高开发效率。**
* **不调用eval和其它动态指令，支持微信小程序。**
* 同时支持ActionScript、JavaScript和TypeScript项目。
* 生成器环境搭建由Docker自动完成，支持Win、Mac、Linux操作系统，运行在隔离环境中，不污染本地开发机。也可以请运维同学协助部署到服务器上共享使用。
* 支持最新版Protobuf。

# Docker镜像安装(以Linux系统为例)
* 首先安装Docker，Linux只需要一行命令，Win10有安装包。官方[下载地址](https://www.docker.com/community-edition)和[安装手册](https://docs.docker.com/engine/installation/linux/)。搞不定英文的同学请找度娘或者运维同事秒解，也可以直接买个公网docker容器。
* 在你的系统中随意创建一个目录（如/MyProto），建议选择FTP中的文件夹，把所有的proto文件拷贝进去，然后在命令行中按照下面步骤进行操作（复制时不要遗漏命令行最后面的点）：
```
	 git clone https://github.com/bjfumac/protobuf-laya.git;cd protobuf-laya;sudo docker build -t "bjfumac/protobuf-laya" .;
```
* 将下面这行命令中的/your/proto/path替换成本地存放proto文件的路径（如/MyProto）。冒号后面的/proto不要改：
```
	sudo docker run --name protobuf-laya -v /your/proto/path:/proto -idt bjfumac/protobuf-laya
```
&emsp;&emsp;以/MyProto为例的参考：sudo docker run --name protobuf-laya -v /MyProto:/proto -idt 
bjfumac/protobuf-laya
* 以上Docker镜像安装完成，今后不再需要操作上面的步骤。
<br />

* 每次需要生成协议时请执行下面这行命令：
```
	sudo docker start protobuf-laya;sudo docker exec protobuf-laya sh build.sh
```
* 在存放proto的文件夹（如/MyProto）中可以找到生成的as、js和ts文件了。

# Javascript项目用户
* 将生成的js文件和protobuf.js拷贝至项目bin/libs/文件夹中
* 将protobuf.min.js拷贝至项目bin/libs/min/文件夹中
* 在index.html中其它script标签之前添加如下代码：
```html
	<script type="text/javascript" src="libs/protobuf.js"></script>
	<script type="text/javascript" src="libs/生成的.js"></script>
```
* 然后就可以开始用啦。具体参考Example。
# Typescript项目用户
* **请务必保证proto文件头部具有package定义，否则可能会有问题。**
* 将生成的js文件和protobuf.js拷贝至项目bin/libs/文件夹中
* 将protobuf.min.js拷贝至项目bin/libs/min/文件夹中
* 将生成的d.ts文件和protobuf.d.ts拷贝至项目/libs文件夹中
* 在index.html中其它script标签之前添加如下代码：
```html
	<script type="text/javascript" src="libs/protobuf.js"></script>
	<script type="text/javascript" src="libs/生成的.js"></script>
```
* 然后就可以开始用啦。具体参考Example。
# Actioncript项目用户
* 将生成的js文件和protobuf.js拷贝至项目bin/h5/文件夹中
* 将生成的as/messages文件夹拷贝至项目src文件夹中
* 在index.html中其它script标签之前添加如下代码：
```html
	<script type="text/javascript" src="libs/protobuf.js"></script>
	<script type="text/javascript" src="libs/生成的.js"></script>
```
* 然后就可以开始用啦。具体参考Example。
* **感谢宫晨同学提供的AS项目支持**

#### 欢迎在LAYA官方QQ群:135887157 交流使用心得 
#### 本人QQ:68552233 （反馈问题可联系）
#### 如果觉得对你的项目有帮助，欢迎微信打赏请我喝一杯咖啡，谢谢^^
![avatar](https://github.com/bjfumac/Asset/raw/master/images/wx_ma.jpg)

