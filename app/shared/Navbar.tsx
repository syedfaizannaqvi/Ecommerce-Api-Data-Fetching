"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaHeart,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full mx-auto sticky top-0 z-50 bg-white shadow-md mb-6">
      <div className="w-[85vw] mx-auto flex justify-between items-center my-4">
        <div className="flex items-center gap-2">
          <Link href={'/'}>
          <h1 className="text-2xl font-bold">BUY-<span className="text-gray-500">IT</span></h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-base font-medium">
          <Link href="/product" className="hover:text-gray-500">
            Products
          </Link>
          <Link href="/about" className="hover:text-gray-500">
            Help
          </Link>
          <Link href="/signup" className="hover:text-gray-500">
            Sign-up
          </Link>
          <Link href="/about" className="hover:text-gray-500">
            About
          </Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-full">
            <FaSearch className="text-sm font-light hover:text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              spellCheck="false"
              className="bg-gray-100 border-none outline-none w-[180px] lg:w-[200px]"
            />
          </div>
          <div className="flex items-center gap-2">
            <Link href="/cart" className="relative">
              <FaShoppingBag className="text-sm hover:text-gray-500 w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <FaHeart className="text-sm hover:text-gray-500 w-4 h-4" />
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? (
                <FaTimes className="text-sm text-gray-500" />
              ) : (
                <FaBars className="text-sm text-gray-500" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed right-0 top-[4.5rem] bg-white rounded-lg shadow-lg w-48 z-50">
          <div className="flex flex-col items-start gap-4 p-4 text-base">
            <Link href="/" className="hover:text-gray-500 w-full">
              Products
            </Link>
            <Link href="/about" className="hover:text-gray-500 w-full">
              Help
            </Link>
            <Link href="/signup" className="hover:text-gray-500 w-full">
              Sign-Up
            </Link>
            <Link href="/about" className="hover:text-gray-500 w-full">
              About
            </Link>
            <div className="flex flex-col items-start gap-4 text-sm mt-2 border-t w-full pt-4">
              <Link href="/" className="hover:text-red-500 w-full">
                Find a Store
              </Link>
              <Link href="/" className="hover:text-red-500 w-full">
                Help
              </Link>
              <Link href="/" className="hover:text-red-500 w-full">
                Join Us
              </Link>
              <Link href="/" className="hover:text-red-500 w-full">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;