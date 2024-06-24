import { MdLocationPin } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
export default function Component(){
    return(
        <div className="flex min-h-[432px] h-fit w-full bg-white  flex-row items-center justify-between px-[120px] py-[40px] ">
            {/* logo */}
            <div 
            style={{backgroundImage:`url(/logo.png)`}}
            className="flex w-[220px] h-[220px] bg-cover bg-center bg-no-repeat "/>
            {/* quick links  whole div*/}
            <div className="flex flex-row gap-[20px] w-fit h-fit ">
                {/* quick links */}
                <div  className="flex flex-col w-[410px] h-fit items-start justify-center gap-[20px] ">
                    <span className=" font-bold text-[24px] leading-[28px] text-black text-start w-full">Quick Links</span>
                    <ul className="flex flex-col w-full  h-fit items-start gap-[16px] text-black">
                    {list.map((item)=>{
                        return(
                            <List name={item} />
                        )
                    })}


                    </ul>

                </div>
                {/* contact us */}
                <div className="flex flex-col w-[410px] h-fit items-start justify-center gap-[20px] ">
                    <span className=" font-bold text-[24px] leading-[28px] text-black text-start w-full">Contact us</span>
                    <ul className="flex flex-col w-full  h-fit items-start gap-[16px] text-white">
                        <li className="flex flex-row gap-[12px] items-center justify-start ">
                            <div className="flex w-[22px] h-[22px]  text-[22px] bg-white  text-red-700 "><MdLocationPin/></div>
                            <span className="text-black  text-[20px] leading-[23px] font-normal">URBAN TURF, RUSTOMJEE URBANIA,
                             Majiwada, Thane, Maharashtra 400601</span>
                        </li>
                        <li className="flex flex-row gap-[12px] items-center justify-start ">
                            <div className="flex w-[22px] h-[22px]  text-[22px] bg-white  text-red-700 "><IoMail/></div>
                            <span className="text-black  text-[20px] leading-[23px] font-normal">info@vkfootball academy.com</span>
                        </li>
                        <li className="flex flex-row gap-[12px] items-center justify-start ">
                            <div className="flex w-[22px] h-[22px]  text-[22px] bg-white  text-red-700 "><FaPhoneAlt/></div>
                            <span className="text-black  text-[20px] leading-[23px] font-normal">URBA+91N TURF, RUSTOMJEE URBANIA,
                             Majiwada, Thane, Maharashtra 400601</span>
                        </li>
                        <li className="flex flex-row gap-[12px] items-center justify-start ">
                            <div className="flex w-[22px] h-[22px]  text-[22px] bg-white  text-red-700 "><FaPhoneAlt/></div>
                            <span className="text-black  text-[20px] leading-[23px] font-normal">+91 7977418993</span>
                        </li>
                    </ul>

                </div>
            </div>


        </div>
    )
}
interface props{
    name:string;
}
const List=({name}:props)=>{
    return (

        <li className="flex flex-row gap-[16px] items-center justify-start ">
        <div className="flex w-[18px] h-[18px] rounded-full bg-white ring-[1px] ring-red-700"/>
        <span className="text-black text-[20px] leading-[23px] font-normal">{name}</span>
    </li>  
    )
}

const list=["Home","About us","Academy Programs","Our Achievements","testimonials","Gallery",'Register Now',"Our Socials"]