import { useState } from "react";
import useInterval from "@services/useInterval";
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

  return (
    <SAudioPlayerLoading>
      <section className="contain">
        <div>{timer}</div>
        <div>{duration}</div>
      </section>
      <section className="containInput">
        <input
          className="range"
          type="range"
          min="0"
          max={maxDuration}
          value={timer}
        />
      </section>

      <button
        type="button"
        onClick={() => {
          setListen(true);
        }}
      >
        play
      </button>
    </SAudioPlayerLoading>
  );
}
