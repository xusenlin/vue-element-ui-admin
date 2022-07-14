/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}



declare module "good-storage"

declare module "nprogress"

declare module "lodash"

declare module "fastCrudTable"

declare module "jsoneditor"


