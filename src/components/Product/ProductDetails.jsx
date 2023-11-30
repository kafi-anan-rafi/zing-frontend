import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axiosInstance.get(
          `/api/customer/product/${params.id}`
        );
        const product = response.data;
        setProduct(product);
      } catch (error) {
        const {
          response: {
            data: { statusCode },
          },
        } = error;
        if (statusCode === 401) {
          auth.removeAuthToken();
          navigate("/login");
        }
      }
    }
    getProduct();
  }, []);
  console.log(product);

  return (
    <div class="bg-gray-100 dark:bg-gray-800 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                class="w-full h-full object-cover"
                src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                alt="Product Image"
              />
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {product.name}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {product.details}
            </p>
            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span class="text-gray-600 dark:text-gray-300">
                  {" "}
                  ৳{product.price}
                </span>
              </div>
              <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span class="text-gray-600 dark:text-gray-300">
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            <div>
              <span class="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {product.details}
              </p>
            </div>
            <div class="flex -mx-2 my-4">
              <div class="px-2">
                <select class="cursor-pointer appearance-none rounded-full border font-bold bg-orange-500 border-gray-200 py-2 px-4 flex items-end pb-1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="w-1/2 px-2">
                <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container mx-auto my-5">
    //   <p className="">{product.name}</p>
    //   <p>{product.details}</p>
    //   <p>{product.price}</p>
    //   <p>{product.stock}</p>
    // </div>
  );
};

export default ProductDetails;
