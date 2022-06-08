import styled from "styled-components";

export default styled.div`
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
    transition: 0.5s;
    transform-origin: center;
    transform: translateY(-92%) scale(3.5);
  }
  .iconHome,
  .iconForm,
  .iconHeart {
    height: 3.3vh;
    cursor: pointer;
  }
  .iconHeart:hover,
  .iconHome:hover,
  .iconForm:hover {
    filter: brightness(140%);
  }
`;
