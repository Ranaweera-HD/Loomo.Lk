import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItems from '../components/ProductItems';

const LatesCollection = () => {

    const { products } = useContext(ShopContext);
const [latestProducts,setLatestProducts] = useState([]);

useEffect(()=>{
    setLatestProducts(products.slice(0,10));
},[])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:texxt-base text-gray-600'>
                    Metrosideros bartlettii, commonly known as Bartlett's rātā, is a rare species of tree in the family Myrtaceae. It is only found in three patches of dense forest remnants near Piwhane / Spirits Bay in New Zealand's North Island. It reaches a height of up to 30 metres (100 feet) with a trunk diameter of 1 to 1.5 metres (3.3 to 4.9 feet). The species is known for its distinct whitish, paper-like bark and small white flowers. Bartlett's rātā was accidentally discovered in 1975 by John Bartlett near Cape Reinga and first described by John Dawson in 1985. Bartlett's rātā typically begins life growing on another plant, inhabits lowland forests, and grows near wet areas. A 2018 article documented 13 adult trees in the wild, down from 31 in 2000. Its decline has been attributed to land use changes and the introduction of common brushtail possums. In 2013, it was listed as a critically endangered species on the IUCN Red List, with a decreasing population trend.
                </p>
            </div>

            {/* rendering products */}

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
{
    latestProducts.map((item,index)=>(
        <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
    ))
}
</div>
        </div>
    )
}

export default LatesCollection
