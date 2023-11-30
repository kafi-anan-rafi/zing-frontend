import React from "react";
import Product from "./Product";
import Pagination from "./Pagination";

const ProductList = ({ products, onPageChange, pageSize, currentPage, itemsCount }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
      <div className="text-center mt-5">
        <Pagination
          itemsCount={itemsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
