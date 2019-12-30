/*
 * 这个是针对swagger-ui api文档代码生成器。
 * 在使用前，先将swagger-ui其中一个大的模块展开，
 * 将下面的代码往swagger-ui页面的控制台粘贴执行，就会打印出当前展开文档api代码.复制放到
 * api文件夹的js里面即可使用
 */

let ApiList = document.querySelectorAll(".opblock-summary");

let ApiStr = `
import request from '@/utils/request.js'
`;
let MethodNameS = [];
let JsKeyword = [
  "break",
  "else",
  "new",
  "var",
  "case",
  "finally",
  "return",
  "void",
  "catch",
  "for",
  "switch",
  "while",
  "continue",
  "function",
  "this",
  "with",
  "default",
  "if ",
  "throw",
  "delete",
  "in",
  "try",
  "do",
  "instranceof",
  "typeof",
  "abstract",
  "enum",
  "int",
  "short",
  "boolean",
  "export",
  "interface",
  "static",
  "byte",
  "extends",
  "long",
  "super",
  "char",
  "final",
  "native",
  "synchronized",
  "class",
  "float",
  "package",
  "throws",
  "const",
  "goto",
  "private",
  "transient",
  "debugger",
  "implements",
  "protected",
  "volatile",
  "double",
  "import",
  "public"
];
let Num = 1;

ApiList.forEach(r => {
  let path = r.querySelector(".opblock-summary-path a span").innerText;
  let pathArr = path.split("/");
  let isPostMethod =
    r.querySelector(".opblock-summary-method").innerText === "POST";
  Num = 1;

  let methodName = MethodNameUnique(pathArr[pathArr.length - 1]);
  MethodNameS.push(methodName);

  ApiStr += `


/**
 * ${r.querySelector(".opblock-summary-description").innerText}
 * @param params
 * @returns {AxiosPromise}
 */
export function ${methodName}(params) {
    return request({
        url: "${path.replace("/api", "")}",
        method: '${isPostMethod ? "post" : "get"}',
        ${isPostMethod ? "data" : "params"}: params
    })
}

`;
});
ApiStr += `

//全部方法
//${MethodNameS.join("、")}
`;

function MethodNameUnique(name) {
  if (MethodNameS.indexOf(name) !== -1 || JsKeyword.indexOf(name) !== -1) {
    Num++;
    return MethodNameUnique(name + Num);
  }
  return name;
}

console.warn(
  "==========================================================================="
);
console.log(ApiStr);
console.warn(
  "==========================================================================="
);
