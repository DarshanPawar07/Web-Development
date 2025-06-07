import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import cartReducer from "./Slices/CartSlice"

export const store=configureStore({

    reducer:{
        
        cart:cartReducer,
        
        /* idhar ek key value pair hoti hai jismei pehele slice mei reducer mei jo humne naam diya tha vo aaata hai badmei slice waale function/file ka naam */
    }
})