import { createSlice } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  description: string
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [] as CartItem[],
  },
  reducers: {
    addItemToCart: (state, action) => {
      console.log('addItemToCart', action.payload)

      const item = state.cartList.find((item) => item.id === action.payload.id)

      if (item) {
        item.quantity += 1
        return
      }

      state.cartList.push(action.payload)
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cartList.find((item) => item.id === action.payload.id)

      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartList = state.cartList.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.cartList = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart, clearCart, decreaseItemQuantity } = cartSlice.actions

export default cartSlice.reducer
