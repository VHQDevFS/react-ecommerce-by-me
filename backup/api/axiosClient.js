import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.request.use(
  function (config) {
    //do something before request sent

    return config
  },
  function (error) {
    //do something went request error
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    //do something before request sent

    return response
  },
  function (error) {
    //do something went request error
    return Promise.reject(error)
  }
)

export default axiosClient
