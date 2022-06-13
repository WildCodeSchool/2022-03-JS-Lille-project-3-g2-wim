import styled from "styled-components";

export default styled.section`
  h1 {
    font: var(--fontTitleBold);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--colorTextDarkGrey);
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  li {
    width: var(--widthButtonM);
    margin: 1vw;
    padding: 1vw;
    border-radius: var(--radusTopic);
    text-align: center;
    color: var(--colorTextlight);
    font: var(--fontTitleTopic);
    word-wrap: break-word;
  }
  li:nth-child(3n-2) {
    background-color: var(--colorBlueMain);
  }
  li:nth-child(3n-1) {
    background-color: var(--colorTopicBlue);
  }
  li:nth-child(3n) {
    background-color: var(--colorTopicBlueGreen);
  }
  //Améliorer en précisant commenet gérer si le texte ne s'affiche pas en entier / Changer la taille du texte

  @media screen and (min-width: 760px) {
    li {
      width: 10vw;
    }
  }
`;
