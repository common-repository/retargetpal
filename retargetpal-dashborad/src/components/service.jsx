import React from "react";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

import FlexBox from "../common/flex-box";
import P from "../common/p";

export default function Service({ text }) {
  const styling = {
    flexBox: `
        justify-content: flex-start;
        `,
    p: `
        font-size: 10px;
        padding-left:17px;
        `,
  };
  return (
    <FlexBox myStyle={styling.flexBox}>
      <CheckCircleOutlineRoundedIcon />
      <P text={text} myStyle={styling.p} />
    </FlexBox>
  );
}
