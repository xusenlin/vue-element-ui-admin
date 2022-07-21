import {ref} from "vue";
import Storage from "good-storage";
import {useRoute} from "vue-router";


export default function () {
  const tableFields = ref([])
  const routePath = useRoute().path
  let userSetCol = Storage.get("userSetTableColumn:" + routePath, [])

  tableFields.value = userSetCol.length > 0 ? userSetCol :
      [//TODO 对接你们的展示字段
          {"field": "pubmedId",title:"Pubmed ID", "show": true},
          {"field": "journal", title:"Journal","show": true},
          {"field": "lif", title:"IF", "show": true},
          {"field": "publishedDate", title:"发表日期","show": true},
          {"field": "doi", title:"Doi","show": true},
          {"field": "title", title:"标题","show": true},
          {"field": "firstUnit", title:"第一单位","show": true},
          {"field": "competingCompany", title:"竞品公司","show": true},
          {"field": "cooperativeExpert", title:"合作专家","show": true},
          {"field": "professionalTitle", title:"专家职称（职位）","show": true},
          {"field": "pubmedType", title:"pubmedType","show": true},
          {"field": "typesCancer", title:"癌症","show": true},
          {"field": "researchType", title:"研究类型","show": true},
          {"field": "clinicalTrial", title:"注册临床试验","show": true},
          {"field": "pretreatmentType", title:"治疗方式","show": true},
          {"field": "design", title:"设计","show": true},
          {"field": "sampleSize", title:"样本量","show": true},
          {"field": "ifChange", title:"入组样本是否需要突变/融合","show": true},
          {"field": "samplingStage", title:"取样时间","show": true},
          {"field": "tissueTyping", title:"组织分型","show": true},
          {"field": "byStages", title:"分期","show": true},
          {"field": "race", title:"种族","show": true},
          {"field": "sequencingDepth", title:"测序深度","show": true},
          {"field": "sequencingProduct", title:"测序产品","show": true},
          {"field": "panelSize", title:"Panel大小","show": true},
          {"field": "analysisItem", title:"研究終點","show": true},
          {"field": "survivalVb", title:"生存对比指标","show": true},
          {"field": "lifeTime", title:"生存时间","show": true},
          {"field": "conclusion", title:"结论","show": true},
          {"field":"updateName", title:"操作人","show": true}
      ]
  return {tableFields}
}
