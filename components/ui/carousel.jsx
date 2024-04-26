import React, { useRef, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const DivCarousel = ({src="1", logo="", judul="", link=""})=>{
  const matches = useMediaQuery('(min-width: 1024px)');
  console.log(matches)
  return (
        <div className='w-[100%] h-max flex justify-start items-center'>
          <img src={`/carousel/${!matches ? "mobile/" : ""}${src}.jpg`} className='hidden lg:block' />
          <div className='absolute'>
            <p >{judul}</p>
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
          <DivCarousel
            src="1"
            logo=""
            judul=""
            link=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <DivCarousel
            src="2"
            logo=""
            judul=""
            link=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
