"use client";
import React, { useEffect } from "react";
import Container from "../Container";
import ProductBox from "../ProductBox";

const RecentlyAdded = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/laptops"
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <Container className="">
        <h1 className="text-4xl text-center font-bold">
          Recently Added Products
        </h1>
        <div className="grid grid-cols-5 gap-5 my-5">
          {products.map((prod) => {
            return <ProductBox key={prod.id} product={prod} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default RecentlyAdded;
