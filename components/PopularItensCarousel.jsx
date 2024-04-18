"use client";
import Joia from "./Joia";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const PopularItensCarousel = ({ joias }) => {
  console.log(joias);
  return (
    <Swiper>
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
