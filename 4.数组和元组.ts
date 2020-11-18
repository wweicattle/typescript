// 类型推断出 数组

// 可以使数字或者字符串
const numberB: (number | string)[] = [1, "2", , 4];


const numberA: number[] = [1, 2, -0, 4];

// 只能存储undefined
const numberC: undefined[] = [undefined];




type USer = { name: string, age: number };
// 对象限制，必须包含一个对象属性name为字符串，以及age为数字
const numberD: USer[] = [{ name: "dell", age: 20 }]



// /类的数字，new 出来一个对象也是可以的
class Teacher {
    name: string;
    age: number;
}


const ObjectArr: Teacher[] = [
    new Teacher(),
    {
        name: "wuwei",
        age: 343,
        // gender: "male"
    }
]


// 元组 帮组我们约束数组中下标的值类型(*)固定形式
const teacherInfo: (string | number)[] = [4, "male", 10];
// 元组定义
const teacherInfos: [string, number, number] = ["dsf", 435, 435];



const  teacherList: [string, string, number][] = [
    ["dell", "sds", 43],
    ["dell", "sds", 43],
    ["dell", "sds", 43]
]












