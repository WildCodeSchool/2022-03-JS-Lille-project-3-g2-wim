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
    flex-wrap: wrap;
    justify-content: center;
  }
  li {
    width: 25vw;
    height: 13vh;
    margin: 1vw;
    padding: 3vw;
    border-radius: var(--radiusTopic);
    display: flex;
    align-items: center;
    justify-content: center;
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
  @media screen and (min-width: 760px) {
    li {
      width: 10vw;
      padding: 2vw;
    }
  }
`;
