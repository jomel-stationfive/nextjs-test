import { useState } from "react";

export const ProductItem = ({ productInfo }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500 h-120">
      <img
        className="w-64 h-64 object-contain rounded-t-md mx-auto"
        src={productInfo?.image}
        alt={productInfo?.title}
        loading="lazy"
      />
      <div className="mt-4">
        <div className="h-28">
          <h1 className="text-lg font-bold text-gray-700 text-left">
            {productInfo?.title}
          </h1>
        </div>
        <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
          <button className="block text-xl font-semibold text-gray-700 cursor-auto">
            ${productInfo?.price}
          </button>
          <button className="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
