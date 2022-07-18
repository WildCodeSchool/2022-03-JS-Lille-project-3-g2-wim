import avatar from "@assets/avatar.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SHeader from "./style";

function Header() {
  const { id } = useSelector((state) => state.user);

  return (
    <SHeader>
      <Link to={`/profil/${id}`}>
        <img src={avatar} alt="avatar" />
      </Link>
      <p>WIM</p>
      <img className="avatar" src={avatar} alt="avatar" />
      <Link to="/accueil">
        <p>WIM</p>
      </Link>
    </SHeader>
  );
}

export default Header;
