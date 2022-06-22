import img from "@assets/imgAudio.png";
import AudioPlayer from "@components/AudioPlayer";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import ButtonStream from "@components/ButtonStream";
import arrowDownward from "@assets/arrow_downward-5.svg";
import IconSelectedHeart from "@assets/Images/icon-selected-heart.svg";
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
        <div className="button">
          {/* <img src={IconSelectedHeart} alt="" />
          <img src={arrowDownward} alt="" /> */}
          {/* <ButtonStream img={IconSelectedHeart} />
          <ButtonStream img={arrowDownward} /> */}
          <ButtonStream img={IconSelectedHeart} alt="Favorites" />
          <ButtonStream img={arrowDownward} alt="arrow downard" />
        </div>
        <AudioPlayer />
      </div>
      <Navbar />
    </SStream>
  );
}
