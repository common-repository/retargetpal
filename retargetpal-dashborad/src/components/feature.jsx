import React from "react";
import FlexBox from "../common/flex-box";
import Img from "../common/Img";
import P from "../common/p";

function Feature({ src, header, comment }) {
  const styling = {
    flexBox: `
        align-items: flex-start;

        `,
    subFlexBox: `
        align-items: flex-start;
        margin-left:18px;
        `,
    img: `
        margin-top:4px;
        margin-right:15px;
        `,
    header: `
        font-size: 16px;
        font-weight: bold;
        color:#e87469;
        margin-bottom:10px;

        `,
    comment: `
         color: #34376a;
         font-size: 14px;
         line-height: 1.43;
        `,
  };
  return (
    <FlexBox myStyle={styling.flexBox}>
      <Img src={src} alt="pic" myStyle={styling.img} />
      <FlexBox flexDirection="column" myStyle={styling.subFlexBox}>
        <P text={header} myStyle={styling.header} />
        <P text={comment} myStyle={styling.comment} />
      </FlexBox>
    </FlexBox>
  );
}

export default Feature;
