'use client'

// React Hooks
import { useRef } from 'react'

// Custom Components
import Container from './Container'
import Button from './Button'

// Swiper
import {Swiper, SwiperSlide} from 'swiper/react'
import { type Swiper as SwiperRef } from 'swiper/types'
import { Autoplay, Parallax } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/bundle'

// Custom hooks
import homeSlides from '@/lib/getSliders'

// React icons
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const HomeSwiper = () => {

    const homeSliderRef = useRef<SwiperRef>()

    return (
        <Swiper
        modules={[ Autoplay, Parallax ]}
        speed={800}
        parallax={true}
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        onInit={(swiper)=>{
          homeSliderRef.current = swiper
        }}
        >
          {homeSlides.map(({id, imageUrl, subTitle, title}) => (
            <SwiperSlide key={id}>
                <Container style={{backgroundImage: `url(${imageUrl})`}} className={`h-screen bg-scroll bg-center bg-cover bg-no-repeat bg-neutral-600/90   bg-blend-overlay`}>
                    <div className="container flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 justify-center h-full">
                        <h1 className="lg:w-[50%] w-full text-5xl md:text-6xl lg:text-7xl text-white font-bold" data-swiper-parallax="-200">{title}</h1>
                        <p className="lg:w-[50%] w-full text-2xl font-bold text-white" data-swiper-parallax='-400'>{subTitle}</p>
                        <div className="flex sm:gap-x-6 sm:flex-row flex-col gap-y-6" data-swiper-parallax="-600">
                            <Button className="text-sm text-white font-medium uppercase px-6 py-3">
                            our services
                            </Button>
                            <Button className="text-sm font-medium uppercase px-6 py-3 bg-neutral-800 text-white">
                            our projects
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
          ))}
            <div slot="container-end" className="inset-x-0 flex sm:justify-end justify-between content-end gap-x-4 absolute bottom-20 container text-neutral-100 text-xl z-50">
              <div className="p-3 border bg-transparent border-neutral-200 hover:bg-orange-500 cursor-pointer" onClick={()=>homeSliderRef.current?.slidePrev()}>
                <FaAngleLeft/>
              </div>
              <div className="p-3 border bg-transparent border-neutral-200 hover:bg-orange-500 cursor-pointer" onClick={()=>homeSliderRef.current?.slideNext()}>
                <FaAngleRight/>
              </div>
            </div>
        </Swiper>
    )
}

export default HomeSwiper

