


// 没有第三个形参，可以进行设置一个变量之后进行返回出去。该属性 继承了属性描述符。
function ds(target: any, key: string): any {
    const des: PropertyDescriptor = {
        // writable: false
    };
    return des;
    // 设置原型上的属性
    // target[key]="wuwk"
    // console.log(target[key],key);
    
}

// 
class Testss {
    @ds
    // 实例上的属性，会先访问 
    namess = "sdd";
}

var c = new Testss();
console.log(c);






