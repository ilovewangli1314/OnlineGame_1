// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import Hero from "./Hero";
import { EventMgr, EventType } from "../common/EventMgr";

const { ccclass, menu } = cc._decorator;

@ccclass
@menu("game/Team")
export default class Team extends cc.Component {

    private _heros: Hero[] = [];
    get heros(): Hero[] {
        return this._heros;
    }
    set heros(v: Hero[]) {
        this._heros = v;
    }

    private _turnIdx: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad(): void {
        EventMgr.on(EventType.Game.ON_SKILL_AOE, (src: Hero, target: Hero, onComplete: Function) => {
            // 默认不攻击己方队伍的英雄(需要判断使用技能的英雄是否存在)
            if (!src || src.belongTeam == this) {
                return;
            }

            this._heros.forEach((hero: Hero) => {
                hero.beAttacked(src);
            });

            if (onComplete) {
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(onComplete)));
            }
        }, this);
    }

    start(): void {

    }

    // update (dt): void {}

    addHero(hero: Hero): void {
        hero.onDie = this.onHeroDie.bind(this);
        this._heros.push(hero);
    }
    onHeroDie(hero: Hero): void {
        // TODO: can use fast remove
        this._heros.splice(this._heros.indexOf(hero), 1);
    }

    runAction(team: Team): void {
        let targetHero = team.getHead();
        if (!this.isRoundEnd() && targetHero) {
            this._heros[this._turnIdx++].attack(targetHero);
        }
    }

    getHead(): Hero {
        if (this._heros.length > 0) {
            return this._heros[0];
        }

        return null;
    }

    isRoundEnd(): boolean {
        return (this._turnIdx >= this._heros.length);
    }
    beginRound(): void {
        this._turnIdx = 0;
    }

    isEmpty(): boolean {
        return (this._heros.length <= 0);
    }
}
