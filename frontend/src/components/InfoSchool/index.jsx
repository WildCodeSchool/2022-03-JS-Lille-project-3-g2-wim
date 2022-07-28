import { useEffect, useState } from "react";
import useApi from "@services/useApi";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import SInfoSchool from "./style";

export default function InfoSchool({ iduser, setActive }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolOption: "",
    schoolClass_Id: "",
  });
  const [dataSchoolClass, setDataSchoolClass] = useState([]);

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
      })
      .catch(() => {
        toast.error("La modification n'a pas pu être prise en compte");
      });
  };

  useEffect(() => {
    api
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${iduser}`)
      .then(({ data }) => {
        setFormData(data);
      });
    api
      .get(`${import.meta.env.VITE_BACKEND_URL}/schoolClass`)
      .then(({ data }) => {
        setDataSchoolClass(data);
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
          <label className="containerName" htmlFor="schoolClass_Id">
            Niveau scolaire
            <select
              className="inputForm"
              type="input"
              name="schoolClass_Id"
              placeholder="Niveau scolaire"
              onChange={hChangeFormData}
            >
              <option>{formData.label}</option>
              {dataSchoolClass.map((dataSC) => {
                return (
                  <option
                    value={dataSC.id}
                    key={dataSC.id}
                    onChange={hChangeFormData}
                  >
                    {dataSC.label}
                  </option>
                );
              })}
            </select>
          </label>
          <button type="submit" className="button">
            Validez
          </button>
        </form>
      </div>
    </SInfoSchool>
  );
}

InfoSchool.propTypes = {
  iduser: PropTypes.string.isRequired,
  setActive: PropTypes.func,
};

InfoSchool.defaultProps = {
  setActive: () => {},
};
