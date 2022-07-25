import { useState } from "react";
import student from "@assets/student.svg";
import login from "@assets/login.svg";
import agenda from "@assets/agenda.svg";
import book from "@assets/book.svg";
import card from "@assets/credit-card.svg";
import info from "@assets/info-7.svg";
import logout from "@assets/logout.svg";
import InfoSchool from "@components/InfoSchool";
import InfoLogin from "@components/InfoLogin";
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
      components: <InfoLogin iduser={iduser} />,
    },
    { id: 3, title: "Mon agenda", img: agenda, components: "" },

    { id: 4, title: "Mes notes", img: book, components: "" },
    {
      id: 5,
      title: "Informations bancaires",
      img: card,
      components: "",
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
      id: 7,
      title: "Paramètres notifications",
      img: student,
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
