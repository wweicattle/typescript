// 在类中进行定义泛型，泛型可以继承一个新的类型，是一个对象的话，就是一个数组中，必须进行存在该属性
// 
var dataManager = /** @class */ (function () {
    function dataManager(date) {
        this.date = date;
    }
    // 返回T类型
    dataManager.prototype.getItem = function (index) {
        return this.date[index];
    };
    return dataManager;
}());
var sond = new dataManager([{ name: "34" }]);
console.log(sond);
// nan 
function hello(params) {
    return params;
}
var f = hello;
