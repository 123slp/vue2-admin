import axios from './base'

axios.install = function (Vue, config = {}) {
  Vue.prototype.$api = axios
}
export default axios
