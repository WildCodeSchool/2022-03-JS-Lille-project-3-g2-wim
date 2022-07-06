import IconFavAdd from "@assets/Images/fav-added.svg";
import IconFav from "@assets/Images/fav-empty.svg";
import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";
import SButtonStreamFav from "./style";

export default function ButtonStreamFav({ id }) {
  const [favData] = useState({ user_id: 2, lesson_id: id });
  const [activ, setActive] = useState(false);
  const [IconActive, setIconActiv] = useState(IconFav);
  const addFavorite = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/favorite`, favData)
      .then(() => {
        if (activ === false) {
          setActive(true);
          setIconActiv(IconFavAdd);
        } else {
          setActive(false);
          setIconActiv(IconFav);
        }
      });
  };
  const deleteFavorite = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/favorite/${id}`)
      .then(() => {
        if (activ === false) {
          setActive(true);
          setIconActiv(IconFavAdd);
        } else {
          setActive(false);
          setIconActiv(IconFav);
        }
      });
  };

  return (
    <SButtonStreamFav imgFav={IconActive}>
      <button
        alt="favorites"
        type="button"
        onClick={!activ ? addFavorite : deleteFavorite}
      />
    </SButtonStreamFav>
  );
}
ButtonStreamFav.propTypes = {
  id: PropTypes.string.isRequired,
};
