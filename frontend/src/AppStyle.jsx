import styled from "styled-components";

export default styled.div`

@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=Poppins&display=swap');
//VARIABLES DEFINITION
  --colorBlueMain: #29abe2;
  --colorTopicBlue: #00c3e3;
  --colorTopicBlueGreen: #00d8cf;
  --colorTopicGreen: #55e9ae;
  --colorTextlight: white;
  --colorTextBlue: #29abe2;
  --colorTextDarkBlue: #515c6f;
  --colorTextDarkGrey: #767676;
  --colorBackgroundMain: white;
  --colorBackgroundLightBlue: #e6fcf3;
  --colorBackgroundLightGrey: #f3f3f3;
  --colorBackgroundMediumGrey: #d8dadb;
  --colorBackgroundCancel: #f05151;
  
  --fontMain: 1.5rem 'Poppins', sans-serif ;
  --fontSecondary: 1rem 'Poppins', sans-serif ;
  --fontTitleBold: bold 1.75rem 'Poppins', sans-serif  ;
  --fontTitleTopic: bold 1.25rem 'Poppins', sans-serif ;
  --fontTitleXL: 2.5rem 'Poppins', sans-serif ;
  
  //We redefine font size smaller for mobile
  @media screen and (max-width: 760px) {
    --fontMain: 1rem 'Poppins', sans-serif ;
  --fontSecondary: 0.85rem 'Poppins', sans-serif ;
  --fontTitleBold: bold 1.25rem 'Poppins', sans-serif  ;
  --fontTitleTopic: rem 'Poppins', sans-serif ;
  --fontTitleXL: 2rem 'Poppins', sans-serif ;
  }

  --radiusButton: 8px;
  --radusTopic: 22px;
  --shadowButton: 0px 1px 5px #00000030;
  --shadowImg: 0px 3px 20px #00000020;
  --borderButton : 2px solid #29abe2;
  
  --widthButtonXL : 80vw;
  --widthButtonL : 40vw;
  --widthButtonM : 26vw;
  --widthButtonS : 20vw;
  --heightButton : 6vh;
  --heightButtonTopic : 13vh: 

  background-color: var( --colorBackgroundMain);
  font: var(--fontMain);
  box-sizing: border-box;

`;
