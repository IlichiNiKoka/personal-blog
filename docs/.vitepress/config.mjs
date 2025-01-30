import { defineConfig } from 'vitepress' // 导入VitePress的配置函数

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/personal-blog/',
    title: "伊莉奇博客站", // 设置网站的标题
    description: "伊莉奇的技术博客存放地", // 设置网站的描述
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '回到主页', link: '/' }, // 导航栏的首页链接
            { text: '算法基础', link: '/Algorithm' },
            {
                text: '数据分析',
                items: [
                    { text: '数据库原理', link: '/DataAnalysis/DataBase' },
                ],
                link: '/DataAnalysis',
            },
            {
                text: '编程语言',
                items: [
                    {text: 'Python', link: '/Language/Python' },
                ],
                link: '/Language'
            },
            {
                text: '机器学习',
                items: [
                    { text: '机器学习数学基础', link: '/MachineLearning/MathematicBasic' },
                    { text: '机器学习基础', link:'/MachineLearning/MachineLearning' },
                ],
                link: '/MachineLearning'
            },
            {
                text: '马克思主义',
                link: '/Marxism',
            },

        ],

        sidebar: [

        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/IlichiNiKoka' } // 设置社交链接，GitHub图标和链接
        ]
    },
})
