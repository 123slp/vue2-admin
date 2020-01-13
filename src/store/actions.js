import axios from 'axios'

const actions = {
  getUsername ({commit}, config) { // 触发子模块的action和mutation--加上子模块名
    axios.request({}).then(res => {
      commit('updateName', '小强')
    })
  }
}

export default actions
