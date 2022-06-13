import styled from "styled-components";

export default styled.section`
  min-height: 100vh;
  .containStream {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;

    .circle {
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
      border: 1px var(--colorBlueMain) solid;
      box-shadow: 0px 0px 40px 10px #77777737;
    }
    img {
      width: 20rem;
      position: absolute;
    }
  }
  .lessonTopic {
    text-align: center;
    .lesson {
      color: #2999ff;
      font-size: 2rem;
      font-weight: bold;
      margin-top: 4rem;
    }
    .topic {
      font-size: 1.8rem;
      margin-top: 0.8rem;
    }
  }
  @media screen and (max-width: 500px) {
    .containStream {
      .circle {
        width: 22rem;
        height: 22rem;
      }
      img {
        height: 15rem;
        width: 15rem;
      }
    }
  }
`;
