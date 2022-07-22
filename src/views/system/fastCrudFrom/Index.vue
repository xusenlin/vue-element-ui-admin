<script setup lang="ts">
import {onMounted} from "vue"
import {ElMessage} from "element-plus"
import JSONEditor from 'jsoneditor';
import { creatCrudTable } from "@/api/system/index"
import 'jsoneditor/dist/jsoneditor.css';


let editor:any = null

onMounted(() => {
  const container = document.getElementById("json-edit")
  const options = {
    onEditable: () => {
      return {
        field: false,
        value: false
      }
    },
    mode: 'code',
    modes: ['code', 'tree'],
  }
  editor = new JSONEditor(container, options)
  const initialJson = {
    codeDir: "@/views/system/demo",
    searchParams: {
      id: "",
      name: "",
      tags: [],
    },
    fields: [
      {"field": "id", title: "ID",formDisabled:true, isPrimaryKey: true},
      {"field": "name", title: "名字"},
      {"field": "title", title: "标题",editDisabled: true},
      {"field": "progress", title: "进度",tableDisabled:true}
    ]
  }
  editor.set(initialJson)

})


const buildCode = () => {
  creatCrudTable(JSON.parse(editor.getText())).then(out=>{
    ElMessage({
      type: 'success',
      message: out.data,
    })
  }).catch(()=>{})
}

</script>

<template>
  <div>
    <el-card class="action-card" shadow="never" style="border: none">
      <template #header>
        FastCrudFrom v0.1
      </template>
      <div>
        <el-alert :closable="false" title="FastCrudFrom是一个前端开发辅助工具，可以快速的根据你指定的字段生成一个表格的增删改查，
      我们认为每个表格的增删查改都大同小异，你只需要在生成的代码里导入对应的分页、编辑、新增、删除接口即可。当然，对于特殊字段的修改和其他特殊的功能，你只需要在基础代码陆续完善即可。" type="success"/>
        <h4>
          一般来说，FastCrudFrom 会在你指定的目录生成5个文件，它们使用组合式API并且职责清晰，便于维护和修改。
        </h4>
        <ul>
          <li>formEdit.ts 包含新增和修改表单以及表单的验证规则的描述，每个字段的描述包含
            name(字段使用的组件，例如el-input也可以是自定义的组件如文件上传)，editDisabled(编辑时禁用编辑),attrs(组件的其他属性)
          </li>
          <li>tableData.ts 包含表格的数据（tableData）、搜索字段、刷新表格、重置表格、分页请求之前的参数过滤等操作函数</li>
          <li>tableField.ts
            包含表格要显示的全部字段，被设置show=true的字段会默认显示出来，其他字段除非用户勾选了才会显示出来，显示的字段会被记录在本地，特殊的字段展示内容可以设置函数，如：func:(v:string):string=>(v+"%")
          </li>
          <li>extraAction.ts 包含表格额外的其他操作函数，例如删除、禁用、详情等操作函数</li>
          <li>Index.vue HTMl模板，负责导入以上API并将全部功能组合在一起</li>
        </ul>
      </div>
    </el-card>


    <el-card class="action-card" shadow="never" style="border: none">
      <template #header>
        <div style="display: flex;justify-content: space-between">
          <div>
            下面这个json编辑器是用来描述即将生成的代码，它的fields部分代码最好先根据你的分页接口返回的字段来生成。注意：我们不会对生成的代码过度封装，熟悉了之后它会很简单便于你修改，你看看就知道了。并且在生成的代码需要你对接和完善的地方我们都加了注释 "//TODO"。
          </div>
        </div>
      </template>
      <div>
        <div style="display: flex;width: 100%;">
          <div style="flex: 1;margin-right: 20px">
            <div id="json-edit"></div>
          </div>
          <div style="flex: 1">
            <h4>在fields下的字段都有4个描述属性，意义如下</h4>
            <ul>
              <li>formDisabled:true ：这个字段不会出现在表单里面，但是在表格里面会展示出来</li>
              <li>isPrimaryKey: true ：是表的主键，用于修改时使用,只能有一个，可以不填。</li>
              <li>editDisabled:true ：这个字段新增时可以修改，但是编辑时不能修改</li>
              <li>tableDisabled:true ：不在表格里显示</li>
            </ul>
            <div style="padding: 20px 0">
              <p>github:https://github.com/xusenlin/vue-element-ui-admin</p>
              <el-button
                  @click="buildCode()"
                  type="primary"
              >生成代码
              </el-button>

            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
#json-edit {
  margin-top: 10px;
  height: 400px;
}
</style>
