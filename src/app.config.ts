export default defineAppConfig({
  // 页面列表
  pages: ['pages/index/index', 'pages/about/index'],
  // 窗口样式
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  // 分包
  subpackages: [
    {
      root: 'pages/featureA',
      pages: ['index/index', 'nutui/index', 'request/index', 'css/index'],
    },
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/images/tabBar/home.png',
        selectedIconPath: 'assets/images/tabBar/home-active.png',
      },
      {
        pagePath: 'pages/about/index',
        text: '关于',
        iconPath: 'assets/images/tabBar/home.png',
        selectedIconPath: 'assets/images/tabBar/home-active.png',
      },
    ],
  },
})
