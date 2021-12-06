import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Redux/Cart/cartSlice'
import productsReducer from '../Redux/products/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartReducer
  }
})
