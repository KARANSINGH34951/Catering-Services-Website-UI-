import React from 'react'
import EventsNav from './EventsNav'

const Events = () => {
  return (
    <div className='space-y-4 my-6 mx-10 lg:mx-20'>
      <div className='flex justify-center items-center my-4'>
     <h2 className="inline-block border-2 border-orange-500 py-1 rounded-full px-4 text-center mx-auto">
        LATEST EVENTS
    </h2>
     </div>
      <h1 className='text-center text-5xl'>Our Social & Professional Events Gallery</h1>
      <EventsNav/>
    </div>
  )
}

export default Events