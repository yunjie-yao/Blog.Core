module.exports = {
    title: 'Blog.Core',
    description: 'Hello, 欢迎使用BCVP（Blog.Core）框架!',
    base : '/.doc/',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './contents/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '参与贡献', link: '/Contribution/' },
            { text: '更新日志', link: '/Update/' },
            { text: '社区', link: '/QQ/' },
            { text: 'Github', link: 'https://github.com/anjoy8/Blog.Core' },
        ],
        sidebarDepth: 2,
        sidebar: {
          '/guide/': getGuideSidebar('Guide'),
        }
    }
}

function getGuideSidebar (groupA) {
    return [
      {
        title: groupA,
        collapsable: false,
        children: [
          '',
          'getting-started',
          'cheat-sheet'
        ]
      }
    ]
  }