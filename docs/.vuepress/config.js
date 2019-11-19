module.exports = {
  title: '个人主页', 
    description: '雨寒的个人博客',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
  themeConfig: {
   nav: [
      { text: 'home', link: '/' },
      { text: '基础', link: '/base/'},
       { text: '博文',
         items: [
           { text: 'Android', link: '/android/' },
           { text: 'ios', link: '/ios/' },
           { text: 'Web', link: '/web/' }
         ]
       },
       { text: '关于', link: '/about/' },
       { text: 'Github', link: 'https://github.com/wbyuhan' },
    ],
      sidebar: {
        '/base/': [
          '',     /* /foo/*/
          'one',  /* /foo/one.html */
          'two'   /* /foo/two.html */
        ],
        '/bar/': [
          '',      /* /bar/ */
          'three', /* /bar/three.html */
          'four'   /* /bar/four.html */
        ],
  
        // 回退(fallback)侧边栏配置
        '/': [
          '',        /* / */
          'contact', /* /contact.html */
          'about'    /* /about.html */
        ]
      },
    //  '/android/': [
    //                 ,
                  
    //                 ],
    //        "/ios/":[
    //                "",
    //                "ios1",
    //                ],
    //        "/web/":[
    //                "",
    //                "web1",
    //                     ],
   sidebarDepth: 'auto',
   lastUpdated: 'Last Updated', 
},
}