import styled from "styled-components";

export default styled.section`
  .containStream {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;

    .circle {
      width: 16rem;
      height: 16rem;
      border-radius: 50%;
      border: 1px var(--colorBlueMain) solid;
      box-shadow: 0px 0px 40px 10px #77777737;
    }
    img {
      width: 12rem;
      position: absolute;
      border-radius: 50%;
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
        width: 16rem;
        height: 16rem;
      }
      img {
        width: 12rem;
      }
    }
    .lessonTopic {
      text-align: center;
      .lesson {
        color: #2999ff;
        font-size: 1.2rem;
        margin-top: 2rem;
      }
      .topic {
        font-size: 1.2rem;
        margin-top: 0.8rem;
      }
    }
  }
`;
