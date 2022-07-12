import propTypes from "prop-types";
import Play from "@assets/Images/play-solid-3.svg";
import ButtonStreamFav from "@components/ButtonStreamFav";
import SFavCard from "./style";

export default function FavCard({ key, id, title, duration, musicStyle }) {
  return (
    <SFavCard>
      <div key={key} className="cardOfFav">
        <img className="play" src={Play} alt="play button" />
        <div className="informations">
          <h1 className="lesson"> {title}</h1>
          <h2>
            {musicStyle} / {duration}
          </h2>
        </div>
        <ButtonStreamFav id={id} />
      </div>
    </SFavCard>
  );
}
FavCard.propTypes = {
  key: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  duration: propTypes.number.isRequired,
  musicStyle: propTypes.string.isRequired,
};
