import styled from "styled-components";

export default styled.section`
  .cardOfLesson {
    display: flex;
    align-items: center;
    max-width: 100vw;
    height: 13vh;
    width: 90vw;
    margin: auto;
  }
  .play-and-infos-container {
    display: flex;
    align-items: center;
    border-bottom: 2px solid var(--colorBackgroundMediumGrey);
    height: 13vh;
    margin-right: 0.8rem;
  }
  .informations {
    width: 62vw;
  }
  .play {
    height: 3vh;
    margin-right: 1.5rem;
  }
  h1 {
    font: var(--fontTitleTopic);
    align-items: center;
    font-size: 1.1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }
  h2 {
    font: var(--fontSecondary);
    align-items: center;
    font-size: 0.9rem;
    font-weight: 100;
    color: var(--colorTextDarkGrey);
  }
  @media screen and (min-width: 760px) {
    .cardOfLesson {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
  }
`;
