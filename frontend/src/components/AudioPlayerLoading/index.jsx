import { useState } from "react";
import useInterval from "@services/useInterval";
import AudioButton from "@components/AudioButton";
import forwardImg from "@assets/forward-icon.svg";
import rewardImg from "@assets/reward-icon.svg";
import repeatImg from "@assets/Repeat-icon.svg";
import SAudioPlayerLoading from "./style";

export default function AudioPlayerLoading() {
  const [timer, setTimer] = useState(0);
  const [duration, setDuration] = useState(60);
  const [listen, setListen] = useState(false);
  const [maxDuration] = useState(60);

  useInterval(() => {
    if (timer >= maxDuration - 1) setListen(false);
    if (listen) setDuration(duration - 1);
    if (listen) setTimer(timer + 1);
  }, 1000);
  const advanceMusic = () => {
    setTimer(timer + 10);
    setDuration(duration - 10);
  };

  const backspaceMusic = () => {
    setTimer(timer - 10);
    setDuration(duration + 10);
  };
  const backToZero = () => {
    setTimer(0);
    setDuration(60);
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
        <button
          type="button"
          onClick={() => {
            setListen(true);
          }}
        >
          play
        </button>
        <AudioButton
          img={forwardImg}
          alt="avancer dans la musique"
          funcAudio={advanceMusic}
        />
      </section>
    </SAudioPlayerLoading>
  );
}
