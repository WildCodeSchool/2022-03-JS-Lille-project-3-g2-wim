import { useState } from "react";
import PropTypes from "prop-types";
import useInterval from "@services/useInterval";
import playImg from "@assets/play-solid.svg";
import pauseImg from "@assets/pause-icon.svg";
import AudioButton from "@components/AudioButton";
import forwardImg from "@assets/forward-icon.svg";
import rewardImg from "@assets/reward-icon.svg";
import repeatImg from "@assets/Repeat-icon.svg";
import Slider from "@mui/material/Slider";
import ButtonStreamFav from "@components/ButtonStreamFav";
import ButtonStreamDown from "@components/ButtonStreamDown";
import SAudioPlayerLoading from "./style";

export default function AudioPlayerLoading({
  durationAudio,
  maxDurationAudio,
  audio,
  id,
}) {
  const [duration, setDuration] = useState(durationAudio);
  const [maxDuration] = useState(maxDurationAudio);
  const [timer, setTimer] = useState(0);
  const [playOn, setPlayOn] = useState(false);
  const [playOrPauseImg, setPlayOrPauseImg] = useState(playImg);

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
    setDuration(durationAudio);
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
  const firstToTime = () => {
    const min = Math.floor(timer / 60);
    const timeForSec = timer % 60;
    const sec = Math.ceil(timeForSec);
    return `${min}:${sec}`;
  };
  const secondToTime = () => {
    const min = Math.floor(duration / 60);
    const durationForSec = duration % 60;
    const sec = Math.ceil(durationForSec);
    return `${min}:${sec}`;
  };

  return (
    <SAudioPlayerLoading>
      <div className="favDownloadContainer">
        <ButtonStreamFav id={id} />
        <ButtonStreamDown audioUrl={audio.src} />
      </div>
      <section className="contain">
        <div>{firstToTime(timer)}</div>
        <div>{secondToTime(duration)}</div>
      </section>
      <section className="containInput">
        <Slider value={timer} min={0} max={maxDuration} />
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
AudioPlayerLoading.propTypes = {
  durationAudio: PropTypes.number.isRequired,
  maxDurationAudio: PropTypes.number.isRequired,
  audio: PropTypes.instanceOf(Audio).isRequired,
  id: PropTypes.string.isRequired,
};
