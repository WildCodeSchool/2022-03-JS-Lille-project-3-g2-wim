import styled from "styled-components";

export default styled.div`
  img {
    height: 3vh;
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
    transform: translateY(-92%) scale(2.3);
  }
  .iconHome,
  .iconForm,
  .iconHeart {
    height: 3vh;
    cursor: pointer;
  }
  .iconHeart:hover,
  .iconHome:hover,
  .iconForm:hover {
    filter: brightness(140%);
  }
`;
