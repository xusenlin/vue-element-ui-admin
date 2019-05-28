/*
* 这个是针对swagger-ui api文档代码生成器。
* 在使用前，先将swagger-ui其中一个大的模块展开，
* 将下面压缩的代码往swagger-ui页面的控制台粘贴，就会打印出当前展开的文档api代码.复制放到
* api文件夹的js里面即可使用
*可自行修改
*/

var ApiList = document.querySelectorAll('.opblock-summary');

var ApiStr = `
import request from '@/utils/request.js'
import {gatewayPrefix} from './config.js'
`;
var MethodNameS = []
var JsKeyword = ['break','else', 'new', 'var', 'case', 'finally', 'return', 'void', 'catch', 'for', 'switch', 'while', 'continue', 'function', 'this', 'with', 'default', 'if ', 'throw', 'delete', 'in', 'try', 'do', 'instranceof', 'typeof', 'abstract', 'enum', 'int', 'short', 'boolean', 'export', 'interface', 'static', 'byte', 'extends', 'long', 'super', 'char', 'final', 'native', 'synchronized', 'class', 'float', 'package', 'throws', 'const', 'goto', 'private', 'transient', 'debugger', 'implements', 'protected', 'volatile', 'double', 'import', 'public']
var Num = 1

ApiList.forEach(r => {
    let path = r.querySelector('.opblock-summary-path a span').innerText;
    let pathArr = path.split('/');
    let isPostMethod = r.querySelector('.opblock-summary-method').innerText == "POST";
    Num = 1

    let methodName = MethodNameUnique(pathArr[pathArr.length - 1]);
    MethodNameS.push(methodName);

    ApiStr += `


/**
 * ${r.querySelector('.opblock-summary-description').innerText}
 * @param params
 * @returns {AxiosPromise}
 */
export function ${methodName}(params) {
    return request({
        url: gatewayPrefix + '${path.replace('/api', '')}',
        method: '${isPostMethod ? "post" : 'get'}',
        ${isPostMethod ? "data" : 'params'}: params
    })
}

`

});
ApiStr += `


//全部方法
//${MethodNameS.join('、')}
`

function MethodNameUnique(name) {
    if (MethodNameS.indexOf(name) != -1 || JsKeyword.indexOf(name) != -1) {
        Num++;
        return MethodNameUnique(name + Num)
    }
    return name
}

console.warn('===========================================================================');
console.log(ApiStr);
console.warn('===========================================================================');

//压缩的代码
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('\'X Y\';0 o=Z.W(\'.6-3\');0 9=\'\\w i v \\\'@/V/i.p\\\'\\w {m} v \\\'./R.p\\\'\\n\';0 5=[];0 s=[\'S\',\'T\',\'U\',\'0\',\'10\',\'11\',\'c\',\'18\',\'Q\',\'1a\',\'17\',\'16\',\'12\',\'b\',\'13\',\'14\',\'15\',\'q \',\'1b\',\'J\',\'y\',\'B\',\'A\',\'z\',\'x\',\'P\',\'L\',\'K\',\'M\',\'N\',\'O\',\'C\',\'I\',\'E\',\'D\',\'F\',\'G\',\'H\',\'19\',\'1j\',\'1E\',\'1F\',\'1G\',\'1D\',\'1C\',\'1y\',\'1z\',\'1A\',\'1B\',\'1I\',\'1J\',\'1O\',\'1c\',\'1P\',\'1N\',\'1L\'];0 7=1;o.1M(b(r){0 4=r.e(\'.6-3-4 a 1K\').f;0 d=4.1H(\'/\');0 j=r.e(\'.6-3-l\').f=="1w";7=1;0 k=g(d[d.1x-1]);5.1k(k);9+=\'\\n\\n\\n/**\\n * \'+r.e(\'.6-3-1l\').f+\'\\n * @1i 8\\n * @1h {1d}\\n */\\1e b \'+k+\'(8) {\\n    c i({\\n        1f: m + \\\'\'+4.1g(\'/1m\',\'\')+\'\\\',\\n        l: \\\'\'+(j?"1n":\'1t\')+\'\\\',\\n        \'+(j?"1u":\'8\')+\': 8\\n    })\\n}\\n\\n\'});9+=\'\\n\\n\\n//\\1v\\1s\\1r\\1o\\n//\'+5.1p(\'、\')+\'\\n\';b g(2){q(5.t(2)!=-1||s.t(2)!=-1){7++;c g(2+7)}c 2}h.u(\'===========================================================================\');h.1q(9);h.u(\'===========================================================================\');',62,114,'var||name|summary|path|MethodNameS|opblock|Num|params|ApiStr||function|return|pathArr|querySelector|innerText|MethodNameUnique|console|request|isPostMethod|methodName|method|gatewayPrefix||ApiList|js|if||JsKeyword|indexOf|warn|from|nimport|typeof|in|instranceof|do|try|interface|extends|byte|long|super|char|static|delete|int|enum|short|boolean|export|abstract|catch|config|break|else|new|utils|querySelectorAll|use|strict|document|case|finally|continue|this|with|default|while|switch|void|final|for|throw|volatile|AxiosPromise|nexport|url|replace|returns|param|native|push|description|api|post|u6CD5|join|log|u65B9|u90E8|get|data|u5168|POST|length|const|goto|private|transient|throws|package|synchronized|class|float|split|debugger|implements|span|public|forEach|import|protected|double'.split('|'),0,{}))