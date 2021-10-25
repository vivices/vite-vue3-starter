# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

#目录结构

```
├── publish/
└── src/
  ├── assets/                    // 静态资源目录
  ├── common/                    // 通用类库目录
  ├── components/                // 公共组件目录
  ├── router/                    // 路由配置目录
  ├── store/                     // 状态管理目录
  ├── style/                     // 通用 CSS 目录
  ├── utils/                     // 工具函数目录
  ├── views/                     // 页面组件目录
  ├── App.vue
  ├── main.ts
  ├── shims-vue.d.ts
├── tests/                         // 单元测试目录
├── index.html
├── tsconfig.json                  // TypeScript 配置文件
├── vite.config.ts                 // Vite 配置文件
└── package.json
```

#eslint

```
ESLint风格 - 使用airbnb默认配置
vscode用户请安装插件:
  1.ESLint
  2.EditorConfig - 支持EditorConfig配置

设置保存保存文件自动执行eslint --fix :
  1.VSCode 在 settings.json 设置文件中，增加以下代码
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  2.WebStorm 打开设置窗口，按如下操作，最后点击 Apply -> OK

解决 Prettier 和 ESLint 的冲突


```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```
