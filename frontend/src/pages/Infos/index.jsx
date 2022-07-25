import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import arrow from "../../assets/Images/arrow-retour.png";
import SAccordion from "./style";

export default function Infos() {
  const { id } = useSelector((state) => state.user);

  const [active, setActive] = useState(" ");
  const datas = [
    {
      id: 1,
      title: "Politique de confidentialité",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      title: "Conditions générales d’utilisation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      title: "Informations",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur. Version 1.0.0",
    },
  ];
  return (
    <SAccordion>
      <div className="infos-container">
        <Link
          className="button-return"
          to={`/profil/${id}`}
          style={{ textDecoration: "none" }}
        >
          <img src={arrow} alt="fleche" />
        </Link>
        <h1>Infos</h1>
      </div>
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
                  <div className="titleCategory">
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
              <div className="for-text">
                <p>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SAccordion>
  );
}
