import styled from "styled-components";

export default styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  button {
    margin-top: 5rem;
  }
  .submit {
    cursor: pointer;
    font-size: 1em;
    letter-spacing: 0.02857em;
    margin-top: 5rem;
    color: white;
    background-color: var(--colorBlueMain);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    padding: 12px 22px;
  }
  .submit:hover {
    background-color: #045f9b;
  }
`;
