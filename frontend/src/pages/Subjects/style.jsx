import styled from "styled-components";

export default styled.section`
  h1 {
    font: var(--fontTitleBold);
    border-bottom: 2px solid var(--colorBackgroundMediumGrey);
    width: 80vw;
    margin: 1.8rem auto 1rem;
    padding-bottom: 0.6rem;
  }

  a {
    text-decoration: none;
  }
  .listContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 0.5rem;
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

  .listContainer {
    width: 80vw;
    margin: auto;
  }

  .topic {
    width: 4.6rem;
    height: 4.6rem;
    margin: 0.2rem 0;
    padding: 3vw;
    border-radius: var(--radiusTopic);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--colorTextlight);
    font: var(--fontTitleTopic);
    font-size: 0.7rem;
    word-wrap: break-word;
    text-align: center;
    img {
      padding-bottom: 0.6rem;
      padding-top: 0.6rem;
      width: 3rem;
      height: 3rem;
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
