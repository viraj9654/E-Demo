
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, navigate, alterImage,productListRef  }) => {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10"
    ref={productListRef}>
      {products.map((product) => (
        <ProductCard key={product.code} product={product} navigate={navigate} alterImage={alterImage}
        />
      ))}
    </div>
  );
};

export default ProductList;

