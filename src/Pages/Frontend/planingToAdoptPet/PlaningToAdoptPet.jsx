import newAdopt from "../../../assets/images/HeroIcons/IconSheltersRescues.svg"
import plandogimg from "../../../assets/images/HeroIcons/Dog.svg"
import planheartimg from "../../../assets/images/HeroIcons/Health.svg"
export default function PlaningToAdoptPet() {
  return (
    <>
      {/* //In this line there is a bug in the pixels from 750 to 767 in the responsiveness, which effects the component , so i add a new screen to target that pixels and fixed the bug. */}
      <div className="h-[441px] grid justify-items-center xx:mb-[550px] sm:mb-[350px] md:mb-[300px] bug:mb-[300px] lg:mb-0">

        <div className="flex justify-center items-center xx:text-2xl sm:text-3xl md:text-4xl h-[48px] mb-[30px]">Planning to adopt a pet?</div>
        <div className=" flex justify-center flex-wrap xx:h-[400px] xx:mb-[650px] sm:mb-[650px] md:mb-[300px] lg:mb-0">
          <div className='flex flex-col  justify-center items-center text-center max-w-[280px] h-[300px]  '>
            <div className="w-[100px] h-[100px] mb-[19px]"> <img src={newAdopt} alt="" /> </div>
            <div className="h-[26px] w-full flex-shrink text-purp mb-[19px]">Checklist for new adopters</div>
            <div className="h-[45px] w-full flex-wrap mb-[19px]">Make the adoption transition as smooth as
              possible.</div>
            <div className="w-[138px] h-[38px] flex justify-center items-center border-2 rounded-3xl  mt-5 border-purp hover:scale-105 hover:bg-purp  text-purp hover:text-white "><button className='text-sm w-[97px] h-[18px] '>Learn More</button></div>
          </div>
          <div className='flex flex-col  justify-center items-center text-center max-w-[280px] h-[300px]  '>
            <div className="w-[100px] h-[100px] mb-[19px]"> <img src={planheartimg} alt="" /> </div>
            <div className="h-[26px] w-full flex-shrink text-purp mb-[19px]">COVID-19 Resources</div>
            <div className="h-[45px] w-full text-wrap mb-[19px]">Learn how shelters/rescue groups are adapting.
              Find out how you can help dogs and cats.</div>
            <div className="w-[138px] h-[38px] flex justify-center items-center border-2 rounded-3xl  mt-5 border-purp hover:scale-105 hover:bg-purp  text-purp hover:text-white "><button className=' text-sm w-[97px] h-[18px] '>Learn More</button></div>
          </div>
          <div className='flex flex-col  justify-center items-center text-center h-[280px]  max-w-[300px]'>
            <div className="w-[100px] h-[100px] my-[19px]"> <img src={plandogimg} alt="" className='object-cover'/> </div>
            <div className="h-[26px] w-full flex-shrink text-purp mb-[19px]">Pet Adoption FAQs</div>
            <div className="h-[45px] w-full flex flex-wrap mb-[19px] ">Get answer to all the questions you have not
              thought of for your adoption .</div>
            <div className="w-[138px] h-[38px] flex justify-center items-center border-2 rounded-3xl  mt-5 border-purp hover:scale-105 hover:bg-purp  text-purp hover:text-white "><button className=' text-sm w-[97px] h-[118px] '>Learn More</button></div>
          </div>
        </div>
      </div>
    </>
  )
}
