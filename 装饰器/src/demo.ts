// 类的装饰器是说什么
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过  @ 符号来使用
// 装饰器

function testDeco() {
    return function testDecorator<T extends new (...args: any[]) => any>(constructor: T) {
        constructor.prototype.getName = () => {
            console.log("wuweicopyw")
        }
        return class extends constructor {
            name = "realWUWEI"
            getNo() {
                console.log(this.sd);
                return this.name
            }
        }
    }
}


// 装饰器
// function testDecoratoryi(constructor: any) {
// constructor.prototype.getName = () => {
//         console.log("wuweicopy")
// }
// }


let test = testDeco()(
    class Decorate {
        sd: string = "dd"
        name: string;
        constructor(name: string) {
            console.log("main--------------");
            this.name = name;
        }
    })

    
var sons = new test("wuwei");
sons.getName();
console.log(sons.getNo() + "f44")
