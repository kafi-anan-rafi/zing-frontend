import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../components/Product/Product";
import axiosInstance from "../services/axiosInstance";
import { ImSpinner3 } from "react-icons/im";
import ProductList from "../components/Product/ProductList";
import auth from "../services/authService";
import { paginate } from "../utils/paginate";
import Filter from "../components/Product/Filter";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get("q");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    newProducts = paginate(products, currentPage, pageSize);
  };

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axiosInstance.get(
          "api/customer/search?keyword=" + queryParams
        );
        const products = response.data;
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [queryParams]);

  let newProducts = paginate(products, currentPage, pageSize);

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
    <div className="container mx-auto my-5 grid gap-5 grid-cols-4">
      <Filter className="col-span-1" />
      <div className="col-span-3">
        <h1 className="text-xl font-bold mb-5 text-gray-900 dark:text-white">
          Results
        </h1>
        <ProductList
          itemsCount={products.length}
          products={newProducts}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Search;
