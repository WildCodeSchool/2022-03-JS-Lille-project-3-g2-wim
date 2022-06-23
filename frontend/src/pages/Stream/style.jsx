import styled from "styled-components";

export default styled.section`
  .globalbContainer {
    height: 86vh;
  }

  .containStream {
    margin-top: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      border: 1px var(--colorBlueMain) solid;
      box-shadow: 0px 0px 40px 10px #77777737;
    }
    img {
      width: 16rem;
      position: absolute;
    }
  }
  .lessonTopic {
    margin-top: 8vh;
    text-align: center;
    .lesson {
      color: #2999ff;
      font-size: 2rem;
      font-weight: bold;
    }
    .topic {
      font-size: 1.8rem;
      margin-top: 0.8rem;
    }
  }

  @media screen and (max-width: 500px) {
    .globalbContainer {
      height: 86vh;
    }
    .containStream {
      margin-top: 2vh;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle {
        width: 14rem;
        height: 14rem;
        border-radius: 50%;
        border: 1px var(--colorBlueMain) solid;
        box-shadow: 0px 0px 40px 10px #77777737;
      }
      img {
        width: 10rem;
        position: absolute;
      }
    }
    .lessonTopic {
      margin-top: 2vh;
      text-align: center;
      .lesson {
        color: #2999ff;
        font-size: 1.2rem;
        font-weight: bold;
      }
      .topic {
        font-size: 1rem;
        margin-top: 0rem;
      }
    }
  }
`;
