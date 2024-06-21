import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: JSON.parse(localStorage.getItem("cart")) ?? [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
