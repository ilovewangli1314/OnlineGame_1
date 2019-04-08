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

const {ccclass, property} = cc._decorator;

@ccclass
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

    onLoad () {
        this._heros = [];
    }

    start () {

    }

    // update (dt) {}

    addHero(hero: Hero) {
        hero.onDie = this.onHeroDie.bind(this);
        this._heros.push(hero);
    }
    onHeroDie(hero: Hero) {
        // TODO: can use fast remove
        this._heros.splice(this._heros.indexOf(hero), 1);
    }

    runAction(team: Team) {
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

    isRoundEnd() {
        return (this._turnIdx >= this._heros.length);
    }
    beginRound() {
        this._turnIdx = 0;
    }

    isEmpty() {
        return (this._heros.length <= 0);
    }
}
