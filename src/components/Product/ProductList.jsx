import React, { useEffect } from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="container mx-auto my-5">
      <h1 className="text-lg font-bold text-center mb-5 text-green-500">
        {products?.length} {products?.length > 1 ? "Products" : "Product"} Found
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
