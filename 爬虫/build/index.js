"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ts-> .d.ts 翻译 @type/..... =>文件->
// 因为在js文件里面才能 import当成一个插件引入 
var superagent_1 = __importDefault(require("superagent"));
// cheerio是一个能够爬虫网页数据的工具，其语法类似jquery
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Fa = /** @class */ (function () {
    function Fa() {
        this.filePath = path_1.default.resolve(__dirname, "../data/new.json");
        this.secret = "secretKey";
        this.url = "http://www.dell-lee.com/typescript/demo.html?secret=" + this.secret;
        this.getText();
    }
    Fa.prototype.getRealText = function (val) {
        var saveDates = { time: 33, content: 343 };
        var fileContent = {};
        var time;
        var course = [];
        var $ = cheerio_1.default.load(val);
        var test = $(".course-item");
        test.map(function (index, val) {
            var d = $(val).find(".course-desc").text();
            course.push({ content: d, index: index });
        });
        saveDates = {
            time: Date.now(),
            content: course
        };
        if (fs_1.default.existsSync(this.filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(this.filePath, "utf-8"));
        }
        fileContent[Date.now()] = course;
        this.writeFile(fileContent);
    };
    Fa.prototype.writeFile = function (content) {
        fs_1.default.writeFileSync(this.filePath, JSON.stringify(content));
    };
    ;
    Fa.prototype.getHtml = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Fa.prototype.getText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, superagent_1.default.get(this.url)];
                    case 1:
                        result = _a.sent();
                        console.log("----------------------");
                        results = result.text;
                        this.getRealText(results);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Fa;
}());
var son = new Fa();
console.log("wuwei");
