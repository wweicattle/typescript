// 类的装饰器是说什么
// 装饰器本身是一个函数
// 类装饰器接受的参数是构造函数
// 装饰器通过  @ 符号来使用

// 装饰器
function getNames(target: any,keys:string,des:PropertyDescriptor) {
    console.log(target);
    console.log(keys);
    des.writable=false;
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


const tests = new Test("wuweis");
// (son as any).getName();
tests.d=()=>{
    return "43434"
}

console.log(tests.d());


