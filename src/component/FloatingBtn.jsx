import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";





function FloatingBtn() {
  return (
        <>
        <div className="floating_btn_box">
            <div className='floating_icon floating_call'><IoMdCall /></div>
              <div className='floating_icon floating_location'><FaLocationDot /></div>
                <div className='floating_icon floating_insta'><RiInstagramFill /></div>
                  <div className='floating_icon floating_whatsapp'><FaWhatsapp /></div>
        </div>
        </>
  )
}

export default FloatingBtn