import styled from "styled-components";

export default styled.div`
  margin: 2rem 0;
  button {
    width: 2.2rem;
    height: 2.2rem;
    background: no-repeat url(${(props) => props.imgFav});
    background-size: contain;
    border: white solid 1px;
    margin: 0 1rem;
    position: absolute;
    right: 20px;
  }
`;
