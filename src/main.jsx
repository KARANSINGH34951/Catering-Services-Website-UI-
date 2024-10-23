import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Home from './Pages/Home.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import OurService from './Components/OurService/OurService.jsx';
import Events from './Components/Events/Events.jsx';
import Menu from './Components/Menu/Menu.jsx';
import ContactSection from './Components/ContactSection/ContactSection.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import OurTeam from './Components/Team/OurTeam.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<AboutUs/>
      },
      {
        path:'/service',
        element:<OurService/>
      },
      {
        path:'/event',
        element:<Events/>
      },
      {
        path:'/menu',
        element:<Menu/>
      },
      {
        path:'/menu',
        element:<menu/>
      },

      {
        path:'/contact',
        element:<ContactUs/>
      },
      {
        path:'/blog',
        element:<Blogs/>
      },
      {
        path:'/book',
        element:<ContactSection/>
      },
      {
        path:'/team',
        element:<OurTeam/>
      },
     
      {
        path:'/testimonial',
        element:<Testimonials/>
      },
      {
        path:'/404',
        element:<ErrorPage/>
      },
     
    ],
   
  },
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


