import { useEffect, useState } from "react";
import useApi from "@services/useApi";
import PropTypes from "prop-types";
import SInfoSchool from "./style";

export default function InfoSchool({ iduser }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolOption: "",
    schoolClass: "",
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
    <SInfoSchool>
      <div className="contenair">
        <form className="registerForm" onSubmit={hSubmit}>
          <label className="containerName" htmlFor="schoolOption">
            <h3> Série</h3>
            <input
              className="inputForm"
              type="text"
              name="schoolOption"
              placeholder="Série"
              value={formData.schoolOption}
              onChange={hChangeFormData}
            />
          </label>
          <label className="containerName" htmlFor="schoolOption">
            <h3>Nom de l'école</h3>
            <input
              className="inputForm"
              type="text"
              name="schoolName"
              placeholder="Nom de l'école"
              value={formData.schoolName}
              onChange={hChangeFormData}
            />
          </label>
          <label className="containerName" htmlFor="Numéro de téléphone">
            <h3>Niveau scolaire</h3>
            <input
              className="inputForm"
              type="text"
              name="schoolClass"
              placeholder="Niveau scolaire"
              value={formData.label}
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
InfoSchool.propTypes = {
  iduser: PropTypes.string.isRequired,
};
