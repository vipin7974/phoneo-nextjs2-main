'use client'
import axios from "axios";
import { API_PATH, API_Versions } from "../constants";


export const fetchServices ={
    fetchHomePageData:(shopName)=>axios.get(`${API_Versions}/${API_PATH.version}/${API_PATH.STORE}/${shopName}`)
}

