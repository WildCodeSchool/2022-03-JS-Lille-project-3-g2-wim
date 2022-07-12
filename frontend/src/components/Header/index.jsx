import avatar from "@assets/avatar.png";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import SHeader from "./style";

function Header() {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);

  const deconnect = () => {
    dispatch({ type: "USER_LOGIN" });
  };

  return (
    <SHeader>
      <img className="avatar" src={avatar} alt="avatar" />
      <Link to="/accueil">
        <p>WIM</p>
      </Link>
      {/* {connected && ( */}
      <button type="button" onClick={deconnect} className="deconnect">
        Deconnexion
      </button>
      {/* )} */}
    </SHeader>
  );
}

export default Header;
