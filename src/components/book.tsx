import Form from './form'
export default function Component() {
    return (
        <div
        id='contact'
         className="flex flex-col items-center w-full h-fit gap-[48px] mb-[80px] scroll-mt-32">
            {/* about section */}
            <div className="flex w-full flex-row items-center justify-center h-[578px]">

                {/* text */}
                <div className=" flex bg-[#DD2121] w-1/2 flex-col items-start justify-start   text-white h-full text-wrap text-left px-[96px] py-[80px]">
                    {/* header */}
                    <span className="uppercase text-white  font-medium italic  text-[28px]  leading-[32px] mb-[16px] ">Book your free trial now!</span>
                    {/* desc */}
                    <span className=" text-white font-normal text-[16px] leading-[18px] mb-[40px] ">
                    Kickstart your football journey with Mumbai's premier academy! Our expert coaches nurture talent at all levels.
                     Join our winning team and discover your potential on the field.
                         </span>
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