import { defineConfig } from 'vitepress'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "代码时间 | CodeTime",
  description: "代码时间",
  themeConfig: {
    logo: "./codetime.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '😀主页', link: '/' },
      {
        text: '🧭编程导航', items: [
          { text: "前端工程化", link: "/builds/webpack" },
          { text: "Node", link: "/node/indexpackage" },
          { text: "TypeScript", link: "/typeScript/type" },
        ],
      },
      {
        text: '📘公众号',
        items: [
          {
            text: '代码时间',
            link: '/'
          }
        ]
      },
    ],
    sidebar: {
      "/builds/": [
        {
          text: '构建工具',
          items: [{
            text: 'webpack',
            link: '/builds/webpack'
          }, {
            text: 'glup',
            link: '/builds/glup'
          }, {
            text: 'rollup',
            link: '/builds/rollup'
          }, {
            text: 'snowpack',
            link: '/builds/snowpack'
          }, {
            text: 'vite',
            link: '/builds/vite'
          }]
        },
      ],
      "/node/": [
        {
          text: "Node",
          items: [{
            text: 'npm包管理工具',
            link: '/node/indexpackage'
          }, {
            text: '运行环境',
            link: '/node/runnode'
          }, {
            text: '包的安装机制',
            link: '/node/npm'
          }, {
            text: '启动npm run',
            link: '/node/run'
          }, {
            text: '发布一个npm包',
            link: '/node/publicnpm'
          },
          {
            text: '渲染模式',
            link: '/node/渲染模式'
          },
          {
            text: '常用的fs操作',
            link: '/node/常用的fs操作'
          }, {
            text: '插件扩展',
            link: '/node/插件扩展'
          }, {
            text: 'PM2',
            link: '/node/PM2'
          }
          ]
        }
      ],
      "/typeScript/": [{
        text: "TypeScript",
        items: [{
          text: 'TypeScript',
          link: '/typeScript/type'
        }, {
          text: 'tsconfig',
          link: '/typeScript/tsconfig'
        }]
      }]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZhaoZhuoLin' }
    ],
    footer: {
      message: "MIT License.",
      copyright: "Copyright © 2024 CodeTime",
    },
  }
})
