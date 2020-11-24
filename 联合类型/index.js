// 
function df(animal) {
    if ("singss" in animal) {
        animal.singss();
    }
    else {
        animal.bark();
    }
    // if (animal.fly) {
    //     (animal as Bird).sing();
    // } else {
    //     (animal as Dog).bark();
    // }
}
var f = {
    fly: true,
    singss: function () {
        console.log(545);
        return 0;
    }
};
df(f);console.log(455);
