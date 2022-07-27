import styled from "styled-components";

export default styled.div`
  button {
    width: 4rem;
    height: 4rem;
    background: no-repeat url(${(props) => props.imgFav});
    background-size: contain;
    border: white solid 1px;
    cursor: pointer;
  }
  @media screen and (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
