




interface son{
    name:string
}
// 在类中进行定义泛型，泛型可以继承一个新的类型，是一个对象的话，就是一个数组中，必须进行存在该属性
// 
class dataManager<T extends son>{
    constructor(private date: T[]) {

    }
    // 返回T类型
    getItem(index: number): T{
        return this.date[index]

    }
}
var sond = new dataManager([{name:"34"}]);
console.log(sond);


// nan 
function hello <T>(params:T){
    return params
}

const f:<T>(params:T)=>T=hello;

