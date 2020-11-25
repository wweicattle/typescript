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