import { NavLink } from "react-router-dom";
import SNavBar from "./style";

const datas = [
  {
    id: 1,
    label: "/accueil",
    class1: "selectedIconHome",
    class2: "unSelectedIconHome",
  },
];

export default function NavBar() {
  return (
    <SNavBar>
      {datas.map((data) => {
        return (
          <NavLink
            key={data.id}
            to={data.label}
            className={({ isActive }) => (isActive ? data.class1 : data.class2)}
          />
        );
      })}
    </SNavBar>
  );
}
