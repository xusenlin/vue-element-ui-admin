export type User = {
  name: string,
  token: string
}//自己完善

export interface UserStore {
  info: User,
//权限之类的
}
