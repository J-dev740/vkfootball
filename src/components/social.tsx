import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
export default function Component(){
    return(
        <div className="flex flex-row items-center justify-center bg-[#DD2121] py-[48px] mb-[80px] ">
            <div className="flex flex-col items-center justify-start gap-[80px] w-fit  h-fit">
                {/* header */}
                <div className="uppercase flex font-medium flex-row items-center italic text-[40px] leading-[46px]  text-white">OUR SOCIALS</div>
                {/* socials array */}
                <ul className="flex flex-row items-center gap-[64px] ">
                <a href="https://youtube.com/@vkfootballacademy8208?si=R0eaFIyvIjXZ3jsX" target="blank">
                <li className="flex w-[44px] h-[44px] rounded-full bg-white flex-row items-center justify-center text-[22px]"><SlSocialYoutube/></li>
                </a>

                <a href="https://www.facebook.com/vkfootballacademy" target="blank">

                <li className="flex w-[44px] h-[44px] rounded-full bg-white flex-row items-center justify-center text-[22px]"><TiSocialFacebookCircular/></li>
                </a>

                <a href="https://www.instagram.com/vk_football_academy?igsh=MTExcHJtY3JhemlleA==" target="blank">

                <li className="flex w-[44px] h-[44px] rounded-full bg-white flex-row items-center justify-center text-[22px]"><FaInstagram/></li>
                </a>

                {/* <a href="https://www.linkedin.com/company/v-k-football-academy/" target="blank">

                <li className="flex w-[44px] h-[44px] rounded-full bg-white flex-row items-center justify-center text-[22px]"><FaXTwitter/></li>
                </a> */}

                <a href="https://wa.me/7304666815" target="blank">
                <li className="flex w-[44px] h-[44px] rounded-full bg-white flex-row items-center justify-center text-[22px]"><FaWhatsapp/></li>
                </a>


                <a href="https://www.linkedin.com/company/v-k-football-academy/" target="blank">
                    <li  className="flex w-[44px] h-[44px] rounded-full bg-white flex-row items-center justify-center text-[22px] "><TiSocialLinkedin /></li>
                </a>

                </ul>
            </div>

        </div>
    )
}