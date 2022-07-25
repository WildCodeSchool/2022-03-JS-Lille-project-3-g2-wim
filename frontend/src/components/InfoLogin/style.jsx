import styled from "styled-components";

export default styled.div`
  background: var(--colorBackgroundLightGrey);
  .registerForm {
    display: flex;
    flex-direction: column;
  }
  .inputForm {
    border: none;
    border-bottom: 1px solid var(--colorTextDarkGrey);
    background: var(--colorBackgroundLightGrey);
    margin: 1.2rem 0;
    width: 70vw;
  }
  .button {
    width: 15vw;
    margin: auto;
    background-color: var(--colorBlueMain);
    border: none;
    border-radius: 8px;
    margin-bottom: 1rem;
    color: var(--colorTextlight);
  }
  .containerName {
    display: flex;
    flex-direction: column;
    margin: auto;
    font: var(--fontMain);
    color: var(--colorTextDarkGrey);
  }
`;
