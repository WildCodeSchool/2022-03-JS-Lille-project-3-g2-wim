import SHome from "./style";

function Home() {
  const topics = [
    { id: 1, name: "Philosophie", img: "" },
    { id: 2, name: "Histoire Géographie", img: "" },
    { id: 3, name: "Science de la Vie et de la Terre", img: "" },
    { id: 4, name: "Physique Chimie", img: "" },
    { id: 5, name: "Mathématiques", img: "" },
    { id: 6, name: "Espagnol", img: "" },
  ];

  return (
    <SHome>
      <>
        <h1>Matières</h1>
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>{topic.name}</li>
          ))}
        </ul>
      </>
    </SHome>
  );
}

export default Home;
