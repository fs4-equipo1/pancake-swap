import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NewsSwiperCardData } from "../../mocks/NewsSwiperCard.mock";
import NewsSwiperCard from "../NewsSwiperCard/NewsSwiperCard";
import "./NewsSwiper.scss";

export default () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
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
    </div>
  );
};
