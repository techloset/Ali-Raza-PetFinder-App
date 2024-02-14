import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/footerImages/purinaLogo.svg";
import Logo from "../../assets/images/footerImages/PetfinderLogo.svg";
import Facebook from "../../assets/images/footerImages/FacebookLogo.svg";
import Insta from "../../assets/images/footerImages/InstagramLogo.svg";
import Twitter from "../../assets/images/footerImages/TwitterLogo.svg";
import Pintrest from "../../assets/images/footerImages/PinterestLogo.svg";
import YouTube from "../../assets/images/footerImages/YouTubeLogo.svg";
import arrowWhite from "../../assets/images/footerImages/DownwardArrow.svg";
import {
  navlink_1st,
  navlink_2nd,
  navlink_3rd,
  navlink_4th,
  footLinks,
} from "../../type/Type";

const FooterSocialICons = [Twitter, YouTube, Pintrest, Insta, Facebook];
export default function Footer() {
  return (
    <>
      <div className="bg-purp ">
        <div className="h-[44px] flex justify-center items-center bg-red-500 ">
          <div className="h-[35px] flex justify-center items-center ">
            <img src={FooterLogo} alt="" srcSet="" className="cursor-pointer" />
          </div>
        </div>

        <div className="Footer bg-purp  px-3 flex md:mx-4 lg:mx-10 xx:justify-center xx:items-center sm:justify-center sm:items-center  flex-col">
          <div className="mx-auto lg:w-[1267px]  footerbug:max-w-[980px] footerbug2:md:max-w[900px]">
            <div className="bg-[#6504b5] flex lg:justify-start">
              <Link
                to={"/"}
                className="flex xx:justify-center xx:mt-10 sm:mt-8 sm:justify-center lg:mb-[30px] lg:justify-center cursor-pointer"
              >
                <img src={Logo} className="" alt="" />
              </Link>
            </div>
          </div>

          <div className="flex md:justify-between lg:justify-evenly lg:gap-20 ">
            <div className=" flex gap-16 text-white leading-4 xx:hidden sm:hidden md:hidden  lg:flex ">
              <div className="leading-8 ">
                <div className="text-base font-bold cursor-default">
                  Resources
                </div>
                {navlink_1st.map((link: string, i: number) => {
                  return (
                    <div
                      className="text-sm hover:scale-100 hover:underline cursor-pointer my-2"
                      key={i}
                    >
                      {link}
                    </div>
                  );
                })}
              </div>
              <div className="">
                <div className="text-base font-bold cursor-default">
                  Adopt or Get Involved
                </div>
                {navlink_2nd.map((link: string, i: number) => {
                  return (
                    <div
                      className="text-sm hover:scale-100 hover:underline cursor-pointer my-2"
                      key={i}
                    >
                      {link}
                    </div>
                  );
                })}
              </div>
              <div className="">
                <div className="text-base font-bold cursor-default">
                  About Dogs & Puppies
                </div>
                {navlink_3rd.map((link: string, i: number) => {
                  return (
                    <div
                      className="text-sm hover:scale-100 hover:underline cursor-pointer my-2"
                      key={i}
                    >
                      {link}
                    </div>
                  );
                })}
              </div>
              <div className="">
                <div className="text-base font-bold cursor-default">
                  About Cats & Kittens
                </div>
                {navlink_4th.map((link: string, i: number) => {
                  return (
                    <div
                      className="text-sm hover:scale-100 hover:underline cursor-pointer my-2"
                      key={i}
                    >
                      {link}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col h-[166.39px] sm:w-[330px] xx:w-[300px] xx:mx-2 xx:mt-6  sm:justify-center sm:items-center xx:my-5 sm:my-5 md:my-5 bg-slate-200 p-[22px] gap-10 rounded-lg">
              <div className="text-purp sm:w-[277.5px] xx:w-auto h-[41px] text-base ">
                To get the latest on pet adoption and pet care,sign up for the
                Petfinder newsletter.
              </div>
              <div className="w-full flex justify-center items-center ">
                <div className="flex justify-center items-center w-[240px] h-[48px] hover:scale-105 bg-purp rounded-3xl text-white cursor-pointer">
                  <button type="button">SIGN UP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xx:grid sm:grid md:grid lg:hidden xl:hidden sm:px-10 xx:px-5 ">
          <details className="w-full list-image-none bg-prup ">
            <summary className="px-[20px] flex  text-white text-sm border-t border-purple-200 font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
              <div className=" font-semibold tracking-wide"> RESOURCES</div>
              <img className="ms-auto" src={arrowWhite} alt="" />
            </summary>
            <div className="w-full  px-[20px]  text-white ">
              <ul className="text-white ms-1 pb-[20px]">
                {navlink_1st.map((link: string, i: number) => {
                  return (
                    <div
                      className="text-xs hover:scale-100 hover:underline cursor-pointer"
                      key={i}
                    >
                      {link}
                    </div>
                  );
                })}
              </ul>
            </div>
          </details>
          <details className="w-full list-image-none bg-prup">
            <summary className="px-[20px] flex  text-white text-sm font-normal border-t border-purple-200 font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
              <div className=" font-semibold tracking-wide">
                {" "}
                Adopt or Get Involved
              </div>
              <img className="ms-auto" src={arrowWhite} alt="" />
            </summary>
            <div className="w-full  px-[20px]  text-white ">
              <ul className="text-white ms-1 pb-[20px]">
                {navlink_2nd.map((link: string, i: number) => {
                  return (
                    <div
                      className="text-sm hover:scale-100 hover:underline cursor-pointer"
                      key={i}
                    >
                      {link}
                    </div>
                  );
                })}
              </ul>
            </div>
          </details>
          <details className="w-full list-image-none bg-prup">
            <summary className="px-[20px] flex  text-white text-sm font-normal border-t border-purple-200 font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
              <div className=" font-semibold tracking-wide">
                {" "}
                About Dogs & Puppies
              </div>
              <img className="ms-auto" src={arrowWhite} alt="" />
            </summary>
            <div className="w-full  px-[20px]  text-white ">
              <ul className="text-white ms-1 pb-[20px]">
                {navlink_3rd.map((link: string, i: number) => {
                  return (
                    <div
                      className="text-sm hover:scale-100 hover:underline cursor-pointer"
                      key={i}
                    >
                      {link}
                    </div>
                  );
                })}
              </ul>
            </div>
          </details>
          <details className="w-full list-image-none bg-prup">
            <summary className="px-[20px] flex  text-white text-sm font-normal border-t border-purple-200 font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
              <div className=" font-semibold tracking-wide">
                {" "}
                About Cats & Kittens
              </div>
              <img className="ms-auto" src={arrowWhite} alt="" />
            </summary>
            <div className="w-full  px-[20px]  text-white ">
              <ul className="text-white ms-1 pb-[20px]">
                {navlink_4th.map((link: string, i: number) => {
                  return (
                    <div
                      className="text-sm hover:scale-100 hover:underline cursor-pointer"
                      key={i}
                    >
                      {link}
                    </div>
                  );
                })}
              </ul>
            </div>
          </details>
        </div>
        <div className="w-full lg:px-[120px] h-[64px] flex flex-wrap xx:h-[250px] sm:h-[130px] md:h-[100px] gap-4 justify-center items-center text-white ">
          {footLinks.map((link: string, i: number) => {
            return (
              <div
                className={`${
                  footLinks.length != i + 1 ? "border-r-2 border-white" : ""
                }  pr-2 hover:underline cursor-pointer`}
                key={i}
              >
                {link}
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-auto md:h-[130px] text-center items-center text-white bg-[#2e0152] flex-wrap xx:h-[150px] lg:h-[70px]">
        <div className="h-full flex justify-evenly items-center xx:grid sm:grid md:grid  lg:flex ">
          <div className="flex items-center justify-center gap-24 xx:gap-4 sm:gap-2 sm:mb-4 xx:grid sm:grid md:flex  xx:order-2 lg:order-1">
            <div className="sm:mt-4 md:mt-0 mr-8">©2023 Petfinder.com</div>
            <div className="">
              All trademarks are owned by Société des Produits Nestlé S.A., or
              used with permission.
            </div>
          </div>

          <div className="flex h-[22px] gap-[30px] items-center justify-center xx:order-1 lg:order-2 xx:pt-4 xx:mb-4 sm:pb-4">
            {FooterSocialICons.map((SocialIcons: string, i: number) => {
              return (
                <div key={i}>
                  <Link to={"/"}>
                    <img
                      className="h-[22px] w-[22px] mx-[5px] "
                      src={SocialIcons}
                      alt="SocialIcons"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
