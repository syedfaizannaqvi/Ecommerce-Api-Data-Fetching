"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import { notFound } from "next/navigation";

interface Product {
  id: string;
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

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${res.statusText}`);
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (!product) return;
    
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: quantity,
    });
  };

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

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-[1240px] min-h-screen mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {product.title}
            </h1>
            <p className="text-xl text-gray-700 capitalize">{product.category}</p>
          </div>

          <div className="flex items-center">
            <p className="text-2xl font-medium">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Only show size selector for clothing/shoes categories */}
          {(product.category.includes('clothing') || 
            product.category.includes('shoes')) && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Select Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {[6, 7, 8, 9, 10, 11].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 rounded-md py-3 hover:border-black transition-colors"
                  >
                    UK {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <div className="w-1/2 sm:w-auto flex items-center gap-4">
                <p className="text-gray-900 whitespace-nowrap">Quantity:</p>
                <div className="flex-1 flex items-center justify-center gap-4 border border-gray-200 rounded-lg px-4 py-2">
                  <button
                    onClick={decreaseQuantity}
                    className="text-gray-500 hover:text-primary-dark transition-colors"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="text-gray-500 hover:text-primary-dark transition-colors"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full sm:flex-1 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Rating Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Rating</h3>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <span>{product.rating.rate}/5</span>
              <span className="text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          {/* Delivery & Returns */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Free Delivery and Returns</h3>
            <p className="text-gray-700">
              Free standard delivery on orders over $50.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
type Params = {
  params: {
    id: string; // Add other required fields if necessary
  };
};
type PageProps = {
  params: {
    id: string;
  };
};



