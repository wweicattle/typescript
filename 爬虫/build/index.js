"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var app = express_1.default();
// 引入中间件进行
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(cookie_session_1.default({
    name: "session",
    keys: ["wuwei"],
    maxAge: 24 * 1000 * 60 * 60
}));
app.use(router_1.default);
app.listen(2222, function () {
    console.log("listenning!!!!");
});
