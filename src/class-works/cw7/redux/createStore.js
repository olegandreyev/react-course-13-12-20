import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import productsReducer from "./slices/products";

export default () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
    },
    middleware: [...getDefaultMiddleware()],
    devTools: true
  })
}
