'use client'

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchServices } from "../services/services";

export const getHomePageData=createAsyncThunk("getHomePageData" ,async(Payload,thunkAPI)=>{
    
    try{
        const response=await fetchServices.fetchHomePageData(Payload.shopName);
        return response.data;
    }
    catch(err){
        return thunkAPI.rejectWithValue(error.response.data)
    }
})