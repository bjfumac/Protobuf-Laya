package {
	import laya.net.Loader;
	import laya.net.ResourceVersion;
	import laya.utils.Handler;
	import view.TestView;
	import laya.webgl.WebGL;
	import messages.*;
	import Laya.Label;
	
	public class LayaUISample {
		
		public function LayaUISample() {
			//初始化引擎
			Laya.init(600, 400,WebGL);
			
			//激活资源版本控制
            ResourceVersion.enable("version.json", Handler.create(this, beginLoad), ResourceVersion.FILENAME_VERSION);
		}
		
		private function beginLoad():void {
			//加载引擎需要的资源
			Laya.loader.load("res/atlas/comp.atlas", Handler.create(this, onLoaded));
		}
		
		private function onLoaded():void {
			var innerInner:InnerInner = new InnerInner();
			innerInner.enum = Enum.FOUR;
			innerInner.long = 666666666;
			innerInner.sint32 = 123;
			
			var inner:Inner = new Inner();
			inner.outer = outer;
			inner.int32 = 100;
			inner.innerInner = innerInner;

			var outer:Outer = new Outer();
			outer.bool = [true,true,true,true];
			outer.double = 33.22;

			var test:Test = new Test();
			test.float = 11.22;
			test.string = "str";
			test.uint32 = 88;
			test.inner = inner;

			//请注意encode是异步的，如果需要即时调用最后一定要加finish();这个没有代码提示。
			var encodBytes:Uint8Array = Test.encode(test);
			console.log(encodBytes);
			var newTest:Test = Test.decode(encodBytes);
			console.log(newTest);

			var txt:Label = new Label();
			txt.text =  "newTest.string ="+ newTest.string;
			txt.color = "#ffffff";
			txt.fontSize = 30;
			Laya.stage.addChild(txt);
			
		}
	}
}