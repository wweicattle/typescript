"use strict";
// 类的装饰器是说什么
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过  @ 符号来使用
// 装饰器
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
function testDeco() {
    return function testDecorator(constructor) {
        constructor.prototype.getName = function () {
            console.log("wuweicopyw");
        };
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = "realWUWEI";
                return _this;
            }
            class_1.prototype.getNo = function () {
                console.log(this.sd);
                return this.name;
            };
            return class_1;
        }(constructor));
    };
}
// 装饰器
// function testDecoratoryi(constructor: any) {
// constructor.prototype.getName = () => {
//         console.log("wuweicopy")
// }
// }
var test = testDeco()(/** @class */ (function () {
    function Decorate(name) {
        this.sd = "dd";
        console.log("main--------------");
        this.name = name;
    }
    return Decorate;
}()));
var sons = new test("wuwei");
sons.getName();
console.log(sons.getNo() + "f44");
