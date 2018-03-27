var fs = require('fs');
var fileName = process.argv.splice(2)[0];
var jsonObj = JSON.parse(fs.readFileSync(fileName));
// //console.log(JSON.stringify(jsonObj));

/*** 检测enum类 ***/
var enumNames = [];

function checkEnums(jsonObj,key){
	if(jsonObj["nested"]){
		var keys = Object.keys(jsonObj["nested"]);
		for(var i=0;i<keys.length;i++)
		{
			var newKey = (key)?(key+'.'+keys[i]):keys[i];
			checkEnums(jsonObj["nested"][keys[i]],newKey);
		}
	}
	if(jsonObj["values"]){
		var className;
		if(key){
			var classArr = key.split('.');
			className= classArr[classArr.length-1];
		}
		if(className) enumNames.push(className);
	}
}

function loopJson(jsonObj,key){
	if(jsonObj["nested"]){
		var keys = Object.keys(jsonObj["nested"]);
		for(var i=0;i<keys.length;i++)
		{
			var newKey = (key)?(key+'.'+keys[i]):keys[i];
			//console.log("newKey: "+newKey);
			loopJson(jsonObj["nested"][keys[i]],newKey);
		}
	}
	if(jsonObj["fields"]){
		exportFile(jsonObj["fields"],key);
	}
	if(jsonObj["values"]){
		exportValueFile(jsonObj["values"],key);
	}
}


function exportFile(jsonObj,key){
	var className = key;
	if(key){
		var classArr = key.split('.');
		className= classArr[classArr.length-1];
	}
	if(!className) className = '';
	//console.log("export file: "+className);
	writeAll(className,key,jsonObj);
}

function exportValueFile(jsonObj,key){
	var className = key;
	if(key){
		var classArr = key.split('.');
		className= classArr[classArr.length-1];
	}
	if(!className) className = '';
	//console.log("export value file: "+className);
	writeAllValues(className,jsonObj);
}
checkEnums(jsonObj);
//console.log(enumNames);
loopJson(jsonObj);






/*** File Writers ***/
function writePackage(fileName,packageName){
	fs.appendFileSync(fileName,"package "+ packageName + " {\n");
}

function writeClass(fileName,className){
	fs.appendFileSync(fileName,"	public class "+ className + " {\n");
}

function writeVariables(fileName,obj){
	var keys = Object.keys(obj);
	for(var i=0;i<keys.length;i++)
	{
		var key = keys[i];
		var type = obj[key].type;
		if(type == 'bool'){
			type = "Boolean";
		}else if(type.indexOf('int') >= 0){
			type = "Number";
		}else if(type.indexOf('fixed') >= 0){
			type = "Number";
		}else if(type == 'float' || type == 'double' || type == 'long'){
			type = "Number";
		}else if(type == 'string' || type == 'bytes'){
			type = "String";
		}else if(enumNames.indexOf(type) != -1){
			type = "Number";
		}
		if(obj[key].rule == 'repeated'){
			type = "Vector.<"+type+">";
		}
		fs.appendFileSync(fileName,"		public var "+ key + ":"+type+";\n");
	}
}

function writeEnumValues(fileName,obj){
	var keys = Object.keys(obj);
	for(var i=0;i<keys.length;i++)
	{
		var key = keys[i];
		fs.appendFileSync(fileName,"		public static var "+ key + ":Number = "+obj[key]+";\n");
	}
}
	

function writeFunctions(fileName,className,pakagePathName){
	//Create
	fs.appendFileSync(fileName,"		public static function create(): "+ className + " {\n");
	fs.appendFileSync(fileName,"			return __JS__('protobuf.roots.laya."+pakagePathName+".create();');\n");
	fs.appendFileSync(fileName,"		}\n");

	//encode
	fs.appendFileSync(fileName,"		public static function encode(val:"+className+"):Uint8Array{\n");
	fs.appendFileSync(fileName,"			return __JS__('protobuf.roots.laya."+pakagePathName+".encode(val).finish();');\n");
	fs.appendFileSync(fileName,"		}\n");

	//Decode
	fs.appendFileSync(fileName,"		public static function decode(val:Uint8Array): "+ className + " {\n");
	fs.appendFileSync(fileName,"			return __JS__('protobuf.roots.laya."+pakagePathName+".decode(val);');\n");
	fs.appendFileSync(fileName,"		}\n");

}

function writeEndings(fileName){
	fs.appendFileSync(fileName,"	}\n");
	fs.appendFileSync(fileName,"}\n");
}

function writeAll(className,pakagePathName,jsonObj){
	var filename = "/proto/as/messages/"+className+".as";
	writePackage(filename,"messages");
	writeClass(filename,className);
	writeVariables(filename,jsonObj)
	writeFunctions(filename,className,pakagePathName);
	writeEndings(filename);
}

function writeAllValues(className,jsonObj){
	var filename = "/proto/as/messages/"+className+".as";
	writePackage(filename,"messages");
	writeClass(filename,className);
	writeEnumValues(filename,jsonObj)
	writeEndings(filename);
}

