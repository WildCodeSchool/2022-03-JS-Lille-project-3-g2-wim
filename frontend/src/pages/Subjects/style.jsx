import styled from "styled-components";

export default styled.section`
  h1 {
    font: var(--fontTitleBold);
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--colorTextDarkGrey);
  }

  a {
    text-decoration: none;
  }
  .listContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .iconImg {
    padding-bottom: 1rem;
    width: 3rem;
    height: 3rem;
  }

  li {
    display: flex;
    flex-direction: column;
  }

  .topic {
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
    text-align: center;
    img {
      padding-bottom: 1rem;
      width: 4rem;
      height: 4rem;
      margin: auto;
    }
  }
  .topic:nth-child(3n-2) {
    background-color: var(--colorBlueMain);
  }
  .topic:nth-child(3n-1) {
    background-color: var(--colorTopicBlue);
  }
  .topic:nth-child(3n) {
    background-color: var(--colorTopicBlueGreen);
  }
  @media screen and (min-width: 760px) {
    .topic {
      width: 10vw;
      padding: 2vw;
    }
    .iconImg {
      padding-bottom: 2rem;
      width: 6rem;
      height: 6rem;
    }
  }
`;
