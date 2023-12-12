import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const BaseSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <h2 style={{ color: "white" }}>Slide 1</h2>
      </SwiperSlide>
      <SwiperSlide>
        <h2 style={{ color: "white" }}>Slide 2</h2>
      </SwiperSlide>
      <SwiperSlide>
        <h2 style={{ color: "white" }}>Slide 3</h2>
      </SwiperSlide>
      <SwiperSlide>
        <h2 style={{ color: "white" }}>Slide 4</h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default BaseSwiper;
