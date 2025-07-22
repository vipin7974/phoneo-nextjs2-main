import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";


export default function ItemCount() {
  return (
    <>
    <div className="itemCount_main_box">
        <div className="itemcount_count_box">
            <span>24</span>
            <p>items</p>
        </div>
        <div className="itemcount_search_box">
            <input type="text" placeholder='Search...'/>
            <button>
                <CiSearch />
            </button>
        </div>
        <div className="itemcount_filter_box">
            <p>Filter</p>
            <FaFilter />
        </div>
    </div>
    </>
  )
}
