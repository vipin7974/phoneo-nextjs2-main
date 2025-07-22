'use client'

import React from 'react';
import { RiMailAddFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { useSelector } from 'react-redux';



function Header() {

    const {mainData}=useSelector(state=>state.allSlices)
    const mobileNumberStr=mainData?.Number.toString()
    let mobileNumber=null;
    //Number logic
    mainData?.Number.toString()[0]==='0'?
    mobileNumber=`${mobileNumberStr?.slice(1,5)}-${mobileNumberStr?.slice(5,8)}-${mobileNumberStr?.slice(8,12)}`
    :mobileNumber=`${mobileNumberStr?.slice(0,4)}-${mobileNumberStr?.slice(4,7)}-${mobileNumberStr?.slice(7,12)}`




  return (
    <>
    <div className="header_box">
        <div className="friend_line">
            <p>
            Tell a friend about Second hand phones & get 45% off your next order
            </p>
        </div>

        <div className="header_part_2">
             <div className="mail_box">
            <div className="header_mail_box_icon">
                <RiMailAddFill /> 
            </div>
            <div className="header_mail_name">
               <p>demo@Example.com</p> 
            </div>
        </div>
        <div className="header_number_box">
            <div className="header_number_icon_box">
                <IoMdCall />
            </div>
            <div className="header_number">
                <p>{`(+91) ${mobileNumber}`}</p>
            </div>
        </div>
        </div>
       
    </div>
  
    </>
  )
}

export default Header