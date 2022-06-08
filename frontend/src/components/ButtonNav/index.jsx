import React from "react";
import PropTypes from "prop-types";
import SButtonNav from "./style";

export default function ButtonNav({
  imgIcon,
  func,
  imgSelected,
  alt,
  class1,
  class2,
  selected,
}) {
  return (
    <SButtonNav>
      <button type="button" onClick={func}>
        {selected ? (
          <img className={class2} src={imgSelected} alt={alt} />
        ) : (
          <img className={class1} src={imgIcon} alt={alt} />
        )}
      </button>
    </SButtonNav>
  );
}

ButtonNav.propTypes = {
  imgIcon: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  imgSelected: PropTypes.string.isRequired,
  class1: PropTypes.string.isRequired,
  class2: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  alt: PropTypes.string.isRequired,
};
