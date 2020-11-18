class Person {
    name = "wuwei";
    getName() {
        return this.name;
    }
}
const S = new Person();
console.log(S.name);


class Teachers extends Person {
    // name = "wukais"
    getTexxterName() {
        return "dadad"
    }
    getNames() {
        return 33+ super.getName();
    }
}

const SS = new Teachers();
console.log(SS);

console.log(SS.getNames());