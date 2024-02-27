import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { nav } from './nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: 'dark',
  title: "代码时间 | CodeTime",
  description: "代码时间",
  markdown: {
    lineNumbers: false,
    theme: { light: 'github-light', dark: 'github-dark' }
  },
  lastUpdated: true,
  themeConfig: {
    outlineTitle: '目录',
    logo: "./codetime.jpg",
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhaoZhuoLin' }
    ],
    footer: {
      message: "MIT License.",
      copyright: "Copyright © 2024 CodeTime",
    },
    editLink: {
      pattern:
        'https://github.com/chengpeiquan/learning-vue3/edit/main/docs/:path',
      text: '在 GitHub 上编辑本章内容',
    },
    docFooter: {
      prev: '上一章',
      next: '下一章',
    },
  }
})
