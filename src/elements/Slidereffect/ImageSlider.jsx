import {Swiper, SwiperSlide} from 'swiper/react'
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination';
import { Box } from '@mui/material';
import 'swiper/css/autoplay';

const ImageSlider = ({ slides }) => {

  return (
    <section>
      <Swiper
        onSlideChange={(swiper) => {
          localStorage.setItem('swiperSlideIndex', swiper.activeIndex);
          console.log(swiper.activeIndex)
        }}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="mySwiper"
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