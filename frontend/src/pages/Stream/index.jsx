import img from "@assets/imgAudio.png";
import SStream from "./style";

function Stream() {
  return (
    <SStream>
      <div className="contain">
        <div className="circle" />
        <img src={img} alt="audioBackground" />
      </div>
      <div className="lessonTopic">
        <p className="lesson">Fonction sinus ...</p>
        <p className="topic">Mathématique</p>
      </div>
    </SStream>
  );
}

export default Stream;
