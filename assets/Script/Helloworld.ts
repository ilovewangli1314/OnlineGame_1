import { pbgame } from "./protos/game";
import { pbcommon } from "./protos/common";
import GameDataMgr from "./data/GameDataMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    labelAlert: cc.Label = null;

    start(): void {
        // init logic
        this.labelAlert.string = "waitting for other player...";

        let hero = pbgame.Hero.create();
        // hero.Attack = 1;
        // let buffer  = awesomepackage.AwesomeMessage.encode(message).finish();
        // let decoded = awesomepackage.AwesomeMessage.decode(buffer);
        // cc.log(buffer);
        // cc.log(decoded);
        // cc.log(JSON.stringify(decoded));
        // cc.log(JSON.stringify(hero));

        let starx = window["starx"];
        var onMessage = function (msg) {
            cc.log("[starx] onMessage:" + JSON.stringify(msg));
        };

        var join = function (data) {
            let joinResponse = pbcommon.Response.decode(data);
            if (joinResponse.Code == 0) {
                cc.log("[starx] join success!");
                // starx.on('onMessage', onMessage);
                // starx.notify("room.message", {name: "jianggang", content: "Hello world!"}, join);
            }
        };

        var onNewUser = function (data) {
            // let newUser = protos.NewUser.decode(data);
            // cc.log("[starx] onNewUser:" + newUser.Content);
        };

        var onGameBegin = function (data: any): void {
            GameDataMgr.onGameBegin(data);
            // let allMembers = protos.AllMembers.decode(data);
            // cc.log("[starx] onMembers: " + JSON.stringify(allMembers));

            cc.director.loadScene("game");
        };

        let host = "47.254.94.23";
        host = "127.0.0.1";
        starx.init({ host: host, port: 3250, path: '/' }, function () {
            cc.log("initialized");
            // starx.on("onNewUser", onNewUser);
            starx.on("onGameBegin", onGameBegin);
            starx.request("entry.join", {}, join);
        })
    }
}
