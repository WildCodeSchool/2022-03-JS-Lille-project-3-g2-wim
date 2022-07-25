import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  article {
    border: 1px solid black;
    display: flex;
    justify-content: space-around;
    h3 {
      font-size: 0.8em;
      text-align: center;
    }
    ul {
      display: flex;
      li {
        list-style: none;
        padding: 0.3em;
        font-size: 0.8em;
      }
      span {
        padding: 1em;
      }
    }
  }
`;
