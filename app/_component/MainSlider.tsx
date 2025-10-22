'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import slide1 from '../assets/images/slider-image-1.jpg'
import slide2 from '../assets/images/slider-image-2.jpg'
import slide3 from '../assets/images/slider-image-3.jpg'
import blog1 from '../assets/images/blog-img-1.jpg'
import blog2 from '../assets/images/blog-img-2.jpg'
import Image from 'next/image'
import 'swiper/css/autoplay'



export default function Slider() {
    return (
        <>
            <div className='flex '>
                <div className='w-3/4 hidden md:flex  h-[400px] '>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        className='w-full h-full'
                        
                    >
                        <SwiperSlide><Image className='w-full h-full object-cover' src={slide1} alt='' /></SwiperSlide>
                        <SwiperSlide><Image className='w-full h-full object-cover' src={slide2} alt='' /></SwiperSlide>
                        <SwiperSlide><Image className='w-full h-full object-cover' src={slide3} alt='' /></SwiperSlide>
                    </Swiper>
                </div>

                <div className='w-full md:w-1/4 h-[400px]'>
                    <Image className='w-full h-1/2  object-cover' src={blog1} alt='' />
                    <Image className='w-full h-1/2 object-cover' src={blog2} alt='' />

                </div>
            </div >
        </>
    )
}
