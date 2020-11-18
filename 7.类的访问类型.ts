// private public protected
// private是在类内可以执行
// public 类内外都可以执行
// protected 类内与继承的子类可以运行 

class Person7 {
    private name: string = "434";
    protected names: string = "wuweisasas";
    public sayHi() {
        return this.name;
    }
}


class Tea extends Person7 {
    public sayA() {
        // 自定义属性发生错误 
        let a = this.sayHi()
        console.log(a);
        console.log(this.names);
    }
}
var sd=new Person7();
console.log(sd.sayHi());
var f = new Tea();
f.sayA();
