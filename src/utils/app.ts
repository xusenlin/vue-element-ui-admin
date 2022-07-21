

export function resetArgs<T>(args:T, def:Partial<T> = {}):T {

  let val: { [k:string]:any }  = {}

  for (let key in args) {
    if (def.hasOwnProperty(key)) {
      val[key]  = def[key]
    } else {
      if (Array.isArray(args[key])) val[key] = [];
      if ('string' == typeof args[key]) val[key] = '';
      if ('number' == typeof args[key]) val[key] = null;
      if ('boolean' == typeof args[key]) val[key] = false;
    }
  }
  return val as T
}

