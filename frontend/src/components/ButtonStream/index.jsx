import PropTypes from "prop-types";
import SButtonStream from "./style";

export default function ButtonStream({ img, alt }) {
  return (
    <SButtonStream img={img}>
      <button
        alt={alt}
        type="button"
        // onClick={funcAudio}
      />
    </SButtonStream>
  );
}

ButtonStream.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  // funcAudio: PropTypes.func,
};
ButtonStream.defaultProps = {
  img: "",
  alt: "",
  // funcAudio: () => {},
};
