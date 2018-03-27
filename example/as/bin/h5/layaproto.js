/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots.laya || ($protobuf.roots.laya = {});
    
    $root.mylaya = (function() {
    
        /**
         * Namespace mylaya.
         * @exports mylaya
         * @namespace
         */
        var mylaya = {};
    
        mylaya.Test = (function() {
    
            /**
             * Properties of a Test.
             * @memberof mylaya
             * @interface ITest
             * @property {string|null} [string] Test string
             * @property {number|null} [uint32] Test uint32
             * @property {mylaya.Test.IInner|null} [inner] Test inner
             * @property {number|null} [float] Test float
             */
    
            /**
             * Constructs a new Test.
             * @memberof mylaya
             * @classdesc Represents a Test.
             * @implements ITest
             * @constructor
             * @param {mylaya.ITest=} [properties] Properties to set
             */
            function Test(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Test string.
             * @member {string} string
             * @memberof mylaya.Test
             * @instance
             */
            Test.prototype.string = "";
    
            /**
             * Test uint32.
             * @member {number} uint32
             * @memberof mylaya.Test
             * @instance
             */
            Test.prototype.uint32 = 0;
    
            /**
             * Test inner.
             * @member {mylaya.Test.IInner|null|undefined} inner
             * @memberof mylaya.Test
             * @instance
             */
            Test.prototype.inner = null;
    
            /**
             * Test float.
             * @member {number} float
             * @memberof mylaya.Test
             * @instance
             */
            Test.prototype.float = 0;
    
            /**
             * Creates a new Test instance using the specified properties.
             * @function create
             * @memberof mylaya.Test
             * @static
             * @param {mylaya.ITest=} [properties] Properties to set
             * @returns {mylaya.Test} Test instance
             */
            Test.create = function create(properties) {
                return new Test(properties);
            };
    
            /**
             * Encodes the specified Test message. Does not implicitly {@link mylaya.Test.verify|verify} messages.
             * @function encode
             * @memberof mylaya.Test
             * @static
             * @param {mylaya.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.string != null && message.hasOwnProperty("string"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.string);
                if (message.uint32 != null && message.hasOwnProperty("uint32"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uint32);
                if (message.inner != null && message.hasOwnProperty("inner"))
                    $root.mylaya.Test.Inner.encode(message.inner, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.float != null && message.hasOwnProperty("float"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.float);
                return writer;
            };
    
            /**
             * Encodes the specified Test message, length delimited. Does not implicitly {@link mylaya.Test.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mylaya.Test
             * @static
             * @param {mylaya.ITest} message Test message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Test.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Test message from the specified reader or buffer.
             * @function decode
             * @memberof mylaya.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mylaya.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mylaya.Test();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.string = reader.string();
                        break;
                    case 2:
                        message.uint32 = reader.uint32();
                        break;
                    case 3:
                        message.inner = $root.mylaya.Test.Inner.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.float = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Test message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mylaya.Test
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mylaya.Test} Test
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Test.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Test message.
             * @function verify
             * @memberof mylaya.Test
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Test.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.string != null && message.hasOwnProperty("string"))
                    if (!$util.isString(message.string))
                        return "string: string expected";
                if (message.uint32 != null && message.hasOwnProperty("uint32"))
                    if (!$util.isInteger(message.uint32))
                        return "uint32: integer expected";
                if (message.inner != null && message.hasOwnProperty("inner")) {
                    var error = $root.mylaya.Test.Inner.verify(message.inner);
                    if (error)
                        return "inner." + error;
                }
                if (message.float != null && message.hasOwnProperty("float"))
                    if (typeof message.float !== "number")
                        return "float: number expected";
                return null;
            };
    
            /**
             * Creates a Test message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mylaya.Test
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mylaya.Test} Test
             */
            Test.fromObject = function fromObject(object) {
                if (object instanceof $root.mylaya.Test)
                    return object;
                var message = new $root.mylaya.Test();
                if (object.string != null)
                    message.string = String(object.string);
                if (object.uint32 != null)
                    message.uint32 = object.uint32 >>> 0;
                if (object.inner != null) {
                    if (typeof object.inner !== "object")
                        throw TypeError(".mylaya.Test.inner: object expected");
                    message.inner = $root.mylaya.Test.Inner.fromObject(object.inner);
                }
                if (object.float != null)
                    message.float = Number(object.float);
                return message;
            };
    
            /**
             * Creates a plain object from a Test message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mylaya.Test
             * @static
             * @param {mylaya.Test} message Test
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Test.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.string = "";
                    object.uint32 = 0;
                    object.inner = null;
                    object.float = 0;
                }
                if (message.string != null && message.hasOwnProperty("string"))
                    object.string = message.string;
                if (message.uint32 != null && message.hasOwnProperty("uint32"))
                    object.uint32 = message.uint32;
                if (message.inner != null && message.hasOwnProperty("inner"))
                    object.inner = $root.mylaya.Test.Inner.toObject(message.inner, options);
                if (message.float != null && message.hasOwnProperty("float"))
                    object.float = options.json && !isFinite(message.float) ? String(message.float) : message.float;
                return object;
            };
    
            /**
             * Converts this Test to JSON.
             * @function toJSON
             * @memberof mylaya.Test
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Test.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            Test.Inner = (function() {
    
                /**
                 * Properties of an Inner.
                 * @memberof mylaya.Test
                 * @interface IInner
                 * @property {number|null} [int32] Inner int32
                 * @property {mylaya.Test.Inner.IInnerInner|null} [innerInner] Inner innerInner
                 * @property {mylaya.IOuter|null} [outer] Inner outer
                 */
    
                /**
                 * Constructs a new Inner.
                 * @memberof mylaya.Test
                 * @classdesc Represents an Inner.
                 * @implements IInner
                 * @constructor
                 * @param {mylaya.Test.IInner=} [properties] Properties to set
                 */
                function Inner(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Inner int32.
                 * @member {number} int32
                 * @memberof mylaya.Test.Inner
                 * @instance
                 */
                Inner.prototype.int32 = 0;
    
                /**
                 * Inner innerInner.
                 * @member {mylaya.Test.Inner.IInnerInner|null|undefined} innerInner
                 * @memberof mylaya.Test.Inner
                 * @instance
                 */
                Inner.prototype.innerInner = null;
    
                /**
                 * Inner outer.
                 * @member {mylaya.IOuter|null|undefined} outer
                 * @memberof mylaya.Test.Inner
                 * @instance
                 */
                Inner.prototype.outer = null;
    
                /**
                 * Creates a new Inner instance using the specified properties.
                 * @function create
                 * @memberof mylaya.Test.Inner
                 * @static
                 * @param {mylaya.Test.IInner=} [properties] Properties to set
                 * @returns {mylaya.Test.Inner} Inner instance
                 */
                Inner.create = function create(properties) {
                    return new Inner(properties);
                };
    
                /**
                 * Encodes the specified Inner message. Does not implicitly {@link mylaya.Test.Inner.verify|verify} messages.
                 * @function encode
                 * @memberof mylaya.Test.Inner
                 * @static
                 * @param {mylaya.Test.IInner} message Inner message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Inner.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.int32 != null && message.hasOwnProperty("int32"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.int32);
                    if (message.innerInner != null && message.hasOwnProperty("innerInner"))
                        $root.mylaya.Test.Inner.InnerInner.encode(message.innerInner, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.outer != null && message.hasOwnProperty("outer"))
                        $root.mylaya.Outer.encode(message.outer, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Inner message, length delimited. Does not implicitly {@link mylaya.Test.Inner.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof mylaya.Test.Inner
                 * @static
                 * @param {mylaya.Test.IInner} message Inner message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Inner.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Inner message from the specified reader or buffer.
                 * @function decode
                 * @memberof mylaya.Test.Inner
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {mylaya.Test.Inner} Inner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Inner.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mylaya.Test.Inner();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.int32 = reader.int32();
                            break;
                        case 2:
                            message.innerInner = $root.mylaya.Test.Inner.InnerInner.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.outer = $root.mylaya.Outer.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Inner message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof mylaya.Test.Inner
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {mylaya.Test.Inner} Inner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Inner.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Inner message.
                 * @function verify
                 * @memberof mylaya.Test.Inner
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Inner.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.int32 != null && message.hasOwnProperty("int32"))
                        if (!$util.isInteger(message.int32))
                            return "int32: integer expected";
                    if (message.innerInner != null && message.hasOwnProperty("innerInner")) {
                        var error = $root.mylaya.Test.Inner.InnerInner.verify(message.innerInner);
                        if (error)
                            return "innerInner." + error;
                    }
                    if (message.outer != null && message.hasOwnProperty("outer")) {
                        var error = $root.mylaya.Outer.verify(message.outer);
                        if (error)
                            return "outer." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an Inner message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof mylaya.Test.Inner
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {mylaya.Test.Inner} Inner
                 */
                Inner.fromObject = function fromObject(object) {
                    if (object instanceof $root.mylaya.Test.Inner)
                        return object;
                    var message = new $root.mylaya.Test.Inner();
                    if (object.int32 != null)
                        message.int32 = object.int32 | 0;
                    if (object.innerInner != null) {
                        if (typeof object.innerInner !== "object")
                            throw TypeError(".mylaya.Test.Inner.innerInner: object expected");
                        message.innerInner = $root.mylaya.Test.Inner.InnerInner.fromObject(object.innerInner);
                    }
                    if (object.outer != null) {
                        if (typeof object.outer !== "object")
                            throw TypeError(".mylaya.Test.Inner.outer: object expected");
                        message.outer = $root.mylaya.Outer.fromObject(object.outer);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an Inner message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof mylaya.Test.Inner
                 * @static
                 * @param {mylaya.Test.Inner} message Inner
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Inner.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.int32 = 0;
                        object.innerInner = null;
                        object.outer = null;
                    }
                    if (message.int32 != null && message.hasOwnProperty("int32"))
                        object.int32 = message.int32;
                    if (message.innerInner != null && message.hasOwnProperty("innerInner"))
                        object.innerInner = $root.mylaya.Test.Inner.InnerInner.toObject(message.innerInner, options);
                    if (message.outer != null && message.hasOwnProperty("outer"))
                        object.outer = $root.mylaya.Outer.toObject(message.outer, options);
                    return object;
                };
    
                /**
                 * Converts this Inner to JSON.
                 * @function toJSON
                 * @memberof mylaya.Test.Inner
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Inner.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                Inner.InnerInner = (function() {
    
                    /**
                     * Properties of an InnerInner.
                     * @memberof mylaya.Test.Inner
                     * @interface IInnerInner
                     * @property {number|Long|null} [long] InnerInner long
                     * @property {mylaya.Test.Enum|null} ["enum"] InnerInner enum
                     * @property {number|null} [sint32] InnerInner sint32
                     */
    
                    /**
                     * Constructs a new InnerInner.
                     * @memberof mylaya.Test.Inner
                     * @classdesc Represents an InnerInner.
                     * @implements IInnerInner
                     * @constructor
                     * @param {mylaya.Test.Inner.IInnerInner=} [properties] Properties to set
                     */
                    function InnerInner(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * InnerInner long.
                     * @member {number|Long} long
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @instance
                     */
                    InnerInner.prototype.long = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                    /**
                     * InnerInner enum.
                     * @member {mylaya.Test.Enum} enum
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @instance
                     */
                    InnerInner.prototype["enum"] = 0;
    
                    /**
                     * InnerInner sint32.
                     * @member {number} sint32
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @instance
                     */
                    InnerInner.prototype.sint32 = 0;
    
                    /**
                     * Creates a new InnerInner instance using the specified properties.
                     * @function create
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @static
                     * @param {mylaya.Test.Inner.IInnerInner=} [properties] Properties to set
                     * @returns {mylaya.Test.Inner.InnerInner} InnerInner instance
                     */
                    InnerInner.create = function create(properties) {
                        return new InnerInner(properties);
                    };
    
                    /**
                     * Encodes the specified InnerInner message. Does not implicitly {@link mylaya.Test.Inner.InnerInner.verify|verify} messages.
                     * @function encode
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @static
                     * @param {mylaya.Test.Inner.IInnerInner} message InnerInner message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InnerInner.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.long != null && message.hasOwnProperty("long"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.long);
                        if (message["enum"] != null && message.hasOwnProperty("enum"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message["enum"]);
                        if (message.sint32 != null && message.hasOwnProperty("sint32"))
                            writer.uint32(/* id 3, wireType 0 =*/24).sint32(message.sint32);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified InnerInner message, length delimited. Does not implicitly {@link mylaya.Test.Inner.InnerInner.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @static
                     * @param {mylaya.Test.Inner.IInnerInner} message InnerInner message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InnerInner.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an InnerInner message from the specified reader or buffer.
                     * @function decode
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {mylaya.Test.Inner.InnerInner} InnerInner
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InnerInner.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mylaya.Test.Inner.InnerInner();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.long = reader.int64();
                                break;
                            case 2:
                                message["enum"] = reader.int32();
                                break;
                            case 3:
                                message.sint32 = reader.sint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an InnerInner message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {mylaya.Test.Inner.InnerInner} InnerInner
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InnerInner.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an InnerInner message.
                     * @function verify
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    InnerInner.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.long != null && message.hasOwnProperty("long"))
                            if (!$util.isInteger(message.long) && !(message.long && $util.isInteger(message.long.low) && $util.isInteger(message.long.high)))
                                return "long: integer|Long expected";
                        if (message["enum"] != null && message.hasOwnProperty("enum"))
                            switch (message["enum"]) {
                            default:
                                return "enum: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        if (message.sint32 != null && message.hasOwnProperty("sint32"))
                            if (!$util.isInteger(message.sint32))
                                return "sint32: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an InnerInner message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {mylaya.Test.Inner.InnerInner} InnerInner
                     */
                    InnerInner.fromObject = function fromObject(object) {
                        if (object instanceof $root.mylaya.Test.Inner.InnerInner)
                            return object;
                        var message = new $root.mylaya.Test.Inner.InnerInner();
                        if (object.long != null)
                            if ($util.Long)
                                (message.long = $util.Long.fromValue(object.long)).unsigned = false;
                            else if (typeof object.long === "string")
                                message.long = parseInt(object.long, 10);
                            else if (typeof object.long === "number")
                                message.long = object.long;
                            else if (typeof object.long === "object")
                                message.long = new $util.LongBits(object.long.low >>> 0, object.long.high >>> 0).toNumber();
                        switch (object["enum"]) {
                        case "ONE":
                        case 0:
                            message["enum"] = 0;
                            break;
                        case "TWO":
                        case 1:
                            message["enum"] = 1;
                            break;
                        case "THREE":
                        case 2:
                            message["enum"] = 2;
                            break;
                        case "FOUR":
                        case 3:
                            message["enum"] = 3;
                            break;
                        case "FIVE":
                        case 4:
                            message["enum"] = 4;
                            break;
                        }
                        if (object.sint32 != null)
                            message.sint32 = object.sint32 | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an InnerInner message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @static
                     * @param {mylaya.Test.Inner.InnerInner} message InnerInner
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    InnerInner.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.long = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.long = options.longs === String ? "0" : 0;
                            object["enum"] = options.enums === String ? "ONE" : 0;
                            object.sint32 = 0;
                        }
                        if (message.long != null && message.hasOwnProperty("long"))
                            if (typeof message.long === "number")
                                object.long = options.longs === String ? String(message.long) : message.long;
                            else
                                object.long = options.longs === String ? $util.Long.prototype.toString.call(message.long) : options.longs === Number ? new $util.LongBits(message.long.low >>> 0, message.long.high >>> 0).toNumber() : message.long;
                        if (message["enum"] != null && message.hasOwnProperty("enum"))
                            object["enum"] = options.enums === String ? $root.mylaya.Test.Enum[message["enum"]] : message["enum"];
                        if (message.sint32 != null && message.hasOwnProperty("sint32"))
                            object.sint32 = message.sint32;
                        return object;
                    };
    
                    /**
                     * Converts this InnerInner to JSON.
                     * @function toJSON
                     * @memberof mylaya.Test.Inner.InnerInner
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    InnerInner.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return InnerInner;
                })();
    
                return Inner;
            })();
    
            /**
             * Enum enum.
             * @name mylaya.Test.Enum
             * @enum {string}
             * @property {number} ONE=0 ONE value
             * @property {number} TWO=1 TWO value
             * @property {number} THREE=2 THREE value
             * @property {number} FOUR=3 FOUR value
             * @property {number} FIVE=4 FIVE value
             */
            Test.Enum = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ONE"] = 0;
                values[valuesById[1] = "TWO"] = 1;
                values[valuesById[2] = "THREE"] = 2;
                values[valuesById[3] = "FOUR"] = 3;
                values[valuesById[4] = "FIVE"] = 4;
                return values;
            })();
    
            return Test;
        })();
    
        mylaya.Outer = (function() {
    
            /**
             * Properties of an Outer.
             * @memberof mylaya
             * @interface IOuter
             * @property {Array.<boolean>|null} [bool] Outer bool
             * @property {number|null} [double] Outer double
             */
    
            /**
             * Constructs a new Outer.
             * @memberof mylaya
             * @classdesc Represents an Outer.
             * @implements IOuter
             * @constructor
             * @param {mylaya.IOuter=} [properties] Properties to set
             */
            function Outer(properties) {
                this.bool = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Outer bool.
             * @member {Array.<boolean>} bool
             * @memberof mylaya.Outer
             * @instance
             */
            Outer.prototype.bool = $util.emptyArray;
    
            /**
             * Outer double.
             * @member {number} double
             * @memberof mylaya.Outer
             * @instance
             */
            Outer.prototype.double = 0;
    
            /**
             * Creates a new Outer instance using the specified properties.
             * @function create
             * @memberof mylaya.Outer
             * @static
             * @param {mylaya.IOuter=} [properties] Properties to set
             * @returns {mylaya.Outer} Outer instance
             */
            Outer.create = function create(properties) {
                return new Outer(properties);
            };
    
            /**
             * Encodes the specified Outer message. Does not implicitly {@link mylaya.Outer.verify|verify} messages.
             * @function encode
             * @memberof mylaya.Outer
             * @static
             * @param {mylaya.IOuter} message Outer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Outer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bool != null && message.bool.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.bool.length; ++i)
                        writer.bool(message.bool[i]);
                    writer.ldelim();
                }
                if (message.double != null && message.hasOwnProperty("double"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.double);
                return writer;
            };
    
            /**
             * Encodes the specified Outer message, length delimited. Does not implicitly {@link mylaya.Outer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof mylaya.Outer
             * @static
             * @param {mylaya.IOuter} message Outer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Outer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Outer message from the specified reader or buffer.
             * @function decode
             * @memberof mylaya.Outer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {mylaya.Outer} Outer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Outer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.mylaya.Outer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.bool && message.bool.length))
                            message.bool = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.bool.push(reader.bool());
                        } else
                            message.bool.push(reader.bool());
                        break;
                    case 2:
                        message.double = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Outer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof mylaya.Outer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {mylaya.Outer} Outer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Outer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Outer message.
             * @function verify
             * @memberof mylaya.Outer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Outer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bool != null && message.hasOwnProperty("bool")) {
                    if (!Array.isArray(message.bool))
                        return "bool: array expected";
                    for (var i = 0; i < message.bool.length; ++i)
                        if (typeof message.bool[i] !== "boolean")
                            return "bool: boolean[] expected";
                }
                if (message.double != null && message.hasOwnProperty("double"))
                    if (typeof message.double !== "number")
                        return "double: number expected";
                return null;
            };
    
            /**
             * Creates an Outer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof mylaya.Outer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {mylaya.Outer} Outer
             */
            Outer.fromObject = function fromObject(object) {
                if (object instanceof $root.mylaya.Outer)
                    return object;
                var message = new $root.mylaya.Outer();
                if (object.bool) {
                    if (!Array.isArray(object.bool))
                        throw TypeError(".mylaya.Outer.bool: array expected");
                    message.bool = [];
                    for (var i = 0; i < object.bool.length; ++i)
                        message.bool[i] = Boolean(object.bool[i]);
                }
                if (object.double != null)
                    message.double = Number(object.double);
                return message;
            };
    
            /**
             * Creates a plain object from an Outer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof mylaya.Outer
             * @static
             * @param {mylaya.Outer} message Outer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Outer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.bool = [];
                if (options.defaults)
                    object.double = 0;
                if (message.bool && message.bool.length) {
                    object.bool = [];
                    for (var j = 0; j < message.bool.length; ++j)
                        object.bool[j] = message.bool[j];
                }
                if (message.double != null && message.hasOwnProperty("double"))
                    object.double = options.json && !isFinite(message.double) ? String(message.double) : message.double;
                return object;
            };
    
            /**
             * Converts this Outer to JSON.
             * @function toJSON
             * @memberof mylaya.Outer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Outer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Outer;
        })();
    
        return mylaya;
    })();

    return $root;
})(protobuf);
