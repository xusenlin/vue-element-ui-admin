import {defineStore} from "pinia"
import storage from "good-storage"
import {storagePrefixKey} from "@/config/app"

const UIK = storagePrefixKey + "User"

export type User = {
  name: string,
  token: string
}//自己完善

export interface UserStore {
  info: User,
//权限之类的
}



export const useUserStore = defineStore("user", {
  state: (): UserStore => {
    return {
      info: storage.get(UIK),
    }
  },
  getters: {
    token: (state) => state.info.token,
    userName: (state) => state.info.name,
  },
  actions: {
    updateUserInfo(user: User) {
      this.info = user
      storage.set(UIK, user)
    },
    loginOut(){
      storage.remove(UIK)
      window.location.reload()
    }
  }
})

//下面这些函数是从本地读取，在pinia还没有创建的时候，例如路由钩子
export const getUserInfo = (): User => {
  return storage.get(UIK, {})
}

export const getUserInfoByKey = (k: keyof User): any => {
  let u = getUserInfo()
  return u[k]
}

export const getToken = (): string => {
  let u = getUserInfo()
  return u["token"]
}
