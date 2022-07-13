import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import SInfoSchool from "./style";

export default function InfoSchool() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolOption: "",
    phoneNumber: "",
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
            <h3>Numéro de téléphone</h3>
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
