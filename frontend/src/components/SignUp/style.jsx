import styled from "styled-components";

export default styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  button {
    margin-top: 2rem;
  }
  .inputAvatar {
    background-color: var(--colorBlueMain);
    color: white;
  }
  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    background-color: var(--colorBlueMain);
    color: white;
    line-height: 1.75;
    border-radius: 4px;
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    width: 600px;
  }
`;
