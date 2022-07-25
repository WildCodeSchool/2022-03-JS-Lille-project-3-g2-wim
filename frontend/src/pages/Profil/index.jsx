import UserProfil from "@components/UserProfil";
import Accordion from "@components/Accordion";
import { useParams } from "react-router-dom";
import SUser from "./style";

function User() {
  const { id } = useParams();
  return (
    <SUser>
      <UserProfil iduser={id} />
      <Accordion iduser={id} />
    </SUser>
  );
}
export default User;
