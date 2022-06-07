import styled from "styled-components";

export default styled.header`
  background-color: var(--colorBleuPrincipal);
  height: 8vh;
  display: flex;
  align-items: center;
  img {
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    margin: 0 1.6rem;
  }
  p {
    color: var(--colorTextLight);
    font: var(--fontTitleBold);
  }
`;
