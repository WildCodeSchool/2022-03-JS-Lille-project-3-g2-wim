// import IconFormImg from "@assets/Images/icon-form.svg";
// import IconHomeImg from "@assets/Images/icon-home.svg";
// import IconHeartImg from "@assets/Images/icon-heart.svg";
// import IconSelectedHome from "@assets/Images/icon-selected-home.svg";
// import IconSelectedHeart from "@assets/Images/icon-selected-heart.svg";
// import IconSelectedForm from "@assets/Images/icon-selected-form.svg";
import styled from "styled-components";

export default styled.ul`
  background-color: white;
  height: 6vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -9px 15px #24222240;

  .selectedIcon {
    height: 30px;
    width: 30px;
    background: red;
  }
  .unSelectedIcon {
    height: 20px;
    width: 20px;
    background-color: red;
  }
`;
