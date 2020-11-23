function helo(a, b) {
    return a + b;
}
var sa = helo(1, 2);
console.log(sa);
// 返回为空 
var As = function () {
    return;
};
// function srroor(): never {
//     throw new Error();
//     console.log(234);
// }
// srroor();
// 函数进行类型注释需要这样，结构 出来 的对象的值
function add(_a) {
    var first = _a.first, second = _a.second;
    return first + second;
}
;
var asa = add({ first: 1, second: 2 });
var a = function (str) {
    return parseInt(str, 10);
};
