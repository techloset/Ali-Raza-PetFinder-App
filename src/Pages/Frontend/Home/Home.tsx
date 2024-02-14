import image from "../../../assets/images/heroIcons/MainSectionBgImg.png";
import searchIcon from "../../../assets/images/heroIcons/IconSearchBackground.svg";
import img1 from "../../../assets/images/heroIcons/Dog.svg";
import img2 from "../../../assets/images/heroIcons/IconCatPortrait.svg";
import img3 from "../../../assets/images/heroIcons/IconPawOutline.svg";
import img4 from "../../../assets/images/heroIcons/IconSheltersRescues.svg";
import AvailPetsAdopt from "../availablePetsForAdoption/AvailablePetsForAdoption";
import ArticleSection from "../articleSection/ArticleSection";
export default function Home() {
  return (
    <>
      <div
        className="h-[410px] grow bg-center bg-cover  sm:bg-cover xx:bg-cover md:bg-auto bg-no-repeat grid border-b-[10px] border-[#6504B5]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="pt-5 jsutify-center ">
          <div className="flex lg:w-[808px] 2xl:h-[60px] lg:h-[70px] md:h-[60px] sm:h-[60px] xx:h-[50px] md:w- [900px] sm:w-[450px] xx:w-[270px] bg-white rounded-lg  h-[60px] mx-auto ">
            <input
              className="w-[474px] h-ful rounded-l-lg flex   bg-white border-purp rounded-md xx:border-none  sm:border-block lg:border-block py-2 pl-3 pr-3  sm:text-sm  hover:border-b-4 hover:border-t-2 outline-none hover:border-x placeholder:text-lg"
              placeholder="Search Terrier, Kitten, etc..."
              type="search"
              name="search"
            />
            <div className="bg-slate-300 w-[1.5px] h-[35px] mt-3 flex items-center xx:hidden sm:hidden md:hidden lg:flex"></div>
            <input
              className="w-[374px] h-ful  rounded-l-lg flex  bg-white  rounded-md py-2 pl-3 pr-3  sm:text-sm border-purp hover:border-b-4 hover:border-t-2 outline-none hover:border-x placeholder:text-lg sm:hidden xx:hidden md:hidden lg:flex"
              placeholder="Enter City, State, Zip"
              type="search"
              name="search"
            />
            <div className="w-[50px]  hover:border-2 hover:rounded-md hover:border-purp hover:border-w-full flex mx-2 justify-center hover:h-[45px] xx:hover:h-[30px] sm:hover:h-[40px] md:hover:h-[40px] lg:hover:h-[45px] xx:border-w-[50px] sm:border-w-[50px] hover:my-auto xx:border-w-20 ">
              <img
                src={searchIcon}
                alt=""
                srcSet=""
                className="w-[32px] h-full flex justify-center "
              />
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="text-center flex justify-center">
            <h1 className="text-4xl h-[54px]  text-white font-bold font-arial  xx:pb-32">
              Find your new best friend
            </h1>
          </div>
          <div className="text-center flex justify-center">
            <p className="text-xl  h-[32px]  text-white font font-arial ">
              Browse pets from our network of over 11,500 shelters and rescues.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:flex gap-3 xx:mt-32 xx:grid xx:grid-col-10 justify-center relative bottom-[80px] flex-wrap   ">
        <div className="w-[181px] h-[154.59px] rounded-md flex flex-col items-center shadow-xl gap-5 hover:scale-105 bg-white cursor-pointer">
          <div>
            <img
              src={img1}
              alt="Dog image"
              srcSet=""
              className="w-[79px] h-[79px] bg-cover"
            />
          </div>
          <div className="h-[20px]">Dogs</div>
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
          <div className="h-[20px]">Cats</div>
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
          <div className="h-[20px]">Other Animals</div>
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
          <div className="h-[20px]">Shelters & Rescues</div>
        </div>
      </div>

      <AvailPetsAdopt />
      <ArticleSection />
    </>
  );
}
