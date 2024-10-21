// OurSpecials.js
import React from 'react';
import MenuItem from '../MenuItem';
import img from "../Menu-img/image.png"; // Adjust the path as necessary

const OurSpecials = () => {
    const ourSpecials = [
        { image: img, title: 'Chef’s Special', price: 150, description: 'A unique dish prepared by our chef.' },
        { image: img, title: 'Seasonal Dish', price: 100, description: 'A dish made with seasonal ingredients.' },
        { image: img, title: 'Signature Cocktail', price: 120, description: 'A unique cocktail made with local ingredients.' },
        { image: img, title: 'Gourmet Burger', price: 130, description: 'A delicious gourmet burger with special toppings.' },
        { image: img, title: 'Seafood Platter', price: 200, description: 'A platter of the freshest seafood available.' },
        { image: img, title: 'Vegetarian Delight', price: 90, description: 'A special vegetarian dish made with organic produce.' },
        { image: img, title: 'Chocolate Lava Cake', price: 60, description: 'A rich chocolate cake with a gooey center.' },
        { image: img, title: 'Tasting Menu', price: 250, description: 'A curated tasting menu featuring our best dishes.' },
        { image: img, title: 'Fresh Fruit Tart', price: 45, description: 'A tart filled with fresh seasonal fruits.' },
        { image: img, title: 'Pasta Primavera', price: 80, description: 'Pasta served with fresh seasonal vegetables.' },
    ];

    return (
        <div className="row g-4">
            {ourSpecials.map((item, index) => (
                <div className="col-lg-6" key={index}>
                    <div className="wow bounceInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                        <MenuItem {...item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurSpecials;
