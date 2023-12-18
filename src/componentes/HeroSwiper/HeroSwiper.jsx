import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { heroSwiperCardData } from "../../mocks/HeroSwiperCard.mock";
import HeroSwiperCard from "../HeroSwiperCard/HeroSwiperCard";
import "./HeroSwiper.scss";

export default () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {heroSwiperCardData.map((card, index) => (
        <SwiperSlide key={index}>
          <HeroSwiperCard
            cardOrder={card.cardOrder}
            background={card.background}
            topLogo={card.topLogo}
            titleText={card.titleText}
            secondText={card.secondText}
            botonPrimary={card.botonPrimary}
            botonSecondary={card.botonSecondary}
            link={card.link}
            bunnyPng={card.bunnyPng}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};