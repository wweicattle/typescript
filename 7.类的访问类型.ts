// private public protected
// private是在类内可以执行
// public 类内外都可以执行
// protected 类内与继承的子类可以运行 

class Person7 {
    private name: string = "434";
    protected names: string = "wuweisasas";
     sayHi() {
        return this.name;
    }
}


class Tea extends Person7 {
    //  name: string = "434sasas";
    sf:string;
    public sayA() {
        // 自定义属性发生错误 
        let a = this.sayHi()
        console.log(a);
        console.log(super.sayHi());
        console.log(this.names);
    }
}
var sd = new Person7();
console.log(sd.sayHi());
var f = new Tea();
f.sayA();




class Fa {
    // 简写语法
    // 相当于 public name: string
    //  constructor(name: string) {
    // this.name=name;
    // }

    constructor(public name: string) {
    }

}

class Son extends Fa {
    constructor(public age: number) {
        // 必须在构造函数中添加super（传给父类的构造函数参数）相当与调用父类实例 (必须)
        // 还有一个使用super的时候，就是在你继承父类的子类，重写了一样的属性方法，这时你要用父类的属性方法时你就要
        // 使用super.getXX()
        super("wuwei");
    }

}
var fs = new Son(24);
console.log(fs);
console.log(fs.name);


// 这下面的 问题 为什么实例一个 构造函数传参数 的时候，已经定义了number结果把数组与字符串赋值给它都可以。
// 一开始你传入的是一个没有 设置限制的变量，然后就可以像不管设置的限制，比如以下传入的是一个对象
class dd {
    public sf: string;
    constructor(a) {
        this.sf = a
        console.log(this.sf);
    }
}
// 现在传入 的 是一个数组
var dsa = new dd({ds:34,sad:32});
console.log(dsa.sf);

