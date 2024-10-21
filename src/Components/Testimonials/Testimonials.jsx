import React, { useEffect, useRef } from "react";
import img from "../Events/Events-img/image.png"

const testimonialsData = [
  {
    name: "Person Name 1",
    profession: "Profession 1",
    image:"https://themewagon.github.io/CaterServ/img/testimonial-2.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 2",
    profession: "Profession 2",
    image:"https://themewagon.github.io/CaterServ/img/testimonial-4.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 3",
    profession: "Profession 3",
    image:"https://themewagon.github.io/CaterServ/img/testimonial-1.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
  {
    name: "Person Name 4",
    profession: "Profession 4",
    image:"https://themewagon.github.io/CaterServ/img/testimonial-3.jpg",
    quote: "Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
  },
];

const Testimonials = () => {
  const leftScrollRef = useRef(null);
  const rightScrollRef = useRef(null);

  useEffect(() => {
    const leftScrollContainer = leftScrollRef.current;
    const rightScrollContainer = rightScrollRef.current;

    const scrollLeftTestimonials = () => {
      if (leftScrollContainer) {
        leftScrollContainer.scrollLeft += 1; // Adjust speed if needed
        if (leftScrollContainer.scrollLeft >= leftScrollContainer.scrollWidth / 2) {
          leftScrollContainer.scrollLeft = 0;
        }
      }
    };

    const scrollRightTestimonials = () => {
      if (rightScrollContainer) {
        rightScrollContainer.scrollLeft -= 1; // Adjust speed if needed
        if (rightScrollContainer.scrollLeft <= 0) {
          rightScrollContainer.scrollLeft = rightScrollContainer.scrollWidth / 2;
        }
      }
    };

    const leftInterval = setInterval(scrollLeftTestimonials, 20);
    const rightInterval = setInterval(scrollRightTestimonials, 20);

    // Stop scrolling after 5 seconds
    const stopScrolling = setTimeout(() => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    }, 7100); // 5000 ms = 5 seconds

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
      clearTimeout(stopScrolling); // Clear timeout on cleanup
    };
  }, []);

  const cloneTestimonials = (data) => {
    return [...data, ...data]; // Clone the testimonials data
  };

  return (
    <section className="container-fluid py-6 mx-10 lg:mx-20">
      <div className="container">
        <div className="text-center space-y-5" data-wow-delay="0.1s">
          <small className="d-inline-block fw-bold text-dark text-uppercase  rounded-pill px-4 py-1 mb-3">
          <h2 className="inline-block border-2 py-1 rounded-full px-4 text-center mx-auto">
              TESTIMONIALS
          </h2>
          </small>
          <h1 className="text-4xl font-bold mb-5">What Our Customers Say!</h1>
        </div>

        {/* Left to Right Scroll */}
        <div ref={leftScrollRef} className="flex overflow-hidden mb-8 ">
          <div className="flex flex-nowrap bg-[#fffcf8] border-[#fffcf8] border-2">
            {cloneTestimonials(testimonialsData).map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-lg bg-white shadow-lg p-6 mx-2 w-96 h-80 transition-transform transform ">
                <div className="d-flex mb-4">
                  <div className='flex justify-start items-center'>
                  <img
                    src={testimonial.image}
                    className="w-28 h-28 rounded-full border-4 border-primary shadow-md"
                    alt={testimonial.name}
                  />

                      <h4 className="mb-0 text-2xl font-semibold text-gray-800 px-4">{testimonial.name}</h4>
                  </div>
                  <div className="ms-4 my-auto">
                    
                    <p className="m-0 text-sm text-gray-600">{testimonial.profession}</p>
                  </div>
                  <div className="position-relative top-0 right-0 ms-auto">
                    <i className="fa fa-quote-right fa-3x text-primary"></i>
                  </div>
                </div>
                <div className="testimonial-content">
                  <div className="flex mb-2">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                  <p className="text-lg text-gray-700">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right to Left Scroll */}
        <div ref={rightScrollRef} className="flex overflow-hidden mt-4 mb-4 ">
          <div className="flex flex-nowrap bg-[#fffcf8] border-[#fffcf8] border-2">
            {cloneTestimonials(testimonialsData).map((testimonial, index) => (
              <div key={index} className="testimonial-card rounded-lg bg-white shadow-lg p-6 mx-2 w-96 h-80 transition-transform transform ">
                <div className="d-flex mb-4">
                  <img
                    src={testimonial.image}
                    className="w-28 h-28 rounded-full border-4 border-primary shadow-md"
                    alt={testimonial.name}
                  />
                  <div className="ms-4 my-auto">
                    <h4 className="mb-0 text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="m-0 text-sm text-gray-600">{testimonial.profession}</p>
                  </div>
                  <div className="position-relative top-0 right-0 ms-auto">
                    <i className="fa fa-quote-right fa-3x text-primary"></i>
                  </div>
                </div>
                <div className="testimonial-content">
                  <div className="flex mb-2">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                  <p className="text-lg text-gray-700">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
