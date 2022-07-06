import propTypes from "prop-types";
import Play from "@assets/Images/play-solid-3.svg";
import ButtonStreamFav from "@components/ButtonStreamFav";
import { Link } from "react-router-dom";
import SLessonCard from "./style";

export default function LessonCard({ id, title, duration, musicStyle }) {
  return (
    <SLessonCard>
      <div className="cardOfLesson">
        <Link to={`/ecoute/${id}`}>
          <img className="play" src={Play} alt="play button" />
        </Link>

        <div className="informations">
          <h1 className="lesson"> {title}</h1>
          <h2>
            {musicStyle} / {duration}
          </h2>
        </div>
        <ButtonStreamFav id={id} />
      </div>
    </SLessonCard>
  );
}

LessonCard.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  duration: propTypes.number.isRequired,
  musicStyle: propTypes.string.isRequired,
};
