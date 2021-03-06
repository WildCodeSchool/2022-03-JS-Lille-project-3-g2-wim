/* eslint-disable import/no-unresolved */
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* eslint-enable import/no-unresolved */
import { Link } from "react-router-dom";
import SHome from "./style";

export default function Home() {
  const imagesIntro = [
    {
      id: 1,
      key: "logo",
      desktop: "../../../src/assets/Images/home-Logo.png",
      mobile: "../../../src/assets/Images/homeLogo.jpg",
      alt: "logo de WIM",
    },
    {
      id: 2,
      key: "image1",
      desktop: "../../../src/assets/Images/home2.png",
      mobile: "../../../src/assets/Images/home1.jpg",
      alt: "Dans un univers de paix et d'amour, la musique serait le langage universel",
    },
    {
      id: 3,
      key: "image2",
      desktop: "../../../src/assets/Images/home-3.png",
      mobile: "../../../src/assets/Images/home2.jpg",
      alt: "La musique peut rendre les gens meilleurs, il suffit de la leur injecter constamment",
    },
    {
      id: 4,
      key: "image3",
      desktop: "../../../src/assets/Images/home-4.png",
      mobile: "../../../src/assets/Images/home3.jpg",
      alt: "Chaque enfant qu'on enseigne est un Homme qu'on gagne",
      url: "/connexion",
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
          <SwiperSlide key={imageIntro.id}>
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
