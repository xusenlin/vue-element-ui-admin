# Element UI Admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```



> 一个干净优雅的Element UI Admin模板

*一个大型单页应用离不开合理的项目结构和一些简单的封装*


## 目录结构介绍 ##

	|-- dist                             // 打包目录
	|-- src                              // 源码目录
	|   |-- api                          // Api接口目录
	|       |-- user.js           	     //用户登录、头像上传、密码修改等用户相关api
	|       |-- xxxx.js           	     // 添加自己的api
	|   |-- assets                       // 静态资源，你的style(主题自定义等)、图片、字体等。
	|   |-- components                   // 全局组件，其他页面组件请归类到所在目录
	|       |-- HelpHint                 // 帮助组件
	|       |-- ScrollPane               // 滚动组件，鼠标滚动左右移动容器，TabBar上有用
	|       |-- ToolBar                  // 每个页面的工具栏，可以在这里做权限控制，添加权限之类的
	|   |-- config                       // 应用的配置文件
	|       |-- app.js                   // 应用的配置，名字，api请求的url，版本号等。在main.js挂载全部配置到vue原型上，Vue.prototype.$Config = Config
	|       |-- localKey.js              // 性别对应的key、应用的名字、文章的状态等，可以具体到某个页面的配置，统一管理。
	|       |-- xxx.js                   // 其他配置文件，建议分类清楚，如post.js用于文章相关配置
	|   |-- utils                        // 工具函数和工具命令行之类的。
	|   |-- menu                         // 后台菜单配置，包括使用的图标等，里面也可以做权限控制
	|   |-- router                       // vue-route,当项目比较大，路由较多也建议分为多个文件，里面有例子。
	|   |-- store                        // vuex,数据仓库,model之类的
	|   |-- views                        // 页面视图。里面文件夹建议使用大驼峰,因为这样比较好看 - -
	|       |-- Layout                   // 主页面布局视图
	|       |-- Home                     // 后台主页
	|       |-- xxxx                     // 不一一介绍了，自己看吧
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .gitignore                       // 忽略的文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- vue.config.js                    // vue cli 配置
	|-- README.md                        // 说明
