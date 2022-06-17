import Header from "@components/Header";
import Navbar from "@components/Navbar";
import SSubjects from "./style";

function Subjects() {
  const topics = [
    { id: 1, name: "Philosophie", img: "" },
    { id: 2, name: "Histoire Géographie", img: "" },
    { id: 3, name: "Science de la Vie et de la Terre", img: "" },
    { id: 4, name: "Physique Chimie", img: "" },
    { id: 5, name: "Mathématiques", img: "" },
    { id: 6, name: "Espagnol", img: "" },
  ];
  return (
    <SSubjects>
      <Header />
      <h1>Matières</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
      <Navbar />
    </SSubjects>
  );
}

export default Subjects;
