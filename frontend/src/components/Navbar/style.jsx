import styled from "styled-components";

export default styled.nav`
  .navbar {
    background-color: white;
    height: 8vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    box-shadow: 0px -9px 15px #d2d2d240;
  }

  img {
    height: 3.3vh;
  }

  button {
    border: none;
    background-color: transparent;
  }

  .iconSelectedHome,
  .iconSelectedForm,
  .iconSelectedHeart {
    height: 9vh;
    transition: 0.5s;
    transform: translateY(-37%);
  }
  .iconHome,
  .iconForm,
  .iconHeart {
    height: 3.3vh;
  }
`;
