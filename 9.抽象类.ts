// readonly 只能读不能写 
class Fajiu {
    public readonly name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}

var f = new Fajiu("wuwei");

// f.name=3435;
console.log(f.name);


// abstract抽象类
abstract class Jiu {
    width: number;
    getType() {
        return "wuwei"
    };
    abstract getArea(): number;
}


class Circle extends Jiu {
    getArea() {
        return 123;
    }
}
var fs = new Circle();
console.log(fs.getArea());


// interface的使用

interface Persons {
    name: string
}
interface jiuyi extends Persons {
    name: string
}
interface jiuyiage extends Persons {
    name: string;
    age: number
}
interface jiuyisex extends Persons {
    name: string;
    sex: string
}


const student={
    name:"xialu",
    age:24,
    sex:"female"
}
let getUserInfo = (user: Persons) => {
    console.log(user.name);
}


getUserInfo(student);
