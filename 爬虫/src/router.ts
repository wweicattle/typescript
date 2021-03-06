import { Router, Request, Response } from "express";
// import request from "superagent";
import bodyParser from "body-parser"
import Fa from "./in"
import path from "path"
import fs from "fs"

const router = Router();
let sum = 0

// 注意你设置了继承接口，那你你必须按照接口中 的属性，不能多出来未定义的属性

router.get("/", (req: Request, res: Response) => {


  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="renderer" content="webkit">
    </head>
    <body>
      <div id="app"></div>
      <form action="/getData" method="post">
        <label for="s">请输入你的鉴权：</label>
        <input type="text" name=xingm id="s">
        <button type="submit">submit</button>
      </form>
      <!-- built files will be auto injected -->
    </body>
    </html>
    `)
})
interface req extends Request {
  body: {
    [key:string]: string|undefined
  }
}
router.get("/getDa", (req, res) => {
  var son = new Fa();
  let file = path.resolve(__dirname, "../data/new.json");
  let fileContent = JSON.parse(fs.readFileSync(file, "utf-8"));
  // res.send({ name: "已经执行了一次" + (++sum), sa: fileContent });
  res.send({obj:fileContent})
})
router.post("/getData", (req: req, res: Response) => {
  let { xingm } = req.body;
  let islogin = req.session ? req.session.login : false;
  if (islogin) {
    if (xingm === "wuwei") {
      res.redirect("/getDa");
    } else {
      res.send("登录失败!");
    }
  } else {
    if (xingm == "wuwei") {
      req.session ? req.session.login = true : '';
      res.redirect("/getDa");
    } else {
      res.send("defeat你根本不是本人");
    }
  }


})
export default router;