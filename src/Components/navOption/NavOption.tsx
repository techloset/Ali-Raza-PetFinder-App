import { navoptions } from "../../type/Type";

export default function NavOption() {
  return (
    <div className="w-full bg-purp">
      <div className="max-w-[1440px] mx-auto  content-center text-white">
        <div className=" mx-auto flex items-center t-114px h-14  sm:justify-evenly md:justify-evenly lg:justify-between xx:flex-col xx:h-36 xx:gap-2 xx:pt-2 ">
          {navoptions.map((navopt: string, i: number) => {
            return (
              <div key={i} className="hover:scale-105 cursor-pointer">
                {navopt}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
