import styled from "styled-components";

export default styled.div`
  button {
    width: 4rem;
    height: 4rem;
    background: no-repeat url(${(props) => props.img});
    background-size: contain;
    border: white solid 1px;
    border-radius: 5px;
    margin: 1rem;
    box-shadow: #d9d7d7 -0.2rem 0.2rem 1rem;
  }
`;
