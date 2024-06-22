import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./registerStore";
import productsReducer from "./productsSlice";
import cartReducer from "./CartSlice";
import { productsApi } from "../pages/products/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    login: userReducer,
    products: productsReducer,
    cart: cartReducer,
    productsApi: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
