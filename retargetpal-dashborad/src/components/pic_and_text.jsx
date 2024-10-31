import React from "react";
import styled from "styled-components";
import Img from "../common/Img";
import P from "../common/p";
import FlexBox from "../common/flex-box";

function PicAndText({ myStyle, header, comment, picNumber, picture }) {
  const styling = {
    flexBox: `
        position:relative;
        justify-content: space-around;
    `,

    img: `
        width:150px;
        height:150px;
        size:cover;
        ${picNumber === '1' ? "margin-top:-16px;" : ""}
    `,
    header: `
        font-size: 12px;
        font-weight: bold;
        color: #34376A;
        text-align: center;
        line-height: 1.25;
        margin-top:15px;
        `,
    comment: `
        margin-top:10px;
        font-size: 10px;
        color: #8c8c8c;
        line-height: 1.49;
        text-align: center;
    `,
  };

  return (
    <FlexBox myStyle={styling.flexBox} flexDirection="column">
      <PicNumber picNumber={picNumber}>{picNumber}</PicNumber>
      <Img src={picture} alt={header} myStyle={styling.img} />
      <P text={header} myStyle={styling.header} />
      <P text={comment} myStyle={styling.comment} />
    </FlexBox>
  );
}

const PicNumber = styled.span`
  width: 20px;
  height: 20px;
  font-family: Helvetica;
  font-size: 14.3px;
  font-weight: bold;
  position: absolute;
  border-radius:50%;
  color:white;
  text-align:center;
  top: ${({ picNumber }) => (picNumber === "1" ? "-16px" : "0")};
  left: -10px;
  background: ${({ picNumber }) => (picNumber === "3" ? "#34376a" : "#e87469")};
`;

export default PicAndText;
