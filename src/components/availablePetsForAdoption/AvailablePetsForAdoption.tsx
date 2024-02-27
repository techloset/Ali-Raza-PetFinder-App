import { useEffect, useState } from "react";
import PetCard from "../petCard/PetCard";
import PlaningToAdoptPet from "../planingToAdoptPet/PlaningToAdoptPet";
import { Link } from "react-router-dom";
import { getAnimals } from "../../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  Forwardicon,
  alternate,
  iconFavorite2,
} from "../../lib/constants/Constants";
import { Response } from "../../type/type";

export default function Pet() {
  const dispatch = useAppDispatch();
  const petData = useAppSelector((state) => state.user.data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAnimals());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-purp border-solid"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center mt-28">
        <div className="w-[506.17px] h-9 text-center text-violet-800 text-3xl font-normal xx:mb-16 sm:mb-6 leading-9">
          Pets Available for Adoption Nearby
        </div>
        <div className="xx:mt-6 xx:w-[28px] w-[18px] h-[18px] mt-3.5 inline-flex  mb-6">
          <img src={Forwardicon} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-center">
        {petData &&
          petData.slice(16, 20).map((item: Response, i: number) => {
            return (
              <div key={i} className="w-auto mx-2 h-[301.2px] mb-4">
                <div className="w-[231.2px] h-[301.2px] xsm:mt-10 mt-6 bg-opacity-0 rounded-lg shadow">
                  <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                    <Link to={`/details/${item.id}`}>
                      <img
                        className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                        src={item?.photos[0]?.full || alternate}
                        alt={item.age}
                      />
                    </Link>
                  </div>
                  <div className=" top-[-10px] h-[70px] ">
                    <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px] bg-white top-[-8px]"></div>
                    <div className="h-8 ">
                      <div className=" text-violet-800 text-xl inline-flex">
                        {item.name.slice(0, 15)}
                      </div>
                    </div>
                  </div>

                  <div className="w-[45px] h-[45px] p-2.5 top-[-293px] left-[85px] relative bg-white bg-opacity-75 rounded-[22.50px] justify-center items-center inline-flex">
                    <div className="w-[25px] h-[25px] relative flex-col justify-start items-start flex">
                      <img src={iconFavorite2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <PetCard />
      </div>
      <PlaningToAdoptPet />
      <div className="flex justify-center mt-20">
        <div className="w-[506.17px] h-9 text-center text-violet-800 text-3xl font-normal xx:mb-16 leading-9">
          Pets Available for Adoption Nearby
        </div>
        <div className="xx:mt-6  xx:w-[28px] w-[18px] h-[18px] mt-3.5 inline-flex  mb-6">
          <img src={Forwardicon} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-center mb-[50px] ">
        {petData &&
          petData.slice(11, 15).map((item: Response, i: number) => {
            return (
              <div key={i} className="w-auto mx-2 h-[301.2px] mb-4">
                <div className="w-[231.2px] h-[301.2px] xx:mt-10 mt-6 bg-opacity-0 rounded-lg shadow">
                  <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                    <Link to={`/details/${item.id}`}>
                      <img
                        className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                        src={item?.photos[0]?.full || alternate}
                        alt={item.age}
                      />
                    </Link>
                  </div>
                  <div className=" top-[-10px] h-[70px] ">
                    <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px] bg-white top-[-8px]"></div>
                    <div className="h-8 ">
                      <div className=" text-violet-800 text-xl inline-flex">
                        {item.name.slice(0, 10)}
                      </div>
                    </div>
                  </div>
                  <div className="w-[45px] h-[45px] p-2.5 top-[-293px] left-[85px] relative bg-white bg-opacity-75 rounded-[22.50px] justify-center items-center inline-flex">
                    <div className="w-[25px] h-[25px] relative flex-col justify-start items-start flex">
                      <img src={iconFavorite2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        <PetCard />
      </div>
    </>
  );
}
