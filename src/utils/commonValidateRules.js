
//使用
// import {Required,RequiredAndNumber,RequiredAndDate,RequiredAndArray,FillerRieldRules} from '@/utils/commonValidateRules.js'
// rules: {
// ...FillerRieldRules(['name','sellType','onlineTime','operateCourseContent'],Required),
// ...FillerRieldRules(['sellPrice','effectiveDays'],RequiredAndNumber),
//         myOperateTagList: RequiredAndArray,
//         other:[{ type:'date',  message: '请选择日期', trigger: 'change'}],
// ...FillerRieldRules(['sellPrice','effectiveDays'],{ type:'date',  message: '请选择日期', trigger: 'change'}),
// },



export const RegPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

export const Number = { type:'number', message: '只能填写数字', trigger: 'blur'};

export const String = { type:'string',  message: '只能填写字符串', trigger: 'blur'};

export const Required = {required: true, message: '填写不能为空', trigger: 'blur'};

export const Boolean = {required: true, message: '请选择选项', trigger: 'change'};

export const Array = { type:'array',  message: '请选择选项', trigger: 'change'};

export const Date = { type:'date',  message: '请选择日期', trigger: 'change'};

export const Email = { type:'email',  message: '请输入正确的邮箱', trigger: 'blur'};

//常用组合
export const RequiredAndNumber = [Required,Number];
export const RequiredAndBoolean = [Required,Boolean];
export const RequiredAndEmail = [Required,Email];
export const RequiredAndDate = [Required,Date];
export const RequiredAndArray = [Required,Array];


export function FillerRieldRules(fields = [],obj) {
    let newValidateRules = {}
    fields.forEach(field=>{
        newValidateRules[field] = obj
    })
    return newValidateRules;
}
