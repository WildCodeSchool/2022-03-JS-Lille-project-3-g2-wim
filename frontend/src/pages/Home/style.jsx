import styled from "styled-components";

export default styled.section`
  border: 1px solid red;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .topicCard {
    width: var(--widthButtonM);
    margin: 1vw;
    padding: 1vw;
    background-color: var(--colorBlueMain);
    border-radius: var(--radusTopic);
    text-align: center;
    color: var(--colorTextlight);
  }
`;
