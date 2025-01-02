"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaFilter, FaSortAmountDown, FaChevronDown } from "react-icons/fa";
import Card from "../components/Card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Product = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [toggles, setToggles] = useState({
    showByPrize: false,
    sortBy: false,
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await res.json();
        setProducts(data);
        // Extract unique categories
        const uniqueCategories : string[] = Array.from(new Set(data.map((product: Product) => product.category)));
        setCategories(uniqueCategories);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleToggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full my-5">
      <section className="w-[95%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-medium">
            Products ({filteredProducts.length})
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="bg-black text-white px-4 py-2 rounded-full flex items-center"
            >
              {showFilter ? 'Hide' : 'Show'} Filters{" "}
              <span>
                <FaFilter className="w-4 h-4 mx-3" />
              </span>
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-full flex items-center"
              onClick={() => handleToggle("sortBy")}
            >
              Sort By{" "}
              <span>
                <FaSortAmountDown className="w-4 h-4 mx-3" />
              </span>
            </button>
            {toggles.sortBy && (
              <div className="absolute flex flex-col right-3 top-[9.5rem] md:top-[10.5rem] bg-white rounded-lg shadow-xl w-[200px] z-50 gap-2 p-2">
                <button
                  className="text-base text-black font-medium hover:text-gray-700 border-b border-gray-200 pb-2"
                  onClick={() => setSelectedCategory('all')}
                >
                  All Products
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    className="text-base text-black font-medium hover:text-gray-700 border-b border-gray-200 pb-2 capitalize"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="w-[95%] mx-auto flex justify-between my-5">
        <section
          className={`max-w-[200px] w-[95%] mx-auto z-50 flex flex-col bg-white ${
            showFilter ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-2 border-r border-gray-200">
            {/* Categories */}
            <div className="flex flex-col gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm text-start font-medium capitalize hover:text-black ${
                    selectedCategory === category ? 'text-black' : 'text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="flex flex-col gap-2 border-t border-gray-200 pt-2 mt-4">
              <button
                className="text-sm text-black font-medium hover:text-black flex items-center justify-between"
                onClick={() => handleToggle("showByPrize")}
              >
                Show By Price <FaChevronDown className="w-2 h-2 mx-3" />
              </button>
              {toggles.showByPrize && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      Under $50
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      $50 - $100
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-sm text-gray-700 font-medium hover:text-black">
                      Over $100
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-screen-xl mx-auto">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex justify-center">
                <Card
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  imageUrl={product.image}
                  id={product.id.toString()}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;