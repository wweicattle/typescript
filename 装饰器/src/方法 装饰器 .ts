// 类的装饰器是说什么
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过  @ 符号来使用

// 装饰器
function getNames(target: any) {
 console.log(target);
}

class Test {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @getNames
    d() {
        return this.name;
    }
}


// var son = new Decorates("wuwei");
// (son as any).getName();

