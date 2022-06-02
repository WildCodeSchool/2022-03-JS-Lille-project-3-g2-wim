import { useState } from "react";
import SAudioPlayerLoading from "./style";
import useInterval from "./useInterval";

export default function AudioPlayer() {
  const [timer, setTimer] = useState(0);
  const [duration, setDuration] = useState(10);
  const [listen, setListen] = useState(false);
  const [maxDuration] = useState(10);

  useInterval(() => {
    if (timer === maxDuration - 1) setListen(false);
    if (listen) setDuration(duration - 1);
  }, 1000);

  useInterval(() => {
    if (listen) setTimer(timer + 1);
  }, 1000);

  return (
    <SAudioPlayerLoading>
      <section className="positionnement">
        <div>{timer}</div>
        <div>{duration}</div>
      </section>
      <input
        onInput="rangevalue.value=value"
        className="range"
        type="range"
        min="0"
        max={maxDuration}
        step="1"
        value={timer}
        onChange={(evt) => evt.target.value}
      />

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
