import React from "react";
import {
  feedback,
  image,
  img1,
  img2,
  img3,
  img4,
  searchIcon,
} from "../../lib/constants/Constants";
function HomeSection() {
  return (
    <>
      <div
        className="h-[410px] border-b-[10px] border-b-purp shadow bg-cover bg-center bg-no-repeat  "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="pt-5 jsutify-center ">
          <div className="flex lg:w-[808px] 2xl:h-[60px] lg:h-[70px] md:h-[60px] sm:h-[60px] xx:h-[50px] md:w- [900px] sm:w-[450px] xx:w-[270px] bg-white rounded-lg  h-[60px] mx-auto ">
            <input
              className="w-[874px] h-ful rounded-l-lg flex   bg-white border-purp rounded-md xx:border-none  sm:border-block lg:border-block py-2 pl-3 pr-3  sm:text-sm  hover:border-b-4 hover:border-t-2 outline-none hover:border-x placeholder:text-lg"
              placeholder="Search Terrier, Kitten, etc..."
              type="search"
              name="search"
            />

            <div className="w-[50px]  hover:border-2 hover:rounded-md hover:border-purp hover:border-w-full flex mx-2 justify-center hover:h-[45px] xx:hover:h-[30px] sm:hover:h-[40px] md:hover:h-[40px] lg:hover:h-[45px] xx:border-w-[50px] sm:border-w-[50px] hover:my-auto xx:border-w-20 ">
              <img
                src={searchIcon}
                alt=""
                srcSet=""
                className="w-[36px] h-full flex justify-center "
              />
            </div>
          </div>
        </div>
        <div className="w-auto mt-32">
          <div className="text-center flex justify-center">
            <div
              className=" h-[54px]  text-white font-bold font-arial  xx:pb-32 md:mb-2"
              style={{ fontSize: 42 }}
            >
              Find your new best friend
            </div>
          </div>
          <div className="text-center flex justify-center">
            <p className="text-lg  h-[32px]  text-white font-14 font-arial ">
              Browse pets from our network of over 11,500 shelters and rescues.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:flex gap-3 xx:mt-32 xx:grid xx:grid-col-10 justify-center relative bottom-[80px] flex-wrap">
        <div className="w-[181px] h-[154.59px] rounded-md flex flex-col items-center shadow-xl gap-5 hover:scale-105 bg-white cursor-pointer">
          <div>
            <img
              src={img1}
              alt="Dog image"
              srcSet=""
              className="w-[79px] h-[79px] bg-cover"
            />
          </div>
          <div className="h-[20px] text-Tblack">Dogs</div>
        </div>
        <div className="w-[181px] h-[154.59px] rounded-md flex flex-col items-center shadow-xl gap-5 hover:scale-105 bg-white cursor-pointer">
          <div>
            <img
              src={img2}
              alt="Cat image"
              srcSet=""
              className="w-[79px] h-[79px] pt-3"
            />
          </div>
          <div className="h-[20px] text-Tblack">Cats</div>
        </div>
        <div className="w-[181px] h-[154.59px] rounded-md flex flex-col items-center shadow-xl gap-5 hover:scale-105 bg-white cursor-pointer">
          <div>
            <img
              src={img3}
              alt="Other Animals"
              srcSet=""
              className="w-[65px] h-[65px] pt-2 mt-2 mb-1"
            />
          </div>
          <div className="h-[20px] text-Tblack">Other Animals</div>
        </div>
        <div className="w-[181px] h-[154.59px] rounded-md flex flex-col items-center shadow-xl gap-5 hover:scale-105 bg-white cursor-pointer">
          <div>
            <img
              src={img4}
              alt="Shelters & Rescues"
              srcSet=""
              className="w-[79px] h-[79px] pt-4"
            />
          </div>
          <div className="h-[20px] text-Tblack">Shelters & Rescues</div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-end items-end ">
        <img src={feedback} className="w-[25px] h-[75px] cursor-pointer" />
      </div>
    </>
  );
}

export default HomeSection;
