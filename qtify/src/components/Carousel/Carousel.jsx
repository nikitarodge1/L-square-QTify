// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeft from './CarouselLeft/CarouselLeft'
import CarouselRight from './CarouselRight/CarouselRight'
import styles from './Carousel.module.css'
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

export default function Carousel({data, component}){

  return (
    <Swiper
        className={styles.swiper}
        spaceBetween={40}
        slidesPerView={"auto"}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
    >
        <CarouselLeft />
        <CarouselRight />

        {data?.map(song => {
            return <SwiperSlide key={song.id}>{component(song)}</SwiperSlide>
        })}
    </Swiper>
  );
};