// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import TeamLayout from "./TeamLayout";
import Hero from "./Hero";
import { room } from "../protos/room";
import Team from "./Team";

const {ccclass, property, menu} = cc._decorator;

@ccclass
@menu("game/MainCtrl")
export default class MainCtrl extends cc.Component {

    @property(cc.Label)
    labelRound: cc.Label = null;

    @property(TeamLayout)
    leftTeam: TeamLayout = null;
    @property(TeamLayout)
    rightTeam: TeamLayout = null;

    @property(Team)
    private _myTeam: Team = null;
    @property(Team)
    private _enemyTeam: Team = null;

    @property(cc.Prefab)
    prefabHero: cc.Prefab = null;

    // For simulate
    private _teamArr: Team[] = [];
    private _round: number = 1;
    set round(value: number) {
        this._round = value;

        this.labelRound.string = "Round:" + this._round;
    }
    private _curTeamIdx: number = 0;
    private _curHeroIdx: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.initAllHeros();

        this.simulateActions();
    }

    initAllHeros() {
        /**
		!#zh 己方英雄固定在左边。 
        */
        this._myTeam = new Team();
        for (let index = 0; index < 6; index++) {
            let heroData = new room.Hero();
            heroData.Id = index + 1;
            heroData.Hp = 50 + Math.round(5 * Math.random());
            heroData.Mp = 100 + Math.round(5 * Math.random());
            heroData.Attack = 10 + Math.round(5 * Math.random());
            heroData.Defense = 3 + Math.round(2 * Math.random());

            let nodeHero = cc.instantiate(this.prefabHero);
            let hero = nodeHero.getComponent(Hero);
            hero.heroData = heroData;
            hero.originPos = this.leftTeam.getPosWithParent(index, this.node);

            this.node.addChild(nodeHero);
            this._myTeam.heros.push(hero);
        }

        /**
		!#zh 敌方英雄固定在右边。 
        */
       this._enemyTeam = new Team();
        for (let index = 0; index < 6; index++) {
            let heroData = new room.Hero();
            heroData.Id = index + 1;
            heroData.Hp = 50 + Math.round(5 * Math.random());
            heroData.Mp = 100 + Math.round(5 * Math.random());
            heroData.Attack = 10 + Math.round(5 * Math.random());
            heroData.Defense = 3 + Math.round(2 * Math.random());

            let nodeHero = cc.instantiate(this.prefabHero);
            let hero = nodeHero.getComponent(Hero);
            hero.heroData = heroData;
            hero.originPos = this.rightTeam.getPosWithParent(index, this.node);

            this.node.addChild(nodeHero);
            this._enemyTeam.heros.push(hero);
        }
    }

    start () {

    }

    // update (dt) {}

    simulateActions() {
        this._teamArr.push(this._myTeam);
        this._teamArr.push(this._enemyTeam);
        let teamsCount = this._teamArr.length;
        
        let callback = (dt: number) => {
            let isRoundEnd = this._teamArr[this._curTeamIdx].isRoundEnd();
            if (isRoundEnd) {
                this._curTeamIdx = (++this._curTeamIdx % teamsCount);
            }

            let srcTeam = this._teamArr[this._curTeamIdx];
            if (srcTeam.isEmpty()) {
                cc.log("---Game End!");
                return;
            }

            let targetTeam = this._teamArr[(this._curTeamIdx + 1) % teamsCount];
            if (targetTeam.isEmpty()) {
                cc.log("---Game End!");
                return;
            }

            srcTeam.runAction(targetTeam);
        }
        this.schedule(callback, 1);
    }
}
