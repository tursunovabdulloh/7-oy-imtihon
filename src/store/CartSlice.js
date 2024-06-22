import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    filteredData: [],
    products: JSON.parse(localStorage.getItem("cart")) ?? [],
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
    },
    filterDataByCategory: (state, action) => {
      state.filteredData = state.data.filter(
        (product) => product.category === action.payload.category
      );
    },
    setSortOrder: (state, action) => {
      const { data } = state;
      switch (action.payload) {
        case "high":
          state.filteredData = [...data].sort((a, b) => b.price - a.price);
          break;
        case "low":
          state.filteredData = [...data].sort((a, b) => a.price - b.price);
          break;
        case "a-z":
          state.filteredData = [...data].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          break;
        case "z-a":
          state.filteredData = [...data].sort((a, b) =>
            b.title.localeCompare(a.title)
          );
          break;
        default:
          state.filteredData = [...data];
      }
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    searchItem: (state, action) => {
      state.filteredData = [
        ...state.data.filter(({ title }) => title.includes(action.payload)),
      ];
    },
  },
});

export const {
  addProduct,
  getData,
  filterDataByCategory,
  setSortOrder,
  searchItem,
} = cartSlice.actions;

export default cartSlice.reducer;
