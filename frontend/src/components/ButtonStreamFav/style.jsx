import styled from "styled-components";

export default styled.div`
  margin: 2rem 0;
  button {
    width: 4rem;
    height: 4rem;
    background: no-repeat url(${(props) => props.img});
    background-size: contain;
    border: white solid 1px;
    border-radius: 5px;
    box-shadow: #d9d7d7 -0.2rem 0.2rem 1rem;
    margin: 0 1rem;
  }
`;
