// MainCourses.js
import React from 'react';
import MenuItem from '../MenuItem';
import img from "../Menu-img/image.png"; // Adjust the path as necessary

const MainCourses = () => {
    const mainCourses = [
        { image: img, title: 'Argentinian Steak', price: 120, description: 'Juicy grilled steak served with a side of vegetables.' },
        { image: img, title: 'Spaghetti', price: 80, description: 'Classic spaghetti with marinara sauce and fresh herbs.' },
        { image: img, title: 'Vegetable Curry', price: 70, description: 'A mix of seasonal vegetables cooked in rich spices.' },
        { image: img, title: 'Risotto', price: 100, description: 'Creamy risotto made with Arborio rice and fresh herbs.' },
        { image: img, title: 'Fish Tacos', price: 110, description: 'Grilled fish served in soft tortillas with fresh salsa.' },
        { image: img, title: 'Chicken Alfredo', price: 130, description: 'Pasta in creamy Alfredo sauce with chicken.' },
        { image: img, title: 'Vegan Stir Fry', price: 90, description: 'Mixed vegetables stir-fried with tofu and spices.' },
        { image: img, title: 'Beef Stroganoff', price: 140, description: 'Tender beef in a creamy mushroom sauce.' },
        { image: img, title: 'Lasagna', price: 110, description: 'Layers of pasta with meat and cheese.' },
        { image: img, title: 'Quinoa Salad', price: 60, description: 'Healthy salad with quinoa and seasonal veggies.' },
    ];

    return (
        <div className="row g-4">
            {mainCourses.map((item, index) => (
                <div className="col-lg-6" key={index}>
                    <div className="wow bounceInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                        <MenuItem {...item} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MainCourses;
