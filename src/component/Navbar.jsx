'use client'
import React from 'react'
import { RiSearchEyeLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { FaFilter } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { RiMailAddFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";



function Navbar() {
    const{mainData}=useSelector(state=>state.allSlices)
    const baseUrlPhoneo = "https://phoneo1.s3.ap-south-1.amazonaws.com/";
    const baseUrlData = "https://Super.phoneo.in/";
    const path=mainData?.Thumb;
    const phooto=path?.startsWith("Phoneo")?`${baseUrlPhoneo}${path}`:`${baseUrlData}${path}}`
    const photo= path?.startsWith('https')? path :phooto;


  return (
   <>
   <div className="navbar_Box">
    <div className="navbar_drawer">
        <div className="navbar_drawer_icon1">
            <FaBars />
        </div>
         <div className="navbar_drawer_icon2">
            <RiMailAddFill />
             
         </div>
    </div>
        <div className="navbar_shopName_Box">
            <div className="navbar_mail_number_box">

            </div>
            <div className="navbar_logo_img_box">
                <img src={photo} alt="" />
            </div>
            <div className="navbar_shopName">
                <p>{mainData?.ShopName.toUpperCase()}</p>
            </div>
        </div>

        {/* //search box */}
        <div className="navbar_search_Box">
            <input type="text" placeholder='Search'/>
            <button><RiSearchEyeLine /></button>
        </div>

        {/* filter&like box*/}
        <div className="navabar_wishNfilter_box">
            <div className="navbar_wish_icon_box">
                    <GoHeart />
            </div>
            <div className="navbar_filter_box">
                <p>Filter</p>
                <div className="navbar_filter_icon">
                    <FaFilter />
                </div>
            </div>
        </div>    
   </div>
    <div className="navbar_search_Box2">
            <input type="text" placeholder='Search'/>
            <button><RiSearchEyeLine /></button>
        </div>
   </>
  )
}

export default Navbar