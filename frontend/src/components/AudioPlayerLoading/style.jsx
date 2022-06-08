import styled from "styled-components";

export default styled.div`
  .contain {
    display: flex;
    justify-content: space-between;
    width: 70vw;
    margin: auto;
  }
  button {
    margin: 0 40vw;
  }
  .containInput {
    display: flex;
    justify-content: center;
  }
  input[type="range"] {
    overflow: hidden;
    width: 70vw;
    -webkit-appearance: none;
    background-color: #dedfdf;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 5px;
    -webkit-appearance: none;
    color: #3692e9;
    margin-top: -1px;
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 5px;
    -webkit-appearance: none;
    height: 15px;
    cursor: ew-resize;
    background: #1c4f7e;
    box-shadow: -3000px 0 0 3000px #29abe2;
  }
`;
