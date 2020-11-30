// getter与setter的使用
var FaBa = /** @class */ (function () {
    function FaBa(_name) {
        this._name = _name;
        this._name = _name;
        console.log("-----------------");
        console.log(this._name);
    }
    ;
    Object.defineProperty(FaBa.prototype, "name", {
        get: function () {
            return this._name + "lerr";
        },
        set: function (s) {
            this._name = s;
        },
        enumerable: false,
        configurable: true
    });
    return FaBa;
}());
var ba = new FaBa("sadsf");
console.log(ba.name);
ba.name = "wuwei";
console.log(ba.name);
// 单例模式,静态方法
// 首先你要知道单例模式是什么，他就是父类只可以进行实例一次，当在实例时会判断是否以存在
// 实例化的instance，只会赋值一次instance
console.log("-------------------------");
var Demoba = /** @class */ (function () {
    function Demoba(name) {
        this.name = name;
    }
    Demoba.getInstance = function () {
        console.log(this);
        if (!this.instance) {
            this.instance = new Demoba("wuwei");
        }
        return this.instance;
    };
    return Demoba;
}());
var ba1 = Demoba.getInstance();
var ba2 = Demoba.getInstance();
console.log(ba1);
console.log(ba1.name);
console.log(ba2.name);
