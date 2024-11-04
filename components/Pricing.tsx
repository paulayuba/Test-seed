import React from 'react';

const Pricing = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-7xl mx-auto p-8 gap-6">
      <div className="w-full sm:w-72 bg-white border-2 p-4 flex flex-col text-center">
        <p className="mb-2 text-gray-600">Over 50,000 happy customers</p>
        <h1 className="text-3xl font-bold mt-2 flex justify-start">78,513</h1>
      </div>
      <div className="w-full sm:w-72 bg-white border-2 p-4 flex flex-col text-center">
        <p className="mb-2 text-gray-600">80% customer satisfaction rate</p>
        <h1 className="text-3xl font-bold mt-2 flex justify-start">99%</h1>
      </div>
      <div className="w-full sm:w-72 bg-white border-2 p-4 flex flex-col text-center">
        <p className="mb-2 text-gray-600">More than 2 million products sold</p>
        <h1 className="text-3xl font-bold mt-2 flex justify-start">5.5 million</h1>
      </div>
    </div>
  );
};

export default Pricing;
