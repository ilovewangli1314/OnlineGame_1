import * as $protobuf from "protobufjs";
/** Namespace game. */
export namespace game {

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
        constructor(properties?: game.IHero);

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
        public static create(properties?: game.IHero): game.Hero;

        /**
         * Encodes the specified Hero message. Does not implicitly {@link game.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hero message, length delimited. Does not implicitly {@link game.Hero.verify|verify} messages.
         * @param message Hero message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IHero, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Hero;

        /**
         * Decodes a Hero message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Hero;

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
        public static fromObject(object: { [k: string]: any }): game.Hero;

        /**
         * Creates a plain object from a Hero message. Also converts values to other types if specified.
         * @param message Hero
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Hero, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hero to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Scene. */
    interface IScene {

        /** Scene Heros */
        Heros?: (game.IHero[]|null);
    }

    /** Represents a Scene. */
    class Scene implements IScene {

        /**
         * Constructs a new Scene.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IScene);

        /** Scene Heros. */
        public Heros: game.IHero[];

        /**
         * Creates a new Scene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Scene instance
         */
        public static create(properties?: game.IScene): game.Scene;

        /**
         * Encodes the specified Scene message. Does not implicitly {@link game.Scene.verify|verify} messages.
         * @param message Scene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Scene message, length delimited. Does not implicitly {@link game.Scene.verify|verify} messages.
         * @param message Scene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Scene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Scene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Scene;

        /**
         * Decodes a Scene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Scene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Scene;

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
        public static fromObject(object: { [k: string]: any }): game.Scene;

        /**
         * Creates a plain object from a Scene message. Also converts values to other types if specified.
         * @param message Scene
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Scene, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: game.IAction);

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
        public static create(properties?: game.IAction): game.Action;

        /**
         * Encodes the specified Action message. Does not implicitly {@link game.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link game.Action.verify|verify} messages.
         * @param message Action message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IAction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.Action;

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.Action;

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
        public static fromObject(object: { [k: string]: any }): game.Action;

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @param message Action
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: game.IJoinRequest);

        /**
         * Creates a new JoinRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRequest instance
         */
        public static create(properties?: game.IJoinRequest): game.JoinRequest;

        /**
         * Encodes the specified JoinRequest message. Does not implicitly {@link game.JoinRequest.verify|verify} messages.
         * @param message JoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IJoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinRequest message, length delimited. Does not implicitly {@link game.JoinRequest.verify|verify} messages.
         * @param message JoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IJoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.JoinRequest;

        /**
         * Decodes a JoinRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.JoinRequest;

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
        public static fromObject(object: { [k: string]: any }): game.JoinRequest;

        /**
         * Creates a plain object from a JoinRequest message. Also converts values to other types if specified.
         * @param message JoinRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.JoinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: game.IJoinResponse);

        /** JoinResponse Code. */
        public Code: number;

        /**
         * Creates a new JoinResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinResponse instance
         */
        public static create(properties?: game.IJoinResponse): game.JoinResponse;

        /**
         * Encodes the specified JoinResponse message. Does not implicitly {@link game.JoinResponse.verify|verify} messages.
         * @param message JoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IJoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinResponse message, length delimited. Does not implicitly {@link game.JoinResponse.verify|verify} messages.
         * @param message JoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IJoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.JoinResponse;

        /**
         * Decodes a JoinResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.JoinResponse;

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
        public static fromObject(object: { [k: string]: any }): game.JoinResponse;

        /**
         * Creates a plain object from a JoinResponse message. Also converts values to other types if specified.
         * @param message JoinResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.JoinResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
