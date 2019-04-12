import * as $protobuf from "protobufjs";
/** Namespace pbgame. */
export namespace pbgame {

    /** Properties of a Hero. */
    interface IHero {

        /** Hero Id */
        Id?: (number|null);

        /** Hero Hp */
        Hp?: (number|null);

        /** Hero Mp */
        Mp?: (number|null);

        /** Hero Attack */
        Attack?: (number|null);

        /** Hero Defense */
        Defense?: (number|null);
    }

    /** Represents a Hero. */
    class Hero implements IHero {

        /**
         * Constructs a new Hero.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbgame.IHero);

        /** Hero Id. */
        public Id: number;

        /** Hero Hp. */
        public Hp: number;

        /** Hero Mp. */
        public Mp: number;

        /** Hero Attack. */
        public Attack: number;

        /** Hero Defense. */
        public Defense: number;

        /**
         * Creates a new Hero instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hero instance
         */
        public static create(properties?: pbgame.IHero): pbgame.Hero;

        /**
         * Encodes the specified Hero message. Does not implicitly {@link pbgame.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbgame.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hero message, length delimited. Does not implicitly {@link pbgame.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbgame.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbgame.Hero;

        /**
         * Decodes a Hero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbgame.Hero;

        /**
         * Verifies a Hero message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hero message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hero
         */
        public static fromObject(object: { [k: string]: any }): pbgame.Hero;

        /**
         * Creates a plain object from a Hero message. Also converts values to other types if specified.
         * @param message Hero
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbgame.Hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hero to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Team. */
    interface ITeam {

        /** Team Heros */
        Heros?: (pbgame.IHero[]|null);
    }

    /** Represents a Team. */
    class Team implements ITeam {

        /**
         * Constructs a new Team.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbgame.ITeam);

        /** Team Heros. */
        public Heros: pbgame.IHero[];

        /**
         * Creates a new Team instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Team instance
         */
        public static create(properties?: pbgame.ITeam): pbgame.Team;

        /**
         * Encodes the specified Team message. Does not implicitly {@link pbgame.Team.verify|verify} messages.
         * @param message Team message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbgame.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Team message, length delimited. Does not implicitly {@link pbgame.Team.verify|verify} messages.
         * @param message Team message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbgame.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Team message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbgame.Team;

        /**
         * Decodes a Team message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Team
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbgame.Team;

        /**
         * Verifies a Team message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Team message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Team
         */
        public static fromObject(object: { [k: string]: any }): pbgame.Team;

        /**
         * Creates a plain object from a Team message. Also converts values to other types if specified.
         * @param message Team
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbgame.Team, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Team to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Scene. */
    interface IScene {

        /** Scene randomSeed */
        randomSeed?: (number|null);

        /** Scene teams */
        teams?: (pbgame.ITeam[]|null);
    }

    /** Represents a Scene. */
    class Scene implements IScene {

        /**
         * Constructs a new Scene.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbgame.IScene);

        /** Scene randomSeed. */
        public randomSeed: number;

        /** Scene teams. */
        public teams: pbgame.ITeam[];

        /**
         * Creates a new Scene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Scene instance
         */
        public static create(properties?: pbgame.IScene): pbgame.Scene;

        /**
         * Encodes the specified Scene message. Does not implicitly {@link pbgame.Scene.verify|verify} messages.
         * @param message Scene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbgame.IScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Scene message, length delimited. Does not implicitly {@link pbgame.Scene.verify|verify} messages.
         * @param message Scene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbgame.IScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Scene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Scene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbgame.Scene;

        /**
         * Decodes a Scene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Scene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbgame.Scene;

        /**
         * Verifies a Scene message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Scene message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Scene
         */
        public static fromObject(object: { [k: string]: any }): pbgame.Scene;

        /**
         * Creates a plain object from a Scene message. Also converts values to other types if specified.
         * @param message Scene
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbgame.Scene, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Scene to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Action. */
    interface IAction {

        /** Action SrcHeroId */
        SrcHeroId?: (number|null);

        /** Action TargetHeroId */
        TargetHeroId?: (number|null);

        /** Action SkillType */
        SkillType?: (number|null);
    }

    /** Represents an Action. */
    class Action implements IAction {

        /**
         * Constructs a new Action.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbgame.IAction);

        /** Action SrcHeroId. */
        public SrcHeroId: number;

        /** Action TargetHeroId. */
        public TargetHeroId: number;

        /** Action SkillType. */
        public SkillType: number;

        /**
         * Creates a new Action instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Action instance
         */
        public static create(properties?: pbgame.IAction): pbgame.Action;

        /**
         * Encodes the specified Action message. Does not implicitly {@link pbgame.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbgame.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link pbgame.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbgame.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbgame.Action;

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbgame.Action;

        /**
         * Verifies an Action message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Action
         */
        public static fromObject(object: { [k: string]: any }): pbgame.Action;

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @param message Action
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbgame.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Action to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinRequest. */
    interface IJoinRequest {
    }

    /** Represents a JoinRequest. */
    class JoinRequest implements IJoinRequest {

        /**
         * Constructs a new JoinRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbgame.IJoinRequest);

        /**
         * Creates a new JoinRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRequest instance
         */
        public static create(properties?: pbgame.IJoinRequest): pbgame.JoinRequest;

        /**
         * Encodes the specified JoinRequest message. Does not implicitly {@link pbgame.JoinRequest.verify|verify} messages.
         * @param message JoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbgame.IJoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRequest message, length delimited. Does not implicitly {@link pbgame.JoinRequest.verify|verify} messages.
         * @param message JoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbgame.IJoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbgame.JoinRequest;

        /**
         * Decodes a JoinRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbgame.JoinRequest;

        /**
         * Verifies a JoinRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinRequest
         */
        public static fromObject(object: { [k: string]: any }): pbgame.JoinRequest;

        /**
         * Creates a plain object from a JoinRequest message. Also converts values to other types if specified.
         * @param message JoinRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbgame.JoinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinResponse. */
    interface IJoinResponse {

        /** JoinResponse Code */
        Code?: (number|null);
    }

    /** Represents a JoinResponse. */
    class JoinResponse implements IJoinResponse {

        /**
         * Constructs a new JoinResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: pbgame.IJoinResponse);

        /** JoinResponse Code. */
        public Code: number;

        /**
         * Creates a new JoinResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinResponse instance
         */
        public static create(properties?: pbgame.IJoinResponse): pbgame.JoinResponse;

        /**
         * Encodes the specified JoinResponse message. Does not implicitly {@link pbgame.JoinResponse.verify|verify} messages.
         * @param message JoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pbgame.IJoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinResponse message, length delimited. Does not implicitly {@link pbgame.JoinResponse.verify|verify} messages.
         * @param message JoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pbgame.IJoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pbgame.JoinResponse;

        /**
         * Decodes a JoinResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pbgame.JoinResponse;

        /**
         * Verifies a JoinResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinResponse
         */
        public static fromObject(object: { [k: string]: any }): pbgame.JoinResponse;

        /**
         * Creates a plain object from a JoinResponse message. Also converts values to other types if specified.
         * @param message JoinResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pbgame.JoinResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
