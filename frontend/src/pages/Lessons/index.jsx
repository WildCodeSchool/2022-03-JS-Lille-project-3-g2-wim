import Header from "@components/Header";
import LessonCard from "@components/LessonCard";
import Navbar from "@components/Navbar";
import useApi from "@services/useApi";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SLessons from "./style";

function Lessons() {
  const [lessons, setLessons] = useState([]);
  const [fav, setFav] = useState([]);
  const { id } = useParams();
  const api = useApi();
  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/lessons"}`)
      .then(({ data }) => {
        setLessons(data);
      });
    api
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/favorite"}`)
      .then(({ data }) => {
        setFav(data);
      });
  }, []);
  return (
    <SLessons>
      <Header />
      {lessons
        .filter((lesson) => lesson.schoolTopic_id === parseInt(id, 10))
        .map((lesson) => (
          <LessonCard
            isFav={fav
              .filter((f) => {
                return f.id === lesson.id;
              })
              .map(() => {
                return true;
              })}
            key={lesson.id}
            id={lesson.id}
            title={lesson.title}
            duration={lesson.duration}
            musicStyle={lesson.musicStyle}
          />
        ))}

      <Navbar />
    </SLessons>
  );
}

export default Lessons;
