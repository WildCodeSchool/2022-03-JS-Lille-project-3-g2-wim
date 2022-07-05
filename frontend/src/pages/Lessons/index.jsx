import Header from "@components/Header";
import LessonCard from "@components/LessonCard";
import Navbar from "@components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SLessons from "./style";

function Lessons() {
  const [lessons, setLessons] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/lessons"}`)
      .then(({ data }) => {
        setLessons(data);
      });
  }, []);
  return (
    <SLessons>
      <Header />
      {lessons
        .filter((lesson) => lesson.schoolTopic_id === parseInt(id, 10))
        .map((lesson) => (
          <LessonCard
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
