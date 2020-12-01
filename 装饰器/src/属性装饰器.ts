


function ds(target: any, key: string):any {
    // const des: PropertyDescriptor = {
    //     // writable: false
    // };
    // return des;
    // 设置原型上的属性
    target[key]="wuwk"
    console.log(target[key],key);
}

// 
class Testss {
    @ds
    // 实例上的属性，会先访问 
    namess= "sdd";
}

var c = new Testss();
console.log(c);






