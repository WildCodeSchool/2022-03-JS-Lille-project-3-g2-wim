import Header from "@components/Header";
import LessonCard from "@components/LessonCard";
import Navbar from "@components/Navbar";
import SLessons from "./style";

function Lessons() {
  return (
    <SLessons>
      <Header />
      <LessonCard />
      <Navbar />
    </SLessons>
  );
}

export default Lessons;
