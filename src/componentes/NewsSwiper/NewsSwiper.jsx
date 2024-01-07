import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NewsSwiperCardData } from "../../mocks/NewsSwiperCard";
import NewsSwiperCard from "../NewsSwiperCard/NewsSwiperCard";
import "./NewsSwiper.scss";

export default () => {
  return (
    <div>
      <Swiper
        className="news-swiper-container"
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        navigation={{
          nextElel: ".swiper-button-prev",
          prevElel: ".swiper-button-next",
        }}
      >
        <div className="swiper-button-prev"></div>

        {NewsSwiperCardData.map((card, index) => (
          <SwiperSlide className="news-swiper-slide" key={index}>
            <NewsSwiperCard
              image={card.image}
              from={card.from}
              date={card.date}
              cardTitle={card.cardTitle}
              cardText={card.cardText}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next"></div>
    </div>
  );
};
