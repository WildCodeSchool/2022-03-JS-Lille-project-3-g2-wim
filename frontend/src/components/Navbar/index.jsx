import { Link } from "react-router-dom";
import { useState } from "react";
import Subjects from "@pages/Subjects";
import IconFormImg from "@assets/Images/icon-form.svg";
import IconHomeImg from "@assets/Images/icon-home.svg";
import IconHeartImg from "@assets/Images/icon-heart.svg";
import IconSelectedHome from "@assets/Images/icon-selected-home.svg";
import IconSelectedHeart from "@assets/Images/icon-selected-heart.svg";
import IconSelectedForm from "@assets/Images/icon-selected-form.svg";
import ButtonNav from "@components/ButtonNav";
import SNav from "./style";

export default function Navbar() {
  const [iconHome, setIconHome] = useState(true);
  const [iconForm, setIconForm] = useState(false);
  const [iconHeart, setIconHeart] = useState(false);

  const changeIconHome = () => {
    setIconHome(true);
    setIconForm(false);
    setIconHeart(false);
  };
  const changeIconForm = () => {
    setIconForm(true);
    setIconHome(false);
    setIconHeart(false);
  };
  const changeIconHeart = () => {
    setIconHeart(true);
    setIconForm(false);
    setIconHome(false);
  };
  return (
    <SNav>
      <div className="navbar">
        <div className="form">
          <Link to="/subjects" onClick={Subjects}>
            <ButtonNav
              selected={iconForm}
              imgIcon={IconFormImg}
              func={changeIconForm}
              imgSelected={IconSelectedForm}
              alt="Accès au formulaire"
              class1="iconForm"
              class2="iconSelectedForm"
            />
          </Link>
        </div>

        <div className="home">
          <Link to="/subjects" onClick={Subjects}>
            <ButtonNav
              selected={iconHome}
              imgIcon={IconHomeImg}
              func={changeIconHome}
              imgSelected={IconSelectedHome}
              alt="Accès aux cours"
              class1="iconHome"
              class2="iconSelectedHome"
            />
          </Link>
        </div>

        <div className="heart">
          <Link to="/subjects" onClick={Subjects}>
            <ButtonNav
              selected={iconHeart}
              imgIcon={IconHeartImg}
              func={changeIconHeart}
              imgSelected={IconSelectedHeart}
              alt="Accès aux favoris"
              class1="iconHome"
              class2="iconSelectedHeart"
            />
          </Link>
        </div>
      </div>
    </SNav>
  );
}
