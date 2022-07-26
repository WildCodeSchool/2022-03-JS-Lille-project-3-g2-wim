import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useApi from "@services/useApi";
import { toast } from "react-toastify";
import SInfoLogin from "./style";

export default function InfoLogin({ iduser, setActive }) {
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
        toast.success("Vos informations ont bien été modifiées");
        setActive(" ");
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
  setActive: PropTypes.func,
};

InfoLogin.defaultProps = {
  setActive: () => {},
};
