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
                    style={{backgroundImage:`url(/a5.png)`}}
                    className="flex w-[63%] h-full   bg-cover bg-center bg-no-repeat " />
                    <div className="flex flex-col w-[37%] min-h-[457px] h-full justify-between items-start bg-white p-[40px] gap-[24px] ">
                        {/* desc */}
                        <span className="flex text-wrap font-normal  text-black [1000px]:text-[16px] text-[12px] leading-[18px] ">
                        Our U13 team recently participated in the Kurla Tournament, 
                        showcasing outstanding football skills throughout the competition.
                        The team won all their group stage matches, advancing confidently to the knockout 
                        rounds.In the semifinals, they faced a tough opponent and, despite dominating the
                         game and creating several scoring opportunities, conceded a goal in the very last
                          moments, resulting in a narrow 1-0 loss.<br/><br/><br/>While it’s unfortunate that our journey 
                          ended just shy of the final, the kids displayed remarkable talent and determination. 
                          Their performance on the field was commendable, and they truly played...
                        </span>

                        {/* readmore */}
                        <div className="flex flex-row  items-center justify-end  w-full h-fit ">
                            {/* <button className="flex  px-[24px] py-[12px]  text-center  text-white bg-black font-semibold [1000px]:text-[18px] text-[14px] leading-[21px]">Read More</button> */}
                        </div>

                    </div>


                </div>

            </div>
            <div key={2} className="flex flex-row  items-center justify-center  w-[100%]  h-[457px]  ">
                <div className="flex flex-row items-center justify-center w-full h-full bg-white ">
                    <div className="flex w-[63%] h-full  bg-[url(/a4.png)]  bg-cover bg-center bg-no-repeat " />
                    <div className="flex flex-col w-[37%] h-full justify-between items-start bg-white p-[40px] gap-[24px] ">
                        {/* desc */}
                        <span className="flex text-wrap font-normal  text-black text-[14px] leading-[18px] ">
                            Celebrating Our U8 Category Success In @grassrootsfootballfiesta Cup Season 3, at TMC Gawand Bagh Turf Thane. ⚽️🙌🏻💯
                            <br/><br/>A Big Thankyou To All Parents Who Supported Us Throughout
                            This League and Made Sure They Come Every Weekends for more than 6 Weeks And Cheer Kids,Motivate Them & Enjoy All the Moments During The Tournament 👏🏻👏🏻👏🏻
                            <br/><br/><br/>
                            We Finished 4th In The league @grassrootsfootballfiesta in Under 8 Category 💪🏻🏆✅
                        </span>

                        {/* readmore */}
                        <div className="flex flex-row  items-center justify-end  w-full h-fit">
                            {/* <button className="flex  px-[24px] py-[12px]  text-center  text-white bg-black font-semibold text-[18px] leading-[21px]">Read More</button> */}
                        </div>

                    </div>


                </div>

            </div>
            <div key={3} className="flex flex-row  items-center justify-center  w-[100%]  h-[457px]  ">
                <div className="flex flex-row items-center justify-center w-full h-full bg-white ">
                    <div className="flex w-[63%] h-full  bg-[url(/a3.png)]  bg-cover bg-center bg-no-repeat " />
                    <div className="flex flex-col w-[37%] h-full justify-between items-start bg-white p-[40px] gap-[24px] ">
                        {/* desc */}
                        <span className="flex text-wrap font-normal  text-black text-[14px] leading-[18px] ">
                            Today Our U9 Team Participated in Soccer Cup 2022,kalwa
                            <br/><br/>
                            Our Team lost in the Semifinals.
                            <br/><br/>
                            Coach Mohit 🗣; These tournaments will help these young players in gaining experience and match confidence 💪🏻
                            More match time = Better and quicker development 💯✅🔝
                            <br/><br/><br/>
                            A Big Thankyou to all the Parents,Without them it’s Simply Not Possible.
                        </span>

                        {/* readmore */}
                        <div className="flex flex-row  items-center justify-end  w-full h-fit">
                            {/* <button className="flex  px-[24px] py-[12px]  text-center  text-white bg-black font-semibold text-[18px] leading-[21px]">Read More</button> */}
                        </div>

                    </div>


                </div>

            </div>
        </Slider>

    )
}
