import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
  initialState: [],
  name: "CartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity++;
      }
      else {
        state.push({...action.payload, quantity: 1})
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      console.log("OI am here", state, action);
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clearCart, deleteCart } =
  CartReducer.actions;

export default CartReducer.reducer;
