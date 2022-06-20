import img from "@assets/imgAudio.png";
import AudioPlayer from "@components/AudioPlayer";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import SStream from "./style";

export default function Stream() {
  return (
    <SStream>
      <Header />
      <div className="globalContainer">
        <div className="containStream">
          <div className="circle" />
          <img src={img} alt="audioBackground" />
        </div>
        <div className="lessonTopic">
          <p className="lesson">Fonction sinus ...</p>
          <p className="topic">Mathématique</p>
        </div>
        <AudioPlayer />
      </div>
      <Navbar />
    </SStream>
  );
}
