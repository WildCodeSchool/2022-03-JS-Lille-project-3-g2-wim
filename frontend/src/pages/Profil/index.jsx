import UserProfil from "@components/UserProfil";
import Accordion from "@components/Accordion";
import SUser from "./style";

function User() {
  return (
    <SUser>
      <UserProfil />
      <Accordion />
    </SUser>
  );
}
export default User;
