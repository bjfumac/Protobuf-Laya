package messages {
	public class Test {
		public var string:String;
		public var uint32:Number;
		public var inner:Inner;
		public var float:Number;
		public static function create(): Test {
			return __JS__('protobuf.roots.laya.mylaya.Test.create();');
		}
		public static function encode(val:Test):Uint8Array{
			return __JS__('protobuf.roots.laya.mylaya.Test.encode(val).finish();');
		}
		public static function decode(val:Uint8Array): Test {
			return __JS__('protobuf.roots.laya.mylaya.Test.decode(val);');
		}
	}
}
