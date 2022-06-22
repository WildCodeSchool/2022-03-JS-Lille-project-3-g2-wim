// import { Link } from "react-router-dom";
// import { useState } from "react";
// import IconFormImg from "@assets/Images/icon-form.svg";
// import IconHomeImg from "@assets/Images/icon-home.svg";
// import IconHeartImg from "@assets/Images/icon-heart.svg";
// import IconSelectedHome from "@assets/Images/icon-selected-home.svg";
// import IconSelectedHeart from "@assets/Images/icon-selected-heart.svg";
// import IconSelectedForm from "@assets/Images/icon-selected-form.svg";
// import ButtonNav from "@components/ButtonNav";
// import SNav from "./style";

// export default function Navbar() {
// const [iconHome, setIconHome] = useState(true);
// const [iconForm, setIconForm] = useState(false);
// const [iconHeart, setIconHeart] = useState(false);
// const buttonsNav = [
//   {
//     id: 1,
//     name: "form",
//     selected: iconForm,
//     imgIcon: IconFormImg,
//     changeIcon() {
//       setIconForm(true);
//       setIconHome(false);
//       setIconHeart(false);
//     },
//     imgSelected: IconSelectedForm,
//     alt: "Accès au formulaire",
//     class1: "iconForm",
//     class2: "iconSelectedForm",
//     linkToPage: "/login",
//   },
//   {
//     id: 2,
//     name: "home",
//     selected: iconHome,
//     imgIcon: IconHomeImg,
//     changeIcon() {
//       setIconHome(true);
//       setIconForm(false);
//       setIconHeart(false);
//     },
//     imgSelected: IconSelectedHome,
//     alt: "Accès aux cours",
//     class1: "iconHome",
//     class2: "iconSelectedHome",
//     linkToPage: "/home",
//   },
//   {
//     id: 3,
//     name: "heart",
//     selected: iconHeart,
//     imgIcon: IconHeartImg,
//     changeIcon() {
//       setIconHeart(true);
//       setIconForm(false);
//       setIconHome(false);
//     },
//     imgSelected: IconSelectedHeart,
//     alt: "Accès aux favoris",
//     class1: "iconHeart",
//     class2: "iconSelectedHeart",
//     linkToPage: "/stream",
//   },
// ];
//   return (
//     <SNav>
//       <div className="navbar">
//         {buttonsNav.map((buttonNav) => {
//           return (
//             <div className={buttonNav.name} key={buttonNav.id}>
//               <Link to={buttonNav.linkToPage}>
//                 <ButtonNav
//                   selected={buttonNav.selected}
//                   imgIcon={buttonNav.imgIcon}
//                   func={buttonNav.changeIcon}
//                   imgSelected={buttonNav.imgSelected}
//                   alt={buttonNav.alt}
//                   class1={buttonNav.class1}
//                   class2={buttonNav.class2}
//                 />
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </SNav>
//   );
// }
import { NavLink } from "react-router-dom";
import SNavBar from "./style";

const icons = [
  {
    id: 1,
    label: "/subjects",
    class1: "selectedIcon",
    class2: "unSelectedIcon",
  },
  {
    id: 2,
    label: "/home",
    class1: "selectedIcon",
    class2: "unSelectedIcon",
  },
  {
    id: 3,
    label: "/stream",
    class1: "selectedIcon",
    class2: "unSelectedIcon",
  },
];

export default function NavBar() {
  return (
    <SNavBar>
      {icons.map((icon) => {
        return (
          <NavLink
            key={icon.id}
            to={icon.label}
            className={({ isActive }) => (isActive ? icon.class1 : icon.class2)}
          />
        );
      })}
    </SNavBar>
  );
}
