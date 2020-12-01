"use strict";
// 类的装饰器是说什么
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过  @ 符号来使用
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器
// 方法装饰器，当装饰器是在一个普通的方法中的时候，第一个参数就是方法名的prototype
// 第二个参数就是该方法名，第三个是该方法调用实例上this.XXX的劫持
// 当是静态static方法是，第一个参数是构造函数，
function getNames(target, keys, des) {
    console.log(target);
    console.log(keys);
    des.writable = false;
}
var Test = /** @class */ (function () {
    function Test(name) {
        this.name = name;
    }
    Test.prototype.d = function () {
        return this.name;
    };
    __decorate([
        getNames
    ], Test.prototype, "d", null);
    return Test;
}());
var tests = new Test("wuweis");
// (son as any).getName();
tests.d = function () {
    return "43434";
};
console.log(tests.d());
