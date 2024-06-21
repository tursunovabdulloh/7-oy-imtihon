import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ limit, skip }) => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&sort=rating`
    );
    const data = await response.json();
    return data.products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
