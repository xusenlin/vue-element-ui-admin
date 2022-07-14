import { resolve } from 'path'
import fs from 'fs'
const Ast = require("fs")

const pathResolve = (dir) => {
    return resolve(__dirname, ".", dir)
}

const html = resolve(__dirname, ".", "html") + "/index.html"

export default function (options = {}) {
    return {
        configureServer: function ({ app }) {
            const middleware = (req, res, next) => {
                let url = req.url;
                let method = req.method.toLowerCase();
                if(url.indexOf("/fastCrudTable")!==-1){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    fs.createReadStream(html).pipe(res);
                }else if (url.indexOf("/fastCrudApi")!==-1 && method == "get"){
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = 200;
                    res.end("{}", 'utf8');
                }
                else {
                    next();
                }
            };
            app.use(middleware);
        },
    };
}
