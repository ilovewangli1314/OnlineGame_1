// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { pbgame } from "./../protos/game";

export default class GameDataMgr {
    static scene: pbgame.Scene = null;

    static onGameBegin(data: any): void {
        this.scene = pbgame.Scene.decode(data);
    }

    static getHero(teamIdx: number, heroIdx: number): pbgame.Hero {
        let team = this.scene.teams[teamIdx];
        let hero = team.Heros[heroIdx];
        return <pbgame.Hero>hero;
    }
}
