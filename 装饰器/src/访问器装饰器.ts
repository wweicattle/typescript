


function tes(trarget: any, key: string, des: PropertyDescriptor) {
    trarget.names=3434;
    console.log(trarget);
    console.log(key);
    // des.writable=false;
}
// 
class testss {
    names: string;
    constructor(_name: string) {
        this.names = _name;
    }
    get sds() {
        return this.names;
    }
    @tes
     set sds(_name:string) {
        this.names = _name;
    }

}

var f=new testss("wuwei");
f.names="wuaki"
console.log(f.names);
