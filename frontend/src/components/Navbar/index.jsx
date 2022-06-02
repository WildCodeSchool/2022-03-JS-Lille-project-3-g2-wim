import Iconform from "@assets/Images/icon-form.svg";
import IconHome from "@assets/Images/icon-home.svg";
import IconHeart from "@assets/Images/icon-heart.svg";
import SNav from "./style";

export default function Navbar() {
  return (
    <SNav>
      <div className="navbar">
        <img src={Iconform} alt="iconform" />
        <img src={IconHome} alt="iconhome" />
        <img src={IconHeart} alt="iconheart" />
      </div>
    </SNav>
  );
}
