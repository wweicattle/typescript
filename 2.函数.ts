function helo(a: number, b: number): number {
    return a + b;
}

const sa = helo(1, 2);
console.log(sa);



// 返回为空 
const As = function (): void {
    return;
};

// function srroor(): never {
//     throw new Error();
//     console.log(234);
// }

// srroor();



// 函数进行类型注释需要这样，结构 出来 的对象的值
function add({ first, second }: { first: number, second: number }): number {
    return first + second;
};
let asa = add({ first: 1, second: 2 });



const a:(str:string)=>number=()=>{
    return 434
} 