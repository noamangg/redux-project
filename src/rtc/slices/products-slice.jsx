import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("ProductReducer/fetchProducts", async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json()
  return data;
})

const ProductReducer = createSlice({
  initialState: [],
  name: "ProductReducer",
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload
    })
  }
})


// export const {} = ProductReducer.actions;
export default ProductReducer.reducer;