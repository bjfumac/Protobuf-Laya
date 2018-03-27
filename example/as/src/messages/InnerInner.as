package messages {
	public class InnerInner {
		public var long:Number;
		public var enum:Number;
		public var sint32:Number;
		public static function create(): InnerInner {
			return __JS__('protobuf.roots.laya.mylaya.Test.Inner.InnerInner.create();');
		}
		public static function encode(val:InnerInner):Uint8Array{
			return __JS__('protobuf.roots.laya.mylaya.Test.Inner.InnerInner.encode(val).finish();');
		}
		public static function decode(val:Uint8Array): InnerInner {
			return __JS__('protobuf.roots.laya.mylaya.Test.Inner.InnerInner.decode(val);');
		}
	}
}
