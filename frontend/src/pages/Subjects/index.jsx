import Header from "@components/Header";
import Navbar from "@components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SSubjects from "./style";

function Subjects() {
  const [topics, setTopics] = useState([]);
  // General topics for the moment. To customize when authentification is done with user topics
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/not-empty-topics"}`)
      .then(({ data }) => {
        setTopics(data);
      });
  }, []);

  return (
    <SSubjects>
      <Header />
      <h1>Matières</h1>
      <ul className="listContainer">
        {topics.map((topic) => (
          <Link
            className="topic"
            to={`/cours/${topic.schoolTopic_id}`}
            key={topic.label}
          >
            <li value={topic.id}>
              <img src={`../src/${topic.icon}`} alt="logo de la matière" />{" "}
              {topic.label}
            </li>
          </Link>
        ))}
      </ul>
      <Navbar />
    </SSubjects>
  );
}
export default Subjects;
