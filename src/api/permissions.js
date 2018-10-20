import {buildApiRequest as A,getApiUrl as G} from '../utils/request'
export default {
  permissionAll : (p,c)=>A(p,'permission/permission_all','get',c),
  permissionEdit : (p,c)=>A(p,'permission/permission_edit','post',c),
}
