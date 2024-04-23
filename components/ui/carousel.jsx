import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='w-[100%] h-[85vh] flex justify-start items-center'>
            <img src="/carousel/1.jpg" className='hidden lg:block' />
            <p>assslamualaikum</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[85vh]'>
            <img src="/carousel/2.jpg" className='hidden lg:block w-full h-full' />
            <p>assslamualaikum</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
