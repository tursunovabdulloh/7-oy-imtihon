import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./registerStore";
import productsReducer from "./productsSlice";
import cartReducer from "./CartSlice";
export const store = configureStore({
  reducer: {
    login: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
