import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartProducts: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isProductInCart =
        state.cartProducts.length >= 0 && state.cartProducts.find(el => el.id === action.payload.id)
      if (!isProductInCart) state.cartProducts.push(action.payload)
      else {
        const productInCartIndex = state.cartProducts.findIndex(el => el.id === action.payload.id)

        if (state.cartProducts[productInCartIndex].quantity === undefined)
          state.cartProducts[productInCartIndex].quantity = 2
        else state.cartProducts[productInCartIndex].quantity += action.payload.quantity
      }
    },
    updateQuantity: (state, action) => {
      const productInCartIndex = state.cartProducts.findIndex(el => el.id === action.payload.id)
      if (productInCartIndex !== -1)
        state.cartProducts[productInCartIndex].quantity = action.payload.quantityValue
    },
    deleteCartItem: (state, action) => {
      state.cartProducts = state.cartProducts.filter(el => el.id !== action.payload)
    }
  }
})

//action
export const { addToCart, updateQuantity, deleteCartItem } = cartSlice.actions

export default cartSlice.reducer
