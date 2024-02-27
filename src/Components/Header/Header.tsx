import { useState } from "react";
import {
  img,
  icon,
  hearticon,
  hearticonMobile,
  toggler,
} from "../../lib/constants/Constants";
import NavOption from "../navOption/NavOption";
import { Link } from "react-router-dom";
export default function Header() {
  const [show, setShow] = useState(false);
  const showNav = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <div className=" mx-auto h-16 flex justify-around ">
        <div className="xx:gap-2 flex gap-8">
          <Link to={"/"}>
            <img src={img} alt="logo" className="cursor-pointer" />
          </Link>
          <div className="flex justify-center items-center">
            <button className="flex gap-1" type="button" onClick={showNav}>
              <div className="grid content-center font-medium  text-purple">
                All About Pets
              </div>
              <img
                className={` ease-in-out duration-500  ${
                  show ? "rotate-180" : "rotate-0"
                } my-auto py-2`}
                src={icon}
                alt="forwardicon"
              />
            </button>
          </div>
        </div>
        <div className="xx:hidden md:flex flex items-center justify-center gap-7 h-16 font-arial text-base font-normal ">
          <div className="border-r-4 h-[64px]  pr-6 border-bubble-gum cursor-pointer">
            <img
              src={hearticon}
              alt="heart Icon"
              className="hover:scale-110 "
            />
          </div>
          <div className=" cursor-pointer hover:text-purp">Sign Up</div>
          <div className=" cursor-pointer hover:text-purp">Log In</div>
        </div>
        <div className="sm:hidden justify-end h-16 xx:inline-flex gap-2 border-bubble-gum">
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
