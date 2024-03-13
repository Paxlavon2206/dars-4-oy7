import { configureStore } from "@reduxjs/toolkit";
import cart from "./reducers/cart";
import { saveState } from "../config/store";

export const store = configureStore({
  reducer: {
    cart,
  },
});

store.subscribe(() => {
  saveState("products", store.getState().cart);
});
