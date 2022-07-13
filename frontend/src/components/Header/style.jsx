import styled from "styled-components";

export default styled.header`
  background-color: var(--colorBlueMain);
  height: 8vh;
  display: flex;
  align-items: center;
  .avatar {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    margin: 0 1.6rem;
  }
  a {
    text-decoration: none;
    p {
      color: var(--colorTextlight);
      font: var(--fontTitleBold);
    }
  }

  @media screen and (min-width: 760px) {
    .avatar {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }
`;
