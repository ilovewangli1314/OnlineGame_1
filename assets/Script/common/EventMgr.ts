// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass } = cc._decorator;

@ccclass
export class EventMgr {
    static eventTarget: cc.EventTarget = new cc.EventTarget();

    static on<T extends Function>(type: string, callback: T, target?: any, useCapture?: boolean): T {
        return this.eventTarget.on(type, callback, target, useCapture);
    }

    static emit(type: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any): void {
        this.eventTarget.emit(type, arg1, arg2, arg3, arg4, arg5);
    }

    static targetOff(target: any): void {
        this.eventTarget.targetOff(target);
    }
}

export namespace EventType {
    /**
     * !#en The event type
     * !#zh 事件类型
     **/
    @ccclass
    export class Game {
        /**
         * !#en The event type on skill trigger
         * !#zh 当技能触发时
         **/
        static ON_SKILL: string = "game_on_skill";

        static SELECT_SKILL: string = "game_select_skill";
        static USE_SKILL: string = "game_use_skill";

        static HERO_DIE: string = "game_hero_die";
    }
}
