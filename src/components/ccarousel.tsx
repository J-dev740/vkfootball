import { NextArrow, PrevArrow } from "./customArrows";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div className=" flex w-[307px] bg-white  h-fit flex-col items-start  gap-[16px] ">
            {/* first div */}
            <div 
            style={{backgroundImage:`url(/coach${(idx%4)+1}.png)`}}
            className="flex flex-row items-end justify-start w-[264px] h-[307px] bg-cover  bg-top bg-no-repeat  gap-[8px]">
            </div>
            {/* second div */}
            <div className=" flex flex-col items-start justify-start gap-[12px]  text-wrap">
              <div className=" flex flex-col items-start justify-start gap-[8px] text-wrap">
                {/* header */}
                <span className=" text-black  text-[24px] font-semibold  leading-[28px] ">{coach.name}</span>
                {/* description */}
                <span className=" flex text-[18px] w-full h-fit  font-normal leading-[21px]  uppercase  text-wrap text-[#969696]">
                 {coach.pos}
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