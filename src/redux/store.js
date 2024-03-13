import { configureStore } from "@reduxjs/toolkit";
import card from "./reducers/card";



export const store = configureStore ({
    reducer:{
        card,
    },
});