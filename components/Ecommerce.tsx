import React from 'react';

const Ecommerce = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-8 min-h-screen">
      {/* Left side */}
      <div className="w-full h-[500px] lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img src="https://s3-alpha-sig.figma.com/img/84d2/d129/55a356a89d355afe888a1943285c9ff7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mbvxt7YdXGVBrFiprZDGZKomt7KNz56KVvFPH3ZylV9PbZ7kMrB-h8a2j8GXWoBmY-157X-ZKNAgT~t7lSgQrIK9WlEZtNgCvN4Fr-28R~YxPaR-N0vlqgeXkvAAD0dm-fWOgXAxVOkHLdbEaLUCcRt-vJ9~f~z9JvBXkFsynbSHTg3PRb013kO5nKOIoGWdAMel561mkdvTn-3uH-rr2pU5XEnUykiYw3du~qfD5FmujJzCPXHO929mrewDK2Aikv3qSGVvPbukAP4nd76Ph-YM0CqT47x4YmkdcrIL6VPrQeU2s0Ct0NNIHCfxYGXXX87vIIxOSdkHfH~aFk-80w__" alt=""
        className='w-[500px]'/>
      </div>

      {/* Right side */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <button className="border-2 text-black py-2 px-6 rounded-lg font-bold mb-6">
          Shop Smart, Live Better!
        </button>
        <h2 className="text-3xl font-bold mb-4">
          Your One-Stop E-commerce Destination
        </h2>
        <p className="text-gray-700 mb-6">
          Sign in to discover exclusive offers tailored to your interests. Start enjoying a personalized shopping experience now!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="border-2 text-black py-2 px-6 rounded-lg font-bold hover:bg-green-600 transition duration-300">
            Sign in with your email address
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-red-600 transition duration-300">
            Log In Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
