/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* eslint-enable */
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SHome from "./style";

function Home() {
  const images = [
    {
      desktop: "../../../src/assets/Images/home-Logo.png",
      mobile: "../../../src/assets/Images/homeLogo.jpg",
    },
    {
      desktop: "../../../src/assets/Images/home2.png",
      mobile: "../../../src/assets/Images/home1.jpg",
    },
    {
      desktop: "../../../src/assets/Images/home-3.png",
      mobile: "../../../src/assets/Images/home2.jpg",
    },
    {
      desktop: "../../../src/assets/Images/home-4.png",
      mobile: "../../../src/assets/Images/home3.jpg",
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
              <img src={image.desktop} alt="home" />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </SHome>
  );
}

export default Home;
