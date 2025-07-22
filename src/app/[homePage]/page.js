'use client'
import React, { Suspense } from "react";
import Header from "@/component/Header";
import Hero from "@/component/Hero";

import { getHomePageData } from "@/redux/thunks/thunks";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorBoundary from "@/ErrorBoundary";
import Footer from "@/component/Footer";
import FloatingActionButtons from "@/component/FloatingBtn";
import { Fab } from "@mui/material";
import FloatingBtn from "@/component/FloatingBtn";
const Navbar=React.lazy(()=>import("@/component/Navbar"))

export default function Home() {
  const dispatch=useDispatch()
  const {mainData,isHomePageDataLoading}=useSelector(state=>state.allSlices)
  const {homePage}=useParams()
  
  useEffect(()=>{
    dispatch(getHomePageData({shopName:homePage}))
  },[dispatch])



  return (
    <>
    {
      isHomePageDataLoading
      ? (
        <div className="loading">
          <p>Phoneo</p>
        </div>
      )
      :
      (
        <>
        <ErrorBoundary>
          <Header/>
        </ErrorBoundary>
        
        
      <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      </Suspense>
     <FloatingBtn/>
      <Hero />
      <Footer/>
        </>
    
      )
    }

    
   
    </>
  );
}
