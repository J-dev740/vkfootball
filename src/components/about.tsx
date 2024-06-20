export default function Component(){
    return (
        <div 
        id="about"
        className="flex flex-col items-center w-full h-fit gap-[48px] mb-[80px] ">
            {/* header */}
          <div className="flex w-fit h-fit text-[40px]  font-medium leading-[46px] italic  text-black">
            About Us
          </div>
          {/* about section */}
          <div className="flex w-full flex-row items-center justify-center h-[456px]">
            {/* text */}
            <div className=" flex bg-[#DD2121] w-1/2  text-white h-full text-wrap text-left px-[93px] py-[144px]">
            <span className="flex text-[24px] leading-[28px]  font-normal ">
            Lorem ipsum dolor sit amet consectetur. Et nam vitae adipiscing arcu mauris in donec gravida. 
            Id nascetur id ultrices iaculis purus id. Sem urna lorem ultricies dolor sit. Pharetra sed risus malesuada nullam enim.
             Lorem ipsum dolor sit amet consectetur. Et nam vitae adipiscing arcu mauris in donec gravida.

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