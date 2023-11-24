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
      },
      {
        text: 'node',
        items: [
          { text: 'node包管理工具', link: '/node/index' }
        ]
      },
      {
        text: 'vue',
        items: [
          { text: '手写vue2.0源码-响应式数据原理', link: '/vue/readctive' }
        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: 'ESlint,EditorConfig,Prettier', link: '/frontend/config' }
        ]
      },
      {
        text: '浏览器',
        items: [
          { text: '浏览器的进程模型', link: '/browser/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhaoZhuoLin' }
    ]
  }
})
