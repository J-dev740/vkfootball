
// import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Component() {
    const handleScroll = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
        <div>
            <nav 
            
            className=" flex z-30 fixed w-full h-[80px] py-[20px] px-[120px] flex-row items-center  justify-between  bg-[#DD2121]">
            {/* logo */}
            <div 
            style={{backgroundImage:`url(/logo.png)`}}
            className=" flex mt-[80px] bg-cover bg-center w-[120px] h-[160px] "/>
            {/* navlinks */}
              <div>
                  <ul className="flex flex-row items-center gap-[16px] text-white ">
                      <li className="flex p-[12px] hover:underline hover:underline-offset-2 hover:cursor-pointer" 
                       onClick={() => handleScroll('home')}>Home</li>
                      <li className="flex p-[12px] hover:underline hover:underline-offset-2 hover:cursor-pointer" 
                       onClick={() => handleScroll('about')}>About Us</li>
                      <li className="flex p-[12px] hover:underline hover:underline-offset-2 hover:cursor-pointer" 
                       onClick={() => handleScroll('services')}>Academy Programs</li>
                      <li className="flex p-[12px] hover:underline hover:underline-offset-2 hover:cursor-pointer" 
                       onClick={() => handleScroll('gallery')}>Gallery</li>
                       <li className="flex p-[12px] bg-white text-black italic hover:cursor-pointer" 
                       onClick={() => handleScroll('contact')}>
                        Register Today
                        <span className="px-2">&#11162;</span></li>
                  </ul>
              </div>
            {/* cta */}

            </nav>
        </div>
  );
}

