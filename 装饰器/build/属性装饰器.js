"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 没有第三个形参，可以进行设置一个变量之后进行返回出去。该属性 继承了属性描述符。
function ds(target, key) {
    var des = {
    // writable: false
    };
    return des;
    // 设置原型上的属性
    // target[key]="wuwk"
    // console.log(target[key],key);
}
// 
var Testss = /** @class */ (function () {
    function Testss() {
        // 实例上的属性，会先访问 
        this.namess = "sdd";
    }
    __decorate([
        ds
    ], Testss.prototype, "namess", void 0);
    return Testss;
}());
var c = new Testss();
console.log(c);
