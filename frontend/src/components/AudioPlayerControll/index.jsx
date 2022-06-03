import playImg from "@assets/play-solid.svg";
import pauseImg from "@assets/pause-icon.svg";
import { useEffect, useState } from "react";
import SAudioPlayerControll from "./style";

export default function AudioPlayerControll() {
  const [playOn, setPlayOn] = useState(false);
  const [audio, setAudio] = useState(null);
  const [playOrPauseImg, setPlayOrPauseImg] = useState(playImg);

  useEffect(() => {
    setAudio(
      new Audio("http://localhost:5000/assets/espagnol5SePresenter.mp3")
    );
  }, []);

  const startOrPause = () => {
    if (playOn) {
      audio.pause();
      setPlayOn(false);
      setPlayOrPauseImg(playImg);
    } else {
      audio.play();
      setPlayOn(true);
      setPlayOrPauseImg(pauseImg);
    }
  };

  return (
    <SAudioPlayerControll>
      <button
        img={playOrPauseImg}
        alt="Lancer ou mettre pause sur le cours"
        type="button"
        onClick={startOrPause}
      />
    </SAudioPlayerControll>
  );
}
