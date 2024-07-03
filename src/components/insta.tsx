import {useState,useEffect} from 'react'
import { client } from './client'
interface data{
    des:string,
    img:string
}
export default function Component() {
    const [data, setData] = useState<data[]>([])
    useEffect(() => {
        client.getEntries({
            content_type: 'instagram'
        }).then((entries:any) => {
            let tmp: data[] = []
            entries.items.forEach((e:any) => {
                let entry = JSON.parse(JSON.stringify(e));
                let itm: data = { img:'', des: '',};
                if (entry.fields) {
                    entry=entry.fields;
                    
                    // console.log("entry",entry)
                    itm.img = entry.instaImg.fields.file.url;
                    itm.des=entry.description;
                }
                // console.log(itm)
                tmp.push(itm);
            })
            return tmp;
        }).then((res: data[]) => {
            setData(res);
        })

    }, [])
    useEffect(() => {
        console.log('data',data);
    }, [data])
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
                    {/* <span className="text-[18px] text-wrap  leading-[21px] font-normal text-[#969696] ">
                         lorem ipsum dolor sit amet consectetur.</span> */}
                </div>
                {/* insta cards */}
                <ul className=" grid grid-cols-3 w-[90%] xl:w-[59%]  transition-all transform duration-150 ease-in-out h-fit gap-x-[20px] gap-y-[24px] items-center justify-start  ">
                {(active?(data):(data.slice(0,6))).map((v,idx)=>{
                    console.log(v);
                    return (
                        // <li>
                            <Card des={v.des} img={v.img}/>
                        // </li>
                    )
                })}
                </ul>
                {/* laodmore and follow */}
                <div className="w-fit flex flex-row items-start  gap-[16px] ">
                    <a href='https://www.instagram.com/vk_football_academy?igsh=MTExcHJtY3JhemlleA==' target='blank'>
                   <button className="px-4 py-[12px] bg-[#DD2121] text-white italic text-[16px] font-medium  leading-[18px] ">Follow us</button>
                   </a>
                   <button 
                   onClick={()=>SetActive(!active)}
                   className="px-4 py-[12px] bg-white ring-[1px] ring-black text-black italic text-[16px] font-medium  leading-[18px] ">{active?"Show Less":"Load More"}</button>

                </div>

            </div>
        </div>
    )
}


const Card=({des,img}:{des:string,img:string})=>{
    return (
        <div className=" flex w-[307px] bg-white  h-fit flex-col items-center  gap-[16px] ">
            {/* first div */}
            <div 
            style={{backgroundImage:`url(https:${img})`}}
            className="flex flex-row items-end justify-start w-[307px] h-[307px] bg-cover bg-center bg-no-repeat  gap-[8px]">
            </div>
            {/* second div */}
            <div className=" flex flex-col items-start justify-start gap-[12px]  text-wrap">
              {/* <div className=" flex flex-col items-start justify-start gap-[8px] text-wrap"> */}
                {/* header */}
                {/* <span className=" text-black  text-[24px] font-semibold  leading-[28px] ">Formative Programe</span> */}
                {/* description */}
                <span className=" flex text-[18px] w-full h-fit  font-normal leading-[21px]  text-wrap text-[#969696]">
                {des}
                </span>

              {/* </div> */}
              {/* <div className="flex flex-row items-center justify-end h-[36px] w-full ">
                <span className=" flex  w-fit h-full bg-black py-[10px] px-[16px] text-white font-semibold leading-[16px] text-[16px] ">See details</span>
              </div> */}

            </div>
        </div>
    )
}