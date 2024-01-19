import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "代码时间 | CodeTime",
  description: "代码时间",
  themeConfig: {
    logo:"./codetime.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '😀主页', link: '/' },
      { text: '🧭导航推荐', link: '/navigation/index' },
       
      { 
        text: '🚝开源项目', 
        items:[
        {
          text: '看球🌍',
          link: '/'
        }
      ]},
      { 
        text: '📘公众号', 
        items:[
        {
          text: '代码时间',
          link: '/'
        }
      ]},
      { text: '🛫代办清单', link: '/base/index' },
     ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhaoZhuoLin' }
    ]
  }
})
