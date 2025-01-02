'use client';

import Image from "next/image";
import Link from "next/link";
import Cardgrid from "./components/Cardgrid";
import Card from "./components/Card";
import { mens, shoes, womens } from "./data";
import React, { useEffect } from "react";

interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export default function Home() {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(()=>{
   const fetchData = async () => {
     const res = await fetch('https://fakestoreapi.com/products');
     const data = await res.json();
     const sliceData = data.slice(0, 8);
      setData(sliceData)
      setLoading(false);
   }
   fetchData();
  }, [])

  if(loading){
    return <h1 className='text-2xl'>Loading Products...</h1>
  }

  
  return (
    <div className="flex flex-col w-full">
      <section className="w-full my-5">
        <div className="w-full max-w-[1440px] mx-auto h-[50vh] md:h-[70vh] lg:h-[80vh] relative">
          <Image
            src="/hero.jpg"
            alt="Nike Hero"
            fill
            priority
            className="object-fit object-cover object-center"
          />
        </div>
        {/* <div className="text-center p-4 md:p-8 max-w-3xl mx-auto">
          <h1 className="text-xs md:text-sm font-medium">First look</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-2">Nike Air Max Pulse</h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center my-4 gap-2">
            <Link href="/product">
              <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-full hover:bg-[#111111] transition-colors">
                Notify Me
              </button>
            </Link>
            <Link href="/product">
              <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-full hover:bg-[#111111] transition-colors">
                Shop Air Max
              </button>
            </Link>
          </div>
        </div> */}
      </section>

      {/* Air Max Section */}
      <section className="w-full px-4">
        <div className="max-w-[1440px] mx-auto my-4">
          <Cardgrid
            gridtitle="Best of Air Max"
            lggrid={true}
            buttontext="Shop"
          />
        </div>
      </section>

      {/* Featured Section */}
      <section className="w-full px-4 my-10">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center mb-4">
          <h1 className="text-xl md:text-2xl font-medium">Featured</h1>
        </div>
        <div className="max-w-[1440px] mx-auto h-[50vh] md:h-[70vh] lg:h-[80vh] relative">
          <Image
            src="/hero2.png"
            alt="Nike Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="text-center p-4 md:p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-2">
            STEP INTO WHAT FEELS GOOD
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <div className="flex justify-center items-center my-4">
            <Link href="/product">
              <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-full hover:bg-[#111111] transition-colors">
                Find Your Shoe
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gear Up Section */}
      <section className="w-full px-4 my-10">
        <h1 className="text-xl md:text-2xl font-bold mb-8 max-w-[1440px] mx-auto">Gear Up</h1>
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <div className="w-full">
            <Cardgrid
              lggrid={false}
              gridtitle="Gear Up"
              buttontext="Men"
            />
          </div>
          <div className="w-full">
            <Cardgrid
              lggrid={false}
              gridtitle="Gear Up"
              buttontext="Women"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-4 my-10">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center mb-4">
          <h1 className="text-xl md:text-2xl font-medium">Don&apos;t Miss</h1>
        </div>
        <div className="max-w-[1440px] mx-auto h-[50vh] md:h-[70vh] lg:h-[80vh] relative">
          <Image
            src="/hero3.png"
            alt="Nike Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="text-center p-4 md:p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-2">
            FLIGHT ESSENTIALS
          </h2>
          <p className="text-sm md:text-base max-w-2xl mx-auto">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <div className="flex justify-center items-center my-4">
            <Link href="/product">
              <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-full hover:bg-[#111111] transition-colors">
                Shop
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="w-full px-4 my-10">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-xl md:text-2xl font-bold my-6">The Essentials</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Mans', 'Womans', 'Kids'].map((category) => (
              <div key={category} className="relative group ">
                <Image 
                  src={`/cat${category}.png`} 
                  alt={category} 
                  width={400} 
                  height={400} 
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button className="absolute bottom-6 left-6 bg-white text-black font-medium px-6 py-2 rounded-full 
                  hover:bg-[#111111] transition-transform duration-300 group-hover:scale-105 hover:text-white">
                  Shop {category}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 my-5">
        <div className="max-w-[890px] mx-auto p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="w-full flex flex-col gap-3">
              <h1 className="text-sm font-medium">Icons</h1>
              {['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'].map((item) => (
                <Link 
                  key={item}
                  href="/" 
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="w-full flex flex-col gap-3">
              <h1 className="text-sm font-medium">Shoes</h1>
              {['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'].map((item) => (
                <Link 
                  key={item}
                  href="/" 
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="w-full flex flex-col gap-3">
              <h1 className="text-sm font-medium">Clothing</h1>
              {['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops'].map((item) => (
                <Link 
                  key={item}
                  href="/" 
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="w-full flex flex-col gap-3">
              <h1 className="text-sm font-medium">Kid&apos;s</h1>
              {[
                'Infant & Toddler Shoes',
                'Kid\'s Shoes',
                'Kid\'s Clothing',
                'Kid\'s Accessories'
              ].map((item) => (
                <Link 
                  key={item}
                  href="/" 
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}