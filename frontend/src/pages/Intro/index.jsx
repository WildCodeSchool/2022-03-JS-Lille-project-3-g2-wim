/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* eslint-enable */
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SIntro from "./style";

export default function Intro() {
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
    <SIntro>
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
              <img src={image.desktop} alt="home" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </SIntro>
  );
}
