import styled from "styled-components";

export default styled.div`
  margin: 2rem 0;
  button {
    width: 6rem;
    height: 6rem;
    background: no-repeat url(${(props) => props.img});
    background-size: contain;
    border: white solid 1px;
    margin: 0 1rem;
  }
`;
