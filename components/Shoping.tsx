import React from 'react';

const Shoping = () => {
  return (
    <div className="flex flex-wrap items-center justify-between p-8">
      {/* Right side - Image */}

      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Unlock the Future of Shopping with Us!</h3>
        <p className="text-lg text-gray-600 mb-6">Explore a diverse range of products tailored just for you. From the latest gadgets to fashionable attire, enjoy a seamless shopping experience.</p>
        <div className="mb-6">
          <button className="bg-white text-black py-2 px-6 rounded-lg shadow-md mr-4">
            Discover More Deals
          </button>
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg">
            Start Shopping Today
          </button>
        </div>
        <div className="flex items-center justify-center md:justify-start -space-x-2">
          <img className="w-16 h-16 rounded-full shadow-lg" src="https://via.placeholder.com/64" alt="Product 1" />
          <img className="w-16 h-16 rounded-full shadow-lg" src="https://via.placeholder.com/64" alt="Product 2" />
          <img className="w-16 h-16 rounded-full shadow-lg" src="https://via.placeholder.com/64" alt="Product 3" />
          <p className="text-sm text-gray-500 mt-4 ml-3">Join our community for personalized recommendations that suit your style and preferences!</p>
        </div>
      </div>

      {/* Left side - Content */}
      <div className="w-full md:w-1/2 p-4">
        <img 
          className="rounded-lg shadow-lg w-full h-[600px]" 
          src="https://s3-alpha-sig.figma.com/img/bb51/ae4b/adab0994131a485245407f3bfc9bc242?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWu46fSzgNvQw9tsHKvmv2EdWAs82BvdhWdUUZ43I9BS6lbyKEDbDESBu7Ye5S0W7PowgaOrL-Nd4v8qZvQGagSM-r9H3WEynngcXjx9ynzxnfN0LYn41leyKxP4Krz0VnzAjLIUF8V4puuysLCKUoTj7E~ZRhJSO4cJqmYa0bB9Oj4~6sKYoW1jlzyXVoOZ1QiNJ1FC5kYdKbO~wXky5X0wX9CyVN2SBick65oF69CS9umi~9IU-GvZF-UCGDBSOdbjqyGMtRbcrWyAng0VSWDheO7ZScb9sPWFGX0pJs0wgI2xHObvgtunGb0soTGHeXvJkvgKyezj8Xg8s5uudA__" 
          alt="Shopping"
        />
      </div>
    </div>
  );
};

export default Shoping;
