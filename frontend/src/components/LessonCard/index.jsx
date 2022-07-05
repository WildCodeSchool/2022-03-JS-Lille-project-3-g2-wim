import propTypes from "prop-types";
import Play from "@assets/Images/play-solid-3.svg";
import ButtonLessonFav from "@components/ButtonLessonFav";
import { Link } from "react-router-dom";
import SLessonCard from "./style";

export default function LessonCard({ key, id, title, duration, musicStyle }) {
  return (
    <SLessonCard>
      <div key={key} className="cardOfLesson">
        <Link to={`/ecoute/${id}`} key={key}>
          <img className="play" src={Play} alt="play button" />
        </Link>

        <div className="informations">
          <h1 className="lesson"> {title}</h1>
          <h2>
            {musicStyle} / {duration}
          </h2>
        </div>
        <ButtonLessonFav id={id} />
      </div>
    </SLessonCard>
  );
}

LessonCard.propTypes = {
  id: propTypes.string.isRequired,
  key: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  duration: propTypes.number.isRequired,
  musicStyle: propTypes.string.isRequired,
};
