


// ts-> .d.ts 翻译 @type/..... =>文件->
// 因为在js文件里面才能 import当成一个插件引入 
import request from "superagent";
// cheerio是一个能够爬虫网页数据的工具，其语法类似jquery
import cheerio from "cheerio";
import fs from "fs";
import path from "path"

// 你引入一个import,这时
interface user {
    content: any,
    index: number
}
interface courderUser {

}
class Fa {
    
    private filePath: string = path.resolve(__dirname, "../data/new.json");
    private secret: string = "secretKey";
    private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
    constructor() {
        this.getText();
    }

     getRealText(val: any) {
        let saveDates: courderUser = { time: 33, content: 343 };
        let fileContent: any = {};
        let time: string
        let course: any = [];
        let $ = cheerio.load(val)
        let test = $(".course-item");
        test.map((index, val) => {
            let d = $(val).find(".course-desc").text();
            course.push({ content: d, index });
        })
        saveDates = {
            time: Date.now(),
            content: course
        }
        if (fs.existsSync(this.filePath)) {
            fileContent = JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
        }
        fileContent[Date.now()] = course;
        this.writeFile(fileContent);
        return course;

    }
    writeFile(content: string) {
        fs.writeFileSync(this.filePath, JSON.stringify(content))
    };
    async getHtml() {

    }
    async getText() {
        const result = await request.get(this.url);
        console.log("----------------------");
        let results = result.text;
        this.getRealText(results);
    }
}


export default Fa;



