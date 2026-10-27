## Critical CSS

Vite SSG 通过 [`beasties`](https://github.com/danielroe/beasties) 包内置支持生成 [Critical CSS](https://web.dev/extract-critical-css/) 并将其内联到 HTML 中。
使用以下命令安装：

```bash
npm i -D beasties
```

Critical CSS 的生成功能会自动为你启用。

要配置 beasties，请在 vite.config.ts 中把[它的选项](https://github.com/danielroe/beasties#usage)传入`ssgOptions.beastiesOptions`

```ts
// vite.config.ts
export default defineConfig({
  ssgOptions: {
    beastiesOptions: {
      // 例如，更改预加载策略
      preload: 'media',
      // 其他选项: https://github.com/danielroe/beasties#usage
    },
  },
})
```