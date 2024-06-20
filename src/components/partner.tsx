export default function Component(){
    return (
        <div className="flex flex-col items-center w-full h-fit gap-[48px] mb-[80px] ">
            {/* header */}
          <div className="flex w-fit h-fit text-[40px]  font-medium leading-[46px] italic uppercase text-black">
          Academy Partners Who Help Make It Possible.
          </div>
          {/* partner section */}
          <ul className="flex w-full flex-row items-center justify-between  h-fit py-[64px] bg-[#EFEFEF] ">
            {Array(4).fill(0).map(()=>{
                return(
                    <Card/>
                )
            })}
          </ul>
        </div>
    )
}

const Card=()=>{
    return (
        <li className="flex flex-col w-fit h-fit items-center justify-center gap-[8px] ">
        <div
        style={{backgroundImage:`url(/partner.png)`}}
         className=" flex w-[300px] h-[75px] bg-cover bg-center bg-no-repeat"/>
         <div className="flex text-[18px] leading-[21px]  font-normal text-[#A3A3A3]">Our <span className="text-black font-semibold">Physio</span> Partner</div>

    </li>
    )
}