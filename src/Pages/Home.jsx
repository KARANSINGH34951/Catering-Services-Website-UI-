import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/HeroSection.jsx/HeroSection'
import AboutUs from '../Components/AboutUs/AboutUs'
import OurServices from '../Components/OurService/OurService'
import StatsSection from '../Components/AboutUs/StatsSection'
import Events from "../Components/Events/Events"
import ContactSection from '../Components/ContactSection/ContactSection'
import OurTeam from '../Components/Team/OurTeam'
import Footer from '../Components/Footer/Footer'
import Blogs from '../Components/Blogs/Blogs'
import Menu from '../Components/Menu/Menu'
import Testimonials from '../Components/Testimonials/Testimonials'
import Testo from '../Components/Testimonials/testo'


const Home = () => {
  return (
    <div className='overflow-x-hidden bg-[#fffcf8]'>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <StatsSection/>
      <OurServices/>
      <Events/>
      <Menu/>
      <ContactSection/>
      <OurTeam/>
      <Testimonials/>
      <Blogs/>
      <Footer/>
      
    </div>
  )
}

export default Home