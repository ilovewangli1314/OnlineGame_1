import * as $protobuf from "protobufjs";
/** Namespace pbcommon. */
export namespace pbcommon {

    /** Properties of a Response. */
    interface IResponse {

        /** Response Code */
        Code?: (number|null);

        /** Response Msg */
        Msg?: (string|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbcommon.IResponse);

        /** Response Code. */
        public Code: number;

        /** Response Msg. */
        public Msg: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: pbcommon.IResponse): pbcommon.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link pbcommon.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbcommon.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link pbcommon.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbcommon.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbcommon.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbcommon.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): pbcommon.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbcommon.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RPCMsg. */
    interface IRPCMsg {

        /** RPCMsg Route */
        Route?: (string|null);

        /** RPCMsg Msg */
        Msg?: (string|null);
    }

    /** Represents a RPCMsg. */
    class RPCMsg implements IRPCMsg {

        /**
         * Constructs a new RPCMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbcommon.IRPCMsg);

        /** RPCMsg Route. */
        public Route: string;

        /** RPCMsg Msg. */
        public Msg: string;

        /**
         * Creates a new RPCMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RPCMsg instance
         */
        public static create(properties?: pbcommon.IRPCMsg): pbcommon.RPCMsg;

        /**
         * Encodes the specified RPCMsg message. Does not implicitly {@link pbcommon.RPCMsg.verify|verify} messages.
         * @param message RPCMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbcommon.IRPCMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RPCMsg message, length delimited. Does not implicitly {@link pbcommon.RPCMsg.verify|verify} messages.
         * @param message RPCMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbcommon.IRPCMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RPCMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbcommon.RPCMsg;

        /**
         * Decodes a RPCMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbcommon.RPCMsg;

        /**
         * Verifies a RPCMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RPCMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RPCMsg
         */
        public static fromObject(object: { [k: string]: any }): pbcommon.RPCMsg;

        /**
         * Creates a plain object from a RPCMsg message. Also converts values to other types if specified.
         * @param message RPCMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbcommon.RPCMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RPCMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
