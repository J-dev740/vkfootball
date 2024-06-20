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
                {/* header */}
                <span className="flex text-[18px] text-wrap leading-[21px] font-normal mb-[12px]">
                    Lorem ipsum dolor sit amet consectetur.</span>
                {/* des */}
                <span className="flex text-[40px] text-wrap leading-[46px] italic font-medium  uppercase mb-[24px]">
                Lorem ipsum dolor sit amet consectetur. 
                </span>
                {/* cta */}
                <button className="flex bg-[#DD2121] py-[12px] px-[16px] flex-row items-center justify-center">
                    <span className="text-[16px] italic leading-[18px]  font-medium ">Register today &#11162;</span>
                </button>
            </div>

        </div>
         </div>
    )
}