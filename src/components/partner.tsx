export default function Component(){
    return (
        <div className="flex flex-col items-center w-full h-fit gap-[48px] mb-[80px] ">
            {/* header */}
          <div className="flex w-fit h-fit text-[40px]  font-medium leading-[46px] italic uppercase text-black">
          Academy Partners Who Help Make It Possible.
          </div>
          {/* partner section */}
          <ul className="flex w-full flex-row items-center justify-between  h-fit py-[64px] bg-[#EFEFEF] ">
            {partners.map((v)=>{
                return(
                    <Card p={v}/>
                )
            })}
          </ul>
        </div>
    )
}

const Card=({p}:{p:any})=>{
    return (
        <li className="flex flex-col w-fit h-fit items-center justify-center gap-[8px] ">
        <div
        style={{backgroundImage:`url(/${p.img})`}}
         className=" flex w-[300px] h-[75px] bg-contain bg-center bg-no-repeat"/>
         <div className="flex text-[18px] leading-[21px]  font-bold text-black">{p.name}</div>
         <div className="flex text-[18px] leading-[21px]  font-normal text-[#A3A3A3]">{p.pos}</div>

    </li>
    )
}

const partners=[
    {
        name:"prep2motion",
        pos:"Physiotherapy partner",
        img:"p4.png"

    },
    {
        name:"Leno",
        pos:"Equipment partner",
        img:'partner.png'


    },    {
        name:"Fast & up",
        pos:"Hydration partner",
        img:'p2.png'


    },    {
        name:"Kings sport",
        pos:"Kit partner",
        img:'p1.png'

    },
    {
        name:"vk7 store",
        pos:"Sports apparel  partner",
        img:'p3.png'


    },
]