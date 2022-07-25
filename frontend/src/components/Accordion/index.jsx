import { useState } from "react";
import student from "@assets/student.svg";
import login from "@assets/login.svg";
import info from "@assets/info-7.svg";
import logout from "@assets/logout.svg";
import InfoSchool from "@components/InfoSchool";
import ChangePassword from "@components/ChangePassword";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ButtonDisconnection from "@components/ButtonDisconnection";
import SAccordion from "./style";

export default function Accordion({ iduser }) {
  const [active, setActive] = useState(" ");
  const datas = [
    {
      id: 1,
      title: "Informations scolaires",
      img: student,
      components: <InfoSchool iduser={iduser} />,
    },
    {
      id: 2,
      title: "Modifier le mot de passe",
      img: login,
      components: <ChangePassword iduser={iduser} />,
    },
    {
      id: 6,
      title: (
        <Link className="about" to="/infos">
          À propos
        </Link>
      ),
      img: info,
      components: "",
    },
    {
      id: 8,
      title: "Se déconnecter",
      img: logout,
      components: <ButtonDisconnection />,
    },
  ];

  return (
    <SAccordion iduser={iduser}>
      <div className="accordion">
        {datas.map((data) => (
          <div key={data.id}>
            <div className="accordionHeading">
              <div className="container">
                <button
                  className="containerbutton"
                  type="button"
                  onClick={() => setActive(data.title)}
                >
                  <div className="logo">
                    <img src={data.img} alt="img" />
                    <p> {data.title}</p>
                  </div>
                </button>
              </div>
            </div>

            <div
              className={`${
                active === data.title ? "show" : ""
              }accordionContent`}
            >
              {data.components}
            </div>
          </div>
        ))}
      </div>
    </SAccordion>
  );
}
Accordion.propTypes = {
  iduser: PropTypes.string.isRequired,
};
