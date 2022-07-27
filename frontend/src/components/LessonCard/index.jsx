import PropTypes from "prop-types";
import Play from "@assets/Images/play-solid-3.svg";
import ButtonStreamFav from "@components/ButtonStreamFav";
import { Link } from "react-router-dom";
import SLessonCard from "./style";

export default function LessonCard({ id, title, duration, musicStyle, isFav }) {
  const timeInMinutes = (d) => {
    const min = Math.floor(d / 60);
    const durationForSec = d % 60;
    const sec = Math.ceil(durationForSec);
    return `${min}:${sec}`;
  };
  return (
    <SLessonCard>
      <div className="cardOfLesson">
        <div className="play-and-infos-container">
          <Link to={`/ecoute/${id}`}>
            <img className="play" src={Play} alt="play button" />
          </Link>
          <div className="informations">
            <h1 className="lesson"> {title}</h1>
            <h2>
              {musicStyle} / {timeInMinutes(duration)}
            </h2>
          </div>
        </div>
        <ButtonStreamFav id={id} isFav={isFav} />
      </div>
    </SLessonCard>
  );
}

LessonCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  musicStyle: PropTypes.string.isRequired,
  isFav: PropTypes.instanceOf(Array).isRequired,
};
