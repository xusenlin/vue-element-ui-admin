/*
* 这个是针对swagger-ui api文档代码生成器。
* 在使用前，先将swagger-ui其中一个大的模块展开，
* 将下面压缩的代码往swagger-ui页面的控制台粘贴，就会打印出当前展开的文档api代码.复制放到
* api文件夹的js里面即可使用
*可自行修改
*
*/



var ApiList = document.querySelectorAll('.opblock-summary');

var ApiStr = `import request from '../utils/request.js'`;

ApiList.forEach(r => {
    let path = r.querySelector('.opblock-summary-path a span').innerText;
    let pathArr = path.split('/');
    let isPostMethod = r.querySelector('.opblock-summary-method').innerText == "POST";

    ApiStr += `


    /**
     * ${r.querySelector('.opblock-summary-description').innerText}
     * @param params
     * @returns {AxiosPromise}
     */
    export function ${pathArr[pathArr.length - 1]}(params) {
        return request({
            url: '${path.replace('/api','')}',
            method: '${isPostMethod ? "post" : 'get'}',
            ${isPostMethod ? "data" : 'params'}: params
        })
    }

    `

});
console.warn('===========================================================================');
console.log(ApiStr);
console.warn('===========================================================================');

//压缩的代码
"use strict";var ApiList=document.querySelectorAll(".opblock-summary"),ApiStr="import request from '../utils/request.js'";ApiList.forEach(function(r){var e=r.querySelector(".opblock-summary-path a span").innerText,t=e.split("/"),n="POST"==r.querySelector(".opblock-summary-method").innerText;ApiStr+="\n\n\n    /**\n     * "+r.querySelector(".opblock-summary-description").innerText+"\n     * @param params\n     * @returns {AxiosPromise}\n     */\n    export function "+t[t.length-1]+"(params) {\n        return request({\n            url: '"+e+"',\n            method: '"+(n?"post":"get")+"',\n            "+(n?"data":"params")+": params\n        })\n    }\n\n    "}),console.log(ApiStr);