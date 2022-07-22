import IconFavAdd from "@assets/Images/fav-added.svg";
import IconFav from "@assets/Images/fav-empty.svg";
import useApi from "@services/useApi";
import { useState } from "react";
import PropTypes from "prop-types";
import SButtonStreamFav from "./style";

export default function ButtonStreamFavList({ id }) {
  const [activ, setActive] = useState(false);
  const [IconActive, setIconActiv] = useState(IconFavAdd);
  const api = useApi();

  const deleteFavorite = () => {
    api
      .delete(`${import.meta.env.VITE_BACKEND_URL}/favorite/${id}`)
      .then(() => {
        if (activ === true) {
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
      <button alt="favorites" type="button" onClick={deleteFavorite} />
    </SButtonStreamFav>
  );
}
ButtonStreamFavList.propTypes = {
  id: PropTypes.string.isRequired,
};
