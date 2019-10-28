const sidebar = require('./config/sidebar');
const nav = require('./config/nav');

module.exports = {
    title: "不是博客",
    description: "不是博客",
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', {
            rel: 'icon',
            href: '/img/witch.ico'
        }]
    ],
    base: '/blog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    // 顶部导航栏
    themeConfig: {
        displayAllHeaders: true,
        // sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: '最后更新', // 文档更新时间：每个文件git最后提交的时间,
        nav, //导航
        sidebar, //侧边栏
    },
    plugins: [
        require('./plugins/routeConfig'),
    ],
}