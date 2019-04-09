// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class ReduceHp extends cc.Component {

    @property(cc.Label)
    labelNum: cc.Label = null;

    _num: number = 0;
    @property
    set num(value: number) {
        this._num = value;

        this.labelNum.string = "" + value;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad(): void {
        this.node.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, () => {
            this.node.removeFromParent();
            this.node.destroy();
        })
    }

    start(): void {

    }

    // update (dt): void {}
}
