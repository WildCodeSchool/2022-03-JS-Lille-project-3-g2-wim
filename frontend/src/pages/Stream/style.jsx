import styled from "styled-components";

export default styled.section`
  margin-top: 3rem;
  .contain {
    display: flex;
    justify-content: center;
    .circle {
      width: 25rem;
      height: 25rem;
      border-radius: 50%;
      border: 1px #2999ff solid;
      box-shadow: 0px 0px 40px 10px #77777737;
    }
    img {
      margin-top: 3.5rem;
      width: 18rem;
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
`;
