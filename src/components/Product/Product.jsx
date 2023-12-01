import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        to={"/products/" + product.id}
      >
        <img
          className="object-cover"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link
          className="text-xl font-bold tracking-tight text-slate-900"
          to={"/products/" + product.id}
        >
          {product.name}
        </Link>
        <p className="truncate text-sm my-1">{product.details}</p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <Link
              to={"/products/" + product.id}
              className="text-xl font-bold text-slate-900"
            >
              ৳{product.price}
            </Link>
            {/* <span className="text-sm text-slate-900 line-through">$699</span> */}
          </p>

          {/* Review  */}
          <div className="flex items-center">
            {product.stock > 0 ? <span className="text-green-500">Available</span> : <span className="text-red-500">Stock out</span>}
          </div>
        </div>
        <div className="flex cursor-pointer items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </div>
      </div>
    </div>

    // <div className="card w-96 bg-base-100 shadow-xl border-2 border-slate-200 rounded-md">
    //   <figure>{/* <img src={src} alt={alt} /> */}</figure>
    //   <div className="card-body">
    //     <Link to={`/products/${product.id}`}>
    //       <h2 className="card-title text-2xl mb-2">{product.name}</h2>
    //       <p className="truncate">{product.details}</p>
    //     </Link>
    //     <div className="flex justify-between">
    //       <div>
    //         <p className="text-lg font-bold">Price: {product.price}</p>
    //         <p className="text-md">Stock: {product.stock}</p>
    //       </div>
    //       <div className="card-actions justify-start">
    //         <button className="btn btn-success">Add to Cart</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
