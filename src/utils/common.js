import Storage from "good-storage";
import Config from "@/config/app";

/**
 * 重置对象（会修改原始对象）
 * @param object
 * @param defaultVal
 */
export function resetObject(object, defaultVal = {}) {
  for (let k in object) {
    if (defaultVal.hasOwnProperty(k)) {
      object[k] = defaultVal[k];
    } else {
      if (Array.isArray(object[k])) object[k] = [];
      if ("string" == typeof object[k]) object[k] = "";
      if ("number" == typeof object[k]) object[k] = null;
      if ("boolean" == typeof object[k]) object[k] = false;
    }
  }
}

/**
 * 对象赋值（会修改原始对象）
 * @param object
 * @param valObject
 */
export function fillerLeft(object, valObject = {}) {
  for (let k in object) {
    if (valObject.hasOwnProperty(k)) {
      object[k] = valObject[k];
    }
  }
}

/**
 * 获取用户信息
 * @param key
 * @returns {null|*|undefined|{}}
 */
export function getUserInfo(key = null) {
  let userInfo = Storage.get(Config.userInfoKey);
  if (key) return userInfo.hasOwnProperty(key) ? userInfo[key] : null;
  return userInfo || {};
}

/**
 * 设置用户信息
 * @param user
 * @returns {*}
 */
export function setUserInfo(user) {
  Storage.set(Config.userInfoKey, user);
  return user;
}

/**
 * 设置权限
 * @param permissionsArr
 * @returns {*}
 */
export function setPermissions(permissionsArr) {
  Storage.set(Config.permissionsKey, permissionsArr);
  return permissionsArr;
}

/**
 * 获取权限
 * @returns {*|undefined|Array}
 */
export function getPermissions() {
  return Storage.get(Config.permissionsKey) || [];
}

/**
 * 判断是否有权限
 * @param permissionsKey
 * @returns {boolean}
 */
export function hasPermissions(permissionsKey) {
  let permissionsArr = Storage.get(Config.permissionsKey, []);
  return permissionsArr.indexOf(permissionsKey) !== -1;
}

/**
 * 获取Token
 * @returns {*|undefined}
 */
export function getToken() {
  return Storage.get(Config.tokenKey);
}

/**
 * 设置Token
 * @param token
 * @returns {*|undefined}
 */
export function setToken(token) {
  return Storage.set(Config.tokenKey, token);
}

/**
 * 移除Token
 * @returns {*}
 */
export function removeToken() {
  return Storage.remove(Config.tokenKey);
}
