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

const {ccclass, property, menu} = cc._decorator;

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

    @property(cc.Label)
    labelHp: cc.Label = null;

    @property(cc.Label)
    labelMp: cc.Label = null;

    @property(cc.Label)
    labelAttack: cc.Label = null;

    @property(cc.Label)
    labelDefense: cc.Label = null;

    @property(cc.Vec2)
    _originPos: cc.Vec2 = cc.v2();
    get originPos(): cc.Vec2 {
        return this._originPos;
    }
    set originPos(value: cc.Vec2) {
        this._originPos = value;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.position = this._originPos;

        this.refresh();
    }

    refresh() {
        let heroData = this._heroData;
        this.labelHp.string = "Hp:" + heroData.Hp;
        this.labelMp.string = "Mp:" + heroData.Mp;
        this.labelAttack.string = "Att:" + heroData.Attack;
        this.labelDefense.string = "Def:" + heroData.Defense;
    }

    start () {

    }

    // update (dt) {}

    attack(target: Hero) {
        let targetPos = target.originPos;
        let dt = 0.25;
        let moveAct = cc.moveTo(dt, targetPos);
        let reverseAct = cc.moveTo(dt, this._originPos);
        this.node.runAction(cc.sequence(moveAct, cc.callFunc(() => {
            target.beAttacked(this);
        }), reverseAct));
    }
    beAttacked(src: Hero) {
        this._heroData.Hp -= (src.heroData.Attack - this._heroData.Defense);
        this.refresh();
    }

    isAlive(): boolean {
        return (this._heroData.Hp > 0);
    }
}
