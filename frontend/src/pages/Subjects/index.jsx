import Header from "@components/Header";
import Navbar from "@components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";
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
          <li className="topic" key={topic.id}>
            {topic.name}
          </li>
        ))}
      </ul>
      <Navbar />
    </SSubjects>
  );
}
export default Subjects;
