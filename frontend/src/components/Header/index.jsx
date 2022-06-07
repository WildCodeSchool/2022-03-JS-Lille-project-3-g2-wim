import avatar from "@assets/avatar.png";
import SHeader from "./style";

function Header() {
  return (
    <SHeader>
      <img src={avatar} alt="avatar" />
      <p>WIM</p>
    </SHeader>
  );
}

export default Header;
