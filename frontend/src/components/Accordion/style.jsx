import styled from "styled-components";

export default styled.div`
  margin: 4.5rem 0;
  .accordion {
    width: 85vw;
    margin: auto;
  }
  .containerbutton {
    background-color: transparent;
    width: 85vw;
    border: none;
  }
  .logo {
    display: flex;
    img {
      padding: 0 1.5rem;
      width: 1rem;
    }
  }
  .accordionHeading {
    padding: 14px 0;
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
    line-height: 1.6;
  }
  .about {
    letter-spacing: 1.2px;
    color: var(--colorTextDarkGrey);
    text-decoration: none;
  }
`;
