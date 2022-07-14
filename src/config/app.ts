import { EnvModeEnum } from "./type.d"

export const storagePrefixKey = "V-E-U-A:"

export const appName = "VueElementUiAdmin"

export const pageSizesArr = [30, 60, 100]

export const envMode: EnvModeEnum = import.meta.env.MODE as EnvModeEnum

export const isProduction = envMode == EnvModeEnum.Pro



