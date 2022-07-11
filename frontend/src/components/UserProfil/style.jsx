import styled from "styled-components";

export default styled.div`
  background-color: var(--colorBlueMain);
  height: 30vh;
  border: 1px solid var(--colorBlueMain);
  .for-h1 {
    display: flex;
    align-items: center;
    margin: 4.5rem 2.4rem;
    width: 45vw;
    img {
      width: 0.8rem;
      padding: 0 2rem 0 0;
    }
  }
  h1 {
    color: var(--colorTextlight);
    font: var(--fontTitleBold);
  }

  .contenairname {
    display: flex;
    justify-content: flex-start;
    height: 17vh;
    width: 85vw;
    margin: auto;

    border: 1px solid var(--colorBackgroundLightGrey);
    background-color: var(--colorTextlight);
    border-radius: 8px;
  }
  .photoprofil {
    width: 6rem;
    border-radius: 50%;
    margin: 1rem;
    aspect-ratio: 1/1;
  }
  ul {
    margin-top: 5vh;
    line-height: 1.5rem;
  }
  h2 {
    color: var(--colorTextBlue);
  }

  li {
    color: var(--colorTextDarkGrey);
    letter-spacing: 1.2px;
  }
`;
