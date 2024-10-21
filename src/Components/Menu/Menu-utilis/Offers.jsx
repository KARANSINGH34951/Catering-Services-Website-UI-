// Offers.js
import React from 'react';
import MenuItem from '../MenuItem';
import img from "../Menu-img/image.png"; // Adjust the path as necessary

const Offers = () => {
    const offers = [
        { image: img, title: 'Happy Hour', price: 5, description: 'Discounted drinks during happy hour.' },
        { image: img, title: 'Meal Deal', price: 20, description: 'Get a starter and main course at a discounted price.' },
        { image: img, title: 'Combo Offer', price: 25, description: 'Choose any two items for a special price.' },
        { image: img, title: 'Weekend Special', price: 15, description: 'Enjoy a special dish every weekend.' },
        { image: img, title: 'Loyalty Card', price: 0, description: 'Get a free item after ten visits.' },
        { image: img, title: 'Birthday Discount', price: 10, description: 'Special discount for birthday celebrants.' },
        { image: img, title: 'Family Pack', price: 30, description: 'A pack of meals for the whole family.' },
        { image: img, title: 'Early Bird', price: 12, description: 'Discount for early diners.' },
        { image: img, title: 'Chef’s Surprise', price: 20, description: 'A surprise dish created by the chef.' },
        { image: img, title: 'Seasonal Offer', price: 18, description: 'Special offer on seasonal dishes.' },
    ];

    return (
        <div className="row g-4">
            {offers.map((item, index) => (
                <div className="col-lg-6" key={index}>
                    <div className="wow bounceInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                        <MenuItem {...item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Offers;
