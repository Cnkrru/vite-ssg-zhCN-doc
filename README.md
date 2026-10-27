## 项目简介

vite-ssg 的非官方中文文档。内容来自 vite-ssg 仓库的 `README.md` 翻译，并补充了少量个人使用经验。

- 官方文档：安装与入门、文档头、Critical CSS、初始状态、配置参考、选型对比
- 其他：SPA 与 SSG 的渲染形态对比

---

## 技术栈

- [VitePress](https://vitepress.dev) 1.6.x：站点框架，替代原来的 hellodocs
- Node.js `^22.18.0 || >=24.12.0`
- 站点图标使用 Vite 官方 `logo-without-border.svg`，vite-ssg 仓库没有提供官方图标资源

---

## 目录结构

```text
vite-ssg/
├─ docs/
│  ├─ index.md               # 首页
│  ├─ 官方文档/               # 官方 README 的中文翻译
│  ├─ 其他/                   # 补充内容
│  ├─ public/favicon.svg     # 站点图标
│  └─ .vitepress/config.mts  # 站点配置
├─ package.json
└─ dist/                     # 构建产物
```

`docs` 是 VitePress 的内容根目录，路由与文件路径一一对应，例如 `docs/官方文档/01-简介与安装.md` 对应 `/官方文档/01-简介与安装`。

---

## 常用命令

```bash
npm install      # 安装依赖
npm run dev      # 启动开发服务器
npm run build    # 构建到项目根 dist/
npm run preview  # 本地预览构建产物
```

开发服务器默认地址是 `http://localhost:5173`，修改 `config.mts` 后需要重启才会生效。

---

## 新增文档

1. 在 `docs/官方文档/` 或 `docs/其他/` 下新建 `.md` 文件，首行写一级标题
2. 在 `config.mts` 的 `sidebar` 里追加条目，`text` 与文件名保持一致（去掉 `.md`）
3. 需要首页入口时，在 `docs/index.md` 对应分组下补一行链接

```ts
{ text: '07-新文档', link: '/官方文档/07-新文档' }, // text 直接使用文件名，不额外改写
```

侧边栏是手动维护的数组，没有使用自动生成插件，新增或删除文件后要同步这里。

---

## 配置说明

- `nav` 只保留“首页”和“文档”两项
- `outDir` 设为 `../dist`，产物输出到项目根目录
- 搜索使用 VitePress 本地索引，不需要额外服务
- 页脚、右侧目录、GitHub 入口均在 `themeConfig` 中配置

---

## 关键要点

1. 内容全部在 `docs` 下，目录名即路由路径
2. 侧边栏手动维护，`text` 与文件名一致
3. 构建产物在项目根 `dist`，可直接用于静态托管
4. 改配置后必须重启开发服务器或重新构建
