// private public protected
// private是在类内可以执行
// public 类内外都可以执行
// protected 类内与继承的子类可以运行 
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
var Person7 = /** @class */ (function () {
    function Person7() {
        this.names = "wuweisasas";
    }
    Person7.prototype.sayHi = function () {
        return this.name;
    };
    return Person7;
}());
var Tea = /** @class */ (function (_super) {
    __extends(Tea, _super);
    function Tea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tea.prototype.sayA = function () {
        // 自定义属性发生错误 
        var a = this.sayHi();
        console.log(a);
        console.log(_super.prototype.sayHi.call(this));
        console.log(this.names);
    };
    return Tea;
}(Person7));
var sd = new Person7();
console.log(sd.sayHi());
var f = new Tea();
f.sayA();
var Fa = /** @class */ (function () {
    // 简写语法
    // 相当于 public name: string
    //  constructor(name: string) {
    // this.name=name;
    // }
    function Fa(name) {
        this.name = name;
    }
    return Fa;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(age) {
        var _this = 
        // 必须在构造函数中添加super（传给父类的构造函数参数）相当与调用父类实例 (必须)
        // 还有一个使用super的时候，就是在你继承父类的子类，重写了一样的属性方法，这时你要用父类的属性方法时你就要
        // 使用super.getXX()
        _super.call(this, { name: 33 }) || this;
        _this.age = age;
        return _this;
    }
    return Son;
}(Fa));
var fs = new Son(24);
console.log(fs);
console.log(fs.name);
// 这下面的 问题 为什么实例一个 构造函数传参数 的时候，已经定义了number结果把数组与字符串赋值给它都可以。
// 一开始你传入的是一个没有 设置限制的变量，然后就可以像不管设置的限制，比如以下传入的是一个对象
var dd = /** @class */ (function () {
    function dd(a) {
        this.sf = a;
        console.log(this.sf);
    }
    return dd;
}());
// 现在传入 的 是一个数组
var dsa = new dd({ ds: 34, sad: 32 });
console.log(dsa.sf);
