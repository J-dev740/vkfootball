export default function Component() {
    return (
        <div className="flex w-full h-fit pt-[56px] pb-[80px] flex-row items-center justify-center bg-white">
            <div className="flex w-[68%] flex-col h-fit   items-center  gap-[40px]">
                {/* header */}
                <div className="flex  flex-col items-center gap-[8px]">
                    <span className=" flex text-wrap text-black uppercase italic font-medium  text-[40px] leading-[46px]  ">
                        welcome to vk football academy</span>
                    <span className="text-[18px] text-wrap  leading-[21px] font-normal text-[#969696] ">
                        Here we develop lorem ipsum dolor sit amet consectetur.</span>
                </div>
                {/* number cards */}
                <ul className="flex flex-row w-full h-fit items-center justify-between">
                    {dummydata.map((data) => {
                        return (
                            <li className="flex ">
                                <Card num={data.num} type={data.type} />
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}
interface props {
    num: number,
    type: string,
}
const Card = ({ num, type }: props) => {
    return (
        <div className="flex flex-col items-center  w-[175px] h-fit  p-[8px] gap-[8px] ">
            {/* number */}
            <div className="flex flex-row items-center justify-center gap-[8px] ">
                <span className="text-[72px] text-[#DD2121] font-medium leading-[84px] ">{num}</span>
                <span className="text-[32px] text-[#969696] font-normal leading-[37px] ">+</span>
            </div>
            {/* type */}
            <span className="flex text-wrap text-black text-[24px] leading-[28px] font-medium  text-center ">{type}</span>

        </div>
    )
}

const dummydata: props[] = [
    {
        num: 3,
        type: "Coaching Centers"
    },
    {
        num: 32,
        type: "Experienced Coaches"
    },
    {
        num: 500,
        type: "Community Members"
    },
    {
        num: 600,
        type: "Academy Graduates"
    },
]