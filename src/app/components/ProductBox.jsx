"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductBox = ({ product }) => {
  if (!product) return null;

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

      <div className="mt-4 flex flex-col justify-between h-[120px]">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-pink-500 font-bold mt-2">${product.price}</p>
        <button className="mt-3 bg-pink-500 cursor-pointer hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
