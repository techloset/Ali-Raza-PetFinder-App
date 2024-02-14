import { useEffect, useState } from "react";
import AlertImg from "../../../assets/images/detailedPageImg/icon-alert.svg";
import { Link } from "react-router-dom";
import FaviorteHeart from "../../../assets/images/detailedPageImg/icon-favorite-heart.svg";
import PawHand from "../../../assets/images/detailedPageImg/paw-on-hand.svg";
import LocationIcon from "../../../assets/images/detailedPageImg/icon-location.svg";
import PhoneIcon from "../../../assets/images/detailedPageImg/icon-phone.svg";
import alternative from "../../../assets/images/petCardImages/IconLogofaceColorGray.svg";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAnimal } from "../../../redux/animalSlice";
import PetCard from "../petCard/PetCard";
import { GetOrganization } from "../../../redux/organizationSlice";
import { organization } from "../../../type/Type";

export default function DetailedPage() {
  const { animalId } = useParams<{ animalId: string }>();

  const dispatch = useAppDispatch();
  const petDetail = useAppSelector((state) => state.animalData.animal);
  const organization = useAppSelector(
    (state) => state.organization.organization
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAnimal(`${animalId}`));
        if (petDetail && petDetail?.organization_id) {
          await dispatch(GetOrganization(`${petDetail?.organization_id}`));
        }
      } catch (error) {
        console.log("Error fetching Animal Data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch, animalId, petDetail?.organization_id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-purp border-solid"></div>
      </div>
    );
  }

  return (
    <>
      <div className="">
        <div className="h-[810px] bg-slate-200 ">
          <div className="h-[486px] xx:h-[340px] w-auto flex justify-center bg-black">
            <img
              src={petDetail?.photos?.[0]?.full || alternative}
              alt="dog image"
              className="h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-10 gap-8 w-full max-w-5xl mx-auto xx:px-0 px-4 md:px-0 relative bottom-72 xx:bottom-96 sm:bottom-56 md:bottom-68 lg:bottom-72 xX:justify-evenly">
          <div className="col-span-full lg:col-span-6 bg-white xx:p-0 p-8 xx:rounded-none rounded-xl shadow-lg mb-8  md:mb-0 ">
            <div className="">
              <div className="flex text-4xl font-400 font-normal xx:px-0 px-7 py-6 xx:justify-center">
                {petDetail?.name || "Name is not Given"}
              </div>
              <div className="flex text-base px-7 py-2 xx:justify-center sm:justify-center sm:inline-flex">
                <Link to="" className="underline text-blue-700">
                  {petDetail?.breeds?.primary ||
                    petDetail?.breeds?.secondary ||
                    "Breed not defined"}
                </Link>
                <div className="px-1">.</div>
                <div className="">
                  {petDetail?.contact?.address?.city ||
                    petDetail?.contact?.address.address2 ||
                    "Address is not defined"}{" "}
                  {petDetail?.contact?.address?.state}
                </div>
              </div>
            </div>
            <hr className="w-auto mx-7" />
            <div className="m-7">
              <div className="flex text-base xx:justify-center  sm:inline-flex">
                <div className="">{petDetail?.age || "Age not given"}</div>
                <div className="px-2">.</div>
                <div className="">{petDetail?.gender || "No gender"}</div>
                <div className="px-2">.</div>
                <div className="">{petDetail?.size || "No size"}</div>
              </div>
            </div>
            <hr className="w-auto mx-7" />
            <div className="flex text-base gap-4 mt-3 h-[35px] sm:hidden md:hidden lg:hidden">
              <div className="hover:border-b-2 border-indigo-500  flex justify-center w-16">
                About
              </div>
              <div className="hover:border-b-2 border-indigo-500 ">
                Organization
              </div>
              <div className="hover:border-b-2 border-indigo-500 ">Medium</div>
            </div>
            <div className="xx:mt-10">
              <div className="text-3xl px-7 py-5">About</div>
              <div className="text-xl px-7 ">Health</div>
              <div className="px-7">{petDetail?.description?.slice(0, 99)}</div>
            </div>
            <hr className="w-[90%] mx-auto mt-8 xx:hidden sm:hidden  md:flex" />
            <div className="mt-8">
              <div className="inline-flex sm:mt-16 md:mt-0">
                <div className=" ">
                  <img src={AlertImg} alt="alert icon" className="w-6 h-6" />
                </div>
                <div className="w-full">
                  Petfinder recommends that you should always take reasonable
                  security steps before making online payments.
                </div>
              </div>
            </div>
          </div>

          <div className=" max-w-[393px] md:max-h-[393px] xx:max-h-[493px] xx:mx-4 max-h-[393px] mx-auto md:sm-auto lg:max-h-[393px] sm:flex sm:content-center pb-0 col-span-full  lg:col-span-4  text-white p-8 rounded-lg shadow-lg  md:mb-0 bg-purp">
            <div className=" pb-0 mb-0">
              <div className="text-xl font-normal max-mt-6 text-center flex flex-wrap">
                Considering {petDetail?.name.slice(0, 7)} for adoption?
              </div>
              <div className="rounded-3xl  text-center mt-10 bg-white border-2 text-purp hover:bg-purp hover:text-white hover:border-2 hover:bordre-white">
                <button
                  type="button"
                  className="h-[45PX] text-sm font-normal  cursor-pointer"
                >
                  START YOUR INQUIRY
                </button>
              </div>
              <div className="flex items-center justify-center rounded-3xl h-[45PX] text-center mt-10 border-2 border-white hover:bg-white hover:text-purp cursor-pointer">
                READ FAQs
              </div>
              <hr className="max-w-[410px] mt-24 border-1 border-white mx-[-32px]" />
              <div className="h-[65px]  flex justify-around items-center sticky">
                <div className="text-center cursor-pointer">SPONSOR</div>
                <div className="w-[1px] h-[65px] bg-white"></div>
                <div className="flex xx:gap-1 md:gap-2 justify-center cursor-pointer">
                  <img src={FaviorteHeart} alt="" />
                  FAVORITE
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[393px] border-2 col-span-full md:mx-auto sm:mx-auto xx:mx-auto lg:col-start-7 lg:col-span-4 bg-white p-8 rounded-2xl shadow-lg  md:mb-0 relative  lg:bottom-20 lg:top-[-80px]  xx:top-8 sm:top-8 md:top-16 pb-0">
            <div className="flex bg-purp  justify-center items-center relative bottom-20 h-[100px] w-[100px] rounded-full mx-auto">
              <img src={PawHand} alt="" className="h-[60px] w-[58px]" />
            </div>
            <div className=" relative bottom-16">
              <div className="text-3xl text-center">
                {petDetail?.organization_id} Animals In Need
              </div>
              <div className="text-center">
                {petDetail?.contact?.address.city ||
                  petDetail?.contact?.address.address2 ||
                  "Address is not defined"}{" "}
                {petDetail?.contact?.address.state}
              </div>
              <div className="mt-12 flex items-center pb-4 border-b-[1px] border-slate-400">
                <div className="relative left-[-10px]">
                  <img src={LocationIcon} alt="Location" />
                </div>
                <div className="">
                  <div className="flex gap-3">Location Address</div>
                  <div className="">
                    {petDetail?.contact?.address.city ||
                      petDetail?.contact?.address.address2 ||
                      "Address is not defined"}{" "}
                    {petDetail?.contact?.address.state}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center pb-5 border-b-[1px] border-slate-400">
                <div className="relative left-[-10px]">
                  <img src={PhoneIcon} alt="PhoneIcon" />
                </div>
                <div className="">
                  <div className="flex gap-3">
                    {petDetail?.contact?.phone ||
                      petDetail?.contact?.email ||
                      "No phone number given"}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-3xl h-[45PX] text-center mt-10 border-2 border-black hover:bg-purp hover:text-white hover:border-2 hover:border-white hover:shadow-xl cursor-pointer">
                <button type="button">MORE ABOUT US</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[327px] flex justify-center items-center flex-col text-white bg-purp relative bottom-72 xx:hidden sm:hidden md:hidden lg:flex">
        <div className="mx-[60px]  ">
          <div className="flex mx-10 items-center gap-5  ">
            <div className="w-[103px] h-[103px] flex items-center">
              <img
                src={petDetail?.photos?.[0]?.small || alternative}
                alt="dog Image"
                className="rounded-full border-4 border-white w-full h-full"
              />
            </div>
            <div className="">
              <div className="text-3xl ">Ask About {petDetail?.name}</div>
              <div className="mt-2 mb-2">
                {petDetail?.breeds?.primary ||
                  petDetail?.breeds?.secondary ||
                  "Breed not defined"}
              </div>
              <div className="flex text-base xx:justify-center  sm:inline-flex">
                <div className="">{petDetail?.gender || "no gender"}</div>
                <div className="px-2">.</div>
                <div className="">{petDetail?.age || "no age"}</div>
                <div className="px-2">.</div>
                <div className="">{petDetail?.size || "no size"}</div>
              </div>
            </div>
          </div>
          <hr className="w-full mx-10  mt-5 mb-5 border-[1px] border-slate-300" />
          <div className=" mx-10 ">
            <div className="my-2">
              Please note that {petDetail?.name} Animals In Need is not able to
              answer inquiries via email through Petfinder at this time.
            </div>
            <div className="flex gap-8 my-2">
              <div className="">You may call them with your inquiry at: </div>
              <div className="hover:underline">
                {petDetail?.contact?.phone ||
                  petDetail?.contact?.email ||
                  "Phone Number not Given"}
              </div>
            </div>
            <div className="flex gap-10 my-2">
              <div className="">
                You may also find more information about the organization on
                their homepage:{" "}
              </div>
              <Link to={petDetail?.url || "/default-url"}>
                <div className="hover:underline">
                  {petDetail?.url.slice(0, 50)}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-violet-800 pt-8 sm:mt-40 relative sm:bottom-72 xx:bottom-72 lg:bottom-[450px]">
        <div className="flex justify-center flex-col items-center">
          <div className="max-w-[506.17px] h-9 text-center text-white  text-3xl font-normal xx:mb-3 sm:mb-6 md:mb-0 leading-9">
            {petDetail?.organization_id || "Organization"} Happy Tails
          </div>
          <div className="max-w-[506.17px] h-9 text-center text-white  underline p-1 font-normal xx:mb-6 sm:mb-6 leading-9">
            View Pet Adoption Stories
          </div>
        </div>
        <div className="flex flex-wrap justify-center text-center">
          {organization &&
            organization.slice(17, 20).map((item: organization, i: number) => {
              return (
                <>
                  <div key={i} className="w-auto mx-2 h-[451.2px] mb-4 ">
                    <div className="w-[231.2px] h-[400.2px] xsm:mt-10 rounded-lg shadow-xl bg-white ">
                      <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                        <Link to={`/details/${item.id}`}>
                          {" "}
                          <img
                            className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                            src={item?.photos[0]?.full || alternative}
                          />
                        </Link>
                      </div>
                      <div className=" top-[-10px] h-[70px] bg-white text-purp block">
                        <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px] bg-white top-[-8px]"></div>
                        <div className="h-8 bg-white">
                          <div className="  text-xl inline-flex bg-white">
                            {item?.name?.slice(0, 13)}
                          </div>
                          <br />
                          <div className="inline-flex h-14">
                            {item?.description?.slice(0, 50) ||
                              "Description is not Avilable"}
                          </div>
                          <hr className="border border-slate-200 w-full my-5 " />
                          <div className="   inline-flex ">
                            <Link
                              to={`/details/${item.id}`}
                              type="button"
                              className="bg-white w-full"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            }, <PetCard />)}
        </div>
      </div>

      <div className="flex justify-center mt-20 mb-10 relative sm:bottom-72 xx:bottom-72 lg:bottom-[450px]">
        <div className="w-[751.17px] h-9 text-center text-violet-800 text-3xl font-normal xx:mb-16 leading-9">
          More Pets from {petDetail?.organization_id} Animals In Need
        </div>
      </div>
      <div className="flex flex-wrap justify-center text-center relative sm:bottom-90 xx:bottom-80 md:bottom-60 gap-5 lg:bottom-[450px] lg:mb-[-430px] pb-0">
        {organization &&
          organization.slice(11, 15).map((item: organization, i: number) => {
            return (
              <>
                <div key={i} className="w-auto mx-2 h-[301.2px] mb-4">
                  <div className="w-[231.2px] h-[301.2px] xx:mt-10 mt-6 bg-opacity-0 rounded-lg shadow">
                    <div className=" bg-zinc-200 rounded-tl-lg rounded-tr-lg">
                      <Link to={`/details/${item.id}`}>
                        <img
                          className="w-[231.2px] rounded-tl-lg rounded-tr-lg object-cover h-[231.20px]"
                          src={item?.photos[0]?.full || alternative}
                        />
                      </Link>
                    </div>
                    <div className="">
                      <div className="flex rounded-tl-3xl rounded-tr-3xl relative h-[9px] bg-white top-[-8px]"></div>
                      <div className="h-8 ">
                        <div className=" text-violet-800 text-xl inline-flex">
                          {item.name.slice(0, 10)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        <PetCard />
      </div>
    </>
  );
}
