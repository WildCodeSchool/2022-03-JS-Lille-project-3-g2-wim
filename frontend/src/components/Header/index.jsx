import Avatar from "@components/Avatar";
import { Link } from "react-router-dom";
import SHeader from "./style";

function Header() {
  return (
    <SHeader>
      <Link to="/profil/:id">
        <img className="avatar" src={Avatar} alt="avatar" />
      </Link>
      <Link to="/accueil">
        <p>WIM</p>
      </Link>
    </SHeader>
  );
}

export default Header;
