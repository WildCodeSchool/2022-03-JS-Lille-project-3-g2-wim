import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  button {
    width: 6vw;
    height: 4vh;
    background: no-repeat url(${(props) => props.img});
    background-position: center;
    background-size: contain;
    border: none;
    margin: 1.4em;
    cursor: pointer;
    //Here we use props with  styledComponent, coming from the component <SAudioPlayerControll img={playOrPauseImg}>
  }
`;
