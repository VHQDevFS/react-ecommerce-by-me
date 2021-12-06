import axiosClient from './axiosClient'

const productApi = {
  getProducts(params) {
    const url = '/products'

    if (!params) return axiosClient.get(url)
    else return axiosClient.get(url, { params })
  },

  getProductByCategory(category) {
    const url = `/products/category/${category}`
    return axiosClient.get(url)
  },

  getProductById(id) {
    const url = `/products/${id}`

    return axiosClient.get(url)
  }
}

export default productApi
