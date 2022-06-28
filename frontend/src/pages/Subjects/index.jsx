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
      .get(`${import.meta.env.VITE_BACKEND_URL}${"/topics"}`)
      .then(({ data }) => {
        setTopics(data);
      });
  }, []);

  return (
    <SSubjects>
      <Header />
      <h1>Matières</h1>
      <ul>
        {topics.map((topic) => (
          <Link to={`/cours/${topic.id}`}>
            <li className="topic" key={topic.id} value={topic.id}>
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
