import { NextArrow, PrevArrow } from "./customArrows";
import Slider from 'react-slick';
import { useEffect,useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from "./client";

const settings = {
    dots: false,
    // arrows:true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
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
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //   }
        // },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    // lazyLoad:"",


}
interface data{
    img:string,
    des:string,
    name:string,
    relation:string,
    category:string,
}
export default function Carousel() {
    const [data, setData] = useState<data[]>([])
    useEffect(() => {
        client.getEntries({
            content_type: 'testimonial'
        }).then((entries:any) => {
            let tmp: data[] = []
            entries.items.forEach((e:any) => {
                let entry = JSON.parse(JSON.stringify(e));
                let itm: data = { img:'', des: '',name:'',relation:'',category:''};
                if (entry.fields) {
                    entry=entry.fields;
                    
                    // console.log("entry",entry)
                    itm.img = entry.clientImg.fields.file.url;
                    itm.des=entry.testimonial;
                    itm.name=entry.clientName
                    itm.relation=entry.playerRelation
                    itm.category=entry.playerCategory
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
    return (
        <Slider className="flex relative max-w-full max-h-full  w-[66%]  h-[233px] flex-row  items-start justify-center "
            {...settings}
        >
            {
                data.map((v,idx)=>{
                    return (

                        <div key={idx} className="flex flex-row  items-center justify-center  w-[100%] h-full  ">
                        <Card name={v.name} testimonial={v.des} img={v.img} category={v.category} relation={v.relation}/>
                    </div>
                    )
                })
            }
        </Slider>

    )
}

const Card=({testimonial,img,name,category,relation}:{name:string,testimonial:string,img:string,category:string,relation:string})=>{
    return(
        <div className="flex w-full h-fit flex-col items-start justify-center  gap-[20px]">
        {/* desc */}
        <div className="flex text-wrap   border-b-[1px] border-orange-500 text-[24px] leading-[28px] font-medium text-white pb-6 ">
            {testimonial}
        </div>
        {/* coaching detail */}
        <div className="flex flex-row items-center justify-start w-full gap-[12px] ">
            <div 
            style={{backgroundImage:`url(https:${img})`}}
            className=" w-[64px] h-[64px] rounded-full bg-cover bg-center"/>
            <div className="flex flex-col items-start justify-start  gap-[2px]  text-white text-[16px] leading-[18px] ">
                <span className=" font-semibold ">{name}</span>
                <span className=" flex gap-1 flex-row items-center justify-center   font-normal">{relation} 
                    {/* <span className="font-medium text-white">Robin John</span> */}
                     <span className=" flex font-medium text-[12px] leading-[21px] bg-black px-4 py-1 ml-2 rounded-xl bg-opacity-30 ">{category}</span></span>

            </div>

        </div>

    </div>
    )
}