import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Metrosideros bartlettii, commonly known as Bartlett's rātā, is a rare species of tree in the family Myrtaceae. It is only found in three patches of dense forest remnants near Piwhane / Spirits Bay in New Zealand's North Island. It reaches a height of up to 30 metres (100 feet) with a trunk diameter of 1 to 1.5 metres (3.3 to 4.9 feet). The species is known for its distinct whitish, paper-like bark and small white flowers. Bartlett's rātā was accidentally discovered in 1975 by John Bartlett near Cape Reinga and first described by John Dawson in 1985. Bartlett's rātā typically begins life growing on another plant, inhabits lowland forests, and grows near wet areas. A 2018 article documented 13 adult trees in the wild, down from 31 in 2000. Its decline has been attributed to land use changes and the introduction of common brushtail possums. In 2013, it was listed as a critically endangered species on the IUCN Red List, with a decreasing population trend.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='f1ex flex-col gap-1 text-gray-600'>
                        <li>+94-740808889</li>
                        <li>contact@loomolk.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ Loomo.lk - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
