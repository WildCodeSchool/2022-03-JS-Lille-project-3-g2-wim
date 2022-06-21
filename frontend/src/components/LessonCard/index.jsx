import propTypes from "prop-types";
import SLessonCard from "./style";
import Play from "../../assets/play-solid.svg";
import EmptyHeart from "../../assets/Images/emptyheart.svg";

export default function LessonCard({ key, title, duration, musicStyle }) {
  return (
    <SLessonCard>
      <div key={key} className="CardOfLesson">
        <img className="play" src={Play} alt="play button" />
        <div className="informations">
          <h1 className="lesson"> {title}</h1>
          <h2>
            {musicStyle} / {duration}
          </h2>
        </div>
        <img className="heart" src={EmptyHeart} alt="add favourite button" />
      </div>
    </SLessonCard>
  );
}

LessonCard.propTypes = {
  key: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  duration: propTypes.number.isRequired,
  musicStyle: propTypes.string.isRequired,
};
