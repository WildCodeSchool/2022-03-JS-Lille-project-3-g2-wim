import styled from "styled-components";

export default styled.section`
  .containStream {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;

    .circle {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      border: 1px var(--colorBlueMain) solid;
      box-shadow: 0px 0px 40px 10px #77777737;
    }
    img {
      width: 10rem;
      position: absolute;
      border-radius: 50%;
    }
  }
  .lessonTopic {
    text-align: center;
    .lesson {
      color: #2999ff;
      font-size: 1.3rem;
      margin-top: 1rem;
      font-weight: bold;
    }
    .topic {
      font-size: 1.2rem;
      margin-top: 0.4rem;
    }
  }
  @media screen and (min-width: 760px) {
    .containStream {
      .circle {
        width: 12rem;
        height: 12rem;
      }
      img {
        width: 10rem;
      }
    }
    .lessonTopic {
      text-align: center;
      .lesson {
        color: #2999ff;
        font-size: 1.2rem;
      }
      .topic {
        font-size: 1.2rem;
        margin-top: 0.3rem;
      }
    }
  }
`;
