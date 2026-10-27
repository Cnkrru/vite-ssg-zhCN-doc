## SPA
- signal page application(单页应用)
- SPA指的是该网站所有页面均由JS来实现，只有一个html文件，其他都是JS/CSS
    - 具体可以看下vue项目的编译产物文件夹`dist`,只有一个index.html，所有页面均由js来实现
- 这类网页有个特点:SEO不友好，因为SEO需要爬虫爬取网页head部分的元数据，SPA的元数据由JS动态切换(有的可能不变),导致网址在被搜索引擎搜集时，元数据不友好，搜索排名靠后
- 比如`docsify`
---
## SSG
- static site generate(静态站点生成器)
- SSG指的是一类工具，一般用于博客/文档站，一般情况下，我们只需要写markdown文件，选好主题/默认主题，填好配置，编译产物就是完整的多页面网站
- 比如`hugo`,`hexo`,`vitepress`
    - 传统SSG,`hugo`,`hexo`，都是编译出静态文件，部署也是直接部署为静态文件(HTML,CSS,javascript)
    - vitepress,vuepress,基于vite-ssg的网站，编译出一份静态文件，但是运行时依赖于vue，可以看作:静态文件只用于SEO，实际运行还是SPA的姿势
---
## vite-ssg编译/运行区别方法
### 编译
- 编译产物直接看`dist`文件夹即可
### 运行
