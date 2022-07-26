import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useApi from "@services/useApi";
import SInfoLogin from "./style";

export default function InfoLogin({ iduser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const api = useApi();

  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    setFormData(newData);
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    api
      .put(`${import.meta.env.VITE_BACKEND_URL}/users/${iduser}`, {
        ...formData,
      })
      .then(({ data }) => {
        setFormData(data);
      });
  };

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${iduser}`)
      .then(({ data }) => {
        setFormData(data);
      });
  }, []);

  return (
    <SInfoLogin>
      <div className="contenair">
        <form className="registerForm" onSubmit={hSubmit}>
          <label className="containerName" htmlFor="Adresse mail">
            Adresse mail
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
            Mot de passe
            <input
              className="inputForm"
              type="password"
              id="pass"
              name="password"
              placeholder="Mot de passe"
              onChange={hChangeFormData}
            />
          </label>
          <button type="submit" className="button">
            validez
          </button>
        </form>
      </div>
    </SInfoLogin>
  );
}
InfoLogin.propTypes = {
  iduser: PropTypes.string.isRequired,
};
