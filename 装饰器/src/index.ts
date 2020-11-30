// 类的装饰器是说什么
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过  @ 符号来使用

// 装饰器
function testDecorator<T extends new (...args: any[]) => any>(constructor: T) {
    // console.log(sa);
    return class extends constructor {
        name = "realWUWEI"
        getNo() {
            return this.name

        }
    }
}

// // 装饰器
// function testDecoratoryi(constructor: any) {
//     // constructor.prototype.getName = () => {
//         console.log("wuweicopy")
//     // }
// }


@testDecorator
class Decorate {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

var son = new Decorate("wuwei");
// (son as any).getName();

