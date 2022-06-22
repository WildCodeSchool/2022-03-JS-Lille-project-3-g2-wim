import AudioPlayer from "@components/AudioPlayer";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import { useParams } from "react-router-dom";
import SStream from "./style";

export default function Stream() {
  const { id } = useParams();
  return (
    <SStream>
      <Header />
      <div className="globalContainer" />
      <AudioPlayer id={id} />
      <Navbar />
    </SStream>
  );
}
