import {FormItemDesc} from "./type"
import { OptionsType } from "@/components/formItem/select/type"
// 通用的一些表单描述

export const dataDesc = (title:string = "日期"): FormItemDesc => {
  return {
    componentName: "el-date-picker",
    title,
    attrs: {
      style: {
        width: "100%",
      },
      valueFormat: "YYYY/MM/DD",
      type: "date",
      size: "default",
      clearable: true
    }
  }
}

export const inputDesc = (title?:string):FormItemDesc=> {
  return {
    title,
    componentName:"el-input",
    attrs:{
      clearable:true
    },
  }
}
export const selectDesc = (options:OptionsType,title?:string):FormItemDesc=> {
  return {
    title,
    componentName:"Sel",
    attrs:{
      options,
      placeholder:"请选择",
      clearable:true
    },
  }
}
