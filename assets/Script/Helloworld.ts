import { game } from "./protos/game";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;

        let hero = game.Hero.create();
        hero.Attack = 1;
        // let buffer  = awesomepackage.AwesomeMessage.encode(message).finish();
        // let decoded = awesomepackage.AwesomeMessage.decode(buffer);
        // cc.log(buffer);
        // cc.log(decoded);
        // cc.log(JSON.stringify(decoded));
        cc.log(JSON.stringify(hero));

        let starx = window.starx;
        var onMessage = function (msg) {
            cc.log("[starx] onMessage:" + JSON.stringify(msg));
        };

        var join = function (data) {
            cc.log(JSON.stringify(data));
            if(data.code === 0) {
                starx.on('onMessage', onMessage);
                starx.notify("room.message", {name: "jianggang", content: "Hello world!"}, join);
            }
        };

        var onNewUser = function (data) {
            cc.log("[starx] onNewUser:" + JSON.stringify(data));
        };

        var onMembers = function (data) {
            cc.log("[starx] onMembers: " + JSON.stringify(data));
        };

        starx.init({host: '47.254.94.23', port: 3250, path: '/'}, function () {
            cc.log("initialized");
            starx.on("onNewUser", onNewUser);
            starx.on("onMembers", onMembers);
            starx.request("room.join", {}, join);
        })
    }
}
