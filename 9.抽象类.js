var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// readonly 只能读不能写 
var Fajiu = /** @class */ (function () {
    function Fajiu(_name) {
        this.name = _name;
    }
    return Fajiu;
}());
var f = new Fajiu("wuwei");
console.log(f.name);
// abstract抽象类
var Jiu = /** @class */ (function () {
    function Jiu() {
    }
    Jiu.prototype.getType = function () {
        return "wuwei";
    };
    ;
    return Jiu;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.getArea = function () {
        return 2;
    };
    return Circle;
}(Jiu));
var fss = new Circle();
console.log("---------------");
console.log(fss.getArea());
var student = {
    name: "xialu",
    age: 24,
    sex: "female"
};
// 直接把Persons给类型注解 你也可以使用user:jiuyi|jiusex------这样子
var getUserInfo = function (user) {
    console.log(user.name);
};
getUserInfo(student);
