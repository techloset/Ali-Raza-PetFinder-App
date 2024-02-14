import React, { useState } from "react";
import img from "../../assets/images/LogoPetfinder.svg";
import icon from "../../assets/images/ForwardIcon.svg";
import hearticon from "../../assets/images/IconFavoriteHeart.svg";
import hearticonMobile from "../../assets/images/icon-favoriteHeart-Mobile.svg";
import toggler from "../../assets/images/togler.svg";
import NavOption from "../navOption/NavOption";
export default function Header() {
  const [show, setShow] = useState(true);
  const showNav = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <div className=" mx-auto h-16 flex justify-around ">
        <div className="xx:gap-2 flex gap-12">
          <img src={img} alt="logo" />
          <div className="flex justify-center items-center">
            <button className="flex gap-3" type="button" onClick={showNav}>
              <div className="grid content-center font-medium text-purple hover:scale-105">
                {" "}
                All About Pets{" "}
              </div>
              <img className="my-auto " src={icon} alt="forwardicon" />
            </button>
          </div>
        </div>
        <div className="xx:hidden md:flex flex items-center justify-center gap-7 h-16 font-arial text-base font-normal">
          <div className="border-r-4 h-[64px]  pr-6 border-[#d2d1d3]  ">
            <img src={hearticon} alt="heart Icon" className="hover:scale-110" />
          </div>
          <div className="hover:scale-110">Sign Up</div>
          <div className="hover:scale-110">Log In</div>
        </div>
        <div className="sm:hidden justify-end h-16 xx:inline-flex gap-2 border-[#d2d1d3]  ">
          <div className="">
            <img src={hearticonMobile} alt="heart Icon" />
          </div>
          <button type="button" className=" sm:hidden">
            <img src={toggler} alt="" srcSet="" />
          </button>
        </div>
      </div>
      {show && <NavOption />}
    </>
  );
}
