// ProductCard.js
import React from 'react';
import { Disclosure } from '@headlessui/react';

const ProductCard = ({ product, navigate, alterImage }) => {
  const handleClick = () => {
   
    navigate(`/product/${product.code}`, { state: { term: product.code} });
  };
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
     
    <a
      className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl items-center justify-center border shadow-md"
      onClick={handleClick}
    >
      <img
        className="object-cover"
        src={product?.selected_images?.front?.display?.en || alterImage}
        alt={product?.product_name_en || "Product Image"}
      />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-2 text-center text-sm font-medium text-white"
        >
        Nutrition Grade - {product?.nutrition_grades}
      </span>
    </a>
    
    <div className="mt-4 px-3 pb-5 w-full flex flex-col items-center justify-center ">
      <a href=""onClick={handleClick}>
        <span className="text-lg tracking-tight text-slate-900 font-abc font-semibold text-center">
          {product?.product_name_en || "NOT PRESENT"}
        </span>
          </a>
          
          
      <span className="mr-2 rounded text-red-600 px-2.5 py-0.5 text-lg mb-2">
        {typeof product?.categories === "string" && product.categories.length > 0
          ? product.categories.split(",")[0]
          : "No Category"}
      </span>
   
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`py-2 w-full font-abc rounded-full font-semibold ${open ? "bg-amber-500" : "bg-amber-300"} hover:bg-amber-500 text-black`}>
              Check Ingredients
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 w-full mt-2 p-2 border rounded bg-gray-100">
              {product.ingredients_text_en || "No ingredients listed"}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  </div>
  );
};

export default ProductCard;
