import { NextArrow, PrevArrow } from "./customArrows";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
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
interface data {
    img: string,
    desc: string,
}
export default function Carousel() {
    const [data, setData] = useState<data[]>([])
    useEffect(() => {
        client.getEntries({
            content_type: 'achievements'
        }).then((entries:any) => {
            let tmp: data[] = []
            entries.items.forEach((e:any) => {
                let entry = JSON.parse(JSON.stringify(e));
                let itm: data = { img: '', desc: '' };
                if (entry.fields) {
                    itm.img = entry.fields.img.fields.file.url;
                    let str = '';
                    entry.fields.description.content.forEach((v: any) => {
                        str += v.content[0].value;
                        str += '\n'
                    })
                    itm.desc = str;
                }
                tmp.push(itm);
            })
            // console.log(tmp);
            // tmp.forEach((d)=>{
            //     setData((prev)=>[...prev,d]);
            // })
            return tmp;
        }).then((res: data[]) => {
            setData(res);
        })

    }, [])
    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <Slider className="flex relative max-w-full max-h-full  w-[90%] lg:w-[63%]  h-[500px] lg:h-[457px] flex-row  items-start justify-center "
            {...settings}
        >

            {data.map((v,idx) => (
                <div key={idx} className="flex flex-row  items-center justify-center  w-[100%] h-full  ">
                    <div className="flex flex-row items-center justify-center w-full lg:min-h-[457px] h-[500px] lg:h-[457px] bg-white ">
                        <div
                            style={{ backgroundImage: `url(https:${v.img})` }}
                            className="flex w-[63%] h-full   bg-cover bg-center bg-no-repeat " />
                        <div className="flex flex-col w-[37%] min-h-[457px] h-full justify-between items-start bg-white p-[40px] gap-[24px] ">
                            {/* desc */}
                            <span className="flex text-wrap font-normal  text-black [1000px]:text-[16px]  leading-[18px] ">
                           {v.desc}
                            </span>

                            {/* readmore */}
                            <div className="flex flex-row  items-center justify-end  w-full h-fit ">
                                {/* <button className="flex  px-[24px] py-[12px]  text-center  text-white bg-black font-semibold [1000px]:text-[18px] text-[14px] leading-[21px]">Read More</button> */}
                            </div>

                        </div>


                    </div>

                </div>
            ))}
        </Slider>

    )
}
