package messages {
	public class Inner {
		public var int32:Number;
		public var innerInner:InnerInner;
		public var outer:Outer;
		public static function create(): Inner {
			return __JS__('protobuf.roots.laya.mylaya.Test.Inner.create();');
		}
		public static function encode(val:Inner):Uint8Array{
			return __JS__('protobuf.roots.laya.mylaya.Test.Inner.encode(val).finish();');
		}
		public static function decode(val:Uint8Array): Inner {
			return __JS__('protobuf.roots.laya.mylaya.Test.Inner.decode(val);');
		}
	}
}
