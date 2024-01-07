import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NewsSwiperCardData } from "../../mocks/NewsSwiperCard.jsx";
import NewsSwiperCard from "../NewsSwiperCard/NewsSwiperCard";
import "./NewsSwiper.scss";

export default () => {
  return (
      <Swiper
        className="news-swiper-container"
        modules={[Navigation]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={4}
      >
        {NewsSwiperCardData.map((card, index) => (
          <SwiperSlide key={index}>
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
  );
};
