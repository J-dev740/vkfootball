export default function Component() {
    return (
        <div 
        id="gallery"
        className="flex w-full h-fit pb-[80px] flex-row items-center justify-center bg-white">
            <div className="flex w-full flex-col h-fit   items-center   gap-[48px]">
                {/* header */}
                <div className="flex  flex-col items-center gap-[8px]">
                    <span className=" flex text-wrap text-black uppercase italic font-medium  text-[40px] leading-[46px]  ">
                        Instagram</span>
                    <span className="text-[18px] text-wrap  leading-[21px] font-normal text-[#969696] ">
                         lorem ipsum dolor sit amet consectetur.</span>
                </div>
                {/* insta cards */}
                <ul className="flex flex-row flex-wrap [1000px]:w-[80%] w-[100%] h-fit gap-[20px]  items-center justify-center  py-[40px] ">
                {Array(6).fill(0).map((v,idx)=>{
                    console.log(v);
                    return (
                        <li><Card idx={idx+1}/></li>
                    )
                })}
                </ul>
                {/* laodmore and follow */}
                <div className="w-fit flex flex-row items-start  gap-[16px] ">
                   <button className="px-4 py-[12px] bg-[#DD2121] text-white italic text-[16px] font-medium  leading-[18px] ">Follow us</button>
                   <button className="px-4 py-[12px] bg-white ring-[1px] ring-black text-black italic text-[16px] font-medium  leading-[18px] ">Load More</button>

                </div>

            </div>
        </div>
    )
}


const Card=({idx}:{idx:any})=>{
    return (
        <div className=" flex w-[370px] bg-white  h-fit flex-col items-center px-[24px] py-[16px] gap-[16px] ">
            {/* first div */}
            <div 
            style={{backgroundImage:`url(/i${(idx%3)+1}.png)`}}
            className="flex flex-row items-end justify-start w-[307px] h-[386px] bg-cover bg-center bg-no-repeat pl-[12px] pb-[16px] gap-[8px]">
            </div>
            {/* second div */}
            <div className=" flex flex-col items-start justify-start gap-[12px]  text-wrap">
              <div className=" flex flex-col items-start justify-start gap-[8px] text-wrap">
                {/* header */}
                {/* <span className=" text-black  text-[24px] font-semibold  leading-[28px] ">Formative Programe</span> */}
                {/* description */}
                <span className=" text-[18px] w-full h-fit  font-normal leading-[21px]  text-wrap text-[#969696]">
                Two wins down, many more to go! Our U8 age category team is off to a strong start in the leno ...
                </span>

              </div>
              {/* <div className="flex flex-row items-center justify-end h-[36px] w-full ">
                <span className=" flex  w-fit h-full bg-black py-[10px] px-[16px] text-white font-semibold leading-[16px] text-[16px] ">See details</span>
              </div> */}

            </div>
        </div>
    )
}