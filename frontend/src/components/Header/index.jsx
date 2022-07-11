import avatar from "@assets/avatar.png";
import { Link } from "react-router-dom";
import SHeader from "./style";

function Header() {
  return (
    <SHeader>
      <img className="avatar" src={avatar} alt="avatar" />
      <Link to="/accueil">
        <p>WIM</p>
      </Link>
    </SHeader>
  );
}

export default Header;
