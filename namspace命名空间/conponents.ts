namespace component {
    // 创建 新的命名空间,
    export namespace sunCom {
        export class Test {
            getDate() {
                console.log("test date");

            }
        }
    }
    // 创建接口
    export interface page {
        name: string
    }
    export class Header {
        constructor(private src: string) {
            let div = document.createElement("div");
            div.innerText = "oneone";
            document.body.appendChild(div);
        }
    }
    export class Center {
        constructor(private src: string) {
            let div = document.createElement("div");
            div.innerText = "twotwo";
            document.body.appendChild(div);
        }
    }
    export class Footer {
        constructor(private src: string) {
            let div = document.createElement("div");
            div.innerText = "threethree";
            document.body.appendChild(div);
        }
    }
}