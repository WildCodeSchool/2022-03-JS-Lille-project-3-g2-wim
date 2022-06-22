import arrowDownward from "@assets/arrow_downward-5.svg";
import { saveAs } from "file-saver";
import PropTypes from "prop-types";
import SButtonStreamDown from "./style";

export default function ButtonStreamDown({ audioUrl }) {
  const saveFile = () => {
    saveAs(audioUrl);
  };
  return (
    <SButtonStreamDown img={arrowDownward}>
      <button alt="downLoad" type="button" onClick={saveFile} />
    </SButtonStreamDown>
  );
}
ButtonStreamDown.propTypes = {
  audioUrl: PropTypes.string,
};
ButtonStreamDown.defaultProps = {
  audioUrl: "",
};
