import {Ref} from "vue";
import {cloneDeep} from "lodash"
import {defineStore} from "pinia"
import storage from "good-storage"
import {useDark} from '@vueuse/core'
import {storagePrefixKey} from "@/config/app"
import {Tab} from "@/components/tabsChrome/tab";


const ACK = storagePrefixKey + "Aside"
const DMK = storagePrefixKey + "Dark"
const TCK = storagePrefixKey + "Chrome"

interface appStore {
  tabsChrome: Tab[],
  asideCollapse: boolean,
  isDarkMode: Ref
}


const initTabs: Tab[] = [{
  title: '首页',
  path: '/dashboard',
  closable: false,
}]

export const useAppStore = defineStore("app", {
  state: (): appStore => {
    return {
      tabsChrome: storage.get(TCK, cloneDeep(initTabs)),//导航栏,没有值的时候需要默认打开首页
      asideCollapse: storage.get(ACK, false),//侧边栏
      isDarkMode: useDark({storageKey: DMK})//黑暗模式
    }
  },
  actions: {
    toggleAside() {
      this.asideCollapse = !this.asideCollapse
      storage.set(ACK, this.asideCollapse)
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      // useDarkToggle(this.isDarkMode)
    },
    pushTabsChrome(t: Tab) {
      let hasTab = this.tabsChrome.find((r: Tab) => r.path == t.path)
      if (hasTab) return;
      this.tabsChrome.push(t)
    },
    removeTabChrome(t: Tab): Tab | null {
      let index: number = -1
      this.tabsChrome.forEach((r, i) => {
        if (r.path == t.path) {
          index = i
        }
      })
      if (index == -1) return null
      this.tabsChrome.splice(index, 1)
      return this.tabsChrome[this.tabsChrome.length - 1]
    },
    removeAllTab() {
      this.tabsChrome = cloneDeep(initTabs)
    }
  }
})
