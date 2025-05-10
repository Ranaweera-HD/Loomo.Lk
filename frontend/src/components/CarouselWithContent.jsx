import { Carousel } from "@material-tailwind/react";
import { assets } from "../assets/assets";

export function CarouselWithContent() {
    return (
        <Carousel className="rounded-xl">
            <img
                src={assets.hero_img}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            {/* <div className='sm:w-1/2 flex items-center justify-center py-10 sm:py-10 object-cover'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-20'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-20'>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div> */}
            <img
        src={assets.hero_img}
        alt="image 2"
        className="h-full w-full object-cover"
      />
           
            <img
                src={assets.hero_img}
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}
export default CarouselWithContent