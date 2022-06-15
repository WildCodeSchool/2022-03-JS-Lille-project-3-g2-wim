import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("src/assets//login/login2.png");
  background-repeat: no-repeat;
  position: fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  button {
    border-radius: 9px;
  }
  p {
    color: grey;
  }
  .tab {
    background-color: white;
    border-radius: 8px;
    width: 40%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  @media screen and (max-width: 600px) {
    background-size: cover;
    width: 100vw;
    .tab {
      width: 90%;
    }
  }
`;
