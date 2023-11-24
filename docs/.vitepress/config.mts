import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "代码时间",
  description: "代码时间",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      
      {
        text: '网络',
        items: [
          { text: '常用协议', link: '/network/agreement' },
          { text: '网络', link: '/network/Internet' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhaoZhuoLin' }
    ]
  }
})
