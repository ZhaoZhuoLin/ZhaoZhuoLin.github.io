import { defineConfig } from 'vitepress'
import sidebar  from './sidebar'
import nav from './nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/',
  title: "CT",
  description: "代码时间",
  themeConfig: {
    logo: '../images/codetime.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    footer: {
      message: '专业前端内容网站',
      copyright: 'Copyright © 2023-present CodeTime'
    },
  }
})
