import * as $protobuf from "protobufjs";
/** Namespace protos. */
export namespace protos {

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
        constructor(properties?: protos.IResponse);

        /** Response Code. */
        public Code: number;

        /** Response Msg. */
        public Msg: string;

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: protos.IResponse): protos.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link protos.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link protos.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.Response;

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
        public static fromObject(object: { [k: string]: any }): protos.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserMessage. */
    interface IUserMessage {

        /** UserMessage Name */
        Name?: (string|null);

        /** UserMessage Content */
        Content?: (string|null);
    }

    /** Represents a UserMessage. */
    class UserMessage implements IUserMessage {

        /**
         * Constructs a new UserMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IUserMessage);

        /** UserMessage Name. */
        public Name: string;

        /** UserMessage Content. */
        public Content: string;

        /**
         * Creates a new UserMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserMessage instance
         */
        public static create(properties?: protos.IUserMessage): protos.UserMessage;

        /**
         * Encodes the specified UserMessage message. Does not implicitly {@link protos.UserMessage.verify|verify} messages.
         * @param message UserMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IUserMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserMessage message, length delimited. Does not implicitly {@link protos.UserMessage.verify|verify} messages.
         * @param message UserMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IUserMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.UserMessage;

        /**
         * Decodes a UserMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.UserMessage;

        /**
         * Verifies a UserMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserMessage
         */
        public static fromObject(object: { [k: string]: any }): protos.UserMessage;

        /**
         * Creates a plain object from a UserMessage message. Also converts values to other types if specified.
         * @param message UserMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.UserMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewUser. */
    interface INewUser {

        /** NewUser Content */
        Content?: (string|null);
    }

    /** Represents a NewUser. */
    class NewUser implements INewUser {

        /**
         * Constructs a new NewUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.INewUser);

        /** NewUser Content. */
        public Content: string;

        /**
         * Creates a new NewUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewUser instance
         */
        public static create(properties?: protos.INewUser): protos.NewUser;

        /**
         * Encodes the specified NewUser message. Does not implicitly {@link protos.NewUser.verify|verify} messages.
         * @param message NewUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.INewUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewUser message, length delimited. Does not implicitly {@link protos.NewUser.verify|verify} messages.
         * @param message NewUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.INewUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.NewUser;

        /**
         * Decodes a NewUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.NewUser;

        /**
         * Verifies a NewUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewUser
         */
        public static fromObject(object: { [k: string]: any }): protos.NewUser;

        /**
         * Creates a plain object from a NewUser message. Also converts values to other types if specified.
         * @param message NewUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.NewUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewUser to JSON.
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
        constructor(properties?: protos.IRPCMsg);

        /** RPCMsg Route. */
        public Route: string;

        /** RPCMsg Msg. */
        public Msg: string;

        /**
         * Creates a new RPCMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RPCMsg instance
         */
        public static create(properties?: protos.IRPCMsg): protos.RPCMsg;

        /**
         * Encodes the specified RPCMsg message. Does not implicitly {@link protos.RPCMsg.verify|verify} messages.
         * @param message RPCMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IRPCMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RPCMsg message, length delimited. Does not implicitly {@link protos.RPCMsg.verify|verify} messages.
         * @param message RPCMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IRPCMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RPCMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.RPCMsg;

        /**
         * Decodes a RPCMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.RPCMsg;

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
        public static fromObject(object: { [k: string]: any }): protos.RPCMsg;

        /**
         * Creates a plain object from a RPCMsg message. Also converts values to other types if specified.
         * @param message RPCMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.RPCMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RPCMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AllMembers. */
    interface IAllMembers {

        /** AllMembers Members */
        Members?: (string[]|null);
    }

    /** Represents an AllMembers. */
    class AllMembers implements IAllMembers {

        /**
         * Constructs a new AllMembers.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IAllMembers);

        /** AllMembers Members. */
        public Members: string[];

        /**
         * Creates a new AllMembers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllMembers instance
         */
        public static create(properties?: protos.IAllMembers): protos.AllMembers;

        /**
         * Encodes the specified AllMembers message. Does not implicitly {@link protos.AllMembers.verify|verify} messages.
         * @param message AllMembers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IAllMembers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AllMembers message, length delimited. Does not implicitly {@link protos.AllMembers.verify|verify} messages.
         * @param message AllMembers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IAllMembers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllMembers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.AllMembers;

        /**
         * Decodes an AllMembers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.AllMembers;

        /**
         * Verifies an AllMembers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AllMembers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AllMembers
         */
        public static fromObject(object: { [k: string]: any }): protos.AllMembers;

        /**
         * Creates a plain object from an AllMembers message. Also converts values to other types if specified.
         * @param message AllMembers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.AllMembers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AllMembers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
