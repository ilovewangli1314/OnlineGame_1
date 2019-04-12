/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pbgame = (function() {

    /**
     * Namespace pbgame.
     * @exports pbgame
     * @namespace
     */
    var pbgame = {};

    pbgame.Hero = (function() {

        /**
         * Properties of a Hero.
         * @memberof pbgame
         * @interface IHero
         * @property {number|null} [Id] Hero Id
         * @property {number|null} [Hp] Hero Hp
         * @property {number|null} [Mp] Hero Mp
         * @property {number|null} [Attack] Hero Attack
         * @property {number|null} [Defense] Hero Defense
         */

        /**
         * Constructs a new Hero.
         * @memberof pbgame
         * @classdesc Represents a Hero.
         * @implements IHero
         * @constructor
         * @param {pbgame.IHero=} [properties] Properties to set
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
         * @memberof pbgame.Hero
         * @instance
         */
        Hero.prototype.Id = 0;

        /**
         * Hero Hp.
         * @member {number} Hp
         * @memberof pbgame.Hero
         * @instance
         */
        Hero.prototype.Hp = 0;

        /**
         * Hero Mp.
         * @member {number} Mp
         * @memberof pbgame.Hero
         * @instance
         */
        Hero.prototype.Mp = 0;

        /**
         * Hero Attack.
         * @member {number} Attack
         * @memberof pbgame.Hero
         * @instance
         */
        Hero.prototype.Attack = 0;

        /**
         * Hero Defense.
         * @member {number} Defense
         * @memberof pbgame.Hero
         * @instance
         */
        Hero.prototype.Defense = 0;

        /**
         * Creates a new Hero instance using the specified properties.
         * @function create
         * @memberof pbgame.Hero
         * @static
         * @param {pbgame.IHero=} [properties] Properties to set
         * @returns {pbgame.Hero} Hero instance
         */
        Hero.create = function create(properties) {
            return new Hero(properties);
        };

        /**
         * Encodes the specified Hero message. Does not implicitly {@link pbgame.Hero.verify|verify} messages.
         * @function encode
         * @memberof pbgame.Hero
         * @static
         * @param {pbgame.IHero} message Hero message or plain object to encode
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
         * Encodes the specified Hero message, length delimited. Does not implicitly {@link pbgame.Hero.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbgame.Hero
         * @static
         * @param {pbgame.IHero} message Hero message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hero.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @function decode
         * @memberof pbgame.Hero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbgame.Hero} Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hero.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbgame.Hero();
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
         * @memberof pbgame.Hero
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbgame.Hero} Hero
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
         * @memberof pbgame.Hero
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
         * @memberof pbgame.Hero
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbgame.Hero} Hero
         */
        Hero.fromObject = function fromObject(object) {
            if (object instanceof $root.pbgame.Hero)
                return object;
            var message = new $root.pbgame.Hero();
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
         * @memberof pbgame.Hero
         * @static
         * @param {pbgame.Hero} message Hero
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
         * @memberof pbgame.Hero
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Hero.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Hero;
    })();

    pbgame.Team = (function() {

        /**
         * Properties of a Team.
         * @memberof pbgame
         * @interface ITeam
         * @property {Array.<pbgame.IHero>|null} [Heros] Team Heros
         */

        /**
         * Constructs a new Team.
         * @memberof pbgame
         * @classdesc Represents a Team.
         * @implements ITeam
         * @constructor
         * @param {pbgame.ITeam=} [properties] Properties to set
         */
        function Team(properties) {
            this.Heros = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Team Heros.
         * @member {Array.<pbgame.IHero>} Heros
         * @memberof pbgame.Team
         * @instance
         */
        Team.prototype.Heros = $util.emptyArray;

        /**
         * Creates a new Team instance using the specified properties.
         * @function create
         * @memberof pbgame.Team
         * @static
         * @param {pbgame.ITeam=} [properties] Properties to set
         * @returns {pbgame.Team} Team instance
         */
        Team.create = function create(properties) {
            return new Team(properties);
        };

        /**
         * Encodes the specified Team message. Does not implicitly {@link pbgame.Team.verify|verify} messages.
         * @function encode
         * @memberof pbgame.Team
         * @static
         * @param {pbgame.ITeam} message Team message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Team.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Heros != null && message.Heros.length)
                for (var i = 0; i < message.Heros.length; ++i)
                    $root.pbgame.Hero.encode(message.Heros[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Team message, length delimited. Does not implicitly {@link pbgame.Team.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbgame.Team
         * @static
         * @param {pbgame.ITeam} message Team message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Team.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Team message from the specified reader or buffer.
         * @function decode
         * @memberof pbgame.Team
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbgame.Team} Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Team.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbgame.Team();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Heros && message.Heros.length))
                        message.Heros = [];
                    message.Heros.push($root.pbgame.Hero.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Team message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbgame.Team
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbgame.Team} Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Team.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Team message.
         * @function verify
         * @memberof pbgame.Team
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Team.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Heros != null && message.hasOwnProperty("Heros")) {
                if (!Array.isArray(message.Heros))
                    return "Heros: array expected";
                for (var i = 0; i < message.Heros.length; ++i) {
                    var error = $root.pbgame.Hero.verify(message.Heros[i]);
                    if (error)
                        return "Heros." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Team message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbgame.Team
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbgame.Team} Team
         */
        Team.fromObject = function fromObject(object) {
            if (object instanceof $root.pbgame.Team)
                return object;
            var message = new $root.pbgame.Team();
            if (object.Heros) {
                if (!Array.isArray(object.Heros))
                    throw TypeError(".pbgame.Team.Heros: array expected");
                message.Heros = [];
                for (var i = 0; i < object.Heros.length; ++i) {
                    if (typeof object.Heros[i] !== "object")
                        throw TypeError(".pbgame.Team.Heros: object expected");
                    message.Heros[i] = $root.pbgame.Hero.fromObject(object.Heros[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Team message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbgame.Team
         * @static
         * @param {pbgame.Team} message Team
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Team.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Heros = [];
            if (message.Heros && message.Heros.length) {
                object.Heros = [];
                for (var j = 0; j < message.Heros.length; ++j)
                    object.Heros[j] = $root.pbgame.Hero.toObject(message.Heros[j], options);
            }
            return object;
        };

        /**
         * Converts this Team to JSON.
         * @function toJSON
         * @memberof pbgame.Team
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Team.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Team;
    })();

    pbgame.Scene = (function() {

        /**
         * Properties of a Scene.
         * @memberof pbgame
         * @interface IScene
         * @property {number|null} [randomSeed] Scene randomSeed
         * @property {Array.<pbgame.ITeam>|null} [teams] Scene teams
         */

        /**
         * Constructs a new Scene.
         * @memberof pbgame
         * @classdesc Represents a Scene.
         * @implements IScene
         * @constructor
         * @param {pbgame.IScene=} [properties] Properties to set
         */
        function Scene(properties) {
            this.teams = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Scene randomSeed.
         * @member {number} randomSeed
         * @memberof pbgame.Scene
         * @instance
         */
        Scene.prototype.randomSeed = 0;

        /**
         * Scene teams.
         * @member {Array.<pbgame.ITeam>} teams
         * @memberof pbgame.Scene
         * @instance
         */
        Scene.prototype.teams = $util.emptyArray;

        /**
         * Creates a new Scene instance using the specified properties.
         * @function create
         * @memberof pbgame.Scene
         * @static
         * @param {pbgame.IScene=} [properties] Properties to set
         * @returns {pbgame.Scene} Scene instance
         */
        Scene.create = function create(properties) {
            return new Scene(properties);
        };

        /**
         * Encodes the specified Scene message. Does not implicitly {@link pbgame.Scene.verify|verify} messages.
         * @function encode
         * @memberof pbgame.Scene
         * @static
         * @param {pbgame.IScene} message Scene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Scene.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.randomSeed != null && message.hasOwnProperty("randomSeed"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.randomSeed);
            if (message.teams != null && message.teams.length)
                for (var i = 0; i < message.teams.length; ++i)
                    $root.pbgame.Team.encode(message.teams[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Scene message, length delimited. Does not implicitly {@link pbgame.Scene.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbgame.Scene
         * @static
         * @param {pbgame.IScene} message Scene message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Scene.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Scene message from the specified reader or buffer.
         * @function decode
         * @memberof pbgame.Scene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbgame.Scene} Scene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Scene.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbgame.Scene();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.randomSeed = reader.int32();
                    break;
                case 2:
                    if (!(message.teams && message.teams.length))
                        message.teams = [];
                    message.teams.push($root.pbgame.Team.decode(reader, reader.uint32()));
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
         * @memberof pbgame.Scene
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbgame.Scene} Scene
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
         * @memberof pbgame.Scene
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Scene.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.randomSeed != null && message.hasOwnProperty("randomSeed"))
                if (!$util.isInteger(message.randomSeed))
                    return "randomSeed: integer expected";
            if (message.teams != null && message.hasOwnProperty("teams")) {
                if (!Array.isArray(message.teams))
                    return "teams: array expected";
                for (var i = 0; i < message.teams.length; ++i) {
                    var error = $root.pbgame.Team.verify(message.teams[i]);
                    if (error)
                        return "teams." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Scene message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbgame.Scene
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbgame.Scene} Scene
         */
        Scene.fromObject = function fromObject(object) {
            if (object instanceof $root.pbgame.Scene)
                return object;
            var message = new $root.pbgame.Scene();
            if (object.randomSeed != null)
                message.randomSeed = object.randomSeed | 0;
            if (object.teams) {
                if (!Array.isArray(object.teams))
                    throw TypeError(".pbgame.Scene.teams: array expected");
                message.teams = [];
                for (var i = 0; i < object.teams.length; ++i) {
                    if (typeof object.teams[i] !== "object")
                        throw TypeError(".pbgame.Scene.teams: object expected");
                    message.teams[i] = $root.pbgame.Team.fromObject(object.teams[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Scene message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbgame.Scene
         * @static
         * @param {pbgame.Scene} message Scene
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Scene.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.teams = [];
            if (options.defaults)
                object.randomSeed = 0;
            if (message.randomSeed != null && message.hasOwnProperty("randomSeed"))
                object.randomSeed = message.randomSeed;
            if (message.teams && message.teams.length) {
                object.teams = [];
                for (var j = 0; j < message.teams.length; ++j)
                    object.teams[j] = $root.pbgame.Team.toObject(message.teams[j], options);
            }
            return object;
        };

        /**
         * Converts this Scene to JSON.
         * @function toJSON
         * @memberof pbgame.Scene
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Scene.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Scene;
    })();

    pbgame.Action = (function() {

        /**
         * Properties of an Action.
         * @memberof pbgame
         * @interface IAction
         * @property {number|null} [SrcHeroId] Action SrcHeroId
         * @property {number|null} [TargetHeroId] Action TargetHeroId
         * @property {number|null} [SkillType] Action SkillType
         */

        /**
         * Constructs a new Action.
         * @memberof pbgame
         * @classdesc Represents an Action.
         * @implements IAction
         * @constructor
         * @param {pbgame.IAction=} [properties] Properties to set
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
         * @memberof pbgame.Action
         * @instance
         */
        Action.prototype.SrcHeroId = 0;

        /**
         * Action TargetHeroId.
         * @member {number} TargetHeroId
         * @memberof pbgame.Action
         * @instance
         */
        Action.prototype.TargetHeroId = 0;

        /**
         * Action SkillType.
         * @member {number} SkillType
         * @memberof pbgame.Action
         * @instance
         */
        Action.prototype.SkillType = 0;

        /**
         * Creates a new Action instance using the specified properties.
         * @function create
         * @memberof pbgame.Action
         * @static
         * @param {pbgame.IAction=} [properties] Properties to set
         * @returns {pbgame.Action} Action instance
         */
        Action.create = function create(properties) {
            return new Action(properties);
        };

        /**
         * Encodes the specified Action message. Does not implicitly {@link pbgame.Action.verify|verify} messages.
         * @function encode
         * @memberof pbgame.Action
         * @static
         * @param {pbgame.IAction} message Action message or plain object to encode
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
         * Encodes the specified Action message, length delimited. Does not implicitly {@link pbgame.Action.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbgame.Action
         * @static
         * @param {pbgame.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @function decode
         * @memberof pbgame.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbgame.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbgame.Action();
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
         * @memberof pbgame.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbgame.Action} Action
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
         * @memberof pbgame.Action
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
         * @memberof pbgame.Action
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbgame.Action} Action
         */
        Action.fromObject = function fromObject(object) {
            if (object instanceof $root.pbgame.Action)
                return object;
            var message = new $root.pbgame.Action();
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
         * @memberof pbgame.Action
         * @static
         * @param {pbgame.Action} message Action
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
         * @memberof pbgame.Action
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Action.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Action;
    })();

    pbgame.JoinRequest = (function() {

        /**
         * Properties of a JoinRequest.
         * @memberof pbgame
         * @interface IJoinRequest
         */

        /**
         * Constructs a new JoinRequest.
         * @memberof pbgame
         * @classdesc Represents a JoinRequest.
         * @implements IJoinRequest
         * @constructor
         * @param {pbgame.IJoinRequest=} [properties] Properties to set
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
         * @memberof pbgame.JoinRequest
         * @static
         * @param {pbgame.IJoinRequest=} [properties] Properties to set
         * @returns {pbgame.JoinRequest} JoinRequest instance
         */
        JoinRequest.create = function create(properties) {
            return new JoinRequest(properties);
        };

        /**
         * Encodes the specified JoinRequest message. Does not implicitly {@link pbgame.JoinRequest.verify|verify} messages.
         * @function encode
         * @memberof pbgame.JoinRequest
         * @static
         * @param {pbgame.IJoinRequest} message JoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified JoinRequest message, length delimited. Does not implicitly {@link pbgame.JoinRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbgame.JoinRequest
         * @static
         * @param {pbgame.IJoinRequest} message JoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRequest message from the specified reader or buffer.
         * @function decode
         * @memberof pbgame.JoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbgame.JoinRequest} JoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbgame.JoinRequest();
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
         * @memberof pbgame.JoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbgame.JoinRequest} JoinRequest
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
         * @memberof pbgame.JoinRequest
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
         * @memberof pbgame.JoinRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbgame.JoinRequest} JoinRequest
         */
        JoinRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.pbgame.JoinRequest)
                return object;
            return new $root.pbgame.JoinRequest();
        };

        /**
         * Creates a plain object from a JoinRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbgame.JoinRequest
         * @static
         * @param {pbgame.JoinRequest} message JoinRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this JoinRequest to JSON.
         * @function toJSON
         * @memberof pbgame.JoinRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRequest;
    })();

    pbgame.JoinResponse = (function() {

        /**
         * Properties of a JoinResponse.
         * @memberof pbgame
         * @interface IJoinResponse
         * @property {number|null} [Code] JoinResponse Code
         */

        /**
         * Constructs a new JoinResponse.
         * @memberof pbgame
         * @classdesc Represents a JoinResponse.
         * @implements IJoinResponse
         * @constructor
         * @param {pbgame.IJoinResponse=} [properties] Properties to set
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
         * @memberof pbgame.JoinResponse
         * @instance
         */
        JoinResponse.prototype.Code = 0;

        /**
         * Creates a new JoinResponse instance using the specified properties.
         * @function create
         * @memberof pbgame.JoinResponse
         * @static
         * @param {pbgame.IJoinResponse=} [properties] Properties to set
         * @returns {pbgame.JoinResponse} JoinResponse instance
         */
        JoinResponse.create = function create(properties) {
            return new JoinResponse(properties);
        };

        /**
         * Encodes the specified JoinResponse message. Does not implicitly {@link pbgame.JoinResponse.verify|verify} messages.
         * @function encode
         * @memberof pbgame.JoinResponse
         * @static
         * @param {pbgame.IJoinResponse} message JoinResponse message or plain object to encode
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
         * Encodes the specified JoinResponse message, length delimited. Does not implicitly {@link pbgame.JoinResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbgame.JoinResponse
         * @static
         * @param {pbgame.IJoinResponse} message JoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinResponse message from the specified reader or buffer.
         * @function decode
         * @memberof pbgame.JoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbgame.JoinResponse} JoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbgame.JoinResponse();
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
         * @memberof pbgame.JoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbgame.JoinResponse} JoinResponse
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
         * @memberof pbgame.JoinResponse
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
         * @memberof pbgame.JoinResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbgame.JoinResponse} JoinResponse
         */
        JoinResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.pbgame.JoinResponse)
                return object;
            var message = new $root.pbgame.JoinResponse();
            if (object.Code != null)
                message.Code = object.Code | 0;
            return message;
        };

        /**
         * Creates a plain object from a JoinResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbgame.JoinResponse
         * @static
         * @param {pbgame.JoinResponse} message JoinResponse
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
         * @memberof pbgame.JoinResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinResponse;
    })();

    return pbgame;
})();

module.exports = $root;
