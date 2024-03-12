import { createSlice } from "@reduxjs/toolkit";




const initialState ={
    products: [],
    count : 0,
}
 const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        add:(state,action) =>{
            return {...state,products:[...state, action.payload]}
        }
    }
 })

 export default cardSlice.reducer;
 export const {add} = cardSlice.actions;