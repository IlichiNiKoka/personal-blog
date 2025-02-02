---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
    name: "伊莉奇博客站"
    text: "伊莉奇的技术博客存放地"
    tagline: 沉舟侧畔千帆过，置之死地而后生。
    image:
        src: logo.jpg
        alt: logo

    actions:
        - theme: brand
          text: 这就开始
          link: "/Algorithm"
        - theme: alt
          text: 转到Github
          link:

features:
    - title: 数据分析
      details: 了解各种数据分析，收集和处理工具的使用
      link:
    - title: 机器学习
      details: 有关机器学习原理，算法和数学基础的知识
      link:
    - title: 项目博客
      details: 各种项目的开发历程
      link:
    - title: 语言基础
      details: 编程语言基础
      link:
footer: MIT Licensed | Copyright  © 2025-present Ilichi
---

<style>:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
