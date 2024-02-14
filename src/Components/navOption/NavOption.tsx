import React from "react";
export default function NavOption() {
  return (
    <div className="bg-purp content-center text-white">
      <div className="max-w-[939px] mx-auto flex items-center t-114px h-14  sm:justify-evenly md:justify-evenly lg:justify-evenly xx:justify-between ">
        <div className="hover:scale-105 cursor-pointer">
          Adopt or Get Involved
        </div>
        <div className="hover:scale-105 cursor-pointer">Dogs & Puppies</div>
        <div className="hover:scale-105 cursor-pointer">Cats & Kittens</div>
        <div className="hover:scale-105 cursor-pointer">
          Other Types of Pets
        </div>
      </div>
    </div>
  );
}
