#FROM node:9.8
FROM registry.cn-hangzhou.aliyuncs.com/zuowenbo/nodejs
MAINTAINER bjfumac "macvsapple@gmail.com"
RUN npm install  protobufjs chalk minimist glob tmp semver uglify-js espree escodegen estraverse -g
VOLUME ["/proto/"]
WORKDIR /
ADD build.sh build.sh
ADD fix.js fix.js
ADD asconverter.js asconverter.js
RUN chmod 777 /build.sh
