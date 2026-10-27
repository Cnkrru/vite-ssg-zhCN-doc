# vite-ssg 中文文档

[vite-ssg](https://github.com/antfu-collective/vite-ssg) 是基于 Vite 的 Vue 3 静态站点生成器

- 配合 vue-router，将路由配置的每一个页面都编译为 HTML，而非 Vue 原版的单页应用（SPA）
- 配合 unhead，让每一个页面都有完整的 head 元数据，SEO 友好
- 配置化，只需几行配置就能快速把 Vue 的 SPA 改造成 SSG

- 技术底座：Vue 3 + Vite
- 渲染时机：构建期
- 产物形态：静态 HTML
- 核心收益：SEO 友好

## 官方文档

- [01 简介与安装](/官方文档/01-简介与安装)：版本要求、安装、ViteSSG 入口写法、tree-shaking、单页模式与 ClientOnly
- [02 文档头管理](/官方文档/02-文档头)：用 useHead 管理 head；beasties 抽取首屏关键 CSS 内联
- [03 Critical CSS](/官方文档/03-CriticalCSS)：Critical CSS 的安装与配置
- [04 初始状态](/官方文档/04-初始状态)：initialState 的写入与恢复、Pinia/Vuex 集成、自定义序列化
- [05 配置参考](/官方文档/05-配置参考)：ssgOptions 常用字段、includedRoutes 预渲染动态路由
- [06 选型对比](/官方文档/06-对比)：与 VitePress 的取舍、示例项目与仓库资源

## 其他

- [SPA 与 SSG](/其他/01-SPA与SSG)：两种渲染形态的区别与适用场景

## 相关资源

- [vite-ssg 仓库](https://github.com/antfu-collective/vite-ssg)：源码与英文 README
- [Vite](https://vitejs.dev)：下一代前端构建工具
- [Vue 3](https://vuejs.org)：渐进式 JavaScript 框架
- [unhead](https://unhead.unjs.io)：文档头管理

::: tip
vite-ssg 虽然让产物变成了 SSG 的格式，但实际运行时仍然是 SPA 的姿势。
:::

::: info 关于本套文档
该文档的资料来源于 vite-ssg 仓库的 `README.md`，本站将其翻译过后拆分成几个文档，并在补充文档里加了一些个人使用经验；本文档站基于 VitePress 搭建。
:::
