import React from "react";

const Footer = () => {
  // Array of your 6 image URLs
  const imageUrls = [
    "https://themewagon.github.io/CaterServ/img/menu-01.jpg",
    "https://themewagon.github.io/CaterServ/img/menu-02.jpg",
    "https://themewagon.github.io/CaterServ/img/menu-03.jpg",
    "https://themewagon.github.io/CaterServ/img/menu-04.jpg",
    "https://themewagon.github.io/CaterServ/img/menu-05.jpg",
    "https://themewagon.github.io/CaterServ/img/menu-06.jpg",
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-6 my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-2 md:mx-20">
          {/* Logo & Social Icons */}
          <div>
            <h1 className="text-primary text-3xl font-bold mb-3">
              Cater<span className="text-gray-800">Serv</span>
            </h1>
            <p className="text-gray-600 mb-4">
              Explore our diverse menu that caters to all your culinary desires.
            </p>
            <div className="flex space-x-2">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-full transition-transform transform hover:scale-110"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Special Facilities */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Special Facilities</h4>
            <ul className="space-y-2">
              {["Cheese Burger", "Sandwich", "Paneer Burger", "Special Sweets"].map((item) => (
                <li key={item} className="flex items-center text-gray-700">
                  <i className="fas fa-check text-primary mr-2"></i> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-700">
              {[
                { icon: "map-marker-alt", text: "123 Street, New York, USA" },
                { icon: "phone-alt", text: "(+012) 3456 7890 123" },
                { icon: "envelope", text: "info@example.com" },
                { icon: "clock", text: "26/7 Hours Service" },
              ].map((item) => (
                <li key={item.text} className="flex items-center">
                  <i className={`fas fa-${item.icon} text-primary mr-2`}></i>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Gallery with Your 6 Image URLs */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Social Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {imageUrls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  className="w-full h-auto rounded-full border-2 border-primary p-2"
                  alt={`Menu ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white text-center space-y-4 p-3">
        <h2 className="text-lg">All rights reserved</h2>
        <h4 className="text-sm">Developed By Karan Singh D</h4>
      </div>
    </div>
  );
};

export default Footer;
