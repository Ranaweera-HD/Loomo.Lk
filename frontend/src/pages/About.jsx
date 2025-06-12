import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <b className='text-gray-800'>Welcome to Loomo.lk – Where Style Meets Comfort.</b>
          <p>At Loomo.lk, we believe clothing is more than just fabric — it's an expression of who you are. We are a Sri Lankan fashion destination bringing you thoughtfully crafted pieces that blend timeless design with everyday comfort. Whether you're dressing for work, a night out, or just lounging in style, we have something for everyone.</p>
          <p>Our collections are inspired by modern trends, cultural roots, and a passion for quality. From chic casuals to elegant essentials, Loomo.lk is your go-to place for clothing that makes you feel confident and look great.Every thread tells a story — and we’re here to help you tell yours.</p>
        </div>
      </div>

<div className='text-xl py-4'>
<Title text1={'WHY'} text2={'CHOOSE US'} />
</div>

<div className='flex flex-col md:flex-row text-sm mb-20'>
<div className='border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
  <b>Quality Assurance:</b>
  <p className='text-gray-600'>Quality in garment manufacturing is a very broad subject as it encompasses both process and product as you will learn later. But it basically constitutes the characteristics of a salable good that determine its desirability and which can be controlled by a manufacturer to meet certain basic requirements.</p>
</div>
<div className='border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
  <b>Convenience:</b>
  <p className='text-gray-600'>Quality in garment manufacturing is a very broad subject as it encompasses both process and product as you will learn later. But it basically constitutes the characteristics of a salable good that determine its desirability and which can be controlled by a manufacturer to meet certain basic requirements.</p>
</div>
<div className='border px-10 md:px-16 py-8 sm:py20 flex flex-col gap-5'>
  <b>Exceptional Customer Service:</b>
  <p className='text-gray-600'>Quality in garment manufacturing is a very broad subject as it encompasses both process and product as you will learn later. But it basically constitutes the characteristics of a salable good that determine its desirability and which can be controlled by a manufacturer to meet certain basic requirements.</p>
</div>
</div>

<NewsletterBox/>
    </div>
  )
}

export default About
