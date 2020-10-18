import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'message': '-',
  'menu.home': '主页',
  'menu.dashboard': '仪表盘',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'app.setting.pagestyle': 'layout配色',
  'app.setting.themecolor': '主题颜色',
  'app.setting.navigationmode': '导航模式',
  'app.setting.content-width': '内容宽度',
  'app.setting.fixedheader': '固定头部',
  'app.setting.fixedsidebar': '固定侧边栏',
  'app.setting.othersettings': '其他设置',
  'app.setting.weakmode': '色盲模式',
  'app.setting.content-width.fixed': '有边距',
  'app.setting.content-width.fluid': '全屏'
}

export default {
  ...components,
  ...locale
}
