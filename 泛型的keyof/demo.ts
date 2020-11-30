type Ts = "name";
const ss: Ts = "name"

// 做一个总结 T之前可以是（string，number,{},）现在也可以是一个字符串的类型。

// 下面的功能是。当你在传入一个函数的参数的时候，这时可能你要根据某一个interface的类型中的属性进行对应
// 比如传入一个name。之后对应返回出来的值就是要string。。。。。。
interface Person {
    name: string,
    age: number,
    gender: string
}

class Teacher {
    constructor(private info: Person) {

    }
    // 相当于一个对象中的属性进行遍历
    getInfo<T extends keyof Person>(key: T): Person[T] {
        return this.info[key]

    }
}
var s = new Teacher({
    name: "wr",
    age: 24,
    gender: "male"
})

let t = s.getInfo("age");
console.log(t)
