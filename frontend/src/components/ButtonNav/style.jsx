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
