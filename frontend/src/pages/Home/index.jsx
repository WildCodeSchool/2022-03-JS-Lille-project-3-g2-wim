/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* eslint-enable */
import { Link } from "react-router-dom";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SHome from "./style";

function Home() {
  const imagesIntro = [
    {
      key: "logo",
      desktop: "../../../src/assets/Images/home-Logo.png",
      mobile: "../../../src/assets/Images/homeLogo.jpg",
      alt: "logo de WIM",
    },
    {
      key: "image1",
      desktop: "../../../src/assets/Images/home2.png",
      mobile: "../../../src/assets/Images/home1.jpg",
      alt: "Dans un univers de paix et d'amour, la musique serait le langage universel",
    },
    {
      key: "image2",
      desktop: "../../../src/assets/Images/home-3.png",
      mobile: "../../../src/assets/Images/home2.jpg",
      alt: "La musique peut rendre les gens meilleurs, il suffit de la leur injecter constamment",
    },
    {
      key: "image3",
      desktop: "../../../src/assets/Images/home-4.png",
      mobile: "../../../src/assets/Images/home3.jpg",
      alt: "Chaque enfant qu'on enseigne est un Homme qu'on gagne",
      url: "/Subjects",
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
        {imagesIntro.map((imageIntro) => (
          <SwiperSlide>
            {imageIntro.key === "image3" ? (
              <Link to={imageIntro.url} key={imageIntro.key}>
                <picture>
                  <source
                    srcSet={imageIntro.mobile}
                    media="(max-width: 700px)"
                  />
                  <img src={imageIntro.desktop} alt={imageIntro.alt} />
                </picture>
              </Link>
            ) : (
              <picture key={imageIntro.key}>
                <source srcSet={imageIntro.mobile} media="(max-width: 700px)" />
                <img src={imageIntro.desktop} alt={imageIntro.alt} />
              </picture>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </SHome>
  );
}
