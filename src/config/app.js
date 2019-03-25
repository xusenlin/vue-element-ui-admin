import localKey from './localKey'

const devApiUrl = 'http://192.168.48.133:10003';


const proApiUrl = 'http://api.youUrl.com';
//const proApiUrl = 'http://192.168.49.196:10003';

const nodeDevEnv = process.env.NODE_ENV == 'development' ? true : false;

export default {
  nodeDevEnv: nodeDevEnv,
  apiUrl: nodeDevEnv ? devApiUrl : proApiUrl,
  siteName: 'Element UI Admin模板',
  minSiteMame: 'EUI',
  apiPrefix: "",
  timeout: 5000,
  cookiesExpires: 7,
  requestRetry: 4,
  requestRetryDelay: 800,
  tokenKey: 'ACCESS_TOKEN',
  userInfoKey: 'USER_INFO',
  gitHub: 'https://github.com/xusenlin/ElementUIAdmin2',
  ...localKey
}
