import React, { useState } from 'react';
import MenuItem from './MenuItem';
import img from "../Menu/Menu-img/image.png";

const Menu = () => {
  const [activeTab, setActiveTab] = useState('tab-6'); 

  const starters = [
    { image: "https://themewagon.github.io/CaterServ/img/menu-01.jpg", title: 'Paneer', price: 90, description: 'Delicious paneer dish with rich flavors.' },
    { image: "https://themewagon.github.io/CaterServ/img/menu-02.jpg", title: 'Sweet Potato', price: 90, description: 'Sweet and savory sweet potato starter.' },
    { image: "https://themewagon.github.io/CaterServ/img/menu-03.jpg", title: 'Sabudana Tikki', price: 90, description: 'Crispy and soft sabudana tikkis.' },
    { image: "https://themewagon.github.io/CaterServ/img/menu-04.jpg", title: 'Pizza', price: 90, description: 'Classic pizza with a crispy crust and rich toppings.' },
    { image: "https://themewagon.github.io/CaterServ/img/menu-05.jpg", title: 'Spring Rolls', price: 90, description: 'Crispy spring rolls stuffed with veggies.' },
    { image: "https://themewagon.github.io/CaterServ/img/menu-06.jpg", title: 'Falafel', price: 85, description: 'Crispy chickpea falafel with tahini.' },
    { image: "https://themewagon.github.io/CaterServ/img/menu-07.jpg", title: 'Stuffed Mushrooms', price: 95, description: 'Mushrooms stuffed with cheese and herbs.' },
    { image: "https://themewagon.github.io/CaterServ/img/menu-08.jpg", title: 'Bruschetta', price: 80, description: 'Grilled bread with tomatoes and basil.' },
  ];

  const mainCourses = [
    { image: img, title: 'Argentinian Steak', price: 120, description: 'Juicy steak served with vegetables.' },
    { image: img, title: 'Spaghetti', price: 80, description: 'Spaghetti with marinara sauce and herbs.' },
    { image: img, title: 'Vegetable Curry', price: 70, description: 'Rich curry made with seasonal vegetables.' },
    { image: img, title: 'Risotto', price: 100, description: 'Creamy risotto with fresh herbs.' },
    { image: img, title: 'Fish Tacos', price: 110, description: 'Fish tacos with salsa and soft tortillas.' },
    { image: img, title: 'Grilled Chicken', price: 130, description: 'Grilled chicken served with vegetables.' },
    { image: img, title: 'Lamb Chops', price: 150, description: 'Tender lamb chops with mint sauce.' },
    { image: img, title: 'Salmon Fillet', price: 140, description: 'Salmon fillet with lemon butter sauce.' },
  ];

  const drinks = [
    { image: img, title: 'Cocktail', price: 10, description: 'Refreshing cocktail with seasonal fruits.' },
    { image: img, title: 'Fresh Juice', price: 5, description: 'Freshly squeezed organic fruit juice.' },
    { image: img, title: 'Soda', price: 3, description: 'Chilled soda with multiple flavor options.' },
    { image: img, title: 'Coffee', price: 4, description: 'Aromatic coffee brewed to perfection.' },
    { image: img, title: 'Tea', price: 2, description: 'Refreshing green or black tea.' },
    { image: img, title: 'Smoothie', price: 6, description: 'Thick and creamy fruit smoothie.' },
    { image: img, title: 'Milkshake', price: 7, description: 'Rich milkshake with ice cream.' },
    { image: img, title: 'Beer', price: 8, description: 'Chilled beer with a crisp finish.' },
  ];

  const offers = [
    { image: img, title: 'Happy Hour', price: 5, description: 'Discounted drinks during happy hours.' },
    { image: img, title: 'Meal Deal', price: 20, description: 'Starter and main course at a special price.' },
    { image: img, title: 'Combo Offer', price: 25, description: 'Any two items for a discounted price.' },
    { image: img, title: 'Weekend Special', price: 15, description: 'Special weekend-only dish.' },
    { image: img, title: 'Loyalty Card', price: 0, description: 'Get rewards for every 10 visits.' },
    { image: img, title: 'Family Feast', price: 30, description: 'Meal deal for 4 people at a special price.' },
    { image: img, title: 'Student Discount', price: 12, description: 'Special discount for students.' },
    { image: img, title: 'Birthday Special', price: 0, description: 'Free dessert on your birthday.' },
  ];

  const ourSpecials = [
    { image: img, title: 'Chef’s Special', price: 150, description: 'A unique dish curated by the chef.' },
    { image: img, title: 'Dessert Platter', price: 70, description: 'A mix of our best desserts.' },
    { image: img, title: 'Seasonal Fruit Salad', price: 50, description: 'Fresh fruit with honey drizzle.' },
    { image: img, title: 'Chocolate Lava Cake', price: 80, description: 'Warm cake with molten chocolate.' },
    { image: img, title: 'Ice Cream Sundae', price: 60, description: 'Topped with syrup and nuts.' },
    { image: img, title: 'Steak & Lobster', price: 180, description: 'A luxurious steak and lobster combo.' },
    { image: img, title: 'Crème Brûlée', price: 90, description: 'Classic French dessert with caramelized top.' },
    { image: img, title: 'Tiramisu', price: 85, description: 'Italian dessert with coffee and mascarpone.' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderMenuItems = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-10 lg:mx-20">
      {items.map((item, index) => (
        <div className="bg-white p-2 rounded-lg transition-transform transform " key={index}>
          <MenuItem {...item} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="container my-8">
      <div className="text-center mx-20 mb-8">
        <small className="block text-sm font-bold uppercase rounded-full px-4 py-1 mb-4">
          Our Menu
        </small>
        <h1 className="text-4xl font-semibold">Most Popular Food in the World</h1>
      </div>

      <div className="flex justify-center mb-8">
        <ul className="flex justify-center space-x-4 flex-wrap gap-y-7">
          {[
            { id: 'tab-6', label: 'Starter' },
            { id: 'tab-7', label: 'Main Course' },
            { id: 'tab-8', label: 'Drinks' },
            { id: 'tab-9', label: 'Offers' },
            { id: 'tab-10', label: 'Our Special' }
          ].map((tab) => (
            <li key={tab.id} className="nav-item">
              <a
                className={`py-2 px-6 rounded-full transition-all border ${
                  activeTab === tab.id ? 'bg-[#d4a762] text-white' : 'bg-white text-black border-[#d4a762]'
                } hover:bg-[#d4a762] hover:text-white cursor-pointer`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content mx-6 md:mx-14 lg:mx-20 xl:mx-20">
        {activeTab === 'tab-6' && <div className="tab-pane fade show active">{renderMenuItems(starters)}</div>}
        {activeTab === 'tab-7' && <div className="tab-pane fade show active">{renderMenuItems(mainCourses)}</div>}
        {activeTab === 'tab-8' && <div className="tab-pane fade show active">{renderMenuItems(drinks)}</div>}
        {activeTab === 'tab-9' && <div className="tab-pane fade show active">{renderMenuItems(offers)}</div>}
        {activeTab === 'tab-10' && <div className="tab-pane fade show active">{renderMenuItems(ourSpecials)}</div>}
      </div>
    </div>
  );
};

export default Menu;
