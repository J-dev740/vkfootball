import { NextArrow, PrevArrow } from "./customArrows";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
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
export default function Carousel() {
    return (
        <Slider className="flex relative max-w-full max-h-full  w-[66%]  h-[233px] flex-row  items-start justify-center "
            {...settings}
        >
            <div key={1} className="flex flex-row  items-center justify-center  w-[100%] h-full  ">
                <Card/>
            </div>
            <div key={2} className="flex flex-row  items-center justify-center  w-[100%] h-full  ">
                <Card/>
            </div>
            <div key={3} className="flex flex-row  items-center justify-center  w-[100%] h-full  ">
                <Card/>
                
            </div>
        </Slider>

    )
}

const Card=()=>{
    return(
        <div className="flex w-full h-fit flex-col items-center justify-center  gap-[20px]">
        {/* desc */}
        <div className="flex text-wrap   border-b-[1px] border-orange-500 text-[24px] leading-[28px] font-medium text-white pb-6 ">
        Lorem ipsum dolor sit amet consectetur. Et nam vitae adipiscing arcu mauris in donec gravida. 
        Id nascetur id ultrices iaculis purus id.
         Sem urna lorem ultricies dolor sit. Pharetra sed risus malesuada nullam enim.
        </div>
        {/* coaching detail */}
        <div className="flex flex-row items-center justify-start w-full gap-[12px] ">
            <div 
            style={{backgroundImage:`url(/rnd.png)`}}
            className=" w-[64px] h-[64px] rounded-full bg-cover bg-center"/>
            <div className="flex flex-col items-start justify-start  gap-[2px]  text-white text-[16px] leading-[18px] ">
                <span className=" font-semibold ">John Smith</span>
                <span className=" flex gap-1 flex-row items-center justify-center   font-normal">Father of  <span className="font-medium text-white">Robin John</span> <span className=" flex font-medium text-[12px] leading-[21px] bg-black px-4 py-1 ml-2 rounded-xl bg-opacity-30 ">U-9 VK Football Academy player</span></span>

            </div>

        </div>

    </div>
    )
}