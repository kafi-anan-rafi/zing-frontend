import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-2 border-slate-200 rounded-md">
      <figure>{/* <img src={src} alt={alt} /> */}</figure>
      <div className="card-body">
        <Link to={`/products/${product.id}`}>
          <h2 className="card-title text-2xl mb-2">{product.name}</h2>
          <p className="truncate">{product.details}</p>
        </Link>
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-bold">Price: {product.price}</p>
            <p className="text-md">Stock: {product.stock}</p>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-success">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    // <div className="card w-96 glass">
    //   <figure>
    //     <img
    //       src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //       alt="car!"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">Life hack</h2>
    //     <p>How to park your car at your garage?</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Learn now!</button>
    //     </div>
    //   </div>
    // </div>
  );
}
