import {resolve} from 'path'
import fs from 'fs'

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir)
}

// const html = resolve(__dirname, ".", "html") + "/index.html"

export default function (options = {}) {
  return {
    configureServer: function ({app}) {
      const middleware = (req, res, next) => {
        let url = req.url;
        let method = req.method.toLowerCase();
        if (url.indexOf("/creatCrudTableApi") !== -1 && method == "post") {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          let data = '';
          req.on('data', chunk => {
            data += chunk;
          })
          req.on('end', () => {
            res.end(JSON.stringify(buildCode(JSON.parse(data))), 'utf8');
          })
        } else {
          next();
        }
      };
      app.use(middleware);
    },
  };
}


const buildCode = (json) => {
  if (json.codeDir.indexOf('@') !== 0) {
    return "codeDir的路径必须以@开头，并且代表你的src目录"
  }
  let src = resolve(process.cwd(), "./src")

  let codeDir = resolve(src, './' + json.codeDir.substring(1, json.codeDir.length))

  if (fs.existsSync(codeDir)) {
    return "已经存在目录" + codeDir
  }

  if (fs.mkdirSync(codeDir, {recursive: true}) === undefined) {
    return "创建目录失败:" + codeDir
  }

  let demoDir = resolve(__dirname,"./demo")

  let formEditTs = "";
  let tableDataTs = "";
  let tableFieldTs = "";

  try {
    formEditTs = fs.readFileSync(resolve(demoDir,"./formEdit.ts")).toString()
    tableDataTs = fs.readFileSync(resolve(demoDir,"./tableData.ts")).toString()
    tableFieldTs = fs.readFileSync(resolve(demoDir,"./tableField.ts")).toString()
    fs.copyFileSync(resolve(demoDir,"./Index.vue"),resolve(codeDir,"./Index.vue") )
    fs.copyFileSync(resolve(demoDir,"./extraAction.ts"),resolve(codeDir,"./extraAction.ts") )
  }
  catch(err) {
    return  err.message
  }

  tableDataTs = editTableDataTs(tableDataTs,json.searchParams)
  tableFieldTs = editTableFieldTs(tableFieldTs,json.fields)
  formEditTs = editFormEditTs(formEditTs,json.fields)

  try {
    fs.writeFileSync(resolve(codeDir,"./tableData.ts"),tableDataTs)
    fs.writeFileSync(resolve(codeDir,"./tableField.ts"),tableFieldTs)
    fs.writeFileSync(resolve(codeDir,"./formEdit.ts"),formEditTs)
  }
  catch(err) {
    return  err.message
  }

  return "代码已经生成成功，快去修改和添加路由吧。";
}

const editTableDataTs = (code,searchParams) => {
  if(!searchParams || Object.keys(searchParams).length===0){
    return code
  }
  let kw = `{
        id:route.query.id ? route.query.id : "",
    }`

  return code.replace(kw,JSON.stringify(searchParams))
}

const editTableFieldTs = (code,fields)=>{
  if(!fields || !Array.isArray(fields) || fields.length==0){
    return  code
  }
  let kw = `        {"field": "id", title: "ID", "show": true}`
  let temp = ""
  fields.forEach(f=>{
    if(f.tableDisabled){
      return
    }
    let r = {
      field:f.field,
      title:f.title,
      show:true
    }

    temp += `        ${JSON.stringify(r)},\n`
  })

  return code.replace(kw,temp)
}
const editFormEditTs = (code,fields)=>{

  if(!fields || !Array.isArray(fields) || fields.length==0){
    return  code
  }
  let kw = `    title: inputDesc("标题"),`
  let temp = ""
  let primaryKey = ""
  fields.forEach(f=>{
    if(f.isPrimaryKey){
      primaryKey = f.field
    }
    if(f.formDisabled){
      return
    }
    if(f.editDisabled){
      temp += editDisabledDesc(f.field,f.title)
    }else {
      temp += `    ${f.field}: inputDesc("${f.title}"),\n`
    }
  })

  if(primaryKey){
    code = code.replace(`editRef.value?.OpenEdit(row, title)`,`editRef.value?.OpenEdit(row, title,"${primaryKey}")`)
  }
  return code.replace(kw,temp)
}


const editDisabledDesc = (f,title) => {
  return `    ${f}:{
      title:"${title}",
      editDisabled:true,
      componentName:"el-input",
      attrs:{
        clearable:true
      },
    },\n`
}
