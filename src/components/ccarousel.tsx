import { NextArrow, PrevArrow } from "./customArrows";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from "react";
import { client } from "./client";

const settings = {
    dots: false,
    // arrows:true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    // autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 4,
        //     slidesToScroll: 2,
        //   }
        // },
        // {
        //     breakpoint: 768,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         initialSlide: 1
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
    ]
    // lazyLoad:"",


}
interface data{
    img:string,
    des:string,
    name:string,
}
export default function Carousel() {
    const [data, setData] = useState<data[]>([])
    useEffect(() => {
        client.getEntries({
            content_type: 'coach'
        }).then((entries:any) => {
            let tmp: data[] = []
            entries.items.forEach((e:any) => {
                let entry = JSON.parse(JSON.stringify(e));
                let itm: data = { img:'', des: '',name:''};
                if (entry.fields) {
                    entry=entry.fields;
                    
                    // console.log("entry",entry)
                    itm.img = entry.image.fields.file.url;
                    itm.des=entry.designation;
                    itm.name=entry.name
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
        console.log(data);
    }, [data])

    return (
        <Slider className="flex relative max-w-full max-h-full gap-[20px]  w-[90%] lg:w-[68%]  h-[500px] lg:h-[457px] flex-row  items-start justify-center "
            {...settings}
        >
            {data.map((v,idx)=>(
                <Card idx={idx} coach={v}/>
            ))}
        </Slider>

    )
}

const Card=({idx,coach}:{idx:any,coach:any})=>{
    return (
        <div key={idx} className=" flex w-[307px] bg-white  h-fit flex-col items-start  gap-[16px] ">
            {/* first div */}
            <div 
            style={{backgroundImage:`url(https://${coach.img})`}}
            className="flex flex-row items-end justify-start w-[264px] h-[307px] bg-cover  bg-top bg-no-repeat  gap-[8px]">
            </div>
            {/* second div */}
            <div className=" flex flex-col items-start justify-start gap-[12px]  text-wrap">
              <div className=" flex flex-col items-start justify-start gap-[8px] text-wrap">
                {/* header */}
                <span className=" text-black  text-[24px] font-semibold  leading-[28px] ">{coach.name}</span>
                {/* description */}
                <span className=" flex text-[18px] w-full h-fit  font-normal leading-[21px]  uppercase  text-wrap text-[#969696]">
                 {coach.des}
                </span>

              </div>
              {/* <div className="flex flex-row items-center justify-end h-[36px] w-full ">
                <span className=" flex  w-fit h-full bg-black py-[10px] px-[16px] text-white font-semibold leading-[16px] text-[16px] ">See details</span>
              </div> */}

            </div>
        </div>
    )
}
const coachNames=[
    {
        name:"James John",
        pos:"Head Coach"
    },
    {
        name:"Robin George",
        pos:"Assistant Head Coach"
    },
    {
        name:"David Zack",
        pos:"Junior Coach"
    },
    {
        name:"Rohan Paul",
        pos:"Junior Coach"
    }
]