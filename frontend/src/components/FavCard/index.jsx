import propTypes from "prop-types";
import Play from "@assets/Images/play-solid-3.svg";
import ButtonStreamFavList from "@components/ButtonStreamFavList";
import SFavCard from "./style";

export default function FavCard({ id, title, duration, musicStyle }) {
  return (
    <SFavCard>
      <div className="cardOfFav">
        <div className="play-and-infos-container">
          <img className="play" src={Play} alt="play button" />
          <div className="informations">
            <h1 className="lesson"> {title}</h1>
            <h2>
              {musicStyle} / {duration}
            </h2>
          </div>
        </div>
        <ButtonStreamFavList id={id} />
      </div>
    </SFavCard>
  );
}
FavCard.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  duration: propTypes.number.isRequired,
  musicStyle: propTypes.string.isRequired,
};
