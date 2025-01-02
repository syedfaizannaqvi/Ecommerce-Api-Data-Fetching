'use client';
import React, { useState , useEffect} from 'react'
import Card from './Card'
import { IoChevronForward, IoChevronBack } from 'react-icons/io5'
// import { Product } from '../data'


interface Product {
    id: string,
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
  

const Cardgrid = ({ lggrid, gridtitle , buttontext }: { lggrid: boolean, gridtitle: string, buttontext: string }) => {
  const [startIndex, setStartIndex] = useState(0)
  const [apiData, setApiData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(()=>{
   const fetchData = async () => {
     const res = await fetch('https://fakestoreapi.com/products');
     const data = await res.json();
     const sliceData = data.slice(0, 8);
     setApiData(sliceData)
     setLoading(false)
   }
   fetchData();
  }, [])

  if(loading){
    return <h1 className='text-2xl'>Loading Products...</h1>
  }


  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % apiData.length)
  }

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + apiData.length) % apiData.length)
  }

  const getVisibleCards = () => {
    const cards = []
    const cardCount = lggrid ? 3 : 2
    for (let i = 0; i < cardCount; i++) {
      const index = (startIndex + i) % apiData.length
      cards.push(apiData[index])
    }
    return cards
  }

  return (
    <div className='flex flex-col'>
        <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-medium'>
                {buttontext === "Shop" ? gridtitle : `Shop ${buttontext}'s`}
            </h2>
            <div className='flex gap-1'>
                {buttontext !== "Shop" && <h1 className='text-lg font-medium mx-4 my-1'>{buttontext}</h1>}
                <button 
                    onClick={handlePrev} 
                    className='p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full'
                >
                    <IoChevronBack className='w-4 h-4' />
                </button>
                <button 
                    onClick={handleNext}
                    className='p-1.5 bg-gray-100 hover:bg-gray-200 rounded-full'
                >
                    <IoChevronForward className='w-4 h-4' />
                </button>
            </div>
        </div>
        <div className='transition-all duration-300 ease-in-out'>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${
                lggrid ? 'lg:grid-cols-3' : ''
            } gap-4`}>
                {getVisibleCards().map((item, index) => (
                    <div 
                        key={item.id} 
                        className={`
                            transition-all duration-600 ease-in-out
                            ${!lggrid && index === 1 ? 'hidden md:block' : ''}
                            ${lggrid && index === 2 ? 'hidden lg:block' : ''}
                        `}
                    >
                        <Card 
                            title={item.name}
                            category={item.category}
                            price={item.price}
                            imageUrl={item.image}
                            id={item.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Cardgrid