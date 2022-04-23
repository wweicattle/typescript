
const demos: any = undefined;


// 工厂模式，捕获你可能会出现 错误的异常 ，统一写在装饰器中
function total(name: string) {
    return function (target: any, key: string,des:PropertyDescriptor) {
     des.value=function(){
        try {
           des.value();
        } catch (e) {
            console.log(name + "发生错误啦sassa");
        }
     }
    }
}


class Demo {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @total("yi")
    getData() {
        console.log("--------------------------");
        return demos.name;
    }
    @total("er")
    getDatas() {
        console.log(324);
        return demos.name;
    }
}

let sonss = new Demo("wuwei");
sonss.getData();
sonss.getDatas();
// let sonss = new Demo("wuwei");
