import styled from "styled-components";

export default styled.section`
  .containStream {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35vh;
    border: 1px solid red;

    .circle {
      width: 13rem;
      height: 13rem;
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
    border: 1px solid red;
    .lesson {
      color: #2999ff;
      font-size: 2rem;
      font-weight: bold;
      border: 1px solid orange;
    }
    .topic {
      font-size: 1.8rem;
      border: 1px solid blue;
    }
  }
  @media screen and (max-width: 500px) {
    .containStream {
      .circle {
        width: 14rem;
        height: 14rem;
      }
      img {
        width: 11rem;
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
