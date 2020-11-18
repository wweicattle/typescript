// getter与setter的使用
class FaBa {
    ;
    constructor(
        public _name: string
    ) {
        this._name = _name;
        console.log("-----------------");
        console.log(this._name);

    }
    get name() {
        return this._name + "lerr"
    }
    set name(s: string) {
        this._name = s;
    }
}

let ba = new FaBa("sadsf");
console.log(ba.name);
ba.name = "wuwei";
console.log(ba.name);


// 单例模式,静态方法
console.log("-------------------------");
class Demoba {
    private static instance:Demoba;
    constructor(public name:string){

    }
    static getInstance(){
        if(!this.instance){
            this.instance=new Demoba("wuwei");
        }
        return this.instance;
    }
}


var ba1= Demoba.getInstance();
var ba2= Demoba.getInstance();
console.log(ba1===ba2);
console.log(ba1.name);
console.log(ba2.name);



