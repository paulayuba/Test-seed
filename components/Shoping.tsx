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
          <img className="w-16 h-16 rounded-full shadow-lg" src="https://s3-alpha-sig.figma.com/img/97d0/7115/0e30a3d33c88e93cf1042c347779f1cb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RrCUQ4AYejwc~qHvudoDiwFdMgtZwCp2pwRljmJdl~DIr46H0onJfq7vwscAo73onjdWma9RQbPqw4IRUvAqYO59mNm4J4ravmy0yvCS3TyPWmxL-P1HbGNUSyP6gsKTlOBtnYA2hhJ6W2kBHK0EpTLalwODT9j8XKzoxiyahGMgJma3tRjO52DYPwLA27ZC3Jbw8icSD2LxQWCydfNy5LpyHhCpJgQT9PE6e~McONo918D0uRmL3TCPtLcC5DyEdLGhjAG1UwrveX1je7A240xPc3EN6EtTf-QtLbwRjEd~z-bcPu~kVGEdvBj~9qPqFPq-pidqtNDeJzoMq6XUCQ__" alt="Product 1" />
          <img className="w-16 h-16 rounded-full shadow-lg" src="https://s3-alpha-sig.figma.com/img/9693/e9da/4b34a1051152b06f73041940e2edc026?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dEbTOcg~hBnHAdBqte9GCVy8SK395X6Az-zfHYEoT1meK15gC65Y6iosnWbpt4919OLiBaH55uB5OjIQbe3u5-HibO186feNLQKKKj5gihSluq7is6bDalE2BdyBFiMvrhZtIVSm3Z-XanM5rfaCEc62uNxXoZPmNBnWrTzZGOMZ9hnk4L4RUlutj~diMZnac2iuboxlYKncLs~LqgFU7OXwvoAzzD7gefyc51AczCWx94fj82PuuZqCi6-YDwCe6VVxJ3or~uXS5iYtLNRI4lpVE67MZqCu5PM6zsYqUgIlU2U7Xqmw-Tu2Z4Ip0M1jvGfrtzthLxSnEfwb5BQSxg__" alt="Product 2" />
          <img className="w-16 h-16 rounded-full shadow-lg" src="https://s3-alpha-sig.figma.com/img/4b3c/8665/716c6e2d5134223b268f7a227522bc29?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lf9Wa2yRH21~PhbYPRM6-Ouf6rhEE9tEUDu~UVzeq8OOLUciQ6FVy1ajoBzzFcwUkKeqwSjkyknKvIyp40eC3UrNSjSFS0NeyebhTql4pNOWm-hki-FP82AmTjHAynKDwdFotQOCOHQx5H4BembBue3kRHp~cwjk-qRa5nGNFUTFWAfHV51nmQNt0aKBB763xQG71UCFu9O6vWa~sxbekcBH5S6ynFlUQ5EJJIHFdnET8H1QV41C8-vBuXge6jqFUQgT8lMSCbhxom0bsx6cwaHJKDyII77YgmURy97f0VNAS1x~MftMoCAFBJN6oxRuKWGOUOLEGkFsIRVcaCfFNQ__" alt="Product 3" />
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
