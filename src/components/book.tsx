import Form from './form'
export default function Component() {
    return (
        <div
        id='contact'
         className="flex flex-col items-center w-full h-fit gap-[48px] mb-[80px] ">
            {/* about section */}
            <div className="flex w-full flex-row items-center justify-center h-[578px]">

                {/* text */}
                <div className=" flex bg-[#DD2121] w-1/2 flex-col items-start justify-start   text-white h-full text-wrap text-left px-[96px] py-[80px]">
                    {/* header */}
                    <span className="uppercase text-white  font-medium italic  text-[28px]  leading-[32px] mb-[16px] ">Book your free trial now!</span>
                    {/* desc */}
                    <span className=" text-white font-normal text-[16px] leading-[18px] mb-[40px] "> Lorem ipsum dolor sit amet consectetur. Donec ultrices sed id malesuada nam. Elementum lacinia elit eget enim dui mauris.</span>
                    {/* form */}
                    <Form/>
                    {/* cta */}


                </div>
                {/* img */}
                <div
                    style={{ backgroundImage: `url(/about.png)` }}
                    className="flex w-1/2 flex-row bg-cover h-full bg-center bg-no-repeat">

                </div>

            </div>
        </div>
    )
}