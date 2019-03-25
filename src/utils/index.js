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

export function clone(obj) {
    let strData = JSON.stringify(obj)
    return JSON.parse(strData);
}
