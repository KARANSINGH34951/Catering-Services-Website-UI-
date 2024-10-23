import React from 'react';

const ContactUs = () => {
  return (
    <div className="container-fluid contact py-6  bg-[#fffcf8] flex flex-wrap">
      <div className="container mx-10 lg:mx-20">
        <div className="p-5 bg-light rounded contact-form ">
   
          <div className="hidden lg:flex flex-col items-center mb-6">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-full px-4 py-1 mb-3">
              Get in touch
            </small>
            <h1 className="text-3xl font-bold text-center">Contact Us For Any Queries!</h1>
          </div>
          
         
          <div className="flex flex-col items-start mb-6 lg:hidden">
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-full px-4 py-1 mb-3">
              Get in touch
            </small>
            <h1 className="text-3xl font-bold">Contact Us For Any Queries!</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="col-span-1">
              
              <form>
                <input
                  type="text"
                  className="w-full form-control px-10 py-6 rounded-lg mb-4 border border-[#d4a762] bg-light"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="w-full form-control px-10 py-6 rounded-lg mb-4 border border-[#d4a762] bg-light"
                  placeholder="Enter Your Email"
                />
                <textarea
                  className="w-full form-control mb-4 p-3 border border-[#d4a762] bg-light"
                  rows="4"
                  cols="10"
                  placeholder="Your Message"
                />
                <button
                  className="w-full btn btn-primary p-3 py-4 border border-[#d4a762] border-primary bg-[#d4a762] text-black  rounded-full"
                  type="submit"
                >
                  Submit Now
                </button>
              </form>
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex w-full border-2 border-[#d4a762] p-4 py-6 rounded mb-4">
                  <i className="fas fa-map-marker-alt fa-2x text-primary mr-4"></i>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="flex w-full border-2 border-[#d4a762] p-4 py-6 rounded mb-4">
                  <i className="fas fa-envelope fa-2x text-primary mr-4"></i>
                  <div>
                    <h4 className="font-bold">Mail Us</h4>
                    <p className="mb-2">info@example.com</p>
                    <p className="mb-0">support@example.com</p>
                  </div>
                </div>
                <div className="flex w-full border-2 border-[#d4a762]  p-4 py-6 rounded">
                  <i className="fa fa-phone-alt fa-2x text-primary mr-4"></i>
                  <div>
                    <h4 className="font-bold">Telephone</h4>
                    <p className="mb-2">(+012) 3456 7890 123</p>
                    <p className="mb-0">(+704) 5555 0127 296</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
