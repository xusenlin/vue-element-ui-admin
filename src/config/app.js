import localKey from './localKey'
import {useApiUrl} from './url'

export default {
  nodeDevEnv: process.env.NODE_ENV == 'development',
  apiUrl: useApiUrl,
  siteName: 'Element UI Admin模板',
  minSiteMame: 'EUI',
  apiPrefix: "",
  timeout: 5000,
  cookiesExpires: 7,
  requestRetry: 4,
  requestRetryDelay: 800,
  tokenKey: 'ACCESS_TOKEN',
  userInfoKey: 'USER_INFO',
  permissionsKey:'PERMISSION_ARRAY',
  gitHub: 'https://github.com/xusenlin/ElementUIAdmin2',
  ...localKey
}
