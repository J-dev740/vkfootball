export default function Component(){
    return (
        <div 
        id="about"
        className="flex flex-col items-center w-full h-fit gap-[48px] mb-[80px] scroll-mt-32 ">
            {/* header */}
          <div className="flex w-fit h-fit text-[40px] uppercase  font-medium leading-[46px] italic  text-black">
            About Us
          </div>
          {/* about section */}
          <div className="flex w-full flex-row items-center justify-center h-[456px]">
            {/* text */}
            <div className=" flex bg-[#DD2121] w-1/2  text-white h-full text-wrap text-left px-[93px] py-[144px]">
            <span className="flex text-[24px] leading-[28px]  font-normal ">
            VK Football Academy: Forging India's football future. We transform young talent into pro-ready
             athletes, offering elite training for ages 5-18. Beyond skills, we build character and create
              opportunities for advancement in the sport. Whether aiming for the big leagues or personal growth
              , VK is where football dreams take flight. Join us and be part of India's rising football story.
               Experience the VK difference - contact us for a free trial today.

            </span>
            </div>
            {/* img */}
            <div 
            style={{backgroundImage:`url(/about.png)`}}
            className="flex w-1/2 flex-row bg-cover h-full bg-center bg-no-repeat">

            </div>

          </div>
        </div>
    )
}