// 类型注解，我们 来告诉ts变量是什么类型。
let count :number;
count=123;


//类型推断，会自动推断变量的类型，自动分析 
let countInterface =123;
const d=243;
const total=countInterface+d;


function getTotal(a:number,b:number){
    let sum;
    return a+b

}

let sum=getTotal(2,4);




