import { createSlice } from "@reduxjs/toolkit";
import { getHomePageData } from "./thunks/thunks";


const allSlices=createSlice({
    name:"allSlices",
    initialState:{

        //main data
        mainData:null,
        isHomePageDataLoading:true,
        isHomePageDataError:false,
        //main data

        finalResult:null
    },
    extraReducers:(builder)=>{
        builder.addCase(getHomePageData.fulfilled,(state,action)=>{
             state.mainData=action.payload;
             state.finalResult=action.payload
             state.isHomePageDataLoading=false;
             
        })
         builder.addCase(getHomePageData.pending,(state,action)=>{
            
             state.isHomePageDataLoading=true
        })
         builder.addCase(getHomePageData.rejected,(state,action)=>{
             state.isHomePageDataError=true;
             console.log("home page error is",action.payload)
             
        })
    }
})

export default allSlices.reducer;