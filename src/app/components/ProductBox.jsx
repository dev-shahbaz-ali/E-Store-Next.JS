"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductBox = ({ product }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAddingToCart(true);

    // Add your cart logic here
    console.log("Adding to cart:", product);

    // Simulate API call delay
    setTimeout(() => {
      setIsAddingToCart(false);
      // Show success message or update cart state
    }, 500);
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Add your buy now logic here
    console.log("Buy now:", product);
    // You might want to add to cart and redirect to checkout
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]">
      <Link href={`/store/product-details/${product.id}`}>
        <div className="relative w-full h-48 flex items-center justify-center group">
          <Image
            src={product.thumbnail || product.images[0]}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-md transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-4 flex flex-col justify-between h-[160px]">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-pink-500 font-bold mt-2">${product.price}</p>

        <div className="flex flex-col gap-2 mt-3">
          <button
            onClick={handleAddToCart}
            className="bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-md transition-colors border border-gray-300"
          >
            Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="bg-pink-500 cursor-pointer hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
