# VueElementUiAdmin

## Project setup

```
yarn install
```

## Compiles and hot-reloads for development

```
yarn dev //本地开发环境
```

## Compiles and minifies for production

```
yarn build:dev //线上开发环境
yarn build:test //线上测试环境
yarn build:pre //线上预发布环境
yarn build //线上正式环境

```

## Lints and fixes files

```
yarn lint
```

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 更新日志

V1.01 未发布

- 完善了多种环境配置
- 添加路由嵌套示例和保存每一层级路由参数
- 整理 store，方便做菜单权限

V1.00

- 使用了全新依赖和 ESLint+Prettier 第二次重构(2020.01)。编辑器配合 Prettier 可实现 Ctrl+S 自动格式化美化代码
- 添加 api 自动生成工具

> 番外： [MareWood](https://github.com/xusenlin/MareWood) 是一个 Go 开发的轻量级前端部署工具,可以很灵活的配置各种打包部署环境并提供访问,特别是远程的时候，方便后端和测试使用。
