import styled from "styled-components";

export default styled.header`
  background-color: var(--colorBlueMain);
  height: 8vh;
  display: flex;
  align-items: center;
  img {
    width: 2rem;
    border-radius: 50%;
    margin: 0 1.6rem;
  }
  p {
    color: var(--colorTextlight);
    font: var(--fontTitleBold);
  }
`;
