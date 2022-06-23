import AudioPlayerLoading from "@components/AudioPlayerLoading";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import SAudioPlayer from "./style";

export default function AudioPlayer({ id }) {
  const [duration, setDuration] = useState(0);
  const [maxDuration, setMaxDuration] = useState(0);
  const [audio, setAudio] = useState(null);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [topicLabel, setTopicLabel] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lessons/${id}`)
      .then(({ data }) => {
        setImg(`../src/${data.logo}`);
        setTopicLabel(data.label);
        setDuration(data.duration);
        setMaxDuration(data.duration);
        setTitle(data.title);
        setAudio(
          new Audio(
            `${import.meta.env.VITE_BACKEND_URL}${data.fileLocation}${
              data.fileName
            }`
          )
        );
      });
  }, []);
  return (
    <SAudioPlayer>
      <div className="containStream">
        <div className="circle" />
        <img src={img} alt="audioBackground" />
      </div>
      <div className="lessonTopic">
        <p className="lesson">{title}</p>
        <p className="topic">{topicLabel}</p>
      </div>
      {duration && (
        <AudioPlayerLoading
          durationAudio={duration}
          maxDurationAudio={maxDuration}
          audio={audio}
        />
      )}
    </SAudioPlayer>
  );
}
AudioPlayer.propTypes = {
  id: PropTypes.string.isRequired,
};
