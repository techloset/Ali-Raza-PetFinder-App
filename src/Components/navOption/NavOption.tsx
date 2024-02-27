import { navoptions } from "../../lib/constants/Constants";

export default function NavOption() {
  return (
    <div className="w-full bg-purp ">
      <div className=" text-white mx-20 ">
        <div className=" flex items-center  h-14  sm:justify-evenly md:justify-between lg:justify-evenly md:flex-row md:h-14 sm:flex-col sm:h-36 sm:pt-2 sm:gap-2 xx:flex-col xx:h-36 xx:gap-2 xx:pt-2 ">
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
