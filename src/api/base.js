import axios from 'axios'
import { Message } from 'element-ui'

var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
})
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    if (response.status === 200) {
      Message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    }
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default (config) => {
  return new Promise(function (resolve, reject) {
    instance.request(config).then(res => {
      return Promise.resolve(res)
    }, err => {
      return Promise.reject(err)
    })
  })
}
