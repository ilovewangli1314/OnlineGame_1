// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { room } from "./../protos/room";
import ReduceHp from "./anims/ReduceHp";
import { EventType, EventMgr } from "../common/EventMgr";
import Team from "./Team";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu("game/Hero")
export default class Hero extends cc.Component {

    private _heroData: room.Hero = null;
    get heroData(): room.Hero {
        return this._heroData;
    }
    set heroData(value: room.Hero) {
        this._heroData = value;

        this.refresh();
    }

    @property(cc.Prefab)
    prefabReduceHp: cc.Prefab = null;

    @property(cc.Label)
    labelHp: cc.Label = null;

    @property(cc.Label)
    labelMp: cc.Label = null;

    @property(cc.Label)
    labelAttack: cc.Label = null;

    @property(cc.Label)
    labelDefense: cc.Label = null;

    /**
     * !#zh 英雄所属队伍
     */
    belongTeam: Team = null;

    _originPos: cc.Vec2 = cc.v2();
    get originPos(): cc.Vec2 {
        return this._originPos;
    }
    set originPos(value: cc.Vec2) {
        this._originPos = value;
    }

    _isAttacking: boolean = false;

    // callFunc on Hero die
    _onDie: Function = null;
    set onDie(value: Function) {
        this._onDie = value;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad(): void {
        this.node.position = this._originPos;

        this.refresh();

        EventMgr.on(EventType.Game.ON_SKILL, (src: Hero, target: Hero, onComplete: Function) => {
            // 默认不攻击己方队伍的英雄(需要判断使用技能的英雄是否存在)
            if (!src || src.belongTeam == this.belongTeam) {
                return;
            }
            // 指定了目标的技能需要判断目标是否正确
            if (target && target != this) {
                return;
            }

            this.beAttacked(src);
            if (onComplete) {
                this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(onComplete)));
            }
        }, this);
    }

    die(): void {
        EventMgr.targetOff(this);
        this.node.removeFromParent();

        if (this._onDie) this._onDie(this);
        EventMgr.emit(EventType.Game.HERO_DIE, this);
    }

    refresh(): void {
        let heroData = this._heroData;
        this.labelHp.string = "Hp:" + heroData.Hp;
        this.labelMp.string = "Mp:" + heroData.Mp;
        this.labelAttack.string = "Att:" + heroData.Attack;
        this.labelDefense.string = "Def:" + heroData.Defense;
    }

    start(): void {

    }

    // update (dt): void {}

    attack(target: Hero): void {
        let targetPos = target.originPos;
        let dt = 0.25;
        let moveAct = cc.moveTo(dt, targetPos);
        let reverseAct = cc.moveTo(dt, this._originPos);
        this.node.runAction(cc.sequence(moveAct, cc.callFunc(() => {
            target.beAttacked(this);
        }), reverseAct, cc.callFunc(() => {
            this._isAttacking = false;
            this.node.zIndex = 0;
        })));

        this._isAttacking = true;
        this.node.zIndex = 1;
    }
    beAttacked(src: Hero): void {
        let reduceHp = src.heroData.Attack - this._heroData.Defense;
        this._heroData.Hp -= reduceHp;
        let prefabReduceHp = cc.instantiate(this.prefabReduceHp);
        // 初始化动画节点起始位置于英雄区域的顶部
        prefabReduceHp.y += this.node.height * 0.5;
        let parent = this.node.parent;
        prefabReduceHp.position = parent.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(prefabReduceHp.position));
        this.node.parent.addChild(prefabReduceHp);
        prefabReduceHp.getComponent(ReduceHp).num = -reduceHp;

        if (this._heroData.Hp <= 0) {
            this.die();

            return;
        }
        this.refresh();
    }

    isAttacking(): boolean {
        return this._isAttacking;
    }
    isAlive(): boolean {
        return (this._heroData.Hp > 0);
    }

    onClick(e: cc.Event): void {
        if (this.isAttacking()) {
            return;
        }

        EventMgr.emit(EventType.Game.USE_SKILL, this);
    }
}
