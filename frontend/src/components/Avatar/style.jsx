import styled from "styled-components";

export default styled.div`
  border-radius: 0.7em;
  display: flex;
  align-items: center;

  img {
    width: 2.3em;
    aspect-ratio: 1;
    border-radius: 50%;
    padding-right: 0.8rem;
  }
  @media screen and (min-width: 760px) {
    img {
      width: 1.7em;
    }
  }
`;
