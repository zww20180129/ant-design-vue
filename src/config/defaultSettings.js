/**
 * 项目默认配置项
 * primaryColor - 默认主题色, 如果修改颜色不生效，请清理 localStorage
 * navTheme - sidebar theme ['dark', 'light'] 两种主题
 * colorWeak - 色盲模式
 * layout - 整体布局方式 ['sidemenu', 'topmenu'] 两种布局
 * fixedHeader - 固定 Header : boolean
 * fixSiderbar - 固定左侧菜单栏 ： boolean
 * contentWidth - 内容区布局： 流式 |  固定
 *
 * storageOptions: {} - Vue-ls 插件配置项 (localStorage/sessionStorage)
 *
 */
import storage from 'store'
export default {
  navTheme: storage.get('navTheme') || 'dark', // theme for nav menu
  primaryColor: storage.get('primaryColor') || '#52C41A', // primary color of ant design
  layout: storage.get('layout') || 'sidemenu', // nav menu position: `sidemenu` or `topmenu`
  contentWidth: storage.get('contentWidth') || 'Fluid', // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
  fixedHeader: storage.get('fixedHeader') || true, // sticky header
  fixSiderbar: storage.get('fixSiderbar') || true, // sticky siderbar
  colorWeak: storage.get('colorWeak') || false,
  menu: {
    locale: storage.get('locale') || true
  },
  title: 'VUE技术交流组',
  content: '我们不生产代码，我们只是代码的搬运工',
  pwa: false,
  iconfontUrl: '',
  production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
  routeRole: 'after' // before 前端控制 or after 后端控制
}
