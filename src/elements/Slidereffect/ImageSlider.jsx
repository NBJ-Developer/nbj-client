import React, { useState } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination} from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Box } from '@mui/material';

const ImageSlider = ({ slides }) => {
  SwiperCore.use([Autoplay]);

  return (
    <section>
      <Swiper
        freeMode={true}
        grabCursor={true}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper'
        allowSlideNext={true}
        allowSlidePrev={true}
        effect={'fade'}
        slidesPerView={1}
        spaceBetween={30}
        autoplay
      >
        <SwiperSlide>
        <Box
        component="img"
        sx={{
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