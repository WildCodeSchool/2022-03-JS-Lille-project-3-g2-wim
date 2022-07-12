import EmptyHeart from "@assets/Images/emptyheart.svg";
import FavAdded from "@assets/Images/favAdded2.svg";
import useApi from "@services/useApi";
import { useState } from "react";
import PropTypes from "prop-types";
import SButtonLessonFav from "./style";

export default function ButtonLessonFav({ id }) {
  const [formData] = useState({ user_id: 2, lesson_id: id });
  const [activ, setActive] = useState(false);
  const [iconActive, setIconActiv] = useState(EmptyHeart);
  const api = useApi();
  const addFavorite = () => {
    api.post(`${import.meta.env.VITE_BACKEND_URL}/favorite`, formData).then();
    if (activ === false) {
      setActive(true);
      setIconActiv(FavAdded);
    } else {
      setActive(false);
      setIconActiv(EmptyHeart);
    }
  };
  const deleteFavorite = () => {
    api
      .delete(`${import.meta.env.VITE_BACKEND_URL}/favorite/${id}`, formData)
      .then();
    if (activ === false) {
      setActive(true);
      setIconActiv(FavAdded);
    } else {
      setActive(false);
      setIconActiv(EmptyHeart);
    }
  };

  return (
    <SButtonLessonFav imgFav={iconActive}>
      <button
        alt="favorites"
        type="button"
        onClick={!activ ? addFavorite : deleteFavorite}
      />
    </SButtonLessonFav>
  );
}
ButtonLessonFav.propTypes = {
  id: PropTypes.number,
};
ButtonLessonFav.defaultProps = {
  id: 0,
};
