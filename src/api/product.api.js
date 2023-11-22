import axios from './axios.config'
import * as product from './product.json'

export const createProduct = async (data) => {
  const dataSend = JSON.stringify(data)
  const res = await axios.post('/product', dataSend,
    {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
  )
  return res.status
}

export const getProducts = () => {
  // const res = await axios.get('/product')
  return product
}
