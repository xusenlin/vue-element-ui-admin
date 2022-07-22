<script setup lang="ts">
import {useRouter} from "vue-router";
import { appName,version } from "@/config/app"
import {useUserStore} from "@/stores/user";
import {User as UserType} from "@/stores/type";
import {reactive, ref} from "vue";

enum PasswordType {
  Password = "password",
  Text = "text"
}

const router = useRouter()
const userStore = useUserStore()

const form = reactive({name:"",password:""})

const passwordType = ref<PasswordType>(PasswordType.Password)


const passwordTypeChange = () => {
  passwordType.value = passwordType.value === PasswordType.Password ? PasswordType.Text :PasswordType.Password
}

const login = ()=>{
  let user:UserType = {name:"Admin",token:"xxxxxxx"}
  userStore.updateUserInfo(user)
  router.push("/")
}
</script>

<template>
  <div class="login">
    <div class="login-box">
      <h1>{{ appName }}</h1>
      <p class="version">Version {{ version }}</p>
      <el-form class="form">
        <el-input
            size="large"
            v-model="form.name"
            placeholder="用户名"
            type="text"
            maxlength="50"
        >
          <template #prepend>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
        <el-input
            size="large"
            ref="password"
            v-model="form.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            maxlength="50"
        >
          <template #prepend>
            <el-icon><Lock /></el-icon>
          </template>
          <template #append>
            <div @click="passwordTypeChange" class="eye">
              <svg v-if="passwordType === PasswordType.Password"  class="password-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5156" width="48" height="48"><path d="M467.911111 775.68h-2.56 2.56z m-4.835555-1.991111z m-1.991112 0z m6.826667 2.844444a62.008889 62.008889 0 0 0 21.333333 3.413334 60.871111 60.871111 0 0 1-21.333333-3.413334z m23.608889 3.128889z m2.275556 0z m43.804444-30.151111z m0 0" fill="#FFFFFF" p-id="5157"></path><path d="M956.586667 339.626667a44.942222 44.942222 0 0 0-69.973334-56.888889c-122.595556 152.462222-245.191111 227.555556-368.071111 227.555555s-250.88-74.808889-382.862222-227.555555a44.657778 44.657778 0 0 0-76.231111 14.506666A43.804444 43.804444 0 0 0 67.697778 341.333333a1067.235556 1067.235556 0 0 0 127.715555 126.577778l-83.626666 96.426667a31.857778 31.857778 0 1 0 48.355555 41.813333l85.333334-98.702222v-1.422222a573.44 573.44 0 0 0 127.146666 67.413333 26.168889 26.168889 0 0 0-3.982222 7.964444l-34.133333 136.533334a32.142222 32.142222 0 0 0 62.293333 15.644444l34.133333-136.533333a52.622222 52.622222 0 0 0 0-6.542222 395.377778 395.377778 0 0 0 185.457778-3.413334l48.071111 136.533334a31.857778 31.857778 0 0 0 60.302222-21.333334l-47.502222-135.395555a553.528889 553.528889 0 0 0 131.128889-78.791111L890.595556 568.888889a31.857778 31.857778 0 0 0 45.226666-45.226667l-77.653333-77.937778a1004.373333 1004.373333 0 0 0 98.417778-106.097777z" fill="#C6CACD" p-id="5158"></path></svg>
              <svg v-else  class="password-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5364" width="48" height="48"><path d="M471.608889 862.72h1.422222-1.422222zM497.208889 867.84a56.888889 56.888889 0 0 1-20.764445-3.128889 56.888889 56.888889 0 0 0 20.764445 3.128889zM942.933333 508.586667a1004.942222 1004.942222 0 0 0-77.653333-75.377778l48.64-48.64A31.288889 31.288889 0 1 0 869.546667 341.333333l-53.191111 52.337778a658.773333 658.773333 0 0 0-142.222223-83.057778l35.271111-100.408889a31.288889 31.288889 0 0 0-59.164444-20.48L614.4 290.133333a378.595556 378.595556 0 0 0-199.111111 0l-27.022222-109.226666a31.288889 31.288889 0 0 0-60.871111 15.36l28.444444 113.777777a627.768889 627.768889 0 0 0-132.266667 73.671112L155.875556 304.355556a31.288889 31.288889 0 1 0-47.217778 40.96l64.853333 75.377777a1018.88 1018.88 0 0 0-92.444444 87.893334 90.453333 90.453333 0 0 0 0 122.88c79.644444 85.333333 242.631111 232.391111 430.933333 232.391111s351.288889-146.204444 430.933333-232.391111a90.453333 90.453333 0 0 0 0-122.88zM512 711.111111a131.982222 131.982222 0 1 1 131.982222-131.982222A131.982222 131.982222 0 0 1 512 711.111111z" fill="#C6CACD" p-id="5365"></path></svg>
            </div>

          </template>
        </el-input>
        <el-button size="large"  type="primary" @click="login()" style="width: 100%;">设置假token</el-button>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #9e9e9e;
  align-items: center;
  .login-box{
    width: 500px;
    background: white;
    border-radius: 8px;
    height: 440px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
    h1 {
      margin-top: 38px;
      text-align: center;
    }
    .version{
      margin-top: 0;
      color: #222;
      font-size: 14px;
    }

    .form {
      width: 80%;
      margin: 40px auto 15px;
      .el-input {
        margin-bottom: 28px;
      }
      .eye{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .password-icon {
          width: 20px;
          height: 20px;
          cursor: pointer;
          color: #409EFF;
        }
      }

    }
  }
}
</style>
