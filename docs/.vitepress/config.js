import { nav,sidebar} from "./configs"
 export default {
     base: './',
     outDir: 'dist',
     lang: 'zh-CN',

     title: 'CT',
     description: '',

     themeConfig: {
         logo: '../images/codetime.jpg',
         siteTitle: "CT",
         nav,
         sidebar,
         //页脚
         footer: {
             message: 'Released under the MIT License.',
             copyright: 'Copyright © 2019-present Evan You'
         },
         // 开始搜索
         search: {
             provider: 'local'
         },
         //外链图标
         socialLinks: [{
             icon: 'github',
             link: 'https://gitee.com/HikJ'
         }],
         // 上次更新时间是否开启
         lastUpdated: {
             text: '上次更新时间',
             formatOptions: {
                 dateStyle: 'full',
                 timeStyle: 'medium'
             }
         },
         // 右侧锚点导航
         outline: {
             level: [1, 6], //h1到h6
             label: '目录'
         }
     }
 }