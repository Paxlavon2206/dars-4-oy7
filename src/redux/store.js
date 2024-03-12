import { configureStore } from "@reduxjs/toolkit";
import { cardSlice } from "./reducers/card";



export const store = configureStore ({
    reducer:{
        cardSlice,
    },
});