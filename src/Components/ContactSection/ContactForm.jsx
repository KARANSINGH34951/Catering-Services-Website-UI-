import React from 'react';
import img from "./contact-img/background-site.jpg"

const ContactForm = () => {
  return (
    <div
      className="grid grid-cols-12 gap-4 items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="md:col-span-1 lg:col-span-1"></div>
      <div className="col-span-12 md:col-span-10 lg:col-span-10 bg-white ">
        <div className="border-y-4 border-primary bg-opacity-70 bg-light py-5 px-4 p-8 rounded-lg">
          <div className="text-center">
            <small className="inline-block font-bold text-dark uppercase bg-light border border-primary rounded-full px-4 py-1 mb-3">
              Book Us
            </small>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-black">
              Where do you want our services?
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
  <div className="border-2 border-orange-400 rounded-lg">
    <select className="border-primary p-3 h-12 w-full outline-none rounded-lg">
      <option>Select Country</option>
      <option value="1">USA</option>
      <option value="2">UK</option>
      <option value="3">India</option>
    </select>
  </div>

  <div className="border-2 border-orange-400 rounded-lg">
    <select className="border-primary p-3 h-12 w-full rounded-lg">
      <option>Select City</option>
      <option value="1">Depend on Country</option>
      <option value="2">London</option>
      <option value="3">Mumbai</option>
    </select>
  </div>

  <div className="border-2 border-orange-400 rounded-lg">
    <select className="border-primary p-3 h-12 w-full rounded-lg">
      <option>Select Place</option>
      <option value="1">Depend on Country</option>
      <option value="2">Venue A</option>
      <option value="3">Venue B</option>
    </select>
  </div>

  <div className="border-2 border-orange-400 rounded-lg">
    <select className="border-primary p-3 h-12 w-full rounded-lg">
      <option>Event Size</option>
      <option value="1">Small Event</option>
      <option value="2">Big Event</option>
    </select>
  </div>

  <div className="border-2 border-orange-400 rounded-lg">
    <select className="border-primary p-3 h-12 w-full rounded-lg">
      <option>No. of Places</option>
      <option value="1">100-200</option>
      <option value="2">300-400</option>
      <option value="3">500-600</option>
      <option value="4">700-800</option>
      <option value="5">900-1000</option>
      <option value="6">1000+</option>
    </select>
  </div>

  <div className="border-2 border-orange-400 rounded-lg">
    <select className="border-primary p-3 h-12 w-full rounded-lg">
      <option>Diet Preference</option>
      <option value="1">Vegetarian</option>
      <option value="2">Non-Vegetarian</option>
    </select>
  </div>

  <div className="border-2 border-orange-400 rounded-lg">
    <input
      type="text"
      className="border-primary p-3 h-12 w-full rounded-lg"
      placeholder="Your Contact No."
    />
  </div>

  <div className="border-2 border-orange-400 rounded-lg">
    <input
      type="date"
      className="border-primary p-3 h-12 w-full rounded-lg"
    />
  </div>

  <div className="border-2 border-orange-400 rounded-lg">
    <input
      type="email"
      className="border-primary p-3 h-12 w-full rounded-lg"
      placeholder="Enter Your Email"
    />
  </div>

  <div className="col-span-full text-center mt-4">
    <button className="bg-blue-500 text-white px-9 py-5 rounded-full transition duration-300 hover:bg-blue-600">
      Submit Now
    </button>
  </div>
</div>

        </div>
      </div>
      <div className="md:col-span-1 lg:col-span-1"></div>
    </div>
  );
};

export default ContactForm;
