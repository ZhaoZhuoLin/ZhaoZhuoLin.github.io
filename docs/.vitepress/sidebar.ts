import type { DefaultTheme } from 'vitepress'
export const sidebar: DefaultTheme.Sidebar = [
  {
    text: "构建工具",
    items: [
      {
        text: '常用工具',
        link: '/builds/tool'
      },
      {
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
      }
    ],
  },
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
      text: '使用verdaccio搭建npm私服',
      link: '/node/使用verdaccio搭建npm私服'
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
  },
  {
    text: "TypeScript",
    items: [{
      text: 'TypeScript',
      link: '/typeScript/type'
    }, {
      text: 'tsconfig',
      link: '/typeScript/tsconfig'
    }]
  },
  {
    text: "浏览器",
    items: [{
      text: '浏览器进程模型',
      link: '/browser/index'
    }]
  }
]
