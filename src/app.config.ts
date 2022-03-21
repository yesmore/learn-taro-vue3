export default defineAppConfig({
  pages: ['pages/index/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  subpackages: [
    // 分包
    {
      root: 'pages/featureA',
      pages: ['index/index', 'nutui/index', 'request/index', 'css/index'],
    },
  ],
})
