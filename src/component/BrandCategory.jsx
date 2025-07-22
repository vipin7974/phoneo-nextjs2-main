import { brands } from "@/brand";
import React from "react";
import { useSelector } from "react-redux";

export default function BrandCategory() {
  const { mainData } = useSelector((state) => state.allSlices);
  const usedPhone = mainData ? mainData.used_phones : null;
  const brandList = [];
  usedPhone?.map((item) => {
    brands.map((item2, index) => {
      item.Company.toLowerCase() == item2.name.toLowerCase()
        ? !brandList.includes(item2)
          ? brandList.push(item2)
          : null
        : null;
    });
  });

  return (
    <div className="brand_box">
      {brandList.map((item, index) => {
        return (
          <div className='brand' key={index}>
            <img src={`${item.src}`} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
}
