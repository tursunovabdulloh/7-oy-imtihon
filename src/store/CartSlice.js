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
//     filterDataByCategory: (state, action) => {
//       state.data = state.filteredData.filter(
//         (product) => product.category === action.payload.category
//       );
//     },
//     setSortOrder: (state, action) => {
//       const { filteredData } = state;
//       switch (action.payload) {
//         case "high":
//           state.filteredData = [...filteredData].sort(
//             (a, b) => b.price - a.price
//           );
//           break;
//         case "low":
//           state.filteredData = [...filteredData].sort(
//             (a, b) => a.price - b.price
//           );
//           break;
//         case "a-z":
//           state.filteredData = [...filteredData].sort((a, b) =>
//             a.title.localeCompare(b.title)
//           );
//           break;
//         case "z-a":
//           state.filteredData = [...filteredData].sort((a, b) =>
//             b.title.localeCompare(a.title)
//           );
//           break;
//         default:
//           state.filteredData = [...filteredData];
//       }
//     },
//     addProduct: (state, action) => {
//       state.products.push(action.payload);
//       localStorage.setItem("cart", JSON.stringify(state.products));
//     },
//     searchItem: (state, action) => {
//       state.filteredData = [
//         ...state.data.filter(({ title }) =>
//           title.toLowerCase().includes(action.payload.toLowerCase())
//         ),
//       ];
//     },
//   },
// });

// export const {
//   addProduct,
//   getData,
//   filterDataByCategory,
//   setSortOrder,
//   searchItem,
// } = cartSlice.actions;

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
      state.data = state.filteredData.filter(
        (product) => product.category === action.payload.category
      );
    },
    setSortOrder: (state, action) => {
      const { filteredData } = state;
      switch (action.payload) {
        case "high":
          state.filteredData = [...filteredData].sort(
            (a, b) => b.price - a.price
          );
          break;
        case "low":
          state.filteredData = [...filteredData].sort(
            (a, b) => a.price - b.price
          );
          break;
        case "a-z":
          state.filteredData = [...filteredData].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          break;
        case "z-a":
          state.filteredData = [...filteredData].sort((a, b) =>
            b.title.localeCompare(a.title)
          );
          break;
        default:
          state.filteredData = [...filteredData];
      }
    },
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.products));
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.products));
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    searchItem: (state, action) => {
      state.filteredData = [
        ...state.data.filter(({ title }) =>
          title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      ];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
  getData,
  filterDataByCategory,
  setSortOrder,
  searchItem,
} = cartSlice.actions;

export default cartSlice.reducer;
