// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import SkillNode from "./SkillNode";
import MainCtrl from "../MainCtrl";
import Hero from "../Hero";

const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu("game/skill/SkillPanel")
export default class SkillPanel extends cc.Component {

    @property(cc.Prefab)
    prefabSkillNode: cc.Prefab = null;

    @property(cc.Node)
    nodeMain: cc.Node = null;

    @property(MainCtrl)
    mainCtrl: MainCtrl = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad(): void {
        this.init();
    }

    start(): void {
    }

    init(): void {
        let heros = this.mainCtrl.myTeam.heros;
        heros.forEach((hero: Hero, idx: number) => {
            let prefab = cc.instantiate(this.prefabSkillNode);
            let skillNode = prefab.getComponent(SkillNode);
            skillNode.heroIdx = idx; // Fixme: for test
            skillNode.hero = hero;

            this.nodeMain.addChild(prefab);
        });
    }

    // update (dt): void {}
}
