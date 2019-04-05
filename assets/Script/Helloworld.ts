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

        let starx = window.starx;
        var onMessage = function (msg) {
            cc.log("[starx] onMessage:" + msg);
        };

        var join = function (data) {
            cc.log(data);
            if(data.code === 0) {
                starx.on('onMessage', onMessage)
            }
        };

        var onNewUser = function (data) {
            cc.log(data);
        };

        var onMembers = function (data) {
            cc.log(data);
        };

        starx.init({host: '47.254.94.23', port: 3250, path: '/'}, function () {
            cc.log("initialized");
            starx.on("onNewUser", onNewUser);
            starx.on("onMembers", onMembers);
            starx.request("room.join", {}, join);
        })
    }
}
