import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "老王自习室",
  description: "跟老王一起终身学习",

  themeConfig: {
    //修改目录及索引标题级数
    outlineTitle: "目录",
    outline:[2,6],
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/', icon: '/public/1.png' },
      { text: '算法之路', items:[
          {text:'Python', link: '/markdown-examples'},
          {text:'C++', link: '/markdown-examples'},
          {text:'OpenCV', link: '/markdown-examples'},
          {text:'Pytorch', link: '/markdown-examples'},
        
        ]},
      
      { text: '老王书架', items:[
          {text:'《孩子的头脑》', link: '/markdown-examples'}
        
        ]},

      { text: '老王随笔', items:[
          {text:'《孩子的头脑》', items:[{text:'第一章',link: '/markdown-examples'},{text:'第为章',link: '/markdown-examples'}] },
          {text:'《孩子的头脑2》', items:[{text:'第一章',link: '/markdown-examples'},{text:'第为章',link: '/markdown-examples'}] },
        
        ]},

      
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: false,
    aside: "left",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LanWong1' },
      { icon: '/B.svg', link: 'https://github.com/vuejs/vitepress' },
    ],
    footer:{
      copyright:"Copyright @ 2024 IanWong"
    }
  }
})
