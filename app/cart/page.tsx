"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import Summery from "../components/Summery";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleWishlist = (name: string) => {
    alert(`${name} added to wishlist`);
  };

  return (
    <main className="w-full min-h-screen bg-white py-6 md:py-6">
      <div className="w-full md:max-w-7xl lg:w-[85%] mx-auto px-4">
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <h1 className="text-2xl font-medium">Opss! </h1>
            <p className="text-gray-600 mb-6">Seems like you havent added anything to your cart yet</p>
            <Link
              href="/products/ceramics"
              className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {/* Cart Items */}
            <div className="w-full md:w-[60%] mt-6">
              <div className="flex flex-col p-4 bg-gray-100 rounded-lg">
                <h1 className="text-base md:text-xl font-medium text-primary-dark font-satoshi">
                  Free Delivery
                </h1>
                <p className="text-sm text-gray-500 font-satoshi">
                  Apply to orders over $140 or more{" "}
                  <Link href="/" className="text-primary-dark font-medium">
                    View Details
                  </Link>
                </p>
              </div>
              <h1 className="text-3xl md:text-4xl font-medium text-primary-dark font-satoshi p-4">
                Bag
              </h1>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b border-gray-200 pb-4"
                >
                  <div className="flex items-center gap-4 p-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={140}
                      height={200}
                      className="shadow-md"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-gray-500 text-sm">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-gray-500 text-sm gap-2">
                          Size <span className="font-medium">L</span>
                        </p>
                        <p className="text-gray-500 text-sm gap-2">
                          Quantity{" "}
                          <span className="font-medium">{item.quantity}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <button
                          className="text-gray-500 text-sm"
                          onClick={() => handleWishlist(item.name)}
                        >
                          <FaHeart className="text-black w-6 h-6 hover:text-gray-500" />
                        </button>
                        <button
                          className="text-gray-500 text-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTrashCan className="text-black w-6 h-6 hover:text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <p className="text-gray-500 text-sm gap-2">
                      Price <span className="font-medium">£{item.price}</span>
                    </p>
                    <div className="flex gap-2">
                      <button
                        className="text-sm border p-1 rounded-md shadow-md hover:translate-y-1"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <FaMinus className=" w-4 h-4" />
                      </button>
                      <button
                        className="text-sm border p-1 rounded-md shadow-md hover:translate-y-1"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <FaPlus className="text-black w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="my-10">
              <Summery />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;