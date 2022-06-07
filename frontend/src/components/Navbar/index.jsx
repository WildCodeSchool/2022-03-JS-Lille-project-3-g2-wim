import { Link } from "react-router-dom";
import { useState } from "react";
import Subjects from "@pages/Subjects";
import IconForm from "@assets/Images/icon-form.svg";
import IconHome from "@assets/Images/icon-home.svg";
import IconHeart from "@assets/Images/icon-heart.svg";
import IconSelectedHome from "@assets/Images/icon-selected-home.svg";
import IconSelectedHeart from "@assets/Images/icon-selected-heart.svg";
import IconSelectedForm from "@assets/Images/icon-selected-form.svg";
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
            <button type="button" onClick={changeIconForm}>
              {iconForm ? (
                <img
                  className="iconSelectedForm"
                  src={IconSelectedForm}
                  alt="iconSelectedForm"
                />
              ) : (
                <img className="iconform" src={IconForm} alt="iconForm" />
              )}
            </button>
          </Link>
        </div>

        <div className="home">
          <Link to="/subjects" onClick={Subjects}>
            <button type="button" onClick={changeIconHome}>
              {iconHome ? (
                <img
                  className="iconSelectedHome"
                  src={IconSelectedHome}
                  alt="iconSelectedHome"
                />
              ) : (
                <img className="iconHome" src={IconHome} alt="iconHome" />
              )}
            </button>
          </Link>
        </div>

        <div className="heart">
          <Link to="/subjects" onClick={Subjects}>
            <button type="button" onClick={changeIconHeart}>
              {iconHeart ? (
                <img
                  className="iconSelectedHeart"
                  src={IconSelectedHeart}
                  alt="iconSelectedHome"
                />
              ) : (
                <img className="iconHeart" src={IconHeart} alt="iconHeart" />
              )}
            </button>
          </Link>
        </div>
      </div>
    </SNav>
  );
}
