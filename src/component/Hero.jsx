"use client";
import React from "react";
import { useSelector } from "react-redux";
import { IoMdCall } from "react-icons/io";
import { GiDirectionSigns } from "react-icons/gi";
import BrandCategory from "./BrandCategory";
import Filter from "./Filter";
import ItemCount from "./ItemCount";
import Cards from "./Cards";

function Hero() {
  const { mainData ,finalResult} = useSelector((state) => state.allSlices);
  const categoryCheck = mainData ? JSON.parse(mainData?.PWebDetails) : null;
  const usedPhones=finalResult? finalResult.used_phones : null
  

  const isNewPhone=categoryCheck?.NewPhone==0 ? false : true;
  const isOtherItem=categoryCheck?.OtherItem==0 ? false : true;
  

    //hero pad logic
  const newPhone=isNewPhone? 'hero_box_newPhone':'hiddenNewPhone'
  const showNewPhone=(isNewPhone && isOtherItem===false ) ? 'show_newPhone':'no'
  const accessories= isOtherItem? 'hero_box_accessories' : 'hiddenAccessories'
  const showAccessories=(isOtherItem && isNewPhone===false) ? 'show_accessories' : 'no'
  const hero= (isNewPhone && isOtherItem)? 'hero_box' : 'hero_box_for_0'
  const hero2= (isNewPhone || isOtherItem)? 'hero_box_2' : 'hero_box_for_0'
  
    //hero pad logic



    //Number logic
  const mobileNumberStr=mainData? mainData?.Number.toString():null
  let mobileNumber=null;  
  mainData?.Number.toString()[0]==='0'?
  mobileNumber=`${mobileNumberStr?.slice(1,5)}-${mobileNumberStr?.slice(5,8)}-${mobileNumberStr?.slice(8,12)}`
  :mobileNumber=`${mobileNumberStr?.slice(0,4)}-${mobileNumberStr?.slice(4,7)}-${mobileNumberStr?.slice(7,12)}`
      //Number logic

  //phoneImage logic
  
  
   
 
 
  return (

    <>
    <div className="hero_page_filter_Box_s">
      <BrandCategory />
        <Filter />
    </div>
        
      <div className={`${hero} ${hero2}`}>
        <div className="hero_box_oldPhone">
          <div className="hero_box_oldPhone_content">
            <p>Welcome to {mainData?.ShopName}</p>
            <span>
              {mainData?.Slogan
                ? mainData?.Slogan
                : "Top 10 brands are available"}
            </span>
          </div>
          <div className="hero_box_oldPhone_title">
            <p>Second hand phones</p>
          </div>
        </div>
        
        <div className={`${newPhone} ${showNewPhone}`}>
          <p>New</p>
          <span>Phones</span>
        </div>
        <div className={`${accessories} ${showAccessories}`}>
          <p>Acc<span>essories</span> </p>
        </div> 
      </div>

      <div className="hero_footer">

        <div className="hero_number hero_footer_c">
          <div className="hero_number_icon hero_footer_icon_c">
                 <IoMdCall />
          </div>
          <p>{`(+91) ${mobileNumber}`}</p>
        </div>

        <div className="hero_shop_address hero_footer_c">
          <div className="hero_shop_address_icon hero_footer_icon_c">
                <GiDirectionSigns />
          </div>
          <p className="hero_shop_address_for_l">{mainData? mainData.Location : null}</p>
          <p className="hero_shop_address_for_s">{mainData? `${mainData.Location.slice(0,12)} ...` : null}</p>
        </div>

      </div>

       <div className="hero_page_filter_Box_l">
      <BrandCategory />
        <Filter />
    </div>
    <ItemCount/>
      <div className="hero_card_box">
        {
          usedPhones?.map((item)=>{
            return ( <Cards
            id={item.id}
            mobileCompany={item.Company}
            mobileModel={item.Model}
            mobileName={`${item.Company} ${item.Model}`}
            mobileColor={item.Color}
            mobileVarient={item.Variant}
            mobileImagePath={item.Thumb}
            mobileCondition={item.IsRepaired? "Repaired" : "Not Repaired"}
            mobileOffer={item.Offer}
            mobilePrice={item.SalePrice}

            />)
          })
        }
       
      </div>
    </>
  );
}

export default Hero;
