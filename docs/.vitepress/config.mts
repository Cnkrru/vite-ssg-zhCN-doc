import { defineConfig } from 'vitepress'

const siteTitle = 'vite-ssg 中文文档'
const siteDescription =
  'vite-ssg（基于 Vite 的 Vue 3 静态站点生成器）非官方中文文档：安装与入门、文档头与关键 CSS、初始状态、配置参考、与 VitePress 的选型对比。'

export default defineConfig({
  lang: 'zh-CN',
  title: siteTitle,
  description: siteDescription,
  outDir: '../dist',
  head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/官方文档/01-简介与安装' },
    ],

    sidebar: [
      {
        text: '官方文档',
        items: [
          { text: '01-简介与安装', link: '/官方文档/01-简介与安装' },
          { text: '02-文档头', link: '/官方文档/02-文档头' },
          { text: '03-CriticalCSS', link: '/官方文档/03-CriticalCSS' },
          { text: '04-初始状态', link: '/官方文档/04-初始状态' },
          { text: '05-配置参考', link: '/官方文档/05-配置参考' },
          { text: '06-对比', link: '/官方文档/06-对比' },
        ],
      },
      {
        text: '其他',
        items: [
          { text: '01-SPA与SSG', link: '/其他/01-SPA与SSG' },
        ],
      },
    ],

    outline: { level: [2, 3], label: '本页目录' },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/antfu-collective/vite-ssg' },
    ],

    footer: {
      message: 'vite-ssg 中文文档，基于 VitePress 构建',
      copyright: `© ${new Date().getFullYear()} vite-ssg 中文文档`,
    },
  },
})
