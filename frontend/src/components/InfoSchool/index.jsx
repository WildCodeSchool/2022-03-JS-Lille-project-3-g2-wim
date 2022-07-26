import { useEffect, useState } from "react";
import useApi from "@services/useApi";
import PropTypes from "prop-types";
import SInfoSchool from "./style";

export default function InfoSchool({ iduser }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolOption: "",
    phoneNumber: "",
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
          <label className="containerName" htmlFor="Série">
            Série
            <input
              className="inputForm"
              type="text"
              name="schoolOption"
              placeholder="Série"
              value={formData.schoolOption}
              onChange={hChangeFormData}
            />
          </label>
          <label className="containerName" htmlFor="Nom de l'école">
            Nom de l'école
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
            Numéro de téléphone
            <input
              className="inputForm"
              type="tel"
              name="phoneNumber"
              placeholder="Numéro de téléphone"
              value={formData.phoneNumber}
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
