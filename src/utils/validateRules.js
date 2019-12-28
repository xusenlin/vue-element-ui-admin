// 使用
// import {Required,RequiredAndNumber,RequiredAndDate,RequiredAndArray,FillerRieldRules,RequiredAndPhone} from '@/utils/validateRules.js'
// import {Float2,RequiredAndFloat2} from '@/utils/validateRules.js'
// rules: {
// ...FillerRieldRules(['name','sellType','onlineTime','operateCourseContent'],Required),
// ...FillerRieldRules(['sellPrice','effectiveDays'],RequiredAndNumber),
//         myOperateTagList: RequiredAndArray,
//         other:[{ type:'date',  message: '请选择日期', trigger: 'change'}],
// ...FillerRieldRules(['sellPrice','effectiveDays'],{ type:'date',  message: '请选择日期', trigger: 'change'}),
// },

export const Phone = {
  pattern: /^1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
  message: "请输入正确的手机号码",
  trigger: "blur"
};

export const Number = {
  type: "number",
  message: "只能填写数字",
  trigger: "blur"
};

export const String = {
  type: "string",
  message: "只能填写字符串",
  trigger: "blur"
};

export const Required = {
  required: true,
  message: "填写不能为空",
  trigger: "blur"
};

export const Boolean = {
  required: true,
  message: "请选择选项",
  trigger: "change"
};

export const Array = {
  type: "array",
  message: "请选择选项",
  trigger: "change"
};

export const Date = { type: "date", message: "请选择日期", trigger: "change" };

export const Email = {
  type: "email",
  message: "请输入正确的邮箱",
  trigger: "blur"
};

export const Float2 = {
  pattern: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
  message: "只能填写数字并且最多两位小数",
  trigger: "blur"
};

export const Float2And0 = {
  pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
  message: "只能填写数字并且最多两位小数",
  trigger: "blur"
};

export const Float2Max100 = {
  pattern: /^\d\.([1-9]{1,2}|[0-9][1-9])$|^[1-9]\d{0,1}(\.\d{1,2}){0,1}$|^100(\.0{1,2}){0,1}$/,
  message: "只能填写数字并且最大数是100不能超个两位小数",
  trigger: "blur"
};

export const Url = {
  pattern: /(^https?|^nurse):\/\//i,
  message: "请输入正确的链接地址",
  trigger: "blur"
};

export const IntMax99 = {
  pattern: /^[1-9][0-9]{0,1}$/,
  message: "只能填写1-99的整数",
  trigger: "blur"
};

export const Float2Min0ax100 = {
  pattern: /^(\d|[1-9]\d|100)(\.\d{1,2})?$/,
  message: "只能填写0-100，不能超个两位小数",
  trigger: "blur"
};

export const StrongPassword = {
  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/,
  message: "大小写+数字组成，字数6-18位",
  trigger: "blur"
};

export const NumberString = {
  pattern: /^\d+$/,
  message: "只能输入数字",
  trigger: "blur"
};

//常用组合
export const RequiredAndNumber = [Required, Number];
export const RequiredAndBoolean = [Required, Boolean];
export const RequiredAndEmail = [Required, Email];
export const RequiredAndDate = [Required, Date];
export const RequiredAndArray = [Required, Array];
export const RequiredAndPhone = [Required, Phone];
export const RequiredAndFloat2 = [Required, Float2];
export const RequiredAndFloat2Max100 = [Required, Float2Max100];
export const RequiredAndUrl = [Required, Url];

export function FillerFieldRules(fields = [], rules) {
  let validateRules = {};
  fields.forEach(field => {
    validateRules[field] = rules;
  });
  return validateRules;
}
