import { defineConfig } from 'vitepress' // 导入VitePress的配置函数

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: 'personal-blog',
    title: "伊莉奇博客站", // 设置网站的标题
    description: "伊莉奇的技术博客存放地", // 设置网站的描述
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '回到主页', link: '/' }, // 导航栏的首页链接

        ],

        sidebar: [

        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/IlichiNiKoka' } // 设置社交链接，GitHub图标和链接
        ]
    },
})
