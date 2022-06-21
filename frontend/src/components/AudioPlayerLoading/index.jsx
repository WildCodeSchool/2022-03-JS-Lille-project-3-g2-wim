import { useEffect, useState } from "react";
import useInterval from "@services/useInterval";
import playImg from "@assets/play-solid.svg";
import pauseImg from "@assets/pause-icon.svg";
import AudioButton from "@components/AudioButton";
import forwardImg from "@assets/forward-icon.svg";
import rewardImg from "@assets/reward-icon.svg";
import repeatImg from "@assets/Repeat-icon.svg";
import axios from "axios";
import SAudioPlayerLoading from "./style";

export default function AudioPlayerLoading() {
  const [timer, setTimer] = useState(0);
  const [duration, setDuration] = useState(60);
  const [maxDuration] = useState(60);
  const [playOn, setPlayOn] = useState(false);
  const [audio, setAudio] = useState(null);
  const [playOrPauseImg, setPlayOrPauseImg] = useState(playImg);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}${"/lessons"}`).then(({ data }) => {
      setAudio(
        new Audio(
          `${import.meta.env.VITE_BACKEND_URL}${data[0].fileLocation}${
            data[0].fileName
          }`
        )
      );
    });
  }, []);

  useInterval(() => {
    if (timer >= maxDuration - 1) setPlayOn(false);
    if (playOn) setDuration(duration - 1);
    if (playOn) setTimer(timer + 1);
  }, 1000);
  const advanceMusic = () => {
    if (timer === maxDuration) {
      setTimer(maxDuration);
    } else {
      setTimer(timer + 10);
      setDuration(duration - 10);
      audio.fastSeek(duration + 10);
    }
  };

  const backspaceMusic = () => {
    if (timer <= 10) {
      setTimer(0);
      setDuration(maxDuration);
    } else {
      setTimer(timer - 10);
      setDuration(duration + 10);
      audio.fastSeek(duration - 10);
    }
  };
  const backToZero = () => {
    setTimer(0);
    setDuration(60);
  };

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
    <SAudioPlayerLoading>
      <section className="contain">
        <div>{timer}</div>
        <div>{duration}</div>
      </section>
      <section className="containInput">
        <input
          readOnly="readOnly"
          className="range"
          type="range"
          min="0"
          max={maxDuration}
          value={timer}
        />
      </section>

      <section className="containButton">
        <AudioButton
          img={repeatImg}
          alt="retourner en arrière sur la musique"
          funcAudio={backToZero}
        />
        <AudioButton
          img={rewardImg}
          alt="retourner en arrière sur la musique"
          funcAudio={backspaceMusic}
        />
        <AudioButton
          img={playOrPauseImg}
          alt="Cliquez pour lancer la chanson"
          funcAudio={startOrPause}
        />
        <AudioButton
          img={forwardImg}
          alt="avancer dans la musique"
          funcAudio={advanceMusic}
        />
      </section>
    </SAudioPlayerLoading>
  );
}
