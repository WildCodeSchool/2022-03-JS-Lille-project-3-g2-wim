import styled from "styled-components";

export default styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  button {
    margin-top: 2rem;
  }
  .containerAvatar {
    display: flex;
    margin: 2rem 0 0 0;
    .input-file {
      display: none;
    }
    .label-file {
      border: 1px solid #ccc;
      display: inline-block;
      padding: 6px 12px;
      background-color: var(--colorBlueMain);
      color: white;
      line-height: 1.75;
      border-radius: 4px;
      cursor: pointer;
    }
    .label-file:hover {
      background-color: #045f9b;
    }
    .green {
      color: green;
    }
    p {
      margin: 1rem 0 0 1rem;
    }
  }
  @media only screen and (min-width: 800px) {
    width: 600px;
  }
`;
