import axios from 'axios'

const service = axios.create({
  baseURL: "/mock", 
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
