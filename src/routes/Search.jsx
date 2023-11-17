import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../components/Product/Product";
import axiosInstance from "../services/axiosInstance";
import { ImSpinner3 } from "react-icons/im";
import ProductList from "../components/Product/ProductList";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get("q");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axiosInstance.get(
          "api/customer/search?keyword=" + queryParams
        );
        const products = response.data;
        setProducts(products);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getProducts();
  }, [queryParams]);

  if (!products.length)
    return (
      <div className="alert alert-error rounded-sm container mx-auto my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-white">
          Sorry, {queryParams} could not found!
        </span>
      </div>
    );
  return (
    <>
      <ProductList products={products} />
      {/* <div className="container mx-auto my-5">
        <h1 className="text-lg font-bold text-center mb-5 text-green-500">
          {products.length} {products.length > 1 ? "Products" : "Product"} Found
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <Product product={p} />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Search;
