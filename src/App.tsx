// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/navbar"
import Hero from './components/hero'
import Welcome from './components/welcome'
import Program from './components/programs'
import AboutUs from './components/about'
import Achievements from './components/achievements'
import Social from './components/social'
import Footer from './components/footer'
import Partner from './components/partner'
import Testimonials from './components/testimonials'
import Book from './components/book'
import Insta from './components/insta'
function App() {

  return (
    <div>
      {/* nav */}
      {/* <div className="flex sticky w-full h-full"> */}
      <Navbar/>
      {/* </div> */}
      {/* hero section */}
      <Hero/>
      {/* welcome section */}
      <Welcome/>
      {/* training programs  */}
      <Program/>
      {/* about us */}
      <AboutUs/>
      {/* our achievements */}
      <Achievements/>
      {/* testimonials */}
      <Testimonials/>
      {/* instagram */}
      <Insta/>
      {/* book trial */}
      <Book/>
      {/* partners */}
      <Partner/>
      {/* socials */}
      <Social/>
      {/* footer */}
      <Footer/>
      {/* copyright */}
      <div className="flex w-full  items-center justify-center text-wrap  text-[16px] font-normal leading-[18px] py-4 bg-[#DD2121] text-white ">
        Copyright © 2024 All Rights Reserved - VK Football Academy (Lorem ipsum dolor sit amet consectetur)
        </div>

    </div>
  )
}

export default App
