import React from 'react';
import { IoMdHeart, IoMdLock } from "react-icons/io";
import { MdOutlineDynamicForm, MdFormatPaint } from "react-icons/md";

const BastDeals = () => {
  return (
    <div className="flex flex-col items-center py-6">
      <div className="text-center mb-8">
        <h1 className="mb-4">Shop the Base Deals</h1>
        <p className="text-lg font-bold">Discover Your Perfect Product Today!</p>
      </div>

      <div className="flex justify-center px-20">
        {[
          { icon: <MdFormatPaint />, title: "Electronic Hub", text: "Explore cutting-edge technology and gadgets that enhance lifestyle.", link: "Shop Electronics Now" },
          { icon: < MdOutlineDynamicForm />, title: "Fashion Forward", text: "Step into style with our trendy clothing and accessories curated just for you.", link: "Browse Fashion Trends" },
          { icon: <IoMdLock  />, title: "Home Essentials", text: "Transform your living space with our high-quality home goods that combine functionality and design.", link: "Explore Home Goods" },
          { icon: < IoMdHeart />, title: "Exclusive Offer", text: "Don’t miss out on our limited-time promotions that guarantee unbeatable prices.", link: "View All Promotions" },
        ].map((card, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-10 max-w-s text-center"
          >
            <div className="flex items-center justify-center text-4xl mb-4">
              {card.icon}
            </div>
            <h1 className="text-2xl font-bold mb-2">{card.title}</h1>
            <p className="text-gray-600 mb-4">{card.text}</p>
            <span className="text-pink-400 font-semibold cursor-pointer">{card.link}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BastDeals;
