interface Bird {
    fly: boolean;
    singss:()=>{}
}
interface Dog {
    fly: boolean;
    bark: () => {}
}

// 
function df(animal: Bird | Dog) {
    if ("singss" in animal) {
        animal.singss();
    } else {
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
    singss() {
        console.log(545);
        return 0
    }
}
df(f)

