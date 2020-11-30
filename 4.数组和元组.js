// 类型推断出 数组
// 可以使数字或者字符串
var numberB = [1, "2", , 4];
var numberA = [1, 2, -0, 4];
// 只能存储undefined
var numberC = [undefined];
var USer = /** @class */ (function () {
    function USer() {
    }
    return USer;
}());
;
// 对象限制，必须包含一个对象属性name为字符串，以及age为数字
var numberD = [{ name: "dell", age: 20 }];
// /类的数字，new 出来一个对象也是可以的
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var ObjectArr = [
    new Teacher(),
    {
        name: "wuwei",
        age: 343
    }
];
// 元组 帮组我们约束数组中下标的值类型(*)固定形式
var teacherInfo = [4, "male", 10];
// 元组定义
var teacherInfos = ["dsf", 435, 435];
var teacherList = [
    ["dell", "sds", 43],
    ["dell", "sds", 43],
    ["dell", "sds", 43]
];
