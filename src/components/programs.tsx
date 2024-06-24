export default function Component() {
    return (
        <div
        id="services"
         className="flex w-full h-fit pb-[80px] flex-row items-center justify-center bg-white">
            <div className="flex w-full flex-col h-fit   items-center  gap-[48px]">
                {/* header */}
                <div className="flex  flex-col items-center gap-[8px]">
                    <span className=" flex text-wrap text-black uppercase italic font-medium  text-[40px] leading-[46px]  ">
                        Our Training Programs</span>
                    <span className="text-[18px] text-wrap  leading-[21px] font-normal text-[#969696] ">
                         lorem ipsum dolor sit amet consectetur.</span>
                </div>
                {/* program cards */}
                <ul className="flex flex-row w-full h-fit  items-center gap-[20px] justify-center bg-[#EFEFEF] py-[40px] ">
                {Array(3).fill(0).map(()=>{
                    return (
                        <li><Card/></li>
                    )
                })}
                </ul>

            </div>
        </div>
    )
}


const Card=()=>{
    return (
        <div className=" flex w-[370px] bg-white  h-fit flex-col items-center px-[24px] py-[16px] gap-[16px] ">
            {/* first div */}
            <div 
            style={{backgroundImage:`url(/cardimg.png)`}}
            className="flex flex-row items-end justify-start w-[320px] h-[236px] bg-cover bg-center bg-no-repeat pl-[12px] pb-[16px] gap-[8px]">
                <div className="bg-white rounded-[36px] flex flex-row items-center justify-center py-[9px] px-[14px]">
                    <span className="text-[#0B0C0C] text-[12px]  font-semibold leading-[14px] ">Age 3 - 8 years</span>
                </div>
                <div className="bg-white rounded-[36px] flex flex-row items-center justify-center py-[9px] px-[14px]">
                    <span className="text-[#0B0C0C] text-[12px]  font-semibold leading-[14px] ">Beginner Level</span>
                </div>

            </div>
            {/* second div */}
            <div className=" flex flex-col items-start justify-start gap-[12px]  text-wrap">
              <div className=" flex flex-col items-start justify-start gap-[8px] text-wrap">
                {/* header */}
                <span className=" text-black  text-[24px] font-semibold  leading-[28px] ">Formative Programe</span>
                {/* description */}
                <span className=" text-[18px] w-[80%] h-fit  font-normal leading-[21px]  text-wrap text-[#969696]">
                Lorem ipsum dolor sit amet consectetur. Donec ultrices sed id malesuada nam.
                </span>

              </div>
              <div className="flex flex-row items-center justify-end h-[36px] w-full ">
                <span className=" flex  w-fit h-full bg-black py-[10px] px-[16px] text-white font-semibold leading-[16px] text-[16px] ">See details</span>
              </div>

            </div>
        </div>
    )
}