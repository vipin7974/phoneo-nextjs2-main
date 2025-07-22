import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { phoneImage } from '@/utilities/image';
import { originalPrice } from '@/utilities/Offer';
import { offerPercent } from '@/utilities/Offer';

export default function Cards({
  id,
  mobileCompany,
  mobileModel,
  mobileName,
  mobileColor,
  mobileVarient,
  mobileImagePath,
  mobileCondition,
  mobileOffer,
  mobilePrice,

}) {

  

    const realPrice=originalPrice(mobilePrice)
    



  


  return (
    <div className="card_main_box">
            <div className="card_box">
        <div className="card_heart_box">
        <IoIosHeartEmpty />
        {/* <IoIosHeart /> */}

        </div>
        <div className="card_rest_box">
          <div className="card_image_box">
            <img src={phoneImage(mobileImagePath)} alt={mobileCompany} />
          </div>
          <div className="card_content_box">
            <p className="card_mobile_name">{mobileName}</p>
            <p className="card_mobile_color card_box_com">{mobileColor}</p>
            <p className="card_mobile_varient card_box_com">{mobileVarient}</p>
            <p className="card_mobile_condition card_box_com">{mobileCondition}</p>
            <p className="card_mobile_old_price">{`₹ ${realPrice}`}</p>
            <p className="card_mobile_original_Price"><p>{`Just ₹${mobilePrice}`}</p> <span>{`${offerPercent(realPrice,mobilePrice)} off`}</span></p>
          </div>
        </div>
    </div>
    </div>

  )
}
