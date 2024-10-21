// Drinks.js
import React from 'react';
import MenuItem from '../MenuItem';
import img from "../Menu-img/image.png";// Adjust the path as necessary

const Drinks = () => {
    const drinks = [
        { image: img, title: 'Cocktail', price: 10, description: 'Refreshing cocktail made with seasonal fruits.' },
        { image: img, title: 'Fresh Juice', price: 5, description: 'Freshly squeezed juice made from organic fruits.' },
        { image: img, title: 'Soda', price: 3, description: 'Chilled soda with a variety of flavors.' },
        { image: img, title: 'Coffee', price: 4, description: 'Rich and aromatic coffee brewed to perfection.' },
        { image: img, title: 'Tea', price: 2, description: 'Refreshing tea with options of green or black.' },
        { image: img, title: 'Lemonade', price: 6, description: 'Sweet and tangy lemonade made fresh.' },
        { image: img, title: 'Iced Tea', price: 4, description: 'Chilled tea with lemon and mint.' },
        { image: img, title: 'Smoothie', price: 8, description: 'Creamy smoothie made with seasonal fruits.' },
        { image: img, title: 'Milkshake', price: 7, description: 'Thick milkshake with your choice of flavor.' },
        { image: img, title: 'Sparkling Water', price: 3, description: 'Refreshing sparkling water.' },
    ];

    return (
        <div className="row g-4">
            {drinks.map((item, index) => (
                <div className="col-lg-6" key={index}>
                    <div className="wow bounceInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                        <MenuItem {...item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Drinks;
