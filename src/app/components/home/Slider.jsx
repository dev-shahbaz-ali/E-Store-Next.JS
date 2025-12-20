"use client";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://cdn.pixabay.com/photo/2019/11/15/13/23/button-4628422_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/01/09/07/44/headphone-1129896_1280.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoleY4YZwqoI5701iiQBX-xt_7GFBaimmK2g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzD50qd43FUUN8LCF_0NRlEvhtaqUcCI3XOe70ivK3cQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqkSSRK7KyoHR6QhI9wYUeTGQP-seXcOvSXB47hbyVA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrovhIjBwqeO7jCqlMH4XToUvKoowT4refGC-fFG27A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj882juKp9n_UuwpGDK9lOZyn6nda6GiFj_MwbhMjuEQ&s",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
    </div>
  );
};

export default Slider;
