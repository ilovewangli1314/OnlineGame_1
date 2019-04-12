/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pbcommon = (function() {

    /**
     * Namespace pbcommon.
     * @exports pbcommon
     * @namespace
     */
    var pbcommon = {};

    pbcommon.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof pbcommon
         * @interface IResponse
         * @property {number|null} [Code] Response Code
         * @property {string|null} [Msg] Response Msg
         */

        /**
         * Constructs a new Response.
         * @memberof pbcommon
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {pbcommon.IResponse=} [properties] Properties to set
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
         * @memberof pbcommon.Response
         * @instance
         */
        Response.prototype.Code = 0;

        /**
         * Response Msg.
         * @member {string} Msg
         * @memberof pbcommon.Response
         * @instance
         */
        Response.prototype.Msg = "";

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof pbcommon.Response
         * @static
         * @param {pbcommon.IResponse=} [properties] Properties to set
         * @returns {pbcommon.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link pbcommon.Response.verify|verify} messages.
         * @function encode
         * @memberof pbcommon.Response
         * @static
         * @param {pbcommon.IResponse} message Response message or plain object to encode
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
         * Encodes the specified Response message, length delimited. Does not implicitly {@link pbcommon.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbcommon.Response
         * @static
         * @param {pbcommon.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof pbcommon.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbcommon.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbcommon.Response();
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
         * @memberof pbcommon.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbcommon.Response} Response
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
         * @memberof pbcommon.Response
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
         * @memberof pbcommon.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.pbcommon.Response)
                return object;
            var message = new $root.pbcommon.Response();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbcommon.Response
         * @static
         * @param {pbcommon.Response} message Response
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
         * @memberof pbcommon.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    pbcommon.RPCMsg = (function() {

        /**
         * Properties of a RPCMsg.
         * @memberof pbcommon
         * @interface IRPCMsg
         * @property {string|null} [Route] RPCMsg Route
         * @property {string|null} [Msg] RPCMsg Msg
         */

        /**
         * Constructs a new RPCMsg.
         * @memberof pbcommon
         * @classdesc Represents a RPCMsg.
         * @implements IRPCMsg
         * @constructor
         * @param {pbcommon.IRPCMsg=} [properties] Properties to set
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
         * @memberof pbcommon.RPCMsg
         * @instance
         */
        RPCMsg.prototype.Route = "";

        /**
         * RPCMsg Msg.
         * @member {string} Msg
         * @memberof pbcommon.RPCMsg
         * @instance
         */
        RPCMsg.prototype.Msg = "";

        /**
         * Creates a new RPCMsg instance using the specified properties.
         * @function create
         * @memberof pbcommon.RPCMsg
         * @static
         * @param {pbcommon.IRPCMsg=} [properties] Properties to set
         * @returns {pbcommon.RPCMsg} RPCMsg instance
         */
        RPCMsg.create = function create(properties) {
            return new RPCMsg(properties);
        };

        /**
         * Encodes the specified RPCMsg message. Does not implicitly {@link pbcommon.RPCMsg.verify|verify} messages.
         * @function encode
         * @memberof pbcommon.RPCMsg
         * @static
         * @param {pbcommon.IRPCMsg} message RPCMsg message or plain object to encode
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
         * Encodes the specified RPCMsg message, length delimited. Does not implicitly {@link pbcommon.RPCMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbcommon.RPCMsg
         * @static
         * @param {pbcommon.IRPCMsg} message RPCMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RPCMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pbcommon.RPCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbcommon.RPCMsg} RPCMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbcommon.RPCMsg();
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
         * @memberof pbcommon.RPCMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbcommon.RPCMsg} RPCMsg
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
         * @memberof pbcommon.RPCMsg
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
         * @memberof pbcommon.RPCMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.RPCMsg} RPCMsg
         */
        RPCMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pbcommon.RPCMsg)
                return object;
            var message = new $root.pbcommon.RPCMsg();
            if (object.Route != null)
                message.Route = String(object.Route);
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a RPCMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbcommon.RPCMsg
         * @static
         * @param {pbcommon.RPCMsg} message RPCMsg
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
         * @memberof pbcommon.RPCMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RPCMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RPCMsg;
    })();

    return pbcommon;
})();

module.exports = $root;
