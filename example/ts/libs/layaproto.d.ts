//import * as any;

/** Namespace mylaya. */
declare module protobuf.roots.laya.mylaya {

    /** Properties of a Test. */
    interface ITest {

        /** Test string */
        string?: (string|null);

        /** Test uint32 */
        uint32?: (number|null);

        /** Test inner */
        inner?: (mylaya.Test.IInner|null);

        /** Test float */
        float?: (number|null);
    }

    /** Represents a Test. */
    class Test implements ITest {

        /**
         * Constructs a new Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: mylaya.ITest);

        /** Test string. */
        public string: string;

        /** Test uint32. */
        public uint32: number;

        /** Test inner. */
        public inner?: (mylaya.Test.IInner|null);

        /** Test float. */
        public float: number;

        /**
         * Creates a new Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Test instance
         */
        public static create(properties?: mylaya.ITest): mylaya.Test;

        /**
         * Encodes the specified Test message. Does not implicitly {@link mylaya.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mylaya.ITest, writer?: any): any;

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link mylaya.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mylaya.ITest, writer?: any): any;

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: any): mylaya.Test;

        /**
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: any): mylaya.Test;

        /**
         * Verifies a Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Test
         */
        public static fromObject(object: { [k: string]: any }): mylaya.Test;

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @param message Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mylaya.Test, options?: any): { [k: string]: any };

        /**
         * Converts this Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    module Test {

        /** Properties of an Inner. */
        interface IInner {

            /** Inner int32 */
            int32?: (number|null);

            /** Inner innerInner */
            innerInner?: (mylaya.Test.Inner.IInnerInner|null);

            /** Inner outer */
            outer?: (mylaya.IOuter|null);
        }

        /** Represents an Inner. */
        class Inner implements IInner {

            /**
             * Constructs a new Inner.
             * @param [properties] Properties to set
             */
            constructor(properties?: mylaya.Test.IInner);

            /** Inner int32. */
            public int32: number;

            /** Inner innerInner. */
            public innerInner?: (mylaya.Test.Inner.IInnerInner|null);

            /** Inner outer. */
            public outer?: (mylaya.IOuter|null);

            /**
             * Creates a new Inner instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Inner instance
             */
            public static create(properties?: mylaya.Test.IInner): mylaya.Test.Inner;

            /**
             * Encodes the specified Inner message. Does not implicitly {@link mylaya.Test.Inner.verify|verify} messages.
             * @param message Inner message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mylaya.Test.IInner, writer?: any): any;

            /**
             * Encodes the specified Inner message, length delimited. Does not implicitly {@link mylaya.Test.Inner.verify|verify} messages.
             * @param message Inner message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mylaya.Test.IInner, writer?: any): any;

            /**
             * Decodes an Inner message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Inner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: any): mylaya.Test.Inner;

            /**
             * Decodes an Inner message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Inner
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: any): mylaya.Test.Inner;

            /**
             * Verifies an Inner message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Inner message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Inner
             */
            public static fromObject(object: { [k: string]: any }): mylaya.Test.Inner;

            /**
             * Creates a plain object from an Inner message. Also converts values to other types if specified.
             * @param message Inner
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mylaya.Test.Inner, options?: any): { [k: string]: any };

            /**
             * Converts this Inner to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        module Inner {

            /** Properties of an InnerInner. */
            interface IInnerInner {

                /** InnerInner long */
                long?: (number|Long|null);

                /** InnerInner enum */
                "enum"?: (mylaya.Test.Enum|null);

                /** InnerInner sint32 */
                sint32?: (number|null);
            }

            /** Represents an InnerInner. */
            class InnerInner implements IInnerInner {

                /**
                 * Constructs a new InnerInner.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mylaya.Test.Inner.IInnerInner);

                /** InnerInner long. */
                public long: (number|Long);

                /** InnerInner enum. */
                public enum: mylaya.Test.Enum;

                /** InnerInner sint32. */
                public sint32: number;

                /**
                 * Creates a new InnerInner instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InnerInner instance
                 */
                public static create(properties?: mylaya.Test.Inner.IInnerInner): mylaya.Test.Inner.InnerInner;

                /**
                 * Encodes the specified InnerInner message. Does not implicitly {@link mylaya.Test.Inner.InnerInner.verify|verify} messages.
                 * @param message InnerInner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mylaya.Test.Inner.IInnerInner, writer?: any): any;

                /**
                 * Encodes the specified InnerInner message, length delimited. Does not implicitly {@link mylaya.Test.Inner.InnerInner.verify|verify} messages.
                 * @param message InnerInner message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mylaya.Test.Inner.IInnerInner, writer?: any): any;

                /**
                 * Decodes an InnerInner message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InnerInner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: any): mylaya.Test.Inner.InnerInner;

                /**
                 * Decodes an InnerInner message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InnerInner
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: any): mylaya.Test.Inner.InnerInner;

                /**
                 * Verifies an InnerInner message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InnerInner message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InnerInner
                 */
                public static fromObject(object: { [k: string]: any }): mylaya.Test.Inner.InnerInner;

                /**
                 * Creates a plain object from an InnerInner message. Also converts values to other types if specified.
                 * @param message InnerInner
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mylaya.Test.Inner.InnerInner, options?: any): { [k: string]: any };

                /**
                 * Converts this InnerInner to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Enum enum. */
        enum Enum {
            ONE = 0,
            TWO = 1,
            THREE = 2,
            FOUR = 3,
            FIVE = 4
        }
    }

    /** Properties of an Outer. */
    interface IOuter {

        /** Outer bool */
        bool?: (boolean[]|null);

        /** Outer double */
        double?: (number|null);
    }

    /** Represents an Outer. */
    class Outer implements IOuter {

        /**
         * Constructs a new Outer.
         * @param [properties] Properties to set
         */
        constructor(properties?: mylaya.IOuter);

        /** Outer bool. */
        public bool: boolean[];

        /** Outer double. */
        public double: number;

        /**
         * Creates a new Outer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Outer instance
         */
        public static create(properties?: mylaya.IOuter): mylaya.Outer;

        /**
         * Encodes the specified Outer message. Does not implicitly {@link mylaya.Outer.verify|verify} messages.
         * @param message Outer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mylaya.IOuter, writer?: any): any;

        /**
         * Encodes the specified Outer message, length delimited. Does not implicitly {@link mylaya.Outer.verify|verify} messages.
         * @param message Outer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mylaya.IOuter, writer?: any): any;

        /**
         * Decodes an Outer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Outer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: any): mylaya.Outer;

        /**
         * Decodes an Outer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Outer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: any): mylaya.Outer;

        /**
         * Verifies an Outer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Outer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Outer
         */
        public static fromObject(object: { [k: string]: any }): mylaya.Outer;

        /**
         * Creates a plain object from an Outer message. Also converts values to other types if specified.
         * @param message Outer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mylaya.Outer, options?: any): { [k: string]: any };

        /**
         * Converts this Outer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
