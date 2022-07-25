import styled from "styled-components";

export default styled.div`
  .infos-container {
    background-color: var(--colorBlueMain);
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    h1 {
      padding: 3rem;
      color: var(--colorTextlight);
      font: var(--fontTitleBold);
    }
    img {
      width: 0.8rem;
    }
  }
  .accordion {
    width: 85vw;
    margin: 4rem auto;
  }
  .containerbutton {
    background-color: transparent;
    width: 85vw;
    border: none;
  }
  .titleCategory {
    display: flex;
    margin-left: 2rem;
    p {
      font-size: 1rem;
    }
  }
  .accordionHeading {
    padding: 1rem 0;
    border: 1px solid var(--colorBackgroundLightGrey);
    background-color: var(--colorTextlight);
    border-radius: 8px;
    height: 3vh;
  }
  .accordionHeading p {
    letter-spacing: 1.2px;
    color: var(--colorTextDarkGrey);
  }
  .accordionHeading .containerbutton {
    cursor: pointer;
  }
  .accordionContent {
    height: 0;
    opacity: 0;
    display: flex;
    overflow: hidden;
    transition: all 600ms ease-in-out;
  }
  .accordionContent.show {
    height: 15px;
    line-height: 1.6;
  }
  .accordionContent p {
    font-size: 15px;
    line-height: 1.6rem;
  }
  .for-text {
    background-color: var(--colorBackgroundLightGrey);
    padding: 2rem;
    p {
      font-size: 1rem;
      line-height: 1.6rem;
      font-family: var(--fontSecondary);
    }
  }
`;
