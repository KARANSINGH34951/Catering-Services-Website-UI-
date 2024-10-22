import React from "react";

const TestimonialsCards = ({ testimonial }) => {
  return (
    <div className="testimonial-card rounded-lg bg-light p-8 mx-2 w-96 h-64">
      <div className="d-flex mb-3">
        <img
          src={testimonial.image}
          className="w-24 h-24 rounded-full flex-shrink-0"
          alt={testimonial.name}
        />
        <div className="position-absolute top-0 right-0">
          <i className="fa fa-quote-right fa-2x"></i>
        </div>
        <div className="ps-3 my-auto">
          <h4 className="mb-0 text-lg font-semibold">{testimonial.name}</h4>
          <p className="m-0 text-sm text-gray-600">{testimonial.profession}</p>
        </div>
      </div>
      <div className="testimonial-content">
        <div className="flex">
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
          <i className="fas fa-star text-primary"></i>
        </div>
        <p className="text-lg m-0 pt-3">{testimonial.quote}</p>
      </div>
    </div>
  );
};

export default TestimonialsCards;
