import axios from "axios";
import React, { useState, useEffect } from "react";
import SLessonCard from "./style";
import Play from "../../assets/play-solid.svg";
import EmptyHeart from "../../assets/Images/emptyheart.svg";

export default function LessonCard() {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}${"/lessons"}`).then(({ data }) => {
      setLessons(data);
    });
  }, []);
  return (
    <SLessonCard>
      <>
        {lessons.map((lesson) => (
          <div key={lesson.id} className="CardOfLesson">
            <img className="play" src={Play} alt="play button" />
            <div className="informations">
              <h1 className="lesson"> {lesson.title}</h1>
              <h2>Hip-Hop/{lesson.duration}</h2>
            </div>
            <img className="heart" src={EmptyHeart} alt="add favourite button" />
          </div>
        ))}
      </>
    </SLessonCard>
  );
}
