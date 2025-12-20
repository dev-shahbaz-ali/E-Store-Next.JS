import React from "react";
import Slider from "./Slider";
import Container from "../Container";

const HeroSection = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 p-6 md:p-8 lg:p-12 xl:p-16 rounded-xl">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            One stop solution <span className="text-pink-500">E-Store</span>
          </h1>

          <div className="space-y-3 md:space-y-4">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              Discover the latest headphones, speakers, mobiles, tablets etc.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 font-medium">
              Exclusive deals just for you!
            </p>
          </div>

          <button className="mt-4 md:mt-6 bg-gray-100 text-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg lg:text-xl font-medium hover:bg-gray-200 transition-all duration-300 hover:shadow-lg">
            Shop Now
          </button>
        </div>

        <div className="w-full md:w-1/2 h-[450px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl flex justify-center items-center mt-6 md:mt-0">
          <Slider />
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
