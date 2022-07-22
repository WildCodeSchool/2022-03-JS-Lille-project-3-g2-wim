import Avatar from "@components/Avatar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SHeader from "./style";

function Header() {
  const { id } = useSelector((state) => state.user);

  return (
    <SHeader>
      <Link to={`/profil/${id}`}>
        <img className="avatar" src={Avatar} alt="avatar" />
      </Link>
      <Link to="/accueil">
        <p>WIM</p>
      </Link>
    </SHeader>
  );
}

export default Header;
