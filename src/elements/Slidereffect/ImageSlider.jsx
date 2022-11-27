import React, { useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination} from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { useInView } from "react-intersection-observer";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination';
import { Box } from '@mui/material';
import 'swiper/css/autoplay';
const ImageSlider = ({ slides }) => {
  
  const { ref, inView } = useInView({
    /* Optional options */
  });
  
  SwiperCore.use([Autoplay]);

  return (
    <section ref={ref}>
      <Swiper
        freeMode={true}
        loop={true}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
        effect={'flip'}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
      >
        <SwiperSlide>
        <Box
        component="img"
        sx={{
          position: 'fixed',
          objectFit: 'cover',
          display: 'block',
          width: '100%',
          height: '100vh',
        }}
        src={slides[0]}
        alt={slides[0]}
      />
        </SwiperSlide>
        <SwiperSlide>
        <Box
        component="img"
        sx={{
          display: 'block',
          width: '100%',
          height: '100vh',
        }}
        src={slides[1]}
        alt={slides[1]}
      />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ImageSlider;