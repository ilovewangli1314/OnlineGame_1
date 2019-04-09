// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { EventMgr, EventType } from "../common/EventMgr";
import Hero from "./Hero";

export class CommandMgr {
    private static _commands: ICommand[] = [];

    private static _onComplete: Function = null;

    static addCommand(command: ICommand): void {
        this._commands.push(command);
    }

    static executeOneByOne(onComplete: Function): void {
        this._onComplete = onComplete;
        this.executeNext();
    }
    static executeNext(): void {
        if (this.hasCommand()) {
            this._commands.shift().execute();
        } else if (this._onComplete) {
            this._onComplete();
            this._onComplete = null;
        }
    }

    static hasCommand(): boolean {
        return this._commands.length > 0;
    }
}

export interface ICommand {
    execute(): void;
}

export class SkillCommand implements ICommand {
    srcHero: Hero = null;
    targetHero: Hero = null;

    constructor(srcHero: Hero, targetHero: Hero) {
        this.srcHero = srcHero;
        this.targetHero = targetHero;
    }

    execute(): void {
        let eventType = (this.targetHero ? EventType.Game.ON_SKILL_SINGLE : EventType.Game.ON_SKILL_AOE);
        EventMgr.emit(eventType, this.srcHero, this.targetHero, () => {
            CommandMgr.executeNext();
        });
    }
}
