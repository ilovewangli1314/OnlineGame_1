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
import Team from "./Team";
import GameDataMgr from "./../data/GameDataMgr";
import SkillNode from "./skill/SkillNode";
import { EventType, EventMgr } from "./../common/EventMgr";
import { CommandMgr, SkillCommand } from "./CommandMgr";
import { pbgame } from "../protos/game";
import MyMath from "../common/MyMath";
import { isLong } from "long";
import { pbcommon } from "../../../protos/common";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu("game/MainCtrl")
export default class MainCtrl extends cc.Component {

    @property(cc.Label)
    labelRound: cc.Label = null;

    @property(TeamLayout)
    leftTeam: TeamLayout = null;
    @property(TeamLayout)
    rightTeam: TeamLayout = null;

    private _myTeam: Team = null;
    get myTeam(): Team {
        return this._myTeam;
    }

    private _enemyTeam: Team = null;

    @property(cc.Prefab)
    prefabHero: cc.Prefab = null;

    // 当前选中的技能
    private _selectedSkill: SkillNode = null;
    set selectedSkill(v: SkillNode) {
        this._selectedSkill = v;
    }

    // For simulate
    private _teamArr: Team[] = [];
    private _round: number = 1;
    get round(): number {
        return this._round;
    }
    set round(value: number) {
        this._round = value;

        this.labelRound.string = "Round:" + this._round;
    }
    private _curTeamIdx: number = 0;

    private _netHandlers: {}[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad(): void {
        this.initAllHeros();
        this.addEventListeners();

        // this.simulateActions();

        // 初始化随机数种子
        MyMath.randomSeed = GameDataMgr.scene.randomSeed;

        // 监听服务器push的指令
        let starx = window["starx"];
        let netHandler = this.onRunAction.bind(this);
        this._netHandlers.push({event: "onRunAction", fn: netHandler});
        starx.on("onRunAction", netHandler);

        netHandler = this.onUseSkill.bind(this);
        this._netHandlers.push({event: "onUseSkill", fn: netHandler});
        starx.on("onUseSkill", netHandler);
    }

    onDestroy(): void {
        // 取消监听服务器push的指令
        let starx = window["starx"];
        for (const netHandler of this._netHandlers) {
            starx.off(netHandler["event"], netHandler["fn"]);
        }
    }

    initAllHeros(): void {
        /**
		!#zh 己方英雄固定在左边。
        */
        this._myTeam = this.leftTeam.getComponent(Team);
        for (let index = 0; index < 6; index++) {
            let nodeHero = cc.instantiate(this.prefabHero);
            let hero = nodeHero.getComponent(Hero);
            hero.heroData = GameDataMgr.getHero(0, index);
            hero.belongTeam = this._myTeam;
            hero.originPos = this.leftTeam.getPosWithParent(index, this.node);

            this.node.addChild(nodeHero);
            this._myTeam.addHero(hero);
        }
        this._teamArr.push(this._myTeam);

        /**
		!#zh 敌方英雄固定在右边。
        */
        this._enemyTeam = this.rightTeam.getComponent(Team);
        for (let index = 0; index < 6; index++) {
            let nodeHero = cc.instantiate(this.prefabHero);
            let hero = nodeHero.getComponent(Hero);
            hero.heroData = GameDataMgr.getHero(1, index);
            hero.belongTeam = this._enemyTeam;
            hero.originPos = this.rightTeam.getPosWithParent(index, this.node);

            this.node.addChild(nodeHero);
            this._enemyTeam.addHero(hero);
        }
        this._teamArr.push(this._enemyTeam);
    }

    addEventListeners(): void {
        // this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);

        EventMgr.on(EventType.Game.SELECT_SKILL, (skillNode: SkillNode) => {
            this._selectedSkill = skillNode;
        }, this);
        EventMgr.on(EventType.Game.USE_SKILL, (target: Hero) => {
            if (this._selectedSkill) {
                // CommandMgr.addCommand(new SkillCommand(this._selectedSkill.hero, target));

                // 不允许攻击己方队伍
                if (target.belongTeam == this._selectedSkill.hero.belongTeam) {
                    return;
                }

                let pbMsg = pbgame.UseSkill.create({
                    SrcHeroId: this._selectedSkill.hero.heroData.Id,
                    TargetHeroId: target.heroData.Id,
                    SkillType: 0
                })
                window["starx"].request("entry.useskill", pbgame.UseSkill.encode(pbMsg).finish(), (msg: any) => {
                    let pbObj = pbcommon.Response.decode(msg);
                    cc.log("useskill result: " + pbObj.Code);
                });
            }

            this._selectedSkill = null;
        }, this);
    }

    start(): void {

    }

    update(dt: number): void {
        // this.updateHerosDepth();
    }

    // 动态更新英雄的显示层级(TODO: 需要考虑性能优化)
    // updateHerosDepth(): void {
    //     let allHeros = [].concat(this._myTeam.heros).concat(this._enemyTeam.heros);
    //     let arr = [];
    //     allHeros.sort((a: Hero, b: Hero) => {
    //         if (a.node.y == b.node.y) {
    //             return a.isAttacking ? 1 : 0;
    //         } else {
    //             return a.node.y - b.node.y;
    //         }
    //     });

    //     allHeros.forEach((value: Hero, index: number) => value.node.zIndex = index);
    // }

    // onClick(): void {
    //     cc.log("onclick!");
    // }

    // private simulateActions(): void {
    //     this._teamArr.push(this._myTeam);
    //     this._teamArr.push(this._enemyTeam);

    //     this.schedule(this.runAction, 0.75);
    // }

    private onRunAction(msg: any): void {
        let pbAction = pbgame.Action.decode(msg);
        let srcHero = this.getHero(pbAction.SrcHeroId);
        let targetHero = this.getHero(pbAction.TargetHeroId);
        srcHero.attack(targetHero);
    }

    public getHero(heroId: number): Hero {
        if (heroId < 0) {
            return null;
        }

        for (const team of this._teamArr) {
            for (const hero of team.heros) {
                if (hero.heroData.Id == heroId) {
                    return hero;
                }
            }
        }

        return null;
    }

    private runAction(): void {
        let teamsCount = this._teamArr.length;
        let isRoundEnd = this._teamArr[this._curTeamIdx].isRoundEnd();
        let roundBegin = false;
        if (isRoundEnd) {
            // 队伍数组中后出手的队伍放在后面，据此判断后出手队伍结束动作后一个回合结束
            if (this._curTeamIdx == this._teamArr.length - 1) {
                this.round++;
                roundBegin = true;
            }

            this._curTeamIdx = (++this._curTeamIdx % teamsCount);
        }

        let srcTeam = this._teamArr[this._curTeamIdx];
        if (srcTeam.isEmpty()) {
            cc.log("---Game End!");
            // this.unschedule(this.runAction);

            return;
        }

        let targetTeam = this._teamArr[(this._curTeamIdx + 1) % teamsCount];
        if (targetTeam.isEmpty()) {
            cc.log("---Game End!");
            // this.unschedule(this.runAction);

            return;
        }

        // 回合开始时重置双方队伍为回合开始状态
        if (roundBegin) {
            srcTeam.beginRound();
            targetTeam.beginRound();
        }

        if (CommandMgr.hasCommand()) {
            this.unschedule(this.runAction);
            CommandMgr.executeOneByOne(() => {
                this.runAction();
                this.schedule(this.runAction, 0.75);
            });
        } else {
            srcTeam.runAction(targetTeam);
        }
    }

    onUseSkill(msg: any): void {
        let pbObj = pbgame.UseSkill.decode(msg);
        let srcHero = this.getHero(pbObj.SrcHeroId);
        let targetHero = this.getHero(pbObj.TargetHeroId);

        let eventType = (targetHero ? EventType.Game.ON_SKILL_SINGLE : EventType.Game.ON_SKILL_AOE);
        EventMgr.emit(eventType, srcHero, targetHero, null);
    }
}
