import { configureStore } from "@reduxjs/toolkit";
import allSlicesReducer from './allSlices'

export const store=configureStore({
    reducer:{
        allSlices:allSlicesReducer,
    }
})