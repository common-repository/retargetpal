import React from "react";
import Button from "../common/button";
import FlexBox from "../common/flex-box";
import P from "../common/p";

function RightSideTargetSection() {
  const styling = {
    container: `
        height:230px;
        align-items: baseline;
        justify-content: space-between; 
        margin-left:25px
        `,
    first: `
        color:#34376a;
        font-size: 14px;
        line-height: 2.29;
        text-align: start;
        `,
    second: `
        color:#e87469;
        font-size: 24px;
        font-weight: bold;
        text-align: start;
        white-space: pre-wrap; 
        `,
    third: `
        font-family: OpenSans;
        font-size: 14px;
        font-weight: 600;
        color: #8c8c8c;
        text-align: start;
        white-space: pre-wrap; 
        line-height: 1.43;
        `,
    button:`
        margin-bottom:-10px;
    `,
  };
  const text = {
    first: "Get more from your current traffic",
    second: "Reach 96% of your\nwebsite visitors",
    third:
      "Most of your website visitors will not buy\nfrom you, our app will make sure they see\nyour ad across the internet and engage ",
  };
  return (
    <FlexBox myStyle={styling.container} flexDirection="column">
      <P text={text.first} myStyle={styling.first} />
      <P text={text.second} myStyle={styling.second} />
      <P text={text.third} myStyle={styling.third} />
      <Button myStyle={styling.button} />
    </FlexBox>
  );
}

export default RightSideTargetSection;
