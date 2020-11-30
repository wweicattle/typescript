import express from "express";
import router from "./router"
import bodyParser from "body-parser"
import Cookie from "cookie-session";

const app = express();
// 引入中间件进行
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Cookie({
    name: "session",
    keys: ["wuwei"],
    maxAge: 24 * 1000 * 60 * 60
}))
app.use(router)
app.listen(2222, () => {
    console.log("listenning!!!!");
})
