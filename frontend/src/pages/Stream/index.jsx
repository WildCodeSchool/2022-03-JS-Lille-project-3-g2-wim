import img from "@assets/imgAudio.png";
import AudioPlayer from "@components/AudioPlayer";
import SStream from "./style";

export default function Stream() {
  return (
    <SStream>
      <div className="containStream">
        <div className="circle" />
        <img src={img} alt="audioBackground" />
      </div>
      <div className="lessonTopic">
        <p className="lesson">Fonction sinus ...</p>
        <p className="topic">Mathématique</p>
      </div>
      <AudioPlayer />
    </SStream>
  );
}
