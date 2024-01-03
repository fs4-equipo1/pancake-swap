import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { newsSwiperCardData } from "../../mocks/HeroSwiperCard.mock";
import NewsSwiperCard from "../NewsSwiperCard/NewsSwiperCard";
import "./HeroSwiper.scss";

export default () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {newsSwiperCardData.map((card, index) => (
        <SwiperSlide key={index}>
          <NewsSwiperCard
            newImg={card.newImg}
            source={card.source}
            date={card.date}
            title={card.title}
            text={card.text}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};