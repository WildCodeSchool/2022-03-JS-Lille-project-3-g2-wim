import avatar from "@assets/avatar.png";
import { Link } from "react-router-dom";
import SHeader from "./style";

function Header() {
  return (
    <SHeader>
      <Link to="/profil/:id">
        <img src={avatar} alt="avatar" />
      </Link>
      <p>WIM</p>
    </SHeader>
  );
}

export default Header;
