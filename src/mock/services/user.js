import Mock from 'mockjs2'
import {
  builder,
  ParamJson
} from '../util'

const info = (options) => {
  const {
    token
  } = ParamJson(options.url)
  if (token === 'admin-token') {
    return builder({
      data: {
        'id': '4291d7da9005377ec9aec4a71ea837f',
        'name': '尊敬的VUE交流组成员',
        'username': 'admin',
        'password': '',
        'avatar': '/avatar2.jpg',
        'status': 1,
        'telephone': '',
        'lastLoginIp': '27.154.74.117',
        'lastLoginTime': 1534837621348,
        'creatorId': 'admin',
        'createTime': 1497160610259,
        'merchantCode': 'TLif2btpzg079h15bk',
        'deleted': 0,
        'role': ['admin']
      }
    }, '获取成功', 200)
  }
}

const menus = (options) => {
  const {
    token
  } = ParamJson(options.url)
  if (token === 'admin-token') {
    return builder({
      data: [{
        path: '/',
        name: 'index',
        component: 'layout',
        meta: {
          title: 'menu.home'
        },
        redirect: '/dashboard/workplace',
        children: [{
            path: '/dashboard',
            name: 'dashboard',
            redirect: '/dashboard/workplace',
            component: 'RouteView',
            meta: {
              title: 'menu.dashboard',
              keepAlive: true,
              icon: 'bxAnaalyse'
            },
            children: [{
                path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
                name: 'Analysis',
                component: 'dashboard/Analysis',
                meta: {
                  title: 'menu.dashboard.analysis',
                  keepAlive: false
                }
              },
              // 外部链接
              {
                path: 'https://www.baidu.com/',
                name: 'Monitor',
                meta: {
                  title: 'menu.dashboard.monitor',
                  target: '_blank'
                }
              },
              {
                path: '/dashboard/workplace',
                name: 'Workplace',
                component: 'dashboard/Workplace',
                meta: {
                  title: 'menu.dashboard.workplace',
                  keepAlive: true
                }
              }
            ]
          },

          // forms
          {
            path: '/form',
            redirect: '/form/base-form',
            component: 'RouteView',
            meta: {
              title: '表单页',
              icon: 'form',
              roles: ['admin']
            },
            children: [{
                path: '/form/base-form',
                name: 'BaseForm',
                component: 'form/basicForm',
                meta: {
                  title: '基础表单',
                  keepAlive: true
                }
              },
              {
                path: '/form/step-form',
                name: 'StepForm',
                component: 'form/stepForm/StepForm',
                meta: {
                  title: '分步表单',
                  keepAlive: true
                }
              },
              {
                path: '/form/advanced-form',
                name: 'AdvanceForm',
                component: 'form/advancedForm/AdvancedForm',
                meta: {
                  title: '高级表单',
                  keepAlive: true
                }
              }
            ]
          },

          // list
          {
            path: '/list',
            name: 'list',
            component: 'RouteView',
            redirect: '/list/table-list',
            meta: {
              title: '列表页',
              icon: 'table'
            },
            children: [{
                path: '/list/table-list/:pageNo([1-9]\\d*)?',
                name: 'TableListWrapper',
                hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
                component: 'list/TableList',
                meta: {
                  title: '查询表格',
                  keepAlive: true,
                  roles: ['admin']
                }
              },
              {
                path: '/list/basic-list',
                name: 'BasicList',
                component: 'list/BasicList',
                meta: {
                  title: '标准列表',
                  keepAlive: true,
                  roles: ['admin']
                }
              },
              {
                path: '/list/card',
                name: 'CardList',
                component: 'list/CardList',
                meta: {
                  title: '卡片列表',
                  keepAlive: true,
                  roles: ['admin']
                }
              },
              {
                path: '/list/search',
                name: 'SearchList',
                component: 'list/search/SearchLayout',
                redirect: '/list/search/article',
                meta: {
                  title: '搜索列表',
                  keepAlive: true,
                  roles: ['admin']
                },
                children: [{
                    path: '/list/search/article',
                    name: 'SearchArticles',
                    component: 'list/search/Article',
                    meta: {
                      title: '搜索列表（文章）'
                    }
                  },
                  {
                    path: '/list/search/project',
                    name: 'SearchProjects',
                    component: 'list/search/Projects',
                    meta: {
                      title: '搜索列表（项目）'
                    }
                  },
                  {
                    path: '/list/search/application',
                    name: 'SearchApplications',
                    component: 'list/search/Applications',
                    meta: {
                      title: '搜索列表（应用）'
                    }
                  }
                ]
              }
            ]
          },

          // profile
          {
            path: '/profile',
            name: 'profile',
            component: 'RouteView',
            redirect: '/profile/basic',
            meta: {
              title: '详情页',
              icon: 'profile',
              roles: ['admin']
            },
            children: [{
                path: '/profile/basic',
                name: 'ProfileBasic',
                component: 'profile/basic',
                meta: {
                  title: '基础详情页'
                }
              },
              {
                path: '/profile/advanced',
                name: 'ProfileAdvanced',
                component: 'profile/advanced/Advanced',
                meta: {
                  title: '高级详情页'
                }
              }
            ]
          },

          // result
          {
            path: '/result',
            name: 'result',
            component: 'RouteView',
            redirect: '/result/success',
            meta: {
              title: '结果页',
              icon: 'check-circle-o'
            },
            children: [{
                path: '/result/success',
                name: 'ResultSuccess',
                component: 'result/Success',
                meta: {
                  title: '成功',
                  keepAlive: false,
                  hiddenHeaderContent: true
                }
              },
              {
                path: '/result/fail',
                name: 'ResultFail',
                component: 'result/Error',
                meta: {
                  title: '失败',
                  keepAlive: false,
                  hiddenHeaderContent: true
                }
              }
            ]
          },

          // Exception
          {
            path: '/exception',
            name: 'exception',
            component: 'RouteView',
            redirect: '/exception/403',
            meta: {
              title: '异常页',
              icon: 'warning'
            },
            children: [{
                path: '/exception/403',
                name: 'Exception403',
                component: 'exception/403',
                meta: {
                  title: '403'
                }
              },
              {
                path: '/exception/404',
                name: 'Exception404',
                component: 'exception/404',
                meta: {
                  title: '404'
                }
              },
              {
                path: '/exception/500',
                name: 'Exception500',
                component: 'exception/500',
                meta: {
                  title: '500'
                }
              }
            ]
          },

          // account
          {
            path: '/account',
            component: 'RouteView',
            redirect: '/account/center',
            name: 'account',
            meta: {
              title: '个人页',
              icon: 'user',
              keepAlive: true
            },
            children: [{
                path: '/account/center',
                name: 'center',
                component: 'account/center',
                meta: {
                  title: '个人中心',
                  keepAlive: true
                }
              },
              {
                path: '/account/settings',
                name: 'settings',
                component: 'account/settings/Index',
                meta: {
                  title: '个人设置',
                  hideHeader: true
                },
                redirect: '/account/settings/base',
                hideChildrenInMenu: true,
                children: [{
                    path: '/account/settings/base',
                    name: 'BaseSettings',
                    component: 'account/settings/BaseSetting',
                    meta: {
                      title: '基本设置',
                      hidden: true
                    }
                  },
                  {
                    path: '/account/settings/security',
                    name: 'SecuritySettings',
                    component: 'account/settings/Security',
                    meta: {
                      title: '安全设置',
                      hidden: true,
                      keepAlive: true
                    }
                  },
                  {
                    path: '/account/settings/custom',
                    name: 'CustomSettings',
                    component: 'account/settings/Custom',
                    meta: {
                      title: '个性化设置',
                      hidden: true,
                      keepAlive: true
                    }
                  },
                  {
                    path: '/account/settings/binding',
                    name: 'BindingSettings',
                    component: 'account/settings/Binding',
                    meta: {
                      title: '账户绑定',
                      hidden: true,
                      keepAlive: true
                    }
                  },
                  {
                    path: '/account/settings/notification',
                    name: 'NotificationSettings',
                    component: 'account/settings/Notification',
                    meta: {
                      title: '新消息通知',
                      hidden: true,
                      keepAlive: true
                    }
                  }
                ]
              }
            ]
          }
          /* {
              path: '/other',
              name: 'otherPage',
              component: 'PageView',
              meta: { title: '其他组件', icon: 'slack', roles: ['ansync'] },
              redirect: '/other/icon-selector',
              children: [
                  {
                      path: '/other/icon-selector',
                      name: 'TestIconSelect',
                      component: 'other/IconSelectorView',
                      meta: { title: 'IconSelector', icon: 'tool', keepAlive: true }
                  },
                  {
                      path: '/other/list',
                      component: 'RouteView',
                      meta: { title: '业务布局', icon: 'layout' },
                      redirect: '/other/list/tree-list',
                      children: [
                          {
                              path: '/other/list/tree-list',
                              name: 'TreeList',
                              component: 'other/TreeList',
                              meta: { title: '树目录表格', keepAlive: true }
                          },
                          {
                              path: '/other/list/edit-table',
                              name: 'EditList',
                              component: 'other/TableInnerEditList',
                              meta: { title: '内联编辑表格', keepAlive: true }
                          },
                          {
                              path: '/other/list/user-list',
                              name: 'UserList',
                              component: 'other/UserList',
                              meta: { title: '用户列表', keepAlive: true }
                          },
                          {
                              path: '/other/list/role-list',
                              name: 'RoleList',
                              component: 'other/RoleList',
                              meta: { title: '角色列表', keepAlive: true }
                          },
                          {
                              path: '/other/list/system-role',
                              name: 'SystemRole',
                              component: 'role/RoleList',
                              meta: { title: '角色列表2', keepAlive: true }
                          },
                          {
                              path: '/other/list/permission-list',
                              name: 'PermissionList',
                              component: 'other/PermissionList',
                              meta: { title: '权限列表', keepAlive: true }
                          }
                      ]
                  }
              ]
          } */
        ]
      }, {
        path: '*',
        redirect: '/404',
        hidden: true
      }]
    }, '获取成功', 200)
  }
}

Mock.mock(/\/user\/info/, 'get', info)
Mock.mock(/\/user\/menus/, 'get', menus)
