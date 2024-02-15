import {
  dogDpImg,
  dogMainImg,
  kittenImg,
  kittenMainImg,
} from "../../../type/Type";

export default function ArticleSection() {
  return (
    <>
      <div className="flex justify-center gap-3 xx:grid  sm:grid lg:flex">
        <div className="max-w-[600px] h-[515] ">
          <div className="">
            <img
              src={dogMainImg}
              alt="dog img"
              srcSet=""
              className="rounded-t-2xl cursor-pointer"
            />
          </div>
          <div className="max-w-[610px] bg-white h-[18px] rounded-t-2xl relative bottom-3"></div>
          <div className="h-[100px] flex justify-center  relative bottom-[80px]">
            <img
              src={dogDpImg}
              alt="dogsmall image"
              srcSet=""
              className="rounded-full border-[6px] border-white cursor-pointer"
            />
          </div>
          <div className="max-h-[48px] flex justify-center text-xl relative bottom-12">
            Dog Adoption Articles
          </div>
          <div className="h-[62px] flex justify-center relative bottom-8 xx:px-6 xx:text-center xx:mb-4 cursor-pointer">
            Learn more about caring for your new dog
          </div>
          <div className="h-[55px] hover:bg-purp hover:text-white shadow rounded-b-lg hover:rounded-b-lg text-purp flex justify-center items-center relative bottom-12 border-t-2 border-slate-200 cursor-pointer">
            <div className="">Read More</div>
          </div>
        </div>

        <div className="max-w-[600px] h-[515]  ">
          <div className="">
            <img
              src={kittenMainImg}
              alt="kitten main image"
              srcSet=""
              className="rounded-t-2xl cursor-pointer"
            />
          </div>
          <div className="max-w-[610px] bg-white h-[18px] rounded-t-2xl relative bottom-3"></div>
          <div className="h-[100px] flex justify-center  relative bottom-[80px]">
            <img
              src={kittenImg}
              alt="kitten small image"
              srcSet=""
              className="rounded-full border-[6px] border-white cursor-pointer"
            />
          </div>
          <div className="max-h-[48px] flex justify-center text-xl relative bottom-12">
            Cat Adoption Articles
          </div>
          <div className="h-[62px] flex justify-center relative bottom-8 xx:px-6 xx:text-center xx:mb-4">
            Learn more about caring for your new cat
          </div>
          <div className="h-[55px] text-purp hover:bg-purp shadow hover:text-white rounded-b-lg hover:rounded-b-lg  flex justify-center items-center relative bottom-12 border-t-2 border-slate-200 cursor-pointer">
            <div className="">Read More</div>
          </div>
        </div>
      </div>
    </>
  );
}
