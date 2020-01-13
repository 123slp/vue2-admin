const getters = {
  calcTotal (state, getters) { // 参数只含state,getters 并且可以获取到全局
    return state.a + state.b
  }
}
export default getters
