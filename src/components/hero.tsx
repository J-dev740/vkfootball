import { IoIosArrowForward } from "react-icons/io";

export default function Component(){
    return(
        <div 
        id="home"
        style={{backgroundImage:`url(/hero.png)`}}
        className="bg-cover bg-center ">
        <div 
        
        className="flex w-full h-[736px] flex-col items-start justify-center  pl-[120px] bg-black bg-opacity-45">

            {/* box */}
            <div className="flex flex-col items-start text-white  w-[500px]">
                {/* des */}
                <span className="flex text-[40px] text-wrap leading-[46px] italic font-medium  uppercase mb-[12px]">
                cultivating champions of tomorrow
                </span>
                {/* header */}
                <span className="flex text-[18px] text-wrap leading-[21px] font-normal mb-[24px]">
                Unlock your athletic potential with our comprehensive training and development programs</span>
                {/* cta */}
                <button className="flex bg-[#DD2121] py-[12px] px-[16px] flex-row items-center justify-center">
                    <span className=" flex flex-row items-center gap-1 text-[16px] italic leading-[18px]  font-medium ">Register today <IoIosArrowForward className="flex " /></span>
                </button>
            </div>

        </div>
         </div>
    )
}