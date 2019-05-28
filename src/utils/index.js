export function currentUrlToParams(key = null) {
    let paramsUrl = (window.location.href).split('?');
    if(paramsUrl.length<2)return key ? null : {};
    let paramsArr = paramsUrl[1].split('&');
    let paramsData = {}
    paramsArr.forEach(r=>{
        let data = r.split('=')
        paramsData[data[0]] = data[1]
    })
    if(key)return paramsData.hasOwnProperty(key) ? paramsData[key] : null;
    return paramsData;
}

/**
 * 重置对象参数
 * @params -> Object
 * @arg = Array => []
 * @arg = Boolean => false
 * @arg = Number => null
 * @arg = String => ''
 * */
export function resetArgs(obj,def = null) {
    for (let [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
            if(def && def.hasOwnProperty(key)){
                Reflect.set(obj, key, def[key])
            }else {
                Reflect.set(obj, key, [])
            }
        } else if (typeof value == 'string') {
            if(def && def.hasOwnProperty(key)){
                Reflect.set(obj, key, def[key])
            }else {
                Reflect.set(obj, key, '')
            }
        } else if (typeof value == 'number') {
            if(def && def.hasOwnProperty(key)){
                Reflect.set(obj, key, def[key])
            }else {
                Reflect.set(obj, key, null)
            }
        } else if (typeof value == 'boolean') {
            if(def && def.hasOwnProperty(key)){
                Reflect.set(obj, key, def[key])
            }else {
                Reflect.set(obj, key, false)
            }
        }
    }
}

/**
 *
 * @param obj
 * @param row
 */
export function fillerLeft(obj,row = {}) {
    for (let key in obj) {
        if(row.hasOwnProperty(key)){
            obj[key] = row[key]
        }
    }
}


