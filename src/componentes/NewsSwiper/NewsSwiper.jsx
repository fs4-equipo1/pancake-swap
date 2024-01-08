import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NewsSwiperCardData } from "../../mocks/NewsSwiperCard";
import NewsSwiperCard from "../NewsSwiperCard/NewsSwiperCard";
import "./NewsSwiper.scss";

export default () => {
  return (
    <div className="featured-news-container">
      <div className="title-container">
        <div className="first-title">Featured</div>
        <div className="second-title">News</div>
      </div>
        <Swiper
          className="news-swiper"
          modules={[Navigation]}
          slidesPerView={4}
          navigation={true}
        >
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
    </div>
  );
};