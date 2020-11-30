// 简单来说枚举就是一个为你遍历的对象，你可以设置下标从哪里开始
// 
var Status;
(function (Status) {
    Status[Status["One"] = 0] = "One";
    Status[Status["Two"] = 4] = "Two";
    Status[Status["Three"] = 5] = "Three";
})(Status || (Status = {}));
console.log(Status.One);
console.log(Status.Two);
console.log(Status.Three);
// 利用反之可以利用对象名进行求值。
console.log(Status[4]);
function test(status) {
    if (status === Status.Three) {
        return Status.Three;
    }
    else if (status === Status.Two) {
        return Status.Two;
    }
    else {
        return Status.One;
    }
}
console.log(test(4));
console.log(test(0));
