// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Swiper.css';

// Import images
import calendar_day from '../../Asset/Img/calendar_day.png'
import calendar_month from '../../Asset/Img/calendar_month.png'
import calendar_year from '../../Asset/Img/calendar_year.png'
import notification from '../../Asset/Img/notification.png'
import notification2 from '../../Asset/Img/notification2.png'
import notification3 from '../../Asset/Img/notification3.png'

export default function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={true} modules={[Pagination]}
    >
      <SwiperSlide>
        <img src={calendar_day} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={calendar_month} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={calendar_year} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={notification} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={notification2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={notification3} />
      </SwiperSlide>
    </Swiper>
  );
}
