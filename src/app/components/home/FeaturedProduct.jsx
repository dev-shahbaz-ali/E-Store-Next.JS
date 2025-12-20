import React from "react";
import Container from "../Container";
import ProductBox from "../ProductBox";

const FeaturedProduct = async () => {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones?limit=5"
  );

  const data = await response.json();
  console.log("data", data.prducts);
  return (
    <div className="p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold">Featured Products</h1>
        <div className="grid grid-cols-5 my-5 gap-5">
          {data.products.map((prod) => {
            return <ProductBox key={prod.id} product={prod} />;
          })}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProduct;
