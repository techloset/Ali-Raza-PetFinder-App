import FooterLogo from "../../assets/images/footerImages/purinaLogo.svg";
import Logo from "../../assets/images/footerImages/PetfinderLogo.svg";
import Facebook from "../../assets/images/footerImages/FacebookLogo.svg";
import Insta from "../../assets/images/footerImages/InstagramLogo.svg";
import Twitter from "../../assets/images/footerImages/TwitterLogo.svg";
import Pintrest from "../../assets/images/footerImages/PinterestLogo.svg";
import YouTube from "../../assets/images/footerImages/YouTubeLogo.svg";
import arrowWhite from "../../assets/images/footerImages/DownwardArrow.svg"
export default function Footer() {
  return (
    <>
      <div className="bg-purp">
        {/* Footer Logo Section  */}
        <div className="h-[44px] flex justify-center items-center bg-red-500">
          <div className="h-[35px] flex justify-center items-center">
            <img src={FooterLogo} alt="" srcSet="" className="" />
          </div>
        </div>

        {/* Footer Link Section  */}

        <div className="Footer bg-purp  px-3 flex md:mx-4 lg:mx-10 xx:justify-center xx:items-center sm:justify-center sm:items-center lg:justify-evenly flex-col">
        <div className="bg-[#6504b5] w-full flex justify-center">
          <div className="flex xx:justify-center xx:mt-10 sm:mt-8 sm:justify-center md:flex  lg:mb-[30px] lg:justify-start ">
            <img src={Logo} alt="" srcSet="" />
          </div>
        </div>
          <div className="flex md:justify-between lg:justify-evenly lg:gap-20 ">
          <div className=" flex gap-16 text-white leading-4 xx:hidden sm:hidden md:hidden  lg:flex ">
            <div className="leading-8 ">
              <div className="text-base font-bold">Resources</div>
              <div className="text-sm hover:scale-105">FAQs</div>
              <div className="text-sm hover:scale-105">Mobile App Download</div>
              <div className="text-sm hover:scale-105">Parttext-basenerships</div>
              <div className="text-sm hover:scale-105">News Center</div>
              <div className="text-sm hover:scale-105">Put Petfinder On Your Site</div>
              <div className="text-sm hover:scale-105">For Developers</div>
              <div className="text-sm hover:scale-105">Contact Us</div>
            </div>
            <div className="">
              <div className="text-base font-bold">Adopt or Get Involved</div>
              <div className="text-sm hover:scale-105">All Adopt or Get Involved</div>
              <div className="text-sm hover:scale-105">Adopting Pets</div>
              <div className="text-sm hover:scale-105">Animal Shelters & Rescues</div>
              <div className="text-sm hover:scale-105">Other Types of Pets</div>
            </div>
            <div className="">
              <div className="text-base font-bold ">About Dogs & Puppies</div>
              <div className="text-sm hover:scale-105">All About Dogs & Puppies</div>
              <div className="text-sm hover:scale-105">Dog Adoption</div>
              <div className="text-sm hover:scale-105">Dog Breeds</div>
              <div className="text-sm hover:scale-105">Feeding Your Dog</div>
              <div className="text-sm hover:scale-105">Dog Behavior</div>
              <div className="text-sm hover:scale-105">Dog Health & Wellness</div>
              <div className="text-sm hover:scale-105">Dog Training</div>
              <div className="text-sm hover:scale-105">Other Dog Information</div>
            </div>
            <div className="">
              <div className="text-base font-bold ">About Cats & Kittens</div>
              <div className="text-sm hover:scale-105">All About Cats & Kittens</div>
              <div className="text-sm hover:scale-105">Cat Adoption</div>
              <div className="text-sm hover:scale-105">Cat Breeds</div>
              <div className="text-sm hover:scale-105">Feeding Your Cat</div>
              <div className="text-sm hover:scale-105">Cat Behavior</div>
              <div className="text-sm hover:scale-105">Cat Health & Wellness</div>
              <div className="text-sm hover:scale-105">Cat Training</div>
              <div className="text-sm hover:scale-105">Other Cat Information</div>
            </div>
          </div>
          <div className="flex flex-col h-[166.39px] sm:w-[330px] xx:w-auto xx:mx-2 xx:mt-6  sm:justify-center sm:items-center xx:my-5 sm:my-5 md:my-5 bg-slate-200 p-[22px] gap-10 rounded-lg">
            <div className="text-purp sm:w-[277.5px] xx:w-auto h-[41px] text-base ">
              To get the latest on pet adoption and pet care,sign up for the
              Petfinder newsletter.
            </div>
            <div className="w-full flex justify-center items-center ">
              <div className="flex justify-center items-center w-[240px] h-[48px] hover:scale-105 bg-purp rounded-3xl text-white">
                <button type="button">SIGN UP</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="xx:grid sm:grid md:grid lg:hidden xl:hidden ">
          <details className="w-full list-image-none bg-prup">
            <summary className="px-[20px] flex  text-white text-sm font-normal border-t border-purple-200 font-['Arial'] uppercase leading-snug py-[16px] cursor-pointer">
              <div className=" font-semibold tracking-wide">
                {" "}
                RESOURCES
              </div>
              <img className="ms-auto" src={arrowWhite} alt="" />
            </summary>
            <div className="w-full  px-[20px]  text-white ">
              <ul className="text-white ms-1 pb-[20px]">
                <li>
                  <div className=" text-[13px] leading-none">FAQs</div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Mobile App Download
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Partnerships
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    News Center
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Put Petfinder On Your Site
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    For Developers
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Contact Us
                  </div>
                </li>
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
                <li>
                  <div className=" text-[13px] leading-none">All Adopt or Get Involved</div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Adopting Pets
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Animal Shelters & Rescues
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Other Types of Pets
                  </div>
                </li>
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
                <li>
                  <div className=" text-[13px] leading-none">All About Dogs & Puppies</div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Dog Adoption
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Dog Breeds
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Feeding Your Dog
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Dog Behavior
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Dog Health & Wellness
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Dog Training
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Other Dog Information
                  </div>
                </li>
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
                <li>
                  <div className=" text-[13px] leading-none">All About Cats & Kittens</div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Cat Adoption
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Cat Breeds
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Feeding Your Cat
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Cat Behavior
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Cat Health & Wellness
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Cat Training
                  </div>
                </li>
                <li>
                  <div className="pt-[13px] text-[13px]  leading-none">
                    Other Cat Information
                  </div>
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div className="w-full h-[64px] flex flex-wrap xx:h-[250px] sm:h-[130px] md:h-[100px] gap-4 justify-center items-center text-white ">
          <div className="border-r-2 border-white pr-2 ">
            Shelter & Rescue Registration
          </div>
          <div className="border-r-2 border-white pr-2 ">Sitemap</div>
          <div className="border-r-2 border-white pr-2 ">Terms of Service</div>
          <div className="border-r-2 border-white pr-2 ">
            Notice at Collection
          </div>
          <div className="border-r-2 border-white pr-2  xx:border-r-1">
            Privacy Policy (updated)
          </div>
          <div className="border-r-2 border-white pr-2 ">
            Do Not Sell Or Share My Personal Information
          </div>
          <div className="border-r-2 border-white pr-2 ">Accessibility</div>
          <div className="">About Our Ads</div>
        </div>
      </div>


      {/* Footer Links  */}
      <div className="h-auto md:h-[120px] text-center text-white bg-[#2e0152] flex-wrap xx:h-[150px] lg:h-[70px]">
        <div className="h-full flex justify-evenly items-center xx:grid sm:grid md:grid  lg:flex ">
          <div className="flex items-center justify-center gap-10 xx:gap-4 sm:gap-2 sm:mb-4 xx:grid sm:grid md:flex  xx:order-2 lg:order-1">
            <div className="">©2023 Petfinder.com</div>
            <div className=" ">
              All trademarks are owned by Société des Produits Nestlé S.A., or
              used with permission.
            </div>
          </div>

          <div className="flex h-[22px] gap-[30px] items-center justify-center xx:order-1 lg:order-2 xx:pt-4 xx:mb-4 sm:pb-4">
            <div className="hover:scale-110">
              <img src={Facebook} alt="Fb" srcSet="" />
            </div>
            <div className="hover:scale-110">
              <img src={Insta} alt="Insta" srcSet="" />
            </div>
            <div className="hover:scale-110">
              <img src={Twitter} alt="Twitter" srcSet="" />
            </div>
            <div className="hover:scale-110">
              <img src={Pintrest} alt="Pintrest" srcSet="" />
            </div>
            <div className="hover:scale-110">
              <img src={YouTube} alt="YouTube" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
