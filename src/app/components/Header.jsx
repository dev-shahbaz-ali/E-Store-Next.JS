"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Container from "./Container";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-xl p-4 sticky top-0 z-50 shadow-md">
      <Container className="flex justify-between items-center flex-col md:flex-row gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-pink-500 text-3xl md:text-4xl font-bold">
            E-Store <b className="text-black">.</b>
          </span>
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-full md:max-w-[500px] flex items-center mx-0 md:mx-4">
          <input
            type="text"
            placeholder="Search For Products....."
            className="text-gray-800 px-4 py-3 outline-none border border-gray-300 rounded-l-full w-full cursor-pointer focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
          />
          <button className="bg-pink-500 text-white rounded-r-full px-4 md:px-6 py-4 border-none cursor-pointer hover:bg-pink-600 transition-colors">
            <FaSearch size={18} />
          </button>
        </div>

        <NavBar />
      </Container>
    </header>
  );
};

export default Header;

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center space-x-4 md:space-x-6">
      <ul className="flex space-x-4 md:space-x-6">
        <li>
          <Link
            href="/"
            className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/store"
            className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
          >
            Store
          </Link>
        </li>
      </ul>

      {/* Cart Icon */}
      <div className="relative">
        <FiShoppingCart
          size={24}
          className="cursor-pointer text-gray-800 hover:text-pink-500 transition-colors"
        />
        <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          3
        </span>
      </div>

      {/* Profile Dropdown */}
      {/* <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-none border-none cursor-pointer text-gray-800 hover:text-pink-500 transition-colors"
        >
          <FiUser size={24} />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full right-0 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col min-w-[150px] z-100 mt-2">
            <Link
              href="/profile"
              className="px-4 py-2.5 text-gray-800 no-underline hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="/orders"
              className="px-4 py-2.5 text-gray-800 no-underline hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              Orders
            </Link>
            <Link
              href="/settings"
              className="px-4 py-2.5 text-gray-800 no-underline hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              Settings
            </Link>
            <Link
              href="/logout"
              className="px-4 py-2.5 text-gray-800 no-underline hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              Logout
            </Link>
          </div>
        )}
      </div> */}
    </nav>
  );
};
