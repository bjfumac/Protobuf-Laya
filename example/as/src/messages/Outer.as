package messages {
	public class Outer {
		public var bool:Vector.<Boolean>;
		public var double:Number;
		public static function create(): Outer {
			return __JS__('protobuf.roots.laya.mylaya.Outer.create();');
		}
		public static function encode(val:Outer):Uint8Array{
			return __JS__('protobuf.roots.laya.mylaya.Outer.encode(val).finish();');
		}
		public static function decode(val:Uint8Array): Outer {
			return __JS__('protobuf.roots.laya.mylaya.Outer.decode(val);');
		}
	}
}
