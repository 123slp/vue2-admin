export default {
  namespaced: true,
  state: {
    name: 'moduleB'
  },
  getters: {
    getVisitName (state, getters, rootstate, rootgetters) { // 可以获取模块和全局的state及getters,全局的为第三，四参数
      console.log('模块下getters获取的状态', state, getters, rootstate, rootgetters)
      return state.name
    }
  },
  mutations: {
    setVisit (state, data) { // 只可以获取自己模块的state
      console.log('module-mutation-222', state)
      state.visit = data
    }
  },
  actions: {
    actionRequest (context, params) {
      console.log('module-action-222', context, params)
      context.commit('updateName', '周琳', {
        root: true // 子模块可以根据{root:true}触发root的mutations
      })
      context.dispatch('moduleA/moduleAfunc', null, {
        root: true
      }) // 触发兄弟模块的actions
    },
    moduleBfunc () {
      console.log('root-action触发子模块的action')
    }
  }
}
