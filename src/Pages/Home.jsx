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
import ErrorPage from '../Components/ErrorPage/ErrorPage'

const Home = () => {
  return (
    <div className='overflow-hidden bg-[#fffcf8]'>
      
      <HeroSection/>
      <AboutUs/>
      <StatsSection/>
      <OurServices/>
      <Events/>
      <Menu/>
      <ContactSection/>
      <OurTeam/>
      <Testimonials/>c
      <Blogs/>
     
      
    </div>
  )
}

export default Home