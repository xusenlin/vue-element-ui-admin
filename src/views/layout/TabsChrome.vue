<script setup lang="ts">
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {useRouter, useRoute,RouteRecordRaw} from 'vue-router'
import {useAppStore} from "@/stores/app";
import TabsChromeX from "@/components/tabsChrome/TabsChromeX.vue"
import {Tab} from "@/components/tabsChrome/tab";
import {
  CloseBold
} from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const activePath = ref(route.path)
const appStore = useAppStore()
const {tabsChrome} = storeToRefs(appStore)



router.afterEach((to) => {//当前路由不执行
  activePath.value = to.path
  pushThisRoute(to.path,to.meta.title as string)
})


const pushThisRoute = (path: string, title: string):void => {
  let tab: Tab = {path, title,closable:true}
  appStore.pushTabsChrome(tab)
}
//刷新时当前的页面
pushThisRoute(route.path,route.meta.title as string)

const clickTab = (t:Tab) => {
  router.push(t.path)
}
const removeTab = (t:Tab) => {
  let r = appStore.removeTabChrome(t)
  if(r){
    router.push(r.path)
  }
}

const removeAllTab = () => {
  router.push("/")
  appStore.removeAllTab()
}

</script>
<template>
  <div class="nav-tab">
    <div class="tabs-chrome">
      <TabsChromeX
          ref="tabRef"
          :tabs="tabsChrome"
          :activePath="activePath"
          @clickTab="clickTab"
          @removeTab="removeTab"
      />
    </div>

    <div class="nav-action">
      <el-dropdown>
        <div class="more-btn">
          <el-icon><MoreFilled /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="removeAllTab" :icon="CloseBold">关闭全部标签</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.nav-tab {
  display: flex;
  align-items: center;
  background-color: #ebeef4;
  .tabs-chrome {
    flex: 1;
    overflow-x: auto;

    .tabs-main {
      cursor: pointer;
    }

    .tabs-close {
      border-radius: 50%;
      cursor: pointer;
    }

    .tabs-label {
      font-size: 14px;
      color: var(--system-primary-color);
      //#409eff
    }

  }
  .nav-action {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .more-btn{
      cursor: pointer;
    }
  }
  @at-root .dark {
    .nav-tab{
      background-color: #000;
    }

  }
}


</style>


