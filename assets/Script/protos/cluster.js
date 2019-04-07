/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protos = (function() {

    /**
     * Namespace protos.
     * @exports protos
     * @namespace
     */
    var protos = {};

    protos.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof protos
         * @interface IResponse
         * @property {number|null} [Code] Response Code
         * @property {string|null} [Msg] Response Msg
         */

        /**
         * Constructs a new Response.
         * @memberof protos
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {protos.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response Code.
         * @member {number} Code
         * @memberof protos.Response
         * @instance
         */
        Response.prototype.Code = 0;

        /**
         * Response Msg.
         * @member {string} Msg
         * @memberof protos.Response
         * @instance
         */
        Response.prototype.Msg = "";

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof protos.Response
         * @static
         * @param {protos.IResponse=} [properties] Properties to set
         * @returns {protos.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link protos.Response.verify|verify} messages.
         * @function encode
         * @memberof protos.Response
         * @static
         * @param {protos.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && message.hasOwnProperty("Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link protos.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.Response
         * @static
         * @param {protos.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof protos.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof protos.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.Response)
                return object;
            var message = new $root.protos.Response();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.Response
         * @static
         * @param {protos.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof protos.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    protos.UserMessage = (function() {

        /**
         * Properties of a UserMessage.
         * @memberof protos
         * @interface IUserMessage
         * @property {string|null} [Name] UserMessage Name
         * @property {string|null} [Content] UserMessage Content
         */

        /**
         * Constructs a new UserMessage.
         * @memberof protos
         * @classdesc Represents a UserMessage.
         * @implements IUserMessage
         * @constructor
         * @param {protos.IUserMessage=} [properties] Properties to set
         */
        function UserMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMessage Name.
         * @member {string} Name
         * @memberof protos.UserMessage
         * @instance
         */
        UserMessage.prototype.Name = "";

        /**
         * UserMessage Content.
         * @member {string} Content
         * @memberof protos.UserMessage
         * @instance
         */
        UserMessage.prototype.Content = "";

        /**
         * Creates a new UserMessage instance using the specified properties.
         * @function create
         * @memberof protos.UserMessage
         * @static
         * @param {protos.IUserMessage=} [properties] Properties to set
         * @returns {protos.UserMessage} UserMessage instance
         */
        UserMessage.create = function create(properties) {
            return new UserMessage(properties);
        };

        /**
         * Encodes the specified UserMessage message. Does not implicitly {@link protos.UserMessage.verify|verify} messages.
         * @function encode
         * @memberof protos.UserMessage
         * @static
         * @param {protos.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified UserMessage message, length delimited. Does not implicitly {@link protos.UserMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.UserMessage
         * @static
         * @param {protos.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer.
         * @function decode
         * @memberof protos.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.UserMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMessage message.
         * @function verify
         * @memberof protos.UserMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a UserMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.UserMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.UserMessage} UserMessage
         */
        UserMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.UserMessage)
                return object;
            var message = new $root.protos.UserMessage();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a UserMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.UserMessage
         * @static
         * @param {protos.UserMessage} message UserMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Content = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this UserMessage to JSON.
         * @function toJSON
         * @memberof protos.UserMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMessage;
    })();

    protos.NewUser = (function() {

        /**
         * Properties of a NewUser.
         * @memberof protos
         * @interface INewUser
         * @property {string|null} [Content] NewUser Content
         */

        /**
         * Constructs a new NewUser.
         * @memberof protos
         * @classdesc Represents a NewUser.
         * @implements INewUser
         * @constructor
         * @param {protos.INewUser=} [properties] Properties to set
         */
        function NewUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewUser Content.
         * @member {string} Content
         * @memberof protos.NewUser
         * @instance
         */
        NewUser.prototype.Content = "";

        /**
         * Creates a new NewUser instance using the specified properties.
         * @function create
         * @memberof protos.NewUser
         * @static
         * @param {protos.INewUser=} [properties] Properties to set
         * @returns {protos.NewUser} NewUser instance
         */
        NewUser.create = function create(properties) {
            return new NewUser(properties);
        };

        /**
         * Encodes the specified NewUser message. Does not implicitly {@link protos.NewUser.verify|verify} messages.
         * @function encode
         * @memberof protos.NewUser
         * @static
         * @param {protos.INewUser} message NewUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified NewUser message, length delimited. Does not implicitly {@link protos.NewUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.NewUser
         * @static
         * @param {protos.INewUser} message NewUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewUser message from the specified reader or buffer.
         * @function decode
         * @memberof protos.NewUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.NewUser} NewUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.NewUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.NewUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.NewUser} NewUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewUser message.
         * @function verify
         * @memberof protos.NewUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a NewUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.NewUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.NewUser} NewUser
         */
        NewUser.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.NewUser)
                return object;
            var message = new $root.protos.NewUser();
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a NewUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.NewUser
         * @static
         * @param {protos.NewUser} message NewUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Content = "";
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this NewUser to JSON.
         * @function toJSON
         * @memberof protos.NewUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewUser;
    })();

    protos.RPCMsg = (function() {

        /**
         * Properties of a RPCMsg.
         * @memberof protos
         * @interface IRPCMsg
         * @property {string|null} [Route] RPCMsg Route
         * @property {string|null} [Msg] RPCMsg Msg
         */

        /**
         * Constructs a new RPCMsg.
         * @memberof protos
         * @classdesc Represents a RPCMsg.
         * @implements IRPCMsg
         * @constructor
         * @param {protos.IRPCMsg=} [properties] Properties to set
         */
        function RPCMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RPCMsg Route.
         * @member {string} Route
         * @memberof protos.RPCMsg
         * @instance
         */
        RPCMsg.prototype.Route = "";

        /**
         * RPCMsg Msg.
         * @member {string} Msg
         * @memberof protos.RPCMsg
         * @instance
         */
        RPCMsg.prototype.Msg = "";

        /**
         * Creates a new RPCMsg instance using the specified properties.
         * @function create
         * @memberof protos.RPCMsg
         * @static
         * @param {protos.IRPCMsg=} [properties] Properties to set
         * @returns {protos.RPCMsg} RPCMsg instance
         */
        RPCMsg.create = function create(properties) {
            return new RPCMsg(properties);
        };

        /**
         * Encodes the specified RPCMsg message. Does not implicitly {@link protos.RPCMsg.verify|verify} messages.
         * @function encode
         * @memberof protos.RPCMsg
         * @static
         * @param {protos.IRPCMsg} message RPCMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Route != null && message.hasOwnProperty("Route"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Route);
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified RPCMsg message, length delimited. Does not implicitly {@link protos.RPCMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.RPCMsg
         * @static
         * @param {protos.IRPCMsg} message RPCMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RPCMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protos.RPCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.RPCMsg} RPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.RPCMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Route = reader.string();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RPCMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.RPCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.RPCMsg} RPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RPCMsg message.
         * @function verify
         * @memberof protos.RPCMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RPCMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Route != null && message.hasOwnProperty("Route"))
                if (!$util.isString(message.Route))
                    return "Route: string expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            return null;
        };

        /**
         * Creates a RPCMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.RPCMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.RPCMsg} RPCMsg
         */
        RPCMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.RPCMsg)
                return object;
            var message = new $root.protos.RPCMsg();
            if (object.Route != null)
                message.Route = String(object.Route);
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a RPCMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.RPCMsg
         * @static
         * @param {protos.RPCMsg} message RPCMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RPCMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Route = "";
                object.Msg = "";
            }
            if (message.Route != null && message.hasOwnProperty("Route"))
                object.Route = message.Route;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this RPCMsg to JSON.
         * @function toJSON
         * @memberof protos.RPCMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RPCMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RPCMsg;
    })();

    protos.AllMembers = (function() {

        /**
         * Properties of an AllMembers.
         * @memberof protos
         * @interface IAllMembers
         * @property {Array.<string>|null} [Members] AllMembers Members
         */

        /**
         * Constructs a new AllMembers.
         * @memberof protos
         * @classdesc Represents an AllMembers.
         * @implements IAllMembers
         * @constructor
         * @param {protos.IAllMembers=} [properties] Properties to set
         */
        function AllMembers(properties) {
            this.Members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllMembers Members.
         * @member {Array.<string>} Members
         * @memberof protos.AllMembers
         * @instance
         */
        AllMembers.prototype.Members = $util.emptyArray;

        /**
         * Creates a new AllMembers instance using the specified properties.
         * @function create
         * @memberof protos.AllMembers
         * @static
         * @param {protos.IAllMembers=} [properties] Properties to set
         * @returns {protos.AllMembers} AllMembers instance
         */
        AllMembers.create = function create(properties) {
            return new AllMembers(properties);
        };

        /**
         * Encodes the specified AllMembers message. Does not implicitly {@link protos.AllMembers.verify|verify} messages.
         * @function encode
         * @memberof protos.AllMembers
         * @static
         * @param {protos.IAllMembers} message AllMembers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllMembers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Members != null && message.Members.length)
                for (var i = 0; i < message.Members.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Members[i]);
            return writer;
        };

        /**
         * Encodes the specified AllMembers message, length delimited. Does not implicitly {@link protos.AllMembers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.AllMembers
         * @static
         * @param {protos.IAllMembers} message AllMembers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllMembers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllMembers message from the specified reader or buffer.
         * @function decode
         * @memberof protos.AllMembers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.AllMembers} AllMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllMembers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.AllMembers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Members && message.Members.length))
                        message.Members = [];
                    message.Members.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AllMembers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.AllMembers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.AllMembers} AllMembers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllMembers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllMembers message.
         * @function verify
         * @memberof protos.AllMembers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllMembers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Members != null && message.hasOwnProperty("Members")) {
                if (!Array.isArray(message.Members))
                    return "Members: array expected";
                for (var i = 0; i < message.Members.length; ++i)
                    if (!$util.isString(message.Members[i]))
                        return "Members: string[] expected";
            }
            return null;
        };

        /**
         * Creates an AllMembers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.AllMembers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.AllMembers} AllMembers
         */
        AllMembers.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.AllMembers)
                return object;
            var message = new $root.protos.AllMembers();
            if (object.Members) {
                if (!Array.isArray(object.Members))
                    throw TypeError(".protos.AllMembers.Members: array expected");
                message.Members = [];
                for (var i = 0; i < object.Members.length; ++i)
                    message.Members[i] = String(object.Members[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an AllMembers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.AllMembers
         * @static
         * @param {protos.AllMembers} message AllMembers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllMembers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Members = [];
            if (message.Members && message.Members.length) {
                object.Members = [];
                for (var j = 0; j < message.Members.length; ++j)
                    object.Members[j] = message.Members[j];
            }
            return object;
        };

        /**
         * Converts this AllMembers to JSON.
         * @function toJSON
         * @memberof protos.AllMembers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllMembers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllMembers;
    })();

    return protos;
})();

module.exports = $root;
