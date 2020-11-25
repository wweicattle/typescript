"use strict";
var ss = "name";
var Teacher = /** @class */ (function () {
    function Teacher(info) {
        this.info = info;
    }
    // 相当于一个对象中的属性进行遍历
    Teacher.prototype.getInfo = function (key) {
        return this.info[key];
    };
    return Teacher;
}());
var s = new Teacher({
    name: "wr",
    age: 24,
    gender: "male"
});
var t = s.getInfo("age");
console.log(t);
