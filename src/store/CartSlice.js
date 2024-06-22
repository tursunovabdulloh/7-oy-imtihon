// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     data: [],
//     filteredData: [],
//     products: JSON.parse(localStorage.getItem("cart")) ?? [],
//   },
//   reducers: {
//     getData: (state, action) => {
//       state.data = action.payload;
//       state.filteredData = action.payload;
//     },
//     filterData: (state, action) => {
//       state.filteredData = state.data.filter(
//         (product) => product.category === action.payload.category
//       );
//       state.filteredData = state.data.sort();
//     },
//     filterData: (state, action) => {},
//     addProduct: (state, action) => {
//       state.products.push(action.payload);
//       localStorage.setItem("cart", JSON.stringify(state.products));
//     },
//   },
// });

// export const { addProduct, getData, filterData } = cartSlice.actions;

// export default cartSlice.reducer;
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
    sortData: (state, action) => {
      switch (action.payload) {
        case "high":
          state.filteredData = data.sort((a, b) => a.price - b.price);
          break;
        case "low":
          state.filteredData = data.sort((a, b) => b.price - a.price);
          break;
        case "a-z":
          state.filteredData = data.sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          });
          break;
        case "z-a":
          state.filteredData = data.sort(function (a, b) {
            if (a.title < b.title) {
              return 1;
            }
            if (a.title > b.title) {
              return -1;
            }
            return 0;
          });
          break;
      }
      state.filteredData = state.filteredData.sort();
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, getData, filterDataByCategory, sortData } =
  cartSlice.actions;

export default cartSlice.reducer;
