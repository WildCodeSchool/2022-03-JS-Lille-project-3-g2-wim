import styled from "styled-components";

export default styled.div`
  .contain {
    display: flex;
    justify-content: space-between;
    width: 70vw;
    margin: auto;
  }
  .favDownloadContainer {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14vh;
  }
  .containInput {
    display: flex;
    justify-content: center;
    width: 70vw;
    margin: auto;
  }

  .containButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
  }
  @media screen and (min-width: 760px) {
    .favDownloadContainer {
      margin-top: 0rem;
    }
    .containInput {
      width: 50vw;
    }
    .contain {
      margin-top: -1.4rem;
      font-size: 1.2rem;
      width: 50vw;
    }
  }
`;
