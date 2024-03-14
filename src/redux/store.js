import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import cart from "./reducers/cart";
import { saveState } from "../config/store";
import { setTotalPrice, setProductCount, add, deleteItem, toggleProduct } from "./reducers/cart";

 const countMiddleware = createListenerMiddleware();
 countMiddleware.startListening({
  matcher: isAnyOf(add, deleteItem,toggleProduct),
  effect: (_, api)=> {
api.dispatch(setProductCount());
api.dispatch(setTotalPrice())
  },
 })

export const store = configureStore({
  reducer: {
    cart,
  },
  middleware: (defaultMiddleware)=>{
return defaultMiddleware().concat(countMiddleware.middleware)
  }
});

store.subscribe(() => {
  saveState("products", store.getState().cart);
});
