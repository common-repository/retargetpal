import React from "react";

import FlexBox from "../../common/flex-box";
import Container from "../../common/container";
import Img from "../../common/Img";
import { IMAGES } from "../../helpers/constants";
import RightSideTargetSection from "../right_side_target_section";

function TargetSection() {
  const styling = {
    container: `
        margin:auto;
        width:75%;
        `,
    img:`
        width: 230px;
        `    
  };
  return (
    <Container myStyle={styling.container}>
      <FlexBox>
        <Img src={IMAGES.target} alt="target pic"  myStyle={styling.img}/>
        <RightSideTargetSection/>
      </FlexBox>
    </Container>
  );
}

export default TargetSection;
