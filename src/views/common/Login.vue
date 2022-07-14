<script setup lang="ts">
import {useRouter} from "vue-router";
import {useUserStore,User} from "@/stores/user";

const router = useRouter()
const userStore = useUserStore()
const login = ()=>{
  let user:User = {name:"Admin",token:"xxxxxxx"}
  userStore.updateUserInfo(user)
  router.push("/")
}
</script>

<template>
  <div class="login">
    <el-button type="primary" @click="login">登录设置token</el-button>
  </div>
</template>

<style scoped>
.login{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
