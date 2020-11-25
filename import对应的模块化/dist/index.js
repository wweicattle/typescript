define("component", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Center = exports.Header = void 0;
    var Header = /** @class */ (function () {
        function Header(src) {
            this.src = src;
            var div = document.createElement("div");
            div.innerText = "oneone";
            document.body.appendChild(div);
        }
        return Header;
    }());
    exports.Header = Header;
    var Center = /** @class */ (function () {
        function Center(src) {
            this.src = src;
            var div = document.createElement("div");
            div.innerText = "twotwo";
            document.body.appendChild(div);
        }
        return Center;
    }());
    exports.Center = Center;
    var Footer = /** @class */ (function () {
        function Footer(src) {
            this.src = src;
            var div = document.createElement("div");
            div.innerText = "threethree";
            document.body.appendChild(div);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
define("demo", ["require", "exports", "component"], function (require, exports, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var total = /** @class */ (function () {
        function total() {
            new component_1.Header("wuwei");
            new component_1.Center("wuwei");
            new component_1.Footer("wuwei");
        }
        return total;
    }());
    exports.default = total;
});
