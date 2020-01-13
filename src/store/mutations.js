const mutations = {
  updateName (state, data) { // 只含有两个参数，state为全局，data为传入的数据
    state.name = data || ''
  },
  updateSideStatus (state) {
    state.sideStatus = !state.sideStatus
  }
}

export default mutations
