import TCarousel from "./tcarousel";

export default function Component(){
    return (
        <div className="flex flex-col items-center w-full h-fit gap-[48px] mb-[80px] ">
            {/* header */}
          <div className="flex w-fit uppercase h-fit text-[40px]  font-medium leading-[46px] italic  text-black">
           Testimonials
          </div>
          {/* about section */}
          <div className="flex w-full flex-row items-center justify-center h-[537px] bg-[#DD2121] py-[40px]">
            <TCarousel/>
          </div>
        </div>
    )
}