"use strict";
var component;
(function (component) {
    // 创建 新的命名空间,
    var sunCom;
    (function (sunCom) {
        var Test = /** @class */ (function () {
            function Test() {
            }
            Test.prototype.getDate = function () {
                console.log("test date");
            };
            return Test;
        }());
        sunCom.Test = Test;
    })(sunCom = component.sunCom || (component.sunCom = {}));
    var Header = /** @class */ (function () {
        function Header(src) {
            this.src = src;
            var div = document.createElement("div");
            div.innerText = "oneone";
            document.body.appendChild(div);
        }
        return Header;
    }());
    component.Header = Header;
    var Center = /** @class */ (function () {
        function Center(src) {
            this.src = src;
            var div = document.createElement("div");
            div.innerText = "twotwo";
            document.body.appendChild(div);
        }
        return Center;
    }());
    component.Center = Center;
    var Footer = /** @class */ (function () {
        function Footer(src) {
            this.src = src;
            var div = document.createElement("div");
            div.innerText = "threethree";
            document.body.appendChild(div);
        }
        return Footer;
    }());
    component.Footer = Footer;
})(component || (component = {}));
///<reference path="conponents.ts ">
// 设置命名空间，这样在编译之后只有暴露出来 一个变量
var Home;
(function (Home) {
    // 在该内部变量上添加一个属性
    var total = /** @class */ (function () {
        function total() {
            // 由component中的interface~page
            this.as = {
                name: "dsd"
            };
            console.log(this.as);
            new component.Header("wuwei");
            new component.Center("wuwei");
            new component.Footer("wuwei");
        }
        return total;
    }());
    Home.total = total;
})(Home || (Home = {}));
