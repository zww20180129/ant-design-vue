import { asyncRouterMap, constantRouterMap } from '@/config/router.config'
import { BasicLayout } from '@/layouts'
const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

const PageView = {
  name: 'PageView',
  render: (h) => h('page-view')
}
/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */

/*
  权限校验：
    1.如果在config/router.config.js中，asyncRouterMap路由中包含meta且route.meta.permission存在，就执行；
    2.如果meta.permission中包含返回数据permission其中一项，则返回true;(遍历走完)
 */
function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/*
  路由过滤:
    从权限校验中得出拥有的权限后，进行过滤：如果包含，则返回该路由;
 */

function filterAsyncRouter (routerMap, roles) {
  const res = []
  routerMap.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
        res.push(tmp)
    }
  })
  return res
}

// 后端动态路由
function dataArrayToRoutes (data) {
  const res = []
  data.forEach(item => {
    const tmp = { ...item }
    if (item.component === 'layout') {
      tmp.component = BasicLayout
    } else if (item.component === 'RouteView') {
      tmp.component = RouteView
    } else if (item.component === 'PageView') {
      tmp.component = PageView
    } else {
      const path = tmp.component
      tmp.component = (resolve) => require([`@/views/${path}`], resolve)
    }
    if (tmp.children) {
      tmp.children = dataArrayToRoutes(tmp.children)
    }
    res.push(tmp)
  })
  return res
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        const accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
    allRoutes ({ commit, state }, { menus }) {
      return new Promise(resolve => {
        const accessedRouters = dataArrayToRoutes(menus)
        commit('SET_ROUTERS', accessedRouters)
        resolve(accessedRouters)
      })
    }
  }
}

export default permission
