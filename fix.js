var fs = require("fs");
var fileName = process.argv.splice(2)[0];

data = fs.readFileSync(fileName,"utf-8");
data = data.replace("import *", "//import *");
data =data.replace(/\(\$protobuf.(.*)\)/g,"any)");
data =data.replace(/\$protobuf.(.*)\)/g,"any)");
data =data.replace(/\$protobuf.(.*)\;/g,"any;");

data =data.replace(/export namespace /g,"declare module protobuf.roots.laya.");
data =data.replace(/namespace /g,"module ");
data =data.replace(/export /g,"declare ");

fs.writeFileSync(fileName,data,"utf-8");

