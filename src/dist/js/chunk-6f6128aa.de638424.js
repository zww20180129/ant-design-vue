(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f6128aa"],{"432b":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("5530"),i=n("5880"),o={computed:Object(r["a"])(Object(r["a"])({},Object(i["mapState"])({layout:function(t){return t.app.layout},navTheme:function(t){return t.app.theme},primaryColor:function(t){return t.app.color},colorWeak:function(t){return t.app.weak},fixedHeader:function(t){return t.app.fixedHeader},fixedSidebar:function(t){return t.app.fixedSidebar},contentWidth:function(t){return t.app.contentWidth},autoHideHeader:function(t){return t.app.autoHideHeader},isMobile:function(t){return t.app.isMobile},sideCollapsed:function(t){return t.app.sideCollapsed},multiTab:function(t){return t.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}},"55c3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-list",{attrs:{itemLayout:"horizontal"}},[n("a-list-item",{scopedSlots:t._u([{key:"actions",fn:function(){return[n("a-switch",{attrs:{checkedChildren:"暗色",unCheckedChildren:"白色",defaultChecked:"dark"===t.navTheme},on:{change:t.onChange}})]},proxy:!0}])},[n("a-list-item-meta",{scopedSlots:t._u([{key:"title",fn:function(){return[n("a",[t._v("风格配色")])]},proxy:!0},{key:"description",fn:function(){return[n("span",[t._v(" 整体风格配色设置 ")])]},proxy:!0}])})],1),n("a-list-item",[n("a-list-item-meta",{scopedSlots:t._u([{key:"title",fn:function(){return[n("a",[t._v("主题色")])]},proxy:!0},{key:"description",fn:function(){return[n("span",[t._v(" 页面风格配色： "),n("a",[t._v(t._s(t.colorFilter(t.primaryColor)))])])]},proxy:!0}])})],1)],1)},i=[],o=(n("7db0"),n("c4ef")),u=n("432b"),a=n("9fb0"),c={dark:"暗色",light:"白色"},p={mixins:[u["a"]],data:function(){return{}},filters:{themeFilter:function(t){return c[t]}},methods:{colorFilter:function(t){var e=o["a"].find((function(e){return e.color===t}));return e&&e.key},onChange:function(t){t?this.$store.commit(a["m"],a["c"].DARK):this.$store.commit(a["m"],a["c"].LIGHT)}}},s=p,l=n("2877"),f=Object(l["a"])(s,r,i,!1,null,null,null);e["default"]=f.exports}}]);