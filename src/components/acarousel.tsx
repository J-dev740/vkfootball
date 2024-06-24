import { NextArrow, PrevArrow } from "./customArrows";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const settings = {
    dots: false,
    // arrows:true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
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
export default function Carousel() {
    return (
        <Slider className="flex relative max-w-full max-h-full gap-[20px]  w-[90%] lg:w-[68%]  h-[500px] lg:h-[457px] flex-row  items-start justify-center "
            {...settings}
        >
            {coachNames.map((v,idx)=>(
                <Card idx={idx} coach={v}/>
            ))}
        </Slider>

    )
}

const Card=({idx,coach}:{idx:any,coach:any})=>{
    return (
        <div className=" relative flex w-[307px] bg-white  h-fit flex-col items-start  gap-[16px] ">
            {/* first div */}
            <div 
            style={{backgroundImage:`url(/center${(idx%3)+1}.png)`}}
            className="flex flex-row items-end justify-start w-[353px] h-[479px] bg-cover  bg-top bg-no-repeat  gap-[8px] ">
            <div className="flex w-full h-full bg-black bg-opacity-40">

            </div>
            </div>
            {/* second div */}
            <div className="absolute bottom-0 flex flex-col items-start justify-start gap-[12px]  p-4 text-wrap">
              <div className=" flex flex-col items-start justify-start gap-[10px] text-wrap">
                {/* header */}
                <span className=" text-white text-[24px] font-semibold  leading-[28px] ">{coach.name}</span>
                {/* description */}
                    <div className="flex flex-row gap-[12px] items-center justify-start ">
                        <div className="flex w-[20px] h-[20px]  text-[18px] text-white bg-transparent "><MdLocationPin /></div>
                        <span className="text-white  text-[16px] leading-[18px] font-normal">{coach.pos}</span>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start ">
                        <div className="flex w-[20px] h-[20px]  text-[18px] text-white bg-transparent "><FaPhoneAlt /></div>
                        <span className="text-white  text-[16px] leading-[18px] font-normal">+91 7977418993</span>
                    </div>

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
        name:"Rustomjee Urbania ",
        pos:"Majiwada, Thane West, Mumbai",
        phone:"+91 7977418993"
    },
    {
        name:"Lodha Luxuria",
        pos:"Majiwada, Thane West, Mumbai",
        phone:"+91 7977418993"
    },
    {
        name:"Hiranandani Meadows",
        pos:"Majiwada, Thane West, Mumbai",
        phone:"+91 7977418993"
    },
]