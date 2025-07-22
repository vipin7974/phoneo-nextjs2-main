import React from "react";
import { useSelector } from "react-redux";
import { RiMailAddFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";



function Footer() {
  const { mainData } = useSelector((state) => state.allSlices);
  

  //Number logic
  const mobileNumberStr = mainData ? mainData?.Number.toString() : null;
  let mobileNumber = null;
  mainData?.Number.toString()[0] === "0"
    ? (mobileNumber = `${mobileNumberStr?.slice(1, 5)}-${mobileNumberStr?.slice(
        5,
        8)}-${mobileNumberStr?.slice(8, 12)}`)
    : (mobileNumber = `${mobileNumberStr?.slice(0, 4)}-${mobileNumberStr?.slice(
        4,
        7
      )}-${mobileNumberStr?.slice(7, 12)}`);

  return (
    <>
      <div className="footer_main_box">
        <div className="footer_content_box">
          <div className="footer_shop_name_box">
            <p>{mainData?.ShopName}</p>
            <span>
              {mainData?.Slogan
                ? mainData?.Slogan
                : "Top 10 brands are available"}
            </span>
          </div>

          <div className="footer_contact_box footer_comm_box">
            <span className="footer_comm_title"><u>Contact</u></span>
            <div className="footer_number_box footer_comm_sub_box">
              <div className="footer_number_box_number_icon_box">
                <IoMdCall />
              </div>
              <div className="footer_number">
                <p>{`(+91) ${mobileNumber}`}</p>
              </div>
            </div>
            <div className="footer_mail_box footer_comm_sub_box">
              <div className="footer_mail_box_icon">
                <RiMailAddFill />
              </div>
              <div className="footer_mail_name">
                <p>demo@Example.com</p>
              </div>
            </div>

          </div>

          <div className="footer_socialMedia_box footer_comm_box">
            <span className="footer_comm_title"><u>Social Media</u></span>
           <div className="footer_insta_Box footer_comm_sub_box">
            <div className="footer_Insta_icon">
                <AiFillInstagram />
            </div>
            <Link href={mainData?.InstaLink}>
            <div className="footer_instaID">
               <p>{mainData?.ShopName}</p>
            </div>
            </Link>
            
           </div>
           <div className="footer_whatsapp_Box footer_comm_sub_box">
            <div className="footer_whatsapp_icon">
                <RiWhatsappFill />
            </div>
            <div className="footer_whatsapp_number">
                <p>{`(+91) ${mobileNumber}`}</p>
            </div>
           </div>
          </div>
        </div>
        <div className="footer_phoneo_box_l">
            <p>powered by Phoneo</p>
            <p>Copyright &copy;2025 PHONEO All Rights Reserved</p>
        </div>
        <div className="footer_phoneo_box_s">
                 <p>Copyright &copy;2025 PHONEO All Rights Reserved</p>
                 <span>powered by Phoneo</span>
         </div>
      </div>
    </>
  );
}

export default Footer;
