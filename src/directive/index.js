let directives = {}

directives.focus = {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
}

directives.install = function (Vue, option = {}) { // 注册自定义指令
  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })
}
export default directives
