import {useState} from 'react'
export default function Component() {
    const [active,SetActive]=useState(false);
    return (
        <div 
        id="gallery"
        className="flex w-full h-fit pb-[80px] flex-row items-center justify-center bg-white scroll-mt-32">
            <div className="flex w-full flex-col h-fit   items-center   gap-[48px]">
                {/* header */}
                <div className="flex  flex-col items-center gap-[8px]">
                    <span className=" flex text-wrap text-black uppercase italic font-medium  text-[40px] leading-[46px]  ">
                        Instagram</span>
                    <span className="text-[18px] text-wrap  leading-[21px] font-normal text-[#969696] ">
                         lorem ipsum dolor sit amet consectetur.</span>
                </div>
                {/* insta cards */}
                <ul className=" grid grid-cols-3 w-[90%] xl:w-[59%]  transition-all transform duration-150 ease-in-out h-fit gap-x-[20px] gap-y-[24px] items-center justify-start  ">
                {(active?Array(12):Array(6)).fill(0).map((v,idx)=>{
                    // console.log(v);
                    return (
                        // <li>
                            <Card idx={idx+1}/>
                        // </li>
                    )
                })}
                </ul>
                {/* laodmore and follow */}
                <div className="w-fit flex flex-row items-start  gap-[16px] ">
                   <button className="px-4 py-[12px] bg-[#DD2121] text-white italic text-[16px] font-medium  leading-[18px] ">Follow us</button>
                   <button 
                   onClick={()=>SetActive(!active)}
                   className="px-4 py-[12px] bg-white ring-[1px] ring-black text-black italic text-[16px] font-medium  leading-[18px] ">{active?"Show Less":"Load More"}</button>

                </div>

            </div>
        </div>
    )
}


const Card=({idx}:{idx:any})=>{
    return (
        <div className=" flex w-[307px] bg-white  h-fit flex-col items-center  gap-[16px] ">
            {/* first div */}
            <div 
            style={{backgroundImage:`url(/i${(idx%3)+1}.png)`}}
            className="flex flex-row items-end justify-start w-[307px] h-[307px] bg-cover bg-center bg-no-repeat  gap-[8px]">
            </div>
            {/* second div */}
            <div className=" flex flex-col items-start justify-start gap-[12px]  text-wrap">
              {/* <div className=" flex flex-col items-start justify-start gap-[8px] text-wrap"> */}
                {/* header */}
                {/* <span className=" text-black  text-[24px] font-semibold  leading-[28px] ">Formative Programe</span> */}
                {/* description */}
                <span className=" flex text-[18px] w-full h-fit  font-normal leading-[21px]  text-wrap text-[#969696]">
                Two wins down, many more to go! Our U8 age category team is off to a strong start in the leno ...
                </span>

              {/* </div> */}
              {/* <div className="flex flex-row items-center justify-end h-[36px] w-full ">
                <span className=" flex  w-fit h-full bg-black py-[10px] px-[16px] text-white font-semibold leading-[16px] text-[16px] ">See details</span>
              </div> */}

            </div>
        </div>
    )
}