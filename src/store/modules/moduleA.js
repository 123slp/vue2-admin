export default {
  namespaced: true, // 在带命名空间的模块内访问全局内容 getter的第三四参数 root：true访问root下的action等
  state: {},
  getters: {},
  mutatios: {},
  actions: {
    moduleAfunc () {
      console.log('出发了兄弟action')
    }
  }
}
