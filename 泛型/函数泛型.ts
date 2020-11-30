// 函数泛型就是你设置的一类对象，这些对象可以是你设置进去饿number或者string，当然也可以不设置。
function join<T,C>(a: T, b: C) {
    return `${a}${b}`;
}
console.log(
    join<string,number>("dfdg", 3232)
);
console.log(join(435,324));

 