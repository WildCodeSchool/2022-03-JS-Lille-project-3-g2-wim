import PropTypes from "prop-types";
import SAudioButton from "./style";

export default function AudioButton({ img, alt, funcAudio }) {
  return (
    <SAudioButton img={img}>
      <button alt={alt} type="button" onClick={funcAudio} />
    </SAudioButton>
  );
}

AudioButton.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  funcAudio: PropTypes.func,
};
AudioButton.defaultProps = {
  img: "",
  alt: "",
  funcAudio: () => {},
};
