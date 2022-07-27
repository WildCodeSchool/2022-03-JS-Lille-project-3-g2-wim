import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import useApi from "@services/useApi";
import SChangePassword from "./style";

export default function ChangePassword({ iduser, setActive }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const api = useApi();

  const hChangeFormData = (evt) => {
    const newData = { ...formData };
    newData[evt.target.name] = evt.target.value;
    setFormData(newData);
  };

  const hSubmit = (evt) => {
    evt.preventDefault();

    if (formData.password !== formData.password2) {
      toast.error(`Vos mots de passe ne correspondent pas`);
      delete formData.password2;
    } else {
      delete formData.password2;
      api
        .put(`${import.meta.env.VITE_BACKEND_URL}/users/${iduser}`, {
          ...formData,
        })
        .then(({ data }) => {
          setFormData(data);
          setActive(" ");
          toast.success(`Votre mot de passe a été modifié`, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${iduser}`)
      .then(({ data }) => {
        setFormData(data);
      });
  }, []);

  return (
    <SChangePassword>
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
          <label className="containerName" htmlFor="Nouveau mot de passe">
            Nouveau mot de passe
            <input
              className="inputForm"
              type="password"
              id="pass"
              name="password"
              placeholder="Mot de passe"
              onChange={hChangeFormData}
            />
          </label>
          <label
            className="containerName"
            htmlFor="Confirmez le nouveau mot de passe"
          >
            Confirmez le nouveau mot de passe
            <input
              className="inputForm"
              type="password"
              id="pass2"
              name="password2"
              placeholder="Nouveau mot de passe"
              onChange={hChangeFormData}
            />
          </label>
          <button type="submit" className="button">
            Validez
          </button>
        </form>
      </div>
    </SChangePassword>
  );
}
ChangePassword.propTypes = {
  iduser: PropTypes.string.isRequired,
  setActive: PropTypes.func,
};

ChangePassword.defaultProps = {
  setActive: () => {},
};
