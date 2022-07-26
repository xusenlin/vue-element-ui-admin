import {ref} from "vue";
import {save} from "@/api/demo"//TODO 对接新增和保存接口
import {dataDesc, inputDesc,selectDesc} from "@/components/crudForm/formDescFn"
import {FormDesc, FormEditRef, FormFields, RulesDesc} from "@/components/crudForm/type";
import {required, len2To50,fillerFieldRules} from "@/components/crudForm/formRules";
import { sex } from "@/config/options"


export default function (refreshTable: () => void) {
  const editRef = ref<FormEditRef | null>(null)
  const formDesc: FormDesc = {//TODO 修改你的表单吧
    // data: dataDesc(),
    //sex: selectDesc(sex,"性别"),//
    // url: {//也可以自定义组件，只需要实现v-model
    //   title: "上传文件",
    //   componentName: "CreateFileUrl",
    //   attrs: {},
    // }
    name: inputDesc("名字"),
    title:{
      title:"标题",
      editDisabled:true,
      componentName:"el-input",
      attrs:{
        clearable:true
      },
    },
    progress: inputDesc("进度"),

  }
  const rules: RulesDesc = {//TODO 添加你的字段验证规则
    url: [required, len2To50],
    ...fillerFieldRules(["sex","data"],[required])
  }

  const openForm = (row: FormFields, title: string) => {
    // debugger
    editRef.value?.OpenEdit(row, title,"id")//TODO 主键id字段需要确认,默认不填使用id
  }

  const submitForm = (fd: FormFields, cb: () => void, isEdit: boolean) => {
    console.log(isEdit)//isEdit是编辑还是新增，你的主键已经包含在fd里面了，默认是id,也可以在调用弹窗处指定
    //TODO 对接新增和保存接口
    save(fd).then(() => {
      cb()
      refreshTable()
    }).catch(() => {})
  }
  return {formDesc, openForm, rules, submitForm, editRef}
}
