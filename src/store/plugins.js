import createPersistedState from 'vuex-persistedstate'
// vuex数据持久化
export default [
  createPersistedState({
    key: 'myvuex',
    storage: window.sessionStorage,
    paths: []
  }),
  createPersistedState({
    key: 'msg',
    storage: window.sessionStorage,
    paths: []
  })
]
