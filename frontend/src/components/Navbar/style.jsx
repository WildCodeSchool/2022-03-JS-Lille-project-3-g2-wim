import IconHome from "@assets/Images/icon-home.svg";
import IconSelectedHome from "@assets/Images/icon-selected-home.svg";
import IconHeart from "@assets/Images/icon-heart.svg";
import IconSelectedHeart from "@assets/Images/icon-selected-heart.svg";

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

  .selectedIconHome {
    height: 40px;
    width: 40px;
    background: url(${IconSelectedHome});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.5s;
    transform-origin: center;
    transform: translateY(-50%) scale(1.5);
  }
  .unSelectedIconHome {
    height: 20px;
    width: 20px;
    background: url(${IconHome});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .selectedIconHeart {
    height: 40px;
    width: 40px;
    background: url(${IconSelectedHeart});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.5s;
    transform-origin: center;
    transform: translateY(-50%) scale(1.5);
  }
  .unselectedIconHeart {
    height: 20px;
    width: 20px;
    background: url(${IconHeart});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
