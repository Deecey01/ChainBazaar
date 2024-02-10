import React from "react";
import "./Left.css";
import Dropdown from "./Dropdown";
const Left = () => {
  return (
    <div className="left-div">
      <div className="head">
        <div className="sort">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M33.7295 4.16669H16.2712C8.68783 4.16669 4.16699 8.68752 4.16699 16.2709V33.7084C4.16699 41.3125 8.68783 45.8334 16.2712 45.8334H33.7087C41.292 45.8334 45.8128 41.3125 45.8128 33.7292V16.2709C45.8337 8.68752 41.3128 4.16669 33.7295 4.16669ZM27.7712 35.4167H22.2087C21.3545 35.4167 20.6462 34.7084 20.6462 33.8542C20.6462 33 21.3545 32.2917 22.2087 32.2917H27.7712C28.6253 32.2917 29.3337 33 29.3337 33.8542C29.3337 34.7084 28.6462 35.4167 27.7712 35.4167ZM33.3337 26.5625H16.667C15.8128 26.5625 15.1045 25.8542 15.1045 25C15.1045 24.1459 15.8128 23.4375 16.667 23.4375H33.3337C34.1878 23.4375 34.8962 24.1459 34.8962 25C34.8962 25.8542 34.1878 26.5625 33.3337 26.5625ZM37.5003 17.7084H12.5003C11.6462 17.7084 10.9378 17 10.9378 16.1459C10.9378 15.2917 11.6462 14.5834 12.5003 14.5834H37.5003C38.3545 14.5834 39.0628 15.2917 39.0628 16.1459C39.0628 17 38.3545 17.7084 37.5003 17.7084Z"
              fill="#FFF1A0"
            />
          </svg>
        </div>
        <div className="results"> 12000 Results</div>
      </div>
      <div className="line1">
        {/* <div className="status">Status</div> */}
        <div>
          <div className="downarr">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
