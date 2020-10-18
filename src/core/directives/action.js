import Vue from 'vue'
import store from '@/store'

/**
 * Action 权限指令
 * 指令用法：
 *  - 在需要控制 action 级别权限的组件上使用 v-action=['admin','xxx','xxx'] , 如下：
 */
const action = Vue.directive('action', {
  inserted: function (el, binding, vnode) {
    const roles = store.getters.roles
    const permissions = binding.value
    roles.forEach(p => {
      if (!permissions.includes(p)) {
        el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
      }
    })
  }
})

export default action
