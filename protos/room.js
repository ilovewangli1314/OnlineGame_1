/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.room = (function() {

    /**
     * Namespace room.
     * @exports room
     * @namespace
     */
    var room = {};

    room.Hero = (function() {

        /**
         * Properties of a Hero.
         * @memberof room
         * @interface IHero
         * @property {number|null} [Id] Hero Id
         * @property {number|null} [Hp] Hero Hp
         * @property {number|null} [Mp] Hero Mp
         * @property {number|null} [Attack] Hero Attack
         * @property {number|null} [Defense] Hero Defense
         */

        /**
         * Constructs a new Hero.
         * @memberof room
         * @classdesc Represents a Hero.
         * @implements IHero
         * @constructor
         * @param {room.IHero=} [properties] Properties to set
         */
        function Hero(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Hero Id.
         * @member {number} Id
         * @memberof room.Hero
         * @instance
         */
        Hero.prototype.Id = 0;

        /**
         * Hero Hp.
         * @member {number} Hp
         * @memberof room.Hero
         * @instance
         */
        Hero.prototype.Hp = 0;

        /**
         * Hero Mp.
         * @member {number} Mp
         * @memberof room.Hero
         * @instance
         */
        Hero.prototype.Mp = 0;

        /**
         * Hero Attack.
         * @member {number} Attack
         * @memberof room.Hero
         * @instance
         */
        Hero.prototype.Attack = 0;

        /**
         * Hero Defense.
         * @member {number} Defense
         * @memberof room.Hero
         * @instance
         */
        Hero.prototype.Defense = 0;

        /**
         * Creates a new Hero instance using the specified properties.
         * @function create
         * @memberof room.Hero
         * @static
         * @param {room.IHero=} [properties] Properties to set
         * @returns {room.Hero} Hero instance
         */
        Hero.create = function create(properties) {
            return new Hero(properties);
        };

        /**
         * Encodes the specified Hero message. Does not implicitly {@link room.Hero.verify|verify} messages.
         * @function encode
         * @memberof room.Hero
         * @static
         * @param {room.IHero} message Hero message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hero.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Hp != null && message.hasOwnProperty("Hp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Hp);
            if (message.Mp != null && message.hasOwnProperty("Mp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Mp);
            if (message.Attack != null && message.hasOwnProperty("Attack"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Attack);
            if (message.Defense != null && message.hasOwnProperty("Defense"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Defense);
            return writer;
        };

        /**
         * Encodes the specified Hero message, length delimited. Does not implicitly {@link room.Hero.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.Hero
         * @static
         * @param {room.IHero} message Hero message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hero.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @function decode
         * @memberof room.Hero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.Hero} Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hero.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.Hero();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int32();
                    break;
                case 2:
                    message.Hp = reader.int32();
                    break;
                case 3:
                    message.Mp = reader.int32();
                    break;
                case 4:
                    message.Attack = reader.int32();
                    break;
                case 5:
                    message.Defense = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Hero message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.Hero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.Hero} Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hero.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Hero message.
         * @function verify
         * @memberof room.Hero
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Hero.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            if (message.Hp != null && message.hasOwnProperty("Hp"))
                if (!$util.isInteger(message.Hp))
                    return "Hp: integer expected";
            if (message.Mp != null && message.hasOwnProperty("Mp"))
                if (!$util.isInteger(message.Mp))
                    return "Mp: integer expected";
            if (message.Attack != null && message.hasOwnProperty("Attack"))
                if (!$util.isInteger(message.Attack))
                    return "Attack: integer expected";
            if (message.Defense != null && message.hasOwnProperty("Defense"))
                if (!$util.isInteger(message.Defense))
                    return "Defense: integer expected";
            return null;
        };

        /**
         * Creates a Hero message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.Hero
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.Hero} Hero
         */
        Hero.fromObject = function fromObject(object) {
            if (object instanceof $root.room.Hero)
                return object;
            var message = new $root.room.Hero();
            if (object.Id != null)
                message.Id = object.Id | 0;
            if (object.Hp != null)
                message.Hp = object.Hp | 0;
            if (object.Mp != null)
                message.Mp = object.Mp | 0;
            if (object.Attack != null)
                message.Attack = object.Attack | 0;
            if (object.Defense != null)
                message.Defense = object.Defense | 0;
            return message;
        };

        /**
         * Creates a plain object from a Hero message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.Hero
         * @static
         * @param {room.Hero} message Hero
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Hero.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Id = 0;
                object.Hp = 0;
                object.Mp = 0;
                object.Attack = 0;
                object.Defense = 0;
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Hp != null && message.hasOwnProperty("Hp"))
                object.Hp = message.Hp;
            if (message.Mp != null && message.hasOwnProperty("Mp"))
                object.Mp = message.Mp;
            if (message.Attack != null && message.hasOwnProperty("Attack"))
                object.Attack = message.Attack;
            if (message.Defense != null && message.hasOwnProperty("Defense"))
                object.Defense = message.Defense;
            return object;
        };

        /**
         * Converts this Hero to JSON.
         * @function toJSON
         * @memberof room.Hero
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Hero.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Hero;
    })();

    room.Scene = (function() {

        /**
         * Properties of a Scene.
         * @memberof room
         * @interface IScene
         * @property {Array.<room.IHero>|null} [Heros] Scene Heros
         */

        /**
         * Constructs a new Scene.
         * @memberof room
         * @classdesc Represents a Scene.
         * @implements IScene
         * @constructor
         * @param {room.IScene=} [properties] Properties to set
         */
        function Scene(properties) {
            this.Heros = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Scene Heros.
         * @member {Array.<room.IHero>} Heros
         * @memberof room.Scene
         * @instance
         */
        Scene.prototype.Heros = $util.emptyArray;

        /**
         * Creates a new Scene instance using the specified properties.
         * @function create
         * @memberof room.Scene
         * @static
         * @param {room.IScene=} [properties] Properties to set
         * @returns {room.Scene} Scene instance
         */
        Scene.create = function create(properties) {
            return new Scene(properties);
        };

        /**
         * Encodes the specified Scene message. Does not implicitly {@link room.Scene.verify|verify} messages.
         * @function encode
         * @memberof room.Scene
         * @static
         * @param {room.IScene} message Scene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Scene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Heros != null && message.Heros.length)
                for (var i = 0; i < message.Heros.length; ++i)
                    $root.room.Hero.encode(message.Heros[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Scene message, length delimited. Does not implicitly {@link room.Scene.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.Scene
         * @static
         * @param {room.IScene} message Scene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Scene.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Scene message from the specified reader or buffer.
         * @function decode
         * @memberof room.Scene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.Scene} Scene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Scene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.Scene();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Heros && message.Heros.length))
                        message.Heros = [];
                    message.Heros.push($root.room.Hero.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Scene message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.Scene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.Scene} Scene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Scene.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Scene message.
         * @function verify
         * @memberof room.Scene
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Scene.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Heros != null && message.hasOwnProperty("Heros")) {
                if (!Array.isArray(message.Heros))
                    return "Heros: array expected";
                for (var i = 0; i < message.Heros.length; ++i) {
                    var error = $root.room.Hero.verify(message.Heros[i]);
                    if (error)
                        return "Heros." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Scene message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.Scene
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.Scene} Scene
         */
        Scene.fromObject = function fromObject(object) {
            if (object instanceof $root.room.Scene)
                return object;
            var message = new $root.room.Scene();
            if (object.Heros) {
                if (!Array.isArray(object.Heros))
                    throw TypeError(".room.Scene.Heros: array expected");
                message.Heros = [];
                for (var i = 0; i < object.Heros.length; ++i) {
                    if (typeof object.Heros[i] !== "object")
                        throw TypeError(".room.Scene.Heros: object expected");
                    message.Heros[i] = $root.room.Hero.fromObject(object.Heros[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Scene message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.Scene
         * @static
         * @param {room.Scene} message Scene
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Scene.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Heros = [];
            if (message.Heros && message.Heros.length) {
                object.Heros = [];
                for (var j = 0; j < message.Heros.length; ++j)
                    object.Heros[j] = $root.room.Hero.toObject(message.Heros[j], options);
            }
            return object;
        };

        /**
         * Converts this Scene to JSON.
         * @function toJSON
         * @memberof room.Scene
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Scene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Scene;
    })();

    room.Action = (function() {

        /**
         * Properties of an Action.
         * @memberof room
         * @interface IAction
         * @property {number|null} [SrcHeroId] Action SrcHeroId
         * @property {number|null} [TargetHeroId] Action TargetHeroId
         * @property {number|null} [SkillType] Action SkillType
         */

        /**
         * Constructs a new Action.
         * @memberof room
         * @classdesc Represents an Action.
         * @implements IAction
         * @constructor
         * @param {room.IAction=} [properties] Properties to set
         */
        function Action(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Action SrcHeroId.
         * @member {number} SrcHeroId
         * @memberof room.Action
         * @instance
         */
        Action.prototype.SrcHeroId = 0;

        /**
         * Action TargetHeroId.
         * @member {number} TargetHeroId
         * @memberof room.Action
         * @instance
         */
        Action.prototype.TargetHeroId = 0;

        /**
         * Action SkillType.
         * @member {number} SkillType
         * @memberof room.Action
         * @instance
         */
        Action.prototype.SkillType = 0;

        /**
         * Creates a new Action instance using the specified properties.
         * @function create
         * @memberof room.Action
         * @static
         * @param {room.IAction=} [properties] Properties to set
         * @returns {room.Action} Action instance
         */
        Action.create = function create(properties) {
            return new Action(properties);
        };

        /**
         * Encodes the specified Action message. Does not implicitly {@link room.Action.verify|verify} messages.
         * @function encode
         * @memberof room.Action
         * @static
         * @param {room.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SrcHeroId != null && message.hasOwnProperty("SrcHeroId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SrcHeroId);
            if (message.TargetHeroId != null && message.hasOwnProperty("TargetHeroId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TargetHeroId);
            if (message.SkillType != null && message.hasOwnProperty("SkillType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SkillType);
            return writer;
        };

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link room.Action.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.Action
         * @static
         * @param {room.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @function decode
         * @memberof room.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.Action();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SrcHeroId = reader.int32();
                    break;
                case 2:
                    message.TargetHeroId = reader.int32();
                    break;
                case 3:
                    message.SkillType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Action message.
         * @function verify
         * @memberof room.Action
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Action.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SrcHeroId != null && message.hasOwnProperty("SrcHeroId"))
                if (!$util.isInteger(message.SrcHeroId))
                    return "SrcHeroId: integer expected";
            if (message.TargetHeroId != null && message.hasOwnProperty("TargetHeroId"))
                if (!$util.isInteger(message.TargetHeroId))
                    return "TargetHeroId: integer expected";
            if (message.SkillType != null && message.hasOwnProperty("SkillType"))
                if (!$util.isInteger(message.SkillType))
                    return "SkillType: integer expected";
            return null;
        };

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.Action
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.Action} Action
         */
        Action.fromObject = function fromObject(object) {
            if (object instanceof $root.room.Action)
                return object;
            var message = new $root.room.Action();
            if (object.SrcHeroId != null)
                message.SrcHeroId = object.SrcHeroId | 0;
            if (object.TargetHeroId != null)
                message.TargetHeroId = object.TargetHeroId | 0;
            if (object.SkillType != null)
                message.SkillType = object.SkillType | 0;
            return message;
        };

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.Action
         * @static
         * @param {room.Action} message Action
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Action.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SrcHeroId = 0;
                object.TargetHeroId = 0;
                object.SkillType = 0;
            }
            if (message.SrcHeroId != null && message.hasOwnProperty("SrcHeroId"))
                object.SrcHeroId = message.SrcHeroId;
            if (message.TargetHeroId != null && message.hasOwnProperty("TargetHeroId"))
                object.TargetHeroId = message.TargetHeroId;
            if (message.SkillType != null && message.hasOwnProperty("SkillType"))
                object.SkillType = message.SkillType;
            return object;
        };

        /**
         * Converts this Action to JSON.
         * @function toJSON
         * @memberof room.Action
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Action.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Action;
    })();

    room.JoinRequest = (function() {

        /**
         * Properties of a JoinRequest.
         * @memberof room
         * @interface IJoinRequest
         */

        /**
         * Constructs a new JoinRequest.
         * @memberof room
         * @classdesc Represents a JoinRequest.
         * @implements IJoinRequest
         * @constructor
         * @param {room.IJoinRequest=} [properties] Properties to set
         */
        function JoinRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new JoinRequest instance using the specified properties.
         * @function create
         * @memberof room.JoinRequest
         * @static
         * @param {room.IJoinRequest=} [properties] Properties to set
         * @returns {room.JoinRequest} JoinRequest instance
         */
        JoinRequest.create = function create(properties) {
            return new JoinRequest(properties);
        };

        /**
         * Encodes the specified JoinRequest message. Does not implicitly {@link room.JoinRequest.verify|verify} messages.
         * @function encode
         * @memberof room.JoinRequest
         * @static
         * @param {room.IJoinRequest} message JoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified JoinRequest message, length delimited. Does not implicitly {@link room.JoinRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.JoinRequest
         * @static
         * @param {room.IJoinRequest} message JoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRequest message from the specified reader or buffer.
         * @function decode
         * @memberof room.JoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.JoinRequest} JoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.JoinRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.JoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.JoinRequest} JoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRequest message.
         * @function verify
         * @memberof room.JoinRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a JoinRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.JoinRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.JoinRequest} JoinRequest
         */
        JoinRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.room.JoinRequest)
                return object;
            return new $root.room.JoinRequest();
        };

        /**
         * Creates a plain object from a JoinRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.JoinRequest
         * @static
         * @param {room.JoinRequest} message JoinRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this JoinRequest to JSON.
         * @function toJSON
         * @memberof room.JoinRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRequest;
    })();

    room.JoinResponse = (function() {

        /**
         * Properties of a JoinResponse.
         * @memberof room
         * @interface IJoinResponse
         * @property {number|null} [Code] JoinResponse Code
         */

        /**
         * Constructs a new JoinResponse.
         * @memberof room
         * @classdesc Represents a JoinResponse.
         * @implements IJoinResponse
         * @constructor
         * @param {room.IJoinResponse=} [properties] Properties to set
         */
        function JoinResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinResponse Code.
         * @member {number} Code
         * @memberof room.JoinResponse
         * @instance
         */
        JoinResponse.prototype.Code = 0;

        /**
         * Creates a new JoinResponse instance using the specified properties.
         * @function create
         * @memberof room.JoinResponse
         * @static
         * @param {room.IJoinResponse=} [properties] Properties to set
         * @returns {room.JoinResponse} JoinResponse instance
         */
        JoinResponse.create = function create(properties) {
            return new JoinResponse(properties);
        };

        /**
         * Encodes the specified JoinResponse message. Does not implicitly {@link room.JoinResponse.verify|verify} messages.
         * @function encode
         * @memberof room.JoinResponse
         * @static
         * @param {room.IJoinResponse} message JoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && message.hasOwnProperty("Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            return writer;
        };

        /**
         * Encodes the specified JoinResponse message, length delimited. Does not implicitly {@link room.JoinResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.JoinResponse
         * @static
         * @param {room.IJoinResponse} message JoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinResponse message from the specified reader or buffer.
         * @function decode
         * @memberof room.JoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.JoinResponse} JoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.JoinResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.JoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.JoinResponse} JoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinResponse message.
         * @function verify
         * @memberof room.JoinResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            return null;
        };

        /**
         * Creates a JoinResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.JoinResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.JoinResponse} JoinResponse
         */
        JoinResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.room.JoinResponse)
                return object;
            var message = new $root.room.JoinResponse();
            if (object.Code != null)
                message.Code = object.Code | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.JoinResponse
         * @static
         * @param {room.JoinResponse} message JoinResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Code = 0;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            return object;
        };

        /**
         * Converts this JoinResponse to JSON.
         * @function toJSON
         * @memberof room.JoinResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinResponse;
    })();

    return room;
})();

module.exports = $root;
