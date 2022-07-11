import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import SInfoSchool from "./style";

export default function InfoSchool() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    setFormData(newData);
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
        ...formData,
      })
      .then(({ data }) => {
        setFormData(data);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`)
      .then(({ data }) => {
        // setUserData(data);
        setFormData(data);
      });
  }, []);

  return (
    <SInfoSchool>
      <div className="contenair">
        <form className="registerForm" onSubmit={hSubmit}>
          <label className="containerName" htmlFor="Adresse mail">
            <h3>Adresse mail</h3>
            <input
              className="inputForm"
              type="text"
              name="email"
              placeholder="Adresse mail"
              value={formData.email}
              onChange={hChangeFormData}
            />
          </label>
          <label className="containerName" htmlFor="Mot de passe">
            <h3>Mot de passe</h3>

            <input
              className="inputForm"
              type="password"
              id="pass"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={hChangeFormData}
            />
          </label>

          <button type="submit" className="button">
            validez
          </button>
        </form>
      </div>
    </SInfoSchool>
  );
}
