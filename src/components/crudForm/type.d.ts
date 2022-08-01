import { FormRules } from "element-plus"
export type FormItemDesc = {
  attrs?: object//组件的属性
  title?: string //修改新增时字段的标题，为空时显示字段名本身
  editDisabled?: boolean//编辑时禁用
  componentName: string//组件名称可自定义实现
}

export type FormDesc = {
  [field: string]: FormItemDesc
}

export type RulesDesc = FormRules


export type FormFields = {
  [field: string]: [fieldVal: any]
} | undefined

export type TableColumns = {//表格的列
  field: string //字段名称
  title?:string//列的名字
  show?: boolean//是否显示
  colAttrs?: boolean//赋值给el-table-column的其他属性值
  func?: (val:any)=> void//表格field列的特殊处理
}


export type PaginationRef = {
  Refresh:()=>void
  QueryParams:()=>void
}

export type Pagination = { //TODO 你们分页的接口返回参数
  records: never[]
}

export type FormEditRef = {
  OpenEdit:(row: FormFields, title: string, idField: string = "id")=>void
}
