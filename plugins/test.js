import { resolve } from 'path'

const pathResolve = (dir) => {
    return resolve(__dirname, ".", dir)
}

let mockRouteMap = {};

function matchRoute(req) {
    let url = req.url;
    let method = req.method.toLowerCase();
    let routeList = mockRouteMap[method];

    return routeList && routeList.find((item) => item.path === url);
}

function createRoute(mockConfList) {
    mockConfList.forEach((mockConf) => {
        let method = mockConf.type || 'get';
        let path = mockConf.url;
        let handler = mockConf.response;
        let route = { path, method: method.toLowerCase(), handler };
        if (!mockRouteMap[method]) {
            mockRouteMap[method] = [];
        }
        console.log('create mock api: ', route.method, route.path);
        mockRouteMap[method].push(route);
    });
}

function send(body) {
    let chunk = JSON.stringify(body);
    // Content-Length
    if (chunk) {
        chunk = Buffer.from(chunk, 'utf-8');
        this.setHeader('Content-Length', chunk.length);
    }
    // content-type
    this.setHeader('Content-Type', 'application/json');
    // status
    this.statusCode = 200;
    // respond
    this.end(chunk, 'utf8');
}

export default function (options = {}) {
    // options.entry = options.entry || './mock/index.js';
    //
    // if (!path.isAbsolute(options.entry)) {
    //     options.entry = path.resolve(process.cwd(), options.entry);
    // }

    return {
        configureServer: function ({ app }) {
            const middleware = (req, res, next) => {
                let url = req.url;
                let method = req.method.toLowerCase();
                if(req.url.indexOf("/fastCrudTable")!==-1 && method == "get"){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    res.end("sfdfd")
                }else if (req.url.indexOf("/fastCrudTable")!==-1 && method == "post"){

                }
                else {
                    next();
                }
            };
            app.use(middleware);
        },
    };
}



