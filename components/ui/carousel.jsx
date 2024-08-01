import React, { useRef, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const DivCarousel = ({src="1", judul="", link="",judulDua=""})=>{
  const matches = useMediaQuery('(min-width: 1024px)');
  console.log(matches)
  return (
        <div className='w-[100%] h-max flex justify-start items-center ff'>
          <img src={`/carousel/${!matches ? "mobile/" : ""}${src}.jpg`} className='hidden lg:block object-contain' />
          <div className='absolute text-white left-6 lg:left-40 text-start'>
            <div className='w-[18vw] lg:w-[8vw] -mt-6 mb-4 lg:mb-6 animasi_satu'>
              <img src={`/carousel/label/${src}.png`} className='object-contain w-full h-full'/>
            </div>
            <div className='mb-4 lg:mb-16 animasi_dua'>
              <p className='text-sm lg:text-3xl font-bold'>{judul}</p>
              {judulDua && <p className='text-sm lg:text-3xl font-bold'>{judulDua}</p>}
            </div>
            <div className={`cursor-pointer text-sm lg:text-md more-carousel flex rounded-full border-4 border-[#fff] items-center gap-1 lg:gap-4 w-max py-0 lg:py-1 px-4 lg:px-5 animasi_tiga ${src==4 ? 'more-bayangan': ''}`}>
              <span className='font-bold text-2xl'>More</span>
              <em className=''></em>
            </div>
          </div>
        </div>
  )
}

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    const elemet = document.getElementsByClassName("swiper-pagination-bullet-active")
    console.log(elemet)
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4900,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="slide"
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <DivCarousel
            src="1"
            judul="Premium Bakery Filling"
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <DivCarousel
            src="2"
            judul="Frozen Half Baked Pastry"
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <DivCarousel
            src="3"
            judul="Premium Bakery Dairy"
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <DivCarousel
            src="4"
            judul=""
            link=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
