import Carousel from "./carousel";

export default function Component(){
    return (
        <div className="flex flex-col items-center w-full h-fit gap-[48px] mb-[80px] ">
            {/* header */}
          <div className="flex w-fit h-fit text-[40px]  font-medium leading-[46px] italic  text-black">
           Achievements
          </div>
          {/* about section */}
          <div className="flex w-full flex-row items-center justify-center h-[537px] bg-[#EFEFEF] py-[40px]">
            <Carousel/>
          </div>
        </div>
    )
}