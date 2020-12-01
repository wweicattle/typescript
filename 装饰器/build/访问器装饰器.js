"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function tes(trarget, key, des) {
    trarget.names = 3434;
    console.log(trarget);
    console.log(key);
    // des.writable=false;
}
// 
var testss = /** @class */ (function () {
    function testss(_name) {
        this.names = _name;
    }
    Object.defineProperty(testss.prototype, "sds", {
        get: function () {
            return this.names;
        },
        set: function (_name) {
            this.names = _name;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        tes
    ], testss.prototype, "sds", null);
    return testss;
}());
var f = new testss("wuwei");
f.names = "wuaki";
console.log(f.names);
