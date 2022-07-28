import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import useApi from "@services/useApi";
import SChangeMail from "./style";

export default function ChangeMail({ iduser, setActive }) {
  const [formData, setFormData] = useState({
    email: "",
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
        setActive(" ");
        toast.success(`Vos modifications ont bien été enregistrées`);
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
    <SChangeMail>
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

          <button type="submit" className="button">
            Validez
          </button>
        </form>
      </div>
    </SChangeMail>
  );
}
ChangeMail.propTypes = {
  iduser: PropTypes.string.isRequired,
  setActive: PropTypes.func,
};

ChangeMail.defaultProps = {
  setActive: () => {},
};
