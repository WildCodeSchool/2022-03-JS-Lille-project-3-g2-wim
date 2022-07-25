import styled from "styled-components";

export default styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  font-family: "Roboto", sans-serif;
  display: flex;
  article {
    display: flex;

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
