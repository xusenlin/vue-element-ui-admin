import {ref} from "vue";
import {saveLiterature} from "@/api/dataSet/literature.js"
import {WX} from "@/compositionApi/basicDictionary.js"
import {dataDesc, input, inputRules,selDicDesc,selDicDescs} from "@/components/from/fromDesc.js"
import {
    ifCompanyAssist,
    ohersCompetitionArticles,
    pubmedType,
    researchType,
    pretreatmentType,
    design,
    samplingStage,
    byStages,
    race,
    analysisItem
} from "@/config/literature.js"


const autodcompleteDesc = (f) => {//输入建议描述组件
    return {
        name: "Autodcomplete",
        dicKey: {f, t: WX},
        attrs: {
            clearable: true
        },
    }
}


export default function (refreshTable) {
    const editRef = ref(null)

    const formDesc = {
        "pubmedId": {"title": "Pubmed ID", ...input()},
        "journal": {"title": "Journal", ...autodcompleteDesc("journal")},
        "lif": {"title": "IF", ...input()},
        "publishedDate": {"title": "发表日期", ...dataDesc},
        "doi": {"title": "Doi", ...input()},
        "title": {"title": "标题", ...input()},
        "firstUnit": {"title": "第一单位", ...autodcompleteDesc("first_unit")},
        "corresAuthor": {"title": "通讯作者", ...autodcompleteDesc("corres_author")},
        "firstAuthor": {"title": "第一作者", ...input()},
        "ifCompanyAssist": {"title": "是否竞品公司协助", ...selDicDesc(ifCompanyAssist)},
        "participationCenterName": {"title": "单中心/多中心(名称)", ...autodcompleteDesc("participation_center_name")},
        "ohersCompetitionArticles": {"title": "竞品公司文章顺位", ...selDicDescs(ohersCompetitionArticles)},
        "competingCompany": {"title": "竞品公司", ...autodcompleteDesc("competing_company")},
        "cooperativeExpert": {"title": "合作专家", ...autodcompleteDesc("cooperative_expert")},
        "professionalTitle": {"title": "专家职称（职位）", ...autodcompleteDesc("professional_title")},
        "pubmedType": {"title": "pubmedType", ...selDicDesc(pubmedType)},
        "typesCancer": {"title": "癌症", ...autodcompleteDesc("types_cancer")},
        "researchType": {"title": "研究类型", ...selDicDesc(researchType)},
        "clinicalTrial": {"title": "注册临床试验", ...input()},
        "pretreatmentType": {"title": "治疗方式", ...selDicDescs(pretreatmentType)},
        "design": {"title": "设计", ...selDicDesc(design)},
        "sampleSize": {"title": "样本量",...input()},
        "ifChange": {"title": "入组样本是否需要突变/融合",...autodcompleteDesc("if_change")},
        "samplingStage": {"title": "取样时间", ...selDicDescs(samplingStage)},
        "tissueTyping": {"title": "组织分型",...autodcompleteDesc("tissue_typing")},
        "byStages": {"title": "分期", ...selDicDescs(byStages)},
        "race": {"title": "种族",...selDicDesc(race)},
        "sequencingDepth": {"title": "测序深度",...input()},
        "sequencingProduct": {"title": "测序产品",...autodcompleteDesc("sequencing_product")},
        "panelSize": {"title": "Panel大小",...input()},
        "analysisItem": {"title": "研究終點", ...selDicDescs(analysisItem)},
        "survivalVb": {"title": "生存对比指标",...autodcompleteDesc("survival_vb")},
        "lifeTime": {"title": "生存时间",...input()},
        "conclusion": {
            name:"el-input",
            title: "结论",
            attrs:{
                placeholder:"请输入description",
                rows:3,
                type:"textarea",
                clearable:true
            },
        }
    }

    const rules = {
        pubmedId: inputRules('pubmedId'),
        journal: inputRules('journal'),
        lif: inputRules('if'),
        publishedDate: inputRules('publishedDate'),
        doi: inputRules('doi'),
        title: inputRules('title'),
        authorList: inputRules('authorList'),
        firstUnit: inputRules('firstUnit'),
        firstAuthor: inputRules('firstAuthor'),
        corresAuthor: inputRules('corresAuthor'),
        ifCompanyAssist: [
            {required: true, message: 'Please input ifCompanyAssist', trigger: 'blur'},
        ],
        pubmedType: inputRules('pubmedType'),
        typesCancer: inputRules('typesCancer'),
        conclusion: inputRules('conclusion')
    }

    const submitForm = (f, cb) => {
        saveLiterature(f).then(() => {
            cb()
            refreshTable()
        }).catch(() => {
        })
    }
    return {formDesc, editRef, rules, submitForm}
}
