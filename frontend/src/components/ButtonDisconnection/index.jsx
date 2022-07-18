import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SButtonStreamDown from "./style";

export default function ButtonDisconnection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deconnect = () => {
    dispatch({ type: "USER_LOGOUT" });
    navigate("/connexion");
  };
  return (
    <SButtonStreamDown>
      <div className="container">
        <input
          type="button"
          onClick={deconnect}
          className="deconnect"
          value="Deconnexion"
        />
      </div>
    </SButtonStreamDown>
  );
}
