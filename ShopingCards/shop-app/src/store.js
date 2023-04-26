import  { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./reduxslices/CardSlice";
import ProductSlice from "./reduxslices/ProductSlice";

const store =  configureStore({
    reducer:{
        carts: CardSlice,
        product:ProductSlice
    }
});

export default store;