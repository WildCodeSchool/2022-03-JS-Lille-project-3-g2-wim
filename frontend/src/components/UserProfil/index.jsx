import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import avatar from "@assets/avatar.png";
import arrow from "@assets/fleche.png";
import axios from "axios";
import SUserProfil from "./style";

function UserProfil() {
  const [userData, setUserData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`)
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
        <img className="photoprofil" src={avatar} alt="avatar" />
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

export default UserProfil;
