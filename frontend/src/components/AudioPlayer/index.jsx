import AudioPlayerLoading from "@components/AudioPlayerLoading";
import PropTypes from "prop-types";
import SAudioPlayer from "./style";

export default function AudioPlayer({ id }) {
  return (
    <SAudioPlayer>
      <AudioPlayerLoading id={id} />
    </SAudioPlayer>
  );
}
AudioPlayer.propTypes = {
  id: PropTypes.string.isRequired,
};
