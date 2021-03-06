import styled from "styled-components";

export default styled.section`
  margin-bottom: 12vh;
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
    justify-content: flex-start;
    padding-top: 0.5rem;
    width: 80vw;
    margin: auto;
    gap: 0.3rem;
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
    margin-bottom: 17vh;
    h1 {
      width: 60vw;
    }
    .listContainer {
      width: 60vw;
      gap: 0.8rem;
    }
    .topic {
      width: 13vw;
      padding: 3vw;
      margin: 0.5rem 0;
      height: 20vh;
    }
    .iconImg {
      padding-bottom: 2rem;
      width: 9rem;
    }
    p {
      font-size: 1.1rem;
      margin: 0.3rem 0;
    }
    .topic {
      font-size: 1rem;
      img {
        width: 4.6rem;
        height: 4.6rem;
      }
    }
  }
`;
