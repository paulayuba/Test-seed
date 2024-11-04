import React from 'react';

const Nav = () => {
  return (
    <div className="mb-10">
      <div className="container mx-auto px-4">
        
          <ul className="flex space-x-6 py-4 justify-around mb-8">
            <p className='text-2xl'>
            <h2 className="cursor-pointer">Electronics Fashion Home Goods</h2>
            </p>
            <nav className='flex space-x-12 items-center'>
            <li className="cursor-pointer text-yellow-200 font-semibold">Shop Now</li>
            <li className="cursor-pointer">Deals</li>
            <li className="cursor-pointer">Categories</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact</li>
            <li className="bg-yellow-200 px-4 py-2 rounded-md border border-blue-500 cursor-pointer">
              Get Started
            </li>
            </nav>
          </ul>
        
      </div>
    </div>
  );
}

export default Nav;
