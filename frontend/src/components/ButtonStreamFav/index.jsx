import IconFavAdd from "@assets/Images/fav-added.svg";
import IconFav from "@assets/Images/fav-empty.svg";
import useApi from "@services/useApi";
import { useState } from "react";
import propTypes from "prop-types";
import SButtonStreamFav from "./style";

export default function ButtonStreamFav({ id, isFav }) {
  const [favData] = useState({ lesson_id: id });
  const [activ, setActive] = useState(isFav[0]);
  const [iconActiv, setIconActiv] = useState(IconFav);
  const api = useApi();

  const addFavorite = () => {
    api
      .post(`${import.meta.env.VITE_BACKEND_URL}/favorite`, favData)
      .then(() => {
        setActive(true);
        setIconActiv(IconFav);
      });
  };
  const deleteFavorite = () => {
    api
      .delete(`${import.meta.env.VITE_BACKEND_URL}/favorite/${id}`)
      .then(() => {
        setActive(false);
        setIconActiv(IconFav);
      });
  };

  return (
    <SButtonStreamFav imgFav={activ ? IconFavAdd : iconActiv}>
      <button
        alt="favorites"
        type="button"
        onClick={!activ ? addFavorite : deleteFavorite}
      />
    </SButtonStreamFav>
  );
}
ButtonStreamFav.propTypes = {
  id: propTypes.number.isRequired,
  isFav: propTypes.bool.isRequired,
};
