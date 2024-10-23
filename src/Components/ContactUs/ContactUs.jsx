import React from 'react';

const ContactUs = () => {
  return (
    <div className="container-fluid contact py-6">
      <div className="container mx-auto">
        <div className="p-5 bg-light rounded contact-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-full px-4 py-1 mb-3">
                Get in touch
              </small>
              <h1 className="text-3xl font-bold mb-0">Contact Us For Any Queries!</h1>
            </div>
            <div className="col-span-1">
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.{' '}
                <a href="https://htmlcodex.com/contact-form" className="text-blue-500 underline">Download Now</a>.
              </p>
              <form>
                <input
                  type="text"
                  className="w-full form-control p-3 mb-4 border border-primary bg-light"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="w-full form-control p-3 mb-4 border border-primary bg-light"
                  placeholder="Enter Your Email"
                />
                <textarea
                  className="w-full form-control mb-4 p-3 border border-primary bg-light"
                  rows="4"
                  cols="10"
                  placeholder="Your Message"
                />
                <button
                  className="w-full btn btn-primary p-3 border border-primary bg-primary text-white rounded-full"
                  type="submit"
                >
                  Submit Now
                </button>
              </form>
            </div>
            <div className="col-span-1">
              <div>
                <div className="flex w-full border border-primary p-4 rounded mb-4">
                  <i className="fas fa-map-marker-alt fa-2x text-primary mr-4"></i>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>123 Street, New York, USA</p>
                  </div>
                </div>
                <div className="flex w-full border border-primary p-4 rounded mb-4">
                  <i className="fas fa-envelope fa-2x text-primary mr-4"></i>
                  <div>
                    <h4 className="font-bold">Mail Us</h4>
                    <p className="mb-2">info@example.com</p>
                    <p className="mb-0">support@example.com</p>
                  </div>
                </div>
                <div className="flex w-full border border-primary p-4 rounded">
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
