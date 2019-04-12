// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { EventType, EventMgr } from "../../common/EventMgr";
import Hero from "../Hero";
import { CommandMgr, SkillCommand } from "../CommandMgr";
import { pbgame } from "../../protos/game";
import { pbcommon } from "../../protos/common";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu("game/skill/SkillNode")
export default class SkillNode extends cc.Component {

    @property(cc.Label)
    labelIdx: cc.Label = null;

    @property(cc.Toggle)
    toggle: cc.Toggle = null;

    _hero: Hero = null;
    get hero(): Hero {
        return this._hero;
    }
    set hero(v: Hero) {
        this._hero = v;
    }

    // Fixme: for test
    _heroIdx: number = -1;
    set heroIdx(v: number) {
        this._heroIdx = v;

        this.labelIdx.string = cc.js.formatStr("[%d]", this._heroIdx);
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad(): void {
        EventMgr.on(EventType.Game.USE_SKILL, (target: Hero) => {
            this.toggle.isChecked = false;
        }, this);

        EventMgr.on(EventType.Game.HERO_DIE, (hero: Hero) => {
            if (hero != this._hero) {
                return;
            }

            this.toggle.isChecked = false;
            this.toggle.interactable = false;
        }, this);
    }

    start(): void {

    }

    // update (dt): void {}

    onClick(): void {
        if (!this.hero.isAlive()) {
            return;
        }

        // Fixme: for test
        if (this._heroIdx == 0) {
            // 只在选中状态时触发选中技能事件
            if (this.toggle.isChecked) {
                EventMgr.emit(EventType.Game.SELECT_SKILL, this);
            }
        } else {
            if (this.toggle.isChecked) {
                // CommandMgr.addCommand(new SkillCommand(this._hero, null));
                let pbMsg = pbgame.UseSkill.create({
                    SrcHeroId: this._hero.heroData.Id,
                    TargetHeroId: -1,
                    SkillType: 0
                })
                window["starx"].request("entry.useskill", pbgame.UseSkill.encode(pbMsg).finish(), (msg: any) => {
                    let pbObj = pbcommon.Response.decode(msg);
                    cc.log("useskill result: " + pbObj.Code);
                });
            }

            this.toggle.isChecked = false;
        }
    }
}
