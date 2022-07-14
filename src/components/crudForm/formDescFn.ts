import {FormItemDesc} from "./form"
// 通用的一些表单描述

export const dataDesc = (title = "日期"): FormItemDesc => {
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
