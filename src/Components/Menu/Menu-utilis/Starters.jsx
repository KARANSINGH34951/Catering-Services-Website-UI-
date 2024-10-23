// Starters.js
import React from 'react';
import MenuItem from '../MenuItem';
import img from a // Adjust the path as necessary

const Starters = () => {
    const starters = [
        { image: img, title: 'Paneer', price: 90, description: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.' },
        { image: img, title: 'Sweet Potato', price: 90, description: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.' },
        { image: img, title: 'Sabudana Tikki', price: 90, description: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.' },
        { image: img, title: 'Pizza', price: 90, description: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.' },
        { image: img, title: 'Spring Rolls', price: 90, description: 'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.' },
        { image: img, title: 'Nachos', price: 80, description: 'Crispy nachos with cheese and jalapeños.' },
        { image: img, title: 'Bruschetta', price: 70, description: 'Toasted bread topped with tomatoes and basil.' },
        { image: img, title: 'Hummus', price: 60, description: 'Creamy hummus served with pita bread.' },
        { image: img, title: 'Garlic Bread', price: 50, description: 'Toasted bread with garlic butter.' },
        { image: img, title: 'Stuffed Mushrooms', price: 100, description: 'Mushrooms stuffed with herbs and cheese.' },
    ];

    return (
        <div className="row g-4">
            {starters.map((item, index) => (
                <div className="col-lg-6" key={index}>
                    <div className="wow bounceInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                        <MenuItem {...item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Starters;
