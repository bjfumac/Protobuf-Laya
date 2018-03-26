import test = ui.test.TestPageUI;
import Label = Laya.Label;
import Handler = Laya.Handler;
import Loader = Laya.Loader;



//程序入口
Laya.init(600, 400);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad(){
	Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}

function onLoaded(): void {
	//实例UI界面
	var innerInner = new protobuf.roots.laya.mylaya.Test.Inner.InnerInner();
	innerInner.enum = protobuf.roots.laya.mylaya.Test.Enum.FOUR;
	innerInner.long = 666666666;
	innerInner.sint32 = 123;
	
	var inner = new protobuf.roots.laya.mylaya.Test.Inner();
	inner.outer = outer;
	inner.int32 = 100;
	inner.innerInner = innerInner;

	var outer = new protobuf.roots.laya.mylaya.Outer();
	outer.bool = [true,true,true,true];
	outer.double = 33.22;

	var test = new protobuf.roots.laya.mylaya.Test();
	test.float = 11.22;
	test.string = "str";
	test.uint32 = 88;
	test.inner = inner;

	//请注意encode是异步的，如果需要即时调用最后一定要加finish();这个没有代码提示。
	var encodBytes = protobuf.roots.laya.mylaya.Test.encode(test).finish();
	console.log(encodBytes);
	var newTest = protobuf.roots.laya.mylaya.Test.decode(encodBytes);
	console.log(newTest);

	var txt:Label = new Laya.Label();
	txt.text =  "newTest.string ="+ newTest.string;
	txt.color = "#ffffff";
	txt.fontSize = 30;
	Laya.stage.addChild(txt);
}