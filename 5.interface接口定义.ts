interface Person {
    // readonly name: string,
    name: string;
    // 可有可没
    age?: number;
    [propName: string]: any;
    say(): string
}




// 继承接口interface
interface teacher extends Person {
    teach(): string;
}

interface sayhi {
    (word: string): string
}

// 下面两个都使用了{name：string}
const getPersonNameONw = (peroson: teacher) => {
    console.log(peroson);

}

const getPersonName = (peroson: Person, name: string) => {
    return peroson.name = name;
}

const peroson = {
    name: "wuwei",
    gennder: "female",
    a: 33434,
    sf: 343,
    434: 32434,
    "sds,324d": 343,
    say() {
        return "seyas"
    },
    teach() { return "dsf" }
}

// 注意如果传入接口Person中没有出现过的属性，这时你只能放上面person中的有额外接口中没有的属性 ，不会有报错，
// 如果你直接放在函数形参中就会出现 错误
getPersonNameONw(peroson)
getPersonName({
    name: "wuwei",
    gennder: "female",
    say() {
        return "say"
    }

}, "wukai");


// 就是一个类
class son implements Person {
    name = "343";
    say() {
        return "43"
    }
}



const s: sayhi = (str) => {
    return str
}

console.log(s("343"));

