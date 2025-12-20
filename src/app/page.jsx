import React from "react";
import HeroSection from "./components/home/HeroSection";
import RecentlyAdded from "./components/home/RecentlyAdded";
import FeaturedProduct from "./components/home/FeaturedProduct";

const Home = () => {
  return (
    <>
      <HeroSection />
      <RecentlyAdded />
      <FeaturedProduct />
    </>
  );
};

export default Home;
