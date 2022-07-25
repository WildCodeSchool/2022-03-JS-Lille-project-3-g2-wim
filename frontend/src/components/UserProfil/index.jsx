import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import arrow from "@assets/fleche.png";
import useApi from "@services/useApi";
import PropTypes from "prop-types";
import SUserProfil from "./style";

function UserProfil({ iduser }) {
  const [userData, setUserData] = useState([]);
  const { avatar } = useSelector((store) => store.user);
  const api = useApi();

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${iduser}`)
      .then(({ data }) => {
        setUserData(data);
      });
  }, []);

  return (
    <SUserProfil>
      <Link className="for-h1" to="/accueil" style={{ textDecoration: "none" }}>
        <img src={arrow} alt="fléche" />
        <h1>Mon profil</h1>
      </Link>
      <div className="contenairname">
        <img
          className="profilpicture"
          src={
            avatar ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/640px-Anonymous_emblem.svg.png"
          }
          alt="User avatar"
        />
        <ul>
          <li>
            <h2>
              {userData.name} {userData.firstname}
            </h2>
          </li>
          <li>{userData.email}</li>
        </ul>
      </div>
    </SUserProfil>
  );
}
UserProfil.propTypes = {
  iduser: PropTypes.string.isRequired,
};

export default UserProfil;
