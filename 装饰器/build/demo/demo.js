"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var demos = undefined;
// 工厂模式，捕获你可能会出现 错误的异常 ，统一写在装饰器中
function total(name) {
    return function (target, key, des) {
        des.value = function () {
            try {
                des.value();
            }
            catch (e) {
                console.log(name + "发生错误啦sassa");
            }
        };
    };
}
var Demo = /** @class */ (function () {
    function Demo(name) {
        this.name = name;
    }
    Demo.prototype.getData = function () {
        console.log("--------------------------");
        return demos.name;
    };
    Demo.prototype.getDatas = function () {
        console.log(324);
        return demos.name;
    };
    __decorate([
        total("yi")
    ], Demo.prototype, "getData", null);
    __decorate([
        total("er")
    ], Demo.prototype, "getDatas", null);
    return Demo;
}());
var sonss = new Demo("wuwei");
sonss.getData();
sonss.getDatas();
// let sonss = new Demo("wuwei");
