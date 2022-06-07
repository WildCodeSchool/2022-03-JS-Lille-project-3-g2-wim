import styled from "styled-components";

export default styled.div`
  button {
    color: red;
    width: 5vw;
    height: 5vh;
    background: no-repeat url(${(props) => props.img});
    background-size: contain;
    border: none;
    //Here we use props with  styledComponent, coming from the component <SAudioPlayerControll img={playOrPauseImg}>
  }
`;
