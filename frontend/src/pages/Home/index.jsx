// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SHome from "./style";

export default function Home() {
  const images = [
    {
      desktop: "../../../src/assets/home-Logo.png",
      mobile: "../../../src/assets/homeLogo.jpg",
    },
    {
      desktop: "../../../src/assets/home2.png",
      mobile: "../../../src/assets/home2.jpg",
    },
    {
      desktop: "../../../src/assets/home-3.png",
      mobile: "../../../src/assets/home3.jpg",
    },
    {
      desktop: "../../../src/assets/home-4.png",
      mobile: "../../../src/assets/home4.jpg",
    },
  ];

  return (
    <SHome>
      <Swiper
        cssMode
        navigation
        pagination
        mousewheel
        keyboard
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide>
            <picture>
              <source srcSet={image.mobile} media="(max-width: 700px)" />
              <img src={image.destop} alt="home" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </SHome>
  );
}
