import React from 'react';

import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <div className="flex justify-center items-center py-6 animate-bounceInUp my-10 lg:mx-20 mx-10" >
      <div className="container py-5">
        <ContactForm/>
      </div>
    </div>
  );
};

export default ContactSection;
