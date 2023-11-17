import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getProduct() {
      const response = await axiosInstance.get(
        `/api/customer/product/${params.id}`
      );
      const product = response.data;
      setProduct(product);
    }
    getProduct();
  }, []);
  console.log(product);

  return (
    <div className="container mx-auto my-5">
      <p className="">{product.name}</p>
      <p>{product.details}</p>
      <p>{product.price}</p>
      <p>{product.stock}</p>
    </div>
  );
};

export default ProductDetails;
