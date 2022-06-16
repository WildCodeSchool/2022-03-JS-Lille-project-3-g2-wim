import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import SHome from "./style";

export default function Home() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/topics").then(({ data }) => {
      setTopics(data);
    });
  }, []);
  return (
    <SHome>
      <Header />
      <>
        <h1>Matières</h1>
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>{topic.label}</li>
          ))}
        </ul>
      </>
      <Navbar />
    </SHome>
  );
}
