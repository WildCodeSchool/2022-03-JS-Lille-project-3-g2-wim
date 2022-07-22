import Avatar from "@components/Avatar";
import { Link } from "react-router-dom";
import SHeader from "./style";

function Header() {
  return (
    <SHeader>
      <Avatar />
      <Link to="/accueil">
        <p>WIM</p>
      </Link>
    </SHeader>
  );
}

export default Header;
