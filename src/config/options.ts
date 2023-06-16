//这里放本地的字典配置
export type OptionType = {
  name:string,
  value:string
}

export type OptionsType = OptionType[]

export const sex:OptionsType = [
  {name:"未知",value:"0"},
  {name:"男",value:"1"},
  {name:"女",value:"2"},
]
