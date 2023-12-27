export default [{
        text: '导航推荐',
        link: '/navigation/index',
        items: []
    },
    {
        text: '浏览器',
        items: [{
            text: '进程模型',
            link: '/browser/index'
        }]
    },
    {
        text: 'Node',
        collapsed: true,
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
    },
    {
        text: '模块化打包工具',
        collapsed: true,
        items: [{
            text: 'webpack',
            link: '/module/webpack'
        }, {
            text: 'rollup',
            link: '/module/rollup'
        }, {
            text: 'esbuild',
            link: '/module/esbuild'
        }, {
            text: 'vite',
            link: '/module/vite'
        }]
    },
    {
        text: 'Vue',
        collapsed: true,
        items: [{
            text: 'Vue2.0响应式数据原理',
            link: '/vue/readctive'
        }]
    },
    {
        text: 'Nginx',
        collapsed: true,
        items: [ ]
    },
    {
        text: 'Docker',
        collapsed: true,
        items: [{
            text: '认识Docker',
            link: '/docker/recognize'
        },{
            text: 'dockerfile',
            link: '/docker/dockerfile文件'
        } ]
    },
]