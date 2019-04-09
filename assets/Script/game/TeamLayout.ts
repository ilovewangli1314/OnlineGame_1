// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property, executeInEditMode, menu } = cc._decorator;

@ccclass
@executeInEditMode
@menu("game/TeamLayout")
export default class TeamLayout extends cc.Component {

    @property([cc.Node])
    nodes: cc.Node[] = [];

    @property(Boolean)
    private _isLeft: boolean = true;
    @property
    get isLeft(): boolean {
        return this._isLeft;
    }
    set isLeft(value: boolean) {
        if (value != this._isLeft) {
            this._isLeft = value;

            this.refreshDirection();
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad(): void {
        this.refreshDirection();
    }

    refreshDirection(): void {
        let multiple = (this.isLeft ? 1 : -1);
        this.node.scaleX = Math.abs(this.node.scaleX) * multiple;
        this.nodes.forEach(element => {
            element.scaleX = Math.abs(element.scaleX) * multiple;
        });
    }

    start(): void {

    }

    // update (dt): void {}

    getPosWithParent(idx: number, parent: cc.Node): cc.Vec2 {
        if (idx < 0 || idx >= this.nodes.length) {
            return cc.v2();
        }

        let node = this.nodes[idx];
        let worldPos = node.parent.convertToWorldSpaceAR(node.position);
        let nodePos = parent.convertToNodeSpaceAR(worldPos);
        return nodePos;
    }
}
