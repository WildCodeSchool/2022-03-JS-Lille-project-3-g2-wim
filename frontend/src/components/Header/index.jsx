import Avatar from "@components/Avatar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SHeader from "./style";

function Header() {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const deconnect = () => {
    dispatch({ type: "USER_LOGOUT" });
    navigate("/connexion");
  };

  return (
    <SHeader>
      <Link to="/profil/:id">
        <img className="avatar" src={Avatar} alt="avatar" />
      </Link>
      <Link to="/accueil">
        <p>WIM</p>
      </Link>
      {email && (
        <input
          type="button"
          onClick={deconnect}
          className="deconnect"
          value="Deconnexion"
        />
      )}
    </SHeader>
  );
}

export default Header;
