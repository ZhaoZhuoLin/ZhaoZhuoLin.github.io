import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "代码时间",
  description: "代码时间",
  themeConfig: {
    logo:"./codetime.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '😀主页', link: '/' },
      { text: '🚝开源项目', link: '/' },
     ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhaoZhuoLin' }
    ]
  }
})
