import {FormItemRule} from "element-plus"
import {RulesDesc} from "@/components/crudForm/type";

// 通用的一些表单规则

export const required:FormItemRule = { required: true, message: "此项为必填项", trigger: 'blur' };

export const phone:FormItemRule = {pattern: /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/, message: "请输入正确的手机号码", trigger: "blur"};

export const len2To50:FormItemRule = { min: 2, max: 50, message: "长度必须在2到50之间", trigger: 'blur' };

export const date:FormItemRule = { type: "date", message: "请选择日期", trigger: "change" };

export const email:FormItemRule = {type: "email", message: "请输入正确的邮箱", trigger: "blur"};

export const url:FormItemRule = {pattern: /(^https?|^nurse):\/\//i, message: "请输入正确的链接地址", trigger: "blur"};

export const intMax99:FormItemRule = {pattern: /^[1-9][0-9]{0,1}$/, message: "只能填写1-99的整数", trigger: "blur"};

export const floatMin0Max100:FormItemRule = {pattern: /^(\d|[1-9]\d|100)(\.\d{1,2})?$/, message: "只能填写0-100之间，不能超个两位的小数", trigger: "blur"};

export const numberString:FormItemRule = {pattern: /^\d+$/, message: "只能输入数字", trigger: "blur"};

export const geq1NumberString:FormItemRule = {pattern: /^[1-9][0-9]*$/, message: "只能填写大于等于1的整数", trigger: "blur"};

export const strongPassword:FormItemRule = {pattern: /^[0-9a-zA-Z]{8,20}$/, message: "数字或字母组成，字数8-20位", trigger: "blur"};

export const strongPassword2:FormItemRule = {pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/, message: "大小写+数字组成，字数6-18位", trigger: "blur"};

//很多字段使用同一个规则时可以用此方法填充
export function fillerFieldRules(fields:string[] = [], rules:FormItemRule[]):RulesDesc {
  let newRules:RulesDesc = {};
  fields.forEach(f =>{
    newRules[f] = rules;
  });
  return newRules;
}
//使用
//{...fillerFieldRules(["name","title"],[required,len2To50])}
