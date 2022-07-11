import styled from "styled-components";

export default styled.div`
  width: 15em;
  margin: 3em;
  position: relative;
  border-radius: 0.7em;
  display: flex;
  flex-flow: column nowrap;

  img {
    position: absolute;
    margin-top: 0.5rem;
    left: -1em;
    width: 2.5em;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  p {
    text-align: center;
    margin: 0;
    padding: 1em;
  }
`;
