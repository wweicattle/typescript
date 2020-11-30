"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var in_1 = __importDefault(require("./in"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var router = express_1.Router();
var sum = 0;
// 注意你设置了继承接口，那你你必须按照接口中 的属性，不能多出来未定义的属性
router.get("/", function (req, res) {
    res.send("\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <meta charset=\"utf-8\">\n      <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n      <meta name=\"renderer\" content=\"webkit\">\n    </head>\n    <body>\n      <div id=\"app\"></div>\n      <form action=\"/getData\" method=\"post\">\n        <label for=\"s\">\u8BF7\u8F93\u5165\u4F60\u7684\u9274\u6743\uFF1A</label>\n        <input type=\"text\" name=xingm id=\"s\">\n        <button type=\"submit\">submit</button>\n      </form>\n      <!-- built files will be auto injected -->\n    </body>\n    </html>\n    ");
});
router.get("/getDa", function (req, res) {
    var son = new in_1.default();
    var file = path_1.default.resolve(__dirname, "../data/new.json");
    var fileContent = JSON.parse(fs_1.default.readFileSync(file, "utf-8"));
    // res.send({ name: "已经执行了一次" + (++sum), sa: fileContent });
    res.send({ obj: fileContent });
});
router.post("/getData", function (req, res) {
    var xingm = req.body.xingm;
    var islogin = req.session ? req.session.login : false;
    if (islogin) {
        if (xingm === "wuwei") {
            res.redirect("/getDa");
        }
        else {
            res.send("登录失败!");
        }
    }
    else {
        if (xingm == "wuwei") {
            req.session ? req.session.login = true : '';
            res.redirect("/getDa");
        }
        else {
            res.send("defeat你根本不是本人");
        }
    }
});
exports.default = router;
