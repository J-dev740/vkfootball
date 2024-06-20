import { NextArrow, PrevArrow } from "./customArrows";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
export default function Carousel() {
    return (
        <Slider className="flex relative max-w-full max-h-full  w-[90%] lg:w-[63%]  h-[500px] lg:h-[457px] flex-row  items-start justify-center "
            {...settings}
        >
            <div key={1} className="flex flex-row  items-center justify-center  w-[100%] h-full  ">
                <div className="flex flex-row items-center justify-center w-full lg:min-h-[457px] h-[500px] lg:h-[457px] bg-white ">
                    <div 
                    style={{backgroundImage:`url(/cardimg.png)`}}
                    className="flex w-[63%] h-full   bg-cover bg-center bg-no-repeat " />
                    <div className="flex flex-col w-[37%] min-h-[457px] h-full justify-start items-start bg-white p-[40px] gap-[24px] ">
                        {/* desc */}
                        <span className="flex text-wrap font-normal  text-black [1000px]:text-[16px] text-[12px] leading-[18px] ">
                            Our U13 team recently participated in the Kurla Tournament, showcasing outstanding football skills throughout the competition.
                            The team won all their group stage matches, advancing confidently to the knockout rounds.
                            In the semifinals, they faced a tough opponent and, despite dominating the game and creating several scoring opportunities, conceded a goal in the very last moments, resulting in a narrow 1-0 loss.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet consectetur. Et nam vitae adipiscing arcu mauris in donec gravida. Id nascetur id ultrices iaculis purus id. Sem urna lorem ultricies dolor sit. Pharetra sed risus malesuada nullam enim.

                        </span>

                        {/* readmore */}
                        <div className="flex flex-row  items-center justify-end  w-full h-fit ">
                            <button className="flex  px-[24px] py-[12px]  text-center  text-white bg-black font-semibold [1000px]:text-[18px] text-[14px] leading-[21px]">Read More</button>
                        </div>

                    </div>


                </div>

            </div>
            <div key={2} className="flex flex-row  items-center justify-center  w-[100%]  h-[457px]  ">
                <div className="flex flex-row items-center justify-center w-full h-full bg-white ">
                    <div className="flex w-[63%] h-full  bg-[url(/cardimg.png)]  bg-cover bg-center bg-no-repeat " />
                    <div className="flex flex-col w-[37%] h-full justify-start items-start bg-white p-[40px] gap-[24px] ">
                        {/* desc */}
                        <span className="flex text-wrap font-normal  text-black text-[16px] leading-[18px] ">
                            Our U13 team recently participated in the Kurla Tournament, showcasing outstanding football skills throughout the competition.
                            The team won all their group stage matches, advancing confidently to the knockout rounds.
                            In the semifinals, they faced a tough opponent and, despite dominating the game and creating several scoring opportunities, conceded a goal in the very last moments, resulting in a narrow 1-0 loss.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet consectetur. Et nam vitae adipiscing arcu mauris in donec gravida. Id nascetur id ultrices iaculis purus id. Sem urna lorem ultricies dolor sit. Pharetra sed risus malesuada nullam enim.

                        </span>

                        {/* readmore */}
                        <div className="flex flex-row  items-center justify-end  w-full h-fit">
                            <button className="flex  px-[24px] py-[12px]  text-center  text-white bg-black font-semibold text-[18px] leading-[21px]">Read More</button>
                        </div>

                    </div>


                </div>

            </div>
            <div key={3} className="flex flex-row  items-center justify-center  w-[100%]  h-[457px]  ">
                <div className="flex flex-row items-center justify-center w-full h-full bg-white ">
                    <div className="flex w-[63%] h-full  bg-[url(/cardimg.png)]  bg-cover bg-center bg-no-repeat " />
                    <div className="flex flex-col w-[37%] h-full justify-start items-start bg-white p-[40px] gap-[24px] ">
                        {/* desc */}
                        <span className="flex text-wrap font-normal  text-black text-[16px] leading-[18px] ">
                            Our U13 team recently participated in the Kurla Tournament, showcasing outstanding football skills throughout the competition.
                            The team won all their group stage matches, advancing confidently to the knockout rounds.
                            In the semifinals, they faced a tough opponent and, despite dominating the game and creating several scoring opportunities, conceded a goal in the very last moments, resulting in a narrow 1-0 loss.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet consectetur. Et nam vitae adipiscing arcu mauris in donec gravida. Id nascetur id ultrices iaculis purus id. Sem urna lorem ultricies dolor sit. Pharetra sed risus malesuada nullam enim.

                        </span>

                        {/* readmore */}
                        <div className="flex flex-row  items-center justify-end  w-full h-fit">
                            <button className="flex  px-[24px] py-[12px]  text-center  text-white bg-black font-semibold text-[18px] leading-[21px]">Read More</button>
                        </div>

                    </div>


                </div>

            </div>
        </Slider>

    )
}