///<reference path="conponents.ts ">
// 设置命名空间，这样在编译之后只有暴露出来 一个变量
namespace Home {
    // 在该内部变量上添加一个属性
    export class total {
        // 由component中的interface~page
        as:component.page={
            name:"dsd"
        };
        constructor() {
            console.log(this.as);
            new component.Header("wuwei");
            new component.Center("wuwei");
            new component.Footer("wuwei");
        }
    }
}