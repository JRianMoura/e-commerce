"use client";
import Joia from "./Joia";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const PopularItensCarousel = ({ joias }) => {
  console.log(joias);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="popular-joia-slider mb-8"
    >
      {joias.map((joia) => {
        return (
          <SwiperSlide key={joia._id}>
            <Joia joia={joia} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularItensCarousel;
