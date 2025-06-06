import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItems from '../components/ProductItems'


const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProducts = products.filter((item)=>(item.bestSeller))
        setBestSeller(bestProducts.slice(0,5))
    },[])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Welcome To Loomo.lk Best Seller Product Section
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSeller.map((item,index)=>(
            <ProductItems key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller

